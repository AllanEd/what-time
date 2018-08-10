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
      await userService.createUsers(users);
      res.json({});
    }),
  );

  return router;
}

module.exports.create = create;
