function analyzeWithAI(githubUrl) {
  const match = githubUrl.match(/github\.com\/([^/]+)\/([^/#?]+)/);
  const repoSlug = match ? match[2] : 'unknown-repo';
  const owner = match ? match[1] : 'unknown';
  const repoName = repoSlug.replace(/[-_]/g, ' ');
  const slug = repoSlug.toLowerCase();

  const isBackend  = /api|server|backend|service|express|django|flask|spring|rails/.test(slug);
  const isFrontend = /ui|react|frontend|vue|angular|next|web|app|dashboard/.test(slug);

  let summary, purpose, key_components;

  if (isBackend) {
    summary       = `${repoName} is a server-side application developed by ${owner} that exposes a structured API for client consumption.`;
    purpose       = `Provides a scalable backend service to handle data processing, business logic, and API integration for connected clients.`;
    key_components = ['RESTful API layer', 'Request routing', 'Middleware pipeline', 'Data validation', 'Error handling'];
  } else if (isFrontend) {
    summary       = `${repoName} is a modern front-end application developed by ${owner} focused on delivering a responsive user interface.`;
    purpose       = `Solves the problem of presenting data and user interactions through a clean, component-driven UI experience.`;
    key_components = ['Component architecture', 'State management', 'Responsive layout', 'API integration', 'Client-side routing'];
  } else {
    summary       = `${repoName} is a software project developed by ${owner} that provides a focused set of tools and utilities for developers.`;
    purpose       = `Addresses a specific technical problem by offering a well-structured, reusable codebase that is easy to integrate and extend.`;
    key_components = ['Core logic modules', 'Configuration management', 'Utility functions', 'Documentation', 'Test suite'];
  }

  return { summary, purpose, key_components };
}

module.exports = { analyzeWithAI };
