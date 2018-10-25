const axios = require('axios');
const mockDistanceResponse = require('../mock/mock-distance.json');

/**
 * getDistance method for getting the distance using google distance matrix
 * @param {*} apiKey google console apiKey
 * @param {*} origins a single origin or array of origins
 * @param {*} destinations a single destination or array of destinations
 *  @param {*} mode the mode of travel to be used (driving, walking, bicycling)
 */
const getDistanceMatrix = async (apiKey, origins, destinations, mode = 'driving') => {
  // Check if there are multiple origins and/or destinations
  let tripOrigins = origins, tripDestinations = destinations;
  const reducer = (accumulator, currentValue) => `${accumulator}|${currentValue}`;
  if(Array.isArray(origins)) {
    tripOrigins = origins.reduce(reducer);
  }

  if(Array.isArray(destinations)) {
    tripDestinations = destinations.reduce(reducer);
  }
  const distanceUrl = `https://maps.googleapis.com/maps/api/distancematrix/json?units=imperial&origins=${tripOrigins}&destinations=${tripDestinations}&mode=${mode}&key=${apiKey}`
    // Use google distance matrix APi for dev and production
    const distanceMatrixResponse = {};
    const distanceMatrix = axios.get(distanceUrl)
      .then(response => {
        return response;
      })
      .catch(err => {
        return err;
      });
    return await distanceMatrix;
}

/**
 * getMockDistanceMatrix method for getting a sample distance matrix response
 */
const getMockDistanceMatrix = async () => {
    const body = {};
    body.data = mockDistanceResponse;
    return body;
}

module.exports = {
  getDistanceMatrix,
  getMockDistanceMatrix
};
