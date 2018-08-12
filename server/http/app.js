const express = require('express');
const bodyParser = require('body-parser');

const parameterController = require('./parameter');

const loginRoute = require('./routes/login');
const userRoute = require('./routes/user');
const userIdRoute = require('./routes/userId');
const appointmentRoute = require('./routes/appointment');
const weekRoute = require('./routes/week');
const dayRoute = require('./routes/day');
const errorRoute = require('./routes/error');

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

module.exports = services => {
  const userIdController = parameterController.userId.create(services);
  const appointmentIdController = parameterController.appointmentId.create(services);
  const weekIdController = parameterController.weekId.create(services);

  const login = loginRoute.create(services);
  const user = userRoute.create(services);
  const userId = userIdRoute.create();
  const appointment = appointmentRoute.create(services);
  const week = weekRoute.create(services);
  const day = dayRoute.create(services);

  app.param('userId', userIdController);
  app.param('appointmentId', appointmentIdController);
  app.param('weekId', weekIdController);

  app.use('/login', login);
  app.use('/users', user);
  app.use('/users/:userId', userId);
  app.use('/appointments', appointment);
  app.use('/users/:userId/appointments/:appointmentId/weeks/', week);
  app.use('/days', day);
  app.use(errorRoute);
  return app;
};
