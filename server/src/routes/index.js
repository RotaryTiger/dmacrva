import { Router } from 'express';

import breathMarches from './breathMarches';
import cobbleKnaves from './cobbleKnaves';

const router = Router();

router.use('/breath-marches', breathMarches);
router.use('/cobbleknaves', cobbleKnaves);

export default router;
