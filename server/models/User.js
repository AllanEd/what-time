// @flow

class User {
  name: string;

  email: string;

  constructor(name: string, email: string) {
    this.name = name;
    this.email = email;
  }

  static createUsers(users: Array<Object>): Array<Object> {
    return users.map(user => new User(user.name, user.email));
  }
}

module.exports = User;
