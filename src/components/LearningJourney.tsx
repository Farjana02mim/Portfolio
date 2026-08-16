import { motion } from 'motion/react';
import { 
  Terminal, 
  Layout, 
  Code, 
  Server, 
  BrainCircuit, 
  Rocket, 
  ArrowDown, 
  Sparkles,
  Compass
} from 'lucide-react';
import { learningJourney } from '../data/portfolioData';

interface LearningJourneyProps {
  isDark: boolean;
}

export function LearningJourney({ isDark }: LearningJourneyProps) {
  const journeySteps = [
    {
      id: 'step-1',
      title: 'Programming Fundamentals',
      subtitle: 'C & C++ Problem Solving, OOP, Data Structures',
      icon: <Terminal size={20} className="text-blue-400" />,
      color: 'border-blue-500/40 bg-blue-500/10 text-blue-300',
    },
    {
      id: 'step-2',
      title: 'Web Development',
      subtitle: 'HTML5, CSS3, JavaScript DOM & Responsive UI',
      icon: <Layout size={20} className="text-cyan-400" />,
      color: 'border-cyan-500/40 bg-cyan-500/10 text-cyan-300',
    },
    {
      id: 'step-3',
      title: 'React & Frontend Development',
      subtitle: 'Component Architecture, Vite, Tailwind CSS',
      icon: <Code size={20} className="text-indigo-400" />,
      color: 'border-indigo-500/40 bg-indigo-500/10 text-indigo-300',
    },
    {
      id: 'step-4',
      title: 'Backend & API Development',
      subtitle: 'Node.js, Express.js, REST APIs, MongoDB',
      icon: <Server size={20} className="text-emerald-400" />,
      color: 'border-emerald-500/40 bg-emerald-500/10 text-emerald-300',
    },
    {
      id: 'step-5',
      title: 'Machine Learning',
      subtitle: 'Python, Pandas, NumPy, Scikit-learn, Model Evaluation',
      icon: <BrainCircuit size={20} className="text-purple-400" />,
      color: 'border-purple-500/40 bg-purple-500/10 text-purple-300',
    },
    {
      id: 'step-6',
      title: 'Advanced Projects',
      subtitle: 'Full-Stack Apps, Computer Graphics & Image Processing',
      icon: <Rocket size={20} className="text-amber-400" />,
      color: 'border-amber-500/40 bg-amber-500/10 text-amber-300',
    }
  ];

  return (
    <section
      id="journey"
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
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-cyan-500/10 text-cyan-400 border border-cyan-500/30 backdrop-blur-md">
            <Compass size={14} className="text-cyan-400" />
            <span>Learning Journey</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight font-display">
            My Learning Journey
          </h2>
          
          {/* Requested tagline */}
          <div className="pt-1">
            <span className={`inline-flex items-center gap-2 text-sm sm:text-base font-medium px-4 py-1.5 rounded-2xl border ${
              isDark 
                ? 'bg-slate-900/60 border-slate-800 text-slate-300' 
                : 'bg-white border-slate-200 text-slate-700 shadow-xs'
            }`}>
              <Sparkles size={14} className="text-cyan-400" />
              Currently learning, experimenting, and building.
            </span>
          </div>
        </motion.div>

        {/* Visual Sequential Step Timeline (Programming Fundamentals -> Web -> React -> Backend -> ML -> Advanced Projects) */}
        <div className="max-w-3xl mx-auto">
          <div className="space-y-3">
            {journeySteps.map((step, idx) => {
              const isLast = idx === journeySteps.length - 1;

              return (
                <div key={step.id} className="flex flex-col items-center">
                  
                  {/* Step Card */}
                  <motion.div
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-30px' }}
                    transition={{ duration: 0.35, delay: idx * 0.06 }}
                    whileHover={{ scale: 1.02, y: -2 }}
                    className={`w-full p-5 sm:p-6 rounded-3xl border backdrop-blur-xl transition-all duration-300 flex items-center justify-between gap-4 ${
                      isDark
                        ? 'bg-slate-950/80 border-slate-800/80 hover:border-blue-500/40 shadow-xl shadow-black/20 hover:bg-slate-900/60'
                        : 'bg-white border-slate-200 hover:border-blue-300 shadow-md hover:shadow-xl'
                    }`}
                  >
                    <div className="flex items-center gap-4">
                      {/* Step Number + Icon */}
                      <div className="relative">
                        <div className={`p-3 rounded-2xl border ${
                          isDark ? 'bg-slate-900 border-slate-800' : 'bg-slate-50 border-slate-200'
                        }`}>
                          {step.icon}
                        </div>
                        <span className="absolute -top-1.5 -right-1.5 w-5 h-5 rounded-full bg-blue-600 text-white text-[10px] font-mono font-bold flex items-center justify-center shadow-xs">
                          {idx + 1}
                        </span>
                      </div>

                      {/* Title and details */}
                      <div>
                        <h3 className="text-base sm:text-lg font-bold font-display tracking-tight">
                          {step.title}
                        </h3>
                        <p className={`text-xs sm:text-sm mt-0.5 ${
                          isDark ? 'text-slate-400' : 'text-slate-600'
                        }`}>
                          {step.subtitle}
                        </p>
                      </div>
                    </div>

                    {/* Badge */}
                    <span className={`hidden sm:inline-block px-3 py-1 rounded-xl text-xs font-mono font-medium border ${step.color}`}>
                      Stage {idx + 1}
                    </span>
                  </motion.div>

                  {/* Connecting Down Arrow */}
                  {!isLast && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      whileInView={{ opacity: 1, height: 'auto' }}
                      viewport={{ once: true }}
                      className="py-1.5 flex items-center justify-center text-blue-400/60"
                    >
                      <div className="flex flex-col items-center">
                        <div className="w-[2px] h-3 bg-gradient-to-b from-blue-500 to-indigo-500 opacity-60 rounded-full" />
                        <ArrowDown size={14} className="text-indigo-400 mt-[-2px]" />
                      </div>
                    </motion.div>
                  )}

                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
