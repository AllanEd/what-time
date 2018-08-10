const mongoose = require('mongoose');

const { Schema } = mongoose;

const daySchema = new Schema({
  date: Date,
  subscribers: [Schema.Types.ObjectId],
  timeSlots: {
    type: Map,
    of: [Schema.Types.ObjectId],
  },
});

const Day = mongoose.model('Day', daySchema);

module.exports = Day;
