const request = require('request');

const weatherStackUrl =
  'http://api.weatherstack.com/current?query=37.8267,-122.4233&units=f&access_key=3879f8facba66fdbe9165f48a5693fb8';

const mapBoxUrl =
  'https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1IjoiZ3JhaGFtajc4IiwiYSI6ImNreWpsMzZmbDEzaXAydm9scXRrZG5jOWsifQ.E1i6aSQkNUKZ80CytaYt0g&limit=1';

request({ url: weatherStackUrl, json: true }, (error, response) => {
  const weatherData = response.body.current;
  const currentTemp = weatherData.temperature;
  const feelsLike = weatherData.feelslike;
  const weatherDescription = weatherData.weather_descriptions[0];

  console.log(
    `${weatherDescription}. It is currently ${currentTemp} degrees out. It feels like ${feelsLike} degrees out.`
  );
});

request({ url: mapBoxUrl, json: true }, (err, res) => {
  const latitude = res.body.features[0].center[1];
  const longitude = res.body.features[0].center[0];
  console.log(latitude, longitude);
});
