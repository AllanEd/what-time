// @flow

const mongooseModel = require('mongoose').model;

class Appointment {
  id: string;

  title: string;

  isDone: boolean;
  
  startDate: Date;

  creator: boolean;

  subscribers: Array<mongooseModel>;

  weeks: Array<mongooseModel>;

  constructor(id: string, title: string, isDone: boolean, startDate: Date, creator: boolean, subscribers: Array<mongooseModel>, weeks: Array<mongooseModel>) {
    this.id = id;
    this.title = title;
    this.isDone = isDone;
    this.startDate = startDate;
    this.creator = creator;
    this.subscribers = subscribers;
    this.weeks = weeks;
  }
}

module.exports = Appointment;
