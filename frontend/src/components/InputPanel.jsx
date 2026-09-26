import React from 'react';

export default function InputPanel({ repoUrl, setRepoUrl, question, setQuestion, onAction, loading }) {
  return (
    <div className="input-panel">
      <div className="field">
        <label htmlFor="repo-url">GitHub Repository URL</label>
        <input
          id="repo-url"
          type="url"
          placeholder="https://github.com/owner/repo"
          value={repoUrl}
          onChange={(e) => setRepoUrl(e.target.value)}
          disabled={loading}
        />
      </div>

      <div className="field">
        <label htmlFor="question">Question</label>
        <input
          id="question"
          type="text"
          placeholder="Ask anything about the codebase…"
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
          disabled={loading}
        />
      </div>

      <div className="button-row">
        <button
          className="btn btn-primary"
          onClick={() => onAction('analyze')}
          disabled={loading || !repoUrl}
        >
          Analyze
        </button>
        <button
          className="btn btn-primary"
          onClick={() => onAction('ask')}
          disabled={loading || !repoUrl || !question}
        >
          Ask
        </button>
        <button
          className="btn btn-secondary"
          onClick={() => onAction('onboard')}
          disabled={loading || !repoUrl}
        >
          Onboard
        </button>
        <button
          className="btn btn-secondary"
          onClick={() => onAction('generateDoc')}
          disabled={loading || !repoUrl}
        >
          Generate Docs
        </button>
      </div>
    </div>
  );
}
