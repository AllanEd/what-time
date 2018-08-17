const User = require('../../server/models/User');

const user = new User({
  id: 1,
  name: 'Alex',
  email: 'test@test.de',
  password: 'test',
});

delete user.getPassword;

module.exports.users = [
  user,
];
