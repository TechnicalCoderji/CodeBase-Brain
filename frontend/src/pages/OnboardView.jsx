import React from 'react';
import { LoadingState, EmptyState, ErrorBanner } from './AnalyzeView';

const ONBOARD_STEPS = [
  { icon: '📦', label: 'Clone & install dependencies' },
  { icon: '⚙️', label: 'Understand configuration files' },
  { icon: '🗂️', label: 'Explore project structure' },
  { icon: '🔍', label: 'Read key entry points' },
  { icon: '🧪', label: 'Run tests & verify setup' },
  { icon: '🤝', label: 'Review contribution guidelines' },
];

export default function OnboardView({ data, error, loading, repoUrl, onOnboard }) {
  if (loading) return <LoadingState label="Generating onboarding guide…" />;

  return (
    <div className="view-pane">
      <div className="view-header">
        <h2 className="view-title">Onboarding Guide</h2>
        <p className="view-subtitle">Step-by-step guide to get up and running with this repository.</p>
      </div>

      {!data && !error && (
        <EmptyState
          icon="🚀"
          title="Get Onboarded"
          desc="Generate a tailored onboarding guide for this repository."
          action={repoUrl ? { label: 'Generate Guide', onClick: onOnboard } : null}
        />
      )}

      {error && <ErrorBanner message={error} />}

      {data && <OnboardContent data={data} />}
    </div>
  );
}

function OnboardContent({ data }) {
  // Try to extract steps array from various response shapes
  const raw = data.steps || data.guide || data.onboarding || data.content || null;
  const steps = Array.isArray(raw) ? raw : null;
  const textContent = typeof raw === 'string' ? raw : (typeof data === 'string' ? data : null);

  return (
    <div className="onboard-content">
      {/* Checklist steps */}
      <div className="onboard-checklist">
        {steps ? (
          steps.map((step, i) => (
            <OnboardStep key={i} index={i} text={typeof step === 'string' ? step : JSON.stringify(step)} />
          ))
        ) : (
          ONBOARD_STEPS.map((step, i) => (
            <OnboardStep key={i} index={i} icon={step.icon} text={step.label} defaultCheck />
          ))
        )}
      </div>

      {/* Prose content from API */}
      {textContent && (
        <div className="onboard-prose">
          <h3 className="onboard-prose__title">Detailed Guide</h3>
          <div className="onboard-prose__body">
            {textContent.split('\n').map((line, i) => (
              line.trim() ? <p key={i}>{line}</p> : <br key={i} />
            ))}
          </div>
        </div>
      )}

      {/* Fallback: show all extra keys */}
      {!steps && !textContent && (
        <div className="onboard-prose">
          <pre className="code-block">{JSON.stringify(data, null, 2)}</pre>
        </div>
      )}
    </div>
  );
}

function OnboardStep({ index, icon, text, defaultCheck }) {
  const [checked, setChecked] = React.useState(!!defaultCheck);
  return (
    <label className={`onboard-step${checked ? ' onboard-step--done' : ''}`}>
      <div className="onboard-step__check" onClick={() => setChecked((v) => !v)}>
        {checked ? (
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
            <path d="M2 7l3.5 3.5L12 3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        ) : null}
      </div>
      <span className="onboard-step__icon">{icon || `${index + 1}.`}</span>
      <span className="onboard-step__text">{text}</span>
    </label>
  );
}
