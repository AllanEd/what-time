function create(weekRepository) {
  async function getWeek(id) {
    const week = await weekRepository.getById(id);
    return week;
  }

  async function getWeeks(appointment) {
    const weekIds = appointment.weeks.map(week => week.id);
    const weeks = await weekRepository.getByIds(weekIds);
    return weeks;
  }

  async function createWeeks(weeks) {
    await weekRepository.addMany(weeks);
  }

  return {
    getWeek,
    getWeeks,
    createWeeks
  };
}

module.exports.create = create;
