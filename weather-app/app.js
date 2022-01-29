const geocode = require('./utils/geocode');
const forecast = require('./utils/forecast');

const location = process.argv[2];

if (location) {
  geocode(location, (err, { latitude, longitude, location } = {}) => {
    if (err) {
      return console.log(err);
    }

    forecast(latitude, longitude, (err, forecastData) => {
      if (err) {
        return console.log(err);
      }

      console.log('Location:', location);
      console.log('Forecast:', forecastData);
    });
  });
} else {
  console.log('Please add location');
}
