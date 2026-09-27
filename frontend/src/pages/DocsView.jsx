import React from 'react';
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
