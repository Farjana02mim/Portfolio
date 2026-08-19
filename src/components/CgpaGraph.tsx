import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  TrendingUp, 
  BarChart3, 
  LineChart as LineChartIcon, 
  Award, 
  Sparkles, 
  CheckCircle2, 
  Medal, 
  Info,
  ArrowUpRight,
  Target
} from 'lucide-react';
import { SemesterGrade } from '../types';

interface CgpaGraphProps {
  isDark: boolean;
  semesterGrades?: SemesterGrade[];
}

export function CgpaGraph({ isDark, semesterGrades = [] }: CgpaGraphProps) {
  const [activeView, setActiveView] = useState<'line' | 'bar'>('line');
  const [selectedSemester, setSelectedSemester] = useState<SemesterGrade | null>(
    semesterGrades[semesterGrades.length - 1] || null
  );
  const [hoveredSemester, setHoveredSemester] = useState<SemesterGrade | null>(null);

  if (!semesterGrades || semesterGrades.length === 0) {
    return null;
  }

  // Calculate statistics
  const gpaValues = semesterGrades.map((s) => s.gpa);
  const maxGpa = Math.max(...gpaValues);
  const minGpa = Math.min(...gpaValues);
  const avgGpa = (gpaValues.reduce((acc, curr) => acc + curr, 0) / gpaValues.length).toFixed(2);
  const growth = (semesterGrades[semesterGrades.length - 1].gpa - semesterGrades[0].gpa).toFixed(2);

  // SVG Chart Geometry Constants
  const svgWidth = 640;
  const svgHeight = 260;
  const padding = { top: 35, right: 40, bottom: 45, left: 55 };
  const graphWidth = svgWidth - padding.left - padding.right;
  const graphHeight = svgHeight - padding.top - padding.bottom;

  // Y-axis range: 3.00 to 4.00
  const yMin = 3.00;
  const yMax = 4.00;

  const getY = (val: number) => {
    const clamped = Math.max(yMin, Math.min(yMax, val));
    const ratio = (clamped - yMin) / (yMax - yMin);
    return padding.top + graphHeight - ratio * graphHeight;
  };

  const getX = (index: number) => {
    if (semesterGrades.length === 1) return padding.left + graphWidth / 2;
    return padding.left + (index / (semesterGrades.length - 1)) * graphWidth;
  };

  // Generate smooth cubic bezier SVG path
  const points = semesterGrades.map((s, i) => ({
    x: getX(i),
    y: getY(s.gpa),
    data: s
  }));

  const createSmoothPath = () => {
    if (points.length < 2) return '';
    let d = `M ${points[0].x},${points[0].y}`;
    for (let i = 0; i < points.length - 1; i++) {
      const p0 = points[i];
      const p1 = points[i + 1];
      const cpX = (p0.x + p1.x) / 2;
      d += ` C ${cpX},${p0.y} ${cpX},${p1.y} ${p1.x},${p1.y}`;
    }
    return d;
  };

  const createAreaPath = () => {
    const linePath = createSmoothPath();
    if (!linePath) return '';
    const bottomY = padding.top + graphHeight;
    const lastX = points[points.length - 1].x;
    const firstX = points[0].x;
    return `${linePath} L ${lastX},${bottomY} L ${firstX},${bottomY} Z`;
  };

  const activeDisplay = hoveredSemester || selectedSemester || semesterGrades[semesterGrades.length - 1];

  return (
    <div className={`p-6 sm:p-8 rounded-3xl border backdrop-blur-2xl transition-all duration-300 ${
      isDark
        ? 'bg-slate-900/70 border-slate-800/90 shadow-xl shadow-black/20'
        : 'bg-white/95 border-slate-200/90 shadow-lg shadow-slate-100'
    }`}>
      
      {/* Header & Controls */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-200 dark:border-slate-800/80">
        <div className="space-y-1">
          <div className="flex items-center gap-2">
            <span className="p-1.5 rounded-lg bg-blue-500/10 text-blue-400 border border-blue-500/20">
              <TrendingUp size={16} />
            </span>
            <h4 className="text-base sm:text-lg font-bold font-display tracking-tight text-slate-900 dark:text-slate-100">
              Academic CGPA & Semester Progression
            </h4>
          </div>
          <p className="text-xs text-slate-500 dark:text-slate-400 font-mono">
            Semester-by-semester GPA performance (Scale: 4.00)
          </p>
        </div>

        {/* View Toggle */}
        <div className="flex items-center gap-2 self-start sm:self-auto">
          <div className={`p-1 rounded-xl border flex items-center gap-1 ${
            isDark ? 'bg-slate-950 border-slate-800' : 'bg-slate-100 border-slate-200'
          }`}>
            <button
              onClick={() => setActiveView('line')}
              className={`px-3 py-1 rounded-lg text-xs font-semibold flex items-center gap-1.5 transition-all cursor-pointer ${
                activeView === 'line'
                  ? 'bg-blue-600 text-white shadow-xs'
                  : 'text-slate-500 hover:text-slate-300'
              }`}
              aria-label="Line chart view"
            >
              <LineChartIcon size={13} />
              <span>Trend</span>
            </button>
            <button
              onClick={() => setActiveView('bar')}
              className={`px-3 py-1 rounded-lg text-xs font-semibold flex items-center gap-1.5 transition-all cursor-pointer ${
                activeView === 'bar'
                  ? 'bg-blue-600 text-white shadow-xs'
                  : 'text-slate-500 hover:text-slate-300'
              }`}
              aria-label="Bar chart view"
            >
              <BarChart3 size={13} />
              <span>Bars</span>
            </button>
          </div>
        </div>
      </div>

      {/* Top Metric Summary Cards */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3.5 my-6">
        <div className={`p-3.5 sm:p-4 rounded-2xl border transition-all ${
          isDark ? 'bg-slate-950/60 border-slate-800/80' : 'bg-slate-50 border-slate-200/80'
        }`}>
          <span className="text-[11px] font-mono text-slate-400 flex items-center gap-1">
            <Target size={12} className="text-blue-400" />
            Cumulative CGPA
          </span>
          <div className="text-xl sm:text-2xl font-bold font-mono text-blue-500 dark:text-blue-400 mt-1">
            {avgGpa}
            <span className="text-xs text-slate-400 font-normal ml-1">/ 4.00</span>
          </div>
          <span className="text-[10px] text-emerald-500 font-semibold mt-0.5 block">
            4 Semesters Avg
          </span>
        </div>

        <div className={`p-3.5 sm:p-4 rounded-2xl border transition-all ${
          isDark ? 'bg-slate-950/60 border-slate-800/80' : 'bg-slate-50 border-slate-200/80'
        }`}>
          <span className="text-[11px] font-mono text-slate-400 flex items-center gap-1">
            <Sparkles size={12} className="text-amber-400" />
            Peak Semester
          </span>
          <div className="text-xl sm:text-2xl font-bold font-mono text-amber-500 dark:text-amber-400 mt-1">
            {maxGpa.toFixed(2)}
            <span className="text-xs text-slate-400 font-normal ml-1">/ 4.00</span>
          </div>
          <span className="text-[10px] text-amber-500/90 font-semibold mt-0.5 block font-mono">
            Semester 2.2 (99.3%)
          </span>
        </div>

        <div className={`p-3.5 sm:p-4 rounded-2xl border transition-all ${
          isDark ? 'bg-slate-950/60 border-slate-800/80' : 'bg-slate-50 border-slate-200/80'
        }`}>
          <span className="text-[11px] font-mono text-slate-400 flex items-center gap-1">
            <ArrowUpRight size={12} className="text-emerald-400" />
            Growth Trajectory
          </span>
          <div className="text-xl sm:text-2xl font-bold font-mono text-emerald-500 dark:text-emerald-400 mt-1">
            +{growth}
          </div>
          <span className="text-[10px] text-emerald-600 dark:text-emerald-400 font-semibold mt-0.5 block">
            1.1 (3.52) → 2.2 (3.97)
          </span>
        </div>

        <div className={`p-3.5 sm:p-4 rounded-2xl border transition-all ${
          isDark ? 'bg-slate-950/60 border-slate-800/80' : 'bg-slate-50 border-slate-200/80'
        }`}>
          <span className="text-[11px] font-mono text-slate-400 flex items-center gap-1">
            <Medal size={12} className="text-amber-400" />
            Academic Standing
          </span>
          <div className="text-base sm:text-lg font-bold font-display text-slate-800 dark:text-slate-200 mt-1">
            2nd Position
          </div>
          <span className="text-[10px] text-amber-600 dark:text-amber-400 font-medium mt-0.5 block">
            Scholarship Holder
          </span>
        </div>
      </div>

      {/* Primary Chart Canvas */}
      <div className={`p-4 sm:p-6 rounded-2xl border relative overflow-hidden transition-all ${
        isDark 
          ? 'bg-slate-950/80 border-slate-800 shadow-inner' 
          : 'bg-gradient-to-b from-slate-50/90 to-white border-slate-200'
      }`}>
        
        {activeView === 'line' ? (
          <div className="relative w-full">
            <svg
              viewBox={`0 0 ${svgWidth} ${svgHeight}`}
              className="w-full h-auto max-h-[300px] overflow-visible"
              aria-label="Semester GPA trend chart"
            >
              <defs>
                {/* Area Gradient */}
                <linearGradient id="cgpaAreaGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#3b82f6" stopOpacity={isDark ? '0.35' : '0.2'} />
                  <stop offset="100%" stopColor="#3b82f6" stopOpacity="0.0" />
                </linearGradient>
                {/* Line Gradient */}
                <linearGradient id="cgpaLineGradient" x1="0" y1="0" x2="1" y2="0">
                  <stop offset="0%" stopColor="#60a5fa" />
                  <stop offset="50%" stopColor="#3b82f6" />
                  <stop offset="100%" stopColor="#2563eb" />
                </linearGradient>
              </defs>

              {/* Grid Lines & Labels */}
              {[4.00, 3.75, 3.50, 3.25, 3.00].map((level) => {
                const y = getY(level);
                const isTop = level === 4.00;
                const isScholarshipLine = level === 3.75;

                return (
                  <g key={level}>
                    <line
                      x1={padding.left}
                      y1={y}
                      x2={svgWidth - padding.right}
                      y2={y}
                      stroke={
                        isScholarshipLine 
                          ? '#f59e0b' 
                          : isDark ? '#334155' : '#e2e8f0'
                      }
                      strokeWidth={isScholarshipLine ? 1 : 1}
                      strokeDasharray={isScholarshipLine ? '4 4' : '2 4'}
                      strokeOpacity={isScholarshipLine ? (isDark ? 0.6 : 0.7) : 0.7}
                    />
                    <text
                      x={padding.left - 10}
                      y={y + 4}
                      textAnchor="end"
                      fontSize="10"
                      fill={isScholarshipLine ? (isDark ? '#fbbf24' : '#d97706') : isDark ? '#94a3b8' : '#64748b'}
                      fontFamily="monospace"
                      fontWeight={isScholarshipLine ? 'bold' : 'normal'}
                    >
                      {level.toFixed(2)}
                    </text>
                  </g>
                );
              })}

              {/* Scholarship Threshold Indicator */}
              <text
                x={svgWidth - padding.right}
                y={getY(3.75) - 6}
                textAnchor="end"
                fontSize="9"
                fill={isDark ? '#fbbf24' : '#d97706'}
                fontFamily="sans-serif"
                fontWeight="600"
                opacity="0.85"
              >
                ★ Distinction Benchmark (3.75+)
              </text>

              {/* Area Fill */}
              <motion.path
                d={createAreaPath()}
                fill="url(#cgpaAreaGradient)"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
              />

              {/* Line Stroke */}
              <motion.path
                d={createSmoothPath()}
                fill="none"
                stroke="url(#cgpaLineGradient)"
                strokeWidth="3.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 1, ease: 'easeOut' }}
              />

              {/* Data Points and Interactivity */}
              {points.map((pt, idx) => {
                const isSelected = selectedSemester?.id === pt.data.id;
                const isHovered = hoveredSemester?.id === pt.data.id;
                const isPeak = pt.data.gpa === maxGpa;

                return (
                  <g 
                    key={pt.data.id} 
                    className="cursor-pointer transition-transform"
                    onMouseEnter={() => setHoveredSemester(pt.data)}
                    onMouseLeave={() => setHoveredSemester(null)}
                    onClick={() => setSelectedSemester(pt.data)}
                  >
                    {/* Vertical reference guideline on hover/select */}
                    {(isHovered || isSelected) && (
                      <line
                        x1={pt.x}
                        y1={padding.top}
                        x2={pt.x}
                        y2={padding.top + graphHeight}
                        stroke="#3b82f6"
                        strokeWidth="1.5"
                        strokeDasharray="3 3"
                        strokeOpacity="0.8"
                      />
                    )}

                    {/* Outer Glow Halo */}
                    <circle
                      cx={pt.x}
                      cy={pt.y}
                      r={isPeak ? 11 : 9}
                      fill={isPeak ? '#f59e0b' : '#3b82f6'}
                      fillOpacity={isSelected || isHovered ? 0.35 : 0.15}
                      className="transition-all duration-200"
                    />

                    {/* Node Core */}
                    <circle
                      cx={pt.x}
                      cy={pt.y}
                      r={isPeak ? 6.5 : 5.5}
                      fill={isDark ? '#0f172a' : '#ffffff'}
                      stroke={isPeak ? '#f59e0b' : '#3b82f6'}
                      strokeWidth={isPeak ? 3 : 2.5}
                    />

                    {/* Score Label above node */}
                    <text
                      x={pt.x}
                      y={pt.y - 12}
                      textAnchor="middle"
                      fontSize="11"
                      fontWeight="bold"
                      fontFamily="monospace"
                      fill={isPeak ? (isDark ? '#fbbf24' : '#d97706') : (isDark ? '#93c5fd' : '#1d4ed8')}
                    >
                      {pt.data.gpa.toFixed(2)}
                    </text>

                    {/* X-axis Semester label below */}
                    <text
                      x={pt.x}
                      y={padding.top + graphHeight + 18}
                      textAnchor="middle"
                      fontSize="11"
                      fontWeight={isSelected || isHovered ? 'bold' : '600'}
                      fontFamily="monospace"
                      fill={isSelected || isHovered ? (isDark ? '#60a5fa' : '#2563eb') : (isDark ? '#cbd5e1' : '#475569')}
                    >
                      Sem {pt.data.shortName}
                    </text>

                    <text
                      x={pt.x}
                      y={padding.top + graphHeight + 31}
                      textAnchor="middle"
                      fontSize="9"
                      fill={isDark ? '#64748b' : '#94a3b8'}
                      fontFamily="sans-serif"
                    >
                      {pt.data.year}
                    </text>
                  </g>
                );
              })}
            </svg>
          </div>
        ) : (
          /* Bar Chart Breakdown Mode */
          <div className="py-2">
            <div className="grid grid-cols-4 gap-3 sm:gap-6 items-end h-[220px] pt-8 pb-2 px-2 sm:px-6">
              {semesterGrades.map((sem, idx) => {
                const heightPercent = ((sem.gpa - 3.0) / (4.0 - 3.0)) * 100;
                const isSelected = selectedSemester?.id === sem.id;
                const isPeak = sem.gpa === maxGpa;

                return (
                  <div
                    key={sem.id}
                    className="flex flex-col items-center h-full justify-end cursor-pointer group"
                    onClick={() => setSelectedSemester(sem)}
                    onMouseEnter={() => setHoveredSemester(sem)}
                    onMouseLeave={() => setHoveredSemester(null)}
                  >
                    {/* Top Score Badge */}
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: idx * 0.1 }}
                      className={`text-xs font-mono font-bold px-2 py-0.5 rounded-md mb-2 transition-all ${
                        isPeak
                          ? 'bg-amber-500/15 text-amber-500 border border-amber-500/30'
                          : isSelected
                            ? 'bg-blue-600 text-white'
                            : isDark
                              ? 'bg-slate-800 text-slate-300'
                              : 'bg-slate-200 text-slate-700'
                      }`}
                    >
                      {sem.gpa.toFixed(2)}
                    </motion.div>

                    {/* Animated Bar Column */}
                    <div className={`w-full max-w-[64px] rounded-t-xl transition-all duration-300 relative overflow-hidden ${
                      isDark ? 'bg-slate-800/60' : 'bg-slate-200/80'
                    }`} style={{ height: '140px' }}>
                      <motion.div
                        initial={{ height: 0 }}
                        animate={{ height: `${heightPercent}%` }}
                        transition={{ duration: 0.6, delay: idx * 0.1, ease: 'easeOut' }}
                        className={`w-full absolute bottom-0 rounded-t-xl transition-all ${
                          isPeak
                            ? 'bg-gradient-to-t from-amber-600 to-amber-400'
                            : isSelected
                              ? 'bg-gradient-to-t from-blue-700 to-blue-400'
                              : 'bg-gradient-to-t from-blue-600 to-blue-500 group-hover:brightness-110'
                        }`}
                      />
                    </div>

                    {/* Bottom Semester Label */}
                    <div className="text-center mt-3">
                      <span className="text-xs font-mono font-bold block text-slate-800 dark:text-slate-200">
                        {sem.shortName}
                      </span>
                      <span className="text-[10px] text-slate-500 block truncate max-w-[80px]">
                        {sem.term}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}

      </div>

      {/* Selected / Hovered Semester Detailed Insights Card */}
      <AnimatePresence mode="wait">
        {activeDisplay && (
          <motion.div
            key={activeDisplay.id}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className={`mt-6 p-4 sm:p-5 rounded-2xl border transition-all ${
              activeDisplay.achievement
                ? isDark
                  ? 'bg-gradient-to-r from-amber-500/10 via-slate-900/80 to-slate-900 border-amber-500/30'
                  : 'bg-gradient-to-r from-amber-50/90 via-white to-white border-amber-200'
                : isDark
                  ? 'bg-slate-950/60 border-slate-800/80'
                  : 'bg-slate-50/90 border-slate-200/80'
            }`}
          >
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-mono font-bold px-2 py-0.5 rounded-full bg-blue-500/15 text-blue-400 border border-blue-500/30">
                    Semester {activeDisplay.shortName}
                  </span>
                  <h5 className="text-sm font-bold font-display text-slate-900 dark:text-slate-100">
                    {activeDisplay.year} — {activeDisplay.term}
                  </h5>
                  {activeDisplay.trend === 'peak' && (
                    <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-amber-500/20 text-amber-400 border border-amber-500/30 flex items-center gap-1">
                      <Sparkles size={11} />
                      Highest Score
                    </span>
                  )}
                </div>

                {activeDisplay.achievement && (
                  <div className="flex items-center gap-1.5 text-xs text-amber-600 dark:text-amber-400 font-semibold pt-0.5">
                    <Award size={14} className="shrink-0" />
                    <span>{activeDisplay.achievement}</span>
                  </div>
                )}
              </div>

              {/* GPA & Percentage Indicator */}
              <div className="flex items-center gap-3 sm:text-right">
                <div>
                  <div className="text-xs text-slate-400 font-mono">Term SGPA</div>
                  <div className="text-xl font-mono font-bold text-blue-500 dark:text-blue-400">
                    {activeDisplay.gpa.toFixed(2)} <span className="text-xs font-normal text-slate-500">/ 4.00</span>
                  </div>
                </div>
                <div className="border-l border-slate-700/50 pl-3">
                  <div className="text-xs text-slate-400 font-mono">Performance</div>
                  <div className="text-sm font-mono font-semibold text-emerald-500">
                    {activeDisplay.percentage}%
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Quick 4-Semester Badges Row */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 mt-4">
        {semesterGrades.map((sem) => (
          <button
            key={sem.id}
            onClick={() => setSelectedSemester(sem)}
            className={`p-3 rounded-xl border text-left transition-all cursor-pointer ${
              selectedSemester?.id === sem.id
                ? isDark
                  ? 'bg-blue-500/15 border-blue-500/50 shadow-xs'
                  : 'bg-blue-50 border-blue-300 shadow-xs'
                : isDark
                  ? 'bg-slate-950/40 border-slate-800/60 hover:border-slate-700'
                  : 'bg-white border-slate-200/70 hover:border-slate-300'
            }`}
          >
            <div className="flex items-center justify-between">
              <span className="text-[11px] font-mono font-semibold text-slate-400">
                Sem {sem.shortName}
              </span>
              {sem.gpa === maxGpa && (
                <Sparkles size={11} className="text-amber-400" />
              )}
            </div>
            <div className="text-base font-mono font-bold text-slate-900 dark:text-slate-100 mt-0.5">
              {sem.gpa.toFixed(2)}
            </div>
            <div className="text-[10px] text-slate-500 truncate mt-0.5">
              {sem.year}
            </div>
          </button>
        ))}
      </div>

    </div>
  );
}
