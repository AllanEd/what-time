const express = require('express');
const asyncWrapper = require('../utils/asyncWrapper');

const router = express.Router();

function create({ eventService }) {
  router.get(
    '/',
    asyncWrapper(async (req, res) => {
      const events = await eventService.getAllEvents();
      res.json(events);
    }),
  );

  return router;
}

module.exports.create = create;
