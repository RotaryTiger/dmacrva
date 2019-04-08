import { Router } from 'express';

import breathMarches from './breathMarches';
import cobbleKnaves from './cobbleKnaves';

const router = Router();

router.all('/*', (request, response, next) => {
  response.header('Access-Control-Allow-Origin', '*');
  return next();
});

router.use('/breath-marches', breathMarches);
router.use('/cobbleknaves', cobbleKnaves);

export default router;
