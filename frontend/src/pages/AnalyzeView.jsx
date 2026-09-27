import React from 'react';

export default function AnalyzeView({ data, error, loading, repoUrl, onAnalyze }) {
  if (loading) return <LoadingState label="Analyzing repository…" />;

  return (
    <div className="view-pane">
      <div className="view-header">
        <h2 className="view-title">Repository Analysis</h2>
        <p className="view-subtitle">AI-powered breakdown of the codebase structure and purpose.</p>
      </div>

      {!data && !error && (
        <EmptyState
          icon="🔍"
          title="Ready to Analyze"
          desc="Enter a GitHub URL in the sidebar and click Analyze."
          action={repoUrl ? { label: 'Analyze Now', onClick: onAnalyze } : null}
        />
      )}

      {error && <ErrorBanner message={error} />}

      {data && <AnalysisCards data={data} />}
    </div>
  );
}

function AnalysisCards({ data }) {
  // Normalise various backend response shapes
  const summary        = data.summary        || data.analysis        || data.overview       || null;
  const purpose        = data.purpose        || data.main_purpose    || data.goal           || null;
  const keyComponents  = data.key_components || data.components      || data.features       || null;
  const techStack      = data.tech_stack     || data.stack           || data.technologies   || null;
  const extras = Object.entries(data).filter(
    ([k]) => !['summary','analysis','overview','purpose','main_purpose','goal',
               'key_components','components','features','tech_stack','stack','technologies'].includes(k)
  );

  return (
    <div className="analyze-grid">
      {summary && (
        <AnalysisCard icon="📋" title="Summary" className="analyze-card--wide">
          <p className="analyze-card__text">{summary}</p>
        </AnalysisCard>
      )}
      {purpose && (
        <AnalysisCard icon="🎯" title="Purpose">
          <p className="analyze-card__text">{purpose}</p>
        </AnalysisCard>
      )}
      {keyComponents && (
        <AnalysisCard icon="🧩" title="Key Components">
          <ComponentList items={keyComponents} />
        </AnalysisCard>
      )}
      {techStack && (
        <AnalysisCard icon="⚙️" title="Tech Stack">
          <ComponentList items={techStack} />
        </AnalysisCard>
      )}
      {extras.map(([key, value]) => (
        <AnalysisCard key={key} icon="📌" title={humanLabel(key)}>
          {typeof value === 'string' ? (
            <p className="analyze-card__text">{value}</p>
          ) : (
            <ComponentList items={value} />
          )}
        </AnalysisCard>
      ))}
    </div>
  );
}

function AnalysisCard({ icon, title, children, className = '' }) {
  return (
    <div className={`analyze-card ${className}`}>
      <div className="analyze-card__header">
        <span className="analyze-card__icon">{icon}</span>
        <h3 className="analyze-card__title">{title}</h3>
      </div>
      <div className="analyze-card__body">{children}</div>
    </div>
  );
}

function ComponentList({ items }) {
  if (!items) return null;
  const list = Array.isArray(items) ? items : Object.entries(items).map(([k, v]) => `${k}: ${v}`);
  return (
    <ul className="analyze-card__list">
      {list.map((item, i) => (
        <li key={i} className="analyze-card__list-item">
          <span className="analyze-card__bullet" />
          {typeof item === 'string' ? item : JSON.stringify(item)}
        </li>
      ))}
    </ul>
  );
}

function humanLabel(key) {
  return key.replace(/_/g, ' ').replace(/\b\w/g, (c) => c.toUpperCase());
}

export function LoadingState({ label = 'Loading…' }) {
  return (
    <div className="state-center">
      <div className="spinner spinner--lg" />
      <p className="state-label">{label}</p>
    </div>
  );
}

export function EmptyState({ icon, title, desc, action }) {
  return (
    <div className="state-center">
      <span className="state-icon">{icon}</span>
      <h3 className="state-title">{title}</h3>
      <p className="state-desc">{desc}</p>
      {action && (
        <button className="btn btn-primary" onClick={action.onClick}>{action.label}</button>
      )}
    </div>
  );
}

export function ErrorBanner({ message }) {
  return (
    <div className="error-banner">
      <span>⚠️</span>
      <span>{message}</span>
    </div>
  );
}
