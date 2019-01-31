const { Router } = require('express');

const breathMarches = require('./breathMarches');

const router = Router();

router.use('/breath-marches', breathMarches);

module.exports = router;
