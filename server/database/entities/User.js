import mongoose from 'mongoose';
import UserModel from '../../models/User';

const { Schema } = mongoose;

const userSchema = new Schema({
  name: String,
  password: String,
  email: String,
  registered: Date,
  lastLogin: Date,
  appointments: [{ type: Schema.Types.ObjectId, ref: 'Appointment' }],
});

const User = mongoose.model('User', userSchema);

User.prototype.toUserModel = function toUserModel() {
  return new UserModel(this);
};

export default User;
