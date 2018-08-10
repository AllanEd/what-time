import mongoose from 'mongoose';

import Event from './models/Event';
import Week from './models/Week';
import Day from './models/Day';
import User from './models/User';

import events from './sampleData/events';
import weeks from './sampleData/weeks';
import days from './sampleData/days';
import users from './sampleData/users';

const sampleData = {
  events,
  weeks,
  days,
  users,
};

/* eslint-disable no-console */

const databaseName = 'mongodb://localhost/what-time';
mongoose.connect(databaseName);

const db = mongoose.connection;

db.dropDatabase();
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
  Event.insertMany(sampleData.events);
  Week.insertMany(sampleData.weeks);
  User.insertMany(sampleData.users);
  Day.insertMany(sampleData.days);
});
