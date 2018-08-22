const express = require('express');
const asyncWrapper = require('../utils/asyncWrapper');
const authentication = require('../utils/authentication');

const router = express.Router();

function create({ userService, appointmentService }) {
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
    '/appointments',
    asyncWrapper(async (req, res) => {
      const { appointments } = req.user;
      const user = await appointmentService.getAppointments(appointments);

      res.json(user);
    }),
  );

  router.post(
    '/login',
    asyncWrapper(async (req, res) => {
      const { name } = req.body;
      const { password } = req.body;
      const loginUser = await userService.verifyUser(name, password);

      userService.updateLastLogin(loginUser);

      const token = authentication.sign({ id: loginUser.id });

      res.json({
        data: loginUser,
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
