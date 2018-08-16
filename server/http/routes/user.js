const express = require('express');
const asyncWrapper = require('../utils/asyncWrapper');

const router = express.Router();

function create({ userService, userAppointmentService }) {
  router.param(
    'userId', 
    async (req, res, next, id) => {
      req.id = id;
      next();
    },
  );

  router.get(
    '/',
    asyncWrapper(async (req, res) => {
      const users = await userService.getAllUsers();
      res.json(users);
    }),
  );

  router.get(
    '/:userId',
    asyncWrapper(async (req, res) => {
      const {id} = req;
      const user = await userService.getUser(id);
      
      res.json(user);
    }),
  );

  router.get(
    '/:userId/appointments',
    asyncWrapper(async (req, res) => {
      const {id} = req;
      const user = await userAppointmentService.getUserAppointments(id);
      
      res.json(user);
    }),
  );

  return router;
}

module.exports.create = create;
