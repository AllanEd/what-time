function create(dayRepository) {
  async function createDays(days) {
    await dayRepository.addMany(days);
  }

  return {
    createDays
  };
}

module.exports.create = create;
