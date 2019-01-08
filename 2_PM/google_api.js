// TODO - create client object for Google API connection which can be exported
const config = require("./config.js");

const googleMapsClient = require('@google/maps').createClient({
    key: config.apiKey
  });

module.exports = googleMapsClient;