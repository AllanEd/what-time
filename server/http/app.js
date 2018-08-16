const express = require('express');
const bodyParser = require('body-parser');

const loginRoute = require('./routes/login');
const userRoute = require('./routes/user');
const appointmentRoute = require('./routes/appointment');
const errorRoute = require('./routes/error');

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

module.exports = services => {
  const login = loginRoute.create(services);
  const user = userRoute.create(services);
  const appointment = appointmentRoute.create(services);

  app.use('/login', login);
  app.use('/users', user);
  app.use('/appointments', appointment);
  app.use(errorRoute);
  return app;
};
