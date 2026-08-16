import { useState, useMemo, ReactNode } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Layout, 
  Server, 
  Code2, 
  BrainCircuit, 
  Wrench, 
  Search, 
  Sparkles,
  Layers,
  Cpu,
  Binary,
  Globe2,
  Database,
  Terminal,
  Compass,
  CheckCircle2
} from 'lucide-react';
import { skillCategories } from '../data/portfolioData';

interface SkillsProps {
  isDark: boolean;
}

export function Skills({ isDark }: SkillsProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const categoryIcons: Record<string, ReactNode> = {
    programming: <Code2 size={20} className="text-blue-400" />,
    frontend: <Layout size={20} className="text-cyan-400" />,
    backend: <Server size={20} className="text-emerald-400" />,
    ml: <BrainCircuit size={20} className="text-purple-400" />,
    tools: <Wrench size={20} className="text-amber-400" />,
    other: <Layers size={20} className="text-pink-400" />,
  };

  const filteredCategories = useMemo(() => {
    return skillCategories
      .filter((cat) => selectedCategory === 'all' || cat.id === selectedCategory)
      .map((cat) => {
        if (!searchQuery.trim()) return cat;
        const matchingSkills = cat.skills.filter((skill) =>
          skill.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          skill.tag.toLowerCase().includes(searchQuery.toLowerCase())
        );
        return {
          ...cat,
          skills: matchingSkills,
        };
      })
      .filter((cat) => cat.skills.length > 0);
  }, [selectedCategory, searchQuery]);

  return (
    <section
      id="skills"
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
          className="text-center max-w-3xl mx-auto mb-14 space-y-3"
        >
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-blue-500/10 text-blue-400 border border-blue-500/30 backdrop-blur-md">
            <Cpu size={14} className="text-blue-400" />
            <span>Technical Toolkit</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight font-display">
            Skills & Technologies
          </h2>
          
          {/* Requested Label */}
          <div className="pt-1">
            <span className={`inline-flex items-center gap-2 text-sm sm:text-base font-medium px-4 py-1.5 rounded-2xl border ${
              isDark 
                ? 'bg-slate-900/60 border-slate-800 text-slate-300' 
                : 'bg-white border-slate-200 text-slate-700 shadow-xs'
            }`}>
              <Sparkles size={14} className="text-blue-400" />
              Technologies I’m learning and working with
            </span>
          </div>
        </motion.div>

        {/* Filter Tabs & Search */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-10">
          
          {/* Category Tabs */}
          <div 
            className={`flex items-center gap-1.5 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 scrollbar-none p-1.5 rounded-2xl border backdrop-blur-md ${
              isDark ? 'border-slate-800/80 bg-slate-950/70' : 'border-slate-200 bg-slate-100/80'
            }`}
            role="tablist"
            aria-label="Filter skills by category"
          >
            <button
              role="tab"
              aria-selected={selectedCategory === 'all'}
              onClick={() => setSelectedCategory('all')}
              className={`relative px-3.5 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-all cursor-pointer ${
                selectedCategory === 'all'
                  ? 'text-white shadow-md'
                  : isDark
                    ? 'text-slate-400 hover:text-white'
                    : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              {selectedCategory === 'all' && (
                <motion.div
                  layoutId="activeSkillCategoryPill"
                  transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                  className="absolute inset-0 bg-blue-600 rounded-xl shadow-md shadow-blue-600/30"
                />
              )}
              <span className="relative z-10">All Skills</span>
            </button>

            {skillCategories.map((cat) => {
              const isSelected = selectedCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  role="tab"
                  aria-selected={isSelected}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`relative px-3.5 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-all cursor-pointer ${
                    isSelected
                      ? 'text-white shadow-md'
                      : isDark
                        ? 'text-slate-400 hover:text-white'
                        : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  {isSelected && (
                    <motion.div
                      layoutId="activeSkillCategoryPill"
                      transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                      className="absolute inset-0 bg-blue-600 rounded-xl shadow-md shadow-blue-600/30"
                    />
                  )}
                  <span className="relative z-10 flex items-center gap-1.5">
                    {categoryIcons[cat.id]}
                    {cat.title}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Search Input */}
          <div className="relative w-full md:w-80">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" size={15} />
            <input
              type="text"
              aria-label="Filter skills by keyword"
              placeholder="Search skill (e.g. C++, React, Git)..."
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
                aria-label="Clear search"
              >
                Clear
              </button>
            )}
          </div>

        </div>

        {/* Skills Category Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filteredCategories.map((category, idx) => (
              <motion.div
                key={category.id}
                layout
                initial={{ opacity: 0, scale: 0.96, y: 15 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.96, y: 15 }}
                transition={{ duration: 0.35, delay: idx * 0.05 }}
                whileHover={{ y: -4 }}
                className={`flex flex-col justify-between p-6 sm:p-7 rounded-3xl border backdrop-blur-xl transition-all duration-300 ${
                  isDark
                    ? 'bg-slate-950/80 border-slate-800/80 hover:border-blue-500/40 shadow-xl shadow-black/20 hover:bg-slate-900/60'
                    : 'bg-white border-slate-200 hover:border-blue-300 shadow-md hover:shadow-xl'
                }`}
              >
                <div>
                  {/* Category Header */}
                  <div className="flex items-center gap-3.5 mb-3">
                    <div className={`p-3 rounded-2xl border ${
                      isDark ? 'bg-slate-900 border-slate-800' : 'bg-slate-50 border-slate-200'
                    }`}>
                      {categoryIcons[category.id] || <Code2 size={20} />}
                    </div>
                    <div>
                      <h3 className="text-base font-bold font-display tracking-tight">{category.title}</h3>
                      <span className={`text-[11px] font-mono ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
                        {category.skills.length} skills listed
                      </span>
                    </div>
                  </div>

                  <p className={`text-xs mb-5 leading-relaxed ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                    {category.description}
                  </p>

                  {/* Clean Technology Badges (No fake percentages) */}
                  <div className="flex flex-wrap gap-2 pt-1">
                    {category.skills.map((skill) => (
                      <div
                        key={skill.name}
                        className={`group/badge inline-flex items-center gap-2 px-3 py-2 rounded-2xl border transition-all duration-200 ${
                          isDark
                            ? 'bg-slate-900/80 border-slate-800/90 text-slate-200 hover:border-slate-700 hover:bg-slate-800/90'
                            : 'bg-slate-50 border-slate-200 text-slate-800 hover:bg-white hover:border-slate-300 shadow-2xs'
                        }`}
                      >
                        <span className="font-semibold text-xs tracking-tight">
                          {skill.name}
                        </span>

                        {skill.level === 'Currently Learning' && (
                          <span className="px-1.5 py-0.5 rounded text-[9px] font-mono font-medium bg-amber-500/15 text-amber-300 border border-amber-500/20">
                            Learning
                          </span>
                        )}
                        {skill.level === 'Developing' && (
                          <span className="px-1.5 py-0.5 rounded text-[9px] font-mono font-medium bg-blue-500/10 text-blue-400 border border-blue-500/20">
                            Practicing
                          </span>
                        )}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Card subtle bottom footer */}
                <div className={`mt-5 pt-3 border-t text-[11px] font-mono flex items-center justify-between ${
                  isDark ? 'border-slate-800/70 text-slate-500' : 'border-slate-100 text-slate-400'
                }`}>
                  <span>{category.title}</span>
                  <span className="text-[10px] text-blue-400 font-semibold">Verified in projects</span>
                </div>

              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Learning indicator explanation note */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className={`mt-10 p-4 rounded-2xl border backdrop-blur-md flex flex-wrap items-center justify-center gap-4 sm:gap-6 text-xs ${
            isDark ? 'bg-slate-950/60 border-slate-800/80 text-slate-400' : 'bg-white border-slate-200 text-slate-600'
          }`}
        >
          <span className="font-mono font-bold text-slate-300">Status Badges:</span>
          <div className="flex items-center gap-1.5">
            <span className="px-2 py-0.5 rounded text-[10px] font-mono font-medium bg-blue-500/10 text-blue-400 border border-blue-500/20">
              Practicing
            </span>
            <span>Applied in coursework and active projects</span>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="px-2 py-0.5 rounded text-[10px] font-mono font-medium bg-amber-500/15 text-amber-300 border border-amber-500/20">
              Learning
            </span>
            <span>Actively exploring and studying</span>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
