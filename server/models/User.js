// @flow

const bcrypt = require('bcrypt');
const userFactory = require('../factories/userFactory');

class User {
  id: string;

  name: string;

  getPassword: Function;

  email: string;

  appointments: Array<string>;

  static factory: Object;

  constructor(userData: Object) {
    this.id = userData.id;
    this.name = userData.name;
    this.email = userData.email;
    this.appointments = this.constructor.obejctIdsToString(userData.appointments)

    const {password} = userData;
    this.getPassword = () => password;
  }

  isPasswordValid(passwordEntry: string): boolean {
    return bcrypt.compareSync(passwordEntry, this.getPassword());
  };

  static obejctIdsToString(objectIds: Array<Object>): Array<string> {
    return objectIds.map(objectId => objectId.toString());
  }
}

User.factory = userFactory;

module.exports = User;
