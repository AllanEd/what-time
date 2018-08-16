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

function makeTimeslots(timeslots) {
  const jsonTimeslots = timeslots.toJSON();
  const formattedTimeslots = {};

  Object.keys(jsonTimeslots).forEach(key => {
    formattedTimeslots[key] = [];
    jsonTimeslots[key].forEach(objectId => {
      formattedTimeslots[key].push(objectId.toJSON());
    });
  });

  return jsonTimeslots;
}

module.exports = {
  makeDays,
  makeTimeslots
};