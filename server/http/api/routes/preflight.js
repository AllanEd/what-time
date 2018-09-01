import express from 'express';

const router = express.Router();

function create() {
  router.options('*', (req, res) => {
    res.sendStatus(200);
  });
  return router;
}

export default { create };
