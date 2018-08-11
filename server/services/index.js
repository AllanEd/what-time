// Register all the services here
const userServiceFactory = require('./userService');
const appointmentServiceFactory = require('./appointmentService');
const weekServiceFactory = require('./weekService');
const dayServiceFactory = require('./dayService');

module.exports = repositories => {
  const userService = userServiceFactory.create(repositories.userRepository);
  const appointmentService = appointmentServiceFactory.create(repositories.appointmentRepository);
  const weekService = weekServiceFactory.create(repositories.weekRepository);
  const dayService = dayServiceFactory.create(repositories.dayRepository);
  return {
    userService,
    appointmentService,
    weekService,
    dayService,
  };
};
