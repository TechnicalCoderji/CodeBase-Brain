# Add a new POST /ask endpoint to my existing backend.

Requirements:

1. Input:
{
  "github_url": "string",
  "question": "string"
}

2. Use the same logic as /analyze to understand repo type:
   - backend / frontend / general

3. Generate a smart AI-like answer based on:
   - repository type
   - user question

4. Response format:
{
  "answer": "clear and helpful explanation"
}

5. Examples:
- If question: "What does this repo do?"
- Answer: explain purpose

- If question: "Is this frontend or backend?"
- Answer accordingly

6. Structure:
- Create askController.js
- Add route in routes/ask.js
- Use service layer (bobService.js)

7. Add validation:
- if question missing → return error
- if github_url missing → return error

8. Keep answers short (2–4 lines), clear, and professional

9. Do NOT use external APIs

Keep code clean and consistent with existing structure.

---

**Status:** active  **Date:** 2026-09-26

---

### 👤 User

Add a new POST /ask endpoint to my existing backend.

Requirements:

1. Input:
{
  "github_url": "string",
  "question": "string"
}

2. Use the same logic as /analyze to understand repo type:
   - backend / frontend / general

3. Generate a smart AI-like answer based on:
   - repository type
   - user question

4. Response format:
{
  "answer": "clear and helpful explanation"
}

5. Examples:
- If question: "What does this repo do?"
- Answer: explain purpose

- If question: "Is this frontend or backend?"
- Answer accordingly

6. Structure:
- Create askController.js
- Add route in routes/ask.js
- Use service layer (bobService.js)

7. Add validation:
- if question missing → return error
- if github_url missing → return error

8. Keep answers short (2–4 lines), clear, and professional

9. Do NOT use external APIs

Keep code clean and consistent with existing structure.

---

### 🤖 Assistant

> 🔧 called: list_files

Let me first explore the existing codebase structure to understand the conventions before implementing anything.

> 🔧 **list_files** — .

### 🤖 Assistant

> 🔧 called: read_file, read_file, list_files, list_files



> 🔧 **list_files** — backend/routes

> 🔧 **list_files** — backend/services

> 🔧 **read_file** — backend/app.js

> 🔧 **read_file** — backend/controllers/analyzeController.js

### 🤖 Assistant

> 🔧 called: read_file, read_file, read_file



> 🔧 **read_file** — backend/routes/analyze.js

> 🔧 **read_file** — backend/services/bobService.js

> 🔧 **read_file** — backend/services/analyzeService.js

### 🤖 Assistant

> 🔧 called: update_todo_list

Now I have a clear picture of the codebase. Let me implement everything.

> 🔧 **update_todo_list** — [-] Add answerQuestion function to bobService.js
[ ] Create backend/controllers/askController.js
[ ] Create backend/routes/ask.js
[ ] Register ask router in backend/app.js


### 🤖 Assistant

> 🔧 called: apply_diff



> 🔧 **apply_diff** — backend/services/bobService.js

### 🤖 Assistant

> 🔧 called: update_todo_list



> 🔧 **update_todo_list** — [x] Add answerQuestion function to bobService.js
[-] Create backend/controllers/askController.js
[ ] Create backend/routes/ask.js
[ ] Register ask router in backend/app.js


### 🤖 Assistant

> 🔧 called: write_file



> 🔧 **write_file** — backend/controllers/askController.js

### 🤖 Assistant

> 🔧 called: update_todo_list



> 🔧 **update_todo_list** — [x] Add answerQuestion function to bobService.js
[x] Create backend/controllers/askController.js
[-] Create backend/routes/ask.js
[ ] Register ask router in backend/app.js


### 🤖 Assistant

> 🔧 called: write_file



> 🔧 **write_file** — const { Router } = require('express');
const { postAsk } = require('../controllers/askController');

const router = Router();

router.post('/ask', postAsk);

module.exports = router;


### 🤖 Assistant

> 🔧 called: update_todo_list



> 🔧 **update_todo_list** — [x] Add answerQuestion function to bobService.js
[x] Create backend/controllers/askController.js
[x] Create backend/routes/ask.js
[-] Register ask router in backend/app.js


### 🤖 Assistant

> 🔧 called: apply_diff



> 🔧 **apply_diff** — backend/app.js

### 🤖 Assistant

> 🔧 called: execute_command

Now let's validate by starting the server and testing the endpoint:

> 🔧 **execute_command** — node -e "
const bobService = require('./services/bobService');

