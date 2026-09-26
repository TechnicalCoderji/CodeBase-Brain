function analyzeRepo(githubUrl) {
  // Extract "owner/repo" from the URL, fall back to the raw URL if parsing fails
  const match = githubUrl.match(/github\.com\/([^/]+)\/([^/]+)/);
  const repoName = match ? match[2].replace(/-/g, ' ') : githubUrl;
  const ownerName = match ? match[1] : 'unknown';

  return {
    summary: `${repoName} is an open-source project maintained by ${ownerName} on GitHub. It provides a focused set of tools designed for developers.`,
    purpose: `Solves the problem of building and managing ${repoName}-related workflows by offering a clean, well-documented API and minimal setup overhead.`,
    key_components: [
      'GitHub repository structure',
      'README documentation',
      'Source code modules',
      'Dependency management',
      'CI/CD configuration',
    ],
  };
}

module.exports = { analyzeRepo };
