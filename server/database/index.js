const mongoose = require('mongoose');
const { connectionString } = require('../configuration');

mongoose.connect(connectionString, {useNewUrlParser: true });

const mongoDb = mongoose.connection;

const User = require('./entities/User');
const Appointment = require('./entities/Appointment');
const Week = require('./entities/Week');
const Day = require('./entities/Day');

module.exports = {
  User,
  Appointment,
  Week,
  Day,
  dropDatabase: () => mongoDb.dropDatabase()
};
