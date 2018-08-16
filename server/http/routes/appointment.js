const express = require('express');
const asyncWrapper = require('../utils/asyncWrapper');

const router = express.Router();

function create({ appointmentService, weekService }) {
  router.param(
    'appointmentId', 
    async (req, res, next, id) => {
      const appointment = await appointmentService.getAppointment(id);
      req.appointment = appointment;

      next();
    },
  );

  router.get(
    '/:appointmentId',
    asyncWrapper(async (req, res) => {
      const {appointment} = req;
      
      res.json(appointment);
    }),
  );

  router.get(
    '/:appointmentId/weeks',
    asyncWrapper(async (req, res) => {
      const {appointment} = req;
      const weeks = await weekService.getWeeks(appointment);
      
      res.json(weeks);
    }),
  );

  return router;
}

module.exports.create = create;
