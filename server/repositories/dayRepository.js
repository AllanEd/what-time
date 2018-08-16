const populate = require('./populate/day');

function create({ Day }) {
  async function getById(id) {
    const day = await Day.findById(id).populate(populate);
    return day.toWeekModel();
  }

  async function getByIds(ids) {
    const days = await Day.find({'_id': { $in: ids}});
    
    return days.map(day => day.toDayModel());
  }

  async function addMany(days) {
    await Day.insertMany(days);
  }

  return {
    getById,
    getByIds,
    addMany
  };
}

module.exports.create = create;
