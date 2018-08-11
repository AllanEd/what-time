// @flow

const mongooseModel = require('mongoose').model;
const Creator = require('./Creator');
const Subscriber = require('./Subscriber');
const userFactory = require('../factories/userFactory');

class Appointment {
  id: string;

  title: string;

  isDone: boolean;
  
  startDate: Date;

  creator: Creator;

  subscribers: Array<Subscriber>;

  weeks: Array<mongooseModel>;

  constructor(appointmentData: Object) {
    this.id = appointmentData.id;
    this.title = appointmentData.title;
    this.isDone = appointmentData.isDone;
    this.startDate = appointmentData.startDate;
    this.creator = userFactory.makeCreator(appointmentData.creator);
    this.subscribers = userFactory.makeSubscribers(appointmentData.subscribers);
    // this.weeks = Week.createWeeks(appointmentData.weeks);
  }

  static createCreatedAppointments(appointments: Array<Object>): Array<Object> {
    return appointments.map(appointment => new Appointment(appointment));
  }
}

module.exports = Appointment;
