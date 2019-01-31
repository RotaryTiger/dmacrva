const { Router } = require('express');

const router = Router();

const getRandomCharacter = require('./getRandomCharacter');

router.get('/random', getRandomCharacter);

module.exports = router;
