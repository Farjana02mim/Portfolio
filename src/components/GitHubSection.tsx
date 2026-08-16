import { useState } from 'react';
import { motion } from 'motion/react';
import { 
  Github, 
  GitFork, 
  Star, 
  ExternalLink, 
  Terminal, 
  Copy, 
  Check, 
  FolderGit2, 
  Code2, 
  ArrowUpRight,
  Sparkles
} from 'lucide-react';
import { personalInfo, githubRepos } from '../data/portfolioData';

interface GitHubSectionProps {
  isDark: boolean;
}

export function GitHubSection({ isDark }: GitHubSectionProps) {
  const [copiedRepo, setCopiedRepo] = useState<string | null>(null);

  const handleCopyClone = (repoUrl: string, name: string) => {
    navigator.clipboard.writeText(`git clone ${repoUrl}.git`);
    setCopiedRepo(name);
    setTimeout(() => setCopiedRepo(null), 2000);
  };

  // Generate realistic contribution calendar cells (simulated visual activity grid)
  const contributionWeeks = Array.from({ length: 24 }).map((_, weekIdx) => {
    return Array.from({ length: 7 }).map((_, dayIdx) => {
      const rand = (weekIdx * 7 + dayIdx * 13) % 19;
      let level = 0;
      if (rand > 14) level = 3;
      else if (rand > 9) level = 2;
      else if (rand > 4) level = 1;
      return level;
    });
  });

  const levelColorDark = [
    'bg-slate-900',
    'bg-blue-950 border border-blue-900/60',
    'bg-blue-700',
    'bg-blue-500 shadow-xs shadow-blue-500/50'
  ];

  const levelColorLight = [
    'bg-slate-100',
    'bg-blue-200',
    'bg-blue-400',
    'bg-blue-600'
  ];

  return (
    <section
      id="github"
      className={`py-24 lg:py-32 relative ${
        isDark ? 'text-slate-100' : 'text-slate-900'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-16 space-y-3"
        >
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-blue-500/10 text-blue-400 border border-blue-500/30 backdrop-blur-md">
            <Github size={13} className="text-blue-400" />
            <span>Open Source & Code Repositories</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight font-display">
            GitHub Activity & Key Repositories
          </h2>
          <p className={`text-base sm:text-lg leading-relaxed ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
            Explore open-source repositories, frontend/backend codebases, and algorithm implementations.
          </p>
        </motion.div>

        {/* Explore My Code - Prominent GitHub CTA Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5 }}
          className={`p-8 sm:p-10 rounded-3xl border backdrop-blur-xl mb-12 relative overflow-hidden text-center sm:text-left ${
            isDark 
              ? 'bg-gradient-to-r from-slate-950 via-slate-900 to-indigo-950/40 border-slate-800 shadow-xl' 
              : 'bg-gradient-to-r from-blue-50/80 via-indigo-50/50 to-white border-slate-200 shadow-md'
          }`}
        >
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="space-y-2 max-w-2xl">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-blue-500/10 text-blue-400 border border-blue-500/30">
                <Github size={13} className="text-blue-400" />
                <span>Explore Code</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold font-display tracking-tight">
                Explore My Code
              </h3>
              <p className={`text-sm sm:text-base leading-relaxed ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>
                I enjoy learning by building. Explore my GitHub repositories to see some of the projects and experiments I've worked on.
              </p>
            </div>

            <div className="shrink-0">
              <a
                id="github-cta-visit-btn"
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit Farjana Akter Mim's GitHub profile"
                className="inline-flex items-center gap-2.5 px-7 py-4 rounded-2xl font-semibold text-sm bg-slate-900 hover:bg-slate-800 text-white border border-slate-700 shadow-xl shadow-black/25 hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer group"
              >
                <Github size={18} className="group-hover:rotate-6 transition-transform" />
                <span>Visit GitHub</span>
                <ArrowUpRight size={16} className="text-slate-400 group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
            </div>
          </div>
        </motion.div>

        {/* GitHub Contribution Visualizer Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5 }}
          className={`p-6 sm:p-8 rounded-3xl border backdrop-blur-xl mb-12 overflow-x-auto ${
            isDark 
              ? 'bg-slate-950/80 border-slate-800/90 shadow-xl' 
              : 'bg-white border-slate-200 shadow-md'
          }`}
        >
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-2xl bg-blue-500/10 text-blue-400 border border-blue-500/20">
                <Code2 size={20} />
              </div>
              <div>
                <h3 className="text-sm font-bold tracking-tight font-display">Open Source Activity Overview</h3>
                <p className={`text-xs ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
                  Continuous commit history & project development lifecycle
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2 text-[11px] text-slate-400 font-mono">
              <span>Less</span>
              <div className="flex items-center gap-1">
                {(isDark ? levelColorDark : levelColorLight).map((c, i) => (
                  <div key={i} className={`w-3 h-3 rounded-xs ${c}`} />
                ))}
              </div>
              <span>More</span>
            </div>
          </div>

          {/* Grid of Weeks */}
          <div className="flex gap-1.5 justify-start sm:justify-center overflow-x-auto py-2">
            {contributionWeeks.map((week, wIdx) => (
              <div key={wIdx} className="flex flex-col gap-1.5 shrink-0">
                {week.map((level, dIdx) => (
                  <div
                    key={dIdx}
                    className={`w-3 h-3 rounded-xs transition-transform hover:scale-125 cursor-pointer ${
                      isDark ? levelColorDark[level] : levelColorLight[level]
                    }`}
                    title={`Activity level: ${level}`}
                  />
                ))}
              </div>
            ))}
          </div>
        </motion.div>

        {/* Repositories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {githubRepos.map((repo, idx) => (
            <motion.div
              key={repo.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
              whileHover={{ y: -4 }}
              className={`p-6 rounded-3xl border backdrop-blur-xl flex flex-col justify-between transition-all ${
                isDark
                  ? 'bg-slate-950/80 border-slate-800/80 hover:border-blue-500/40 shadow-lg shadow-black/20'
                  : 'bg-white border-slate-200 hover:border-blue-300 shadow-md'
              }`}
            >
              <div>
                {/* Repo Header */}
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <FolderGit2 size={16} className="text-blue-400" />
                    <span className="text-sm font-bold font-mono tracking-tight truncate max-w-[200px]">
                      {repo.name}
                    </span>
                  </div>
                  <span className={`text-[10px] font-mono px-2 py-0.5 rounded-full border ${
                    isDark ? 'bg-slate-900 border-slate-800 text-slate-400' : 'bg-slate-100 border-slate-200 text-slate-500'
                  }`}>
                    Public
                  </span>
                </div>

                <p className={`text-xs leading-relaxed mb-4 line-clamp-3 ${
                  isDark ? 'text-slate-300' : 'text-slate-600'
                }`}>
                  {repo.description}
                </p>

                {/* Topics */}
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {repo.topics.map((topic) => (
                    <span
                      key={topic}
                      className={`px-2.5 py-0.5 rounded-lg text-[10px] font-mono border ${
                        isDark ? 'bg-slate-900/90 border-slate-800 text-blue-400' : 'bg-blue-50 border-blue-100 text-blue-700'
                      }`}
                    >
                      #{topic}
                    </span>
                  ))}
                </div>
              </div>

              {/* Repo Footer */}
              <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span
                    className="w-2.5 h-2.5 rounded-full"
                    style={{ backgroundColor: repo.languageColor }}
                  />
                  <span className="text-xs font-mono">{repo.language}</span>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={() => handleCopyClone(repo.url, repo.name)}
                    className={`p-2 rounded-xl border text-xs transition-colors cursor-pointer ${
                      isDark
                        ? 'border-slate-800 text-slate-400 hover:text-white hover:bg-slate-900'
                        : 'border-slate-200 text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                    }`}
                    title="Copy git clone command"
                  >
                    {copiedRepo === repo.name ? <Check size={14} className="text-emerald-400" /> : <Copy size={14} />}
                  </button>

                  <a
                    href={repo.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`p-2 rounded-xl border text-xs transition-colors cursor-pointer ${
                      isDark
                        ? 'border-slate-800 text-slate-400 hover:text-white hover:bg-slate-900'
                        : 'border-slate-200 text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                    }`}
                    title="View repository on GitHub"
                  >
                    <ExternalLink size={14} />
                  </a>
                </div>
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