// Test 1: purpose question on a backend repo
let r = bobService.answerQuestion('https://github.com/alice/express-api-server', 'What does this repo do?');
console.log('Test 1:', JSON.stringify(r));

// Test 2: type question on a frontend repo
r = bobService.answerQuestion('https://github.com/bob/react-dashboard', 'Is this frontend or backend?');
console.log('Test 2:', JSON.stringify(r));

// Test 3: generic question on a general repo
r = bobService.answerQuestion('https://github.com/carol/code-utils', 'Who made this?');
console.log('Test 3:', JSON.stringify(r));

// Test 4: fallback on unknown question
r = bobService.answerQuestion('https://github.com/dave/my-project', 'What license does it use?');
console.log('Test 4:', JSON.stringify(r));
"


### 🤖 Assistant

> 🔧 called: execute_command

All four cases produce the correct, clean answers. Now do a quick server smoke-test:

> 🔧 **execute_command** — $job = Start-Job { node d:\Coding\AI_projects\CodeBase-Brain\backend\app.js }; Start-Sleep 2; Invoke-RestMethod -Uri http://localhost:3001/ask -Method POST -ContentType 'application/json' -Body '{"github_url":"https://github.com/alice/express-api","question":"What does this repo do?"}'; Stop-Job $job; Remove-Job $job

### 🤖 Assistant

> 🔧 called: execute_command

The path had an underscore issue in the job context. Test directly instead:

> 🔧 **execute_command** — Start-Process -FilePath "node" -ArgumentList "app.js" -WorkingDirectory "backend" -PassThru | Tee-Object -Variable proc; Start-Sleep 2; try { Invoke-RestMethod -Uri http://localhost:3001/ask -Method POST -ContentType 'application/json' -Body '{"github_url":"https://github.com/alice/express-api","question":"What does this repo do?"}' } finally { $proc | Stop-Process -Force }

### 🤖 Assistant

> 🔧 called: execute_command

Live server responds correctly. Let's also verify the validation errors:

> 🔧 **execute_command** — Start-Process -FilePath "node" -ArgumentList "app.js" -WorkingDirectory "backend" -PassThru | Tee-Object -Variable proc; Start-Sleep 2; try {
  Write-Host "--- missing question ---"
  Invoke-RestMethod -Uri http://localhost:3001/ask -Method POST -ContentType 'application/json' -Body '{"github_url":"https://github.com/alice/express-api"}' -ErrorAction SilentlyContinue
} catch { $_.ErrorDetails.Message }
try {
  Write-Host "--- missing github_url ---"
  Invoke-RestMethod -Uri http://localhost:3001/ask -Method POST -ContentType 'application/json' -Body '{"question":"What does it do?"}' -ErrorAction SilentlyContinue
} catch { $_.ErrorDetails.Message } finally { $proc | Stop-Process -Force }

### 🤖 Assistant

> 🔧 called: update_todo_list

Both validation guards return the correct 400 errors. All done.

> 🔧 **update_todo_list** — [x] Add answerQuestion function to bobService.js
[x] Create backend/controllers/askController.js
[x] Create backend/routes/ask.js
[x] Register ask router in backend/app.js


### 🤖 Assistant

Here's a summary of everything added:

---

### Files created / modified

**[`backend/services/bobService.js`](backend/services/bobService.js)** — added `answerQuestion(githubUrl, question)`
- Reuses the same `isBackend` / `isFrontend` slug detection as `analyzeWithAI`
- Matches the question against 5 intent patterns (purpose, type, tech stack, setup, author) with type-aware answers for each
- Falls back to a short generic answer when no pattern matches
- Exported alongside `analyzeWithAI`

**[`backend/controllers/askController.js`](backend/controllers/askController.js)** *(new)*
- Validates `github_url` and `question` are present → 400 if either is missing
- Calls `bobService.answerQuestion` and returns `{ answer }` — mirrors `analyzeController` style exactly

**[`backend/routes/ask.js`](backend/routes/ask.js)** *(new)*
- Registers `POST /ask` → `postAsk`

**[`backend/app.js`](backend/app.js)** — registered `askRouter`

---

### Endpoint behaviour

| Input | Response |
|---|---|
| `{ "github_url": "...", "question": "What does this repo do?" }` | `{ "answer": "<2-line purpose explanation>" }` |
| `{ "github_url": "...", "question": "Is this frontend or backend?" }` | `{ "answer": "This repository is a backend/frontend/general project…" }` |
| Missing `github_url` | `400 { "error": "github_url is required" }` |
| Missing `question` | `400 { "error": "question is required" }` |