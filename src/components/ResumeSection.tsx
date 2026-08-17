import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  FileText, 
  Download, 
  Eye, 
  ExternalLink, 
  Sparkles, 
  GraduationCap, 
  Code2, 
  FolderGit2,
  BookOpen,
  Mail,
  Github,
  Linkedin,
  Clock,
  Layers,
  Brain,
  Info,
  Maximize2,
  Briefcase,
  Award,
  Trophy,
  Medal,
  Sparkle,
  CalendarDays
} from 'lucide-react';
import { resumeData } from '../data/resumeData';

interface ResumeSectionProps {
  isDark: boolean;
  onOpenModal: () => void;
}

export function ResumeSection({ isDark, onOpenModal }: ResumeSectionProps) {
  const [notice, setNotice] = useState<string | null>(null);

  // "View Resume" always opens the interactive in-page preview / modal.
  // It no longer redirects straight to the static PDF file, so this
  // component (with live GitHub/live-demo links) is what the visitor sees.
  const handleViewResume = () => {
    onOpenModal();
  };

  const handleDownloadResume = () => {
    if (resumeData.hasPdf) {
      const link = document.createElement('a');
      link.href = resumeData.pdfPath;
      link.download = 'Farjana_Akter_Mim_Resume.pdf';
      link.target = '_blank';
      link.rel = 'noopener noreferrer';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } else {
      setNotice('Resume Coming Soon — Explore the full digital CV preview below or open fullscreen.');
      setTimeout(() => setNotice(null), 4500);
    }
  };

  const emailDisplay = resumeData.email || '[Your Email]';

  return (
    <section
      id="resume"
      className={`py-20 lg:py-28 relative scroll-mt-16 overflow-hidden ${
        isDark ? 'text-slate-100' : 'text-slate-900'
      }`}
    >
      {/* Background Ambient Lighting */}
      <div className="absolute top-1/3 -left-24 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 -right-24 w-96 h-96 bg-indigo-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* SECTION HEADING */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-12 space-y-3"
        >
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider bg-blue-500/10 text-blue-400 border border-blue-500/30 backdrop-blur-md">
            <FileText size={13} className="text-blue-400" />
            <span>Curriculum Vitae</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight font-display">
            Resume
          </h2>
          <p className={`text-base sm:text-lg leading-relaxed ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>
            A concise overview of my education, technical skills, projects, and learning journey.
          </p>
        </motion.div>

        {/* TOP ACTION BAR & STATUS */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto mb-10"
        >
          <div className={`p-4 sm:p-5 rounded-2xl border backdrop-blur-xl flex flex-col sm:flex-row items-center justify-between gap-4 ${
            isDark 
              ? 'bg-slate-950/80 border-slate-800/90 shadow-xl shadow-black/30' 
              : 'bg-white border-slate-200 shadow-md'
          }`}>
            <div className="flex items-center gap-3 text-left w-full sm:w-auto">
              <div className="p-2.5 rounded-xl bg-blue-500/10 text-blue-400 border border-blue-500/20 shrink-0">
                <FileText size={20} />
              </div>
              <div>
                <div className="flex items-center gap-2 flex-wrap">
                  <h3 className="text-sm font-bold font-display">Farjana_Akter_Mim_Resume.pdf</h3>
                  {!resumeData.hasPdf ? (
                    <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded-md bg-amber-500/15 text-amber-400 border border-amber-500/30">
                      Resume Coming Soon
                    </span>
                  ) : (
                    <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded-md bg-emerald-500/15 text-emerald-400 border border-emerald-500/30">
                      PDF Available
                    </span>
                  )}
                </div>
                <p className={`text-xs mt-0.5 ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
                  {resumeData.hasPdf ? 'Ready for preview and download' : 'Digital CV preview active below'}
                </p>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap sm:flex-nowrap items-center gap-3 w-full sm:w-auto">
              <button
                id="resume-view-btn"
                onClick={handleViewResume}
                aria-label="View Resume"
                className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl font-semibold text-xs sm:text-sm bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white shadow-md shadow-blue-600/20 transition-all cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
              >
                <Eye size={15} />
                <span>View Resume</span>
              </button>

              <button
                id="resume-download-btn"
                onClick={handleDownloadResume}
                aria-label="Download Resume"
                className={`flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl font-semibold text-xs sm:text-sm border transition-all cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 ${
                  !resumeData.hasPdf
                    ? isDark
                      ? 'border-slate-800 bg-slate-900/60 text-slate-300 hover:border-slate-700 hover:text-white'
                      : 'border-slate-200 bg-slate-50 text-slate-700 hover:bg-slate-100'
                    : 'bg-blue-600 text-white hover:bg-blue-500'
                }`}
              >
                <Download size={15} className="text-blue-400" />
                <span>Download Resume</span>
              </button>
            </div>
          </div>

          {/* Inline Alert / Notice if PDF is pending */}
          <AnimatePresence>
            {notice && (
              <motion.div
                initial={{ opacity: 0, y: -6 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -6 }}
                className="mt-3 p-3.5 rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs flex items-center gap-2.5 text-left"
                role="alert"
              >
                <Info size={16} className="shrink-0 text-amber-400" />
                <span>{notice}</span>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>

        {/* RESUME PREVIEW (Professional One-Page Developer Resume Document Card) */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          {/* Document Sheet Frame */}
          <div className="relative rounded-3xl p-3 sm:p-4 bg-gradient-to-b from-slate-300/30 via-slate-400/20 to-slate-500/20 dark:from-slate-800/60 dark:via-slate-900/60 dark:to-slate-950/60 border border-slate-200/80 dark:border-slate-800/80 shadow-2xl backdrop-blur-xl">
            
            {/* Document Toolbar Header */}
            <div className="flex items-center justify-between px-3 py-2 pb-3 text-xs font-mono text-slate-400 border-b border-slate-300/50 dark:border-slate-800/70 mb-3">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-red-400/70" />
                <span className="w-2.5 h-2.5 rounded-full bg-amber-400/70" />
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400/70" />
                <span className="ml-2 font-medium hidden sm:inline text-slate-400">
                  resume-preview.pdf
                </span>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={onOpenModal}
                  aria-label="Open Fullscreen Resume Preview"
                  className="flex items-center gap-1 hover:text-blue-400 transition-colors cursor-pointer text-[11px]"
                >
                  <Maximize2 size={12} />
                  <span>Fullscreen View</span>
                </button>
              </div>
            </div>

            {/* Crisp Light Document Paper Surface */}
            <article 
              className="bg-white text-slate-900 rounded-2xl p-6 sm:p-10 lg:p-12 shadow-inner border border-slate-200/90 text-left space-y-7 select-text"
              aria-label="Developer Resume Preview for Farjana Akter Mim"
            >
              
              {/* HEADER SECTION */}
              <header className="border-b border-slate-200 pb-5 space-y-2.5">
                <div>
                  <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight font-display uppercase">
                    {resumeData.name}
                  </h1>
                  <p className="text-sm sm:text-base font-semibold text-blue-700 mt-0.5">
                    {resumeData.title}
                  </p>
                </div>

                {/* Contact Strip */}
                <div className="pt-1 flex flex-wrap gap-y-2 gap-x-5 text-xs text-slate-600 font-mono">
                  <a
                    href={`mailto:${emailDisplay}`}
                    className="inline-flex items-center gap-1.5 hover:text-blue-700 transition-colors"
                    aria-label={`Email ${emailDisplay}`}
                  >
                    <Mail size={13} className="text-blue-600" />
                    <span>Email: {emailDisplay}</span>
                  </a>

                  <a
                    href={resumeData.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 hover:text-blue-700 transition-colors"
                    aria-label="Farjana Akter Mim on GitHub (opens in new tab)"
                  >
                    <Github size={13} className="text-slate-800" />
                    <span>GitHub: github.com/{resumeData.githubUsername}</span>
                    <ExternalLink size={10} className="text-slate-400" />
                  </a>

                  <a
                    href={resumeData.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 hover:text-blue-700 transition-colors"
                    aria-label="Farjana Akter Mim on LinkedIn (opens in new tab)"
                  >
                    <Linkedin size={13} className="text-blue-700" />
                    <span>LinkedIn: linkedin.com/in/{resumeData.linkedinUsername}</span>
                    <ExternalLink size={10} className="text-slate-400" />
                  </a>
                </div>
              </header>

              {/* 1. ACADEMIC PROFILE */}
              <section className="space-y-2" aria-labelledby="resume-profile-heading">
                <div className="flex items-center gap-2 border-b border-slate-200 pb-1">
                  <Sparkle size={14} className="text-blue-700" />
                  <h2 id="resume-profile-heading" className="text-xs sm:text-sm font-bold uppercase tracking-wider text-slate-900 font-display">
                    Academic Profile
                  </h2>
                </div>
                <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/80">
                  <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                    {resumeData.summary}
                  </p>
                </div>
              </section>

              {/* 2. EDUCATION */}
              <section className="space-y-2.5" aria-labelledby="resume-education-heading">
                <div className="flex items-center gap-2 border-b border-slate-200 pb-1">
                  <GraduationCap size={15} className="text-blue-700" />
                  <h2 id="resume-education-heading" className="text-xs sm:text-sm font-bold uppercase tracking-wider text-slate-900 font-display">
                    Education
                  </h2>
                </div>

                <div className="p-4 rounded-xl bg-slate-50/70 border border-slate-200/80 space-y-1.5">
                  <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 text-xs sm:text-sm">
                    <span className="font-bold text-slate-900">
                      {resumeData.education.degree}
                    </span>
                    <span className="font-mono text-xs text-slate-600 font-medium">
                      Duration: {resumeData.education.period}
                    </span>
                  </div>
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 text-xs sm:text-sm text-slate-700 font-medium">
                    <span>University: {resumeData.education.institution}</span>
                    <span className="font-bold text-blue-900 bg-blue-100/80 px-2.5 py-0.5 rounded border border-blue-200 text-xs font-mono">
                      CGPA: {resumeData.education.cgpa}
                    </span>
                  </div>
                </div>
              </section>

              {/* 3. ACADEMIC ACHIEVEMENTS */}
              <section className="space-y-2.5" aria-labelledby="resume-achievements-heading">
                <div className="flex items-center gap-2 border-b border-slate-200 pb-1">
                  <Trophy size={15} className="text-blue-700" />
                  <h2 id="resume-achievements-heading" className="text-xs sm:text-sm font-bold uppercase tracking-wider text-slate-900 font-display">
                    Academic Achievements
                  </h2>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {resumeData.academicAchievements.map((item, idx) => (
                    <motion.div
                      key={item.year}
                      initial={{ opacity: 0, y: 8 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: idx * 0.1 }}
                      className="p-3.5 rounded-xl bg-amber-50/50 border border-amber-200/80 space-y-1 text-xs sm:text-sm"
                    >
                      <div className="flex items-center justify-between gap-2 font-display">
                        <div className="flex items-center gap-1.5 font-bold text-slate-900">
                          <Medal size={14} className="text-amber-600 shrink-0" />
                          <span>{item.year}</span>
                        </div>
                        <span className="text-[11px] font-mono font-semibold text-amber-900 bg-amber-100/80 px-2 py-0.5 rounded border border-amber-200">
                          {item.position}
                        </span>
                      </div>
                      <p className="text-xs font-medium text-slate-800">
                        {item.award}
                      </p>
                      <p className="text-[11px] text-slate-600 leading-relaxed pt-0.5">
                        "{item.description}"
                      </p>
                    </motion.div>
                  ))}
                </div>
              </section>

              {/* 4. TECHNICAL SKILLS */}
              <section className="space-y-2.5" aria-labelledby="resume-skills-heading">
                <div className="flex items-center gap-2 border-b border-slate-200 pb-1">
                  <Code2 size={15} className="text-blue-700" />
                  <h2 id="resume-skills-heading" className="text-xs sm:text-sm font-bold uppercase tracking-wider text-slate-900 font-display">
                    Technical Skills
                  </h2>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2 text-xs sm:text-sm text-slate-800">
                  <div>
                    <span className="font-bold text-slate-900">Programming: </span>
                    <span>{resumeData.skills.programming.join(', ')}</span>
                  </div>
                  <div>
                    <span className="font-bold text-slate-900">Frontend: </span>
                    <span>{resumeData.skills.frontend.join(', ')}</span>
                  </div>
                  <div>
                    <span className="font-bold text-slate-900">Backend: </span>
                    <span>{resumeData.skills.backend.join(', ')}</span>
                  </div>
                  <div>
                    <span className="font-bold text-slate-900">Machine Learning & Data: </span>
                    <span>{resumeData.skills.machineLearning.join(', ')}</span>
                  </div>
                  <div>
                    <span className="font-bold text-slate-900">Tools: </span>
                    <span>{resumeData.skills.tools.join(', ')}</span>
                  </div>
                  <div>
                    <span className="font-bold text-slate-900">Other: </span>
                    <span>{resumeData.skills.otherAreas.join(', ')}</span>
                  </div>
                </div>
              </section>

              {/* 5. PROJECTS */}
              <section className="space-y-3.5" aria-labelledby="resume-projects-heading">
                <div className="flex items-center gap-2 border-b border-slate-200 pb-1">
                  <FolderGit2 size={15} className="text-blue-700" />
                  <h2 id="resume-projects-heading" className="text-xs sm:text-sm font-bold uppercase tracking-wider text-slate-900 font-display">
                    Projects
                  </h2>
                </div>

                <div className="space-y-3.5 divide-y divide-slate-100">
                  {resumeData.projects.map((proj, idx) => (
                    <div key={`${proj.name}-${idx}`} className={`space-y-1 text-xs sm:text-sm ${idx !== 0 ? 'pt-3' : ''}`}>
                      <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
                        <div className="flex items-center gap-2 flex-wrap">
                          <span className="font-bold text-slate-900">{proj.name}</span>
                          
                          {proj.githubClientUrl && proj.githubServerUrl ? (
                            <div className="inline-flex items-center gap-2">
                              <a
                                href={proj.githubClientUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-blue-700 hover:text-blue-900 inline-flex items-center gap-0.5 font-mono text-[11px] font-semibold"
                                aria-label={`View ${proj.name} Frontend repository on GitHub (opens in new tab)`}
                              >
                                <span>[Frontend Repo]</span>
                                <ExternalLink size={10} />
                              </a>
                              <a
                                href={proj.githubServerUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-blue-700 hover:text-blue-900 inline-flex items-center gap-0.5 font-mono text-[11px] font-semibold"
                                aria-label={`View ${proj.name} Backend repository on GitHub (opens in new tab)`}
                              >
                                <span>[Backend Repo]</span>
                                <ExternalLink size={10} />
                              </a>
                            </div>
                          ) : proj.githubUrl ? (
                            <a
                              href={proj.githubUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-blue-700 hover:text-blue-900 inline-flex items-center gap-0.5 font-mono text-[11px] font-semibold"
                              aria-label={`View ${proj.name} source code on GitHub (opens in new tab)`}
                            >
                              <span>[GitHub Repo]</span>
                              <ExternalLink size={10} />
                            </a>
                          ) : (
                            <span className="text-slate-500 font-mono text-[11px]">
                              [Repository Coming Soon]
                            </span>
                          )}
                        </div>

                        {/* Only render Live Demo link when a liveUrl actually exists — nothing shown otherwise */}
                        {proj.liveUrl && (
                          <span className="text-[11px] font-mono text-slate-500 shrink-0">
                            <a
                              href={proj.liveUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-0.5 hover:text-blue-700 transition-colors"
                              aria-label={`View ${proj.name} live demo (opens in new tab)`}
                            >
                              <ExternalLink size={10} />
                              <span>Live Demo</span>
                            </a>
                          </span>
                        )}
                      </div>

                      <p className="text-slate-700 leading-relaxed text-xs">
                        {proj.description}
                      </p>

                      <p className="text-[11px] font-mono text-slate-600">
                        <span className="font-semibold text-slate-800">Technologies: </span>
                        {proj.technologies.join(', ')}
                      </p>
                    </div>
                  ))}
                </div>
              </section>

              {/* 6. RELEVANT COURSEWORK */}
              <section className="space-y-2.5" aria-labelledby="resume-coursework-heading">
                <div className="flex items-center gap-2 border-b border-slate-200 pb-1">
                  <BookOpen size={15} className="text-blue-700" />
                  <h2 id="resume-coursework-heading" className="text-xs sm:text-sm font-bold uppercase tracking-wider text-slate-900 font-display">
                    Relevant Coursework
                  </h2>
                </div>

                <div className="flex flex-wrap gap-1.5">
                  {resumeData.coursework.map((course) => (
                    <span
                      key={course}
                      className="px-2.5 py-0.5 rounded-md text-[11px] font-medium bg-slate-100 text-slate-800 border border-slate-200"
                    >
                      {course}
                    </span>
                  ))}
                </div>
              </section>

              {/* 7. CERTIFICATIONS (Only rendered if certifications exist) */}
              {resumeData.certifications && resumeData.certifications.length > 0 && (
                <section className="space-y-2.5" aria-labelledby="resume-certifications-heading">
                  <div className="flex items-center gap-2 border-b border-slate-200 pb-1">
                    <Award size={15} className="text-blue-700" />
                    <h2 id="resume-certifications-heading" className="text-xs sm:text-sm font-bold uppercase tracking-wider text-slate-900 font-display">
                      Certifications
                    </h2>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {resumeData.certifications.map((cert, idx) => (
                      <motion.div
                        key={`${cert.name}-${idx}`}
                        initial={{ opacity: 0, y: 8 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.3, delay: idx * 0.08 }}
                        className="p-3.5 rounded-xl bg-emerald-50/50 border border-emerald-200/80 space-y-1.5 text-xs sm:text-sm"
                      >
                        <div className="flex items-start justify-between gap-2">
                          <span className="font-bold text-slate-900 leading-snug">
                            {cert.name}
                          </span>
                          {cert.url && (
                            <a
                              href={cert.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="shrink-0 text-emerald-700 hover:text-emerald-900 transition-colors"
                              title="View Certificate"
                              aria-label={`View certificate: ${cert.name} (opens in new tab)`}
                            >
                              <ExternalLink size={13} />
                            </a>
                          )}
                        </div>

                        <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-[11px] text-slate-600">
                          {cert.issuer && (
                            <span className="font-mono font-semibold text-emerald-900 bg-emerald-100/80 px-2 py-0.5 rounded border border-emerald-200">
                              {cert.issuer}
                            </span>
                          )}
                          {cert.date && (
                            <span className="inline-flex items-center gap-1 text-slate-500 font-mono">
                              <CalendarDays size={11} className="text-slate-400" />
                              {cert.date}
                            </span>
                          )}
                        </div>

                        {cert.url && (
                          <a
                            href={cert.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1 text-[11px] font-mono font-semibold text-blue-700 hover:text-blue-900 transition-colors pt-0.5"
                            aria-label={`Verify certificate: ${cert.name} (opens in new tab)`}
                          >
                            <ExternalLink size={10} />
                            <span>Verify Certificate</span>
                          </a>
                        )}
                      </motion.div>
                    ))}
                  </div>

                  {resumeData.certificationsNote && (
                    <p className="text-[11px] text-slate-500 italic pt-0.5">
                      {resumeData.certificationsNote}
                    </p>
                  )}
                </section>
              )}

              {/* 8. CURRENTLY LEARNING */}
              <section className="space-y-2.5" aria-labelledby="resume-learning-heading">
                <div className="flex items-center gap-2 border-b border-slate-200 pb-1">
                  <Brain size={15} className="text-blue-700" />
                  <h2 id="resume-learning-heading" className="text-xs sm:text-sm font-bold uppercase tracking-wider text-slate-900 font-display">
                    Currently Learning
                  </h2>
                </div>

                <div className="flex flex-wrap gap-1.5">
                  {resumeData.currentlyLearning.map((item) => (
                    <span
                      key={item}
                      className="px-2.5 py-1 rounded-md text-[11px] font-medium bg-blue-50 text-blue-800 border border-blue-200 flex items-center gap-1"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse"></span>
                      <span>{item}</span>
                    </span>
                  ))}
                </div>
              </section>

              {/* 9. EXPERIENCE NOTE (fallback for students without formal work experience) */}
              {resumeData.experienceNote && (
                <section className="space-y-2.5" aria-labelledby="resume-experience-heading">
                  <div className="flex items-center gap-2 border-b border-slate-200 pb-1">
                    <Briefcase size={15} className="text-blue-700" />
                    <h2 id="resume-experience-heading" className="text-xs sm:text-sm font-bold uppercase tracking-wider text-slate-900 font-display">
                      Experience
                    </h2>
                  </div>
                  <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/80">
                    <p className="text-xs sm:text-sm text-slate-600 italic leading-relaxed">
                      {resumeData.experienceNote}
                    </p>
                  </div>
                </section>
              )}

            </article>

          </div>
        </motion.div>

        {/* FINAL RESUME CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.5 }}
          className={`mt-12 p-6 sm:p-8 rounded-3xl border backdrop-blur-xl text-center max-w-3xl mx-auto space-y-4 ${
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
            Want to know more about my journey?
          </h3>

          <p className={`text-xs sm:text-sm leading-relaxed max-w-xl mx-auto ${
            isDark ? 'text-slate-300' : 'text-slate-600'
          }`}>
            Feel free to inspect my complete digital CV, explore the project repositories, or reach out for internships and collaborations.
          </p>

          <div className="pt-2 flex flex-wrap items-center justify-center gap-3">
            <button
              id="resume-bottom-view-btn"
              onClick={handleViewResume}
              aria-label="View Resume"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-xs sm:text-sm bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white shadow-md shadow-blue-600/25 transition-all cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
            >
              <Eye size={15} />
              <span>View Resume</span>
            </button>

            <a
              id="resume-bottom-linkedin-btn"
              href={resumeData.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Connect with Farjana Akter Mim on LinkedIn (opens in new tab)"
              className={`inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-xs sm:text-sm border transition-all cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 ${
                isDark
                  ? 'border-slate-800 bg-slate-900 text-slate-200 hover:bg-slate-800 hover:text-white'
                  : 'border-slate-300 bg-white text-slate-800 hover:bg-slate-50 shadow-2xs'
              }`}
            >
              <Linkedin size={15} className="text-blue-400" />
              <span>Connect on LinkedIn</span>
              <ExternalLink size={13} className="text-slate-400" />
            </a>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
