// Register all the services here
const loginServiceFactory = require('./loginService');
const userServiceFactory = require('./userService');
const appointmentServiceFactory = require('./appointmentService');
const userAppointmentServiceFactory = require('./userAppointmentService');
const weekServiceFactory = require('./weekService');
const dayServiceFactory = require('./dayService');

module.exports = repositories => {
  const userService = userServiceFactory.create(repositories.userRepository);
  const appointmentService = appointmentServiceFactory.create(repositories.appointmentRepository);
  const userAppointmentService = userAppointmentServiceFactory.create(repositories.userRepository, repositories.appointmentRepository);
  const weekService = weekServiceFactory.create(repositories.weekRepository);
  const dayService = dayServiceFactory.create(repositories.dayRepository);

  const loginService = loginServiceFactory.create(userService);

  return {
    loginService,
    userService,
    appointmentService,
    userAppointmentService,
    weekService,
    dayService,
  };
};
