// @flow

const mongooseModel = require('mongoose').model;
const User = require('./User');
const Week = require('./Week');

class Appointment {
  id: string;

  title: string;

  isDone: boolean;
  
  startDate: Date;

  creator: mongooseModel;

  subscribers: Array<mongooseModel>;

  weeks: Array<mongooseModel>;

  constructor(appointmentData: Object) {
    this.id = appointmentData.id;
    this.title = appointmentData.title;
    this.isDone = appointmentData.isDone;
    this.startDate = appointmentData.startDate;
    this.creator = new User(appointmentData.creator);
    this.subscribers = User.createSubscribers(appointmentData.subscribers);
    this.weeks = Week.createWeeks(appointmentData.weeks);
  }
}

module.exports = Appointment;
