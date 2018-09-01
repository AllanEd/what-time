const makeDays = (mongooseDayModel) => {
  const mongooseDayModelJson = mongooseDayModel.toJSON();
  const days = {};

  Object.keys(mongooseDayModelJson).forEach((key) => {
    const day = mongooseDayModelJson[key];

    days[key] = {
      id: day.id,
      date: day.date,
      subscribers: day.subscribers.toBSON().map(id => id.toJSON()),
    };
  });

  return days;
};

const makeTimeslots = (mongooseTimeslotsMap) => {
  const mongooseTimeslotsMapJson = mongooseTimeslotsMap.toJSON();
  const timeslots = {};

  Object.keys(mongooseTimeslotsMapJson).forEach((key) => {
    timeslots[key] = [];
    mongooseTimeslotsMapJson[key].forEach((objectId) => {
      timeslots[key].push(objectId.toJSON());
    });
  });

  return timeslots;
};

export default {
  makeDays,
  makeTimeslots,
};
