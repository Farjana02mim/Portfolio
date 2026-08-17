import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Trophy, 
  GraduationCap, 
  Award, 
  Sparkles, 
  Calendar, 
  PlusCircle, 
  Layers, 
  Lightbulb,
  Building,
  X,
  Maximize2,
  ExternalLink
} from 'lucide-react';
import { achievementsData } from '../data/portfolioData';
import { AchievementItem } from '../types';

interface AchievementsProps {
  isDark: boolean;
}

export function Achievements({ isDark }: AchievementsProps) {
  const [previewImage, setPreviewImage] = useState<string | null>(null);

  const getIcon = (category: string) => {
    switch (category) {
      case 'Academic':
        return <GraduationCap size={20} />;
      case 'Competition':
        return <Trophy size={20} />;
      case 'Workshop':
        return <Layers size={20} />;
      case 'Project Showcase':
        return <Sparkles size={20} />;
      default:
        return <Award size={20} />;
    }
  };

  return (
    <section
      id="achievements"
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
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-amber-500/10 text-amber-400 border border-amber-500/30 backdrop-blur-md">
            <Trophy size={13} className="text-amber-400" />
            <span>Milestones & Participation</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight font-display">
            Achievements & Activities
          </h2>
          <p className={`text-base sm:text-lg leading-relaxed ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
            Academic milestones, technical workshops, problem solving initiatives, and project demonstrations.
          </p>

          {/* Transparent Student-Focused Notice */}
          <div className={`mt-4 inline-flex items-center gap-2 px-4 py-2 rounded-2xl text-xs border ${
            isDark 
              ? 'bg-slate-900/60 border-slate-800 text-slate-400' 
              : 'bg-slate-100 border-slate-200 text-slate-600'
          }`}>
            <Lightbulb size={14} className="text-amber-400 shrink-0" />
            <span>More achievements and activities will be added as I continue my journey.</span>
          </div>
        </motion.div>

        {/* Achievements Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {achievementsData.map((item: AchievementItem, idx: number) => {
            const isPlaceholder = item.isPlaceholder;

            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                whileHover={{ y: -4 }}
                className={`rounded-3xl border backdrop-blur-xl flex flex-col justify-between overflow-hidden transition-all ${
                  isPlaceholder
                    ? isDark
                      ? 'bg-slate-950/40 border-dashed border-slate-800 hover:border-amber-500/40'
                      : 'bg-slate-50/80 border-dashed border-slate-300 hover:border-amber-400'
                    : isDark
                      ? 'bg-slate-950/80 border-slate-800 hover:border-amber-500/40 shadow-lg shadow-black/20'
                      : 'bg-white border-slate-200 hover:border-amber-300 shadow-md'
                }`}
              >
                {/* Certificate / Photo Thumbnail */}
                {item.image && (
                  <button
                    onClick={() => setPreviewImage(item.image!)}
                    className="relative w-full h-44 overflow-hidden group cursor-pointer"
                  >
                    <img
                      src={item.image}
                      alt={`${item.title} certificate`}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors flex items-center justify-center">
                      <Maximize2 size={20} className="text-white opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>
                  </button>
                )}

                <div className="p-6 sm:p-7 flex flex-col justify-between flex-1">
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-4">
                      <div className={`p-3 rounded-2xl border ${
                        isDark
                          ? 'bg-amber-500/10 text-amber-400 border-amber-500/20'
                          : 'bg-amber-50 text-amber-600 border-amber-200'
                      }`}>
                        {getIcon(item.category)}
                      </div>

                      <div className="flex items-center gap-2">
                        <span className={`px-2.5 py-1 rounded-full text-[11px] font-semibold border ${
                          isDark 
                            ? 'bg-slate-900 border-slate-800 text-amber-300' 
                            : 'bg-amber-50 border-amber-200 text-amber-700'
                        }`}>
                          {item.category}
                        </span>
                        {isPlaceholder && (
                          <span className={`px-2 py-0.5 rounded-md text-[10px] font-mono border ${
                            isDark ? 'bg-slate-900 text-slate-500 border-slate-800' : 'bg-slate-100 text-slate-400 border-slate-200'
                          }`}>
                            Editable Slot
                          </span>
                        )}
                      </div>
                    </div>

                    <h3 className="text-lg font-bold font-display tracking-tight mb-2">
                      {item.title}
                    </h3>

                    {item.organization && (
                      <div className="flex items-center gap-1.5 text-xs text-slate-400 mb-2 font-medium">
                        <Building size={13} className="text-slate-500" />
                        <span>{item.organization}</span>
                      </div>
                    )}

                    <div className="flex items-center gap-1.5 text-xs font-mono text-slate-400 mb-3">
                      <Calendar size={13} className="text-slate-500" />
                      <span>{item.date}</span>
                    </div>

                    <p className={`text-xs leading-relaxed ${
                      isDark ? 'text-slate-300' : 'text-slate-600'
                    }`}>
                      {item.description}
                    </p>
                  </div>

                  <div className={`pt-4 mt-5 border-t flex items-center justify-between text-[11px] font-mono ${
                    isDark ? 'border-slate-800/80 text-slate-500' : 'border-slate-100 text-slate-400'
                  }`}>
                    {item.image ? (
                      <a
                        href={item.image}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-blue-400 hover:text-blue-300 font-bold transition-colors cursor-pointer"
                      >
                        <span>View Certificate</span>
                        <ExternalLink size={12} />
                      </a>
                    ) : (
                      <span>{isPlaceholder ? 'Editable activity template' : 'Verified Academic Activity'}</span>
                    )}
                    <span className="text-amber-500/70 font-semibold">• Active Academic Journey</span>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>

      {/* Fullscreen Image Preview Modal */}
      <AnimatePresence>
        {previewImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setPreviewImage(null)}
            className="fixed inset-0 z-[100] bg-black/85 backdrop-blur-sm flex items-center justify-center p-4 sm:p-8 cursor-zoom-out"
          >
            <button
              onClick={() => setPreviewImage(null)}
              className="absolute top-5 right-5 p-2.5 rounded-full bg-slate-900/80 text-white hover:bg-slate-800 transition-colors"
              aria-label="Close preview"
            >
              <X size={20} />
            </button>
            <motion.img
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              src={previewImage}
              alt="Achievement certificate preview"
              onClick={(e) => e.stopPropagation()}
              className="max-w-full max-h-full rounded-2xl shadow-2xl object-contain"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
