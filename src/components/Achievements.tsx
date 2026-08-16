import { motion } from 'motion/react';
import { 
  Trophy, 
  GraduationCap, 
  Award, 
  Sparkles, 
  Calendar, 
  PlusCircle, 
  Layers, 
  Lightbulb,
  Building
} from 'lucide-react';
import { achievementsData } from '../data/portfolioData';
import { AchievementItem } from '../types';

interface AchievementsProps {
  isDark: boolean;
}

export function Achievements({ isDark }: AchievementsProps) {
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
                className={`p-6 sm:p-7 rounded-3xl border backdrop-blur-xl flex flex-col justify-between transition-all ${
                  isPlaceholder
                    ? isDark
                      ? 'bg-slate-950/40 border-dashed border-slate-800 hover:border-amber-500/40'
                      : 'bg-slate-50/80 border-dashed border-slate-300 hover:border-amber-400'
                    : isDark
                      ? 'bg-slate-950/80 border-slate-800 hover:border-amber-500/40 shadow-lg shadow-black/20'
                      : 'bg-white border-slate-200 hover:border-amber-300 shadow-md'
                }`}
              >
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
                  <span>{isPlaceholder ? 'Editable activity template' : 'Verified Academic Activity'}</span>
                  <span className="text-amber-500/70 font-semibold">• Active Academic Journey</span>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
