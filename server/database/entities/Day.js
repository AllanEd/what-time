const mongoose = require('mongoose');
const DayModel = require('../../models/Day');

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

Day.prototype.toDayModel = function toDayModel() {
  return new DayModel(this);
};

module.exports = Day;
