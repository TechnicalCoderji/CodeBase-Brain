# Upgrade my existing React frontend into a modern AI platform UI.

Project: CodeBase Brain

Requirements:

1. Add Landing Page:
- Logo + App name
- Tagline: "Understand any codebase instantly"
- Button: "Start Exploring"
- Smooth transition to dashboard

2. Dashboard Layout:
- Sidebar (left):
  - GitHub URL input
  - Buttons: Analyze, Chat, Onboard, Docs
- Main content area (right)

3. Analyze View:
- Display result as cards:
  - Summary
  - Purpose
  - Key Components
- Add hover effects and clean spacing

4. Chat View:
- Implement chat UI:
  - User messages on right
  - AI messages on left
  - Scrollable
  - Input at bottom
  - Loading animation

5. Onboard View:
- Show steps as checklist with icons

6. Docs View:
- Styled README preview
- Use headings and sections

7. Design:
- Modern SaaS style
- Soft shadows, rounded corners
- Slight animations (fade, hover)

8. Dark Mode:
- Add toggle
- Ensure consistent styling

9. Branding:
- Show "CodeBase Brain"
- Footer: "Built by Team New Thinkers"
- Watermark bottom-right

10. Keep code clean and modular:
- components/
- pages/
- services/

Do not overcomplicate.
Focus on clean UI and good UX.

---

**Status:** active  **Date:** 2026-09-27

---

### 👤 User

Upgrade my existing React frontend into a modern AI platform UI.

Project: CodeBase Brain

Requirements:

1. Add Landing Page:
- Logo + App name
- Tagline: "Understand any codebase instantly"
- Button: "Start Exploring"
- Smooth transition to dashboard

2. Dashboard Layout:
- Sidebar (left):
  - GitHub URL input
  - Buttons: Analyze, Chat, Onboard, Docs
- Main content area (right)

3. Analyze View:
- Display result as cards:
  - Summary
  - Purpose
  - Key Components
- Add hover effects and clean spacing

4. Chat View:
- Implement chat UI:
  - User messages on right
  - AI messages on left
  - Scrollable
  - Input at bottom
  - Loading animation

5. Onboard View:
- Show steps as checklist with icons

6. Docs View:
- Styled README preview
- Use headings and sections

7. Design:
- Modern SaaS style
- Soft shadows, rounded corners
- Slight animations (fade, hover)

8. Dark Mode:
- Add toggle
- Ensure consistent styling

9. Branding:
- Show "CodeBase Brain"
- Footer: "Built by Team New Thinkers"
- Watermark bottom-right

10. Keep code clean and modular:
- components/
- pages/
- services/

Do not overcomplicate.
Focus on clean UI and good UX.

---

### 🤖 Assistant

> 🔧 called: list_files



> 🔧 **list_files** — .

### 🤖 Assistant

> 🔧 called: list_files



> 🔧 **list_files** — frontend

### 🤖 Assistant

> 🔧 called: list_files, list_files



> 🔧 **list_files** — frontend/pages

> 🔧 **list_files** — frontend/src

### 🤖 Assistant

> 🔧 called: read_file, read_file, read_file



> 🔧 **read_file** — frontend/src/App.jsx

> 🔧 **read_file** — frontend/package.json

> 🔧 **read_file** — frontend/src/services/api.js

### 🤖 Assistant

> 🔧 called: read_file, read_file, read_file, read_file



> 🔧 **read_file** — frontend/src/main.jsx

> 🔧 **read_file** — frontend/src/components/ResultCard.jsx

> 🔧 **read_file** — frontend/src/App.css

> 🔧 **read_file** — frontend/src/components/InputPanel.jsx

### 🤖 Assistant

> 🔧 called: update_todo_list

Good. Now I have a complete picture of the existing codebase. Let me plan and build this out.

> 🔧 **update_todo_list** — 
[-] Create new folder structure: components/ and pages/
[ ] Write LandingPage component
[ ] Write Sidebar component
[ ] Write AnalyzeView component (cards for summary/purpose/key components)
[ ] Write ChatView component (full chat UI)
[ ] Write OnboardView component (checklist with icons)
[ ] Write DocsView component (styled README preview)
[ ] Write DarkModeToggle component
[ ] Rewrite App.jsx with view routing, dark mode state, landing→dashboard transition
[ ] Rewrite App.css with full modern SaaS design system + dark mode


### 🤖 Assistant

> 🔧 called: write_file

Now I'll create all the files in parallel — the structure, all components, pages, and the rewritten App:

> 🔧 **write_file** — frontend/src/pages/LandingPage.jsx

### 🤖 Assistant

> 🔧 called: write_file



> 🔧 **write_file** — import React from 'react';

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


### 🤖 Assistant

> 🔧 called: write_file



> 🔧 **write_file** — import React from 'react';

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


### 🤖 Assistant

> 🔧 called: write_file



