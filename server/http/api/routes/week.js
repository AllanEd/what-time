import express from 'express';
import asyncWrapper from '../../utils/asyncWrapper';

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

export default { create };
