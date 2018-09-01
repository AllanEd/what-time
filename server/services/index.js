import userServiceFactory from './userService';
import appointmentServiceFactory from './appointmentService';
import weekServiceFactory from './weekService';
import dayServiceFactory from './dayService';

const create = (repositories) => {
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

export default { create };
