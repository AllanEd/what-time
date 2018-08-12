// @flow

const bcrypt = require('bcrypt');
const userFactory = require('../factories/userFactory');

class User {
  id: string;

  name: string;

  password: string;

  email: string;

  appointments: Array<string>;

  static factory: Object;

  constructor(userData: Object) {
    this.id = userData.id;
    this.name = userData.name;
    this.password = userData.password;
    this.email = userData.email;
    this.appointments = this.constructor.obejctIdsToString(userData.appointments)
  }

  isPasswordValid(password: string): boolean {
    return bcrypt.compareSync(password, this.password);
  };

  static obejctIdsToString(objectIds: Array<Object>): Array<string> {
    return objectIds.map(objectId => objectId.toString());
  }
}

User.factory = userFactory;

module.exports = User;
