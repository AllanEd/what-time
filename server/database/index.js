const mongoose = require('mongoose');
const { connectionString } = require('../configuration');

mongoose.connect(connectionString, {useNewUrlParser: true });

const mongoDb = mongoose.connection;

const User = require('./entities/User');

module.exports = {
  User,
  dropDatabase: () => mongoDb.dropDatabase()
};
