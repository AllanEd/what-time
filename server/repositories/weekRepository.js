function create({ Week }) {
  async function addMany(weeks) {
    await Week.insertMany(weeks);
  }

  return {
    addMany
  };
}

module.exports.create = create;
