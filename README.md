# node-distance-matrix
A distance matrix package that consumes Google Distance Matrix api to get distances between locations


### How To Use
require the package in your application using:

- install the package using npm `npm install node-distance-matrix`

Require and initialize the package using:

- const `NodeDistanceMatrix = require('node-distance-matrix);`

Access the getDistanceMatrix method using

-  `const distanceMatrix = NodeDistanceMatrix.getDistanceMatrix(apiKey, origin, destination);`

**apiKey** is the google console key for your project.

**origin** is the start location for the distance, which can be an address or a latitude/longitude, it can also be an array of locations.

**destination** is the end location, which can be an address or a latitude/longitude, it can also be an array of locations.

Access the distance data using a thenable:

`distanceMatrix.then(response => { console.log(response) });`

To access the sample response for the locations, use:

`const mockDistanceMatrix = NodeDistanceMatrix.getMockDistanceMatrix();`

Then,

`mockDistanceMatrix.then(response => { console.log(response) });`

Author:

[Ethan Nwankwo](https://github.com/andela-cnwankwo)