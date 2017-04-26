'use-strict';

const express = require('express');
const routes = require('./routes.js');

const app = express();

app.use(routes);

app.listen(3000, err => {
  console.log('App listening on port 3000');
});