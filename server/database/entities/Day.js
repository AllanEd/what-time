const mongoose = require('mongoose');

const { Schema } = mongoose;

const daySchema = new Schema({
  date: Date,
  subscribers: [{type: Schema.Types.ObjectId, ref: 'User'}],
  timeSlots: {
    type: Map,
    of: [{type: Schema.Types.ObjectId, ref: 'User'}],
  },
});

const Day = mongoose.model('Day', daySchema);

module.exports = Day;
