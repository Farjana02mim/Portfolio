import { motion } from 'motion/react';
import { 
  GraduationCap, 
  Code, 
  BrainCircuit, 
  Lightbulb,
  Sparkles,
  ArrowRight,
  Target,
  Cpu,
  Layers
} from 'lucide-react';
import { personalInfo } from '../data/portfolioData';
import mimProfilePhoto from '../assets/images/profile_portrait_1786891039038.jpg';

interface AboutProps {
  isDark: boolean;
}

export function About({ isDark }: AboutProps) {
  const highlights = [
    {
      id: 'cse-student',
      title: 'CSE Student',
      description: 'Undergraduate student building strong foundations in core computer science, algorithms, and system principles.',
      icon: <GraduationCap size={22} className="text-blue-400" />,
      accentColor: 'from-blue-500/20 to-blue-600/5',
      borderColor: 'hover:border-blue-500/40',
      badge: 'Core Academic'
    },
    {
      id: 'web-dev',
      title: 'Web Development',
      description: 'Developing responsive web applications with React, modern JavaScript, Tailwind CSS, and RESTful APIs.',
      icon: <Code size={22} className="text-indigo-400" />,
      accentColor: 'from-indigo-500/20 to-indigo-600/5',
      borderColor: 'hover:border-indigo-500/40',
      badge: 'Full-Stack'
    },
    {
      id: 'machine-learning',
      title: 'Machine Learning',
      description: 'Exploring predictive modeling, classification workflows, and data pipelines using Python and Scikit-learn.',
      icon: <BrainCircuit size={22} className="text-purple-400" />,
      accentColor: 'from-purple-500/20 to-purple-600/5',
      borderColor: 'hover:border-purple-500/40',
      badge: 'Data & AI'
    },
    {
      id: 'problem-solving',
      title: 'Problem Solving',
      description: 'Practicing algorithmic thinking, data structures, and clean coding through coursework in C/C++.',
      icon: <Lightbulb size={22} className="text-amber-400" />,
      accentColor: 'from-amber-500/20 to-amber-600/5',
      borderColor: 'hover:border-amber-500/40',
      badge: 'C / C++ & DSA'
    }
  ];

  return (
    <section
      id="about"
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
            <GraduationCap size={14} className="text-blue-400" />
            <span>Profile Overview</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight font-display">
            About Me
          </h2>
          <p className={`text-base sm:text-lg leading-relaxed ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
            Turning curiosity and academic computer science concepts into practical, functioning software.
          </p>
        </motion.div>

        {/* Main Content Layout */}
        <div className="space-y-12 max-w-5xl mx-auto">
          
          {/* Narrative Content Card */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5 }}
            className={`p-8 sm:p-10 rounded-3xl border backdrop-blur-xl transition-all ${
              isDark 
                ? 'bg-slate-950/80 border-slate-800/80 shadow-2xl shadow-black/30' 
                : 'bg-white border-slate-200 shadow-xl'
            }`}
          >
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-6 border-b border-slate-800/80 mb-6">
              <div className="flex items-center gap-3.5">
                {/* Profile Image Thumbnail */}
                <div className="relative w-12 h-12 sm:w-14 sm:h-14 rounded-2xl p-[1.5px] bg-gradient-to-tr from-blue-500 to-indigo-500 shadow-md shadow-blue-500/15 overflow-hidden flex-shrink-0">
                  <img
                    src={mimProfilePhoto || "/images/profile.png"}
                    onError={(e) => {
                      const target = e.currentTarget;
                      if (target.src !== '/images/profile.png') {
                        target.src = '/images/profile.png';
                      }
                    }}
                    alt="Farjana Akter Mim — Computer Science and Engineering student"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover object-top rounded-[14px]"
                  />
                </div>
                <div>
                  <h3 className="text-lg font-bold font-display">Farjana Akter Mim</h3>
                  <span className={`text-xs font-mono ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
                    Computer Science & Engineering Student
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  Currently Learning & Building
                </span>
              </div>
            </div>

            {/* Structured Paragraphs (Strictly respecting user text requirements) */}
            <div className="space-y-4 text-base sm:text-lg leading-relaxed">
              <p className={isDark ? 'text-slate-200' : 'text-slate-700'}>
                I’m a Computer Science and Engineering student who enjoys turning ideas into practical projects. I’m currently building my skills in web development, software engineering, machine learning, and problem solving through coursework and hands-on projects.
              </p>
              <p className={isDark ? 'text-slate-300' : 'text-slate-600'}>
                My learning journey includes developing web applications, exploring machine learning workflows, working with computer graphics and digital image processing, and continuously improving my programming skills.
              </p>
            </div>
          </motion.div>

          {/* ABOUT HIGHLIGHTS (4 Responsive Cards with subtle hover animations and professional icons) */}
          <div className="space-y-4">
            <div className="flex items-center justify-between px-1">
              <h4 className={`text-xs font-bold uppercase tracking-wider font-mono ${
                isDark ? 'text-slate-400' : 'text-slate-500'
              }`}>
                Core Learning Pillars
              </h4>
              <span className={`text-xs font-mono ${isDark ? 'text-slate-500' : 'text-slate-400'}`}>
                Focus Areas
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {highlights.map((item, idx) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-40px' }}
                  transition={{ duration: 0.35, delay: idx * 0.08 }}
                  whileHover={{ y: -6, scale: 1.02 }}
                  className={`group relative p-6 rounded-3xl border backdrop-blur-xl transition-all duration-300 flex flex-col justify-between ${
                    isDark
                      ? `bg-slate-950/80 border-slate-800/80 ${item.borderColor} shadow-xl shadow-black/20 hover:bg-slate-900/60`
                      : `bg-white border-slate-200 ${item.borderColor} shadow-md hover:shadow-xl`
                  }`}
                >
                  {/* Subtle top gradient accent */}
                  <div className={`absolute inset-x-0 top-0 h-24 bg-gradient-to-b ${item.accentColor} opacity-20 rounded-t-3xl pointer-events-none group-hover:opacity-40 transition-opacity`} />

                  <div className="relative z-10 space-y-3.5">
                    {/* Icon + Badge */}
                    <div className="flex items-center justify-between">
                      <div className={`p-3 rounded-2xl border transition-all ${
                        isDark ? 'bg-slate-900/90 border-slate-800 group-hover:border-slate-700' : 'bg-slate-50 border-slate-200'
                      }`}>
                        {item.icon}
                      </div>
                      <span className={`text-[10px] font-mono font-medium px-2.5 py-0.5 rounded-full border ${
                        isDark ? 'bg-slate-900 border-slate-800 text-slate-400' : 'bg-slate-100 border-slate-200 text-slate-600'
                      }`}>
                        {item.badge}
                      </span>
                    </div>

                    {/* Title */}
                    <h4 className="text-base sm:text-lg font-bold font-display tracking-tight group-hover:text-blue-400 transition-colors">
                      {item.title}
                    </h4>

                    {/* Description */}
                    <p className={`text-xs leading-relaxed ${
                      isDark ? 'text-slate-400' : 'text-slate-600'
                    }`}>
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
