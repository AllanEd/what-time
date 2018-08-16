// @flow

const User = require('./User');
const Week = require('./Week');

class Appointment {
  id: string;

  title: string;

  isDone: boolean;
  
  startDate: Date;

  owner: Object;

  subscribers: Array<Object>;

  weeks: Array<Object>;

  constructor(appointmentData: Object) {
    this.id = appointmentData.id;
    this.title = appointmentData.title;
    this.isDone = appointmentData.isDone;
    this.startDate = appointmentData.startDate;
    this.owner = User.factory.makeOwner(appointmentData.owner);
    this.subscribers = User.factory.makeSubscribers(appointmentData.subscribers);
    this.weeks = Week.factory.makeWeeks(appointmentData.weeks);
  }
}

module.exports = Appointment;
