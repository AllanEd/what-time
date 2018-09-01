import express from 'express';
import path from 'path';

const router = express.Router();

function create() {
  router.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../../../../client/index.html'));
  });
  return router;
}

export default { create };
