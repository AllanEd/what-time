function create({ Event }) {
  async function getAll() {
    const users = await Event.findAll();
    return users.map(user => user.toUserModel());
  }
  
  async function addMany(events) {
    await Event.insertMany(events);
  }

  return {
    getAll,
    addMany
  };
}

module.exports.create = create;
