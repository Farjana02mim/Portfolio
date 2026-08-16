import { useState, MouseEvent } from 'react';
import { motion } from 'motion/react';
import { 
  Github, 
  ExternalLink, 
  FolderGit2, 
  Code2, 
  Layers, 
  Server, 
  Brain, 
  Cpu, 
  ArrowUpRight,
  Sparkles,
  ArrowRight,
  Database,
  Terminal,
  Activity,
  CheckCircle2
} from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

interface GitHubSectionProps {
  isDark: boolean;
}

interface RepositoryItem {
  name: string;
  repoName: string;
  description: string;
  category: string;
  technologies: string[];
  url: string;
}

export function GitHubSection({ isDark }: GitHubSectionProps) {
  const repositories: RepositoryItem[] = [
    {
      name: 'Zap Shift Client',
      repoName: 'zap-shift-client',
      description: 'Modern, responsive React frontend interface for the Zap Shift parcel management and delivery tracking platform.',
      category: 'Frontend Application',
      technologies: ['React', 'Vite', 'Tailwind CSS', 'JavaScript'],
      url: 'https://github.com/Farjana02mim/zap-shift-client'
    },
    {
      name: 'Zap Shift Server',
      repoName: 'zap-shift-server',
      description: 'Node.js and Express RESTful API backend handling authentication, route handlers, and database operations.',
      category: 'Backend & APIs',
      technologies: ['Node.js', 'Express.js', 'MongoDB', 'REST API'],
      url: 'https://github.com/Farjana02mim/zap-shift-server'
    },
    {
      name: 'Computer Graphics Project',
      repoName: 'Computer_Graphics_Project',
      description: 'Interactive academic computer graphics project implementing 2D/3D transformations, projections, and lighting algorithms.',
      category: 'Computer Graphics',
      technologies: ['C++', 'OpenGL', 'Graphics Algorithms'],
      url: 'https://github.com/Farjana02mim/Computer_Graphics_Project'
    },
    {
      name: 'Panda Project',
      repoName: 'Panda_Project02',
      description: 'Python programming repository focused on data analysis, exploratory data processing, and statistical visualization.',
      category: 'Data & Python',
      technologies: ['Python', 'Pandas', 'Data Analysis', 'Matplotlib'],
      url: 'https://github.com/Farjana02mim/Panda_Project02'
    },
    {
      name: 'University Management System',
      repoName: 'University_Management_System',
      description: 'Academic management system implementing object-oriented programming, file management, and record tracking.',
      category: 'Systems & OOP',
      technologies: ['C++', 'OOP', 'Data Structures', 'File Handling'],
      url: 'https://github.com/Farjana02mim/University_Management_System'
    },
    {
      name: 'Basics of Computer Graphics',
      repoName: 'Basics_of_CG',
      description: 'Fundamental computer graphics implementations including rasterization, line-drawing, clipping, and geometric rendering.',
      category: 'Computer Graphics',
      technologies: ['C++', 'Rasterization', 'Algorithms'],
      url: 'https://github.com/Farjana02mim/Basics_of_CG'
    }
  ];

  const technicalAreas = [
    {
      title: 'Web Applications',
      description: 'Building responsive interfaces and practical web applications.',
      icon: Layers,
      color: 'from-blue-500/20 to-indigo-500/10',
      iconColor: 'text-blue-400'
    },
    {
      title: 'Backend & APIs',
      description: 'Learning backend development, APIs, authentication, and data management.',
      icon: Server,
      color: 'from-emerald-500/20 to-teal-500/10',
      iconColor: 'text-emerald-400'
    },
    {
      title: 'Machine Learning',
      description: 'Exploring data preprocessing, classification, model evaluation, and machine learning workflows.',
      icon: Brain,
      color: 'from-purple-500/20 to-indigo-500/10',
      iconColor: 'text-purple-400'
    },
    {
      title: 'Computer Graphics & Image Processing',
      description: 'Learning computer graphics and digital image processing through academic and practical projects.',
      icon: Cpu,
      color: 'from-cyan-500/20 to-blue-500/10',
      iconColor: 'text-cyan-400'
    }
  ];

  const techCloud = [
    'C',
    'C++',
    'Python',
    'JavaScript',
    'HTML',
    'CSS',
    'React',
    'Vite',
    'Tailwind CSS',
    'Node.js',
    'Express.js',
    'MongoDB',
    'Firebase',
    'Pandas',
    'NumPy',
    'Scikit-learn',
    'Matplotlib',
    'Git',
    'GitHub',
    'Jupyter',
    'Google Colab',
    'Linux'
  ];

  const handleScrollToProjects = (e: MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const element = document.querySelector('#projects');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="github"
      className={`py-20 lg:py-28 relative scroll-mt-16 overflow-hidden ${
        isDark ? 'text-slate-100' : 'text-slate-900'
      }`}
    >
      {/* Background Ambient Lighting */}
      <div className="absolute top-1/4 -right-24 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/3 -left-24 w-96 h-96 bg-indigo-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* SECTION HEADING */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-14 space-y-3"
        >
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider bg-blue-500/10 text-blue-400 border border-blue-500/30 backdrop-blur-md">
            <Github size={13} className="text-blue-400" />
            <span>Open Source & Code</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight font-display">
            Explore My GitHub
          </h2>
          <p className={`text-base sm:text-lg leading-relaxed ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>
            I learn by building. Explore my repositories and projects to see what I've been working on.
          </p>
          <div className="pt-2">
            <a
              id="github-main-visit-btn"
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit Farjana Akter Mim's GitHub profile"
              className="inline-flex items-center gap-2.5 px-6 py-3 rounded-xl font-semibold text-xs sm:text-sm bg-slate-900 hover:bg-slate-800 text-white dark:bg-blue-600 dark:hover:bg-blue-500 shadow-lg shadow-blue-600/20 hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer group"
            >
              <Github size={16} className="group-hover:rotate-6 transition-transform" />
              <span>Visit GitHub</span>
              <ArrowUpRight size={14} className="text-slate-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
          </div>
        </motion.div>

        {/* 1. ZAP SHIFT - FEATURED FULL-STACK PROJECT */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5 }}
          className={`p-6 sm:p-8 lg:p-10 rounded-3xl border backdrop-blur-xl mb-14 relative overflow-hidden ${
            isDark 
              ? 'bg-gradient-to-br from-slate-950 via-slate-900 to-indigo-950/40 border-slate-800/90 shadow-2xl shadow-black/40' 
              : 'bg-gradient-to-br from-blue-50/90 via-indigo-50/50 to-white border-slate-200 shadow-xl'
          }`}
        >
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
            <div className="space-y-4 max-w-2xl text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-blue-500/15 text-blue-400 border border-blue-500/30">
                <Sparkles size={13} className="text-blue-400" />
                <span>Featured Full-Stack Project</span>
              </div>

              <div>
                <h3 className="text-2xl sm:text-3xl font-bold font-display tracking-tight">
                  Zap Shift
                </h3>
                <p className={`text-sm sm:text-base leading-relaxed mt-2 ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>
                  A full-stack web application built to practice modern frontend and backend development, authentication, API integration, database management, and responsive UI design.
                </p>
              </div>

              {/* Technologies Architecture Stack */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                <div className={`p-3.5 rounded-2xl border ${
                  isDark ? 'bg-slate-900/80 border-slate-800' : 'bg-white/80 border-slate-200'
                }`}>
                  <div className="flex items-center gap-2 mb-1">
                    <Layers size={15} className="text-blue-400" />
                    <span className="text-xs font-bold font-display">Frontend Stack</span>
                  </div>
                  <p className="text-xs font-mono text-blue-500 dark:text-blue-300">
                    React / Vite / Tailwind CSS
                  </p>
                </div>

                <div className={`p-3.5 rounded-2xl border ${
                  isDark ? 'bg-slate-900/80 border-slate-800' : 'bg-white/80 border-slate-200'
                }`}>
                  <div className="flex items-center gap-2 mb-1">
                    <Server size={15} className="text-emerald-400" />
                    <span className="text-xs font-bold font-display">Backend Stack</span>
                  </div>
                  <p className="text-xs font-mono text-emerald-600 dark:text-emerald-300">
                    Node.js / Express.js
                  </p>
                </div>
              </div>
            </div>

            {/* Repositories Action Buttons */}
            <div className="flex flex-col sm:flex-row lg:flex-col gap-3 w-full lg:w-auto shrink-0">
              <a
                id="zapshift-client-repo-btn"
                href="https://github.com/Farjana02mim/zap-shift-client"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Zap Shift Frontend Repository on GitHub"
                className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl font-semibold text-xs sm:text-sm bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white shadow-md shadow-blue-600/25 hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer group"
              >
                <Github size={16} className="group-hover:rotate-6 transition-transform" />
                <span>Frontend Repository</span>
                <ArrowUpRight size={14} className="text-blue-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>

              <a
                id="zapshift-server-repo-btn"
                href="https://github.com/Farjana02mim/zap-shift-server"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Zap Shift Backend Repository on GitHub"
                className={`inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl font-semibold text-xs sm:text-sm border transition-all cursor-pointer group ${
                  isDark
                    ? 'border-slate-700 bg-slate-900 text-slate-200 hover:bg-slate-800 hover:text-white hover:border-slate-600'
                    : 'border-slate-300 bg-white text-slate-800 hover:bg-slate-50 hover:border-slate-400 shadow-xs'
                }`}
              >
                <Github size={16} className="text-slate-400 group-hover:text-emerald-400 transition-colors" />
                <span>Backend Repository</span>
                <ArrowUpRight size={14} className="text-slate-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
            </div>
          </div>
        </motion.div>

        {/* 2. FEATURED REPOSITORIES SHOWCASE (6 REPOSITORIES) */}
        <div className="mb-16">
          <div className="flex items-center justify-between gap-4 mb-6">
            <div className="flex items-center gap-2 text-left">
              <FolderGit2 size={20} className="text-blue-400" />
              <h3 className="text-xl sm:text-2xl font-bold font-display tracking-tight">
                Featured Repositories
              </h3>
            </div>
            <span className={`text-xs font-mono ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
              6 Repositories
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {repositories.map((repo, idx) => (
              <motion.div
                key={repo.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.4, delay: idx * 0.06 }}
                className={`p-6 rounded-3xl border backdrop-blur-xl flex flex-col justify-between text-left transition-all duration-300 ${
                  isDark
                    ? 'bg-slate-950/80 border-slate-800/80 hover:border-blue-500/40 shadow-lg shadow-black/20'
                    : 'bg-white border-slate-200 hover:border-blue-300 shadow-md'
                }`}
              >
                <div className="space-y-3">
                  {/* Repo Header */}
                  <div className="flex items-center justify-between gap-2">
                    <div className="flex items-center gap-2 overflow-hidden">
                      <div className="p-2 rounded-xl bg-blue-500/10 text-blue-400 shrink-0">
                        <FolderGit2 size={16} />
                      </div>
                      <span className="text-xs font-mono font-semibold text-blue-400 truncate">
                        {repo.category}
                      </span>
                    </div>
                    <Github size={16} className={isDark ? 'text-slate-400' : 'text-slate-500'} />
                  </div>

                  <div>
                    <h4 className="text-base font-bold font-display tracking-tight">
                      {repo.name}
                    </h4>
                    <p className={`text-xs leading-relaxed mt-1.5 line-clamp-3 ${
                      isDark ? 'text-slate-300' : 'text-slate-600'
                    }`}>
                      {repo.description}
                    </p>
                  </div>

                  {/* Technology Badges */}
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {repo.technologies.map((tech) => (
                      <span
                        key={tech}
                        className={`px-2.5 py-0.5 rounded-lg text-[10px] font-mono border ${
                          isDark 
                            ? 'bg-slate-900 border-slate-800 text-slate-300' 
                            : 'bg-slate-100 border-slate-200 text-slate-700'
                        }`}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Card Action */}
                <div className="pt-5 mt-4 border-t border-slate-800/80 flex items-center justify-between">
                  <span className="text-[11px] font-mono text-slate-400 truncate max-w-[140px]">
                    {repo.repoName}
                  </span>

                  <a
                    href={repo.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`View ${repo.name} repository on GitHub`}
                    className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl text-xs font-semibold bg-blue-500/10 text-blue-400 hover:bg-blue-500 hover:text-white border border-blue-500/20 transition-all cursor-pointer"
                  >
                    <span>View Repository</span>
                    <ExternalLink size={12} />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* 3. TECHNICAL AREAS ("What I Like Building") */}
        <div className="mb-16">
          <div className="text-left mb-6">
            <h3 className="text-xl sm:text-2xl font-bold font-display tracking-tight">
              What I Like Building
            </h3>
            <p className={`text-xs sm:text-sm mt-1 ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
              Areas of computer science and software development I focus on and enjoy exploring.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {technicalAreas.map((area, idx) => {
              const Icon = area.icon;
              return (
                <motion.div
                  key={area.title}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-40px' }}
                  transition={{ duration: 0.4, delay: idx * 0.08 }}
                  className={`p-5 rounded-2xl border backdrop-blur-xl text-left space-y-3 transition-all ${
                    isDark 
                      ? 'bg-slate-950/80 border-slate-800/80 hover:border-blue-500/30 shadow-md' 
                      : 'bg-white border-slate-200 hover:border-blue-300 shadow-sm'
                  }`}
                >
                  <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${area.color} border border-slate-700/30 flex items-center justify-center ${area.iconColor}`}>
                    <Icon size={20} />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold font-display tracking-tight">
                      {area.title}
                    </h4>
                    <p className={`text-xs leading-relaxed mt-1.5 ${
                      isDark ? 'text-slate-300' : 'text-slate-600'
                    }`}>
                      {area.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* 4. TECHNOLOGY CLOUD */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.5 }}
          className={`p-6 sm:p-8 rounded-3xl border backdrop-blur-xl mb-16 text-left ${
            isDark 
              ? 'bg-slate-950/80 border-slate-800/90 shadow-xl shadow-black/20' 
              : 'bg-white border-slate-200 shadow-md'
          }`}
        >
          <div className="flex items-center gap-2 mb-4">
            <Code2 size={18} className="text-blue-400" />
            <h3 className="text-base sm:text-lg font-bold font-display tracking-tight">
              Technology Stack
            </h3>
          </div>
          <p className={`text-xs sm:text-sm mb-5 ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
            Languages, frameworks, data libraries, and tools utilized across my projects and coursework.
          </p>

          <div className="flex flex-wrap gap-2 sm:gap-2.5">
            {techCloud.map((tech) => (
              <span
                key={tech}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-mono font-medium border transition-all ${
                  isDark
                    ? 'bg-slate-900/90 border-slate-800 text-slate-200 hover:border-blue-500/40 hover:text-blue-400'
                    : 'bg-slate-50 border-slate-200 text-slate-800 hover:border-blue-400 hover:text-blue-600 shadow-2xs'
                }`}
              >
                {tech}
              </span>
            ))}
          </div>
        </motion.div>

        {/* 5. MACHINE LEARNING PROJECT HIGHLIGHT */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.5 }}
          className={`p-6 sm:p-8 lg:p-10 rounded-3xl border backdrop-blur-xl mb-14 text-left ${
            isDark 
              ? 'bg-slate-950/80 border-slate-800/90 shadow-xl shadow-black/25' 
              : 'bg-white border-slate-200 shadow-lg'
          }`}
        >
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 pb-6 border-b border-slate-800/80 mb-6">
            <div className="space-y-1.5">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-purple-500/10 text-purple-400 border border-purple-500/20">
                <Brain size={13} className="text-purple-400" />
                <span>Machine Learning Highlight</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold font-display tracking-tight">
                Rainfall Prediction Classifier
              </h3>
              <p className={`text-xs sm:text-sm font-mono ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
                Coursework Project • Supervised Classification Pipeline
              </p>
            </div>

            <div className="flex items-center gap-2">
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-mono font-medium bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                <CheckCircle2 size={13} />
                <span>Model Evaluation & Comparison</span>
              </span>
            </div>
          </div>

          <p className={`text-sm sm:text-base leading-relaxed mb-6 ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>
            A machine learning classification project involving weather data preprocessing, feature engineering, model training, evaluation, and comparison of classification models.
          </p>

          {/* Concepts & Metrics Chips */}
          <div className="space-y-2">
            <span className="text-xs font-semibold uppercase tracking-wider text-slate-400 block font-display">
              Techniques, Models & Evaluation Metrics Explored:
            </span>
            <div className="flex flex-wrap gap-2">
              {[
                'Logistic Regression',
                'Random Forest',
                'Confusion Matrix',
                'Accuracy',
                'True Positive Rate',
                'Feature Engineering',
                'Model Evaluation'
              ].map((item) => (
                <span
                  key={item}
                  className={`px-3 py-1.5 rounded-lg text-xs font-mono font-medium border ${
                    isDark
                      ? 'bg-purple-950/40 border-purple-800/50 text-purple-300'
                      : 'bg-purple-50 border-purple-200 text-purple-700'
                  }`}
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </motion.div>

        {/* 6. CALL TO ACTION (CTA) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.5 }}
          className={`p-6 sm:p-8 rounded-3xl border backdrop-blur-xl text-center max-w-3xl mx-auto space-y-4 ${
            isDark 
              ? 'bg-slate-950/80 border-slate-800/90 shadow-xl shadow-black/30' 
              : 'bg-white border-slate-200 shadow-lg'
          }`}
        >
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-blue-500/10 text-blue-400 border border-blue-500/20">
            <Sparkles size={12} className="text-blue-400" />
            <span>Connect & Explore</span>
          </div>

          <h3 className="text-2xl sm:text-3xl font-bold tracking-tight font-display">
            Interested in seeing more?
          </h3>

          <p className={`text-xs sm:text-sm leading-relaxed max-w-xl mx-auto ${
            isDark ? 'text-slate-300' : 'text-slate-600'
          }`}>
            Check out my GitHub to explore my projects, experiments, and learning journey.
          </p>

          <div className="pt-2 flex flex-wrap items-center justify-center gap-3">
            <a
              id="github-bottom-visit-btn"
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit Farjana Akter Mim's GitHub profile"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-xs sm:text-sm bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white shadow-md shadow-blue-600/25 transition-all cursor-pointer group"
            >
              <Github size={15} className="group-hover:rotate-6 transition-transform" />
              <span>Visit GitHub</span>
              <ArrowUpRight size={13} className="text-blue-200" />
            </a>

            <a
              id="github-bottom-projects-btn"
              href="#projects"
              onClick={handleScrollToProjects}
              className={`inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-xs sm:text-sm border transition-all cursor-pointer ${
                isDark
                  ? 'border-slate-800 bg-slate-900 text-slate-200 hover:bg-slate-800 hover:text-white'
                  : 'border-slate-300 bg-white text-slate-800 hover:bg-slate-50 shadow-2xs'
              }`}
            >
              <span>View Projects</span>
              <ArrowRight size={14} className="text-blue-400" />
            </a>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
