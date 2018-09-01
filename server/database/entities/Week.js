import mongoose from 'mongoose';
import WeekModel from '../../models/Week';

const { Schema } = mongoose;

const weekSchema = new Schema({
  startDate: Date,
  subscribers: [{ type: Schema.Types.ObjectId, ref: 'User' }],
  days: {
    mo: { type: Schema.Types.ObjectId, ref: 'Day' },
    tu: { type: Schema.Types.ObjectId, ref: 'Day' },
    we: { type: Schema.Types.ObjectId, ref: 'Day' },
    th: { type: Schema.Types.ObjectId, ref: 'Day' },
    fr: { type: Schema.Types.ObjectId, ref: 'Day' },
    sa: { type: Schema.Types.ObjectId, ref: 'Day' },
    su: { type: Schema.Types.ObjectId, ref: 'Day' },
  },
});

const Week = mongoose.model('Week', weekSchema);

Week.prototype.toWeekModel = function toWeekModel() {
  return new WeekModel(this);
};

export default Week;
