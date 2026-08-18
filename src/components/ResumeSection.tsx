import React, { useState } from 'react';
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
  Phone,
  MapPin,
  Github,
  Linkedin,
  Brain,
  Info,
  Maximize2,
  Briefcase,
  Award,
  Trophy,
  Medal,
  CalendarDays,
  FileDown,
  Globe
} from 'lucide-react';
import { ResumeData } from '../types';
import { resumeData as defaultResumeData } from '../data/resumeData';
import { exportResumeToDocx } from '../utils/docxExport';

interface ResumeSectionProps {
  isDark?: boolean;
  onOpenModal?: () => void;
  data?: ResumeData;
}

export function ResumeSection({
  isDark = true,
  onOpenModal,
  data = defaultResumeData
}: ResumeSectionProps) {
  const [notice, setNotice] = useState<string | null>(null);
  const [isExportingDocx, setIsExportingDocx] = useState(false);

  const handleViewResume = () => {
    if (onOpenModal) {
      onOpenModal();
    } else {
      window.print();
    }
  };

  const handleDownloadPdf = () => {
    if (data.hasPdf && data.pdfPath) {
      const link = document.createElement('a');
      link.href = data.pdfPath;
      link.download = 'Farjana_Akter_Mim_Resume.pdf';
      link.target = '_blank';
      link.rel = 'noopener noreferrer';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } else {
      setNotice('Opening print dialog to Save as PDF...');
      setTimeout(() => setNotice(null), 3500);
      window.print();
    }
  };

  const handleDownloadDocx = async () => {
    try {
      setIsExportingDocx(true);
      await exportResumeToDocx(data);
    } catch (err) {
      console.error('Failed to export DOCX:', err);
      setNotice('Unable to export DOCX document. Please try PDF download.');
      setTimeout(() => setNotice(null), 4000);
    } finally {
      setIsExportingDocx(false);
    }
  };

  const emailDisplay = data.email || 'farjanaaktermim330@gmail.com';

  return (
    <section
      id="resume"
      className={`py-16 sm:py-24 relative scroll-mt-16 overflow-hidden ${
        isDark ? 'text-slate-100' : 'text-slate-900'
      }`}
    >
      {/* Background Ambient Lighting */}
      <div className="absolute top-1/4 -left-24 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 -right-24 w-96 h-96 bg-indigo-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* SECTION HEADING */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-10 space-y-3"
        >
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider bg-blue-500/10 text-blue-400 border border-blue-500/30 backdrop-blur-md">
            <FileText size={13} className="text-blue-400" />
            <span>Curriculum Vitae</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight font-display">
            Resume
          </h2>
          <p
            className={`text-sm sm:text-base leading-relaxed ${
              isDark ? 'text-slate-300' : 'text-slate-600'
            }`}
          >
            A comprehensive, ATS-standard overview of my academics, technical skills, projects, and achievements.
          </p>
        </motion.div>

        {/* TOP ACTION BAR & STATUS */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto mb-8"
        >
          <div
            className={`p-4 sm:p-5 rounded-2xl border backdrop-blur-xl flex flex-col sm:flex-row items-center justify-between gap-4 ${
              isDark
                ? 'bg-slate-950/80 border-slate-800/90 shadow-xl shadow-black/30'
                : 'bg-white border-slate-200 shadow-md'
            }`}
          >
            <div className="flex items-center gap-3 text-left w-full sm:w-auto">
              <div className="p-2.5 rounded-xl bg-blue-500/10 text-blue-400 border border-blue-500/20 shrink-0">
                <FileText size={20} />
              </div>
              <div>
                <div className="flex items-center gap-2 flex-wrap">
                  <h3 className="text-sm font-bold font-display">Farjana_Akter_Mim_Resume.pdf</h3>
                  <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded-md bg-emerald-500/15 text-emerald-400 border border-emerald-500/30">
                    ATS-Ready & Verified
                  </span>
                </div>
                <p
                  className={`text-xs mt-0.5 ${
                    isDark ? 'text-slate-400' : 'text-slate-500'
                  }`}
                >
                  Download in Word (.DOCX) or PDF, or view interactive CV below
                </p>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap sm:flex-nowrap items-center gap-2.5 w-full sm:w-auto">
              {/* Word (.DOCX) Download */}
              <button
                id="resume-docx-btn"
                onClick={handleDownloadDocx}
                disabled={isExportingDocx}
                aria-label="Download Word DOCX Resume"
                className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-1.5 px-3.5 py-2.5 rounded-xl font-semibold text-xs bg-blue-700 hover:bg-blue-600 disabled:opacity-50 text-white shadow-md transition-all cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
                title="Download editable Microsoft Word .DOCX"
              >
                <FileDown size={14} className="text-blue-200" />
                <span>{isExportingDocx ? 'Generating...' : 'Word (.DOCX)'}</span>
              </button>

              {/* View / Fullscreen Resume */}
              <button
                id="resume-view-btn"
                onClick={handleViewResume}
                aria-label="View Resume Fullscreen"
                className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-xl font-semibold text-xs sm:text-sm bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white shadow-md shadow-blue-600/20 transition-all cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
              >
                <Eye size={14} />
                <span>View Full CV</span>
              </button>

              {/* Download PDF */}
              <button
                id="resume-download-btn"
                onClick={handleDownloadPdf}
                aria-label="Download Resume PDF"
                className={`flex-1 sm:flex-initial inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-xl font-semibold text-xs sm:text-sm border transition-all cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 ${
                  isDark
                    ? 'border-slate-800 bg-slate-900/60 text-slate-200 hover:border-slate-700 hover:text-white'
                    : 'border-slate-200 bg-slate-50 text-slate-700 hover:bg-slate-100'
                }`}
              >
                <Download size={14} className="text-sky-400" />
                <span>Download PDF</span>
              </button>
            </div>
          </div>

          {/* Inline Alert / Notice if triggered */}
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
                  Farjana_Akter_Mim_Resume.pdf
                </span>
              </div>

              <div className="flex items-center gap-3">
                <button
                  onClick={handleDownloadDocx}
                  disabled={isExportingDocx}
                  className="hover:text-blue-400 transition-colors cursor-pointer text-[11px] flex items-center gap-1"
                  title="Export to Word format"
                >
                  <FileDown size={12} />
                  <span>.DOCX</span>
                </button>
                <button
                  onClick={handleViewResume}
                  aria-label="Open Fullscreen Resume Preview"
                  className="flex items-center gap-1 hover:text-blue-400 transition-colors cursor-pointer text-[11px]"
                >
                  <Maximize2 size={12} />
                  <span>Fullscreen</span>
                </button>
              </div>
            </div>

            {/* Crisp Light Document Paper Surface */}
            <article
              className="bg-white text-slate-900 rounded-2xl p-6 sm:p-10 lg:p-12 shadow-inner border border-slate-200/90 text-left space-y-6 select-text"
              aria-label="Developer Resume Preview for Farjana Akter Mim"
            >
              {/* HEADER SECTION */}
              <header className="border-b-2 border-slate-900 pb-4 space-y-1.5">
                <div>
                  <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight uppercase">
                    {data.name}
                  </h1>
                  <p className="text-xs sm:text-sm font-bold text-slate-700 mt-0.5 uppercase tracking-wide">
                    {data.subtitle || `${data.education.degree} | ${data.education.institution}`}
                  </p>
                </div>

                {/* Contact Strip */}
                <div className="pt-1 flex flex-wrap gap-y-1.5 gap-x-4 text-xs text-slate-700 font-mono">
                  {data.phone && (
                    <span className="inline-flex items-center gap-1 text-slate-800 font-medium">
                      <Phone size={12} className="text-sky-600" />
                      <span>{data.phone}</span>
                    </span>
                  )}
                  <a
                    href={`mailto:${emailDisplay}`}
                    className="inline-flex items-center gap-1 hover:text-blue-700 transition-colors"
                  >
                    <Mail size={12} className="text-blue-600" />
                    <span>{emailDisplay}</span>
                  </a>
                  <a
                    href={data.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 hover:text-blue-700 transition-colors"
                  >
                    <Linkedin size={12} className="text-[#0077b5]" />
                    <span>linkedin.com/in/{data.linkedinUsername}</span>
                  </a>
                  <a
                    href={data.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 hover:text-blue-700 transition-colors"
                  >
                    <Github size={12} className="text-slate-900" />
                    <span>github.com/{data.githubUsername}</span>
                  </a>
                  {data.location && (
                    <span className="inline-flex items-center gap-1 text-slate-800">
                      <MapPin size={12} className="text-rose-600" />
                      <span>{data.location}</span>
                    </span>
                  )}
                </div>
              </header>

              {/* 1. CAREER SUMMARY */}
              <section className="space-y-1.5" aria-labelledby="section-summary">
                <div className="flex items-center gap-2 border-b border-slate-800 pb-1">
                  <Sparkles size={14} className="text-blue-700" />
                  <h2
                    id="section-summary"
                    className="text-xs sm:text-sm font-bold uppercase tracking-wider text-slate-900"
                  >
                    CAREER SUMMARY
                  </h2>
                </div>
                <p className="text-xs sm:text-[13px] text-slate-800 leading-relaxed text-justify">
                  {data.summary}
                </p>
              </section>

              {/* 2. CORE COMPETENCIES & TECHNICAL SKILLS */}
              <section className="space-y-1.5" aria-labelledby="section-skills">
                <div className="flex items-center gap-2 border-b border-slate-800 pb-1">
                  <Code2 size={14} className="text-blue-700" />
                  <h2
                    id="section-skills"
                    className="text-xs sm:text-sm font-bold uppercase tracking-wider text-slate-900"
                  >
                    CORE COMPETENCIES & TECHNICAL SKILLS
                  </h2>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-1.5 text-xs text-slate-800">
                  <div>
                    <span className="font-bold text-slate-900">• Programming Languages: </span>
                    <span>{data.skills.programming.join(', ')}</span>
                  </div>
                  <div>
                    <span className="font-bold text-slate-900">• Frontend Technologies: </span>
                    <span>{data.skills.frontend.join(', ')}</span>
                  </div>
                  <div>
                    <span className="font-bold text-slate-900">• Backend & Databases: </span>
                    <span>{data.skills.backend.join(', ')}</span>
                  </div>
                  <div>
                    <span className="font-bold text-slate-900">• Machine Learning & Data: </span>
                    <span>{data.skills.machineLearning.join(', ')}</span>
                  </div>
                  <div>
                    <span className="font-bold text-slate-900">• Tools & Platforms: </span>
                    <span>{data.skills.tools.join(', ')}</span>
                  </div>
                  {data.skills.otherAreas && data.skills.otherAreas.length > 0 && (
                    <div>
                      <span className="font-bold text-slate-900">• Specialized Domains: </span>
                      <span>{data.skills.otherAreas.slice(0, 6).join(', ')}</span>
                    </div>
                  )}
                </div>
              </section>

              {/* 3. EDUCATION */}
              <section className="space-y-1.5" aria-labelledby="section-education">
                <div className="flex items-center gap-2 border-b border-slate-800 pb-1">
                  <GraduationCap size={15} className="text-blue-700" />
                  <h2
                    id="section-education"
                    className="text-xs sm:text-sm font-bold uppercase tracking-wider text-slate-900"
                  >
                    EDUCATION
                  </h2>
                </div>
                <div className="space-y-1 text-xs sm:text-[13px] text-slate-800">
                  <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
                    <div>
                      <span className="font-bold text-slate-900">{data.education.degree}</span>
                      <span className="text-slate-700 font-medium ml-1">
                        — {data.education.institution}
                      </span>
                    </div>
                    <span className="font-mono text-xs font-semibold text-slate-700">
                      {data.education.period}
                    </span>
                  </div>
                  <div className="flex flex-wrap justify-between text-xs text-slate-700 pl-2 border-l-2 border-slate-300">
                    <span>
                      <strong>Department:</strong> {data.education.department}
                    </span>
                    <span className="font-bold text-slate-900">
                      CGPA: {data.education.cgpa}
                    </span>
                  </div>
                </div>
              </section>

              {/* 4. ACADEMIC ACHIEVEMENTS & SCHOLARSHIPS */}
              {data.academicAchievements && data.academicAchievements.length > 0 && (
                <section className="space-y-1.5" aria-labelledby="section-achievements">
                  <div className="flex items-center gap-2 border-b border-slate-800 pb-1">
                    <Trophy size={14} className="text-amber-600" />
                    <h2
                      id="section-achievements"
                      className="text-xs sm:text-sm font-bold uppercase tracking-wider text-slate-900"
                    >
                      ACADEMIC ACHIEVEMENTS & SCHOLARSHIPS
                    </h2>
                  </div>
                  <div className="space-y-1.5">
                    {data.academicAchievements.map((item, idx) => (
                      <div key={idx} className="text-xs text-slate-800">
                        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-baseline">
                          <div className="font-bold text-slate-900">
                            • {item.title}
                            {item.organization && (
                              <span className="font-normal text-slate-700 ml-1.5">
                                | {item.organization}
                              </span>
                            )}
                          </div>
                          {item.date && (
                            <span className="text-xs font-semibold text-slate-600">
                              {item.date}
                            </span>
                          )}
                        </div>
                        <p className="text-xs text-slate-700 pl-3 leading-relaxed">
                          {item.description}
                        </p>
                      </div>
                    ))}
                  </div>
                </section>
              )}

              {/* 5. ACADEMIC & SOFTWARE PROJECTS */}
              <section className="space-y-2" aria-labelledby="section-projects">
                <div className="flex items-center gap-2 border-b border-slate-800 pb-1">
                  <FolderGit2 size={15} className="text-blue-700" />
                  <h2
                    id="section-projects"
                    className="text-xs sm:text-sm font-bold uppercase tracking-wider text-slate-900"
                  >
                    ACADEMIC & SOFTWARE PROJECTS
                  </h2>
                </div>
                <div className="space-y-3.5 divide-y divide-slate-100">
                  {data.projects.map((proj, idx) => (
                    <div
                      key={`${proj.name}-${idx}`}
                      className={`text-xs space-y-1 ${idx !== 0 ? 'pt-2.5' : ''}`}
                    >
                      <div className="flex justify-between items-start flex-wrap gap-1">
                        <div className="flex items-baseline gap-1.5 flex-wrap">
                          <span className="font-bold text-slate-900 text-[12.5px]">
                            {proj.name}
                          </span>
                          <span className="text-xs text-slate-600 font-medium">
                            [{proj.technologies.join(', ')}]
                          </span>
                        </div>

                        {/* Links */}
                        <div className="flex items-center gap-2 font-mono text-[11px]">
                          {proj.liveUrl && (
                            <a
                              href={proj.liveUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-sky-700 hover:underline font-semibold inline-flex items-center gap-0.5"
                            >
                              <Globe size={11} className="text-sky-600" />
                              <span>Live Demo</span>
                            </a>
                          )}
                          {proj.githubClientUrl && (
                            <a
                              href={proj.githubClientUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-slate-800 hover:underline font-semibold"
                            >
                              [Client]
                            </a>
                          )}
                          {proj.githubServerUrl && (
                            <a
                              href={proj.githubServerUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-slate-800 hover:underline font-semibold"
                            >
                              [Server]
                            </a>
                          )}
                          {!proj.githubClientUrl && !proj.githubServerUrl && proj.githubUrl && (
                            <a
                              href={proj.githubUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-slate-800 hover:underline font-semibold"
                            >
                              [GitHub]
                            </a>
                          )}
                        </div>
                      </div>

                      {/* Bullet Points */}
                      <ul className="list-disc list-outside pl-4 text-xs text-slate-700 space-y-0.5">
                        {proj.bulletPoints && proj.bulletPoints.length > 0 ? (
                          proj.bulletPoints.map((bp, bIdx) => (
                            <li key={bIdx} className="leading-snug">
                              {bp}
                            </li>
                          ))
                        ) : (
                          <li className="leading-snug">{proj.description}</li>
                        )}
                      </ul>
                    </div>
                  ))}
                </div>
              </section>

              {/* 6. TRAINING & CERTIFICATIONS */}
              {data.certifications && data.certifications.length > 0 && (
                <section className="space-y-1.5" aria-labelledby="section-certifications">
                  <div className="flex items-center gap-2 border-b border-slate-800 pb-1">
                    <Award size={14} className="text-blue-700" />
                    <h2
                      id="section-certifications"
                      className="text-xs sm:text-sm font-bold uppercase tracking-wider text-slate-900"
                    >
                      TRAINING & CERTIFICATIONS
                    </h2>
                  </div>
                  <div className="space-y-1.5 text-xs text-slate-800">
                    {data.certifications.map((cert, idx) => (
                      <div key={idx}>
                        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-baseline">
                          <div>
                            <span className="font-bold text-slate-900">• {cert.name}</span>
                            {cert.issuer && (
                              <span className="text-slate-700 font-medium ml-1.5">
                                — {cert.issuer}
                              </span>
                            )}
                          </div>
                          <div className="flex items-center gap-2">
                            {cert.date && (
                              <span className="font-semibold text-slate-600">{cert.date}</span>
                            )}
                            {cert.url && (
                              <a
                                href={cert.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-sky-700 hover:underline inline-flex items-center gap-0.5 font-medium"
                              >
                                <ExternalLink size={10} />
                                <span>Verify</span>
                              </a>
                            )}
                          </div>
                        </div>
                        {cert.description && (
                          <p className="text-slate-700 pl-3 leading-snug">- {cert.description}</p>
                        )}
                      </div>
                    ))}
                  </div>
                </section>
              )}

              {/* 7. EXTRA-CURRICULAR & COMPETITIONS */}
              {data.extraCurricular && data.extraCurricular.length > 0 && (
                <section className="space-y-1.5" aria-labelledby="section-extracurricular">
                  <div className="flex items-center gap-2 border-b border-slate-800 pb-1">
                    <Medal size={14} className="text-blue-700" />
                    <h2
                      id="section-extracurricular"
                      className="text-xs sm:text-sm font-bold uppercase tracking-wider text-slate-900"
                    >
                      EXTRA-CURRICULAR PARTICIPATION & COMPETITIONS
                    </h2>
                  </div>
                  <div className="space-y-1 text-xs text-slate-800">
                    {data.extraCurricular.map((item, idx) => (
                      <div
                        key={idx}
                        className="flex flex-col sm:flex-row justify-between items-start sm:items-baseline"
                      >
                        <div>
                          <span className="font-bold text-slate-900">• {item.title}</span>
                          {item.organization && (
                            <span className="text-slate-600 ml-1">— {item.organization}</span>
                          )}
                        </div>
                        {item.date && (
                          <span className="text-slate-600 font-medium whitespace-nowrap text-[11.5px]">
                            {item.date}
                          </span>
                        )}
                      </div>
                    ))}
                  </div>
                </section>
              )}

              {/* 8. RELEVANT COURSEWORK */}
              <section className="space-y-1.5" aria-labelledby="section-coursework">
                <div className="flex items-center gap-2 border-b border-slate-800 pb-1">
                  <BookOpen size={14} className="text-blue-700" />
                  <h2
                    id="section-coursework"
                    className="text-xs sm:text-sm font-bold uppercase tracking-wider text-slate-900"
                  >
                    RELEVANT COURSEWORK
                  </h2>
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {data.coursework.map((course) => (
                    <span
                      key={course}
                      className="px-2 py-0.5 rounded text-[11px] font-medium bg-slate-100 text-slate-800 border border-slate-200"
                    >
                      {course}
                    </span>
                  ))}
                </div>
              </section>

              {/* 9. REFERENCES */}
              {data.references && data.references.length > 0 && (
                <section className="space-y-1.5" aria-labelledby="section-references">
                  <div className="flex items-center gap-2 border-b border-slate-800 pb-1">
                    <Briefcase size={14} className="text-blue-700" />
                    <h2
                      id="section-references"
                      className="text-xs sm:text-sm font-bold uppercase tracking-wider text-slate-900"
                    >
                      REFERENCES
                    </h2>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-800">
                    {data.references.map((ref, idx) => (
                      <div key={idx} className="leading-snug">
                        <span className="font-bold text-slate-900 block">{ref.name}</span>
                        <span className="text-slate-700 block">{ref.title}</span>
                        <span className="text-slate-600 block">{ref.institution}</span>
                        {(ref.email || ref.phone) && (
                          <span className="text-slate-500 text-[11px] block mt-0.5">
                            {ref.email} | {ref.phone}
                          </span>
                        )}
                      </div>
                    ))}
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
            Want to collaborate or discuss an opportunity?
          </h3>

          <p
            className={`text-xs sm:text-sm leading-relaxed max-w-xl mx-auto ${
              isDark ? 'text-slate-300' : 'text-slate-600'
            }`}
          >
            Feel free to download the complete resume in Word or PDF format, review my open-source codebases, or connect on LinkedIn.
          </p>

          <div className="pt-2 flex flex-wrap items-center justify-center gap-3">
            <button
              id="resume-bottom-view-btn"
              onClick={handleViewResume}
              aria-label="View Resume"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-xs sm:text-sm bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white shadow-md shadow-blue-600/25 transition-all cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
            >
              <Eye size={15} />
              <span>View Interactive CV</span>
            </button>

            <button
              id="resume-bottom-docx-btn"
              onClick={handleDownloadDocx}
              disabled={isExportingDocx}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-xs sm:text-sm bg-blue-700 hover:bg-blue-600 disabled:opacity-50 text-white shadow-md transition-all cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
            >
              <FileDown size={15} />
              <span>Download .DOCX</span>
            </button>

            <a
              id="resume-bottom-linkedin-btn"
              href={data.linkedin}
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
