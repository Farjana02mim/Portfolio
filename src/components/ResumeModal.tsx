import { useState } from 'react';
import { 
  X, 
  Download, 
  Printer, 
  ExternalLink, 
  Mail, 
  Github, 
  Linkedin, 
  GraduationCap,
  Code2,
  FolderGit2,
  BookOpen,
  Brain,
  Briefcase,
  Award,
  Trophy,
  Medal,
  Sparkle,
  FileText,
  Info,
  CalendarDays
} from 'lucide-react';
import { resumeData } from '../data/resumeData';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
  isDark: boolean;
}

export function ResumeModal({ isOpen, onClose, isDark }: ResumeModalProps) {
  const [downloadNotice, setDownloadNotice] = useState<string | null>(null);

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  const handleDownload = () => {
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
      setDownloadNotice('Resume PDF is coming soon! You can print or view the full CV preview below.');
      setTimeout(() => setDownloadNotice(null), 4000);
    }
  };

  const emailDisplay = resumeData.email || '[Your Email]';

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
      {/* Backdrop */}
      <div
        onClick={onClose}
        className="fixed inset-0 bg-black/80 backdrop-blur-sm transition-opacity"
        aria-hidden="true"
      />

      {/* Modal Container */}
      <div
        className={`relative w-full max-w-3xl rounded-3xl border shadow-2xl overflow-hidden z-10 my-6 transition-all ${
          isDark ? 'bg-slate-950 border-slate-800 text-slate-100' : 'bg-slate-100 border-slate-300 text-slate-900'
        }`}
        role="dialog"
        aria-modal="true"
        aria-label="Interactive Resume Preview"
      >
        {/* Header Toolbar */}
        <div className={`flex items-center justify-between p-4 px-5 border-b ${
          isDark ? 'bg-slate-900/90 border-slate-800' : 'bg-white border-slate-200 shadow-2xs'
        }`}>
          <div className="flex items-center gap-2.5">
            <div className="p-2 rounded-xl bg-blue-500/10 text-blue-400 border border-blue-500/20">
              <FileText size={16} />
            </div>
            <div>
              <span className="text-sm font-bold font-display block">Resume Preview</span>
              <span className={`text-[11px] font-mono ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
                {resumeData.name} • {resumeData.title}
              </span>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleDownload}
              className={`p-2 px-3 rounded-xl text-xs font-semibold flex items-center gap-1.5 transition-all cursor-pointer shadow-xs focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 ${
                resumeData.hasPdf
                  ? 'bg-blue-600 hover:bg-blue-500 text-white'
                  : isDark
                    ? 'border border-slate-800 bg-slate-900 text-slate-300 hover:text-white'
                    : 'border border-slate-200 bg-slate-50 text-slate-700 hover:bg-slate-100'
              }`}
              title="Download Resume PDF"
              aria-label="Download Resume PDF"
            >
              <Download size={14} className={resumeData.hasPdf ? 'text-white' : 'text-blue-400'} />
              <span className="hidden sm:inline">
                {resumeData.hasPdf ? 'Download PDF' : 'Download'}
              </span>
            </button>

            <button
              onClick={handlePrint}
              className={`p-2 px-3 rounded-xl border text-xs flex items-center gap-1.5 transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 ${
                isDark ? 'border-slate-800 text-slate-300 hover:bg-slate-800 hover:text-white' : 'border-slate-300 text-slate-700 hover:bg-slate-100'
              }`}
              title="Print Resume"
              aria-label="Print Resume"
            >
              <Printer size={14} />
              <span className="hidden sm:inline">Print</span>
            </button>

            <button
              onClick={onClose}
              className={`p-2 rounded-xl border transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 ${
                isDark ? 'border-slate-800 text-slate-400 hover:text-white hover:bg-slate-800' : 'border-slate-300 text-slate-600 hover:text-slate-900 hover:bg-slate-100'
              }`}
              aria-label="Close modal"
            >
              <X size={16} />
            </button>
          </div>
        </div>

        {/* Notice alert if triggered */}
        {downloadNotice && (
          <div className="p-3 bg-amber-500/10 border-b border-amber-500/30 text-amber-300 text-xs flex items-center justify-center gap-2">
            <Info size={14} className="text-amber-400" />
            <span>{downloadNotice}</span>
          </div>
        )}

        {/* Modal Scrollable Document Sheet */}
        <div className="p-4 sm:p-6 lg:p-8 max-h-[75vh] overflow-y-auto">
          <div className="bg-white text-slate-900 rounded-2xl p-6 sm:p-10 shadow-lg border border-slate-200 text-left space-y-6 select-text">
            
            {/* Header */}
            <div className="border-b border-slate-200 pb-5 space-y-2">
              <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight font-display uppercase">
                {resumeData.name}
              </h1>
              <p className="text-sm font-semibold text-blue-700">
                {resumeData.title}
              </p>

              <div className="pt-2 flex flex-wrap gap-y-1.5 gap-x-4 text-xs font-mono text-slate-600">
                <a href={`mailto:${emailDisplay}`} className="hover:text-blue-700 flex items-center gap-1">
                  <Mail size={12} className="text-blue-600" />
                  <span>Email: {emailDisplay}</span>
                </a>
                <span>•</span>
                <a href={resumeData.github} target="_blank" rel="noopener noreferrer" className="hover:text-blue-700 flex items-center gap-1">
                  <Github size={12} className="text-slate-800" />
                  <span>GitHub: github.com/{resumeData.githubUsername}</span>
                </a>
                <span>•</span>
                <a href={resumeData.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-blue-700 flex items-center gap-1">
                  <Linkedin size={12} className="text-blue-700" />
                  <span>LinkedIn: linkedin.com/in/{resumeData.linkedinUsername}</span>
                </a>
              </div>
            </div>

            {/* 1. Academic Profile */}
            <div className="space-y-2">
              <div className="flex items-center gap-2 border-b border-slate-200 pb-1">
                <Sparkle size={14} className="text-blue-700" />
                <h2 className="text-xs font-bold uppercase tracking-wider text-slate-900 font-display">
                  Academic Profile
                </h2>
              </div>
              <div className="p-3 rounded-xl bg-slate-50 border border-slate-200/80">
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                  {resumeData.summary}
                </p>
              </div>
            </div>

            {/* 2. Education */}
            <div className="space-y-2">
              <div className="flex items-center gap-2 border-b border-slate-200 pb-1">
                <GraduationCap size={14} className="text-blue-700" />
                <h2 className="text-xs font-bold uppercase tracking-wider text-slate-900 font-display">
                  Education
                </h2>
              </div>
              <div className="p-3.5 rounded-xl bg-slate-50/70 border border-slate-200/80 space-y-1 text-xs sm:text-sm">
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 font-bold text-slate-900">
                  <span>{resumeData.education.degree}</span>
                  <span className="font-mono text-xs text-slate-600 font-medium">Duration: {resumeData.education.period}</span>
                </div>
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 text-slate-700">
                  <span className="text-xs font-medium">University: {resumeData.education.institution}</span>
                  <span className="font-bold text-blue-900 bg-blue-100/80 px-2 py-0.5 rounded border border-blue-200 text-xs font-mono">
                    CGPA: {resumeData.education.cgpa}
                  </span>
                </div>
              </div>
            </div>

            {/* 3. Academic Achievements */}
            <div className="space-y-2">
              <div className="flex items-center gap-2 border-b border-slate-200 pb-1">
                <Trophy size={14} className="text-blue-700" />
                <h2 className="text-xs font-bold uppercase tracking-wider text-slate-900 font-display">
                  Academic Achievements
                </h2>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {resumeData.academicAchievements.map((item) => (
                  <div key={item.year} className="p-3 rounded-xl bg-amber-50/50 border border-amber-200/80 space-y-1 text-xs">
                    <div className="flex items-center justify-between gap-1 font-display">
                      <div className="flex items-center gap-1.5 font-bold text-slate-900">
                        <Medal size={13} className="text-amber-600 shrink-0" />
                        <span>{item.year}</span>
                      </div>
                      <span className="text-[10px] font-mono font-semibold text-amber-900 bg-amber-100/80 px-2 py-0.5 rounded border border-amber-200">
                        {item.position}
                      </span>
                    </div>
                    <p className="text-xs font-medium text-slate-800">
                      {item.award}
                    </p>
                    <p className="text-[11px] text-slate-600 leading-relaxed">
                      "{item.description}"
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* 4. Technical Skills */}
            <div className="space-y-2">
              <div className="flex items-center gap-2 border-b border-slate-200 pb-1">
                <Code2 size={14} className="text-blue-700" />
                <h2 className="text-xs font-bold uppercase tracking-wider text-slate-900 font-display">
                  Technical Skills
                </h2>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-2 text-xs text-slate-800">
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
            </div>

            {/* 5. Projects */}
            <div className="space-y-3">
              <div className="flex items-center gap-2 border-b border-slate-200 pb-1">
                <FolderGit2 size={14} className="text-blue-700" />
                <h2 className="text-xs font-bold uppercase tracking-wider text-slate-900 font-display">
                  Projects
                </h2>
              </div>
              <div className="space-y-3 divide-y divide-slate-100">
                {resumeData.projects.map((proj, idx) => (
                  <div key={`${proj.name}-${idx}`} className={`text-xs space-y-1 ${idx !== 0 ? 'pt-2.5' : ''}`}>
                    <div className="flex justify-between items-center flex-wrap gap-1">
                      <div className="flex items-center gap-2">
                        <span className="font-bold text-slate-900">{proj.name}</span>
                        {proj.githubClientUrl && proj.githubServerUrl ? (
                          <div className="inline-flex items-center gap-1.5">
                            <a
                              href={proj.githubClientUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-blue-700 hover:text-blue-900 font-mono text-[10px]"
                            >
                              [Frontend Repo]
                            </a>
                            <a
                              href={proj.githubServerUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-blue-700 hover:text-blue-900 font-mono text-[10px]"
                            >
                              [Backend Repo]
                            </a>
                          </div>
                        ) : proj.githubUrl ? (
                          <a
                            href={proj.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-700 hover:text-blue-900 font-mono text-[10px]"
                          >
                            [GitHub Repo]
                          </a>
                        ) : (
                          <span className="text-slate-500 font-mono text-[10px]">
                            [Repository Coming Soon]
                          </span>
                        )}
                      </div>
                      {/* Only render Live Demo link when a liveUrl actually exists — nothing shown otherwise */}
                      {proj.liveUrl && (
                        <span className="text-[10px] font-mono text-slate-500">
                          <a
                            href={proj.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-blue-700 flex items-center gap-1 text-green-500"
                          >
                            <ExternalLink size={10} className="text-green-500" />
                            Live Demo
                          </a>
                        </span>
                      )}
                    </div>
                    <p className="text-slate-600">{proj.description}</p>
                    <p className="text-[11px] font-mono text-slate-500">
                      <span className="font-semibold text-slate-700">Technologies: </span>
                      {proj.technologies.join(', ')}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* 6. Relevant Coursework */}
            <div className="space-y-2">
              <div className="flex items-center gap-2 border-b border-slate-200 pb-1">
                <BookOpen size={14} className="text-blue-700" />
                <h2 className="text-xs font-bold uppercase tracking-wider text-slate-900 font-display">
                  Relevant Coursework
                </h2>
              </div>
              <div className="flex flex-wrap gap-1.5">
                {resumeData.coursework.map((course) => (
                  <span
                    key={course}
                    className="px-2 py-0.5 rounded text-[11px] font-medium bg-slate-100 text-slate-700 border border-slate-200"
                  >
                    {course}
                  </span>
                ))}
              </div>
            </div>

            {/* 7. Certifications (Only rendered if certifications exist) */}
            {resumeData.certifications && resumeData.certifications.length > 0 && (
              <div className="space-y-2">
                <div className="flex items-center gap-2 border-b border-slate-200 pb-1">
                  <Award size={14} className="text-blue-700" />
                  <h2 className="text-xs font-bold uppercase tracking-wider text-slate-900 font-display">
                    Certifications
                  </h2>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {resumeData.certifications.map((cert, idx) => (
                    <div
                      key={`${cert.name}-${idx}`}
                      className="p-3 rounded-xl bg-emerald-50/50 border border-emerald-200/80 space-y-1 text-xs"
                    >
                      <div className="flex items-start justify-between gap-2">
                        <span className="font-bold text-slate-900 leading-snug">{cert.name}</span>
                        {cert.url && (
                          <a
                            href={cert.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="shrink-0 text-emerald-700 hover:text-emerald-900"
                            title="View Certificate"
                            aria-label={`View certificate: ${cert.name}`}
                          >
                            <ExternalLink size={12} />
                          </a>
                        )}
                      </div>

                      <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-[11px] text-slate-600">
                        {cert.issuer && (
                          <span className="font-mono font-medium text-emerald-900 bg-emerald-100/80 px-1.5 py-0.5 rounded border border-emerald-200">
                            {cert.issuer}
                          </span>
                        )}
                        {cert.date && (
                          <span className="flex items-center gap-1 text-slate-500">
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
                          className="inline-flex items-center gap-1 text-[10px] font-mono text-blue-700 hover:text-blue-900 pt-0.5"
                        >
                          <ExternalLink size={10} />
                          Verify Certificate
                        </a>
                      )}
                    </div>
                  ))}
                </div>
                {resumeData.certificationsNote && (
                  <p className="text-[11px] text-slate-500 italic pt-0.5">
                    {resumeData.certificationsNote}
                  </p>
                )}
              </div>
            )}

            {/* 8. Currently Learning */}
            <div className="space-y-2">
              <div className="flex items-center gap-2 border-b border-slate-200 pb-1">
                <Brain size={14} className="text-blue-700" />
                <h2 className="text-xs font-bold uppercase tracking-wider text-slate-900 font-display">
                  Currently Learning
                </h2>
              </div>
              <div className="flex flex-wrap gap-1.5">
                {resumeData.currentlyLearning.map((item) => (
                  <span
                    key={item}
                    className="px-2.5 py-1 rounded text-[11px] font-medium bg-blue-50 text-blue-800 border border-blue-200 flex items-center gap-1"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse"></span>
                    <span>{item}</span>
                  </span>
                ))}
              </div>
            </div>

            {/* 9. Experience Note (fallback for students with no formal work experience) */}
            {resumeData.experienceNote && (
              <div className="space-y-2">
                <div className="flex items-center gap-2 border-b border-slate-200 pb-1">
                  <Briefcase size={14} className="text-blue-700" />
                  <h2 className="text-xs font-bold uppercase tracking-wider text-slate-900 font-display">
                    Experience
                  </h2>
                </div>
                <div className="p-3 rounded-xl bg-slate-50 border border-slate-200/80">
                  <p className="text-xs text-slate-600 italic leading-relaxed">
                    {resumeData.experienceNote}
                  </p>
                </div>
              </div>
            )}

          </div>
        </div>
      </div>
    </div>
  );
}
