import express from 'express';
import asyncWrapper from '../../utils/asyncWrapper';

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

export default create;
