// @flow

class User {
  name: string;

  password: string;

  email: string;

  constructor(userData: Object) {
    this.name = userData.name;
    this.password = userData.password;
    this.email = userData.email;
  }

  isPasswordValid(password: string): boolean {
    return password === this.password;
  };

  static createSubscribers(users: Array<Object>): Array<Object> {
    return users.map(user => new User(user));
  }
}

module.exports = User;
