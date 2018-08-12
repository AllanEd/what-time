const express = require('express');
const asyncWrapper = require('../utils/asyncWrapper');
const userIdController = require('../parameter/userId');

const router = express.Router();

function create({ userService }) {

  const paramController = userIdController.create(userService);

  router.param('id', paramController);

  router.get(
    '/',
    asyncWrapper(async (req, res) => {
      const users = await userService.getAllUsers();
      res.json(users);
    }),
  );

  router.get(
    '/:id',
    asyncWrapper(async (req, res) => {
      const {user} = req;
      res.json(user);
    }),
  );

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
