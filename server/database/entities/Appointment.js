import mongoose from 'mongoose';
import AppointmentModel from '../../models/Appointment';

const { Schema } = mongoose;

const appointmentSchema = new Schema({
  title: String,
  owner: { type: Schema.Types.ObjectId, ref: 'User' },
  subscribers: [{ type: Schema.Types.ObjectId, ref: 'User' }],
  startDate: Date,
  isDone: Boolean,
  weeks: [{ type: Schema.Types.ObjectId, ref: 'Week' }],
});

const Appointment = mongoose.model('Appointment', appointmentSchema);

Appointment.prototype.toAppointmentModel = function toAppointmentModel() {
  return new AppointmentModel(this);
};

export default Appointment;
