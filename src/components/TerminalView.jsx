import React, { useState, useEffect, useRef } from 'react';
import { portfolioData } from '../data/portfolioData';
import { playKeyClick, playEnterChime } from '../utils/soundEffects';
import { 
  Terminal as TerminalIcon, 
  Volume2, 
  VolumeX, 
  Sparkles, 
  Maximize2, 
  ExternalLink, 
  Download, 
  Award, 
  BookOpen, 
  Code2, 
  Send,
  CheckCircle2,
  Cpu
} from 'lucide-react';

const ASCII_BANNER = `
 ██╗  ██╗ █████╗ ██████╗ ██╗███████╗██╗  ██╗    ██████╗ ██╗  ██╗
 ██║  ██║██╔══██╗██╔══██╗██║██╔════╝██║  ██║    ██╔══██╗██║ ██╔╝
 ███████║███████║██████╔╝██║███████╗███████║    ██████╔╝█████═╝ 
 ██╔══██║██╔══██║██╔══██╗██║╚════██║██╔══██║    ██╔══██╗██╔═██╗ 
 ██║  ██║██║  ██║██║  ██║██║███████║██║  ██║    ██║  ██║██║ ╚██╗
 ╚═╝  ╚═╝╚═╝  ╚═╝╚═╝  ╚═╝╚═╝╚══════╝╚═╝  ╚═╝    ╚═╝  ╚═╝╚═╝  ╚═╝
`;

