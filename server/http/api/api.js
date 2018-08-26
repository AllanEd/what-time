const express = require('express');
const bodyParser = require('body-parser');

const userRoute = require('./routes/user');
const appointmentRoute = require('./routes/appointment');
const errorRoute = require('./routes/error');

const acessControl = require('../utils/acessControl');
const validateRequestBody = require('../utils/validateRequestBody');
const authentication = require('../utils/authentication');

const api = express();
api.use(bodyParser.urlencoded({ extended: true }));
api.use(bodyParser.json());

module.exports = (services) => {
  const user = userRoute.create(services);
  const appointment = appointmentRoute.create(services);

  api.use(acessControl);
  api.use(validateRequestBody);

  api.use('/users', authentication.verify, user);
  api.use('/appointments', appointment);

  api.use(errorRoute);
  return api;
};
