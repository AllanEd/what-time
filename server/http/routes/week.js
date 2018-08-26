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
  // router.get(
  //   '/',
  //   asyncWrapper(async (req, res) => {
  //     const {user} = req;
  //     const {week} = req;
  //     const week = await weekService.getUserWeek(user);

  //     res.json(appointments);
  //   }),
  // );

  return router;
}

module.exports.create = create;
