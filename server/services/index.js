// Register all the services here
const userServiceFactory = require('./userService');
const eventServiceFactory = require('./eventService');
const weekServiceFactory = require('./weekService');
const dayServiceFactory = require('./dayService');

module.exports = repositories => {
  const userService = userServiceFactory.create(repositories.userRepository);
  const eventService = eventServiceFactory.create(repositories.eventService);
  const weekService = weekServiceFactory.create(repositories.weekService);
  const dayService = dayServiceFactory.create(repositories.dayService);
  return {
    userService,
    eventService,
    weekService,
    dayService,
  };
};
