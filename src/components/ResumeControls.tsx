import React, { useState } from 'react';
import {
  Printer,
  FileText,
  Edit3,
  ShieldCheck,
  Sparkles,
  Camera,
  Layers,
  Palette,
  ExternalLink,
  Github,
  CheckCircle,
  Eye,
  FileDown,
  Download
} from 'lucide-react';
import { ResumeTheme, PageLayoutMode, ResumeData } from '../types';

interface ResumeControlsProps {
  data: ResumeData;
  theme: ResumeTheme;
  setTheme: (t: ResumeTheme) => void;
  layoutMode: PageLayoutMode;
  setLayoutMode: (m: PageLayoutMode) => void;
  onOpenEdit: () => void;
  onOpenAtsScore: () => void;
  onOpenPlainText: () => void;
  onTogglePhoto: () => void;
  onDownloadDocx: () => void;
  isExportingDocx?: boolean;
}

export const ResumeControls: React.FC<ResumeControlsProps> = ({
  data,
  theme,
  setTheme,
  layoutMode,
  setLayoutMode,
  onOpenEdit,
  onOpenAtsScore,
  onOpenPlainText,
  onTogglePhoto,
  onDownloadDocx,
  isExportingDocx = false
}) => {
  const handlePrint = () => {
    window.print();
  };

  return (
    <header className="sticky top-0 z-40 bg-slate-900/95 backdrop-blur-md text-white border-b border-slate-800 shadow-md print:hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-2.5 sm:py-3">
        <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-3">
          {/* Left info badge */}
          <div className="flex items-center justify-between md:justify-start gap-3">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-sky-500/20 border border-sky-400/30 flex items-center justify-center text-sky-400">
                <FileText className="w-4 h-4" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <h1 className="text-sm font-bold text-white tracking-tight">
                    {data.name}
                  </h1>
                  <span className="bg-sky-500/20 text-sky-300 text-[10px] font-bold px-2 py-0.5 rounded-full border border-sky-500/30 uppercase tracking-wider">
                    2026 ATS Standard
                  </span>
                </div>
                <p className="text-[11px] text-slate-400">
                  Targeted for Software Engineering, Full-Stack & ML Roles
                </p>
              </div>
            </div>

            {/* ATS Score quick trigger badge */}
            <button
              onClick={onOpenAtsScore}
              className="group flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg bg-emerald-950/80 border border-emerald-500/40 hover:bg-emerald-900/80 transition-all text-xs text-emerald-300 font-bold"
              title="Click to view full ATS parser score and recommendations"
            >
              <ShieldCheck className="w-4 h-4 text-emerald-400 group-hover:scale-110 transition-transform" />
              <span>98% ATS Score</span>
            </button>
          </div>

          {/* Center & Right Controls */}
          <div className="flex flex-wrap items-center justify-end gap-2 text-xs">
            {/* Layout Density Toggle */}
            <div className="flex items-center bg-slate-800 rounded-lg p-0.5 border border-slate-700">
              <button
                onClick={() => setLayoutMode('fit-1page')}
                className={`px-2.5 py-1 rounded-md text-[11px] font-medium transition-colors ${
                  layoutMode === 'fit-1page'
                    ? 'bg-sky-600 text-white shadow-xs font-semibold'
                    : 'text-slate-400 hover:text-white'
                }`}
                title="Fit into compact 1-page structure"
              >
                1-Page Fit
              </button>
              <button
                onClick={() => setLayoutMode('standard-2page')}
                className={`px-2.5 py-1 rounded-md text-[11px] font-medium transition-colors ${
                  layoutMode === 'standard-2page'
                    ? 'bg-sky-600 text-white shadow-xs font-semibold'
                    : 'text-slate-400 hover:text-white'
                }`}
                title="Spacious standard multi-page structure"
              >
                2-Page Standard
              </button>
            </div>

            {/* Photo Toggle */}
            <button
              onClick={onTogglePhoto}
              className={`inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg border text-xs font-medium transition-colors ${
                data.showPhoto
                  ? 'bg-slate-800 border-sky-500/50 text-sky-300'
                  : 'bg-slate-800/60 border-slate-700 text-slate-400 hover:text-slate-200'
              }`}
              title="Toggle photo container on/off (keep off for strict US ATS compliance)"
            >
              <Camera className="w-3.5 h-3.5" />
              <span>{data.showPhoto ? 'Photo On' : 'Photo Off'}</span>
            </button>

            {/* Plain Text Button */}
            <button
              onClick={onOpenPlainText}
              className="inline-flex items-center gap-1.5 px-2.5 py-1.5 bg-slate-800 hover:bg-slate-700 border border-slate-700 rounded-lg text-slate-200 font-medium transition-colors"
              title="Copy or export plain text version"
            >
              <FileText className="w-3.5 h-3.5 text-slate-400" />
              <span className="hidden sm:inline">Plain Text</span>
            </button>

            {/* Edit Resume Button */}
            <button
              onClick={onOpenEdit}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-slate-800 hover:bg-slate-700 border border-slate-700 rounded-lg text-slate-200 font-medium transition-colors"
              title="Edit fields, projects, skills"
            >
              <Edit3 className="w-3.5 h-3.5 text-amber-400" />
              <span>Edit</span>
            </button>

            {/* Download DOCX (Word) Button */}
            <button
              onClick={onDownloadDocx}
              disabled={isExportingDocx}
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 bg-blue-700 hover:bg-blue-600 disabled:opacity-50 text-white rounded-lg font-bold shadow-md shadow-blue-900/30 transition-all hover:scale-[1.02] active:scale-[0.98]"
              title="Download Microsoft Word .DOCX Resume"
            >
              <FileDown className="w-4 h-4 text-blue-200" />
              <span>{isExportingDocx ? 'Exporting...' : 'Download .DOCX'}</span>
            </button>

            {/* Print / Download PDF Main Button */}
            <button
              onClick={handlePrint}
              className="inline-flex items-center gap-2 px-4 py-1.5 bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-400 hover:to-blue-500 text-white rounded-lg font-bold shadow-md shadow-sky-500/20 transition-all hover:scale-[1.02] active:scale-[0.98]"
              title="Download or Print clean PDF"
            >
              <Printer className="w-4 h-4" />
              <span>Download / Print PDF</span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};
