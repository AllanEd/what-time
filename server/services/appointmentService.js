function create(appointmentRepository) {
  async function getAppointmentById(id) {
    const appointments = await appointmentRepository.getById(id);
    return appointments;
  }

  async function getUserAppointments(user) {
    const getAppointments = user.appointments.map(async appointmentId => getAppointmentById(appointmentId));

    return Promise.all(getAppointments)
      .then((appointments) => appointments);
  }

  async function createAppointment(appointment) {
    await appointmentRepository.add(appointment);
  }

  async function createAppointments(appointments) {
    await appointmentRepository.addMany(appointments);
  }

  return {
    getAppointmentById,
    getUserAppointments,
    createAppointment,
    createAppointments
  };
}

module.exports.create = create;
