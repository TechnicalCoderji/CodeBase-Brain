const bobService = require('../services/bobService');

async function postAsk(req, res) {
  console.log('POST /ask hit - github_url:', req.body.github_url);
  const { github_url, question } = req.body;

  if (!github_url) {
    return res.status(400).json({ error: 'github_url is required' });
  }

  if (!question) {
    return res.status(400).json({ error: 'question is required' });
  }

  try {
    const result = bobService.answerQuestion(github_url, question);
    res.json(result);
  } catch (err) {
    console.error('Ask failed:', err.message);
    res.status(500).json({ error: 'Failed to generate answer' });
  }
}

module.exports = { postAsk };
