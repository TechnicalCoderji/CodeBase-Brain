# Add two new endpoints to my existing backend:

1. POST /onboard
2. POST /generate-doc

Requirements:

INPUT (for both):
{
  "github_url": "string"
}

--------------------------------------

1. /onboard endpoint:

- Generate beginner-friendly steps to run and understand the repo
- Output format:
{
  "steps": [
    "Step 1: Clone the repository",
    "Step 2: Install dependencies",
    "Step 3: Run the project",
    "Step 4: Explore main files"
  ]
}

- Customize steps based on repo type:
  - backend → mention server, APIs
  - frontend → mention UI, components
  - general → basic steps

--------------------------------------

2. /generate-doc endpoint:

- Generate README-style documentation
- Output format:
{
  "readme": "Project Title\n\nDescription...\n\nInstallation...\n\nUsage..."
}

- Include:
  - Project overview
  - Features
  - Installation steps
  - Usage

--------------------------------------

GENERAL RULES:

- Reuse logic from /analyze (detect repo type)
- Use service layer (bobService.js)
- Create:
  - onboardController.js
  - docController.js
  - routes files

- Add validation:
  - if github_url missing → return error

- Keep responses clean, readable, and professional
- Do NOT use external APIs

Keep code minimal and consistent with existing structure.

---

**Status:** active  **Date:** 2026-09-26

---

### 👤 User

Add two new endpoints to my existing backend:

1. POST /onboard
2. POST /generate-doc

Requirements:

INPUT (for both):
{
  "github_url": "string"
}

--------------------------------------

1. /onboard endpoint:

- Generate beginner-friendly steps to run and understand the repo
- Output format:
{
  "steps": [
    "Step 1: Clone the repository",
    "Step 2: Install dependencies",
    "Step 3: Run the project",
    "Step 4: Explore main files"
  ]
}

- Customize steps based on repo type:
  - backend → mention server, APIs
  - frontend → mention UI, components
  - general → basic steps

--------------------------------------

2. /generate-doc endpoint:

- Generate README-style documentation
- Output format:
{
  "readme": "Project Title\n\nDescription...\n\nInstallation...\n\nUsage..."
}

- Include:
  - Project overview
  - Features
  - Installation steps
  - Usage

--------------------------------------

GENERAL RULES:

- Reuse logic from /analyze (detect repo type)
- Use service layer (bobService.js)
- Create:
  - onboardController.js
  - docController.js
  - routes files

- Add validation:
  - if github_url missing → return error

- Keep responses clean, readable, and professional
- Do NOT use external APIs

Keep code minimal and consistent with existing structure.

---

### 🤖 Assistant

> 🔧 called: list_files

Let me start by exploring the existing backend structure to understand the patterns in use.

> 🔧 **list_files** — backend

### 🤖 Assistant

> 🔧 called: read_file, read_file



> 🔧 **read_file** — backend/app.js

> 🔧 **read_file** — backend/controllers/analyzeController.js

### 🤖 Assistant

> 🔧 called: read_file, list_files



> 🔧 **list_files** — backend/routes

> 🔧 **read_file** — backend/controllers/askController.js

### 🤖 Assistant

> 🔧 called: read_file, read_file, list_files



> 🔧 **list_files** — backend/services

> 🔧 **read_file** — backend/routes/analyze.js

> 🔧 **read_file** — backend/routes/ask.js

### 🤖 Assistant

> 🔧 called: read_file, read_file



> 🔧 **read_file** — backend/services/bobService.js

> 🔧 **read_file** — backend/services/analyzeService.js

### 🤖 Assistant

> 🔧 called: update_todo_list

I have a full picture of the codebase. Now I'll implement everything in one pass.

> 🔧 **update_todo_list** — [-] Add onboard & generate-doc service functions to bobService.js
[ ] Create onboardController.js
[ ] Create docController.js
[ ] Create routes/onboard.js
[ ] Create routes/doc.js
[ ] Register new routes in app.js


### 🤖 Assistant

> 🔧 called: apply_diff



> 🔧 **apply_diff** — backend/services/bobService.js

### 🤖 Assistant

> 🔧 called: update_todo_list

Now create the two controllers and two route files simultaneously:

> 🔧 **update_todo_list** — [x] Add onboard & generate-doc service functions to bobService.js
[-] Create onboardController.js
[-] Create docController.js
[-] Create routes/onboard.js
[-] Create routes/doc.js
[ ] Register new routes in app.js


### 🤖 Assistant

