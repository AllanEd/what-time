import mongoose from 'mongoose';

import User from './entities/User';
import Appointment from './entities/Appointment';
import Week from './entities/Week';
import Day from './entities/Day';

const connect = async (connectionString, callback) => {
  await mongoose.connect(connectionString, { useNewUrlParser: true });
  callback();
};

const dropDatabase = () => {
  mongoose.connection.dropDatabase();
};

export default {
  User,
  Appointment,
  Week,
  Day,
  connect,
  dropDatabase,
};
