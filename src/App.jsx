import React, { useState, useEffect } from 'react';
import TerminalView from './components/TerminalView';
import ExecutiveView from './components/ExecutiveView';
import MatrixRain from './components/MatrixRain';
import { toggleAudio, isAudioEnabled } from './utils/soundEffects';
import { Terminal, LayoutGrid } from 'lucide-react';

export default function App() {
  const [viewMode, setViewMode] = useState('terminal'); // 'terminal' | 'executive'
  const [matrixActive, setMatrixActive] = useState(false);
  const [soundActive, setSoundActive] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && matrixActive) {
        setMatrixActive(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [matrixActive]);

  const handleToggleSound = () => {
    const active = toggleAudio();
    setSoundActive(active);
    return active;
  };

  return (
    <div className="relative min-h-screen bg-[#05070c] text-slate-100">
      
      {/* Matrix rain overlay if activated */}
      <MatrixRain active={matrixActive} onClose={() => setMatrixActive(false)} />

      {/* Main View rendering */}
      {viewMode === 'terminal' ? (
        <TerminalView
          onSwitchToGui={() => setViewMode('executive')}
          onToggleMatrix={() => setMatrixActive((prev) => !prev)}
          soundEnabled={soundActive}
          onToggleSound={handleToggleSound}
        />
      ) : (
        <ExecutiveView
          onSwitchToTerminal={() => setViewMode('terminal')}
        />
      )}

      {/* Floating Quick View Switcher Pill */}
      <div className="fixed bottom-4 right-4 z-40">
        <button
          onClick={() => setViewMode((prev) => (prev === 'terminal' ? 'executive' : 'terminal'))}
          className="px-3.5 py-2 rounded-full bg-slate-900/90 hover:bg-slate-800 text-white text-xs font-mono border border-slate-700 shadow-2xl backdrop-blur-md flex items-center gap-2 transition-all hover:scale-105 active:scale-95 hover:border-emerald-500/50"
        >
          {viewMode === 'terminal' ? (
            <>
              <LayoutGrid size={14} className="text-cyan-400" />
              <span>Switch to Modern View</span>
            </>
          ) : (
            <>
              <Terminal size={14} className="text-emerald-400" />
              <span>Switch to Terminal</span>
            </>
          )}
        </button>
      </div>

    </div>
  );
}
