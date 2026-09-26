const analyzeService = require('../services/analyzeService');

function getTest(req, res) {
  console.log('GET /test hit');
  res.json({ message: 'API working' });
}

function postAnalyze(req, res) {
  console.log('POST /analyze hit - github_url:', req.body.github_url);
  const { github_url } = req.body;
  const result = analyzeService.receiveRepo(github_url);
  res.json(result);
}

module.exports = { getTest, postAnalyze };
