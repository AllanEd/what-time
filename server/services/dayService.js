const create = (dayRepository) => {
  async function getDay(id) {
    const day = await dayRepository.getById(id);
    return day;
  }

  async function getDays(week) {
    const weekIds = [];
    Object.keys(week.days).forEach((key) => {
      weekIds.push(week.days[key].id);
    });
    const days = await dayRepository.getByIds(weekIds);
    return days;
  }


  async function createDays(days) {
    await dayRepository.addMany(days);
  }

  return {
    getDay,
    getDays,
    createDays,
  };
};

export default { create };
