const { Router } = require('express');
const { postAsk } = require('../controllers/askController');

const router = Router();

router.post('/ask', postAsk);

module.exports = router;
