const User = require('../models/User');

function makeWeeks(weeks) {
  return weeks.map(week => {
    const subsciberData = {
      id: week.id,
      startDate: week.startDate,
      subscribers: User.factory.makeSubscribers(week.subscribers)
    }

    return subsciberData;
  });
}

module.exports = {
  makeWeeks
};