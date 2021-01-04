require('dotenv').config();
const request = require('postman-request');

const url = `http://api.weatherstack.com/current?access_key=${process.env.WEATHERSTACK_API}&query=37.8267,-122.4233&units=f`;

request({ url, json: true }, (err, res, body) => {
  console.log(
    `${body.current.weather_descriptions[0]}. It is currently ${body.current.temperature} degrees outside. It feels like ${body.current.feelslike} degress out.`
  );
});
