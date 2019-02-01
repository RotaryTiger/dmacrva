import { Router } from 'express';
import breathMarches from './breathMarches';

const router = Router();

router.use('/breath-marches', breathMarches);

module.exports = router;
