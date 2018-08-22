const express = require('express');
const bodyParser = require('body-parser');

const validateRequestBody = require('./utils/validateRequestBody');

const authenticationRoute = require('./routes/authentication');
const userRoute = require('./routes/user');
const appointmentRoute = require('./routes/appointment');
const errorRoute = require('./routes/error');

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

module.exports = (services) => {
  const authentication = authenticationRoute.create(services);

  const user = userRoute.create(services);
  const appointment = appointmentRoute.create(services);

  app.use('*', authentication);
  app.use(validateRequestBody);

  app.use('/users', user);
  app.use('/appointments', appointment);

  app.use(errorRoute);
  return app;
};
