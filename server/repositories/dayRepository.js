function create({ Day }) {
  async function addMany(days) {
    await Day.insertMany(days);
  }

  return {
    addMany
  };
}

module.exports.create = create;
