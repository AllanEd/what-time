const populate = require('./populate/week');

function create({ Week }) {
  async function getByIds(ids) {
    const weeks = await Week.find({'_id': { $in: ids}}).populate(populate);
    
    return weeks.map(week => week.toWeekModel());
  }

  async function addMany(weeks) {
    await Week.insertMany(weeks);
  }

  return {
    getByIds,
    addMany
  };
}

module.exports.create = create;
