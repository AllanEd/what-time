const userIdController = require('./userId');
const appointmentIdController = require('./appointmentId');
const weekIdController = require('./weekId');

module.exports = {
  userId: userIdController,
  weekId: weekIdController,
  appointmentId: appointmentIdController
}