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

  constructor(id: string, title: string, isDone: boolean, startDate: Date, creator: mongooseModel, subscribers: Array<mongooseModel>, weeks: Array<mongooseModel>) {
    this.id = id;
    this.title = title;
    this.isDone = isDone;
    this.startDate = startDate;
    this.creator = new User(creator);
    this.subscribers = User.createSubscribers(subscribers);
    this.weeks = Week.createWeeks(weeks);
  }
}

module.exports = Appointment;
