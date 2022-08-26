import express from 'express';

import MessageResponse from '../interfaces/MessageResponse';
import v1 from './v1';

const router = express.Router();

router.get<{}, MessageResponse>('/', (req, res) => {
  res.json({
    message: 'Saga API',
  });
});

router.use('/v1', v1);

export default router;
