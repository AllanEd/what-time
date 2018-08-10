const mongoose = require('mongoose');
const UserModel = require('../../models/User');

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

User.prototype.toUserModel = function toUserModel() {
  return new UserModel(this.name, this.email);
};

module.exports = User;
