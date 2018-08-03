import mongoose from 'mongoose';

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

export default Day;
