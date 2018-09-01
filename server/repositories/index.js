import userRepositoryFactory from './userRepository';
import appointmentRepositoryFactory from './appointmentRepository';
import weekRepositoryFactory from './weekRepository';
import dayRepositoryFactory from './dayRepository';

const create = (db) => {
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

export default { create };
