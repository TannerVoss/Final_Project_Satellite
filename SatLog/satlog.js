const liveSatellite = [{
    id: 1,
    title: "1 44238U 19029D   21349.40785262  .00005641  00000+0  28092-3 0  9994 &#10 2 44238  52.9961 241.1340 0002909  98.2402 261.8922 15.19025283141816",
}, ];

class LiveSatellite {
    constructor(id, name) {
        this.id = id;
        this.title = title;
    }
}
class SatList {
    constructor() {
        this.nextId = liveSatellite.length;
        this.liveSatellite = liveSatellite;
    }
    addSatellite() {
        const title = document.getElementById("title");
        this.nextId++;

        const newSat = new LiveSatellite(this.nextId, title.value);
        this.liveSatellite.push(newLiveSatellite);

        const tbody = document.getElementById("tableBody");
        const newTr = document.createElement("tr");
        const newTitle = document.createElement("td");
        const newAuthor = document.createElement("td");
        const newRead = document.createElement("td");

        newTitle.textContent = title.value;
        newTr.appendChild(newTitle);
        tbody.appendChild(newTr);
    }
}
const satList = new SatList(liveSatellite);
const form = document.getElementById("form");

form.addEventListener("submit", (event) => {
    event
    event.preventDefault();
    library.addSatellite();
});