const express = require('express');
const asyncWrapper = require('../utils/asyncWrapper');

const router = express.Router();

function create({ loginService }) {
  router.post(
    '/',
    asyncWrapper(async (req, res) => {
      const {username} = req.body;
      const {password} = req.body;
      const login = await loginService.verifyUser(username, password);
      res.json(login);
    }),
  );

  return router;
}

module.exports.create = create;
