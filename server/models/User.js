// @flow

const bcrypt = require('bcrypt');
const mongooseModel = require('mongoose').model;
const Appointment = require('./Appointment');
// const userFactory = require('../factories/userFactory');

class User {
  name: string;

  password: string;

  email: string;

  createdAppointments: Array<mongooseModel>;

  constructor(userData: Object) {
    this.name = userData.name;
    this.password = userData.password;
    this.email = userData.email;
    this.createdAppointments = userData.createdAppointments;
  }

  getData(): Object {
    return {
      name: this.name,
      password: this.password,
      email: this.email,
      createdAppointments: this.getCreatedAppointments(),
    }
  }

  isPasswordValid(password: string): boolean {
    return bcrypt.compareSync(password, this.password);
  };

  getCreatedAppointments(): Array<Object> {
    const createdAppointments = this.createdAppointments.slice();
    return createdAppointments.map(appointment => new Appointment(appointment));
  }

  static createSubscribers(users: Array<Object>): Array<Object> {
    return users.map(user => new User(user));
  }
}

// User.factory = userFactory.create(User);

module.exports = User;
