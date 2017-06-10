'use strict';
const express = require('express');
const bodyParser = require('body-parser');

const Actions = require('./Actions');

const app = express();
const port = 1337;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(logScraperData);

app.post('/able_to_login', Actions.ableToLogin);
app.post('/latest_billing', Actions.latestBilling);
app.post('/billings', Actions.billings);
app.post('/onboarding', Actions.onboarding);

app.listen(port, () => console.log(`App listening on ${port}`));

function logScraperData(req, res, next) {
  console.log(`creating ${req.originalUrl.replace('/', '')} job with data: `);
  console.log(req.body);
  next();
}
