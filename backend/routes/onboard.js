const { Router } = require('express');
const { postOnboard } = require('../controllers/onboardController');

const router = Router();

router.post('/onboard', postOnboard);

module.exports = router;
