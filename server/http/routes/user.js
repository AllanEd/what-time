const express = require('express');
const asyncWrapper = require('../utils/asyncWrapper');

const router = express.Router();

function create({ userService, appointmentService }) {
  router.param(
    'userId', 
    async (req, res, next, id) => {
      const user = await userService.getUser(id);
      req.user = user;

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
      const {user} = req;
      
      res.json(user);
    }),
  );

  router.patch(
    '/:userId',
    asyncWrapper(async (req, res) => {
      const {body} = req;
      const {user} = req;
      const registeredUser = await userService.editUser(user, body);

      res.json(registeredUser);
    }),
  );

  router.delete(
    '/:userId',
    asyncWrapper(async (req, res) => {
      const {user} = req;
      const deletedUser = await userService.deleteUser(user);

      res.json(deletedUser);
    }),
  );

  router.get(
    '/:userId/appointments',
    asyncWrapper(async (req, res) => {
      const {appointments} = req.user;
      const user = await appointmentService.getAppointments(appointments);
      
      res.json(user);
    }),
  );

  router.post(
    '/login',
    asyncWrapper(async (req, res) => {
      const {name} = req.body;
      const {password} = req.body;
      const login = await userService.verifyUser(name, password);
      
      userService.updateLastLogin(login);
      
      res.json(login);
    }),
  );

  router.post(
    '/register',
    asyncWrapper(async (req, res) => {
      const {name} = req.body;
      const {password} = req.body;
      const {email} = req.body;
      const registeredUser = await userService.registerUser(name, password, email);

      res.json(registeredUser);
    }),
  );
  
  return router;
}

module.exports.create = create;
