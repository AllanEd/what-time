const express = require('express');
const asyncWrapper = require('../../utils/asyncWrapper');
const authentication = require('../../utils/authentication');

const router = express.Router();

function create({
  userService, appointmentService, weekService, dayService,
}) {
  router.all(
    '*',
    async (req, res, next) => {
      if (!req.authentication) {
        next();
        return;
      }

      const { id } = req.authentication;
      const user = await userService.getUser(id);

      req.user = user;
      next();
    },
  );

  router.get(
    '/',
    asyncWrapper(async (req, res) => {
      const { user } = req;

      res.json(user);
    }),
  );

  router.patch(
    '/',
    asyncWrapper(async (req, res) => {
      const { body } = req;
      const { user } = req;
      const registeredUser = await userService.editUser(user, body);

      res.json(registeredUser);
    }),
  );

  router.delete(
    '/',
    asyncWrapper(async (req, res) => {
      const { user } = req;
      const deletedUser = await userService.deleteUser(user);

      res.json(deletedUser);
    }),
  );

  router.get(
    /^\/appointments\/.*/,
    async (req, res, next) => {
      const { appointments } = req.user;
      const userAppointments = await appointmentService.getAppointments(appointments);

      req.appointments = userAppointments;
      next();
    },
  );

  router.get(
    '/appointments',
    asyncWrapper(async (req, res) => {
      const { appointments } = req;

      res.json(appointments);
    }),
  );

  router.param(
    'appointmentId',
    async (req, res, next, appointmentId) => {
      const { appointments } = req;

      req.appointment = appointments.find(appointment => appointment.id === appointmentId);
      next();
    },
  );

  router.get(
    '/appointments/:appointmentId/weeks',
    asyncWrapper(async (req, res) => {
      const { appointment } = req;
      const weeks = await weekService.getWeeks(appointment);

      res.json(weeks);
    }),
  );

  router.param(
    'weekId',
    async (req, res, next, weekId) => {
      const week = await weekService.getWeek(weekId);
      req.week = week;

      next();
    },
  );

  router.get(
    '/appointments/:appointmentId/weeks/:weekId/days',
    asyncWrapper(async (req, res) => {
      const { week } = req;
      const days = await dayService.getDays(week);

      res.json(days);
    }),
  );

  router.post(
    '/login',
    asyncWrapper(async (req, res) => {
      const { name } = req.body;
      const { password } = req.body;
      const loggedInUser = await userService.verifyUser(name, password);

      userService.updateLastLogin(loggedInUser);

      const token = authentication.sign({ id: loggedInUser.id });

      res.json({
        loggedInUser,
        token,
      });
    }),
  );

  router.post(
    '/register',
    asyncWrapper(async (req, res) => {
      const { name } = req.body;
      const { password } = req.body;
      const { email } = req.body;
      const registeredUser = await userService.registerUser(name, password, email);

      const token = authentication.sign({ id: registeredUser.id });

      res.json({
        data: registeredUser,
        token,
      });
    }),
  );

  return router;
}

module.exports.create = create;
