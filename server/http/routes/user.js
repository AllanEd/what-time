const express = require('express');
const asyncWrapper = require('../utils/asyncWrapper');

const router = express.Router();

function create({ userService }) {
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
