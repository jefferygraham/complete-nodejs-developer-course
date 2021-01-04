require('dotenv').config();
const request = require('postman-request');

const weatherstackUrl = `http://api.weatherstack.com/current?access_key=${process.env.WEATHERSTACK_API}&query=37.8267,-122.4233&units=f`;

request({ url: weatherstackUrl, json: true }, (err, res, body) => {
  console.log(
    `${body.current.weather_descriptions[0]}. It is currently ${body.current.temperature} degrees outside. It feels like ${body.current.feelslike} degress out.`
  );
});

const mapboxUrl = `https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=${process.env.MAPBOX_API}&limit=1`;

request({ url: mapboxUrl, json: true }, (err, res, body) => {
  const latitude = body.features[0].center[1];
  const longitude = body.features[0].center[0];
  console.log(latitude, longitude);
});
