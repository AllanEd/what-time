function create({ Appointment }) {
  async function getById(id) {
    const populateDocs = [ 
      { path: 'creator', select: ['name', 'email'] },
      { path: 'subscribers', select: ['name', 'email'] },
      { path: 'weeks', select: 'startDate' }
    ];
    const appointment = await Appointment.findById(id).populate(populateDocs).exec();
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
