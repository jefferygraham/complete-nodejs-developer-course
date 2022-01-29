const request = require('request');

const forecast = (lat, long, cb) => {
  const url = `http://api.weatherstack.com/current?access_key=3879f8facba66fdbe9165f48a5693fb8&query=${lat},${long}&units=f`;

  request({ url, json: true }, (err, { body }) => {
    if (err) {
      cb('Unable to connect to weather service.', undefined);
    } else if (body.error) {
      cb('Unable to find location.', undefined);
    } else {
      const weatherData = body.current;
      const currentTemp = weatherData.temperature;
      const feelsLike = weatherData.feelslike;
      const weatherDescription = weatherData.weather_descriptions[0];
      cb(
        undefined,
        `${weatherDescription}. It is currently ${currentTemp} degrees out. It feels like ${feelsLike} degrees out.`
      );
    }
  });
};

module.exports = forecast;
