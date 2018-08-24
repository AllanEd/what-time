const express = require('express');
const bodyParser = require('body-parser');

const rootRoute = require('./routes/root');
const userRoute = require('./routes/user');
const appointmentRoute = require('./routes/appointment');
const errorRoute = require('./routes/error');

const webpackMiddleware = require('./utils/webpackMiddleware');
const validateRequestBody = require('./utils/validateRequestBody');
const authentication = require('./utils/authentication');

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

module.exports = (services) => {
  const root = rootRoute.create();
  const user = userRoute.create(services);
  const appointment = appointmentRoute.create(services);

  app.use(webpackMiddleware.dev);
  app.use(webpackMiddleware.hot);

  app.use(validateRequestBody);

  app.get('*', root);
  app.use('/users', authentication.verify, user);
  app.use('/appointments', appointment);

  app.use(errorRoute);
  return app;
};
