function create(dayRepository) {
  async function getAllDays() {
    const days = await dayRepository.getAll();
    return days;
  }

  async function createDays(days) {
    await dayRepository.addMany(days);
  }

  return {
    getAllDays,
    createDays
  };
}

module.exports.create = create;
