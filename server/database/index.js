const mongoose = require('mongoose');
const { connectionString } = require('../configuration');

mongoose.connect(connectionString, {useNewUrlParser: true });

const mongoDb = mongoose.connection;

const User = require('./entities/User');
const Event = require('./entities/Event');
const Week = require('./entities/Week');
const Day = require('./entities/Day');

module.exports = {
  User,
  Event,
  Week,
  Day,
  dropDatabase: () => mongoDb.dropDatabase()
};
