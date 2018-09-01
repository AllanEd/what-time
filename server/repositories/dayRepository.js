import populate from './populate/day';

const create = ({ Day }) => {
  const getById = async (id) => {
    const day = await Day.findById(id).populate(populate);
    return day.toWeekModel();
  };

  const getByIds = async (ids) => {
    const days = await Day.find({ _id: { $in: ids } });
    return days.map(day => day.toDayModel());
  };

  const addMany = async days => Day.insertMany(days);

  return {
    getById,
    getByIds,
    addMany,
  };
};

export default { create };
