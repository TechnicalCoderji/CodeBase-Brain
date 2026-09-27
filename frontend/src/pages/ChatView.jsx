import React, { useState, useRef, useEffect } from 'react';
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
