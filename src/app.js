const path = require('path');
const express = require('express');
const hbs = require('hbs');

const app = express();

// Define paths for Express config
const publicDirectoryPath = path.join(__dirname, '../public');
const viewsPath = path.join(__dirname, '../templates/views');
const partialsPath = path.join(__dirname, '../templates/partials');

// Setup handlebars engine and views location
app.set('view engine', 'hbs');
app.set('views', viewsPath);
hbs.registerPartials(partialsPath);

// Setup static directory to serve
app.use(express.static(publicDirectoryPath));

app.get('', (req, res) => {
  res.render('index', {
    title: 'Weather',
    name: 'Bartek Mogielnicki',
  });
});

app.get('/about', (req, res) => {
  res.render('about', {
    title: 'About me',
    name: 'Bartek Mogielnicki',
  });
});

app.get('/help', (req, res) => {
  res.render('help', {
    title: 'Help',
    name: 'Bartek Mogielnicki',
    message: 'This is a test message on the help page.',
  });
});

app.get('/weather', (req, res) => {
  res.send({
    location: 'Warsaw',
    forecast: 'Sunny. Temperature is 15 degress.',
  });
});

app.get('/help/*', (req, res) => {
  res.render('404', {
    title: 'Error 404',
    message: 'Help article not found.',
    name: 'Bartek Mogielnicki',
  });
});

app.get('*', (req, res) => {
  res.render('404', {
    title: 'Error 404',
    message: 'Page not found.',
    name: 'Bartek Mogielnicki',
  });
});

app.listen(3000, () => {
  console.log('Server is up on port 3000.');
});
