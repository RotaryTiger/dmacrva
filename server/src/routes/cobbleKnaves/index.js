import { Router } from 'express';
import getRandomKnave from './getRandomKnave';

const router = Router();

router.get('/random', getRandomKnave);

export default router;
