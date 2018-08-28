const express = require('express');

const router = express.Router();

function create() {
  router.options('*', (req, res) => {
    res.sendStatus(200);
  });
  return router;
}

module.exports.create = create;
