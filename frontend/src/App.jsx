import React, { useState } from 'react';
import InputPanel from './components/InputPanel';
import ResultCard from './components/ResultCard';
import { api } from './services/api';

export default function App() {
  const [repoUrl, setRepoUrl] = useState('');
  const [question, setQuestion] = useState('');
  const [loading, setLoading] = useState(false);
  const [results, setResults] = useState([]); // [{ type, data, error }]

  async function handleAction(action) {
    setLoading(true);

    try {
      let data;

      if (action === 'analyze') data = await api.analyze(repoUrl);
      else if (action === 'ask') data = await api.ask(repoUrl, question);
      else if (action === 'onboard') data = await api.onboard(repoUrl);
      else if (action === 'generateDoc') data = await api.generateDoc(repoUrl);

      setResults((prev) => [{ type: action, data, error: null }, ...prev]);
    } catch (err) {
      setResults((prev) => [{ type: action, data: null, error: err.message }, ...prev]);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="app">
      <header className="app-header">
        <h1>CodeBase Brain</h1>
        <p>Analyze, understand, and document any GitHub repository with AI.</p>
      </header>

      <InputPanel
        repoUrl={repoUrl}
        setRepoUrl={setRepoUrl}
        question={question}
        setQuestion={setQuestion}
        onAction={handleAction}
        loading={loading}
      />

      {loading && (
        <div className="loader">
          <div className="spinner" />
          Processing…
        </div>
      )}

      {results.length > 0 && (
        <div className="results">
          {results.map((r, i) => (
            <ResultCard key={i} type={r.type} data={r.data} error={r.error} />
          ))}
        </div>
      )}
    </div>
  );
}
