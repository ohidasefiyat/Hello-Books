//express file

const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');

//setting up express app
const app = express();

//logging request to console

app.use(logger('dev'));

// Parse incoming requests data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

//required routes into the app
require('./server/index')(app);

// Setup a default catch-all route that sends back a welcome message in JSON format.
app.get('*', (req, res) => res.status(200).send({
  message: 'Welcome to online library service',
}));

module.exports = app;