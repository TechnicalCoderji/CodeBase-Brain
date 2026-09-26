import React from 'react';

const TITLES = {
  analyze: 'Analysis Result',
  ask: 'Answer',
  onboard: 'Onboarding Guide',
  generateDoc: 'Generated Documentation',
};

export default function ResultCard({ type, data, error }) {
  const title = TITLES[type] ?? 'Result';

  return (
    <div className={`result-card ${error ? 'result-card--error' : ''}`}>
      <h3 className="result-card__title">{title}</h3>

      {error ? (
        <p className="result-card__error">{error}</p>
      ) : (
        <pre className="result-card__body">{formatData(data)}</pre>
      )}
    </div>
  );
}

function formatData(data) {
  if (typeof data === 'string') return data;
  return JSON.stringify(data, null, 2);
}
