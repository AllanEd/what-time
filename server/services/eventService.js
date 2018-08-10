function create(eventRepository) {
  async function getAllEvents() {
    const events = await eventRepository.getAll();
    return events;
  }

  async function createEvents(events) {
    await eventRepository.addMany(events);
  }

  return {
    getAllEvents,
    createEvents
  };
}

module.exports.create = create;
