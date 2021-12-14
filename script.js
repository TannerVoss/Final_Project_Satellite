const viewer = new Cesium.Viewer("cesiumContainer", {
  imageryProvider: new Cesium.TileMapServiceImageryProvider({
    url: Cesium.buildModuleUrl("Assets/Textures/NaturalEarthII"),
  }),
  baseLayerPicker: false,
  geocoder: false,
  homeButton: false,
  infoBox: false,
  navigationHelpButton: false,
  sceneModePicker: false,
});
viewer.scene.globe.enableLighting = true;

const StarLink_24 = `1 44238U 19029D   21346.90763308  .00004453  00000+0  22516-3 0  9998
2 44238  52.9966 252.5934 0002926  91.7992 268.3337 15.18994418139775`;

const StarLink_61 = `1 44249U 19029Q   21346.91315657  .00007162  00000+0  29556-3 0  9992
2 44249  52.9815 219.9970 0003007 261.3398  98.7258 15.25099811140920`;

const satrec = satellite.twoline2satrec(
  StarLink_24.split("\n")[0].trim(),
  StarLink_24.split("\n")[1].trim(),
  StarLink_61.split("\n")[0].trim(),
  StarLink_61.split("\n")[1].trim()
);

const totalSeconds = 60 * 60 * 6;
const timestepInSeconds = 10;
const start = Cesium.JulianDate.fromDate(new Date());
const stop = Cesium.JulianDate.addSeconds(
  start,
  totalSeconds,
  new Cesium.JulianDate()
);
viewer.clock.startTime = start.clone();
viewer.clock.stopTime = stop.clone();
viewer.clock.currentTime = start.clone();
viewer.timeline.zoomTo(start, stop);
viewer.clock.multiplier = 40;
viewer.clock.clockRange = Cesium.ClockRange.LOOP_STOP;

const positionsOverTime = new Cesium.SampledPositionProperty();
for (let i = 0; i < totalSeconds; i += timestepInSeconds) {
  const time = Cesium.JulianDate.addSeconds(start, i, new Cesium.JulianDate());
  const jsDate = Cesium.JulianDate.toDate(time);

  const positionAndVelocity = satellite.propagate(satrec, jsDate);
  const gmst = satellite.gstime(jsDate);
  const p = satellite.eciToGeodetic(positionAndVelocity.position, gmst);

  const position = Cesium.Cartesian3.fromRadians(
    p.longitude,
    p.latitude,
    p.height * 1000
  ); // Pull Position from SatelliteJS
  positionsOverTime.addSample(time, position);
}

function getBase64Image(img) {
  var canvas = document.createElement("canvas");
  canvas.width = img.width;
  canvas.height = img.height;
  var ctx = canvas.getContext("2d");
  ctx.drawImage(img, 0, 0);
  return canvas.toDataURL("image/png");
}

let img = new Image();
img.width = 150;
img.height = 150;
img.src = "./satelliteicon.jpg";
img.setAttribute("crossOrigin", "anonymous");

console.log(getBase64Image(img))
img.src = getBase64Image(img);

const satellitePoint = viewer.entities.add({
  position: positionsOverTime,
  billboard: {
    image: img,
  },
});

viewer.trackedEntity = satellitePoint;

let initialized = false;
viewer.scene.globe.tileLoadProgressEvent.addEventListener(() => {
  if (!initialized && viewer.scene.globe.tilesLoaded === true) {
    viewer.clock.shouldAnimate = true;
    initialized = true;
    viewer.scene.camera.zoomOut(7000000);
  }
});

viewer.trackedEntity = satellitePoint;
