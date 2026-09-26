const { Router } = require('express');
const { getTest, postAnalyze } = require('../controllers/analyzeController');

const router = Router();

router.get('/', (req, res) => {
  console.log('GET / hit');
  res.json({ message: 'CodeBase Brain API running' });
});
router.get('/test', getTest);
router.post('/analyze', postAnalyze);

module.exports = router;
