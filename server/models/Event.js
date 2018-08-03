import mongoose from 'mongoose';

const { Schema } = mongoose;

const eventSchema = new Schema({
  title: String,
  creator: Number,
  startDate: Date,
  isDone: Boolean,
});

const Event = mongoose.model('Event', eventSchema);

export default Event;
