function create(appointmentRepository) {
  async function getAppointment(id) {
    const appointments = await appointmentRepository.getById(id);
    return appointments;
  }

  async function getUserAppointments(userId) {
    const appointments = appointmentRepository.getByUserId(userId);
    return appointments; 
  }

  async function createAppointment(appointment) {
    await appointmentRepository.add(appointment);
  }

  async function createAppointments(appointments) {
    await appointmentRepository.addMany(appointments);
  }

  return {
    getAppointment,
    getUserAppointments,
    createAppointment,
    createAppointments
  };
}

module.exports.create = create;
