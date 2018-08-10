function create(weekRepository) {
  async function getAllWeeks() {
    const weeks = await weekRepository.getAll();
    return weeks;
  }

  async function createWeeks(weeks) {
    await weekRepository.addMany(weeks);
  }

  return {
    getAllWeeks,
    createWeeks
  };
}

module.exports.create = create;