export default function TerminalView({ onSwitchToGui, onToggleMatrix, soundEnabled, onToggleSound }) {
  const [inputVal, setInputVal] = useState('');
  const [history, setHistory] = useState([]);
  const [historyIndex, setHistoryIndex] = useState(-1);
  const [commandLog, setCommandLog] = useState([]);
  const [crtScanline, setCrtScanline] = useState(false);
  const [currentTime, setCurrentTime] = useState(new Date().toLocaleTimeString());

  const bottomRef = useRef(null);
  const inputRef = useRef(null);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date().toLocaleTimeString());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  // Initialize terminal welcome log
  useEffect(() => {
    setCommandLog([
      {
        id: 'init-banner',
        type: 'banner',
        content: null
      },
      {
        id: 'init-welcome',
        type: 'system',
        content: `Harish R K Terminal Shell [v2.4.0-release] (x86_64-cit-chennai)
Type "help" for a list of commands or click any navigation pill below.
Type "gui" anytime to switch to the Modern Executive Portfolio view.`
      }
    ]);
  }, []);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [commandLog]);

  const executeCommand = (rawCmd) => {
    const cmd = rawCmd.trim();
    if (!cmd) return;

    playEnterChime();

    // Add to history
    setHistory((prev) => [...prev, cmd]);
    setHistoryIndex(-1);

    const lower = cmd.toLowerCase();
    let responseType = 'output';
    let outputContent = null;

    if (lower === 'clear' || lower === 'cls') {
      setCommandLog([]);
      return;
    } else if (lower === 'gui' || lower === 'web' || lower === 'executive') {
      onSwitchToGui();
      return;
    } else if (lower === 'matrix') {
      onToggleMatrix();
      outputContent = 'Activated Digital Matrix Mode. Press ESC or button to exit.';
    } else if (lower === 'sound' || lower === 'audio') {
      const nowActive = onToggleSound();
      outputContent = `Terminal sound FX: ${nowActive ? 'ENABLED 🔊' : 'MUTED 🔇'}`;
    } else if (lower === 'scanline' || lower === 'crt') {
      setCrtScanline((prev) => !prev);
      outputContent = `Retro CRT scanline effect toggled.`;
    } else if (lower === 'help') {
      outputContent = (
        <div className="space-y-2 text-slate-300">
          <p className="text-emerald-400 font-semibold">Available Shell Commands:</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-1 text-xs">
            {portfolioData.terminalCommands.map((tc) => (
              <div key={tc.cmd} className="flex items-baseline gap-2">
                <span className="text-cyan-400 font-bold w-28 shrink-0">{tc.cmd}</span>
                <span className="text-slate-400">{tc.desc}</span>
              </div>
            ))}
          </div>
          <p className="text-xs text-slate-500 pt-2">Tip: Click any quick command button at the bottom of the screen!</p>
        </div>
      );
    } else if (lower === 'about' || lower === 'bio' || lower === 'whoami') {
      outputContent = (
        <div className="space-y-3">
          <div className="flex items-center gap-3">
            <span className="px-2 py-0.5 bg-emerald-950 border border-emerald-600/50 text-emerald-400 text-xs rounded font-semibold">
              {portfolioData.personal.status}
            </span>
            <span className="text-xs text-slate-400">📍 {portfolioData.personal.location}</span>
          </div>
          <p className="text-sm font-semibold text-white">{portfolioData.personal.headline}</p>
          <p className="text-xs text-slate-300 leading-relaxed">{portfolioData.personal.bio.join(' ')}</p>
          <div className="p-3 bg-slate-900/80 border border-slate-800 rounded text-xs space-y-1">
            <div className="text-emerald-400 font-bold">🎓 Education: {portfolioData.education[0].degree} in {portfolioData.education[0].field}</div>
            <div className="text-slate-300">College: <span className="text-white font-medium">{portfolioData.education[0].institution}</span></div>
            <div className="text-slate-300">Academic Standing: <span className="text-cyan-400 font-bold">CGPA {portfolioData.education[0].gpa}</span></div>
          </div>
        </div>
      );
    } else if (lower === 'projects' || lower === 'work') {
      outputContent = (
        <div className="space-y-4">
          <div className="text-emerald-400 font-bold flex items-center justify-between">
            <span>Engineering & Research Projects:</span>
            <span className="text-xs text-slate-400 font-normal">({portfolioData.projects.length} Total Projects)</span>
          </div>
          <div className="space-y-3">
            {portfolioData.projects.map((proj) => (
              <div key={proj.id} className="p-3 bg-slate-900/90 border border-slate-800 rounded hover:border-emerald-500/40 transition-colors">
                <div className="flex items-start justify-between gap-2">
                  <div className="flex items-center gap-2">
                    <span className="text-base">{proj.terminalIcon}</span>
                    <h3 className="font-bold text-white text-sm">{proj.title}</h3>
                  </div>
                  <span className="text-[10px] uppercase font-mono px-2 py-0.5 bg-emerald-950 text-emerald-300 rounded border border-emerald-800/60">
                    {proj.category}
                  </span>
                </div>
                <p className="text-xs text-slate-300 mt-1">{proj.description}</p>
                <ul className="mt-2 space-y-1 text-xs text-slate-400 list-disc list-inside">
                  {proj.points.map((pt, i) => (
                    <li key={i}>{pt}</li>
                  ))}
                </ul>
                <div className="mt-2.5 flex flex-wrap gap-1.5 pt-1 border-t border-slate-800/60">
                  {proj.techStack.map((tech) => (
                    <span key={tech} className="text-[11px] px-2 py-0.5 bg-slate-800 text-cyan-300 rounded font-mono">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      );
    } else if (lower === 'leetcode' || lower === 'dsa' || lower === 'coding') {
      const { leetcodeStats } = portfolioData;
      outputContent = (
        <div className="space-y-3 p-4 bg-slate-900/90 border border-emerald-900/40 rounded">
          <div className="flex items-center justify-between border-b border-slate-800 pb-2">
            <div className="flex items-center gap-2">
              <span className="text-amber-400 font-bold text-base">⚡ LeetCode Problem-Solving Metric</span>
              <span className="text-xs text-slate-400 font-mono">@{leetcodeStats.username}</span>
            </div>
            <span className="text-xs font-bold px-2 py-0.5 bg-amber-950/80 text-amber-300 border border-amber-600/40 rounded">
              Contest Rating: {leetcodeStats.rating}
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-center my-2">
            <div className="p-2.5 bg-slate-950 rounded border border-slate-800">
              <div className="text-xs text-emerald-400 font-bold">EASY</div>
              <div className="text-xl font-extrabold text-white">{leetcodeStats.breakdown.easy}</div>
              <div className="text-[10px] text-slate-400">Fundamentals & Math</div>
            </div>
            <div className="p-2.5 bg-slate-950 rounded border border-slate-800">
              <div className="text-xs text-amber-400 font-bold">MEDIUM</div>
              <div className="text-xl font-extrabold text-white">{leetcodeStats.breakdown.medium}</div>
              <div className="text-[10px] text-slate-400">Trees, Graphs, DP</div>
            </div>
            <div className="p-2.5 bg-slate-950 rounded border border-slate-800">
              <div className="text-xs text-rose-400 font-bold">HARD</div>
              <div className="text-xl font-extrabold text-white">{leetcodeStats.breakdown.hard}</div>
              <div className="text-[10px] text-slate-400">Complex Algorithmic</div>
            </div>
          </div>

          <div className="space-y-1">
            <div className="flex justify-between text-xs text-slate-300">
              <span>Total Problems Solved: <strong>{leetcodeStats.solvedTotal}+</strong></span>
              <span className="text-cyan-400">Ranking: {leetcodeStats.rankingPercentile}</span>
            </div>
            <div className="w-full bg-slate-800 h-2.5 rounded-full overflow-hidden flex">
              <div style={{ width: '46%' }} className="bg-emerald-500 h-full" title="Easy" />
              <div style={{ width: '45%' }} className="bg-amber-500 h-full" title="Medium" />
              <div style={{ width: '9%' }} className="bg-rose-500 h-full" title="Hard" />
            </div>
          </div>

          <div className="pt-2 flex flex-wrap gap-2 text-xs">
            <span className="text-slate-400">Platform Badges:</span>
            {leetcodeStats.badges.map((b) => (
              <span key={b} className="px-2 py-0.5 bg-slate-800 text-yellow-300 rounded border border-yellow-700/50">
                🏅 {b}
              </span>
            ))}
          </div>
        </div>
      );
    } else if (lower === 'publications' || lower === 'research' || lower === 'papers') {
      outputContent = (
        <div className="space-y-3">
          <div className="text-emerald-400 font-bold">Authored Research & Publications:</div>
          <div className="space-y-3">
            {portfolioData.publications.map((pub, idx) => (
              <div key={idx} className="p-3 bg-slate-900 border border-slate-800 rounded">
                <div className="flex items-center gap-2 mb-1">
                  <span className="px-2 py-0.5 bg-cyan-950 text-cyan-300 border border-cyan-800/60 rounded text-[10px] font-mono uppercase">
                    {pub.type}
                  </span>
                  <span className="text-xs text-emerald-400 font-semibold">{pub.year} • {pub.status}</span>
                </div>
                <h4 className="font-bold text-white text-sm">{pub.title}</h4>
                <p className="text-xs text-slate-300 mt-1 leading-relaxed">{pub.description}</p>
                <div className="flex flex-wrap gap-1.5 mt-2">
                  {pub.tags.map((t) => (
                    <span key={t} className="text-[10px] px-2 py-0.5 bg-slate-800 text-slate-300 rounded">
                      #{t}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      );
    } else if (lower === 'skills') {
      outputContent = (
        <div className="space-y-3">
          <div className="text-emerald-400 font-bold">Categorized Skill Competencies:</div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {Object.entries(portfolioData.skills).map(([category, items]) => (
              <div key={category} className="p-3 bg-slate-900/90 border border-slate-800 rounded">
                <div className="text-xs font-bold text-cyan-400 mb-2 border-b border-slate-800 pb-1">
                  {category}
                </div>
                <div className="space-y-2">
                  {items.map((skill) => (
                    <div key={skill.name} className="text-xs">
                      <div className="flex justify-between text-slate-300 mb-0.5">
                        <span className="font-medium text-white">{skill.name}</span>
                        <span className="text-[11px] text-slate-400">{skill.highlight}</span>
                      </div>
                      <div className="w-full bg-slate-800 h-1.5 rounded-full overflow-hidden">
                        <div
                          className="bg-gradient-to-r from-emerald-500 to-cyan-500 h-full rounded-full"
                          style={{ width: `${skill.level}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      );
    } else if (lower === 'experience' || lower === 'internship') {
      outputContent = (
        <div className="space-y-3">
          <div className="text-emerald-400 font-bold">Professional Experience & Leadership:</div>
          <div className="space-y-3">
            {portfolioData.experience.map((exp, i) => (
              <div key={i} className="p-3 bg-slate-900 border border-slate-800 rounded">
                <div className="flex justify-between items-start">
                  <div>
                    <h4 className="font-bold text-white text-sm">{exp.role}</h4>
                    <p className="text-xs text-cyan-400">{exp.organization} — {exp.location}</p>
                  </div>
                  <span className="text-[11px] font-mono px-2 py-0.5 bg-slate-800 text-slate-300 rounded">
                    {exp.period}
                  </span>
                </div>
                <ul className="mt-2 space-y-1 text-xs text-slate-300 list-disc list-inside">
                  {exp.highlights.map((h, j) => (
                    <li key={j}>{h}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      );
    } else if (lower === 'certs' || lower === 'certificates') {
      outputContent = (
        <div className="space-y-2">
          <div className="text-emerald-400 font-bold">Accreditations & Certifications ({portfolioData.certifications.length}+):</div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
            {portfolioData.certifications.map((c, i) => (
              <div key={i} className="p-2 bg-slate-900 border border-slate-800 rounded flex items-center justify-between">
                <div>
                  <div className="font-medium text-white">{c.title}</div>
                  <div className="text-[11px] text-slate-400">{c.issuer}</div>
                </div>
                <span className="text-[10px] font-mono px-1.5 py-0.5 bg-emerald-950 text-emerald-400 border border-emerald-800 rounded">
                  {c.badge}
                </span>
              </div>
            ))}
          </div>
        </div>
      );
    } else if (lower === 'contact' || lower === 'reach' || lower === 'socials') {
      outputContent = (
        <div className="p-4 bg-slate-900 border border-slate-800 rounded space-y-3">
          <div className="text-emerald-400 font-bold text-sm">Direct Contact Channels:</div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
            <div>
              <span className="text-slate-400">Primary Email: </span>
              <a href={`mailto:${portfolioData.personal.emails.primary}`} className="text-cyan-400 hover:underline">
                {portfolioData.personal.emails.primary}
              </a>
            </div>
            <div>
              <span className="text-slate-400">Academic Email: </span>
              <a href={`mailto:${portfolioData.personal.emails.academic}`} className="text-cyan-400 hover:underline">
                {portfolioData.personal.emails.academic}
              </a>
            </div>
            <div>
              <span className="text-slate-400">Direct Phone: </span>
              <a href={`tel:${portfolioData.personal.phone}`} className="text-emerald-300 hover:underline">
                {portfolioData.personal.phone}
              </a>
            </div>
            <div>
              <span className="text-slate-400">Location: </span>
              <span className="text-slate-200">{portfolioData.personal.location}</span>
            </div>
          </div>
          <div className="pt-2 border-t border-slate-800 flex flex-wrap gap-2 text-xs">
            <a href={portfolioData.personal.socials.linkedin} target="_blank" rel="noreferrer" className="px-3 py-1 bg-blue-900/40 text-blue-300 border border-blue-700/50 rounded flex items-center gap-1 hover:bg-blue-900/60">
              <ExternalLink size={12} /> LinkedIn Profile
            </a>
            <a href={portfolioData.personal.socials.github} target="_blank" rel="noreferrer" className="px-3 py-1 bg-slate-800 text-slate-200 border border-slate-700 rounded flex items-center gap-1 hover:bg-slate-700">
              <ExternalLink size={12} /> GitHub Repositories
            </a>
            <a href={portfolioData.personal.socials.leetcode} target="_blank" rel="noreferrer" className="px-3 py-1 bg-amber-950/60 text-amber-300 border border-amber-700/50 rounded flex items-center gap-1 hover:bg-amber-900/60">
              <ExternalLink size={12} /> LeetCode Profile
            </a>
          </div>
        </div>
      );
    } else if (lower === 'resume') {
      outputContent = (
        <div className="p-4 bg-slate-900 border border-emerald-900/50 rounded space-y-2">
          <div className="flex items-center justify-between">
            <span className="text-emerald-400 font-bold">Harish_RK_Resume.pdf</span>
            <span className="text-xs text-slate-400 font-mono">Updated October 2026</span>
          </div>
          <p className="text-xs text-slate-300">
            Includes verified credentials, LeetCode 1679 contest rating, CIT Chennai CGPA 8.30, AICTE Data Engineering internship, and Healthcare AI publications.
          </p>
          <div className="pt-2 flex gap-3">
            <button
              onClick={() => alert("Resume downloaded/opened. You can replace the resume PDF in public/resume.pdf!")}
              className="px-3 py-1.5 bg-emerald-600 hover:bg-emerald-500 text-black font-bold text-xs rounded flex items-center gap-1.5 shadow"
            >
              <Download size={13} /> Download Resume (PDF)
            </button>
            <button
              onClick={onSwitchToGui}
              className="px-3 py-1.5 bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs rounded border border-slate-700"
            >
              View Full Web Profile →
            </button>
          </div>
        </div>
      );
    } else if (lower === 'cat profile.json' || lower === 'cat resume.json') {
      outputContent = (
        <pre className="p-3 bg-slate-950 text-emerald-400 rounded text-[11px] overflow-x-auto font-mono max-h-72">
          {JSON.stringify(portfolioData, null, 2)}
        </pre>
      );
    } else if (lower === 'sudo hire' || lower === 'hire') {
      outputContent = (
        <div className="p-3 bg-emerald-950/80 border border-emerald-500/80 rounded space-y-2 text-xs">
          <div className="text-emerald-300 font-bold flex items-center gap-1.5">
            <Sparkles size={14} /> Congratulations! You made an exceptional engineering decision.
          </div>
          <p className="text-slate-200">
            Harish R K is currently available for AI/ML Internships, Software Engineering roles, and Research Collaborations.
          </p>
          <div className="pt-1">
            <a
              href={`mailto:${portfolioData.personal.emails.primary}?subject=Interview%20/%20Opportunity%20Inquiry%20for%20Harish%20R%20K`}
              className="inline-block px-3 py-1.5 bg-emerald-500 text-black font-bold rounded hover:bg-emerald-400"
            >
              Draft Email to Harish (harishrengasamyr@gmail.com) →
            </a>
          </div>
        </div>
      );
    } else if (lower === 'date') {
      outputContent = new Date().toUTCString();
    } else {
      outputContent = (
        <div className="text-rose-400 text-xs space-y-1">
          <div>zsh: command not found: {cmd}</div>
          <div className="text-slate-400">Type <span className="text-cyan-400 font-bold">help</span> to view available terminal commands, or switch to <button onClick={onSwitchToGui} className="text-emerald-400 underline font-semibold">Executive Modern UI</button>.</div>
        </div>
      );
    }

    setCommandLog((prev) => [
      ...prev,
      {
        id: `cmd-${Date.now()}`,
        type: 'executed',
        command: cmd,
        time: new Date().toLocaleTimeString(),
        output: outputContent
      }
    ]);

    setInputVal('');
  };

  const handleKeyDown = (e) => {
    playKeyClick();
    if (e.key === 'Enter') {
      executeCommand(inputVal);
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (history.length === 0) return;
      const nextIdx = historyIndex === -1 ? history.length - 1 : Math.max(0, historyIndex - 1);
      setHistoryIndex(nextIdx);
      setInputVal(history[nextIdx] || '');
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (historyIndex === -1) return;
      const nextIdx = historyIndex + 1;
      if (nextIdx >= history.length) {
        setHistoryIndex(-1);
        setInputVal('');
      } else {
        setHistoryIndex(nextIdx);
        setInputVal(history[nextIdx] || '');
      }
    } else if (e.key === 'Tab') {
      e.preventDefault();
      // Auto-complete match
      const current = inputVal.trim().toLowerCase();
      if (!current) return;
      const match = portfolioData.terminalCommands.find((c) => c.cmd.startsWith(current));
      if (match) {
        setInputVal(match.cmd);
      }
    }
  };

  const triggerQuickPill = (cmd) => {
    executeCommand(cmd);
    inputRef.current?.focus();
  };

  return (
    <div className="min-h-screen bg-[#03060c] py-4 sm:py-8 px-2 sm:px-6 flex flex-col items-center justify-center font-mono relative overflow-hidden">
      {/* Background ambient glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-emerald-500/10 blur-[140px] pointer-events-none rounded-full" />
      <div className="absolute bottom-10 right-10 w-[400px] h-[250px] bg-cyan-500/10 blur-[120px] pointer-events-none rounded-full" />

      {/* OLED LAPTOP CONTAINER */}
      <div className="w-full max-w-5xl bg-[#0b0e14] border-2 border-slate-700/80 rounded-2xl shadow-[0_25px_70px_rgba(0,0,0,0.85)] overflow-hidden flex flex-col relative transition-all">
        
        {/* Laptop Top Bezel with Webcam */}
        <div className="h-6 bg-[#12161f] border-b border-slate-800 flex items-center justify-center relative">
          <div className="flex items-center gap-1.5">
            <div className="w-2 h-2 rounded-full bg-slate-900 border border-slate-700 flex items-center justify-center">
              <div className="w-0.5 h-0.5 rounded-full bg-emerald-500/60" />
            </div>
            <div className="w-1 h-1 rounded-full bg-emerald-400 animate-pulse" title="System Sensor Active" />
          </div>
          <div className="absolute right-3 text-[10px] text-slate-500 font-mono">CIT-CHENNAI // HARISH-PRO-16</div>
        </div>

        {/* Terminal Window Header Bar */}
        <div className="bg-[#161b26] px-4 py-2.5 border-b border-slate-800/90 flex flex-wrap items-center justify-between gap-2 select-none">
          {/* Mac-style action dots */}
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-rose-500 hover:opacity-80 cursor-pointer inline-block" title="Close" />
            <span className="w-3 h-3 rounded-full bg-amber-500 hover:opacity-80 cursor-pointer inline-block" title="Minimize" />
            <span className="w-3 h-3 rounded-full bg-emerald-500 hover:opacity-80 cursor-pointer inline-block" title="Expand" />
            <span className="ml-3 text-xs text-slate-400 font-mono flex items-center gap-1.5">
              <TerminalIcon size={13} className="text-emerald-400" />
              <span>harish@portfolio: ~ (zsh)</span>
            </span>
          </div>

          {/* Quick Toolbar Controls */}
          <div className="flex items-center gap-2 text-xs">
            {/* Audio Toggle */}
            <button
              onClick={onToggleSound}
              className={`p-1.5 rounded border transition-colors flex items-center gap-1 text-[11px] ${
                soundEnabled 
                  ? 'bg-emerald-950/80 border-emerald-600/50 text-emerald-300' 
                  : 'bg-slate-800/60 border-slate-700 text-slate-400'
              }`}
              title="Toggle Mechanical Keyboard SFX"
            >
              {soundEnabled ? <Volume2 size={13} /> : <VolumeX size={13} />}
              <span className="hidden sm:inline">{soundEnabled ? 'Audio On' : 'Muted'}</span>
            </button>

            {/* Matrix Rain Button */}
            <button
              onClick={onToggleMatrix}
              className="p-1.5 rounded border border-slate-700 bg-slate-800/60 text-slate-300 hover:text-emerald-400 text-[11px] flex items-center gap-1"
              title="Toggle Matrix Digital Rain"
            >
              <Sparkles size={13} className="text-emerald-400" />
              <span className="hidden sm:inline">Matrix</span>
            </button>

            {/* SWITCH TO EXECUTIVE MODERN GUI BUTTON */}
            <button
              onClick={onSwitchToGui}
              className="px-2.5 py-1 rounded bg-gradient-to-r from-emerald-600 to-cyan-600 hover:from-emerald-500 hover:to-cyan-500 text-black font-extrabold text-[11px] flex items-center gap-1 shadow transition-all transform active:scale-95"
            >
              <Maximize2 size={12} />
              <span>Executive View (GUI)</span>
            </button>
          </div>
        </div>

        {/* OLED SCREEN TERMINAL BODY */}
        <div 
          className={`relative bg-[#050810] p-4 sm:p-6 min-h-[480px] max-h-[640px] overflow-y-auto text-slate-200 text-xs sm:text-sm font-mono scrollbar-thin scrollbar-thumb-slate-800 ${
            crtScanline ? 'before:absolute before:inset-0 before:bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%)] before:bg-[length:100%_4px] before:pointer-events-none before:z-10' : ''
          }`}
          onClick={() => inputRef.current?.focus()}
        >
          {/* Logs */}
          {commandLog.map((item) => {
            if (item.type === 'banner') {
              return (
                <div key={item.id} className="mb-4 text-emerald-400 font-mono select-none">
                  <pre className="text-[7px] sm:text-[10px] md:text-xs leading-none overflow-x-hidden text-emerald-400 font-extrabold drop-shadow-[0_0_8px_rgba(16,185,129,0.3)]">
                    {ASCII_BANNER}
                  </pre>
                  <div className="mt-2 text-xs text-slate-400 flex flex-wrap items-center justify-between gap-2 border-y border-slate-800 py-1.5">
                    <span className="text-emerald-300 font-bold">Harish R K • B.E Computer Science & Engineering</span>
                    <span className="text-slate-400">CIT Chennai | LeetCode: 1679 | GPA: 8.30</span>
                  </div>
                </div>
              );
            }

            if (item.type === 'system') {
              return (
                <div key={item.id} className="text-slate-400 mb-3 text-xs leading-relaxed border-l-2 border-emerald-500/80 pl-2">
                  {item.content}
                </div>
              );
            }

            if (item.type === 'executed') {
              return (
                <div key={item.id} className="mb-4 space-y-1.5">
                  <div className="flex items-center gap-2 text-slate-400">
                    <span className="text-emerald-400 font-bold">harish@cit:~$</span>
                    <span className="text-white font-semibold">{item.command}</span>
                    <span className="text-[10px] text-slate-600 ml-auto">{item.time}</span>
                  </div>
                  <div className="pl-3 sm:pl-4 border-l border-slate-800">
                    {item.output}
                  </div>
                </div>
              );
            }

            return null;
          })}

          {/* ACTIVE COMMAND INPUT LINE */}
          <div className="flex items-center gap-2 pt-2 text-slate-200">
            <span className="text-emerald-400 font-bold select-none shrink-0">harish@cit:~$</span>
            <input
              ref={inputRef}
              type="text"
              value={inputVal}
              onChange={(e) => setInputVal(e.target.value)}
              onKeyDown={handleKeyDown}
              autoFocus
              className="bg-transparent border-none outline-none text-white w-full font-mono text-xs sm:text-sm caret-emerald-400"
              placeholder="type 'help' or click pills below..."
            />
          </div>

          <div ref={bottomRef} />
        </div>

        {/* TERMINAL FOOTER / QUICK NAVIGATION PILLS (Identical to akashr.dev toolbar) */}
        <div className="bg-[#0e121b] border-t border-slate-800 p-2 sm:p-3 flex flex-wrap items-center justify-between gap-2 text-xs">
          <div className="flex items-center gap-1.5 overflow-x-auto pb-1 sm:pb-0 scrollbar-none w-full sm:w-auto">
            <span className="text-[11px] text-slate-500 select-none mr-1">Quick:</span>
            {[
              { label: 'about', cmd: 'about' },
              { label: 'projects', cmd: 'projects' },
              { label: 'leetcode', cmd: 'leetcode' },
              { label: 'publications', cmd: 'publications' },
              { label: 'skills', cmd: 'skills' },
              { label: 'experience', cmd: 'experience' },
              { label: 'certs', cmd: 'certs' },
              { label: 'contact', cmd: 'contact' },
              { label: 'resume', cmd: 'resume' },
              { label: 'hire me', cmd: 'sudo hire' },
            ].map((btn) => (
              <button
                key={btn.label}
                onClick={() => triggerQuickPill(btn.cmd)}
                className="px-2 py-0.5 rounded bg-slate-800/80 hover:bg-emerald-950 hover:text-emerald-300 hover:border-emerald-700/60 border border-slate-700/60 text-slate-300 text-[11px] font-mono whitespace-nowrap transition-all"
              >
                [{btn.label}]
              </button>
            ))}
          </div>

          <div className="text-[11px] text-slate-500 font-mono hidden md:flex items-center gap-2 ml-auto">
            <span>● Status: Active</span>
            <span>|</span>
            <span>{currentTime}</span>
          </div>
        </div>

      </div>

      {/* Under-Laptop Branding & Host Note */}
      <div className="mt-4 text-center text-xs text-slate-500 font-mono space-y-1">
        <p>Built for <strong className="text-slate-300">Harish R K</strong> • Ready for Production Web Hosting (GitHub Pages / Vercel / Netlify)</p>
        <p className="text-[11px]">
          Press <button onClick={onSwitchToGui} className="text-cyan-400 underline font-semibold">Executive Modern UI</button> to view the full LinkedIn recruiter portfolio layout.
        </p>
      </div>
    </div>
  );
}
