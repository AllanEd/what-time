const userFactory = require('./userFactory');
const User = require('../models/User');

const factories = {
  userFactory: userFactory.create(User)
}

module.exports = factories;
