import React, { useState } from 'react';
import { portfolioData } from '../data/portfolioData';
import { GithubIcon, LinkedinIcon } from './SocialIcons';
import { 
  Terminal, 
  Download, 
  ExternalLink, 
  Mail, 
  Phone, 
  MapPin, 
  Award, 
  BookOpen, 
  Code2, 
  Sparkles, 
  BrainCircuit, 
  Layers, 
  CheckCircle, 
  Cpu, 
  Calendar,
  ChevronRight,
  TrendingUp,
  FileText
} from 'lucide-react';

export default function ExecutiveView({ onSwitchToTerminal }) {
  const [activeCategory, setActiveCategory] = useState('All');
  const [copiedCitation, setCopiedCitation] = useState(null);

  const categories = ['All', 'Machine Learning & Full Stack', 'Systems & Enterprise Software', 'AI & Smart Cities'];

  const filteredProjects = activeCategory === 'All' 
    ? portfolioData.projects 
    : portfolioData.projects.filter(p => p.category === activeCategory);

  const copyCitation = (title, idx) => {
    navigator.clipboard?.writeText(`${title} - Harish R K (Chennai Institute of Technology, 2026).`);
    setCopiedCitation(idx);
    setTimeout(() => setCopiedCitation(null), 2500);
  };

  return (
    <div className="min-h-screen bg-[#070a12] text-slate-100 font-sans selection:bg-emerald-500 selection:text-black">
      
      {/* TOP NAVIGATION BAR */}
      <header className="sticky top-0 z-40 bg-[#070a12]/80 backdrop-blur-md border-b border-slate-800/80">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
          
          {/* Logo / Monogram */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-emerald-500 to-cyan-500 p-0.5 shadow-lg shadow-emerald-500/20">
              <div className="w-full h-full bg-[#070a12] rounded-[10px] flex items-center justify-center font-mono font-extrabold text-emerald-400 text-sm">
                HRK
              </div>
            </div>
            <div>
              <span className="font-bold text-white tracking-tight">{portfolioData.personal.name}</span>
              <span className="hidden sm:block text-[11px] text-emerald-400 font-mono">B.E. CSE • CIT Chennai</span>
            </div>
          </div>

          {/* Nav links */}
          <nav className="hidden md:flex items-center gap-6 text-xs text-slate-300 font-medium">
            <a href="#about" className="hover:text-emerald-400 transition-colors">About</a>
            <a href="#leetcode" className="hover:text-emerald-400 transition-colors">LeetCode</a>
            <a href="#projects" className="hover:text-emerald-400 transition-colors">Projects</a>
            <a href="#publications" className="hover:text-emerald-400 transition-colors">Research</a>
            <a href="#skills" className="hover:text-emerald-400 transition-colors">Skills</a>
            <a href="#experience" className="hover:text-emerald-400 transition-colors">Experience</a>
            <a href="#contact" className="hover:text-emerald-400 transition-colors">Contact</a>
          </nav>

          {/* Action Switcher & Resume */}
          <div className="flex items-center gap-3">
            <button
              onClick={onSwitchToTerminal}
              className="px-3 py-1.5 rounded-lg bg-emerald-950/80 hover:bg-emerald-900 border border-emerald-600/50 text-emerald-300 text-xs font-mono flex items-center gap-1.5 transition-all shadow-sm"
              title="Launch Retro OLED Terminal"
            >
              <Terminal size={14} className="text-emerald-400" />
              <span>&gt;_ Terminal Mode</span>
            </button>

            <a
              href={`mailto:${portfolioData.personal.emails.primary}`}
              className="hidden sm:inline-flex px-3.5 py-1.5 rounded-lg bg-emerald-500 hover:bg-emerald-400 text-black font-semibold text-xs items-center gap-1.5 transition-all shadow-md shadow-emerald-500/20"
            >
              Hire Me
            </a>
          </div>

        </div>
      </header>

      {/* HERO SECTION */}
      <section id="about" className="relative pt-12 pb-20 px-4 sm:px-6 overflow-hidden">
        {/* Ambient background glows */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[350px] bg-emerald-500/10 blur-[150px] rounded-full pointer-events-none" />
        <div className="absolute top-20 right-10 w-[400px] h-[300px] bg-cyan-500/10 blur-[140px] rounded-full pointer-events-none" />

        <div className="max-w-5xl mx-auto">
          {/* Status badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-950/60 border border-emerald-600/40 text-emerald-400 text-xs font-mono mb-6">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span>{portfolioData.personal.status}</span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white max-w-3xl leading-[1.1]">
            Engineering Intelligent Systems & <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400">Algorithmic Solutions</span>.
          </h1>

          <p className="mt-6 text-base sm:text-lg text-slate-300 max-w-2xl leading-relaxed">
            I am a Computer Science Engineering student at <strong className="text-white">Chennai Institute of Technology (CGPA 8.30)</strong>. With a <strong className="text-amber-400">1679 LeetCode contest rating</strong> and 400+ problems solved, I engineer robust machine learning pipelines, enterprise architectures, and publish research in healthcare AI.
          </p>

          {/* Quick CTA Buttons */}
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href="#projects"
              className="px-6 py-3 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-400 hover:to-teal-400 text-black font-bold text-sm flex items-center gap-2 shadow-lg shadow-emerald-500/25 transition-all"
            >
              <span>Explore Featured Work</span>
              <ChevronRight size={16} />
            </a>

            <button
              onClick={() => alert("Resume opened. You can add your customized PDF inside the public folder as resume.pdf!")}
              className="px-5 py-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-200 border border-slate-700 font-semibold text-sm flex items-center gap-2 transition-all"
            >
              <Download size={16} className="text-emerald-400" />
              <span>Download Resume</span>
            </button>

            <button
              onClick={onSwitchToTerminal}
              className="px-5 py-3 rounded-xl bg-slate-900/60 hover:bg-slate-800/80 text-cyan-300 border border-cyan-800/40 font-mono text-sm flex items-center gap-2 transition-all"
            >
              <Terminal size={15} />
              <span>Open OLED Terminal</span>
            </button>
          </div>

          {/* METRICS COUNTER BAR */}
          <div className="mt-14 grid grid-cols-2 sm:grid-cols-5 gap-3 sm:gap-4">
            {portfolioData.metrics.map((m, idx) => (
              <div key={idx} className="p-4 rounded-xl bg-[#0d121f] border border-slate-800/80 shadow-md">
                <div className="text-2xl sm:text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-300">
                  {m.value}
                </div>
                <div className="text-xs font-semibold text-white mt-1">{m.label}</div>
                <div className="text-[11px] text-slate-400 font-mono mt-0.5">{m.detail}</div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* LEETCODE & COMPETITIVE PROGRAMMING SHOWCASE */}
      <section id="leetcode" className="py-14 px-4 sm:px-6 bg-[#0a0e1a]/60 border-y border-slate-800/60">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
            <div>
              <div className="flex items-center gap-2 text-xs font-mono text-amber-400 uppercase tracking-wider mb-2">
                <TrendingUp size={14} />
                <span>Algorithmic Rigor & Problem Solving</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                LeetCode & SkillRack Mastery
              </h2>
            </div>
            <a
              href={portfolioData.personal.socials.leetcode}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 text-xs text-amber-400 hover:text-amber-300 font-mono"
            >
              <span>View Verified LeetCode Profile</span>
              <ExternalLink size={13} />
            </a>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            
            {/* Contest Rating Card */}
            <div className="p-6 rounded-2xl bg-gradient-to-br from-[#121929] to-[#0c121e] border border-amber-900/40 relative overflow-hidden flex flex-col justify-between">
              <div className="flex justify-between items-start">
                <div>
                  <span className="text-xs font-mono text-slate-400">GLOBAL CONTEST RATING</span>
                  <div className="text-4xl font-extrabold text-amber-400 mt-1">
                    {portfolioData.leetcodeStats.rating}
                  </div>
                </div>
                <div className="w-12 h-12 rounded-xl bg-amber-950/60 border border-amber-700/40 flex items-center justify-center text-amber-400 text-xl font-bold">
                  ⚡
                </div>
              </div>
              <div className="mt-4 pt-4 border-t border-slate-800/80">
                <div className="flex justify-between text-xs text-slate-300">
                  <span>Percentile Ranking</span>
                  <span className="font-bold text-emerald-400">{portfolioData.leetcodeStats.rankingPercentile}</span>
                </div>
                <p className="text-xs text-slate-400 mt-2">
                  Consistent weekly and biweekly contest participation focusing on algorithmic efficiency, runtime complexity, and memory constraints.
                </p>
              </div>
            </div>

            {/* Solved Problems Breakdown */}
            <div className="p-6 rounded-2xl bg-[#0e1424] border border-slate-800 lg:col-span-2 flex flex-col justify-between">
              <div>
                <div className="flex justify-between items-center mb-3">
                  <span className="text-sm font-bold text-white">400+ Problems Solved Breakdown</span>
                  <span className="text-xs text-slate-400 font-mono">Difficulty Distribution</span>
                </div>

                <div className="w-full bg-slate-800 h-3 rounded-full overflow-hidden flex my-3">
                  <div style={{ width: '46%' }} className="bg-emerald-500 h-full" title="Easy: 185" />
                  <div style={{ width: '45%' }} className="bg-amber-500 h-full" title="Medium: 180" />
                  <div style={{ width: '9%' }} className="bg-rose-500 h-full" title="Hard: 35" />
                </div>

                <div className="grid grid-cols-3 gap-3 text-center mt-4">
                  <div className="p-3 bg-slate-900/80 rounded-xl border border-emerald-950">
                    <span className="text-[11px] font-bold text-emerald-400 uppercase">Easy</span>
                    <div className="text-2xl font-extrabold text-white mt-0.5">{portfolioData.leetcodeStats.breakdown.easy}</div>
                    <span className="text-[10px] text-slate-400">Arrays, Strings, Math</span>
                  </div>
                  <div className="p-3 bg-slate-900/80 rounded-xl border border-amber-950">
                    <span className="text-[11px] font-bold text-amber-400 uppercase">Medium</span>
                    <div className="text-2xl font-extrabold text-white mt-0.5">{portfolioData.leetcodeStats.breakdown.medium}</div>
                    <span className="text-[10px] text-slate-400">Graphs, DP, Trees</span>
                  </div>
                  <div className="p-3 bg-slate-900/80 rounded-xl border border-rose-950">
                    <span className="text-[11px] font-bold text-rose-400 uppercase">Hard</span>
                    <div className="text-2xl font-extrabold text-white mt-0.5">{portfolioData.leetcodeStats.breakdown.hard}</div>
                    <span className="text-[10px] text-slate-400">Advanced Algorithmic</span>
                  </div>
                </div>
              </div>

              <div className="mt-4 pt-3 border-t border-slate-800/80 flex flex-wrap gap-2 text-xs">
                {portfolioData.leetcodeStats.badges.map((b) => (
                  <span key={b} className="px-2.5 py-1 bg-slate-900 text-yellow-300 rounded-lg border border-yellow-800/40 text-[11px]">
                    🏅 {b}
                  </span>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* FEATURED PROJECTS SECTION */}
      <section id="projects" className="py-20 px-4 sm:px-6">
        <div className="max-w-5xl mx-auto">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
            <div>
              <div className="flex items-center gap-2 text-xs font-mono text-emerald-400 uppercase tracking-wider mb-2">
                <Layers size={14} />
                <span>Featured Engineering Systems</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                Software & Machine Learning Deployments
              </h2>
            </div>

            {/* Category Filter Pills */}
            <div className="flex flex-wrap gap-1.5 text-xs font-mono">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-3 py-1.5 rounded-lg transition-all ${
                    activeCategory === cat
                      ? 'bg-emerald-500 text-black font-bold'
                      : 'bg-slate-900 text-slate-400 hover:text-white border border-slate-800'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 gap-8">
            {filteredProjects.map((proj) => (
              <div
                key={proj.id}
                className="p-6 sm:p-8 rounded-2xl bg-[#0c111e] border border-slate-800/80 hover:border-emerald-500/40 transition-all shadow-xl flex flex-col justify-between"
              >
                <div>
                  <div className="flex flex-wrap items-center justify-between gap-3 mb-3">
                    <div className="flex items-center gap-3">
                      <span className="text-2xl p-2 bg-slate-900 rounded-xl border border-slate-800">
                        {proj.terminalIcon}
                      </span>
                      <div>
                        <h3 className="text-xl font-bold text-white">{proj.title}</h3>
                        <p className="text-xs text-emerald-400 font-mono">{proj.subtitle}</p>
                      </div>
                    </div>
                    <span className="px-3 py-1 bg-slate-900 border border-slate-700 text-slate-300 text-xs rounded-full font-mono">
                      {proj.category}
                    </span>
                  </div>

                  <p className="text-sm text-slate-300 leading-relaxed mt-4">
                    {proj.description}
                  </p>

                  <div className="mt-4 space-y-2">
                    <span className="text-xs font-mono text-slate-400 uppercase tracking-wider">Key Architecture Points:</span>
                    <ul className="space-y-1.5 text-xs text-slate-300">
                      {proj.points.map((pt, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <CheckCircle size={14} className="text-emerald-400 shrink-0 mt-0.5" />
                          <span>{pt}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="mt-6 pt-5 border-t border-slate-800/80 flex flex-wrap items-center justify-between gap-4">
                  {/* Tech stack badges */}
                  <div className="flex flex-wrap gap-2">
                    {proj.techStack.map((tech) => (
                      <span key={tech} className="px-2.5 py-1 bg-slate-900 text-cyan-300 rounded-md border border-slate-800 text-xs font-mono">
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="flex items-center gap-3">
                    <a
                      href={proj.github}
                      target="_blank"
                      rel="noreferrer"
                      className="px-3 py-1.5 bg-slate-800 hover:bg-slate-700 text-slate-200 rounded-lg text-xs font-semibold flex items-center gap-1.5 transition-colors"
                    >
                      <GithubIcon size={14} />
                      <span>Source Code</span>
                    </a>
                  </div>
                </div>

              </div>
            ))}
          </div>

        </div>
      </section>

      {/* PUBLICATIONS & RESEARCH SECTION */}
      <section id="publications" className="py-16 px-4 sm:px-6 bg-[#090d18] border-y border-slate-800/70">
        <div className="max-w-5xl mx-auto">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
            <div>
              <div className="flex items-center gap-2 text-xs font-mono text-cyan-400 uppercase tracking-wider mb-2">
                <BookOpen size={14} />
                <span>Academic & Peer-Reviewed Contributions</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                Authored Book Chapters & Conference Papers
              </h2>
            </div>
            <span className="text-xs text-slate-400 font-mono">Chennai Institute of Technology Research Track</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {portfolioData.publications.map((pub, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-[#0e1424] border border-cyan-950 hover:border-cyan-600/40 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="px-2.5 py-1 bg-cyan-950/80 text-cyan-300 border border-cyan-700/50 rounded-lg text-[11px] font-mono font-bold uppercase">
                      {pub.type}
                    </span>
                    <span className="text-xs text-emerald-400 font-mono font-bold">
                      {pub.year} • {pub.status}
                    </span>
                  </div>

                  <h3 className="text-base font-bold text-white leading-snug">
                    {pub.title}
                  </h3>

                  <p className="text-xs text-slate-300 mt-3 leading-relaxed">
                    {pub.description}
                  </p>

                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {pub.tags.map((t) => (
                      <span key={t} className="text-[11px] px-2 py-0.5 bg-slate-900 text-slate-300 rounded font-mono">
                        #{t}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mt-5 pt-4 border-t border-slate-800 flex items-center justify-between text-xs">
                  <span className="text-slate-400 font-mono">Author: Harish R K</span>
                  <button
                    onClick={() => copyCitation(pub.title, idx)}
                    className="px-2.5 py-1 bg-slate-800 hover:bg-slate-700 text-slate-200 rounded font-mono text-[11px] transition-colors"
                  >
                    {copiedCitation === idx ? '✓ Citation Copied' : 'Copy Citation'}
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Event Coordinator Callout */}
          <div className="mt-6 p-4 rounded-xl bg-gradient-to-r from-blue-950/40 via-slate-900 to-emerald-950/40 border border-blue-900/40 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
            <div className="flex items-center gap-3">
              <span className="text-xl">🏆</span>
              <div>
                <strong className="text-white">IEEE Student Committee Event Coordinator:</strong>
                <span className="text-slate-300 ml-1">Spearheaded and coordinated "Idea to Paper" on 21/08/2026 at CIT Chennai.</span>
              </div>
            </div>
            <span className="px-2.5 py-1 bg-slate-800 text-emerald-300 font-mono rounded shrink-0">
              CIT Research Ecosystem
            </span>
          </div>

        </div>
      </section>

      {/* TECHNICAL SKILLS BENTO GRID */}
      <section id="skills" className="py-20 px-4 sm:px-6">
        <div className="max-w-5xl mx-auto">
          
          <div className="mb-10 text-center sm:text-left">
            <div className="flex items-center gap-2 text-xs font-mono text-emerald-400 uppercase tracking-wider mb-2">
              <Cpu size={14} />
              <span>Technical Stack & Toolkit</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
              Categorized Engineering Competencies
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {Object.entries(portfolioData.skills).map(([category, items]) => (
              <div
                key={category}
                className="p-6 rounded-2xl bg-[#0c111e] border border-slate-800/80"
              >
                <h3 className="text-sm font-bold text-emerald-400 font-mono mb-4 border-b border-slate-800 pb-2">
                  {category}
                </h3>
                <div className="space-y-4">
                  {items.map((skill) => (
                    <div key={skill.name}>
                      <div className="flex justify-between items-center text-xs mb-1">
                        <span className="font-semibold text-white">{skill.name}</span>
                        <span className="text-[11px] text-slate-400 font-mono">{skill.highlight}</span>
                      </div>
                      <div className="w-full bg-slate-800/80 h-2 rounded-full overflow-hidden">
                        <div
                          className="bg-gradient-to-r from-emerald-500 to-cyan-500 h-full rounded-full transition-all duration-500"
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
      </section>

      {/* EXPERIENCE & INTERNSHIP */}
      <section id="experience" className="py-16 px-4 sm:px-6 bg-[#090d18] border-y border-slate-800/70">
        <div className="max-w-5xl mx-auto">
          
          <div className="mb-10">
            <div className="flex items-center gap-2 text-xs font-mono text-emerald-400 uppercase tracking-wider mb-2">
              <Calendar size={14} />
              <span>Career Trajectory</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
              Work & Leadership Experience
            </h2>
          </div>

          <div className="space-y-6">
            {portfolioData.experience.map((exp, i) => (
              <div
                key={i}
                className="p-6 rounded-2xl bg-[#0e1424] border border-slate-800 flex flex-col md:flex-row md:items-start justify-between gap-4"
              >
                <div className="space-y-2">
                  <div className="flex flex-wrap items-center gap-2">
                    <h3 className="text-lg font-bold text-white">{exp.role}</h3>
                    <span className="px-2 py-0.5 bg-emerald-950 text-emerald-300 border border-emerald-800 rounded text-[11px] font-mono">
                      {exp.type}
                    </span>
                  </div>
                  <div className="text-xs text-cyan-400 font-medium">
                    {exp.organization} — {exp.location}
                  </div>
                  <ul className="mt-3 space-y-1.5 text-xs text-slate-300 list-disc list-inside">
                    {exp.highlights.map((h, j) => (
                      <li key={j}>{h}</li>
                    ))}
                  </ul>
                  <div className="pt-2 flex flex-wrap gap-1.5">
                    {exp.technologies.map((t) => (
                      <span key={t} className="text-[11px] px-2 py-0.5 bg-slate-900 text-slate-300 rounded font-mono">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="shrink-0 text-xs font-mono text-slate-400 bg-slate-900 px-3 py-1.5 rounded-lg border border-slate-800">
                  {exp.period}
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* CERTIFICATIONS SECTION */}
      <section className="py-16 px-4 sm:px-6">
        <div className="max-w-5xl mx-auto">
          
          <div className="mb-8">
            <div className="flex items-center gap-2 text-xs font-mono text-amber-400 uppercase tracking-wider mb-2">
              <Award size={14} />
              <span>Continuous Upskilling</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
              Accreditations & Professional Certifications ({portfolioData.certifications.length}+)
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {portfolioData.certifications.map((c, i) => (
              <div
                key={i}
                className="p-4 rounded-xl bg-[#0c111e] border border-slate-800 hover:border-slate-700 transition-all flex flex-col justify-between"
              >
                <div>
                  <span className="text-[10px] font-mono px-2 py-0.5 bg-amber-950/60 text-amber-300 border border-amber-800/40 rounded inline-block mb-2">
                    {c.badge}
                  </span>
                  <h4 className="text-xs font-bold text-white leading-snug">{c.title}</h4>
                  <p className="text-[11px] text-slate-400 mt-1">{c.issuer}</p>
                </div>
                <div className="mt-3 pt-2 border-t border-slate-800/60 text-[10px] font-mono text-slate-500">
                  Domain: {c.domain}
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* CONTACT & CONNECT SECTION */}
      <section id="contact" className="py-20 px-4 sm:px-6 bg-[#090d18] border-t border-slate-800">
        <div className="max-w-5xl mx-auto">
          
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl font-extrabold text-white tracking-tight">
              Let's Connect & Collaborate
            </h2>
            <p className="text-slate-400 text-sm mt-3">
              I am open to Software Engineering, Machine Learning Internships, Research ventures, and algorithmic problem-solving projects.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* Primary Email */}
            <div className="p-6 rounded-2xl bg-[#0e1424] border border-slate-800 flex flex-col items-center text-center">
              <div className="w-12 h-12 rounded-xl bg-emerald-950 border border-emerald-700/40 flex items-center justify-center text-emerald-400 mb-4">
                <Mail size={22} />
              </div>
              <h4 className="text-sm font-bold text-white">Direct Emails</h4>
              <p className="text-xs text-slate-400 mt-1 mb-3">Feel free to send inquiries anytime</p>
              <a
                href={`mailto:${portfolioData.personal.emails.primary}`}
                className="text-xs text-emerald-400 font-mono hover:underline block"
              >
                {portfolioData.personal.emails.primary}
              </a>
              <a
                href={`mailto:${portfolioData.personal.emails.academic}`}
                className="text-xs text-slate-400 font-mono hover:underline mt-1 block"
              >
                {portfolioData.personal.emails.academic}
              </a>
            </div>

            {/* Direct Phone */}
            <div className="p-6 rounded-2xl bg-[#0e1424] border border-slate-800 flex flex-col items-center text-center">
              <div className="w-12 h-12 rounded-xl bg-cyan-950 border border-cyan-700/40 flex items-center justify-center text-cyan-400 mb-4">
                <Phone size={22} />
              </div>
              <h4 className="text-sm font-bold text-white">Direct Phone</h4>
              <p className="text-xs text-slate-400 mt-1 mb-3">Available during Indian Standard Time</p>
              <a
                href={`tel:${portfolioData.personal.phone}`}
                className="text-xs text-cyan-400 font-mono hover:underline"
              >
                {portfolioData.personal.phone}
              </a>
              <span className="text-[11px] text-slate-500 mt-1">Chennai, Tamil Nadu, India</span>
            </div>

            {/* Profiles & Channels */}
            <div className="p-6 rounded-2xl bg-[#0e1424] border border-slate-800 flex flex-col items-center text-center">
              <div className="w-12 h-12 rounded-xl bg-purple-950 border border-purple-700/40 flex items-center justify-center text-purple-400 mb-4">
                <ExternalLink size={22} />
              </div>
              <h4 className="text-sm font-bold text-white">Professional Profiles</h4>
              <p className="text-xs text-slate-400 mt-1 mb-3">Connect across verified handles</p>
              <div className="flex flex-wrap justify-center gap-2">
                <a
                  href={portfolioData.personal.socials.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="px-2.5 py-1 bg-slate-800 hover:bg-blue-900/60 text-slate-200 text-xs rounded border border-slate-700 flex items-center gap-1"
                >
                  <LinkedinIcon size={12} /> LinkedIn
                </a>
                <a
                  href={portfolioData.personal.socials.github}
                  target="_blank"
                  rel="noreferrer"
                  className="px-2.5 py-1 bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs rounded border border-slate-700 flex items-center gap-1"
                >
                  <GithubIcon size={12} /> GitHub
                </a>
                <a
                  href={portfolioData.personal.socials.leetcode}
                  target="_blank"
                  rel="noreferrer"
                  className="px-2.5 py-1 bg-slate-800 hover:bg-amber-950/60 text-amber-300 text-xs rounded border border-slate-700 flex items-center gap-1"
                >
                  ⚡ LeetCode
                </a>
              </div>
            </div>

          </div>

          {/* Quick Return to Terminal Banner */}
          <div className="mt-12 text-center">
            <button
              onClick={onSwitchToTerminal}
              className="px-6 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 border border-emerald-500/40 text-emerald-300 text-xs font-mono inline-flex items-center gap-2 transition-all shadow-md"
            >
              <Terminal size={14} />
              <span>Switch back to Interactive OLED Terminal View</span>
            </button>
          </div>

        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-8 px-4 text-center border-t border-slate-800/80 text-xs text-slate-500 font-mono">
        <p>© 2026 {portfolioData.personal.name}. All rights reserved.</p>
        <p className="mt-1 text-[11px] text-slate-600">Built with React 19, Vite, Tailwind CSS • Configured for Free GitHub Pages & Vercel Deployment</p>
      </footer>

    </div>
  );
}
