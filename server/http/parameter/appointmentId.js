function create({ appointmentService }) {
  async function controller(req, res, next, id) {
    const appointment = await appointmentService.getAppointment(id);
    req.appointment = appointment;
    next();
  };

  return controller;
}

module.exports.create = create;