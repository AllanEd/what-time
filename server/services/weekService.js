function create(weekRepository) {
  async function createWeeks(weeks) {
    await weekRepository.addMany(weeks);
  }

  return {
    createWeeks
  };
}

module.exports.create = create;
