function detectRepoType(slug) {
  const isBackend  = /api|server|backend|service|express|django|flask|spring|rails/.test(slug);
  const isFrontend = /ui|react|frontend|vue|angular|next|web|app|dashboard/.test(slug);
  return isBackend ? 'backend' : isFrontend ? 'frontend' : 'general';
}

function parseRepo(githubUrl) {
  const match = githubUrl.match(/github\.com\/([^/]+)\/([^/#?]+)/);
  const repoSlug = match ? match[2] : 'unknown-repo';
  const owner    = match ? match[1] : 'unknown';
  const repoName = repoSlug.replace(/[-_]/g, ' ');
  const slug     = repoSlug.toLowerCase();
  return { repoSlug, owner, repoName, slug };
}

function analyzeWithAI(githubUrl) {
  const { owner, repoName, slug } = parseRepo(githubUrl);
  const repoType = detectRepoType(slug);
  const isBackend  = repoType === 'backend';
  const isFrontend = repoType === 'frontend';

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
  const { owner, repoName, slug } = parseRepo(githubUrl);
  const repoType   = detectRepoType(slug);
  const isBackend  = repoType === 'backend';
  const isFrontend = repoType === 'frontend';

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

function generateOnboardingSteps(githubUrl) {
  const { repoName, slug } = parseRepo(githubUrl);
  const repoType = detectRepoType(slug);

  const base = [
    `Step 1: Clone the repository — run: git clone ${githubUrl}`,
    `Step 2: Navigate into the project folder — run: cd ${slug}`,
    `Step 3: Install dependencies — run: npm install (or the relevant package manager)`,
  ];

  if (repoType === 'backend') {
    return {
      steps: [
        ...base,
        `Step 4: Configure environment variables — copy .env.example to .env and fill in the required values`,
        `Step 5: Start the server — run: npm start or npm run dev`,
        `Step 6: Test the API — send requests to the exposed endpoints using a tool like Postman or curl`,
        `Step 7: Explore the codebase — review the routes, controllers, and service layers to understand the API structure`,
      ],
    };
  }

  if (repoType === 'frontend') {
    return {
      steps: [
        ...base,
        `Step 4: Start the development server — run: npm start or npm run dev`,
        `Step 5: Open the app in your browser — usually available at http://localhost:3000`,
        `Step 6: Explore the UI — interact with the components and review the pages`,
        `Step 7: Explore the codebase — review the components, state management, and API integration layers`,
      ],
    };
  }

  return {
    steps: [
      ...base,
      `Step 4: Review the README — open README.md for project-specific setup instructions`,
      `Step 5: Run the project — follow the entry point defined in package.json or the README`,
      `Step 6: Explore main files — browse the source files to understand the project structure and core logic`,
    ],
  };
}

function generateReadme(githubUrl) {
  const { owner, repoName, repoSlug, slug } = parseRepo(githubUrl);
  const repoType = detectRepoType(slug);

  const title = repoName
    .split(' ')
    .map(w => w.charAt(0).toUpperCase() + w.slice(1))
    .join(' ');

  let description, features, usageBlock;

  if (repoType === 'backend') {
    description = `${title} is a server-side application developed by ${owner} that exposes a RESTful API for client consumption. It handles routing, business logic, data validation, and error handling.`;
    features = [
      'RESTful API endpoints',
      'Structured request routing',
      'Middleware pipeline support',
      'Input validation and error handling',
      'Environment-based configuration',
    ];
    usageBlock = `Start the server:\n\n  npm start\n\nThe API will be available at http://localhost:3000.\nUse Postman or curl to interact with the available endpoints.`;
  } else if (repoType === 'frontend') {
    description = `${title} is a modern front-end application developed by ${owner} that delivers a responsive, component-driven user interface. It integrates with external APIs and manages application state client-side.`;
    features = [
      'Component-based UI architecture',
      'Client-side routing',
      'Responsive layout',
      'API integration layer',
      'State management',
    ];
    usageBlock = `Start the development server:\n\n  npm start\n\nOpen http://localhost:3000 in your browser to view the app.`;
  } else {
    description = `${title} is a general-purpose software project developed by ${owner} that provides a focused set of tools and utilities. It is designed to be modular, well-documented, and easy to integrate.`;
    features = [
      'Modular core logic',
      'Utility functions and helpers',
      'Configuration management',
      'Comprehensive documentation',
      'Test suite included',
    ];
    usageBlock = `Run the project:\n\n  npm start\n\nRefer to the source files and README for detailed usage instructions.`;
  }

  const featureList = features.map(f => `- ${f}`).join('\n');

  const readme =
`# ${title}

## Description

${description}

## Features

${featureList}

## Installation

\`\`\`bash
git clone https://github.com/${owner}/${repoSlug}
cd ${repoSlug}
npm install
\`\`\`

## Usage

${usageBlock}

## Contributing

Contributions are welcome. Please open an issue or submit a pull request on GitHub.

## License

MIT`;

  return { readme };
}

module.exports = { analyzeWithAI, answerQuestion, generateOnboardingSteps, generateReadme };
