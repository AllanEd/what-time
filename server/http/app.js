const express = require('express');
const bodyParser = require('body-parser');
const userRoute = require('./routes/user');
const eventRoute = require('./routes/event');
const weekRoute = require('./routes/week');
const dayRoute = require('./routes/day');
const errorRoute = require('./routes/error');

const app = express();
app.use(bodyParser.json());

module.exports = services => {
  const user = userRoute.create(services);
  const event = eventRoute.create(services);
  const week = weekRoute.create(services);
  const day = dayRoute.create(services);

  app.use('/users', user);
  app.use('/events', event);
  app.use('/weeks', week);
  app.use('/days', day);
  app.use(errorRoute);
  return app;
};
