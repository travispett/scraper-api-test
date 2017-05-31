'use strict';
const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 1337;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(logScraperData);

app.post('/able_to_login', (req, res) => res.send('ok'));
app.post('/latest_billing', (req, res) => res.send('ok'));
app.post('/billings', (req, res) => res.send('ok'));
app.post('/onboarding', (req, res) => res.send('ok'));

app.listen(port, () => console.log(`App listening on ${port}`));

function logScraperData(req, res, next) {
  console.log(`creating ${req.originalUrl.replace('/', '')} job with data: `);
  console.log(req.body);
  next();
}
