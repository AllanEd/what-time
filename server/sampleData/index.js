const users = require('./collections/users');
const events = require('./collections/events');
const weeks = require('./collections/weeks');
const days = require('./collections/days');

module.exports = services => {
  const {createUsers} = services.userService;
  const {createEvents} = services.eventService;
  const {createWeeks} = services.weekService;
  const {createDays} = services.dayService;

  function create() {
    createUsers(users);
    createEvents(events);
    createWeeks(weeks);
    createDays(days);
  }

  return {
    create
  }; 
};
