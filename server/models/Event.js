// @flow

/**
 * This is the app Model it is decoupled from
 * the Entities used for the databse
 */
class User {
  name: string;

  email: string;

  constructor(name: string, email: string) {
    this.name = name;
    this.email = email;
  }
}

module.exports = User;
