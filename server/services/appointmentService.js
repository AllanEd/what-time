function create(appointmentRepository) {
  async function getAllAppointments() {
    const appointments = await appointmentRepository.getAll();
    return appointments;
  }

  async function createAppointment(appointment) {
    await appointmentRepository.add(appointment);
  }

  async function createAppointments(appointments) {
    await appointmentRepository.addMany(appointments);
  }

  return {
    getAllAppointments,
    createAppointment,
    createAppointments
  };
}

module.exports.create = create;
