const mongoose = require('mongoose');

const { Schema } = mongoose;

const eventSchema = new Schema({
  title: String,
  creator: Schema.Types.ObjectId,
  subscribers: [Schema.Types.ObjectId],
  startDate: Date,
  isDone: Boolean,
  weeks: [Schema.Types.ObjectId],
});

const Event = mongoose.model('Event', eventSchema);

module.exports = Event;
