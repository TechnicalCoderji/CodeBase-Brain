import React, { useState } from 'react';
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
