// @flow

const User = require('./User');
const Week = require('./Week');

class Appointment {
  id: string;

  title: string;

  isDone: boolean;
  
  startDate: Date;

  creator: Object;

  subscribers: Array<Object>;

  weeks: Array<Object>;

  constructor(appointmentData: Object) {
    this.id = appointmentData.id;
    this.title = appointmentData.title;
    this.isDone = appointmentData.isDone;
    this.startDate = appointmentData.startDate;
    this.creator = User.factory.makeCreator(appointmentData.creator);
    this.subscribers = User.factory.makeSubscribers(appointmentData.subscribers);
    this.weeks = Week.factory.makeWeeks(appointmentData.weeks);
  }
}

module.exports = Appointment;
