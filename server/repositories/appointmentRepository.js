const populate = require('./populate/appointment');

function create({ Appointment }) {
  async function getById(id) {
    const appointment = await Appointment.findById(id).populate(populate).exec();
    return appointment.toAppointmentModel();
  }

  async function getByIds(ids) {
    const appointments = await Appointment.find({'_id': { $in: ids}}).populate(populate);
    
    return appointments.map(appointment => appointment.toAppointmentModel());
  }

  async function getByUserId(userId) {
    const appointments = await Appointment.find({ $or:[ {'owner': userId}, {'subscribers': userId} ]}).populate(populate).exec();
    return appointments.map(appointment => appointment.toAppointmentModel());
  }
  
  async function add(appointment) {
    await Appointment.save(appointment);
  }

  async function addMany(appointments) {
    await Appointment.insertMany(appointments);
  }

  return {
    getById,
    getByIds,
    getByUserId,
    add,
    addMany
  };
}

module.exports.create = create;
