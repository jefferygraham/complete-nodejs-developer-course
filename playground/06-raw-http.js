const http = require('http');

const url =
  'http://api.weatherstack.com/current?access_key=3879f8facba66fdbe9165f48a5693fb8&query=40,-75&units=f';

const request = http.request(url, (res) => {
  let data = '';

  res.on('data', (chunk) => {
    data += chunk.toString();
  });

  res.on('end', () => {
    const body = JSON.parse(data);
    console.log(body);
  });
});

request.on('err', (err) => {
  console.log(err);
});

request.end();
