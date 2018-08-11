function create({ Appointment }) {
  async function getAll() {
    const populateDocs = [ 
      { path: 'creator', select: 'name' },
      { path: 'subscribers', select: 'name' }
    ];
    const appointments = await Appointment.find().populate(populateDocs).exec();
    return appointments.map(appointment => appointment.toAppointmentModel());
  }
  
  async function add(appointment) {
    await Appointment.save(appointment);
  }

  async function addMany(appointments) {
    await Appointment.insertMany(appointments);
  }

  return {
    getAll,
    add,
    addMany
  };
}

module.exports.create = create;
