const express = require('express');
const bodyParser = require('body-parser');

const rootRoute = require('./routes/root');
const userRoute = require('./routes/user');
const appointmentRoute = require('./routes/appointment');
const errorRoute = require('./routes/error');

const acessControl = require('./utils/acessControl');
const validateRequestBody = require('./utils/validateRequestBody');
const authentication = require('./utils/authentication');

const webpackMiddleware = require('./utils/webpackMiddleware');

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

module.exports = (services) => {
  const user = userRoute.create(services);
  const appointment = appointmentRoute.create(services);
  const root = rootRoute.create();

  app.use(webpackMiddleware.dev);
  app.use(webpackMiddleware.hot);

  app.use(acessControl);
  app.use(validateRequestBody);

  app.use('/api/users', authentication.verify, user);
  app.use('/api/appointments', appointment);

  app.get('*', root);

  app.use(errorRoute);
  return app;
};