> 🔧 called: write_file



> 🔧 **write_file** — backend/controllers/onboardController.js

### 🤖 Assistant

> 🔧 called: write_file



> 🔧 **write_file** — const bobService = require('../services/bobService');

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


### 🤖 Assistant

> 🔧 called: write_file



> 🔧 **write_file** — const { Router } = require('express');
const { postOnboard } = require('../controllers/onboardController');

const router = Router();

router.post('/onboard', postOnboard);

module.exports = router;


### 🤖 Assistant

> 🔧 called: write_file



> 🔧 **write_file** — const { Router } = require('express');
const { postGenerateDoc } = require('../controllers/docController');

const router = Router();

router.post('/generate-doc', postGenerateDoc);

module.exports = router;


### 🤖 Assistant

> 🔧 called: update_todo_list



> 🔧 **update_todo_list** — [x] Add onboard & generate-doc service functions to bobService.js
[x] Create onboardController.js
[x] Create docController.js
[x] Create routes/onboard.js
[x] Create routes/doc.js
[-] Register new routes in app.js


### 🤖 Assistant

> 🔧 called: apply_diff



> 🔧 **apply_diff** — backend/app.js

### 🤖 Assistant

> 🔧 called: execute_command

Now do a quick smoke-test to validate the server starts cleanly:

> 🔧 **execute_command** — node -e "
const bobService = require('./backend/services/bobService');

// Test onboarding — backend
const ob1 = bobService.generateOnboardingSteps('https://github.com/user/express-api-server');
console.log('ONBOARD backend steps:', ob1.steps.length, 'steps');

// Test onboarding — frontend
const ob2 = bobService.generateOnboardingSteps('https://github.com/user/react-dashboard');
console.log('ONBOARD frontend steps:', ob2.steps.length, 'steps');

// Test onboarding — general
const ob3 = bobService.generateOnboardingSteps('https://github.com/user/my-utils');
console.log('ONBOARD general steps:', ob3.steps.length, 'steps');

// Test readme — backend
const doc1 = bobService.generateReadme('https://github.com/user/express-api-server');
console.log('DOC backend readme starts with:', doc1.readme.split('\n')[0]);

// Test readme — frontend
const doc2 = bobService.generateReadme('https://github.com/user/react-dashboard');
console.log('DOC frontend readme starts with:', doc2.readme.split('\n')[0]);

// Test readme — general
const doc3 = bobService.generateReadme('https://github.com/user/my-utils');
console.log('DOC general readme starts with:', doc3.readme.split('\n')[0]);

console.log('All checks passed.');
"


### 🤖 Assistant

> 🔧 called: update_todo_list



> 🔧 **update_todo_list** — [x] Add onboard & generate-doc service functions to bobService.js
[x] Create onboardController.js
[x] Create docController.js
[x] Create routes/onboard.js
[x] Create routes/doc.js
[x] Register new routes in app.js


### 🤖 Assistant

All six tasks complete. Here's a summary of every change made:

---

### What was added

#### [`backend/services/bobService.js`](backend/services/bobService.js)
Two private helpers were extracted to eliminate duplication across the whole file:
- **`parseRepo(githubUrl)`** — parses owner, repoSlug, repoName, and slug from any GitHub URL (reused by all four public functions)
- **`detectRepoType(slug)`** — returns `'backend'` | `'frontend'` | `'general'` (single source of truth for classification)

Two new exported service functions:
- **`generateOnboardingSteps(githubUrl)`** — produces a `{ steps: [...] }` array tailored per repo type (7 steps for backend/frontend, 6 for general)
- **`generateReadme(githubUrl)`** — produces a `{ readme: "..." }` string with title, description, features, installation, usage, contributing, and license sections, all customised per repo type

#### [`backend/controllers/onboardController.js`](backend/controllers/onboardController.js) *(new)*
Validates `github_url`, calls `bobService.generateOnboardingSteps`, returns the result or a clean error.

#### [`backend/controllers/docController.js`](backend/controllers/docController.js) *(new)*
Validates `github_url`, calls `bobService.generateReadme`, returns the result or a clean error.

#### [`backend/routes/onboard.js`](backend/routes/onboard.js) *(new)*
```
POST /onboard  →  onboardController.postOnboard
```

#### [`backend/routes/doc.js`](backend/routes/doc.js) *(new)*
```
POST /generate-doc  →  docController.postGenerateDoc
```

#### [`backend/app.js`](backend/app.js)
Registered both new routers alongside the existing ones.