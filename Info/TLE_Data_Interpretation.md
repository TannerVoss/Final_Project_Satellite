ISS (ZARYA)             
1 25544U 98067A   21347.54724383  .00000803  00000+0  22775-4 0  9990
2 25544  51.6408 175.8468 0004175 305.4401 151.6978 15.48960855316399

1 NNNNNU NNNNNAAA NNNNN.NNNNNNNN +.NNNNNNNN +NNNNN-N +NNNNN-N N NNNNN
2 NNNNN NNN.NNNN NNN.NNNN NNNNNNN NNN.NNNN NNN.NNNN NN.NNNNNNNNNNNNNN

Line 1 of data:
Column	Description
01	    Line Number of Element Data
03-07	Satellite Number
08  	Classification (U=Unclassified)
10-11	International Designator (Last two digits of launch year)
12-14	International Designator (Launch number of the year)
15-17	International Designator (Piece of the launch)
19-20	Epoch Year (Last two digits of year)
21-32	Epoch (Day of the year and fractional portion of the day)
34-43	First Time Derivative of the Mean Motion
45-52	Second Time Derivative of Mean Motion (Leading decimal point assumed)
54-61	BSTAR drag term (Leading decimal point assumed)
63	    Ephemeris type
65-68	Element number
69	    Checksum (Modulo 10)(Letters, blanks, periods, plus signs = 0; minus signs = 1)

Line 2
Column	Description
01	    Line Number of Element Data
03-07	Satellite Number
09-16	Inclination [Degrees]
18-25	Right Ascension of the Ascending Node [Degrees]
27-33	Eccentricity (Leading decimal point assumed)
35-42	Argument of Perigee [Degrees]
44-51	Mean Anomaly [Degrees]
53-63	Mean Motion [Revs per day]
64-68	Revolution number at epoch [Revs]
69	    Checksum (Modulo 10)