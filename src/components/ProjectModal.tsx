import { useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  X, 
  Github, 
  ExternalLink, 
  Clock, 
  Layers, 
  ArrowUpRight, 
  Sparkles, 
  Code2, 
  FolderGit2, 
  Cpu, 
  BrainCircuit, 
  GraduationCap 
} from 'lucide-react';
import { Project } from '../types';
import { ProjectThumbnail } from './ProjectThumbnail';

interface ProjectModalProps {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
  isDark: boolean;
}

export function ProjectModal({ project, isOpen, onClose, isDark }: ProjectModalProps) {
  // Handle ESC key press
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };

    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'web':
        return <Code2 size={13} className="text-blue-400" />;
      case 'ml':
        return <BrainCircuit size={13} className="text-purple-400" />;
      case 'graphics':
        return <Cpu size={13} className="text-cyan-400" />;
      case 'other':
      default:
        return <GraduationCap size={13} className="text-emerald-400" />;
    }
  };

  return (
    <AnimatePresence>
      {isOpen && project && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto"
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-project-title"
          aria-describedby="modal-project-description"
        >
          {/* Backdrop with motion fade */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/75 backdrop-blur-md cursor-pointer"
            aria-hidden="true"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.94, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.94, y: 15 }}
            transition={{ type: 'spring', duration: 0.35, bounce: 0.1 }}
            className={`relative w-full max-w-2xl rounded-3xl border shadow-2xl overflow-hidden z-10 my-auto ${
              isDark
                ? 'bg-slate-950 border-slate-800 text-slate-100 shadow-black/60'
                : 'bg-white border-slate-200 text-slate-900 shadow-xl'
            }`}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header Bar */}
            <div className={`flex items-center justify-between px-6 py-4 border-b ${
              isDark ? 'border-slate-800/80 bg-slate-900/60' : 'border-slate-100 bg-slate-50/80'
            }`}>
              <div className="flex items-center gap-2">
                <div className="flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-blue-500/10 text-blue-400 border border-blue-500/20">
                  {getCategoryIcon(project.category)}
                  <span>{project.categoryLabel}</span>
                </div>
                {project.badge && (
                  <span className="px-2.5 py-0.5 rounded-full text-[11px] font-mono font-medium bg-amber-500/10 text-amber-400 border border-amber-500/20">
                    {project.badge}
                  </span>
                )}
              </div>

              <button
                onClick={onClose}
                className={`p-2 rounded-xl border transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 cursor-pointer ${
                  isDark
                    ? 'border-slate-800 text-slate-400 hover:text-white hover:bg-slate-800 hover:border-slate-700'
                    : 'border-slate-200 text-slate-500 hover:text-slate-900 hover:bg-slate-100'
                }`}
                aria-label="Close project modal"
              >
                <X size={16} />
              </button>
            </div>

            {/* Scrollable Content */}
            <div className="p-6 space-y-6 max-h-[75vh] overflow-y-auto">
              {/* Project Visual Thumbnail Banner */}
              <div className="w-full">
                <ProjectThumbnail
                  projectId={project.id}
                  category={project.categoryLabel}
                  isDark={isDark}
                  featured={project.featured}
                />
              </div>

              {/* Title & Description */}
              <div className="space-y-3">
                <h3 id="modal-project-title" className="text-2xl sm:text-3xl font-bold font-display tracking-tight">
                  {project.title}
                </h3>
                <p 
                  id="modal-project-description" 
                  className={`text-sm sm:text-base leading-relaxed ${
                    isDark ? 'text-slate-300' : 'text-slate-600'
                  }`}
                >
                  {project.description}
                </p>
              </div>

              {/* Technologies Badges */}
              <div>
                <h4 className={`text-xs font-bold uppercase tracking-wider mb-2.5 flex items-center gap-1.5 ${
                  isDark ? 'text-slate-400' : 'text-slate-500'
                }`}>
                  <Layers size={13} className="text-blue-400" />
                  <span>Technologies & Tools</span>
                </h4>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className={`px-3 py-1 rounded-xl text-xs font-mono font-medium border ${
                        isDark
                          ? 'bg-slate-900 border-slate-800 text-blue-300'
                          : 'bg-slate-100 border-slate-200 text-blue-700'
                      }`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* GitHub Repositories & Live Demo Links */}
              <div className="space-y-3 pt-4 border-t border-slate-800/80">
                <h4 className={`text-xs font-bold uppercase tracking-wider ${
                  isDark ? 'text-slate-400' : 'text-slate-500'
                }`}>
                  Project Repository & Demo Links
                </h4>

                <div className="flex flex-wrap gap-3">
                  {/* Zap Shift dual repo support */}
                  {project.githubClient && (
                    <a
                      href={project.githubClient}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-semibold border transition-all shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 cursor-pointer ${
                        isDark 
                          ? 'bg-slate-900 border-slate-700 text-white hover:bg-slate-800 hover:border-slate-600'
                          : 'bg-slate-900 text-white hover:bg-slate-800 border-slate-800'
                      }`}
                    >
                      <Github size={15} />
                      <span>Frontend Repository</span>
                      <ArrowUpRight size={13} className="text-slate-400" />
                    </a>
                  )}

                  {project.githubServer && (
                    <a
                      href={project.githubServer}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-semibold border transition-all shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 cursor-pointer ${
                        isDark 
                          ? 'bg-slate-900 border-slate-700 text-white hover:bg-slate-800 hover:border-slate-600'
                          : 'bg-slate-900 text-white hover:bg-slate-800 border-slate-800'
                      }`}
                    >
                      <Github size={15} />
                      <span>Backend Repository</span>
                      <ArrowUpRight size={13} className="text-slate-400" />
                    </a>
                  )}

                  {project.github && !project.githubClient && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-semibold border transition-all shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 cursor-pointer ${
                        isDark 
                          ? 'bg-slate-900 border-slate-700 text-white hover:bg-slate-800 hover:border-slate-600'
                          : 'bg-slate-900 text-white hover:bg-slate-800 border-slate-800'
                      }`}
                    >
                      <Github size={15} />
                      <span>View GitHub Repository</span>
                      <ArrowUpRight size={13} className="text-slate-400" />
                    </a>
                  )}

                  {!project.github && !project.githubClient && (
                    <div
                      className={`inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-medium border select-none ${
                        isDark ? 'border-slate-800 text-slate-400 bg-slate-900/50' : 'border-slate-200 text-slate-500 bg-slate-100/80'
                      }`}
                    >
                      <Github size={15} className="opacity-60" />
                      <span>Repository Coming Soon</span>
                    </div>
                  )}

                  {/* Live Demo or Coming Soon */}
                  {project.liveDemo ? (
                    <a
                      href={project.liveDemo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-semibold bg-blue-600 hover:bg-blue-500 text-white shadow-md transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 cursor-pointer"
                    >
                      <ExternalLink size={15} />
                      <span>Launch Live Demo</span>
                    </a>
                  ) : (
                    <div
                      className={`inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-medium border select-none ${
                        isDark ? 'border-slate-800 text-slate-400 bg-slate-900/50' : 'border-slate-200 text-slate-500 bg-slate-100/80'
                      }`}
                    >
                      <Clock size={14} className="text-amber-400" />
                      <span>Live Demo — Coming Soon</span>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Modal Footer */}
            <div className={`px-6 py-4 border-t flex items-center justify-between ${
              isDark ? 'bg-slate-900/60 border-slate-800/80' : 'bg-slate-50/80 border-slate-100'
            }`}>
              <span className={`text-[11px] font-mono ${isDark ? 'text-slate-500' : 'text-slate-400'}`}>
                Farjana Akter Mim • CSE Student Portfolio
              </span>
              <button
                onClick={onClose}
                className={`px-4 py-2 rounded-xl text-xs font-semibold border transition-colors cursor-pointer ${
                  isDark 
                    ? 'border-slate-700 bg-slate-800 text-slate-200 hover:bg-slate-700' 
                    : 'border-slate-300 bg-white text-slate-700 hover:bg-slate-100 shadow-2xs'
                }`}
              >
                Close Details
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
