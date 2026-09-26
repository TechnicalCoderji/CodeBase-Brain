const bobService = require('../services/bobService');

function getTest(req, res) {
  console.log('GET /test hit');
  res.json({ message: 'API working' });
}

async function postAnalyze(req, res) {
  console.log('POST /analyze hit - github_url:', req.body.github_url);
  const { github_url } = req.body;

  if (!github_url) {
    return res.status(400).json({ error: 'github_url is required' });
  }

  try {
    const result = await bobService.analyzeWithAI(github_url);
    res.json(result);
  } catch (err) {
    console.error('AI analysis failed:', err.message);
    res.status(500).json({ error: 'AI analysis failed' });
  }
}

module.exports = { getTest, postAnalyze };
