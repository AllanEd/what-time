const express = require('express');
const asyncWrapper = require('../utils/asyncWrapper');

const router = express.Router();

function create({ weekService }) {
  router.get(
    '/',
    asyncWrapper(async (req, res) => {
      const weeks = await weekService.getAllWeeks();
      res.json(weeks);
    }),
  );

  return router;
}

module.exports.create = create;
