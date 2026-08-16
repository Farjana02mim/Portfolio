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
  Layers,
  FileText,
  Info
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
          <div className="bg-white text-slate-900 rounded-2xl p-6 sm:p-10 shadow-lg border border-slate-200 text-left space-y-7 select-text">
            
            {/* Header */}
            <div className="border-b border-slate-200 pb-5 space-y-2">
              <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight font-display uppercase">
                {resumeData.name}
              </h1>
              <p className="text-sm font-semibold text-blue-700">
                {resumeData.title}
              </p>
              <p className="text-xs text-slate-700 leading-relaxed pt-1">
                "{resumeData.summary}"
              </p>

              <div className="pt-2 flex flex-wrap gap-y-1.5 gap-x-4 text-xs font-mono text-slate-600">
                <a href={`mailto:${emailDisplay}`} className="hover:text-blue-700 flex items-center gap-1">
                  <Mail size={12} className="text-blue-600" />
                  <span>{emailDisplay}</span>
                </a>
                <span>•</span>
                <a href={resumeData.github} target="_blank" rel="noopener noreferrer" className="hover:text-blue-700 flex items-center gap-1">
                  <Github size={12} className="text-slate-800" />
                  <span>github.com/{resumeData.githubUsername}</span>
                </a>
                <span>•</span>
                <a href={resumeData.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-blue-700 flex items-center gap-1">
                  <Linkedin size={12} className="text-blue-700" />
                  <span>linkedin.com/in/{resumeData.linkedinUsername}</span>
                </a>
              </div>
            </div>

            {/* Education */}
            <div className="space-y-2">
              <div className="flex items-center gap-2 border-b border-slate-200 pb-1">
                <GraduationCap size={14} className="text-blue-700" />
                <h2 className="text-xs font-bold uppercase tracking-wider text-slate-900 font-display">
                  Education
                </h2>
              </div>
              <div className="space-y-0.5 text-xs sm:text-sm">
                <div className="flex justify-between font-bold text-slate-900">
                  <span>{resumeData.education.degree}</span>
                  <span className="font-mono text-xs text-slate-500 font-medium">{resumeData.education.period}</span>
                </div>
                <p className="text-xs text-slate-600">{resumeData.education.institution}</p>
              </div>
            </div>

            {/* Technical Skills */}
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
                <div className="sm:col-span-2">
                  <span className="font-bold text-slate-900">Tools: </span>
                  <span>{resumeData.skills.tools.join(', ')}</span>
                </div>
              </div>
            </div>

            {/* Other Areas */}
            <div className="space-y-2">
              <div className="flex items-center gap-2 border-b border-slate-200 pb-1">
                <Layers size={14} className="text-blue-700" />
                <h2 className="text-xs font-bold uppercase tracking-wider text-slate-900 font-display">
                  Other Areas
                </h2>
              </div>
              <p className="text-xs text-slate-800">
                {resumeData.skills.otherAreas.join(' • ')}
              </p>
            </div>

            {/* Projects */}
            <div className="space-y-3">
              <div className="flex items-center gap-2 border-b border-slate-200 pb-1">
                <FolderGit2 size={14} className="text-blue-700" />
                <h2 className="text-xs font-bold uppercase tracking-wider text-slate-900 font-display">
                  Projects
                </h2>
              </div>
              <div className="space-y-3">
                {resumeData.projects.map((proj) => (
                  <div key={proj.name} className="text-xs space-y-0.5">
                    <div className="flex justify-between items-center">
                      <div className="flex items-center gap-1.5">
                        <span className="font-bold text-slate-900">{proj.name}</span>
                        {proj.githubUrl && (
                          <a
                            href={proj.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-700 hover:text-blue-900 font-mono text-[10px]"
                          >
                            [GitHub]
                          </a>
                        )}
                      </div>
                      <span className="text-[10px] font-mono text-slate-500">
                        {proj.isComingSoon ? 'Live Demo: Coming Soon' : 'Active'}
                      </span>
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

            {/* Coursework */}
            <div className="space-y-2">
              <div className="flex items-center gap-2 border-b border-slate-200 pb-1">
                <BookOpen size={14} className="text-blue-700" />
                <h2 className="text-xs font-bold uppercase tracking-wider text-slate-900 font-display">
                  Coursework
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

          </div>
        </div>
      </div>
    </div>
  );
}
