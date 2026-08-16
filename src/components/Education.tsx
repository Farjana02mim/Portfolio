import { useState } from 'react';
import { motion } from 'motion/react';
import { 
  GraduationCap, 
  BookOpen, 
  Calendar, 
  CheckCircle2, 
  Edit3, 
  School,
  Sparkles,
  Check,
  Award
} from 'lucide-react';
import { educationData } from '../data/portfolioData';

interface EducationProps {
  isDark: boolean;
}

export function Education({ isDark }: EducationProps) {
  const [institutionName, setInstitutionName] = useState(educationData.institution);
  const [durationPeriod, setDurationPeriod] = useState(educationData.period);
  const [isEditing, setIsEditing] = useState(false);

  return (
    <section
      id="education"
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
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-blue-500/10 text-blue-400 border border-blue-500/30 backdrop-blur-md">
            <School size={14} className="text-blue-400" />
            <span>Academic Background</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight font-display">
            Education
          </h2>
          <p className={`text-base sm:text-lg leading-relaxed ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
            Undergraduate studies in Computer Science and Engineering with foundational and specialized coursework.
          </p>
        </motion.div>

        {/* Education Main Card */}
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.98, y: 15 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.45 }}
            className={`p-6 sm:p-10 rounded-3xl border backdrop-blur-2xl transition-all duration-300 ${
              isDark
                ? 'bg-slate-950/80 border-slate-800/90 shadow-2xl shadow-black/40'
                : 'bg-white border-slate-200 shadow-xl'
            }`}
          >
            {/* Degree & Institution Header */}
            <div className="flex flex-col md:flex-row md:items-start justify-between gap-6 pb-8 border-b border-slate-800/80">
              <div className="flex items-start gap-4">
                <div className="p-3.5 rounded-2xl bg-blue-500/10 border border-blue-500/30 text-blue-400 shrink-0">
                  <GraduationCap size={32} />
                </div>

                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <span className="px-3 py-0.5 rounded-full text-xs font-mono font-semibold bg-emerald-500/15 text-emerald-300 border border-emerald-500/30">
                      {educationData.status}
                    </span>
                  </div>

                  {/* Degree Name */}
                  <h3 className="text-xl sm:text-2xl font-bold font-display tracking-tight">
                    {educationData.degree}
                  </h3>

                  {/* University Name (Editable Placeholder) */}
                  <div className="flex items-center gap-2 pt-0.5">
                    {isEditing ? (
                      <div className="flex flex-wrap items-center gap-2">
                        <input
                          type="text"
                          value={institutionName}
                          onChange={(e) => setInstitutionName(e.target.value)}
                          className="px-3 py-1 text-xs rounded-xl border border-blue-500 bg-slate-900 text-white focus:outline-none"
                          placeholder="e.g. University Name"
                        />
                        <input
                          type="text"
                          value={durationPeriod}
                          onChange={(e) => setDurationPeriod(e.target.value)}
                          className="px-3 py-1 text-xs rounded-xl border border-blue-500 bg-slate-900 text-white focus:outline-none"
                          placeholder="e.g. 2022 – 2026"
                        />
                        <button
                          onClick={() => setIsEditing(false)}
                          className="px-3 py-1 text-xs bg-blue-600 hover:bg-blue-500 text-white rounded-lg cursor-pointer transition-colors"
                        >
                          Save
                        </button>
                      </div>
                    ) : (
                      <div className="flex items-center gap-2">
                        <span className={`text-sm sm:text-base font-medium ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>
                          {institutionName}
                        </span>
                        <button
                          onClick={() => setIsEditing(true)}
                          className="text-xs text-blue-400 hover:text-blue-300 flex items-center gap-1 opacity-70 hover:opacity-100 transition-opacity cursor-pointer"
                          title="Click to customize university or duration placeholders"
                          aria-label="Edit university or duration placeholders"
                        >
                          <Edit3 size={12} />
                          <span className="text-[10px] font-mono">(Edit Details)</span>
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              </div>

              {/* Duration Tag */}
              <div className="flex flex-col items-start md:items-end gap-1.5">
                <div className="flex items-center gap-1.5 text-xs font-mono text-blue-400 bg-blue-500/10 px-3.5 py-1.5 rounded-full border border-blue-500/20">
                  <Calendar size={13} />
                  <span>{durationPeriod}</span>
                </div>
                <span className={`text-xs font-mono mt-0.5 ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
                  Discipline: Computer Science & Engineering
                </span>
              </div>
            </div>

            {/* Relevant Coursework Area */}
            <div className="pt-8 space-y-4">
              <div className="flex items-center gap-2">
                <BookOpen size={17} className="text-blue-400" />
                <h4 className="text-xs font-bold uppercase tracking-wider font-mono text-slate-300">
                  Relevant Coursework
                </h4>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 pt-1">
                {educationData.coursework.map((course) => (
                  <motion.div
                    key={course}
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.15 }}
                    className={`p-3.5 rounded-2xl border flex items-center gap-2.5 transition-colors ${
                      isDark
                        ? 'bg-slate-900/70 border-slate-800/80 hover:border-blue-500/40 hover:bg-slate-900'
                        : 'bg-slate-50 border-slate-200/80 hover:bg-white hover:border-slate-300 shadow-2xs'
                    }`}
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-400 shrink-0 shadow-xs shadow-blue-400" />
                    <span className="text-xs font-medium leading-tight">{course}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Academic Highlights */}
            <div className="pt-8 mt-8 border-t border-slate-800/80 space-y-3">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 font-mono">
                Academic & Practical Focus
              </h4>
              <div className="space-y-2.5">
                {educationData.highlights.map((highlight, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm">
                    <CheckCircle2 size={16} className="text-emerald-400 shrink-0 mt-0.5" />
                    <span className={isDark ? 'text-slate-300' : 'text-slate-700'}>{highlight}</span>
                  </div>
                ))}
              </div>
            </div>

          </motion.div>
        </div>

      </div>
    </section>
  );
}
