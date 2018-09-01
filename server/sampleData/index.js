import users from './collections/users';
import appointments from './collections/appointment';
import weeks from './collections/weeks';
import days from './collections/days';

const create = (services) => {
  const { createUsers } = services.userService;
  const { createAppointments } = services.appointmentService;
  const { createWeeks } = services.weekService;
  const { createDays } = services.dayService;

  function insert() {
    createUsers(users);
    createAppointments(appointments);
    createWeeks(weeks);
    createDays(days);
  }

  return {
    insert,
  };
};


export default { create };
