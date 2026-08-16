import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Github, 
  ExternalLink, 
  Layers, 
  FolderGit2, 
  Search, 
  ArrowUpRight, 
  Sparkles, 
  Eye, 
  Code2, 
  BrainCircuit, 
  Cpu, 
  Clock,
  Boxes
} from 'lucide-react';
import { projects } from '../data/portfolioData';
import { Project } from '../types';
import { ProjectModal } from './ProjectModal';
import { ProjectThumbnail } from './ProjectThumbnail';

interface ProjectsProps {
  isDark: boolean;
}

export function Projects({ isDark }: ProjectsProps) {
  const [selectedFilter, setSelectedFilter] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const categories = [
    { id: 'all', label: 'All' },
    { id: 'web', label: 'Web Development' },
    { id: 'ml', label: 'Machine Learning' },
    { id: 'graphics', label: 'Computer Graphics' },
    { id: 'other', label: 'Other' },
  ];

  const filteredProjects = useMemo(() => {
    return projects.filter((project) => {
      const matchesCategory = selectedFilter === 'all' || project.category === selectedFilter;
      const matchesSearch =
        project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.technologies.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));
      return matchesCategory && matchesSearch;
    });
  }, [selectedFilter, searchQuery]);

  const getCategoryIcon = (cat: string) => {
    switch (cat) {
      case 'web':
        return <Code2 size={13} className="text-blue-400" />;
      case 'ml':
        return <BrainCircuit size={13} className="text-purple-400" />;
      case 'graphics':
        return <Cpu size={13} className="text-cyan-400" />;
      case 'other':
      default:
        return <Boxes size={13} className="text-emerald-400" />;
    }
  };

  return (
    <section
      id="projects"
      className={`py-20 lg:py-28 relative scroll-mt-16 ${
        isDark ? 'text-slate-100' : 'text-slate-900'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.4 }}
          className="text-center max-w-3xl mx-auto mb-12 space-y-3"
        >
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-blue-500/10 text-blue-400 border border-blue-500/30 backdrop-blur-md">
            <FolderGit2 size={13} className="text-blue-400" />
            <span>Practical Work & Exploration</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight font-display">
            Featured Projects
          </h2>
          <p className={`text-base sm:text-lg leading-relaxed ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>
            A selection of projects I've built while learning and exploring different areas of computer science.
          </p>
        </motion.div>

        {/* Filter Tabs & Search */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-10">
          {/* Category Tabs */}
          <div 
            className={`flex items-center gap-1.5 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 scrollbar-none p-1.5 rounded-2xl border backdrop-blur-md ${
              isDark ? 'border-slate-800/80 bg-slate-950/70' : 'border-slate-200 bg-slate-100/80'
            }`}
            role="tablist"
            aria-label="Filter projects by category"
          >
            {categories.map((cat) => {
              const isSelected = selectedFilter === cat.id;
              return (
                <button
                  key={cat.id}
                  id={`project-filter-${cat.id}`}
                  role="tab"
                  aria-selected={isSelected}
                  aria-controls="projects-grid"
                  onClick={() => setSelectedFilter(cat.id)}
                  className={`relative px-3.5 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 cursor-pointer ${
                    isSelected
                      ? 'text-white shadow-md'
                      : isDark
                        ? 'text-slate-400 hover:text-white'
                        : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  {isSelected && (
                    <motion.div
                      layoutId="activeProjectFilterPill"
                      transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                      className="absolute inset-0 bg-blue-600 rounded-xl shadow-md shadow-blue-600/30"
                    />
                  )}
                  <span className="relative z-10 flex items-center gap-1.5">
                    {cat.id !== 'all' && getCategoryIcon(cat.id)}
                    {cat.label}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Search Input */}
          <div className="relative w-full md:w-80">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" size={15} />
            <input
              id="project-search-input"
              type="text"
              aria-label="Filter projects by technology or title"
              placeholder="Search projects or tech (e.g. React, C++)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className={`w-full pl-10 pr-12 py-2.5 text-xs rounded-2xl border focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 backdrop-blur-md transition-colors ${
                isDark
                  ? 'bg-slate-950/80 border-slate-800 text-slate-200 placeholder-slate-500'
                  : 'bg-white border-slate-200 text-slate-900 placeholder-slate-400'
              }`}
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-slate-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded p-1 cursor-pointer"
                aria-label="Clear search input"
              >
                Clear
              </button>
            )}
          </div>
        </div>

        {/* Projects Grid Container */}
        <motion.div id="projects-grid" layout className="min-h-[300px]">
          
          {/* No results fallback */}
          {filteredProjects.length === 0 && (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className={`text-center py-16 rounded-3xl border border-dashed p-8 ${
                isDark ? 'border-slate-800 bg-slate-950/40' : 'border-slate-200 bg-slate-50'
              }`}
            >
              <FolderGit2 size={36} className="mx-auto mb-3 text-slate-500" />
              <p className={`text-base font-medium ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>
                No projects found matching the selected filter.
              </p>
              <p className={`text-xs mt-1 ${isDark ? 'text-slate-500' : 'text-slate-400'}`}>
                Try selecting "All" or clearing your search keywords.
              </p>
            </motion.div>
          )}

          {/* GRID OF PROJECT CARDS */}
          <motion.div 
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
          >
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project, idx) => (
                <motion.div
                  key={project.id}
                  id={`project-card-${project.id}`}
                  layout
                  initial={{ opacity: 0, scale: 0.97, y: 15 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.97, y: 15 }}
                  transition={{ duration: 0.3, delay: idx * 0.04 }}
                  whileHover={{ y: -5 }}
                  className={`group flex flex-col justify-between rounded-3xl border backdrop-blur-xl transition-all duration-300 ${
                    project.featured
                      ? isDark
                        ? 'bg-slate-950/85 border-blue-500/40 shadow-xl shadow-blue-950/30'
                        : 'bg-white border-blue-300 shadow-lg'
                      : isDark
                        ? 'bg-slate-950/80 border-slate-800/80 hover:border-blue-500/40 shadow-xl shadow-black/30'
                        : 'bg-white border-slate-200 hover:border-blue-300 shadow-md hover:shadow-xl'
                  }`}
                >
                  {/* Top Section */}
                  <div>
                    {/* Project Thumbnail Visual Header */}
                    <div 
                      onClick={() => setSelectedProject(project)}
                      className="p-3 pb-0 cursor-pointer"
                      role="button"
                      tabIndex={0}
                      onKeyDown={(e) => {
                        if (e.key === 'Enter' || e.key === ' ') {
                          e.preventDefault();
                          setSelectedProject(project);
                        }
                      }}
                      aria-label={`Open details for ${project.title}`}
                    >
                      <ProjectThumbnail
                        projectId={project.id}
                        category={project.categoryLabel}
                        isDark={isDark}
                        featured={project.featured}
                      />
                    </div>

                    {/* Card Content */}
                    <div className="p-5 sm:p-6 space-y-3.5">
                      {/* Category & Badge Row */}
                      <div className="flex items-center justify-between gap-2 flex-wrap">
                        <div className="flex items-center gap-1.5 px-2.5 py-0.5 rounded-lg text-[11px] font-semibold border bg-blue-500/10 text-blue-400 border-blue-500/20 backdrop-blur-md">
                          {getCategoryIcon(project.category)}
                          <span>{project.categoryLabel}</span>
                        </div>

                        {project.featured ? (
                          <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md text-[10px] font-mono font-semibold bg-blue-500/15 text-blue-400 border border-blue-500/30">
                            <Sparkles size={11} className="text-blue-400" />
                            Featured Project
                          </span>
                        ) : project.badge ? (
                          <span className="px-2 py-0.5 rounded-md text-[10px] font-mono font-medium bg-slate-800/60 text-slate-300 border border-slate-700/60">
                            {project.badge}
                          </span>
                        ) : null}
                      </div>

                      {/* Project Title */}
                      <h3 
                        onClick={() => setSelectedProject(project)}
                        className="text-lg sm:text-xl font-bold font-display tracking-tight group-hover:text-blue-400 transition-colors cursor-pointer"
                      >
                        {project.title}
                      </h3>

                      {/* Short Description */}
                      <p className={`text-xs sm:text-sm leading-relaxed line-clamp-3 ${
                        isDark ? 'text-slate-300' : 'text-slate-600'
                      }`}>
                        {project.description}
                      </p>

                      {/* Technology Badges (Neutral Presentation: Clean badges) */}
                      <div>
                        <span className={`text-[10px] font-mono font-semibold uppercase tracking-wider block mb-1.5 ${
                          isDark ? 'text-slate-400' : 'text-slate-500'
                        }`}>
                          Technologies Used
                        </span>
                        <div className="flex flex-wrap gap-1.5">
                          {project.technologies.slice(0, 4).map((tech) => (
                            <span
                              key={tech}
                              className={`px-2.5 py-0.5 rounded-lg text-[11px] font-mono font-medium border ${
                                isDark
                                  ? 'bg-slate-900/90 border-slate-800 text-slate-300'
                                  : 'bg-slate-100 border-slate-200 text-slate-700'
                              }`}
                            >
                              {tech}
                            </span>
                          ))}
                          {project.technologies.length > 4 && (
                            <span className={`px-2 py-0.5 rounded-lg text-[10px] font-mono ${
                              isDark ? 'text-slate-400' : 'text-slate-500'
                            }`}>
                              +{project.technologies.length - 4} more
                            </span>
                          )}
                        </div>
                      </div>

                    </div>
                  </div>

                  {/* Card Footer Actions */}
                  <div className={`p-5 pt-3 border-t flex flex-col gap-2.5 ${
                    isDark ? 'border-slate-800/80 bg-slate-950/40 rounded-b-3xl' : 'border-slate-100 bg-slate-50/50 rounded-b-3xl'
                  }`}>
                    
                    {/* Action Row: GitHub + Live Demo / Coming Soon */}
                    <div className="space-y-2">
                      {project.githubClient && project.githubServer ? (
                        <>
                          <div className="grid grid-cols-2 gap-2">
                            <a
                              id={`project-${project.id}-fe-btn`}
                              href={project.githubClient}
                              target="_blank"
                              rel="noopener noreferrer"
                              aria-label={`View ${project.title} Frontend repository on GitHub (opens in new tab)`}
                              className={`flex items-center justify-center gap-1.5 px-3 py-2 rounded-xl text-xs font-semibold border transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 cursor-pointer ${
                                isDark
                                  ? 'border-slate-800 bg-slate-900 text-slate-200 hover:bg-slate-800 hover:text-white hover:border-slate-700'
                                  : 'border-slate-200 bg-white text-slate-700 hover:bg-slate-50 hover:text-slate-900 shadow-2xs'
                              }`}
                            >
                              <Github size={13} />
                              <span>Frontend</span>
                              <ArrowUpRight size={11} className="text-slate-400" />
                            </a>
                            <a
                              id={`project-${project.id}-be-btn`}
                              href={project.githubServer}
                              target="_blank"
                              rel="noopener noreferrer"
                              aria-label={`View ${project.title} Backend repository on GitHub (opens in new tab)`}
                              className={`flex items-center justify-center gap-1.5 px-3 py-2 rounded-xl text-xs font-semibold border transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 cursor-pointer ${
                                isDark
                                  ? 'border-slate-800 bg-slate-900 text-slate-200 hover:bg-slate-800 hover:text-white hover:border-slate-700'
                                  : 'border-slate-200 bg-white text-slate-700 hover:bg-slate-50 hover:text-slate-900 shadow-2xs'
                              }`}
                            >
                              <Github size={13} />
                              <span>Backend</span>
                              <ArrowUpRight size={11} className="text-slate-400" />
                            </a>
                          </div>

                          {/* Live Demo Status */}
                          {project.liveDemo ? (
                            <a
                              id={`project-${project.id}-demo-btn`}
                              href={project.liveDemo}
                              target="_blank"
                              rel="noopener noreferrer"
                              aria-label={`Open live interactive demo of ${project.title}`}
                              className="w-full flex items-center justify-center gap-1.5 px-3 py-2 rounded-xl text-xs font-semibold bg-emerald-600/20 text-emerald-400 hover:bg-emerald-600/30 border border-emerald-500/30 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 cursor-pointer"
                            >
                              <span>Live Demo</span>
                              <ExternalLink size={12} />
                            </a>
                          ) : (
                            <div
                              className={`w-full flex items-center justify-center gap-1.5 px-3 py-2 rounded-xl text-xs font-medium border select-none ${
                                isDark
                                  ? 'border-slate-800/80 bg-slate-900/40 text-slate-400'
                                  : 'border-slate-200 bg-slate-100/70 text-slate-500'
                              }`}
                            >
                              <Clock size={12} className="opacity-70 text-amber-400" />
                              <span>Coming Soon</span>
                            </div>
                          )}
                        </>
                      ) : (
                        <div className="grid grid-cols-2 gap-2">
                          {project.github ? (
                            <a
                              id={`project-${project.id}-gh-btn`}
                              href={project.github}
                              target="_blank"
                              rel="noopener noreferrer"
                              aria-label={`View source code for ${project.title} on GitHub (opens in new tab)`}
                              className={`flex items-center justify-center gap-1.5 px-3 py-2 rounded-xl text-xs font-semibold border transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 cursor-pointer ${
                                isDark
                                  ? 'border-slate-800 bg-slate-900 text-slate-200 hover:bg-slate-800 hover:text-white hover:border-slate-700'
                                  : 'border-slate-200 bg-white text-slate-700 hover:bg-slate-50 hover:text-slate-900 shadow-2xs'
                              }`}
                            >
                              <Github size={13} />
                              <span>GitHub</span>
                              <ArrowUpRight size={11} className="text-slate-400" />
                            </a>
                          ) : (
                            <div
                              className={`flex items-center justify-center gap-1.5 px-2.5 py-2 rounded-xl text-[11px] font-medium border select-none ${
                                isDark
                                  ? 'border-slate-800/80 bg-slate-900/40 text-slate-400'
                                  : 'border-slate-200 bg-slate-100/70 text-slate-500'
                              }`}
                            >
                              <Github size={12} className="opacity-60" />
                              <span className="truncate">Repo Coming Soon</span>
                            </div>
                          )}

                          {/* Live Demo or Coming Soon */}
                          {project.liveDemo ? (
                            <a
                              id={`project-${project.id}-demo-btn`}
                              href={project.liveDemo}
                              target="_blank"
                              rel="noopener noreferrer"
                              aria-label={`Open live interactive demo of ${project.title}`}
                              className="flex items-center justify-center gap-1.5 px-3 py-2 rounded-xl text-xs font-semibold bg-emerald-600/20 text-emerald-400 hover:bg-emerald-600/30 border border-emerald-500/30 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 cursor-pointer"
                            >
                              <span>Live Demo</span>
                              <ExternalLink size={12} />
                            </a>
                          ) : (
                            <div
                              className={`flex items-center justify-center gap-1.5 px-3 py-2 rounded-xl text-xs font-medium border select-none ${
                                isDark
                                  ? 'border-slate-800/80 bg-slate-900/40 text-slate-400'
                                  : 'border-slate-200 bg-slate-100/70 text-slate-500'
                              }`}
                            >
                              <Clock size={12} className="opacity-70 text-amber-400" />
                              <span>Coming Soon</span>
                            </div>
                          )}
                        </div>
                      )}
                    </div>

                    {/* Quick View Details Button */}
                    <button
                      id={`project-${project.id}-details-btn`}
                      onClick={() => setSelectedProject(project)}
                      aria-label={`View project details for ${project.title}`}
                      className={`w-full flex items-center justify-center gap-1.5 py-1.5 text-xs font-semibold rounded-lg transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 cursor-pointer ${
                        isDark ? 'text-blue-400 hover:text-blue-300 hover:bg-slate-900/50' : 'text-blue-600 hover:text-blue-700 hover:bg-blue-50/50'
                      }`}
                    >
                      <Eye size={13} />
                      <span>Project Details</span>
                    </button>

                  </div>

                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

        </motion.div>

      </div>

      {/* Project Detail Modal */}
      <ProjectModal
        project={selectedProject}
        isOpen={!!selectedProject}
        onClose={() => setSelectedProject(null)}
        isDark={isDark}
      />
    </section>
  );
}

