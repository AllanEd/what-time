import mongoose from 'mongoose';
import config from '../configuration';

import User from './entities/User';
import Appointment from './entities/Appointment';
import Week from './entities/Week';
import Day from './entities/Day';

mongoose.connect(config.connectionString, { useNewUrlParser: true });

const mongoDb = mongoose.connection;

export default {
  User,
  Appointment,
  Week,
  Day,
  dropDatabase: () => mongoDb.dropDatabase(),
};
