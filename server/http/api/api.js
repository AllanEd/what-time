import express from 'express';
import bodyParser from 'body-parser';

import preflightRoute from './routes/preflight';
import userRoute from './routes/user';
import appointmentRoute from './routes/appointment';
import errorRoute from './routes/error';

import acessControl from '../utils/acessControl';
import validateRequestBody from '../utils/validateRequestBody';
import authentication from '../utils/authentication';

const api = express();
api.use(bodyParser.urlencoded({ extended: true }));
api.use(bodyParser.json());

const create = (services) => {
  const preflight = preflightRoute.create();
  const user = userRoute.create(services);
  const appointment = appointmentRoute.create(services);

  api.use(acessControl);
  api.use('*', preflight);

  api.use(validateRequestBody);

  api.use('/api/users', authentication.verify, user);
  api.use('/api/appointments', appointment);

  api.use(errorRoute);

  return api;
};

export default { create };
