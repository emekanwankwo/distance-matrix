const DistanceMatrix = require('./build/distanceMatrixService');

module.exports = {
  getDistanceMatrix: DistanceMatrix.getDistanceMatrix,
  getMockDistanceMatrix: DistanceMatrix.getMockDistanceMatrix,
  getDistanceMatrixWithTraffic: DistanceMatrix.getDistanceMatrixWithTraffic
}