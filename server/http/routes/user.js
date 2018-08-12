const express = require('express');
const asyncWrapper = require('../utils/asyncWrapper');

const router = express.Router();

function create({ userService }) {
  router.get(
    '/',
    asyncWrapper(async (req, res) => {
      const users = await userService.getAllUsers();
      res.json(users);
    }),
  );

  router.get(
    '/:id',
    asyncWrapper(async (req, res, next) => {
      const {id} = req.params;
      const user = await userService.getUser(id);
      req.user = user;
      next();
    }),
  );

  // router.get(
  //   '/:id/appointments',
  //   asyncWrapper(async (req, res, id) => {
  //     const appointments = await userService.getAppointments(id);
  //     res.json(appointments);
  //   }),
  // );

  router.post(
    '/',
    asyncWrapper(async (req, res) => {
      const user = req.body;
      await userService.createUser(user);
      res.json({});
    }),
  );

  router.post(
    '/',
    asyncWrapper(async (req, res) => {
      const users = req.body;
      await userService.createSubscribers(users);
      res.json({});
    }),
  );

  return router;
}

module.exports.create = create;
