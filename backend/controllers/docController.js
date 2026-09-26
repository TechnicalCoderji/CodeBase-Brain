const bobService = require('../services/bobService');

async function postGenerateDoc(req, res) {
  console.log('POST /generate-doc hit - github_url:', req.body.github_url);
  const { github_url } = req.body;

  if (!github_url) {
    return res.status(400).json({ error: 'github_url is required' });
  }

  try {
    const result = bobService.generateReadme(github_url);
    res.json(result);
  } catch (err) {
    console.error('Doc generation failed:', err.message);
    res.status(500).json({ error: 'Failed to generate documentation' });
  }
}

module.exports = { postGenerateDoc };
