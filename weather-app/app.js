require('dotenv').config();
const request = require('postman-request');

const url = `http://api.weatherstack.com/current?access_key=${process.env.WEATHERSTACK_API}&query=37.8267,-122.4233`;

request(url, (err, res, body) => {
  const data = JSON.parse(body);
  console.log(data.current);
});
