const userRepositoryFactory = require('./userRepository');
const eventRepositoryFactory = require('./eventRepository');
const weekRepositoryFactory = require('./weekRepository');
const dayRepositoryFactory = require('./dayRepository');

module.exports = db => {
  const userRepository = userRepositoryFactory.create(db);
  const eventRepository = eventRepositoryFactory.create(db);
  const weekRepository = weekRepositoryFactory.create(db);
  const dayRepository = dayRepositoryFactory.create(db);
  return {
    userRepository,
    eventRepository,
    weekRepository,
    dayRepository,
  };
};
