const bobService = require('../services/bobService');

async function postOnboard(req, res) {
  console.log('POST /onboard hit - github_url:', req.body.github_url);
  const { github_url } = req.body;

  if (!github_url) {
    return res.status(400).json({ error: 'github_url is required' });
  }

  try {
    const result = bobService.generateOnboardingSteps(github_url);
    res.json(result);
  } catch (err) {
    console.error('Onboarding generation failed:', err.message);
    res.status(500).json({ error: 'Failed to generate onboarding steps' });
  }
}

module.exports = { postOnboard };
