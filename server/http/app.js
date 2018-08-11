const express = require('express');
const bodyParser = require('body-parser');
const userRoute = require('./routes/user');
const appointmentRoute = require('./routes/appointment');
const weekRoute = require('./routes/week');
const dayRoute = require('./routes/day');
const errorRoute = require('./routes/error');

const app = express();
app.use(bodyParser.json());

module.exports = services => {
  const user = userRoute.create(services);
  const appointment = appointmentRoute.create(services);
  const week = weekRoute.create(services);
  const day = dayRoute.create(services);

  app.use('/users', user);
  app.use('/appointments', appointment);
  app.use('/weeks', week);
  app.use('/days', day);
  app.use(errorRoute);
  return app;
};
