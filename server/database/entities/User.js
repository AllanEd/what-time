const mongoose = require('mongoose');

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

module.exports = User;
