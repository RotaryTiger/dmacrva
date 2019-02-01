import { Router } from 'express';
import getRandomCharacter from './getRandomCharacter';

const router = Router();

router.get('/random', getRandomCharacter);

module.exports = router;
