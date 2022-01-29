const request = require('request');

const geocode = (address, cb) => {
  const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(
    address
  )}.json?access_token=pk.eyJ1IjoiZ3JhaGFtajc4IiwiYSI6ImNreWpsMzZmbDEzaXAydm9scXRrZG5jOWsifQ.E1i6aSQkNUKZ80CytaYt0g&limit=1`;

  request({ url, json: true }, (err, { body }) => {
    if (err) {
      cb('Cannot connect to location service.', undefined);
    } else if (body.features.length === 0) {
      cb(
        'Location not found. Try again with different search term.',
        undefined
      );
    } else {
      const latitude = body.features[0].center[1];
      const longitude = body.features[0].center[0];
      const location = body.features[0].place_name;
      cb(undefined, {
        latitude,
        longitude,
        location,
      });
    }
  });
};

module.exports = geocode;
