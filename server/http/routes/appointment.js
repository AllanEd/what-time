const express = require('express');
const asyncWrapper = require('../utils/asyncWrapper');

const router = express.Router();

function create({ appointmentService, userAppointmentService }) {
  router.param(
    'appointmentId', 
    async (req, res, next, id) => {
      req.id = id;
      next();
    },
  );

  router.get(
    '/',
    asyncWrapper(async (req, res) => {
      const userId = req.query.user;
      const appointments = await userAppointmentService.getUserAppointments(userId);
      
      res.json(appointments);
    }),
  );

  router.get(
    '/:appointmentId',
    asyncWrapper(async (req, res) => {
      const {id} = req;
      const appointment = await appointmentService.getAppointment(id);
      
      res.json(appointment);
    }),
  );

  return router;
}

module.exports.create = create;
