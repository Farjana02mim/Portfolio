import React from 'react';
import {
  Mail,
  Phone,
  Linkedin,
  Github,
  MapPin,
  ExternalLink,
  Globe,
  Award,
  CheckCircle2,
  Code2
} from 'lucide-react';
import { ResumeData, ResumeTheme, PageLayoutMode } from '../types';

interface ResumeDocumentProps {
  data: ResumeData;
  theme: ResumeTheme;
  layoutMode: PageLayoutMode;
  onOpenProject?: (projectId: string) => void;
}

export const ResumeDocument: React.FC<ResumeDocumentProps> = ({
  data,
  theme,
  layoutMode,
  onOpenProject
}) => {
  // Theme color accents (strictly subtle & ATS-safe)
  const getThemeStyles = () => {
    switch (theme) {
      case 'navy':
        return {
          primary: 'text-[#0f2d59]',
          border: 'border-[#0f2d59]',
          accentBg: 'bg-[#0f2d59]/5',
          tagBg: 'bg-slate-100 text-slate-800',
          link: 'text-[#0f2d59] hover:underline',
          headerRule: 'border-[#0f2d59]'
        };
      case 'emerald':
        return {
          primary: 'text-[#0e4d38]',
          border: 'border-[#0e4d38]',
          accentBg: 'bg-[#0e4d38]/5',
          tagBg: 'bg-emerald-50 text-emerald-900',
          link: 'text-[#0e4d38] hover:underline',
          headerRule: 'border-[#0e4d38]'
        };
      case 'slate':
        return {
          primary: 'text-[#1e293b]',
          border: 'border-[#1e293b]',
          accentBg: 'bg-slate-100',
          tagBg: 'bg-slate-100 text-slate-800',
          link: 'text-slate-800 hover:underline',
          headerRule: 'border-slate-700'
        };
      case 'monochrome':
        return {
          primary: 'text-black',
          border: 'border-black',
          accentBg: 'bg-neutral-100',
          tagBg: 'bg-neutral-100 text-black',
          link: 'text-black hover:underline',
          headerRule: 'border-black'
        };
      case 'classic':
      default:
        // Reference image classic ATS blue/slate tone
        return {
          primary: 'text-[#111827]',
          border: 'border-[#1f2937]',
          accentBg: 'bg-sky-50/50',
          tagBg: 'bg-sky-50 text-sky-950',
          link: 'text-[#0284c7] hover:underline',
          headerRule: 'border-[#334155]'
        };
    }
  };

  const themeStyles = getThemeStyles();
  const isCompact = layoutMode === 'fit-1page';

  return (
    <div
      id="resume-print-root"
      className={`bg-white text-[#111827] shadow-xl rounded-sm mx-auto transition-all duration-200 border border-slate-200 print:border-none print:shadow-none print:m-0 print:p-0 font-sans ${
        isCompact
          ? 'max-w-[850px] p-6 sm:p-8 text-[12.5px] leading-[1.35]'
          : 'max-w-[880px] p-7 sm:p-10 text-[13px] leading-[1.45]'
      }`}
      style={{
        fontFamily: "'Segoe UI', -apple-system, BlinkMacSystemFont, Roboto, Helvetica, Arial, sans-serif",
      }}
    >
      {/* ============================================================
          HEADER SECTION (Matching reference layout)
          ============================================================ */}
      <header className="border-b-2 border-slate-900 pb-3 mb-3 print:pb-2.5 print:mb-2.5">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <div className="flex-1 min-w-0">
            <h1
              id="resume-name"
              className="text-2xl sm:text-[28px] font-black tracking-tight text-black uppercase mb-0.5 leading-tight"
            >
              {data.name}
            </h1>
            <p className="text-xs sm:text-[13px] font-semibold text-slate-700 tracking-wide mb-2 uppercase">
              {data.subtitle || `${data.education.degree} | ${data.education.institution}`}
            </p>

            {/* Contact links block */}
            <div className="flex flex-wrap items-center gap-x-4 gap-y-1.5 text-xs text-slate-800">
              {data.phone && (
                <div className="inline-flex items-center gap-1.5 whitespace-nowrap">
                  <Phone className="w-3.5 h-3.5 text-sky-600 shrink-0" />
                  <a href={`tel:${data.phone.replace(/\s+/g, '')}`} className="hover:underline text-slate-800 font-medium">
                    {data.phone}
                  </a>
                </div>
              )}

              <div className="inline-flex items-center gap-1.5 whitespace-nowrap">
                <Mail className="w-3.5 h-3.5 text-sky-600 shrink-0" />
                <a href={`mailto:${data.email}`} className="hover:underline text-slate-800 font-medium">
                  {data.email}
                </a>
              </div>

              {data.linkedin && (
                <div className="inline-flex items-center gap-1.5 whitespace-nowrap">
                  <Linkedin className="w-3.5 h-3.5 text-[#0077b5] shrink-0" />
                  <a
                    href={data.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline text-sky-700 font-medium"
                  >
                    linkedin.com/in/{data.linkedinUsername}
                  </a>
                </div>
              )}

              {data.github && (
                <div className="inline-flex items-center gap-1.5 whitespace-nowrap">
                  <Github className="w-3.5 h-3.5 text-slate-900 shrink-0" />
                  <a
                    href={data.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline text-sky-700 font-medium"
                  >
                    github.com/{data.githubUsername}
                  </a>
                </div>
              )}

              {data.location && (
                <div className="inline-flex items-center gap-1.5 whitespace-nowrap">
                  <MapPin className="w-3.5 h-3.5 text-rose-600 shrink-0" />
                  <span className="text-slate-800 font-medium">{data.location}</span>
                </div>
              )}
            </div>
          </div>

          {/* Profile Photo / Avatar in top right (as in reference image) */}
          {data.showPhoto && (
            <div className="shrink-0 self-center sm:self-auto print:block">
              <div className="w-20 h-24 sm:w-22 sm:h-26 rounded-md border-2 border-slate-300 overflow-hidden bg-slate-100 flex items-center justify-center shadow-xs">
                {data.photoUrl ? (
                  <img
                    src={data.photoUrl}
                    alt={data.name}
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                ) : (
                  <div className="text-center p-2 text-slate-400">
                    <div className="w-10 h-10 mx-auto rounded-full bg-slate-200 flex items-center justify-center text-slate-500 font-bold text-sm">
                      {data.name.split(' ').map(n => n[0]).join('')}
                    </div>
                    <span className="text-[10px] mt-1 block uppercase tracking-wider font-semibold text-slate-500">Photo</span>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      </header>

      {/* ============================================================
          SECTION 1: CAREER SUMMARY
          ============================================================ */}
      <section className={`${isCompact ? 'mb-2.5' : 'mb-3.5'} break-inside-avoid`}>
        <div className="border-b border-slate-800 pb-0.5 mb-1.5">
          <h2 className="text-xs sm:text-[13px] font-black uppercase tracking-wider text-black">
            CAREER SUMMARY
          </h2>
        </div>
        <p className="text-slate-800 text-justify font-normal leading-relaxed">
          {data.summary}
        </p>
      </section>

      {/* ============================================================
          SECTION 2: CORE COMPETENCIES / TECHNICAL SKILLS
          ============================================================ */}
      <section className={`${isCompact ? 'mb-2.5' : 'mb-3.5'} break-inside-avoid`}>
        <div className="border-b border-slate-800 pb-0.5 mb-1.5">
          <h2 className="text-xs sm:text-[13px] font-black uppercase tracking-wider text-black">
            CORE COMPETENCIES & TECHNICAL SKILLS
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-x-3 gap-y-1 text-slate-800">
          <div>
            <span className="font-bold text-slate-900 block text-[11.5px] uppercase tracking-wide mb-0.5">
              • Programming Languages
            </span>
            <p className="text-slate-700 pl-2">
              {data.skills.programming.join(', ')}
            </p>
          </div>
          <div>
            <span className="font-bold text-slate-900 block text-[11.5px] uppercase tracking-wide mb-0.5">
              • Web & Backend Stack
            </span>
            <p className="text-slate-700 pl-2">
              {data.skills.frontend.concat(data.skills.backend).slice(0, 8).join(', ')}
            </p>
          </div>
          <div>
            <span className="font-bold text-slate-900 block text-[11.5px] uppercase tracking-wide mb-0.5">
              • ML, Data & Tools
            </span>
            <p className="text-slate-700 pl-2">
              {data.skills.machineLearning.slice(0, 4).concat(data.skills.tools.slice(0, 3)).join(', ')}
            </p>
          </div>
        </div>
      </section>

      {/* ============================================================
          SECTION 3: EDUCATION
          ============================================================ */}
      <section className={`${isCompact ? 'mb-2.5' : 'mb-3.5'} break-inside-avoid`}>
        <div className="border-b border-slate-800 pb-0.5 mb-1.5">
          <h2 className="text-xs sm:text-[13px] font-black uppercase tracking-wider text-black">
            EDUCATION
          </h2>
        </div>
        <div className="space-y-1.5 text-slate-800">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-baseline">
            <div>
              <span className="font-bold text-black text-[13px]">
                {data.education.degree}
              </span>
              <span className="text-slate-700 text-[12px] block sm:inline sm:ml-1 font-medium">
                — {data.education.institution}
              </span>
            </div>
            <span className="text-xs font-semibold text-slate-700 whitespace-nowrap">
              {data.education.period}
            </span>
          </div>
          <div className="flex flex-wrap justify-between text-xs text-slate-700 pl-2 border-l-2 border-slate-300">
            <span>
              <strong>Department:</strong> {data.education.department}
            </span>
            <span className="font-bold text-black">
              CGPA: {data.education.cgpa}
            </span>
          </div>
        </div>
      </section>

      {/* ============================================================
          SECTION 4: ACADEMIC ACHIEVEMENTS & SCHOLARSHIPS
          ============================================================ */}
      {data.academicAchievements && data.academicAchievements.length > 0 && (
        <section className={`${isCompact ? 'mb-2.5' : 'mb-3.5'} break-inside-avoid`}>
          <div className="border-b border-slate-800 pb-0.5 mb-1.5 flex justify-between items-center">
            <h2 className="text-xs sm:text-[13px] font-black uppercase tracking-wider text-black">
              ACADEMIC ACHIEVEMENTS & SCHOLARSHIPS
            </h2>
            <span className="text-[11px] font-medium text-slate-500 print:hidden flex items-center gap-1">
              <Award className="w-3 h-3 text-amber-600" /> Merit Recognized
            </span>
          </div>
          <div className="space-y-1.5">
            {data.academicAchievements.map((item, idx) => (
              <div key={idx} className="text-slate-800">
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-baseline">
                  <div className="font-bold text-slate-900 text-[12.5px]">
                    • {item.title}
                    {item.organization && (
                      <span className="font-normal text-slate-700 text-xs ml-1.5">
                        | {item.organization}
                      </span>
                    )}
                  </div>
                  {item.date && (
                    <span className="text-xs font-semibold text-slate-600 whitespace-nowrap">
                      {item.date}
                    </span>
                  )}
                </div>
                <p className="text-xs text-slate-700 pl-3">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* ============================================================
          SECTION 5: ACADEMIC & SOFTWARE PROJECTS
          ============================================================ */}
      <section className={`${isCompact ? 'mb-2.5' : 'mb-3.5'} break-inside-avoid`}>
        <div className="border-b border-slate-800 pb-0.5 mb-1.5">
          <h2 className="text-xs sm:text-[13px] font-black uppercase tracking-wider text-black">
            ACADEMIC & SOFTWARE PROJECTS
          </h2>
        </div>
        <div className={`${isCompact ? 'space-y-2.5' : 'space-y-3'}`}>
          {data.projects.map((proj, idx) => {
            return (
              <div
                key={proj.id || idx}
                className="text-slate-800 group"
              >
                {/* Project Header Row */}
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-baseline gap-1">
                  <div className="flex-1">
                    <span className="font-bold text-black text-[13px]">
                      {proj.name}
                    </span>
                    <span className="text-xs text-slate-600 font-medium ml-1.5">
                      [{proj.technologies.join(', ')}]
                    </span>
                  </div>

                  {/* Links (Live Demo & Github) */}
                  <div className="flex items-center gap-2.5 text-xs shrink-0 print:text-[11px]">
                    {proj.liveUrl && (
                      <a
                        href={proj.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-sky-700 hover:underline font-semibold"
                        title="Open Live Deployed Project"
                      >
                        <Globe className="w-3 h-3 text-sky-600" />
                        <span>Live Demo</span>
                      </a>
                    )}
                    {proj.githubClientUrl && (
                      <a
                        href={proj.githubClientUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-slate-800 hover:underline font-semibold"
                        title="GitHub Client Repository"
                      >
                        <Github className="w-3 h-3" />
                        <span>Client</span>
                      </a>
                    )}
                    {proj.githubServerUrl && (
                      <a
                        href={proj.githubServerUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-slate-800 hover:underline font-semibold"
                        title="GitHub Server Repository"
                      >
                        <Github className="w-3 h-3" />
                        <span>Server</span>
                      </a>
                    )}
                    {!proj.githubClientUrl && !proj.githubServerUrl && proj.githubUrl && (
                      <a
                        href={proj.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-slate-800 hover:underline font-semibold"
                        title="GitHub Repository"
                      >
                        <Github className="w-3 h-3" />
                        <span>GitHub</span>
                      </a>
                    )}
                  </div>
                </div>

                {/* Bullet Points */}
                <ul className="list-disc list-outside pl-4 text-xs text-slate-700 space-y-0.5 mt-1">
                  {proj.bulletPoints && proj.bulletPoints.length > 0 ? (
                    proj.bulletPoints.map((bullet, bIdx) => (
                      <li key={bIdx} className="leading-snug">
                        {bullet}
                      </li>
                    ))
                  ) : (
                    <li className="leading-snug">{proj.description}</li>
                  )}
                </ul>
              </div>
            );
          })}
        </div>
      </section>

      {/* ============================================================
          SECTION 6: TRAINING & CERTIFICATION
          ============================================================ */}
      <section className={`${isCompact ? 'mb-2.5' : 'mb-3.5'} break-inside-avoid`}>
        <div className="border-b border-slate-800 pb-0.5 mb-1.5">
          <h2 className="text-xs sm:text-[13px] font-black uppercase tracking-wider text-black">
            TRAINING & CERTIFICATION
          </h2>
        </div>
        <div className="space-y-1.5 text-slate-800">
          {data.certifications.map((cert, cIdx) => (
            <div key={cIdx} className="text-xs">
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-baseline">
                <div>
                  <span className="font-bold text-slate-900 text-[12.5px]">
                    • {cert.name}
                  </span>
                  {cert.issuer && (
                    <span className="text-slate-700 font-medium ml-1.5">
                      — {cert.issuer}
                    </span>
                  )}
                </div>
                <div className="flex items-center gap-2">
                  {cert.date && (
                    <span className="font-semibold text-slate-600 text-xs">
                      {cert.date}
                    </span>
                  )}
                  {cert.url && (
                    <a
                      href={cert.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sky-700 hover:underline inline-flex items-center gap-0.5 font-medium print:hidden"
                    >
                      <ExternalLink className="w-2.5 h-2.5" />
                      <span>Verify</span>
                    </a>
                  )}
                </div>
              </div>
              {cert.description && (
                <p className="text-slate-700 pl-3 leading-snug">
                  - {cert.description}
                </p>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* ============================================================
          SECTION 7: EXTRA-CURRICULAR PARTICIPATION & COMPETITIONS
          ============================================================ */}
      {data.extraCurricular && data.extraCurricular.length > 0 && (
        <section className={`${isCompact ? 'mb-2.5' : 'mb-3.5'} break-inside-avoid`}>
          <div className="border-b border-slate-800 pb-0.5 mb-1.5">
            <h2 className="text-xs sm:text-[13px] font-black uppercase tracking-wider text-black">
              EXTRA-CURRICULAR PARTICIPATION & WORKSHOPS
            </h2>
          </div>
          <div className="space-y-1 text-xs text-slate-800">
            {data.extraCurricular.map((item, idx) => (
              <div key={idx} className="flex flex-col sm:flex-row justify-between items-start sm:items-baseline">
                <div className="text-slate-900">
                  <span className="font-bold text-black">
                    • {item.title}
                  </span>
                  {item.organization && (
                    <span className="text-slate-600 ml-1">
                      — {item.organization}
                    </span>
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

      {/* ============================================================
          SECTION 8: RELEVANT COURSEWORK & TOOLS
          ============================================================ */}
      <section className={`${isCompact ? 'mb-2.5' : 'mb-3.5'} break-inside-avoid`}>
        <div className="border-b border-slate-800 pb-0.5 mb-1.5">
          <h2 className="text-xs sm:text-[13px] font-black uppercase tracking-wider text-black">
            RELEVANT COURSEWORK & TECHNICAL DOMAINS
          </h2>
        </div>
        <div className="text-xs text-slate-800 leading-relaxed">
          <p>
            <strong>Core Computing & Systems:</strong> {data.coursework.slice(0, 8).join(' • ')}
          </p>
          <p className="mt-0.5">
            <strong>Advanced Specialized Topics:</strong> {data.coursework.slice(8).concat(data.skills.otherAreas.slice(0, 4)).join(' • ')}
          </p>
        </div>
      </section>

      {/* ============================================================
          SECTION 9: REFERENCES
          ============================================================ */}
      <section className="break-inside-avoid">
        <div className="border-b border-slate-800 pb-0.5 mb-1.5">
          <h2 className="text-xs sm:text-[13px] font-black uppercase tracking-wider text-black">
            REFERENCES
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-800">
          {data.references.map((ref, rIdx) => (
            <div key={rIdx} className="leading-snug">
              <span className="font-bold text-slate-900 block">{ref.name}</span>
              <span className="text-slate-700 block">{ref.title}</span>
              <span className="text-slate-600 block">{ref.institution}</span>
              <span className="text-slate-500 text-[11px] block mt-0.5">
                {ref.email} | {ref.phone}
              </span>
            </div>
          ))}
          <div className="leading-snug sm:border-l sm:border-slate-200 sm:pl-3 flex flex-col justify-center">
            <span className="font-semibold text-slate-700 block">Academic & Professional References</span>
            <span className="text-slate-500 text-[11.5px]">
              Complete contact details and recommendation letters available upon formal request.
            </span>
          </div>
        </div>
      </section>

      {/* Subtle ATS Parser Tag for machine evaluation verification */}
      <div className="mt-4 pt-2 border-t border-slate-200 text-[10px] text-slate-400 flex justify-between items-center print:hidden">
        <span>Farjana Akter Mim — Standard Single/Double Column Machine-Readable ATS Resume</span>
        <span className="font-mono">ATS-Compatible Format v2026</span>
      </div>
    </div>
  );
};
