function create(userRepository, appointmentRepository) {
  async function getUserAppointments(userId) {
    const user = await userRepository.getById(userId);
    const appointments = await appointmentRepository.getByIds(user.appointments);
    return appointments; 
  }

  return {
    getUserAppointments
  };
}

module.exports.create = create;
