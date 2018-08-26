const express = require('express');
const asyncWrapper = require('../../utils/asyncWrapper');

const router = express.Router();

function create({ dayService }) {
  router.get(
    '/',
    asyncWrapper(async (req, res) => {
      const days = await dayService.getAllDays();
      res.json(days);
    }),
  );

  return router;
}

module.exports.create = create;
