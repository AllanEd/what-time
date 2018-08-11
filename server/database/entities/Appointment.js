const mongoose = require('mongoose');
const AppointmentModel = require('../../models/Appointment');

const { Schema } = mongoose;

const appointmentSchema = new Schema({
  title: String,
  creator: {type: Schema.Types.ObjectId, ref: 'User'},
  subscribers: [{type: Schema.Types.ObjectId, ref: 'User'}],
  startDate: Date,
  isDone: Boolean,
  weeks: [{type: Schema.Types.ObjectId, ref: 'Week'}],
});

const Appointment = mongoose.model('Appointment', appointmentSchema);

Appointment.prototype.toAppointmentModel = function toAppointmentModel() {
  return new AppointmentModel(this.id, this.title, this.isDone, this.startDate, this.creator, this.subscribers, this.weeks);
};

module.exports = Appointment;
