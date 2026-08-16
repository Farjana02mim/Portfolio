import { useState, MouseEvent } from 'react';
import { motion } from 'motion/react';
import { 
  Github, 
  Linkedin, 
  Mail, 
  ArrowRight, 
  Code2, 
  Sparkles, 
  Download, 
  FileText,
  Brain, 
  GraduationCap,
  Briefcase,
  CheckCircle2,
  ExternalLink
} from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

interface HeroProps {
  isDark: boolean;
  onOpenResume: () => void;
}

export function Hero({ isDark, onOpenResume }: HeroProps) {
  const scrollToSection = (e: MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.querySelector(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="hero"
      className={`relative min-h-[92vh] flex items-center pt-24 pb-16 lg:pt-32 lg:pb-24 overflow-hidden ${
        isDark ? 'text-slate-100' : 'text-slate-900'
      }`}
    >
      {/* Subtle Background Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-[400px] h-[400px] bg-indigo-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">
          
          {/* Left Column: Headline, Bio & Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="lg:col-span-7 space-y-6 text-left"
          >
            {/* Status Pill with Pulsing Indicator */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold border bg-blue-500/10 text-blue-400 border-blue-500/30 backdrop-blur-md shadow-xs shadow-blue-500/10">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span>CSE Student • Open for Internships & Projects</span>
            </div>

            {/* Main Headline */}
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <p className={`text-base sm:text-lg font-medium tracking-tight ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                  Hi, I'm
                </p>
                <div className="h-px w-8 bg-blue-500/40" />
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight font-display leading-[1.1]">
                <span className="bg-gradient-to-r from-blue-400 via-indigo-300 to-cyan-300 bg-clip-text text-transparent">
                  Farjana Akter Mim
                </span>
              </h1>
              
              <h2 className={`text-xl sm:text-2xl lg:text-3xl font-bold tracking-tight mt-1 ${
                isDark ? 'text-slate-200' : 'text-slate-800'
              }`}>
                Computer Science & Engineering Student
              </h2>

              <p className="text-sm sm:text-base font-semibold text-blue-500 dark:text-blue-400">
                Aspiring Full-Stack Developer | ML & Software Engineering
              </p>
            </div>

            {/* Short Description */}
            <p className={`text-base sm:text-lg leading-relaxed max-w-2xl font-normal ${
              isDark ? 'text-slate-300' : 'text-slate-600'
            }`}>
              I'm a CSE student passionate about web development, software engineering, machine learning, and building practical projects.
            </p>

            {/* Key Skill Highlights Pills */}
            <div className="flex flex-wrap gap-2 pt-1">
              {[
                'React & Frontend',
                'Node.js & Express',
                'Python & Scikit-learn',
                'Computer Graphics',
                'Data Structures & Algorithms'
              ].map((skill) => (
                <span
                  key={skill}
                  className={`px-3 py-1 rounded-lg text-xs font-mono border transition-colors ${
                    isDark
                      ? 'bg-slate-900/70 border-slate-800 text-slate-300 hover:border-blue-500/50'
                      : 'bg-white border-slate-200 text-slate-700 hover:border-blue-400 shadow-2xs'
                  }`}
                >
                  {skill}
                </span>
              ))}
            </div>

            {/* Call To Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-3">
              <a
                id="hero-view-projects-btn"
                href="#projects"
                onClick={(e) => scrollToSection(e, '#projects')}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-sm bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 text-white shadow-lg shadow-blue-600/30 hover:shadow-blue-600/45 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 group cursor-pointer"
              >
                <span>View My Projects</span>
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </a>

              <button
                id="hero-view-resume-btn"
                onClick={onOpenResume}
                className={`inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl font-semibold text-sm border transition-all duration-200 shadow-xs hover:scale-[1.02] active:scale-[0.98] cursor-pointer ${
                  isDark
                    ? 'border-slate-700/80 bg-slate-900/90 text-slate-200 hover:bg-slate-800 hover:border-slate-600 hover:text-white'
                    : 'border-slate-300 bg-white text-slate-800 hover:bg-slate-50 hover:border-slate-400'
                }`}
              >
                <FileText size={16} className="text-blue-500" />
                <span>View Resume</span>
              </button>

              <a
                id="hero-contact-btn"
                href="#contact"
                onClick={(e) => scrollToSection(e, '#contact')}
                className={`inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl font-semibold text-sm border transition-all duration-200 cursor-pointer ${
                  isDark
                    ? 'border-slate-800 bg-slate-950/60 text-slate-300 hover:text-white hover:border-slate-700 hover:bg-slate-900'
                    : 'border-slate-200 bg-slate-100/80 text-slate-700 hover:text-slate-900 hover:border-slate-300 hover:bg-slate-200'
                }`}
              >
                <Mail size={16} className="text-cyan-500" />
                <span>Contact Me</span>
              </a>
            </div>

            {/* Social & Contact Bar */}
            <div className="pt-4 border-t border-slate-800/80 flex flex-wrap items-center gap-4 sm:gap-6">
              <span className={`text-xs font-semibold uppercase tracking-wider ${
                isDark ? 'text-slate-400' : 'text-slate-500'
              }`}>
                Connect Directly:
              </span>

              <div className="flex items-center gap-2.5">
                {/* GitHub */}
                <a
                  id="hero-github-link"
                  href={personalInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center gap-2 px-3.5 py-1.5 rounded-xl text-xs font-medium border transition-all duration-200 ${
                    isDark
                      ? 'border-slate-800 bg-slate-900/80 text-slate-300 hover:text-white hover:border-slate-700 hover:bg-slate-800'
                      : 'border-slate-200 bg-white text-slate-700 hover:text-slate-900 hover:border-slate-300 hover:bg-slate-50 shadow-2xs'
                  }`}
                  aria-label="Farjana Akter Mim GitHub Profile"
                >
                  <Github size={15} className="text-slate-400 group-hover:text-white" />
                  <span>GitHub</span>
                </a>

                {/* LinkedIn */}
                <a
                  id="hero-linkedin-link"
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center gap-2 px-3.5 py-1.5 rounded-xl text-xs font-medium border transition-all duration-200 ${
                    isDark
                      ? 'border-slate-800 bg-slate-900/80 text-slate-300 hover:text-blue-400 hover:border-slate-700 hover:bg-slate-800'
                      : 'border-slate-200 bg-white text-slate-700 hover:text-blue-600 hover:border-slate-300 hover:bg-slate-50 shadow-2xs'
                  }`}
                  aria-label="Farjana Akter Mim LinkedIn Profile"
                >
                  <Linkedin size={15} className="text-blue-500" />
                  <span>LinkedIn</span>
                </a>

                {/* Email */}
                <a
                  id="hero-email-link"
                  href={`mailto:${personalInfo.email}`}
                  className={`flex items-center gap-2 px-3.5 py-1.5 rounded-xl text-xs font-medium border transition-all duration-200 ${
                    isDark
                      ? 'border-slate-800 bg-slate-900/80 text-slate-300 hover:text-cyan-400 hover:border-slate-700 hover:bg-slate-800'
                      : 'border-slate-200 bg-white text-slate-700 hover:text-cyan-600 hover:border-slate-300 hover:bg-slate-50 shadow-2xs'
                  }`}
                  aria-label="Send Email to Farjana Akter Mim"
                >
                  <Mail size={15} className="text-cyan-500" />
                  <span>Email</span>
                </a>
              </div>
            </div>

          </motion.div>

          {/* Right Column: Prominent Professional Portrait */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15, ease: 'easeOut' }}
            className="lg:col-span-5 w-full flex justify-center"
          >
            <div className="relative mx-auto max-w-sm sm:max-w-md w-full">
              
              {/* Subtle Ambient Radial Glow */}
              <div className="absolute -inset-2 bg-gradient-to-tr from-blue-600/20 via-indigo-500/20 to-cyan-400/20 rounded-[32px] blur-xl opacity-70 pointer-events-none" />

              {/* Floating Badge Top Right */}
              <motion.div 
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="absolute -top-3 -right-2 z-20 hidden sm:flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl border border-blue-500/40 bg-slate-900/90 text-cyan-300 text-xs font-mono backdrop-blur-md shadow-lg shadow-blue-500/20"
              >
                <GraduationCap size={14} className="text-blue-400" />
                <span>CSE Student</span>
              </motion.div>
              
              {/* Floating Badge Bottom Left */}
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="absolute -bottom-3 -left-2 z-20 hidden sm:flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl border border-indigo-500/40 bg-slate-900/90 text-indigo-300 text-xs font-mono backdrop-blur-md shadow-lg shadow-indigo-500/20"
              >
                <Brain size={14} className="text-indigo-400" />
                <span>Web & ML Projects</span>
              </motion.div>

              {/* Clean Softly Rounded Portrait Container Frame */}
              <div className={`relative rounded-3xl p-2.5 sm:p-3 border backdrop-blur-xl shadow-2xl transition-all duration-300 overflow-hidden ${
                isDark 
                  ? 'bg-slate-950/85 border-slate-800/90 shadow-black/50 hover:border-blue-500/40' 
                  : 'bg-white border-slate-200 shadow-xl hover:border-blue-300'
              }`}>
                {/* Image Viewport with Natural Aspect Ratio & Clean Framing */}
                <div className={`w-full aspect-[3/4] rounded-2xl overflow-hidden relative flex items-center justify-center ${
                  isDark ? 'bg-slate-900' : 'bg-slate-100'
                }`}>
                  <img
                    id="hero-profile-image"
                    src="/images/profile.png"
                    alt="Farjana Akter Mim — Computer Science and Engineering student"
                    referrerPolicy="no-referrer"
                    loading="eager"
                    className="w-full h-full object-cover object-top transition-transform duration-700 hover:scale-[1.02]"
                  />
                  
                  {/* Subtle edge overlay gradient for seamless light reflection */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent pointer-events-none" />

                  {/* Corner Accent Badge */}
                  <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between p-2.5 rounded-xl bg-slate-950/80 backdrop-blur-md border border-slate-800/90 text-white">
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                      <span className="text-xs font-semibold font-display">Farjana Akter Mim</span>
                    </div>
                    <span className="text-[10px] font-mono text-blue-400 px-2 py-0.5 rounded-md bg-blue-500/15 border border-blue-500/30">
                      Portfolio
                    </span>
                  </div>
                </div>

                {/* Bottom Quick Info strip */}
                <div className="pt-2.5 px-1 flex items-center justify-between text-xs font-mono text-slate-400">
                  <div className="flex items-center gap-1.5">
                    <CheckCircle2 size={13} className="text-emerald-400" />
                    <span>Computer Science & Eng.</span>
                  </div>
                  <span className="text-blue-400 font-semibold text-[11px]">2025/2026</span>
                </div>
              </div>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
