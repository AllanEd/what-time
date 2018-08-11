function create(appointmentRepository) {
  async function getAppointmentById(id) {
    const appointments = await appointmentRepository.getById(id);
    return appointments;
  }

  async function createAppointment(appointment) {
    await appointmentRepository.add(appointment);
  }

  async function createAppointments(appointments) {
    await appointmentRepository.addMany(appointments);
  }

  return {
    getAppointmentById,
    createAppointment,
    createAppointments
  };
}

module.exports.create = create;
