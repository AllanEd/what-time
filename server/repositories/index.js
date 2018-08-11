const userRepositoryFactory = require('./userRepository');
const appointmentRepositoryFactory = require('./appointmentRepository');
const weekRepositoryFactory = require('./weekRepository');
const dayRepositoryFactory = require('./dayRepository');

module.exports = db => {
  const userRepository = userRepositoryFactory.create(db);
  const appointmentRepository = appointmentRepositoryFactory.create(db);
  const weekRepository = weekRepositoryFactory.create(db);
  const dayRepository = dayRepositoryFactory.create(db);
  return {
    userRepository,
    appointmentRepository,
    weekRepository,
    dayRepository,
  };
};
