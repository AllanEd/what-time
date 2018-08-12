const express = require('express');
const asyncWrapper = require('../utils/asyncWrapper');

const router = express.Router();

function create() {

  router.get(
    '/',
    asyncWrapper(async (req, res) => {
      const {user} = req;
      res.json(user);
    }),
  );

  return router;
}

module.exports.create = create;
