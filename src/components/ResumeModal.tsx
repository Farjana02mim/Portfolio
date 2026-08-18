import React, { useState } from 'react';
import {
  X,
  Download,
  Printer,
  ExternalLink,
  Mail,
  Phone,
  MapPin,
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
  Sparkles,
  FileText,
  FileDown,
  Info,
  CalendarDays,
  Globe
} from 'lucide-react';
import { ResumeData } from '../types';
import { resumeData as defaultResumeData } from '../data/resumeData';
import { exportResumeToDocx } from '../utils/docxExport';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
  isDark?: boolean;
  data?: ResumeData;
}

export function ResumeModal({
  isOpen,
  onClose,
  isDark = true,
  data = defaultResumeData
}: ResumeModalProps) {
  const [downloadNotice, setDownloadNotice] = useState<string | null>(null);
  const [isExportingDocx, setIsExportingDocx] = useState(false);

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
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
      setDownloadNotice('Opening print dialog to Save as PDF...');
      setTimeout(() => setDownloadNotice(null), 3000);
      window.print();
    }
  };

  const handleDownloadDocx = async () => {
    try {
      setIsExportingDocx(true);
      await exportResumeToDocx(data);
    } catch (err) {
      console.error('Failed to export DOCX:', err);
      setDownloadNotice('Unable to export DOCX. Please try again or use PDF download.');
      setTimeout(() => setDownloadNotice(null), 4000);
    } finally {
      setIsExportingDocx(false);
    }
  };

  const emailDisplay = data.email || 'farjanaaktermim330@gmail.com';

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto print:p-0 print:static">
      {/* Backdrop */}
      <div
        onClick={onClose}
        className="fixed inset-0 bg-black/80 backdrop-blur-sm transition-opacity print:hidden"
        aria-hidden="true"
      />

      {/* Modal Container */}
      <div
        className={`relative w-full max-w-4xl rounded-3xl border shadow-2xl overflow-hidden z-10 my-6 transition-all print:border-none print:shadow-none print:m-0 print:max-w-none print:rounded-none ${
          isDark
            ? 'bg-slate-950 border-slate-800 text-slate-100'
            : 'bg-slate-100 border-slate-300 text-slate-900'
        }`}
        role="dialog"
        aria-modal="true"
        aria-label="Interactive Resume Preview"
      >
        {/* Header Toolbar */}
        <div
          className={`flex items-center justify-between p-4 px-5 border-b print:hidden ${
            isDark ? 'bg-slate-900/90 border-slate-800' : 'bg-white border-slate-200 shadow-2xs'
          }`}
        >
          <div className="flex items-center gap-2.5">
            <div className="p-2 rounded-xl bg-blue-500/10 text-blue-400 border border-blue-500/20">
              <FileText size={18} />
            </div>
            <div>
              <span className="text-sm font-bold block">{data.name}</span>
              <span
                className={`text-[11px] ${
                  isDark ? 'text-slate-400' : 'text-slate-500'
                }`}
              >
                {data.title} • ATS-Verified Standard Format
              </span>
            </div>
          </div>

          <div className="flex items-center gap-2 flex-wrap">
            {/* Download DOCX (Word) */}
            <button
              onClick={handleDownloadDocx}
              disabled={isExportingDocx}
              className="p-2 px-3 rounded-xl text-xs font-semibold flex items-center gap-1.5 transition-all cursor-pointer bg-blue-700 hover:bg-blue-600 disabled:opacity-50 text-white shadow-xs focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
              title="Download Microsoft Word .DOCX Resume"
            >
              <FileDown size={14} className="text-blue-200" />
              <span>{isExportingDocx ? 'Generating...' : 'Word (.DOCX)'}</span>
            </button>

            {/* Download PDF */}
            <button
              onClick={handleDownloadPdf}
              className="p-2 px-3 rounded-xl text-xs font-semibold flex items-center gap-1.5 transition-all cursor-pointer bg-sky-600 hover:bg-sky-500 text-white shadow-xs focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500"
              title="Download Resume PDF"
              aria-label="Download Resume PDF"
            >
              <Download size={14} className="text-white" />
              <span className="hidden sm:inline">PDF</span>
            </button>

            {/* Print */}
            <button
              onClick={handlePrint}
              className={`p-2 px-3 rounded-xl border text-xs flex items-center gap-1.5 transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 ${
                isDark
                  ? 'border-slate-800 text-slate-300 hover:bg-slate-800 hover:text-white'
                  : 'border-slate-300 text-slate-700 hover:bg-slate-100'
              }`}
              title="Print Resume"
              aria-label="Print Resume"
            >
              <Printer size={14} />
              <span className="hidden sm:inline">Print</span>
            </button>

            {/* Close */}
            <button
              onClick={onClose}
              className={`p-2 rounded-xl border transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 ${
                isDark
                  ? 'border-slate-800 text-slate-400 hover:text-white hover:bg-slate-800'
                  : 'border-slate-300 text-slate-600 hover:text-slate-900 hover:bg-slate-100'
              }`}
              aria-label="Close modal"
            >
              <X size={16} />
            </button>
          </div>
        </div>

        {/* Notice alert if triggered */}
        {downloadNotice && (
          <div className="p-3 bg-amber-500/10 border-b border-amber-500/30 text-amber-300 text-xs flex items-center justify-center gap-2 print:hidden">
            <Info size={14} className="text-amber-400 shrink-0" />
            <span>{downloadNotice}</span>
          </div>
        )}

        {/* Modal Scrollable Document Sheet */}
        <div className="p-3 sm:p-6 lg:p-8 max-h-[82vh] overflow-y-auto print:max-h-none print:p-0 print:overflow-visible">
          <article className="bg-white text-slate-900 rounded-2xl p-6 sm:p-10 shadow-lg border border-slate-200 text-left space-y-6 select-text print:shadow-none print:border-none print:p-0 print:rounded-none">
            {/* Header */}
            <div className="border-b-2 border-slate-900 pb-4 space-y-1.5">
              <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight uppercase">
                {data.name}
              </h1>
              <p className="text-xs sm:text-sm font-bold text-slate-700 uppercase tracking-wide">
                {data.subtitle || `${data.education.degree} | ${data.education.institution}`}
              </p>

              <div className="pt-2 flex flex-wrap items-center gap-y-1.5 gap-x-4 text-xs text-slate-700 font-mono">
                {data.phone && (
                  <span className="flex items-center gap-1">
                    <Phone size={12} className="text-sky-600" />
                    <span>{data.phone}</span>
                  </span>
                )}
                <a
                  href={`mailto:${emailDisplay}`}
                  className="hover:text-blue-700 flex items-center gap-1 transition-colors"
                >
                  <Mail size={12} className="text-blue-600" />
                  <span>{emailDisplay}</span>
                </a>
                <a
                  href={data.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-blue-700 flex items-center gap-1 transition-colors"
                >
                  <Linkedin size={12} className="text-[#0077b5]" />
                  <span>linkedin.com/in/{data.linkedinUsername}</span>
                </a>
                <a
                  href={data.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-blue-700 flex items-center gap-1 transition-colors"
                >
                  <Github size={12} className="text-slate-900" />
                  <span>github.com/{data.githubUsername}</span>
                </a>
                {data.location && (
                  <span className="flex items-center gap-1">
                    <MapPin size={12} className="text-rose-600" />
                    <span>{data.location}</span>
                  </span>
                )}
              </div>
            </div>

            {/* 1. Career Summary */}
            <div className="space-y-1.5">
              <div className="flex items-center gap-2 border-b border-slate-800 pb-1">
                <Sparkles size={14} className="text-blue-700" />
                <h2 className="text-xs font-bold uppercase tracking-wider text-slate-900">
                  CAREER SUMMARY
                </h2>
              </div>
              <p className="text-xs sm:text-[13px] text-slate-800 leading-relaxed text-justify">
                {data.summary}
              </p>
            </div>

            {/* 2. Core Competencies & Technical Skills */}
            <div className="space-y-1.5">
              <div className="flex items-center gap-2 border-b border-slate-800 pb-1">
                <Code2 size={14} className="text-blue-700" />
                <h2 className="text-xs font-bold uppercase tracking-wider text-slate-900">
                  CORE COMPETENCIES & TECHNICAL SKILLS
                </h2>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-1.5 text-xs text-slate-800">
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
            </div>

            {/* 3. Education */}
            <div className="space-y-1.5">
              <div className="flex items-center gap-2 border-b border-slate-800 pb-1">
                <GraduationCap size={14} className="text-blue-700" />
                <h2 className="text-xs font-bold uppercase tracking-wider text-slate-900">
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
            </div>

            {/* 4. Academic Achievements & Scholarships */}
            {data.academicAchievements && data.academicAchievements.length > 0 && (
              <div className="space-y-1.5">
                <div className="flex items-center gap-2 border-b border-slate-800 pb-1">
                  <Trophy size={14} className="text-amber-600" />
                  <h2 className="text-xs font-bold uppercase tracking-wider text-slate-900">
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
              </div>
            )}

            {/* 5. Academic & Software Projects */}
            <div className="space-y-2">
              <div className="flex items-center gap-2 border-b border-slate-800 pb-1">
                <FolderGit2 size={14} className="text-blue-700" />
                <h2 className="text-xs font-bold uppercase tracking-wider text-slate-900">
                  ACADEMIC & SOFTWARE PROJECTS
                </h2>
              </div>
              <div className="space-y-3 divide-y divide-slate-100">
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
            </div>

            {/* 6. Training & Certifications */}
            {data.certifications && data.certifications.length > 0 && (
              <div className="space-y-1.5">
                <div className="flex items-center gap-2 border-b border-slate-800 pb-1">
                  <Award size={14} className="text-blue-700" />
                  <h2 className="text-xs font-bold uppercase tracking-wider text-slate-900">
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
                              className="text-sky-700 hover:underline inline-flex items-center gap-0.5 font-medium print:hidden"
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
              </div>
            )}

            {/* 7. Extra-Curricular & Competitions */}
            {data.extraCurricular && data.extraCurricular.length > 0 && (
              <div className="space-y-1.5">
                <div className="flex items-center gap-2 border-b border-slate-800 pb-1">
                  <Medal size={14} className="text-blue-700" />
                  <h2 className="text-xs font-bold uppercase tracking-wider text-slate-900">
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
              </div>
            )}

            {/* 8. Relevant Coursework */}
            <div className="space-y-1.5">
              <div className="flex items-center gap-2 border-b border-slate-800 pb-1">
                <BookOpen size={14} className="text-blue-700" />
                <h2 className="text-xs font-bold uppercase tracking-wider text-slate-900">
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
            </div>

            {/* 9. References */}
            {data.references && data.references.length > 0 && (
              <div className="space-y-1.5">
                <div className="flex items-center gap-2 border-b border-slate-800 pb-1">
                  <Briefcase size={14} className="text-blue-700" />
                  <h2 className="text-xs font-bold uppercase tracking-wider text-slate-900">
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
              </div>
            )}
          </article>
        </div>
      </div>
    </div>
  );
}
