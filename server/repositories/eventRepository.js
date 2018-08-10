function create({ Event }) {
  async function addMany(events) {
    await Event.insertMany(events);
  }

  return {
    addMany
  };
}

module.exports.create = create;
