const User = require('../models/User');

function makeDays(days) {
  const jsonDays = days.toJSON();
  const formattedDays = {};

  Object.keys(jsonDays).forEach(key => {
    const day = jsonDays[key];

    formattedDays[key] = {
      id: day.id,
      date: day.date,
      subscribers: User.factory.makeSubscribers(day.subscribers)
    }
  });

  return formattedDays;
}

module.exports = {
  makeDays
};