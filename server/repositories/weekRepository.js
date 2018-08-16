const populate = require('./populate/week');

function create({ Week }) {
  async function getById(id) {
    const week = await Week.findById(id).populate(populate);
    return week.toWeekModel();
  }

  async function getByIds(ids) {
    const weeks = await Week.find({'_id': { $in: ids}}).populate(populate);
    
    return weeks.map(week => week.toWeekModel());
  }

  async function addMany(weeks) {
    await Week.insertMany(weeks);
  }

  return {
    getById,
    getByIds,
    addMany
  };
}

module.exports.create = create;
