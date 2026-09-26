const { Router } = require('express');
const { postGenerateDoc } = require('../controllers/docController');

const router = Router();

router.post('/generate-doc', postGenerateDoc);

module.exports = router;
