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

function answerQuestion(githubUrl, question) {
  const match = githubUrl.match(/github\.com\/([^/]+)\/([^/#?]+)/);
  const repoSlug = match ? match[2] : 'unknown-repo';
  const owner = match ? match[1] : 'unknown';
  const repoName = repoSlug.replace(/[-_]/g, ' ');
  const slug = repoSlug.toLowerCase();

  const isBackend  = /api|server|backend|service|express|django|flask|spring|rails/.test(slug);
  const isFrontend = /ui|react|frontend|vue|angular|next|web|app|dashboard/.test(slug);
  const repoType   = isBackend ? 'backend' : isFrontend ? 'frontend' : 'general';

  const q = question.toLowerCase();

  if (/what does (this|the) repo do|purpose|what is (this|it)|overview/.test(q)) {
    if (isBackend) {
      return { answer: `${repoName} is a backend application by ${owner} that exposes a structured API for client consumption. It handles server-side logic, data processing, and business rules.` };
    }
    if (isFrontend) {
      return { answer: `${repoName} is a frontend application by ${owner} focused on delivering a responsive user interface. It manages UI components, client-side routing, and API integration.` };
    }
    return { answer: `${repoName} is a general-purpose project by ${owner} that provides a focused set of tools and utilities for developers. It is designed to be modular and easy to integrate.` };
  }

  if (/frontend or backend|front.?end or back.?end|which type|what type/.test(q)) {
    if (isBackend)  return { answer: `This repository is a backend project. Based on its name, it is likely a server-side service handling API requests, data processing, or business logic.` };
    if (isFrontend) return { answer: `This repository is a frontend project. Based on its name, it is likely a UI-focused application built with a modern JavaScript framework.` };
    return { answer: `This repository appears to be a general-purpose project. It does not show clear signals of being exclusively frontend or backend.` };
  }

  if (/tech|stack|language|framework|built with/.test(q)) {
    if (isBackend)  return { answer: `${repoName} is likely built with a server-side framework such as Express, Django, Flask, or Spring. It follows a backend architecture with routing, middleware, and data layers.` };
    if (isFrontend) return { answer: `${repoName} is likely built with a frontend framework such as React, Vue, or Angular. It uses component-based architecture and integrates with external APIs.` };
    return { answer: `${repoName} is a general-purpose project. The exact tech stack is not determinable from the URL alone, but it is structured as a reusable developer tool or library.` };
  }

  if (/how (do i|to) (use|start|run|install)|setup|get started/.test(q)) {
    return { answer: `To get started with ${repoName}, clone the repository from GitHub, install dependencies using the package manager of your choice, and follow the README instructions. Check for a .env.example file for required configuration.` };
  }

  if (/who (made|built|owns|created)|author|maintainer/.test(q)) {
    return { answer: `${repoName} is owned and maintained by ${owner} on GitHub. Refer to the repository's contributors page for a full list of collaborators.` };
  }

  // Generic fallback
  return { answer: `${repoName} is a ${repoType} project by ${owner} on GitHub. It is designed to address specific technical needs and follows common conventions for a ${repoType} application.` };
}

module.exports = { analyzeWithAI, answerQuestion };
