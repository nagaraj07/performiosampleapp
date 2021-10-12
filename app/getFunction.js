var express = require('express');
var app = express();

const version = '1.0';
const description = 'pre-interview technical test';
const lastcommitsha = 'abc57858585';

app.get('/', function (req, res) {
  res.status(200).send('Hello World!');
});

app.get('/app/v1', (req, res) => {
    const data = {
      version: version,
      description: description,
      lastcommitsha: lastcommitsha,
      // date: new Date()
    }
    res.status(200).send(data);
});

module.exports = app