/* TODO: Write a program which takes in a place name via the command line and 
/ returns the following string, formatted with the appropriate values:

'INPUTTED_PLACE is located at coordinates RETURNED_COORDINATES, at the address RETURNED_ADDRESS.' */
const googleMapsClient = require("./google_api.js");

googleMapsClient.geocode({
    address: process.argv[2]
  }, function(err, response) {
    if (!err) {
      googleMapsClient.place({
          placeid: response.json.results[0].place_id, 
      }, function(err, response) {
          if (!err) {
              const coord = response.json.result.geometry.location;
              const address = response.json.result.formatted_address;
              console.log(`${process.argv[2]} is located at coordinates ${coord.lat}, ${coord.lng} at the address ${address}.`);
          }
      });
    }
  });