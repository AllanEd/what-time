const create = (appointmentRepository) => {
  async function getAppointment(id) {
    const appointments = await appointmentRepository.getById(id);
    return appointments;
  }

  async function getAppointments(ids) {
    const appointments = await appointmentRepository.getByIds(ids);
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
    getAppointments,
    createAppointment,
    createAppointments,
  };
};

export default { create };
