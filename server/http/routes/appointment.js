const express = require('express');
const asyncWrapper = require('../utils/asyncWrapper');

const router = express.Router();

function create({ appointmentService }) {
  router.get(
    '/',
    asyncWrapper(async (req, res) => {
      const {user} = req;
      const appointments = await appointmentService.getUserAppointments(user);
      
      res.json(appointments);
    }),
  );

  return router;
}

module.exports.create = create;
