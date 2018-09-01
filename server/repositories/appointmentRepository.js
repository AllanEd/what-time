import populate from './populate/appointment';

function create({ Appointment }) {
  const getById = async (id) => {
    const appointment = await Appointment.findById(id).populate(populate);
    return appointment.toAppointmentModel();
  };

  const getByIds = async (ids) => {
    const appointments = await Appointment.find({ _id: { $in: ids } }).populate(populate);

    return appointments.map(appointment => appointment.toAppointmentModel());
  };

  const getByUserId = async (userId) => {
    const findParameters = { $or: [{ owner: userId }, { subscribers: userId }] };
    const appointments = await Appointment.find(findParameters).populate(populate);
    return appointments.map(appointment => appointment.toAppointmentModel());
  };

  const add = async appointment => Appointment.save(appointment);

  const addMany = async appointments => Appointment.insertMany(appointments);

  return {
    getById,
    getByIds,
    getByUserId,
    add,
    addMany,
  };
}

export default { create };
