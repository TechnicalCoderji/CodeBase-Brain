import React from 'react';

const NAV_ITEMS = [
  { id: 'analyze', label: 'Analyze', icon: '🔍' },
  { id: 'chat',    label: 'Chat',    icon: '💬' },
  { id: 'onboard', label: 'Onboard', icon: '🚀' },
  { id: 'docs',    label: 'Docs',    icon: '📄' },
];

export default function Sidebar({ repoUrl, setRepoUrl, activeView, onView, loading, darkMode, onToggleDark }) {
  return (
    <aside className="sidebar">
      <div className="sidebar__brand">
        <svg width="28" height="28" viewBox="0 0 48 48" fill="none" aria-hidden="true">
          <rect width="48" height="48" rx="12" fill="var(--accent)" />
          <path d="M14 16h6l4 8 4-12 4 12 3-8h3" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
          <circle cx="24" cy="34" r="3" fill="#fff" opacity="0.8" />
        </svg>
        <span className="sidebar__brand-name">CodeBase Brain</span>
      </div>

      <div className="sidebar__section-label">Repository</div>
      <div className="sidebar__url-field">
        <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden="true" className="sidebar__url-icon">
          <path d="M6.5 3.5a3 3 0 0 1 4.243 4.243l-1.5 1.5a3 3 0 0 1-4.243 0" stroke="var(--text-muted)" strokeWidth="1.5" strokeLinecap="round" />
          <path d="M9.5 12.5a3 3 0 0 1-4.243-4.243l1.5-1.5a3 3 0 0 1 4.243 0" stroke="var(--text-muted)" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
        <input
          type="url"
          className="sidebar__input"
          placeholder="github.com/owner/repo"
          value={repoUrl}
          onChange={(e) => setRepoUrl(e.target.value)}
          disabled={loading}
          aria-label="GitHub repository URL"
        />
      </div>

      <div className="sidebar__section-label sidebar__section-label--mt">Views</div>
      <nav className="sidebar__nav">
        {NAV_ITEMS.map((item) => (
          <button
            key={item.id}
            className={`sidebar__nav-item${activeView === item.id ? ' sidebar__nav-item--active' : ''}`}
            onClick={() => onView(item.id)}
          >
            <span className="sidebar__nav-icon">{item.icon}</span>
            {item.label}
          </button>
        ))}
      </nav>

      <div className="sidebar__spacer" />

      <button className="sidebar__dark-toggle" onClick={onToggleDark} aria-label="Toggle dark mode">
        {darkMode ? '☀️ Light Mode' : '🌙 Dark Mode'}
      </button>

      <div className="sidebar__footer">
        Built by <strong>Team New Thinkers</strong>
      </div>
    </aside>
  );
}
