function create(eventRepository) {
  async function createEvents(events) {
    await eventRepository.addMany(events);
  }

  return {
    createEvents
  };
}

module.exports.create = create;
