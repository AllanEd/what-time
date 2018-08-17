const users = require('./collections/users');
const appointments = require('./collections/appointment');
const weeks = require('./collections/weeks');
const days = require('./collections/days');

module.exports = services => {
  const {createUsers} = services.userService;
  const {createAppointments} = services.appointmentService;
  const {createWeeks} = services.weekService;
  const {createDays} = services.dayService;

  function create() {
    createUsers(users);
    createAppointments(appointments);
    createWeeks(weeks);
    createDays(days);
  }

  return {
    create
  }; 
};
