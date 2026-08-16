import React from 'react';
import { 
  Package, 
  Cpu, 
  Table, 
  GraduationCap, 
  Grid3X3, 
  CloudRain, 
  Layers, 
  Code2, 
  Boxes, 
  Terminal,
  Activity,
  GitBranch,
  Database,
  Server
} from 'lucide-react';

interface ProjectThumbnailProps {
  projectId: string;
  category: string;
  isDark: boolean;
  featured?: boolean;
}

export function ProjectThumbnail({ projectId, category, isDark, featured = false }: ProjectThumbnailProps) {
  switch (projectId) {
    case 'zap-shift':
      return (
        <div className={`relative w-full h-full min-h-[160px] sm:min-h-[190px] overflow-hidden rounded-2xl p-4 flex flex-col justify-between border select-none ${
          isDark 
            ? 'bg-gradient-to-br from-slate-900 via-blue-950/40 to-slate-950 border-blue-900/30' 
            : 'bg-gradient-to-br from-blue-50/80 via-indigo-50/50 to-slate-100 border-blue-100'
        }`}>
          {/* Subtle grid background */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#3b82f610_1px,transparent_1px),linear-gradient(to_bottom,#3b82f610_1px,transparent_1px)] bg-[size:16px_16px] pointer-events-none" />
          
          {/* Top Mock Window Bar */}
          <div className="relative z-10 flex items-center justify-between">
            <div className="flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
              <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
              <span className={`ml-2 text-[10px] font-mono font-medium px-2 py-0.5 rounded-md ${
                isDark ? 'bg-slate-900/80 text-blue-300 border border-slate-800' : 'bg-white/80 text-blue-700 border border-slate-200'
              }`}>
                zap-shift-app.local
              </span>
            </div>
            <div className="flex items-center gap-1">
              <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-500/15 text-emerald-400 border border-emerald-500/30">
                REST API Live
              </span>
            </div>
          </div>

          {/* Interactive Mock Dashboard View */}
          <div className="relative z-10 grid grid-cols-3 gap-2 my-2">
            <div className={`p-2 rounded-xl border ${isDark ? 'bg-slate-900/80 border-slate-800' : 'bg-white/90 border-slate-200 shadow-2xs'}`}>
              <div className="flex items-center gap-1 text-[9px] font-mono text-blue-400 mb-1">
                <Package size={10} />
                <span>Parcel Dispatch</span>
              </div>
              <div className="text-xs font-bold font-mono">Status: Active</div>
              <div className="w-full bg-slate-700/30 h-1 rounded-full mt-1.5 overflow-hidden">
                <div className="bg-blue-500 h-full w-3/4 rounded-full" />
              </div>
            </div>

            <div className={`p-2 rounded-xl border ${isDark ? 'bg-slate-900/80 border-slate-800' : 'bg-white/90 border-slate-200 shadow-2xs'}`}>
              <div className="flex items-center gap-1 text-[9px] font-mono text-emerald-400 mb-1">
                <Database size={10} />
                <span>MongoDB Store</span>
              </div>
              <div className="text-xs font-bold font-mono">JWT Verified</div>
              <div className="w-full bg-slate-700/30 h-1 rounded-full mt-1.5 overflow-hidden">
                <div className="bg-emerald-500 h-full w-full rounded-full" />
              </div>
            </div>

            <div className={`p-2 rounded-xl border ${isDark ? 'bg-slate-900/80 border-slate-800' : 'bg-white/90 border-slate-200 shadow-2xs'}`}>
              <div className="flex items-center gap-1 text-[9px] font-mono text-indigo-400 mb-1">
                <Server size={10} />
                <span>Express API</span>
              </div>
              <div className="text-xs font-bold font-mono">Port 5000</div>
              <div className="w-full bg-slate-700/30 h-1 rounded-full mt-1.5 overflow-hidden">
                <div className="bg-indigo-500 h-full w-4/5 rounded-full" />
              </div>
            </div>
          </div>

          {/* Bottom Architecture Flow */}
          <div className={`relative z-10 flex items-center justify-between text-[10px] font-mono pt-2 border-t ${
            isDark ? 'border-slate-800/80 text-slate-400' : 'border-slate-200 text-slate-600'
          }`}>
            <span className="flex items-center gap-1">
              <Code2 size={11} className="text-cyan-400" /> React 18 + Vite
            </span>
            <span className="text-blue-400">→ Client-Server Architecture →</span>
            <span className="flex items-center gap-1">
              <Server size={11} className="text-emerald-400" /> Node.js Backend
            </span>
          </div>
        </div>
      );

    case 'computer-graphics-project':
      return (
        <div className={`relative w-full h-full min-h-[140px] overflow-hidden rounded-2xl p-4 flex flex-col justify-between border select-none ${
          isDark 
            ? 'bg-gradient-to-br from-slate-950 via-cyan-950/30 to-slate-900 border-cyan-900/30' 
            : 'bg-gradient-to-br from-cyan-50/70 via-slate-50 to-blue-50/60 border-cyan-100'
        }`}>
          {/* Top Bar */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-1.5">
              <Cpu size={14} className="text-cyan-400" />
              <span className="text-[10px] font-mono font-bold tracking-wider uppercase text-cyan-400">
                OpenGL / GLUT Viewport
              </span>
            </div>
            <span className={`text-[10px] font-mono px-2 py-0.5 rounded ${
              isDark ? 'bg-cyan-500/10 text-cyan-300 border border-cyan-500/20' : 'bg-cyan-100 text-cyan-800 border border-cyan-200'
            }`}>
              2D/3D Space
            </span>
          </div>

          {/* 3D Geometry / Coordinate Visual */}
          <div className="relative py-2 flex items-center justify-center">
            <svg viewBox="0 0 200 80" className="w-48 h-20 overflow-visible">
              {/* Axes */}
              <line x1="20" y1="65" x2="180" y2="65" stroke={isDark ? '#0891b2' : '#0284c7'} strokeWidth="1.5" strokeDasharray="3 3" />
              <line x1="20" y1="65" x2="20" y2="10" stroke={isDark ? '#0891b2' : '#0284c7'} strokeWidth="1.5" strokeDasharray="3 3" />
              <line x1="20" y1="65" x2="70" y2="25" stroke={isDark ? '#06b6d4' : '#0ea5e9'} strokeWidth="1.5" strokeDasharray="3 3" />
              
              {/* 3D Cube / Polytope wireframe */}
              <polygon points="80,25 130,25 150,45 100,45" fill={isDark ? '#06b6d420' : '#bae6fd60'} stroke={isDark ? '#22d3ee' : '#0284c7'} strokeWidth="1.5" />
              <polygon points="100,45 150,45 150,70 100,70" fill={isDark ? '#0891b230' : '#7dd3fc60'} stroke={isDark ? '#06b6d4' : '#0369a1'} strokeWidth="1.5" />
              <polygon points="80,25 100,45 100,70 80,50" fill={isDark ? '#0e749040' : '#38bdf860'} stroke={isDark ? '#0891b2' : '#0284c7'} strokeWidth="1.5" />
              
              {/* Vertices */}
              <circle cx="80" cy="25" r="2.5" fill="#38bdf8" />
              <circle cx="130" cy="25" r="2.5" fill="#38bdf8" />
              <circle cx="150" cy="45" r="2.5" fill="#38bdf8" />
              <circle cx="100" cy="45" r="2.5" fill="#38bdf8" />
              <circle cx="100" cy="70" r="2.5" fill="#38bdf8" />
              <circle cx="150" cy="70" r="2.5" fill="#38bdf8" />
              <circle cx="80" cy="50" r="2.5" fill="#38bdf8" />
            </svg>
          </div>

          {/* Bottom Indicator */}
          <div className="flex items-center justify-between text-[10px] font-mono text-slate-400 pt-1 border-t border-slate-800/60">
            <span>Transform: Translate • Rotate • Scale</span>
            <span className="text-cyan-400 font-semibold">C++ Graphics</span>
          </div>
        </div>
      );

    case 'panda-project':
      return (
        <div className={`relative w-full h-full min-h-[140px] overflow-hidden rounded-2xl p-4 flex flex-col justify-between border select-none ${
          isDark 
            ? 'bg-gradient-to-br from-slate-950 via-emerald-950/20 to-slate-900 border-emerald-900/30' 
            : 'bg-gradient-to-br from-emerald-50/70 via-slate-50 to-teal-50/60 border-emerald-100'
        }`}>
          {/* Top Bar */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-1.5">
              <Table size={14} className="text-emerald-400" />
              <span className="text-[10px] font-mono font-bold tracking-wider uppercase text-emerald-400">
                Academic Programming
              </span>
            </div>
            <span className={`text-[10px] font-mono px-2 py-0.5 rounded ${
              isDark ? 'bg-emerald-500/10 text-emerald-300 border border-emerald-500/20' : 'bg-emerald-100 text-emerald-800 border border-emerald-200'
            }`}>
              Python Project
            </span>
          </div>

          {/* Matrix / Data Structure Mock */}
          <div className={`p-2.5 rounded-xl border font-mono text-[10px] my-1 ${
            isDark ? 'bg-slate-900/80 border-slate-800 text-slate-300' : 'bg-white/90 border-slate-200 text-slate-700 shadow-2xs'
          }`}>
            <div className="grid grid-cols-4 gap-1 pb-1 border-b border-slate-700/50 text-[9px] font-bold text-emerald-400">
              <span>idx</span>
              <span>sample</span>
              <span>category</span>
              <span>value</span>
            </div>
            <div className="grid grid-cols-4 gap-1 py-0.5 text-[9px]">
              <span className="text-slate-500">0</span>
              <span>record_A</span>
              <span className="text-blue-400">Class_1</span>
              <span className="font-bold">0.842</span>
            </div>
            <div className="grid grid-cols-4 gap-1 py-0.5 text-[9px]">
              <span className="text-slate-500">1</span>
              <span>record_B</span>
              <span className="text-emerald-400">Class_2</span>
              <span className="font-bold">0.915</span>
            </div>
          </div>

          {/* Bottom Indicator */}
          <div className="flex items-center justify-between text-[10px] font-mono text-slate-400 pt-1 border-t border-slate-800/60">
            <span>Learning & Practical Development</span>
            <span className="text-emerald-400 font-semibold">Python</span>
          </div>
        </div>
      );

    case 'university-management':
      return (
        <div className={`relative w-full h-full min-h-[140px] overflow-hidden rounded-2xl p-4 flex flex-col justify-between border select-none ${
          isDark 
            ? 'bg-gradient-to-br from-slate-950 via-indigo-950/30 to-slate-900 border-indigo-900/30' 
            : 'bg-gradient-to-br from-indigo-50/70 via-slate-50 to-blue-50/60 border-indigo-100'
        }`}>
          {/* Top Bar */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-1.5">
              <GraduationCap size={14} className="text-indigo-400" />
              <span className="text-[10px] font-mono font-bold tracking-wider uppercase text-indigo-400">
                Academic Software
              </span>
            </div>
            <span className={`text-[10px] font-mono px-2 py-0.5 rounded ${
              isDark ? 'bg-indigo-500/10 text-indigo-300 border border-indigo-500/20' : 'bg-indigo-100 text-indigo-800 border border-indigo-200'
            }`}>
              C++ & OOP
            </span>
          </div>

          {/* Terminal / OOP Module Representation */}
          <div className={`p-2.5 rounded-xl border font-mono text-[10px] my-1 ${
            isDark ? 'bg-slate-900/90 border-slate-800 text-slate-300' : 'bg-white/90 border-slate-200 text-slate-700 shadow-2xs'
          }`}>
            <div className="flex items-center justify-between text-[9px] text-indigo-400 pb-1 border-b border-slate-700/50">
              <span className="flex items-center gap-1"><Terminal size={10} /> class UniversitySystem</span>
              <span>C++</span>
            </div>
            <div className="pt-1.5 space-y-0.5 text-[9px]">
              <div><span className="text-cyan-400">void</span> registerStudent(id, dept);</div>
              <div><span className="text-cyan-400">bool</span> enrollCourse(studentId, courseCode);</div>
            </div>
          </div>

          {/* Bottom Indicator */}
          <div className="flex items-center justify-between text-[10px] font-mono text-slate-400 pt-1 border-t border-slate-800/60">
            <span>File Persistence & OOP Records</span>
            <span className="text-indigo-400 font-semibold">C++ System</span>
          </div>
        </div>
      );

    case 'basics-of-cg':
      return (
        <div className={`relative w-full h-full min-h-[140px] overflow-hidden rounded-2xl p-4 flex flex-col justify-between border select-none ${
          isDark 
            ? 'bg-gradient-to-br from-slate-950 via-teal-950/30 to-slate-900 border-teal-900/30' 
            : 'bg-gradient-to-br from-teal-50/70 via-slate-50 to-cyan-50/60 border-teal-100'
        }`}>
          {/* Top Bar */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-1.5">
              <Grid3X3 size={14} className="text-teal-400" />
              <span className="text-[10px] font-mono font-bold tracking-wider uppercase text-teal-400">
                Graphics Algorithms
              </span>
            </div>
            <span className={`text-[10px] font-mono px-2 py-0.5 rounded ${
              isDark ? 'bg-teal-500/10 text-teal-300 border border-teal-500/20' : 'bg-teal-100 text-teal-800 border border-teal-200'
            }`}>
              C++ Learning
            </span>
          </div>

          {/* Raster Grid Demonstration */}
          <div className="relative py-1 flex items-center justify-center">
            <div className="grid grid-cols-8 gap-1 p-2 rounded-lg bg-slate-900/60 border border-slate-800">
              {[
                1,0,0,0,0,0,0,0,
                0,1,1,0,0,0,0,0,
                0,0,0,1,1,0,0,0,
                0,0,0,0,0,1,1,0,
                0,0,0,0,0,0,0,1
              ].map((val, idx) => (
                <div
                  key={idx}
                  className={`w-2.5 h-2.5 rounded-xs transition-colors ${
                    val === 1
                      ? 'bg-teal-400 shadow-xs shadow-teal-400/50'
                      : isDark ? 'bg-slate-800/80' : 'bg-slate-700/40'
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Bottom Indicator */}
          <div className="flex items-center justify-between text-[10px] font-mono text-slate-400 pt-1 border-t border-slate-800/60">
            <span>Bresenham • DDA • Clipping</span>
            <span className="text-teal-400 font-semibold">C++ Algorithms</span>
          </div>
        </div>
      );

    case 'rainfall-prediction':
      return (
        <div className={`relative w-full h-full min-h-[140px] overflow-hidden rounded-2xl p-4 flex flex-col justify-between border select-none ${
          isDark 
            ? 'bg-gradient-to-br from-slate-950 via-purple-950/30 to-slate-900 border-purple-900/30' 
            : 'bg-gradient-to-br from-purple-50/70 via-slate-50 to-indigo-50/60 border-purple-100'
        }`}>
          {/* Top Bar */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-1.5">
              <CloudRain size={14} className="text-purple-400" />
              <span className="text-[10px] font-mono font-bold tracking-wider uppercase text-purple-400">
                Machine Learning
              </span>
            </div>
            <span className={`text-[10px] font-mono px-2 py-0.5 rounded ${
              isDark ? 'bg-purple-500/10 text-purple-300 border border-purple-500/20' : 'bg-purple-100 text-purple-800 border border-purple-200'
            }`}>
              Coursework
            </span>
          </div>

          {/* Prediction Metric Preview */}
          <div className={`p-2.5 rounded-xl border font-mono text-[10px] my-1 ${
            isDark ? 'bg-slate-900/80 border-slate-800 text-slate-300' : 'bg-white/90 border-slate-200 text-slate-700 shadow-2xs'
          }`}>
            <div className="flex justify-between items-center pb-1 border-b border-slate-700/50 text-[9px]">
              <span className="text-purple-400 font-bold">Rainfall Classifier</span>
              <span className="text-emerald-400">Scikit-learn</span>
            </div>
            <div className="flex justify-between items-center pt-1 text-[9px]">
              <span>Classification Metrics</span>
              <span className="font-mono font-bold text-cyan-400">Precision / Recall</span>
            </div>
          </div>

          {/* Bottom Indicator */}
          <div className="flex items-center justify-between text-[10px] font-mono text-slate-400 pt-1 border-t border-slate-800/60">
            <span>Predictive Modeling & EDA</span>
            <span className="text-purple-400 font-semibold">Python ML</span>
          </div>
        </div>
      );

    default:
      return (
        <div className={`relative w-full h-full min-h-[140px] overflow-hidden rounded-2xl p-4 flex flex-col justify-between border ${
          isDark ? 'bg-slate-900 border-slate-800' : 'bg-slate-100 border-slate-200'
        }`}>
          <div className="flex items-center gap-2">
            <Boxes size={16} className="text-blue-400" />
            <span className="text-xs font-mono font-semibold">{category}</span>
          </div>
          <div className="text-xs font-mono text-slate-400">Academic / Learning Project</div>
        </div>
      );
  }
}
