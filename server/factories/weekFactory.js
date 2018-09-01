const makeWeeks = weeks => weeks.map((week) => {
  const subsciberData = {
    id: week.id,
    startDate: week.startDate,
    subscribers: week.subscribers.toBSON().map(id => id.toJSON()),
  };

  return subsciberData;
});

export default { makeWeeks };
