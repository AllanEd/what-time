// @flow

const bcrypt = require('bcrypt');
const userFactory = require('../factories/userFactory');

class User {
  id: string;

  name: string;

  password: string;

  email: string;

  static factory: Object;

  constructor(userData: Object) {
    this.id = userData.id;
    this.name = userData.name;
    this.password = userData.password;
    this.email = userData.email;
  }

  isPasswordValid(password: string): boolean {
    return bcrypt.compareSync(password, this.password);
  };
}

User.factory = userFactory;

module.exports = User;
