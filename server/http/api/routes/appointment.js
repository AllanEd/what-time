const express = require('express');
const asyncWrapper = require('../../utils/asyncWrapper');

const router = express.Router();

function create({ appointmentService, weekService, dayService }) {
  router.param(
    'appointmentId',
    async (req, res, next, id) => {
      const appointment = await appointmentService.getAppointment(id);
      req.appointment = appointment;

      next();
    },
  );

  router.param(
    'weekId',
    async (req, res, next, id) => {
      const week = await weekService.getWeek(id);
      req.week = week;

      next();
    },
  );

  router.get(
    '/:appointmentId',
    asyncWrapper(async (req, res) => {
      const { appointment } = req;

      res.json(appointment);
    }),
  );

  router.get(
    '/:appointmentId/weeks',
    asyncWrapper(async (req, res) => {
      const { appointment } = req;
      const weeks = await weekService.getWeeks(appointment);

      res.json(weeks);
    }),
  );

  router.get(
    '/:appointmentId/weeks/:weekId',
    asyncWrapper(async (req, res) => {
      const { week } = req;

      res.json(week);
    }),
  );

  router.get(
    '/:appointmentId/weeks/:weekId/days',
    asyncWrapper(async (req, res) => {
      const { week } = req;
      const days = await dayService.getDays(week);

      res.json(days);
    }),
  );

  return router;
}

module.exports.create = create;
