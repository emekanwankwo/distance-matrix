const axios = require('axios');
const mockDistanceResponse = require('../mock/mock-distance.json');

/**
 * getDistanceMatrix method for getting the distance using google distance matrix
 * @param {*} apiKey google console apiKey
 * @param {*} origins a single origin or array of origins
 * @param {*} destinations a single destination or array of destinations
 *  @param {*} mode the mode of travel to be used (driving, walking, bicycling)
 */
const getDistanceMatrix = async (apiKey, origins, destinations, mode = 'driving', unitType = 'imperial') => {
  // Check if there are multiple origins and/or destinations
  let tripOrigins = origins, tripDestinations = destinations;
  const reducer = (accumulator, currentValue) => `${accumulator}|${currentValue}`;
  if(Array.isArray(origins)) {
    tripOrigins = origins.reduce(reducer);
  }

  if(Array.isArray(destinations)) {
    tripDestinations = destinations.reduce(reducer);
  }
  const distanceUrl = `https://maps.googleapis.com/maps/api/distancematrix/json?units=${unitType}&origins=${tripOrigins}&destinations=${tripDestinations}&mode=${mode}&key=${apiKey}`
    // Use google distance matrix API
    //@TODO: Tailor response to be more specific
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
 * getDistanceMatrixWithTraffic method for getting the distance with traffic
 * @param {*} apiKey google console apiKey
 * @param {*} origins a single origin or array of origins
 * @param {*} destinations a single destination or array of destinations
 *  @param {*} departure_time The desired time of departure. You can specify the time as an integer in seconds since midnight, January 1, 1970 UTC
 */
const getDistanceMatrixWithTraffic = async (apiKey, origins, destinations, departure_time='now', unitType = 'imperial') => {
  // Check if there are multiple origins and/or destinations
  let mode = 'driving';
  let tripOrigins = origins, tripDestinations = destinations;
  const reducer = (accumulator, currentValue) => `${accumulator}|${currentValue}`;
  if(Array.isArray(origins)) {
    tripOrigins = origins.reduce(reducer);
  }

  if(Array.isArray(destinations)) {
    tripDestinations = destinations.reduce(reducer);
  }
  const distanceUrl = `https://maps.googleapis.com/maps/api/distancematrix/json?units=${unitType}&origins=${tripOrigins}&destinations=${tripDestinations}&mode=${mode}&departure_time=${departure_time}&key=${apiKey}`
    // Use google distance matrix API
    //@TODO: Tailor response to be more specific
    const distanceMatrixWithTraffic = axios.get(distanceUrl)
      .then(response => {
        return response;
      })
      .catch(err => {
        return err;
      });
    return await distanceMatrixWithTraffic;
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
  getMockDistanceMatrix,
  getDistanceMatrixWithTraffic
};
