// @flow

const bcrypt = require('bcrypt');

class User {
  id: string;

  name: string;

  password: string;

  email: string;

  appointments: Array<string>;

  constructor(userData: Object) {
    this.id = userData.id;
    this.name = userData.name;
    this.password = userData.password;
    this.email = userData.email;
    this.appointments = User.obejctIdsToString(userData.appointments)
  }

  isPasswordValid(password: string): boolean {
    return bcrypt.compareSync(password, this.password);
  };

  static obejctIdsToString(objectIds: Array<Object>): Array<string> {
    return objectIds.map(objectId => objectId.toString());
  }
}

module.exports = User;