> 🔧 **write_file** — import React, { useState, useRef, useEffect } from 'react';
import { LoadingState, EmptyState, ErrorBanner } from './AnalyzeView';

export default function ChatView({ repoUrl, onAsk }) {
  const [messages, setMessages]   = useState([]);
  const [input, setInput]         = useState('');
  const [thinking, setThinking]   = useState(false);
  const bottomRef                 = useRef(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, thinking]);

  async function handleSend() {
    const text = input.trim();
    if (!text || !repoUrl || thinking) return;

    setInput('');
    setMessages((prev) => [...prev, { role: 'user', text }]);
    setThinking(true);

    try {
      const data = await onAsk(repoUrl, text);
      const answer = typeof data === 'string' ? data : (data.answer || data.response || data.message || JSON.stringify(data, null, 2));
      setMessages((prev) => [...prev, { role: 'ai', text: answer }]);
    } catch (err) {
      setMessages((prev) => [...prev, { role: 'ai', text: `Error: ${err.message}`, isError: true }]);
    } finally {
      setThinking(false);
    }
  }

  function handleKeyDown(e) {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  }

  if (!repoUrl) {
    return (
      <div className="view-pane">
        <EmptyState icon="💬" title="No Repository" desc="Enter a GitHub URL in the sidebar to start chatting." />
      </div>
    );
  }

  return (
    <div className="view-pane chat-pane">
      <div className="view-header">
        <h2 className="view-title">AI Chat</h2>
        <p className="view-subtitle">Ask anything about the codebase.</p>
      </div>

      <div className="chat-messages">
        {messages.length === 0 && (
          <div className="chat-welcome">
            <span className="state-icon">🤖</span>
            <p>Ask me anything about this repository — architecture, patterns, how a feature works, you name it.</p>
          </div>
        )}
        {messages.map((msg, i) => (
          <ChatBubble key={i} role={msg.role} text={msg.text} isError={msg.isError} />
        ))}
        {thinking && <ThinkingBubble />}
        <div ref={bottomRef} />
      </div>

      <div className="chat-input-row">
        <textarea
          className="chat-input"
          placeholder="Ask about the codebase… (Enter to send)"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
          rows={1}
          disabled={thinking}
        />
        <button
          className="btn btn-primary chat-send-btn"
          onClick={handleSend}
          disabled={!input.trim() || thinking}
          aria-label="Send"
        >
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
            <path d="M2 9h14M9 2l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
      </div>
    </div>
  );
}

function ChatBubble({ role, text, isError }) {
  const isUser = role === 'user';
  return (
    <div className={`chat-bubble-row ${isUser ? 'chat-bubble-row--user' : 'chat-bubble-row--ai'}`}>
      {!isUser && (
        <div className="chat-avatar chat-avatar--ai">🤖</div>
      )}
      <div className={`chat-bubble ${isUser ? 'chat-bubble--user' : 'chat-bubble--ai'}${isError ? ' chat-bubble--error' : ''}`}>
        {text}
      </div>
      {isUser && (
        <div className="chat-avatar chat-avatar--user">👤</div>
      )}
    </div>
  );
}

function ThinkingBubble() {
  return (
    <div className="chat-bubble-row chat-bubble-row--ai">
      <div className="chat-avatar chat-avatar--ai">🤖</div>
      <div className="chat-bubble chat-bubble--ai chat-bubble--thinking">
        <span className="dot-pulse" /><span className="dot-pulse" /><span className="dot-pulse" />
      </div>
    </div>
  );
}


### 🤖 Assistant

> 🔧 called: write_file



> 🔧 **write_file** — import React from 'react';
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


### 🤖 Assistant

> 🔧 called: write_file



> 🔧 **write_file** — import React from 'react';
import { LoadingState, EmptyState, ErrorBanner } from './AnalyzeView';

export default function DocsView({ data, error, loading, repoUrl, onGenerateDoc }) {
  if (loading) return <LoadingState label="Generating documentation…" />;

  return (
    <div className="view-pane">
      <div className="view-header">
        <h2 className="view-title">Documentation</h2>
        <p className="view-subtitle">AI-generated README and API documentation for this repository.</p>
      </div>

      {!data && !error && (
        <EmptyState
          icon="📄"
          title="Generate Docs"
          desc="Create comprehensive documentation for this repository."
          action={repoUrl ? { label: 'Generate Docs', onClick: onGenerateDoc } : null}
        />
      )}

      {error && <ErrorBanner message={error} />}

      {data && <DocsContent data={data} />}
    </div>
  );
}

function DocsContent({ data }) {
  const content = typeof data === 'string'
    ? data
    : data.documentation || data.readme || data.content || data.docs || JSON.stringify(data, null, 2);

  return (
    <div className="docs-content">
      <div className="docs-toolbar">
        <span className="docs-toolbar__label">README.md</span>
        <button
          className="docs-toolbar__copy btn-ghost"
          onClick={() => navigator.clipboard?.writeText(content)}
        >
          📋 Copy
        </button>
      </div>
      <div className="docs-body">
        <MarkdownPreview text={content} />
      </div>
    </div>
  );
}

