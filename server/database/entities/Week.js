import mongoose from 'mongoose';

const { Schema } = mongoose;

const weekSchema = new Schema({
  startDate: Date,
  subscribers: [Schema.Types.ObjectId],
  days: {
    mo: Schema.Types.ObjectId,
    tu: Schema.Types.ObjectId,
    we: Schema.Types.ObjectId,
    th: Schema.Types.ObjectId,
    fr: Schema.Types.ObjectId,
    sa: Schema.Types.ObjectId,
    su: Schema.Types.ObjectId,
  },
});

const Week = mongoose.model('Week', weekSchema);

export default Week;
