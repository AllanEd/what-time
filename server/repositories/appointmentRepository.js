const populate = require('./populate/appointment');

function create({ Appointment }) {
  async function getById(id) {
    const appointment = await Appointment.findById(id).populate(populate).exec();
    return appointment.toAppointmentModel();
  }
  
  async function add(appointment) {
    await Appointment.save(appointment);
  }

  async function addMany(appointments) {
    await Appointment.insertMany(appointments);
  }

  return {
    getById,
    add,
    addMany
  };
}

module.exports.create = create;
