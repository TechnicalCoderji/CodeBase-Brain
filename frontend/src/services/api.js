const BASE_URL = '';

async function post(endpoint, body) {
  const res = await fetch(`${BASE_URL}${endpoint}`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body),
  });

  if (!res.ok) {
    const err = await res.text();
    throw new Error(err || `Request failed: ${res.status}`);
  }

  return res.json();
}

export const api = {
  analyze: (repoUrl) => post('/analyze', { github_url: repoUrl }),
  ask: (repoUrl, question) => post('/ask', { github_url: repoUrl, question }),
  onboard: (repoUrl) => post('/onboard', { github_url: repoUrl }),
  generateDoc: (repoUrl) => post('/generate-doc', { github_url: repoUrl }),
};
