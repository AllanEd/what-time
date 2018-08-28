const express = require('express');

const path = require('path');

const router = express.Router();

function create() {
  router.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../../../../client/index.html'));
  });
  return router;
}

module.exports.create = create;
