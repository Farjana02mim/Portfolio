import React, { useState } from 'react';
import { Copy, Check, X, FileText, Download } from 'lucide-react';
import { ResumeData } from '../types';

interface PlainTextModalProps {
  isOpen: boolean;
  onClose: () => void;
  data: ResumeData;
}

export const PlainTextModal: React.FC<PlainTextModalProps> = ({
  isOpen,
  onClose,
  data
}) => {
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  // Generate plain text formatted ATS string
  const generatePlainText = (): string => {
    const lines: string[] = [];

    lines.push(data.name.toUpperCase());
    lines.push(data.subtitle || `${data.education.degree} | ${data.education.institution}`);
    lines.push(`Email: ${data.email} | Phone: ${data.phone} | Location: ${data.location}`);
    lines.push(`LinkedIn: ${data.linkedin} | GitHub: ${data.github}`);
    lines.push('------------------------------------------------------------');
    lines.push('');

    lines.push('CAREER SUMMARY');
    lines.push('==============');
    lines.push(data.summary);
    lines.push('');

    lines.push('CORE COMPETENCIES & TECHNICAL SKILLS');
    lines.push('====================================');
    lines.push(`* Programming Languages: ${data.skills.programming.join(', ')}`);
    lines.push(`* Frontend Development: ${data.skills.frontend.join(', ')}`);
    lines.push(`* Backend Development: ${data.skills.backend.join(', ')}`);
    lines.push(`* Machine Learning & Data: ${data.skills.machineLearning.join(', ')}`);
    lines.push(`* Tools & Platforms: ${data.skills.tools.join(', ')}`);
    lines.push(`* Specialized Computing Areas: ${data.skills.otherAreas.join(', ')}`);
    lines.push('');

    lines.push('EDUCATION');
    lines.push('=========');
    lines.push(`${data.education.degree}`);
    lines.push(`${data.education.institution} (${data.education.period})`);
    lines.push(`Department: ${data.education.department} | CGPA: ${data.education.cgpa}`);
    lines.push('');

    if (data.academicAchievements && data.academicAchievements.length > 0) {
      lines.push('ACADEMIC ACHIEVEMENTS & SCHOLARSHIPS');
      lines.push('====================================');
      data.academicAchievements.forEach(ach => {
        lines.push(`* ${ach.title} (${ach.date || ach.year || ''}) - ${ach.organization || data.education.institution}`);
        lines.push(`  ${ach.description}`);
      });
      lines.push('');
    }

    lines.push('ACADEMIC & SOFTWARE PROJECTS');
    lines.push('============================');
    data.projects.forEach(proj => {
      lines.push(`* ${proj.name}`);
      lines.push(`  Technologies: ${proj.technologies.join(', ')}`);
      if (proj.liveUrl) lines.push(`  Live Demo: ${proj.liveUrl}`);
      if (proj.githubClientUrl) lines.push(`  GitHub Client: ${proj.githubClientUrl}`);
      if (proj.githubServerUrl) lines.push(`  GitHub Server: ${proj.githubServerUrl}`);
      if (!proj.githubClientUrl && !proj.githubServerUrl && proj.githubUrl) lines.push(`  GitHub Repo: ${proj.githubUrl}`);
      if (proj.bulletPoints && proj.bulletPoints.length > 0) {
        proj.bulletPoints.forEach(bp => lines.push(`  - ${bp}`));
      } else {
        lines.push(`  - ${proj.description}`);
      }
      lines.push('');
    });

    lines.push('TRAINING & CERTIFICATION');
    lines.push('========================');
    data.certifications.forEach(cert => {
      lines.push(`* ${cert.name} - ${cert.issuer || ''} (${cert.date || ''})`);
      if (cert.description) lines.push(`  ${cert.description}`);
      if (cert.url) lines.push(`  Credential: ${cert.url}`);
    });
    lines.push('');

    if (data.extraCurricular && data.extraCurricular.length > 0) {
      lines.push('EXTRA-CURRICULAR PARTICIPATION & COMPETITIONS');
      lines.push('=============================================');
      data.extraCurricular.forEach(item => {
        lines.push(`* ${item.title} - ${item.organization || ''} (${item.date || ''})`);
        lines.push(`  ${item.description}`);
      });
      lines.push('');
    }

    lines.push('RELEVANT COURSEWORK');
    lines.push('===================');
    lines.push(data.coursework.join(', '));
    lines.push('');

    lines.push('REFERENCES');
    lines.push('==========');
    data.references.forEach(ref => {
      lines.push(`${ref.name} - ${ref.title}`);
      lines.push(`${ref.institution} | ${ref.email || ''}`);
    });

    return lines.join('\n');
  };

  const plainText = generatePlainText();

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(plainText);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy', err);
    }
  };

  const handleDownloadTxt = () => {
    const blob = new Blob([plainText], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `Farjana_Akter_Mim_Resume_ATS_PlainText.txt`;
    link.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="fixed inset-0 z-50 bg-slate-900/70 backdrop-blur-xs flex items-center justify-center p-4 overflow-y-auto animate-fadeIn">
      <div className="bg-white rounded-xl shadow-2xl max-w-3xl w-full max-h-[90vh] flex flex-col overflow-hidden border border-slate-200">
        {/* Header */}
        <div className="bg-slate-900 text-white p-4 sm:p-5 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <FileText className="w-5 h-5 text-sky-400" />
            <div>
              <h3 className="font-bold text-base text-white">ATS Plain Text Format</h3>
              <p className="text-xs text-slate-300">
                100% clean ASCII text for pasting directly into job application text fields
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content area */}
        <div className="p-4 sm:p-6 overflow-y-auto flex-1 bg-slate-50">
          <div className="flex justify-between items-center mb-2">
            <span className="text-xs font-semibold text-slate-600 font-mono">
              FARJANA_AKTER_MIM_RESUME.TXT
            </span>
            <div className="flex items-center gap-2">
              <button
                onClick={handleDownloadTxt}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-white border border-slate-300 rounded-md text-xs font-medium text-slate-700 hover:bg-slate-100 transition-colors"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Save .txt</span>
              </button>
              <button
                onClick={handleCopy}
                className={`inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-md text-xs font-semibold transition-all ${
                  copied
                    ? 'bg-emerald-600 text-white'
                    : 'bg-sky-600 hover:bg-sky-700 text-white'
                }`}
              >
                {copied ? (
                  <>
                    <Check className="w-3.5 h-3.5" />
                    <span>Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" />
                    <span>Copy Text</span>
                  </>
                )}
              </button>
            </div>
          </div>

          <pre className="p-4 bg-white rounded-lg border border-slate-200 text-slate-800 font-mono text-xs leading-relaxed overflow-x-auto whitespace-pre-wrap select-all">
            {plainText}
          </pre>
        </div>

        {/* Footer */}
        <div className="p-4 bg-white border-t border-slate-200 flex justify-between items-center text-xs text-slate-500">
          <span>Formatted according to strict ATS tokenization rules.</span>
          <button
            onClick={onClose}
            className="px-4 py-2 bg-slate-900 text-white rounded-lg text-xs font-semibold hover:bg-slate-800 transition-colors"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};
