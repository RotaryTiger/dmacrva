import { Router } from 'express';
import getRandomCharacter from './getRandomCharacter';

const router = Router();

router.get('/random', getRandomCharacter);

export default router;
