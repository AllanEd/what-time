import mongoose from 'mongoose';

const { Schema } = mongoose;

const userSchema = new Schema({
  name: String,
  email: String,
  registered: Date,
  lastSignIn: Date,
  createdEvents: [Schema.Types.ObjectId],
  subscribedEvents: [Schema.Types.ObjectId],
});

const User = mongoose.model('User', userSchema);

export default User;
