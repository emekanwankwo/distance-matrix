# node-distance-matrix
A distance matrix package that consumes [Google Distance Matrix API](https://developers.google.com/maps/documentation/distance-matrix/start) to get distances between locations


### How To Use
Install the package using:

`npm install node-distance-matrix --save`

Require and initialize the package using:

- const `NodeDistanceMatrix = require('node-distance-matrix);`

Access the getDistanceMatrix method using

-  `const distanceMatrix = NodeDistanceMatrix.getDistanceMatrix(apiKey, origin, destination, mode);`

**apiKey** is the google console key for your project.

**origin** is the start location for the distance, which can be an address or a latitude/longitude, it can also be an array of locations.

**destination** is the end location, which can be an address or a latitude/longitude, it can also be an array of locations.

**mode** is the mode of transportation, it can be driving (default), walking or bicycling.

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

### Author:

[Ethan Nwankwo](https://github.com/andela-cnwankwo)