function MarkdownPreview({ text }) {
  // Lightweight markdown renderer — no external deps needed
  const lines = text.split('\n');
  const elements = [];
  let i = 0;

  while (i < lines.length) {
    const line = lines[i];

    if (/^#{1,6}\s/.test(line)) {
      const level = line.match(/^(#+)/)[1].length;
      const content = line.replace(/^#+\s/, '');
      const Tag = `h${Math.min(level, 6)}`;
      elements.push(<Tag key={i} className={`md-h md-h${level}`}>{content}</Tag>);
      i++;
    } else if (/^---+$/.test(line.trim())) {
      elements.push(<hr key={i} className="md-hr" />);
      i++;
    } else if (/^[-*+]\s/.test(line)) {
      const items = [];
      while (i < lines.length && /^[-*+]\s/.test(lines[i])) {
        items.push(<li key={i}>{lines[i].replace(/^[-*+]\s/, '')}</li>);
        i++;
      }
      elements.push(<ul key={`ul-${i}`} className="md-ul">{items}</ul>);
    } else if (/^\d+\.\s/.test(line)) {
      const items = [];
      while (i < lines.length && /^\d+\.\s/.test(lines[i])) {
        items.push(<li key={i}>{lines[i].replace(/^\d+\.\s/, '')}</li>);
        i++;
      }
      elements.push(<ol key={`ol-${i}`} className="md-ol">{items}</ol>);
    } else if (line.startsWith('```')) {
      const codeLines = [];
      i++;
      while (i < lines.length && !lines[i].startsWith('```')) {
        codeLines.push(lines[i]);
        i++;
      }
      elements.push(<pre key={`code-${i}`} className="md-code"><code>{codeLines.join('\n')}</code></pre>);
      i++;
    } else if (line.trim() === '') {
      elements.push(<div key={i} className="md-spacer" />);
      i++;
    } else {
      elements.push(<p key={i} className="md-p">{line}</p>);
      i++;
    }
  }

  return <div className="md-preview">{elements}</div>;
}


### 🤖 Assistant

> 🔧 called: write_file

Now rewrite the main App.jsx and App.css:

> 🔧 **write_file** — import React, { useState } from 'react';
import { api } from './services/api';
import LandingPage from './pages/LandingPage';
import Sidebar from './components/Sidebar';
import AnalyzeView from './pages/AnalyzeView';
import ChatView from './pages/ChatView';
import OnboardView from './pages/OnboardView';
import DocsView from './pages/DocsView';

export default function App() {
  const [showLanding, setShowLanding] = useState(true);
  const [darkMode,    setDarkMode]    = useState(false);
  const [repoUrl,     setRepoUrl]     = useState('');
  const [activeView,  setActiveView]  = useState('analyze');

  // Per-view state
  const [analyzeData,  setAnalyzeData]  = useState(null);
  const [analyzeErr,   setAnalyzeErr]   = useState(null);
  const [analyzeLoad,  setAnalyzeLoad]  = useState(false);

  const [onboardData,  setOnboardData]  = useState(null);
  const [onboardErr,   setOnboardErr]   = useState(null);
  const [onboardLoad,  setOnboardLoad]  = useState(false);

  const [docsData,     setDocsData]     = useState(null);
  const [docsErr,      setDocsErr]      = useState(null);
  const [docsLoad,     setDocsLoad]     = useState(false);

  async function handleAnalyze() {
    if (!repoUrl) return;
    setActiveView('analyze');
    setAnalyzeLoad(true);
    setAnalyzeErr(null);
    try {
      const data = await api.analyze(repoUrl);
      setAnalyzeData(data);
    } catch (e) {
      setAnalyzeErr(e.message);
    } finally {
      setAnalyzeLoad(false);
    }
  }

  async function handleOnboard() {
    if (!repoUrl) return;
    setOnboardLoad(true);
    setOnboardErr(null);
    try {
      const data = await api.onboard(repoUrl);
      setOnboardData(data);
    } catch (e) {
      setOnboardErr(e.message);
    } finally {
      setOnboardLoad(false);
    }
  }

  async function handleGenerateDoc() {
    if (!repoUrl) return;
    setDocsLoad(true);
    setDocsErr(null);
    try {
      const data = await api.generateDoc(repoUrl);
      setDocsData(data);
    } catch (e) {
      setDocsErr(e.message);
    } finally {
      setDocsLoad(false);
    }
  }

  if (showLanding) {
    return (
      <div className={darkMode ? 'dark' : ''}>
        <LandingPage onStart={() => setShowLanding(false)} />
      </div>
    );
  }

  const viewProps = {
    analyze: (
      <AnalyzeView
        data={analyzeData}
        error={analyzeErr}
        loading={analyzeLoad}
        repoUrl={repoUrl}
        onAnalyze={handleAnalyze}
      />
    ),
    chat: (
      <ChatView
        repoUrl={repoUrl}
        onAsk={(url, q) => api.ask(url, q)}
      />
    ),
    onboard: (
      <OnboardView
        data={onboardData}
        error={onboardErr}
        loading={onboardLoad}
        repoUrl={repoUrl}
        onOnboard={handleOnboard}
      />
    ),
    docs: (
      <DocsView
        data={docsData}
        error={docsErr}
        loading={docsLoad}
        repoUrl={repoUrl}
        onGenerateDoc={handleGenerateDoc}
      />
    ),
  };

  return (
    <div className={`dashboard${darkMode ? ' dark' : ''}`}>
      <Sidebar
        repoUrl={repoUrl}
        setRepoUrl={setRepoUrl}
        activeView={activeView}
        onView={setActiveView}
        loading={analyzeLoad || onboardLoad || docsLoad}
        darkMode={darkMode}
        onToggleDark={() => setDarkMode((v) => !v)}
      />
      <main className="main-content">
        <div className="main-view fade-in" key={activeView}>
          {viewProps[activeView]}
        </div>
        <div className="watermark">CodeBase Brain</div>
      </main>
    </div>
  );
}


### 🤖 Assistant

> 🔧 called: write_file

Now write the complete new CSS:

> 🔧 **write_file** — /* ── Reset ─────────────────────────────────────────────── */
*, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

/* ── Design Tokens (light) ─────────────────────────────── */
:root {
  --bg:            #f0f2f7;
  --surface:       #ffffff;
  --surface-hover: #f5f6fa;
  --border:        #e2e4ec;
  --text:          #1a1d23;
  --text-muted:    #6b7280;
  --text-faint:    #9ca3af;
  --accent:        #3b6ef0;
  --accent-hover:  #2d5cd8;
  --accent-light:  #eff3ff;
  --secondary:     #7c5cd8;
  --error:         #dc2626;
  --error-bg:      #fef2f2;
  --error-border:  #fca5a5;
  --sidebar-w:     260px;
  --radius:        12px;
  --radius-sm:     8px;
  --shadow-sm:     0 1px 3px rgba(0,0,0,.07), 0 1px 2px rgba(0,0,0,.04);
  --shadow:        0 4px 16px rgba(0,0,0,.08), 0 1px 3px rgba(0,0,0,.04);
  --shadow-lg:     0 8px 32px rgba(0,0,0,.12), 0 2px 8px rgba(0,0,0,.06);
  --transition:    .18s ease;
  font-size: 15px;
}

/* ── Dark mode tokens ──────────────────────────────────── */
.dark {
  --bg:            #0f1117;
  --surface:       #1a1d27;
  --surface-hover: #22263a;
  --border:        #2a2e3e;
  --text:          #e8eaf0;
  --text-muted:    #9ca3af;
  --text-faint:    #6b7280;
  --accent:        #5b8af5;
  --accent-hover:  #4a79e8;
  --accent-light:  #1e2540;
  --secondary:     #9d7ef5;
  --error:         #f87171;
  --error-bg:      #2a1010;
  --error-border:  #7f1d1d;
  --shadow-sm:     0 1px 3px rgba(0,0,0,.3);
  --shadow:        0 4px 16px rgba(0,0,0,.4);
  --shadow-lg:     0 8px 32px rgba(0,0,0,.5);
}

body {
  font-family: -apple-system, 'Segoe UI', system-ui, sans-serif;
  background: var(--bg);
  color: var(--text);
  line-height: 1.6;
  min-height: 100vh;
  transition: background var(--transition), color var(--transition);
}

/* ═══════════════════════════════════════════════════════
   LANDING PAGE
═══════════════════════════════════════════════════════ */
.landing {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 48px 24px;
  background: var(--bg);
  animation: fadeIn .5s ease both;
}

.landing__content {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  text-align: center;
  max-width: 520px;
}

.landing__logo {
  animation: floatUp .6s cubic-bezier(.16,1,.3,1) both;
}

.landing__title {
  font-size: 2.8rem;
  font-weight: 800;
  letter-spacing: -1px;
  color: var(--text);
  animation: floatUp .6s .1s cubic-bezier(.16,1,.3,1) both;
}

.landing__tagline {
  font-size: 1.25rem;
  color: var(--accent);
  font-weight: 600;
  animation: floatUp .6s .15s cubic-bezier(.16,1,.3,1) both;
}

.landing__sub {
  font-size: .95rem;
  color: var(--text-muted);
  line-height: 1.7;
  animation: floatUp .6s .2s cubic-bezier(.16,1,.3,1) both;
}

.landing__cta {
  margin-top: 8px;
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 1rem;
  padding: 13px 28px;
  animation: floatUp .6s .25s cubic-bezier(.16,1,.3,1) both;
}

.landing__features {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  justify-content: center;
  margin-top: 8px;
  animation: floatUp .6s .3s cubic-bezier(.16,1,.3,1) both;
}

.landing__feature-chip {
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 6px 14px;
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: 99px;
  font-size: .82rem;
  color: var(--text-muted);
  font-weight: 500;
  box-shadow: var(--shadow-sm);
}

.landing__footer {
  margin-top: 48px;
  font-size: .8rem;
  color: var(--text-faint);
}

/* ═══════════════════════════════════════════════════════
   DASHBOARD SHELL
═══════════════════════════════════════════════════════ */
.dashboard {
  display: flex;
  min-height: 100vh;
  background: var(--bg);
}

/* ── Sidebar ─────────────────────────────────────────── */
.sidebar {
  width: var(--sidebar-w);
  min-height: 100vh;
  background: var(--surface);
  border-right: 1px solid var(--border);
  display: flex;
  flex-direction: column;
  padding: 20px 16px 16px;
  position: sticky;
  top: 0;
  height: 100vh;
  overflow-y: auto;
  box-shadow: var(--shadow-sm);
  transition: background var(--transition), border-color var(--transition);
}

.sidebar__brand {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 4px 0 20px;
  border-bottom: 1px solid var(--border);
  margin-bottom: 20px;
}

.sidebar__brand-name {
  font-size: .95rem;
  font-weight: 700;
  color: var(--text);
  letter-spacing: -.2px;
}

.sidebar__section-label {
  font-size: .7rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: .07em;
  color: var(--text-faint);
  margin-bottom: 8px;
}

.sidebar__section-label--mt {
  margin-top: 20px;
}

.sidebar__url-field {
  display: flex;
  align-items: center;
  gap: 8px;
  background: var(--bg);
  border: 1px solid var(--border);
  border-radius: var(--radius-sm);
  padding: 0 10px;
  transition: border-color var(--transition);
}

.sidebar__url-field:focus-within {
  border-color: var(--accent);
}

.sidebar__url-icon { flex-shrink: 0; }

.sidebar__input {
  flex: 1;
  border: none;
  background: transparent;
  padding: 9px 0;
  font-size: .85rem;
  color: var(--text);
  outline: none;
  min-width: 0;
}

.sidebar__input::placeholder { color: var(--text-faint); }

.sidebar__input:disabled { opacity: .6; cursor: not-allowed; }

.sidebar__nav {
  display: flex;
  flex-direction: column;
  gap: 2px;
}

.sidebar__nav-item {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 9px 12px;
  border: none;
  border-radius: var(--radius-sm);
  background: transparent;
  color: var(--text-muted);
  font-size: .88rem;
  font-weight: 500;
  cursor: pointer;
  transition: background var(--transition), color var(--transition);
  text-align: left;
  width: 100%;
}

.sidebar__nav-item:hover {
  background: var(--surface-hover);
  color: var(--text);
}

.sidebar__nav-item--active {
  background: var(--accent-light);
  color: var(--accent);
  font-weight: 600;
}

.sidebar__nav-icon { font-size: 1rem; }

.sidebar__spacer { flex: 1; }

.sidebar__dark-toggle {
  display: flex;
  align-items: center;
  gap: 6px;
  width: 100%;
  padding: 8px 12px;
  border: 1px solid var(--border);
  border-radius: var(--radius-sm);
  background: var(--bg);
  color: var(--text-muted);
  font-size: .82rem;
  cursor: pointer;
  transition: background var(--transition);
  margin-bottom: 12px;
}

.sidebar__dark-toggle:hover { background: var(--surface-hover); color: var(--text); }

.sidebar__footer {
  font-size: .72rem;
  color: var(--text-faint);
  text-align: center;
  padding-top: 8px;
  border-top: 1px solid var(--border);
}

/* ── Main content ────────────────────────────────────── */
.main-content {
  flex: 1;
  min-width: 0;
  position: relative;
  display: flex;
  flex-direction: column;
}

.main-view {
  flex: 1;
  padding: 36px 40px 60px;
  max-width: 900px;
  width: 100%;
}

.watermark {
  position: fixed;
  bottom: 18px;
  right: 24px;
  font-size: .7rem;
  font-weight: 700;
  letter-spacing: .05em;
  color: var(--text-faint);
  opacity: .4;
  pointer-events: none;
  user-select: none;
}

/* ═══════════════════════════════════════════════════════
   SHARED VIEW PARTS
═══════════════════════════════════════════════════════ */
.view-pane { animation: fadeIn .25s ease both; }

.view-header { margin-bottom: 28px; }

.view-title {
  font-size: 1.5rem;
  font-weight: 700;
  letter-spacing: -.4px;
  color: var(--text);
}

.view-subtitle {
  font-size: .9rem;
  color: var(--text-muted);
  margin-top: 4px;
}

/* ── State helpers ───────────────────────────────────── */
.state-center {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 12px;
  padding: 80px 24px;
  text-align: center;
}

.state-icon { font-size: 2.5rem; }

.state-title {
  font-size: 1.1rem;
  font-weight: 700;
  color: var(--text);
}

.state-desc {
  font-size: .9rem;
  color: var(--text-muted);
  max-width: 340px;
}

.state-label {
  font-size: .9rem;
  color: var(--text-muted);
}

.error-banner {
  display: flex;
  align-items: flex-start;
  gap: 10px;
  padding: 14px 18px;
  background: var(--error-bg);
  border: 1px solid var(--error-border);
  border-radius: var(--radius-sm);
  color: var(--error);
  font-size: .9rem;
  margin-bottom: 20px;
}

/* ═══════════════════════════════════════════════════════
   ANALYZE VIEW
═══════════════════════════════════════════════════════ */
.analyze-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 18px;
}

.analyze-card {
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: var(--radius);
  padding: 20px 22px 22px;
  box-shadow: var(--shadow-sm);
  transition: box-shadow var(--transition), transform var(--transition);
}

.analyze-card:hover {
  box-shadow: var(--shadow);
  transform: translateY(-2px);
}

.analyze-card--wide {
  grid-column: 1 / -1;
}

.analyze-card__header {
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 12px;
}

.analyze-card__icon { font-size: 1.1rem; }

.analyze-card__title {
  font-size: .75rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: .07em;
  color: var(--text-muted);
}

.analyze-card__text {
  font-size: .9rem;
  color: var(--text);
  line-height: 1.7;
}

.analyze-card__list {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.analyze-card__list-item {
  display: flex;
  align-items: flex-start;
  gap: 8px;
  font-size: .88rem;
  color: var(--text);
  line-height: 1.5;
}

.analyze-card__bullet {
  flex-shrink: 0;
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: var(--accent);
  margin-top: 6px;
}

/* ═══════════════════════════════════════════════════════
   CHAT VIEW
═══════════════════════════════════════════════════════ */
.chat-pane {
  display: flex;
  flex-direction: column;
  height: calc(100vh - 36px - 60px);
}

.chat-pane .view-header { flex-shrink: 0; }

.chat-messages {
  flex: 1;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 8px 0 20px;
  scroll-behavior: smooth;
}

.chat-welcome {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
  padding: 60px 24px;
  text-align: center;
  color: var(--text-muted);
  font-size: .9rem;
}

.chat-bubble-row {
  display: flex;
  align-items: flex-end;
  gap: 8px;
}

.chat-bubble-row--user { flex-direction: row-reverse; }

.chat-avatar {
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background: var(--bg);
  border: 1px solid var(--border);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: .85rem;
  flex-shrink: 0;
}

.chat-bubble {
  max-width: 68%;
  padding: 10px 14px;
  border-radius: 16px;
  font-size: .9rem;
  line-height: 1.6;
  white-space: pre-wrap;
  word-break: break-word;
}

.chat-bubble--ai {
  background: var(--surface);
  border: 1px solid var(--border);
  border-bottom-left-radius: 4px;
  color: var(--text);
  box-shadow: var(--shadow-sm);
}

.chat-bubble--user {
  background: var(--accent);
  color: #fff;
  border-bottom-right-radius: 4px;
}

.chat-bubble--error {
  background: var(--error-bg);
  border-color: var(--error-border);
  color: var(--error);
}

.chat-bubble--thinking {
  display: flex;
  align-items: center;
  gap: 5px;
  padding: 12px 16px;
}

/* Dot pulse animation */
.dot-pulse {
  display: inline-block;
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background: var(--text-muted);
  animation: dotPulse 1.2s ease-in-out infinite;
}

.dot-pulse:nth-child(2) { animation-delay: .2s; }
.dot-pulse:nth-child(3) { animation-delay: .4s; }

@keyframes dotPulse {
  0%, 80%, 100% { transform: scale(.6); opacity: .4; }
  40%           { transform: scale(1);  opacity: 1;  }
}

.chat-input-row {
  flex-shrink: 0;
  display: flex;
  align-items: flex-end;
  gap: 10px;
  padding-top: 12px;
  border-top: 1px solid var(--border);
}

.chat-input {
  flex: 1;
  border: 1px solid var(--border);
  border-radius: var(--radius-sm);
  background: var(--surface);
  color: var(--text);
  padding: 10px 14px;
  font-size: .9rem;
  font-family: inherit;
  resize: none;
  outline: none;
  transition: border-color var(--transition);
  line-height: 1.5;
  max-height: 120px;
  overflow-y: auto;
}

.chat-input:focus { border-color: var(--accent); }
.chat-input::placeholder { color: var(--text-faint); }

.chat-send-btn {
  flex-shrink: 0;
  padding: 10px 14px;
  display: flex;
  align-items: center;
  justify-content: center;
}

/* ═══════════════════════════════════════════════════════
   ONBOARD VIEW
═══════════════════════════════════════════════════════ */
.onboard-content { display: flex; flex-direction: column; gap: 24px; }

.onboard-checklist {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.onboard-step {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 14px 18px;
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: var(--radius-sm);
  cursor: pointer;
  transition: background var(--transition), border-color var(--transition), opacity var(--transition);
  box-shadow: var(--shadow-sm);
}

.onboard-step:hover { background: var(--surface-hover); }

.onboard-step--done {
  opacity: .65;
  border-color: transparent;
  background: var(--surface-hover);
}

.onboard-step__check {
  width: 22px;
  height: 22px;
  border-radius: 6px;
  border: 2px solid var(--border);
  background: var(--bg);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  transition: background var(--transition), border-color var(--transition);
  color: var(--accent);
}

.onboard-step--done .onboard-step__check {
  background: var(--accent);
  border-color: var(--accent);
  color: #fff;
}

.onboard-step__icon { font-size: 1.15rem; }

.onboard-step__text {
  font-size: .9rem;
  color: var(--text);
  font-weight: 500;
}

.onboard-step--done .onboard-step__text {
  text-decoration: line-through;
  color: var(--text-muted);
}

.onboard-prose {
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: var(--radius);
  padding: 22px 24px;
  box-shadow: var(--shadow-sm);
}

.onboard-prose__title {
  font-size: .75rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: .07em;
  color: var(--text-muted);
  margin-bottom: 14px;
}

.onboard-prose__body {
  font-size: .9rem;
  color: var(--text);
  line-height: 1.8;
  display: flex;
  flex-direction: column;
  gap: 6px;
}

/* ═══════════════════════════════════════════════════════
   DOCS VIEW
═══════════════════════════════════════════════════════ */
.docs-content {
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: var(--radius);
  overflow: hidden;
  box-shadow: var(--shadow-sm);
}

.docs-toolbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 18px;
  background: var(--bg);
  border-bottom: 1px solid var(--border);
}

.docs-toolbar__label {
  font-size: .8rem;
  font-weight: 600;
  color: var(--text-muted);
  font-family: 'SF Mono', 'Fira Code', Consolas, monospace;
}

.btn-ghost {
  background: none;
  border: none;
  cursor: pointer;
  color: var(--text-muted);
  font-size: .8rem;
  padding: 4px 8px;
  border-radius: 5px;
  transition: background var(--transition), color var(--transition);
}

.btn-ghost:hover { background: var(--surface); color: var(--text); }

.docs-body { padding: 28px 32px 36px; }

/* Markdown preview */
.md-preview { display: flex; flex-direction: column; gap: 10px; }

.md-h { color: var(--text); font-weight: 700; margin-top: 12px; }
.md-h1 { font-size: 1.6rem; letter-spacing: -.4px; border-bottom: 2px solid var(--border); padding-bottom: 8px; }
.md-h2 { font-size: 1.2rem; letter-spacing: -.2px; border-bottom: 1px solid var(--border); padding-bottom: 6px; }
.md-h3 { font-size: 1rem; }
.md-h4, .md-h5, .md-h6 { font-size: .9rem; color: var(--text-muted); }

.md-p { font-size: .9rem; color: var(--text); line-height: 1.75; }

.md-ul, .md-ol { padding-left: 22px; font-size: .9rem; color: var(--text); line-height: 1.8; }

.md-code {
  background: var(--bg);
  border: 1px solid var(--border);
  border-radius: var(--radius-sm);
  padding: 14px 18px;
  font-family: 'SF Mono', 'Fira Code', Consolas, monospace;
  font-size: .82rem;
  color: var(--text);
  overflow-x: auto;
  white-space: pre;
}

.md-hr { border: none; border-top: 1px solid var(--border); margin: 8px 0; }

.md-spacer { height: 4px; }

/* ═══════════════════════════════════════════════════════
   SHARED BUTTONS & UTILS
═══════════════════════════════════════════════════════ */
.btn {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 9px 20px;
  border: none;
  border-radius: var(--radius-sm);
  font-size: .9rem;
  font-weight: 600;
  font-family: inherit;
  cursor: pointer;
  transition: background var(--transition), opacity var(--transition), transform var(--transition);
  white-space: nowrap;
}

.btn:disabled { opacity: .45; cursor: not-allowed; }

.btn:active:not(:disabled) { transform: scale(.97); }

.btn-primary { background: var(--accent); color: #fff; }
.btn-primary:hover:not(:disabled) { background: var(--accent-hover); }

.btn-lg { padding: 13px 28px; font-size: 1rem; border-radius: var(--radius); }

.code-block {
  background: var(--bg);
  border: 1px solid var(--border);
  border-radius: var(--radius-sm);
  padding: 16px;
  font-family: 'SF Mono', 'Fira Code', Consolas, monospace;
  font-size: .82rem;
  overflow-x: auto;
  white-space: pre-wrap;
  word-break: break-word;
  color: var(--text);
}

/* ── Spinner ─────────────────────────────────────────── */
.spinner {
  width: 18px;
  height: 18px;
  border: 2.5px solid var(--border);
  border-top-color: var(--accent);
  border-radius: 50%;
  animation: spin .7s linear infinite;
}

.spinner--lg {
  width: 36px;
  height: 36px;
  border-width: 3px;
}

@keyframes spin { to { transform: rotate(360deg); } }

/* ═══════════════════════════════════════════════════════
   ANIMATIONS
═══════════════════════════════════════════════════════ */
@keyframes fadeIn {
  from { opacity: 0; transform: translateY(6px); }
  to   { opacity: 1; transform: translateY(0);   }
}

@keyframes floatUp {
  from { opacity: 0; transform: translateY(16px); }
  to   { opacity: 1; transform: translateY(0);    }
}

.fade-in { animation: fadeIn .22s ease both; }

/* ═══════════════════════════════════════════════════════
   RESPONSIVE
═══════════════════════════════════════════════════════ */
@media (max-width: 768px) {
  :root { --sidebar-w: 220px; }
  .main-view { padding: 24px 20px 60px; }
}

@media (max-width: 600px) {
  .dashboard { flex-direction: column; }

  .sidebar {
    width: 100%;
    min-height: unset;
    height: auto;
    position: relative;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 10px;
    padding: 14px 16px;
    border-right: none;
    border-bottom: 1px solid var(--border);
    overflow-x: auto;
  }

  .sidebar__brand { border-bottom: none; padding-bottom: 0; margin-bottom: 0; }
  .sidebar__section-label, .sidebar__spacer { display: none; }
  .sidebar__url-field { min-width: 180px; flex: 1; }
  .sidebar__nav { flex-direction: row; gap: 4px; }
  .sidebar__dark-toggle, .sidebar__footer { margin: 0; }

  .main-view { padding: 20px 16px 60px; }

  .analyze-grid { grid-template-columns: 1fr; }

  .chat-pane { height: calc(100vh - 180px); }
}


### 🤖 Assistant

> 🔧 called: execute_command

Now verify the build works:

> 🔧 **execute_command** — cd frontend; npm run build 2>&1

### 🤖 Assistant

> 🔧 called: update_todo_list

Clean build, zero warnings. Let me update the todo list to completion:

> 🔧 **update_todo_list** — 
[x] Create new folder structure: components/ and pages/
[x] Write LandingPage component
[x] Write Sidebar component
[x] Write AnalyzeView component (cards for summary/purpose/key components)
[x] Write ChatView component (full chat UI)
[x] Write OnboardView component (checklist with icons)
[x] Write DocsView component (styled README preview)
[x] Rewrite App.jsx with view routing, dark mode state, landing→dashboard transition
[x] Rewrite App.css with full modern SaaS design system + dark mode


### 🤖 Assistant

Build passes cleanly (158 kB JS / 14.5 kB CSS). Here's what was built:

---

## What changed

### New file structure
```
frontend/src/
  pages/
    LandingPage.jsx   ← new
    AnalyzeView.jsx   ← new
    ChatView.jsx      ← new
    OnboardView.jsx   ← new
    DocsView.jsx      ← new
  components/
    Sidebar.jsx       ← new
    InputPanel.jsx    ← kept (unused, not deleted)
    ResultCard.jsx    ← kept (unused, not deleted)
  App.jsx             ← rewritten
  App.css             ← rewritten
  services/api.js     ← unchanged
```

### Feature tour

| Requirement | Implementation |
|---|---|
| **Landing page** | Full-screen with staggered `floatUp` entrance animation, logo SVG, tagline, feature chips, "Start Exploring" CTA → smooth fade into dashboard |
| **Dashboard shell** | Sticky sidebar (260px) + scrollable main content, CSS-variable driven |
| **Sidebar** | GitHub URL input with link icon, nav buttons (Analyze / Chat / Onboard / Docs) with active highlight, dark mode toggle, footer branding |
| **Analyze view** | 2-column card grid — Summary (full-width), Purpose, Key Components, Tech Stack; hover lift effect |
| **Chat view** | Scrollable message list, user bubbles right / AI bubbles left, animated 3-dot thinking indicator, `Enter` to send, auto-scroll |
| **Onboard view** | Interactive checkbox steps with strike-through on completion, fallback to AI-returned steps if present |
| **Docs view** | Lightweight in-app markdown renderer (headings, lists, code blocks, HR) with toolbar + clipboard copy |
| **Dark mode** | Single `.dark` class on root toggles all 16 CSS tokens; sidebar toggle button |
| **Branding** | "CodeBase Brain" logo everywhere, footer "Built by Team New Thinkers", fixed bottom-right watermark |
| **Animations** | `fadeIn` on view switch, `floatUp` staggered on landing, hover lift on cards, dot-pulse on chat loading |