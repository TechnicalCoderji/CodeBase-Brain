import React from 'react';

export default function LandingPage({ onStart }) {
  return (
    <div className="landing">
      <div className="landing__content">
        <div className="landing__logo">
          <svg width="48" height="48" viewBox="0 0 48 48" fill="none" aria-hidden="true">
            <rect width="48" height="48" rx="12" fill="var(--accent)" />
            <path d="M14 16h6l4 8 4-12 4 12 3-8h3" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
            <circle cx="24" cy="34" r="3" fill="#fff" opacity="0.8" />
          </svg>
        </div>
        <h1 className="landing__title">CodeBase Brain</h1>
        <p className="landing__tagline">Understand any codebase instantly</p>
        <p className="landing__sub">
          Analyze GitHub repositories with AI — get summaries, answer questions,
          generate onboarding guides and documentation in seconds.
        </p>
        <button className="btn btn-primary btn-lg landing__cta" onClick={onStart}>
          Start Exploring
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
            <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
        <div className="landing__features">
          {[
            { icon: '🔍', label: 'Instant Analysis' },
            { icon: '💬', label: 'AI Chat' },
            { icon: '🚀', label: 'Onboarding' },
            { icon: '📄', label: 'Docs Generator' },
          ].map((f) => (
            <div key={f.label} className="landing__feature-chip">
              <span>{f.icon}</span>
              <span>{f.label}</span>
            </div>
          ))}
        </div>
      </div>
      <div className="landing__footer">
        Built by <strong>Team New Thinkers</strong>
      </div>
    </div>
  );
}
