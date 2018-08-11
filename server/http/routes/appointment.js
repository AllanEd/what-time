const express = require('express');
const asyncWrapper = require('../utils/asyncWrapper');

const router = express.Router();

function create({ appointmentService }) {
  router.get(
    '/:id',
    asyncWrapper(async (req, res) => {
      const {id} = req.params;
      const appointments = await appointmentService.getAppointmentById(id);
      res.json(appointments);
    }),
  );

  return router;
}

module.exports.create = create;
