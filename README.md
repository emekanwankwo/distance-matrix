# node-distance-matrix
A distance matrix package that consumes [Google Distance Matrix API](https://developers.google.com/maps/documentation/distance-matrix/start) to get distances between locations


### How To Use
Install the package using:

`npm install node-distance-matrix --save`

Require and initialize the package using:

- const `NodeDistanceMatrix = require('node-distance-matrix);`

Access the `getDistanceMatrix` method using

-  `const distanceMatrix = NodeDistanceMatrix.getDistanceMatrix(apiKey, origin, destination, mode, unitType);`

Access the `getDistanceMatrixWithTraffic` method using

-  `const distanceMatrixWithTraffic = NodeDistanceMatrix.getDistanceMatrixWithTraffic(apiKey, origin, destination, departure_time, unitType);`

**apiKey** is the google console key for your project.

**origin** is the start location for the distance, which can be an address or a latitude/longitude, it can also be an array of locations.

**destination** is the end location, which can be an address or a latitude/longitude, it can also be an array of locations.

**mode** is the mode of transportation, it can be driving (default), walking or bicycling.

**departure_time** is a date integer in seconds since midnight, January 1, 1970 UTC

**unitType** is the unit for calculating the distance matrix, it can be imperial (default), or metric. 

Access the distance data using a thenable:

`distanceMatrix.then(response => { console.log(response.data) });`

#### To access the sample mock response for the package, use:

`const mockDistanceMatrix = NodeDistanceMatrix.getMockDistanceMatrix();`

Then,

`mockDistanceMatrix.then(response => { console.log(response.data) });`

#### Using Async/Await
To access the distance matrix using async/await method, use the folowing method.
```
import DistanceMatrix from 'node-distance-matrix';

const getDistanceMatrix = async () => {
  const distanceMatrix = await DistanceMatrix.getDistanceMatrix(apikey, origin, destination);
  console.log(distanceMatrix.data);
}
```

#### Return Traffic Data
To access the distance matrix with traffic data, specify a departure_time as an integer in seconds. We use the `getDistanceMatrixWithTraffic` method.
```
import DistanceMatrix from 'node-distance-matrix';

const dateInteger = Date.parse('November 1, 2020');

const getDistanceMatrixWithTraffic = async () => {
  const distanceMatrixWithTraffic = await DistanceMatrix.getDistanceMatrixWithTraffic(apikey, origin, destination, dateInteger);
  console.log(distanceMatrixWithTraffic.data);
}
```

### Contributors:

- [Ethan Nwankwo](https://github.com/andela-cnwankwo)
- [Victor Nwaiwu](https://github.com/vonvick)