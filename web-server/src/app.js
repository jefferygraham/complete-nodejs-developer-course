const path = require('path');

const express = require('express');
const hbs = require('hbs');

const app = express();

// define path for express config
const publicDirectoryPath = path.join(__dirname, '../public');
const viewsPath = path.join(__dirname, '../templates/views');
const partialsPath = path.join(__dirname, '../templates/partials');

// setup hbs engine & views location
app.set('view engine', 'hbs');
app.set('views', viewsPath);
hbs.registerPartials(partialsPath);

// setup static directory to serve
app.use(express.static(publicDirectoryPath));

app.get('', (req, res) => {
  res.render('index', {
    title: 'Weather',
    name: 'jeff graham',
  });
});

app.get('/about', (req, res) => {
  res.render('about', {
    title: 'About Me',
    name: 'jeff graham',
  });
});

app.get('/help', (req, res) => {
  res.render('help', {
    title: 'Help',
    message: 'Example message',
    name: 'jeff graham',
  });
});

app.get('/weather', (req, res) => {
  res.send({
    forecast: '29 degress',
    location: 'Capitol Heights, MD',
  });
});

app.get('/help/*', (req, res) => {
  res.render('404', {
    title: '404',
    name: 'jeff graham',
    errMsg: 'Help article not found',
  });
});

app.get('*', (req, res) => {
  res.render('404', {
    title: '404 Error',
    name: 'jeff graham',
    errMsg: 'Page not found',
  });
});

app.listen(3000, () => {
  console.log('Server is up on port 3000');
});
