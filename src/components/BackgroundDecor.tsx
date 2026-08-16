import { motion } from 'motion/react';

interface BackgroundDecorProps {
  isDark: boolean;
}

export function BackgroundDecor({ isDark }: BackgroundDecorProps) {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden" aria-hidden="true">
      {/* Ambient gradient blobs with subtle floating motion */}
      <motion.div
        animate={{
          x: [0, 30, -20, 0],
          y: [0, -40, 20, 0],
          scale: [1, 1.08, 0.95, 1],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className={`absolute -top-40 left-1/4 w-96 sm:w-[540px] h-96 sm:h-[540px] rounded-full blur-3xl ${
          isDark
            ? 'bg-gradient-to-br from-blue-600/20 via-indigo-600/15 to-transparent'
            : 'bg-gradient-to-br from-blue-200/40 via-indigo-200/30 to-transparent'
        }`}
      />

      <motion.div
        animate={{
          x: [0, -35, 25, 0],
          y: [0, 35, -30, 0],
          scale: [1, 0.95, 1.05, 1],
        }}
        transition={{
          duration: 22,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 2,
        }}
        className={`absolute top-1/3 -right-20 w-80 sm:w-[500px] h-80 sm:h-[500px] rounded-full blur-3xl ${
          isDark
            ? 'bg-gradient-to-bl from-cyan-500/15 via-blue-600/10 to-transparent'
            : 'bg-gradient-to-bl from-cyan-200/30 via-blue-200/20 to-transparent'
        }`}
      />

      <motion.div
        animate={{
          x: [0, 40, -30, 0],
          y: [0, -25, 35, 0],
          scale: [1, 1.05, 0.92, 1],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 4,
        }}
        className={`absolute top-2/3 -left-20 w-80 sm:w-[480px] h-80 sm:h-[480px] rounded-full blur-3xl ${
          isDark
            ? 'bg-gradient-to-tr from-purple-600/15 via-indigo-600/10 to-transparent'
            : 'bg-gradient-to-tr from-purple-200/30 via-indigo-200/20 to-transparent'
        }`}
      />

      {/* Subtle micro grid pattern overlay */}
      <div
        className={`absolute inset-0 bg-grid-pattern opacity-100 ${
          isDark ? 'mix-blend-screen' : 'mix-blend-multiply opacity-60'
        }`}
      />

      {/* Top vignette glow */}
      <div
        className={`absolute top-0 inset-x-0 h-32 bg-gradient-to-b ${
          isDark ? 'from-slate-950 via-slate-950/60 to-transparent' : 'from-slate-50 via-slate-50/60 to-transparent'
        }`}
      />
    </div>
  );
}
