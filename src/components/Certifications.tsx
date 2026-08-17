import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Award, ExternalLink, CheckCircle2, Plus, Sparkles, BookOpen, Clock, X, Maximize2 } from 'lucide-react';
import { certifications } from '../data/portfolioData';
import { CertificationItem } from '../types';

interface CertificationsProps {
  isDark: boolean;
}

export function Certifications({ isDark }: CertificationsProps) {
  const [certList] = useState<CertificationItem[]>(certifications);
  const [previewImage, setPreviewImage] = useState<string | null>(null);

  return (
    <section
      id="certifications"
      className={`py-24 lg:py-32 relative ${
        isDark ? 'text-slate-100' : 'text-slate-900'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-16 space-y-3"
        >
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-indigo-500/10 text-indigo-400 border border-indigo-500/30 backdrop-blur-md">
            <Award size={13} className="text-indigo-400" />
            <span>Certifications & Learning</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight font-display">
            Certifications & Coursework
          </h2>
          <p className={`text-base sm:text-lg leading-relaxed ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
            Coursework and verified specializations in Machine Learning, software development, and core computer science.
          </p>
        </motion.div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certList.map((cert, idx) => {
            const isPlaceholder = cert.isPlaceholder;

            return (
              <motion.div
                key={cert.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                whileHover={{ y: -4 }}
                className={`rounded-3xl border backdrop-blur-xl flex flex-col justify-between overflow-hidden transition-all ${
                  isPlaceholder
                    ? isDark
                      ? 'bg-slate-950/40 border-dashed border-slate-800 hover:border-indigo-500/50'
                      : 'bg-slate-50/70 border-dashed border-slate-300 hover:border-indigo-400'
                    : isDark
                      ? 'bg-slate-950/80 border-slate-800/80 hover:border-indigo-500/40 shadow-lg shadow-black/20'
                      : 'bg-white border-slate-200 hover:border-indigo-300 shadow-md'
                }`}
              >
                {/* Certificate Image Thumbnail */}
                {cert.image && (
                  <button
                    onClick={() => setPreviewImage(cert.image!)}
                    className="relative w-full h-40 overflow-hidden group cursor-pointer"
                  >
                    <img
                      src={cert.image}
                      alt={`${cert.title} certificate`}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors flex items-center justify-center">
                      <Maximize2 size={20} className="text-white opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>
                  </button>
                )}

                <div className="p-6 sm:p-7 flex flex-col justify-between flex-1">
                  <div>
                    {/* Card Header Status */}
                    <div className="flex items-center justify-between mb-4">
                      <div className={`p-3 rounded-2xl border ${
                        isPlaceholder
                          ? isDark
                            ? 'bg-slate-900 border-slate-800 text-slate-500'
                            : 'bg-slate-100 border-slate-200 text-slate-400'
                          : 'bg-indigo-500/10 text-indigo-400 border-indigo-500/20'
                      }`}>
                        {isPlaceholder ? <Plus size={20} /> : <BookOpen size={20} />}
                      </div>

                      {isPlaceholder ? (
                        <span className={`px-2.5 py-0.5 rounded-full text-[11px] font-mono border ${
                          isDark ? 'bg-slate-900/80 border-slate-800 text-slate-400' : 'bg-slate-100 border-slate-200 text-slate-500'
                        }`}>
                          Editable Slot
                        </span>
                      ) : (
                        <span className="flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-semibold bg-emerald-500/15 text-emerald-300 border border-emerald-500/30">
                          <CheckCircle2 size={12} />
                          <span>Completed</span>
                        </span>
                      )}
                    </div>

                    {/* Title & Issuer */}
                    <h3 className={`text-lg font-bold font-display tracking-tight mb-1.5 ${
                      isPlaceholder && (isDark ? 'text-slate-300' : 'text-slate-700')
                    }`}>
                      {cert.title}
                    </h3>
                    
                    <p className={`text-xs font-semibold mb-2 ${
                      isPlaceholder
                        ? isDark ? 'text-slate-400' : 'text-slate-500'
                        : isDark ? 'text-indigo-400' : 'text-indigo-600'
                    }`}>
                      {cert.issuer}
                    </p>

                    {/* Completion Date */}
                    <div className="flex items-center gap-1.5 text-xs font-mono mb-3 text-slate-400">
                      <Clock size={12} className="text-slate-500" />
                      <span>{cert.date}</span>
                    </div>

                    {/* Description */}
                    <p className={`text-xs leading-relaxed mb-4 ${
                      isDark ? 'text-slate-300' : 'text-slate-600'
                    }`}>
                      {cert.description}
                    </p>

                    {/* Skills tags */}
                    {cert.skills && cert.skills.length > 0 && (
                      <div className="flex flex-wrap gap-1.5 mb-4">
                        {cert.skills.map((skill) => (
                          <span
                            key={skill}
                            className={`px-2.5 py-0.5 rounded-lg text-[10px] font-mono border ${
                              isDark
                                ? 'bg-slate-900/80 border-slate-800 text-slate-300'
                                : 'bg-slate-100 border-slate-200 text-slate-700'
                            }`}
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Card Action Link */}
                  <div className={`pt-4 border-t flex items-center justify-between ${
                    isDark ? 'border-slate-800/80' : 'border-slate-100'
                  }`}>
                    {cert.image ? (
                      <a
                        href={cert.image}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-400 hover:text-blue-300 transition-colors cursor-pointer"
                      >
                        <span>View Certificate</span>
                        <ExternalLink size={12} />
                      </a>
                    ) : cert.credentialUrl ? (
                      <a
                        href={cert.credentialUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-400 hover:text-blue-300 transition-colors cursor-pointer"
                      >
                        <span>View Credential</span>
                        <ExternalLink size={12} />
                      </a>
                    ) : (
                      <span className={`text-[11px] font-mono ${
                        isPlaceholder
                          ? isDark ? 'text-slate-500' : 'text-slate-400'
                          : isDark ? 'text-slate-400' : 'text-slate-500'
                      }`}>
                        {isPlaceholder ? 'Placeholder for future certificate' : 'Verified Academic Course'}
                      </span>
                    )}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Fullscreen Image Preview Modal */}
      <AnimatePresence>
        {previewImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setPreviewImage(null)}
            className="fixed inset-0 z-[100] bg-black/85 backdrop-blur-sm flex items-center justify-center p-4 sm:p-8 cursor-zoom-out"
          >
            <button
              onClick={() => setPreviewImage(null)}
              className="absolute top-5 right-5 p-2.5 rounded-full bg-slate-900/80 text-white hover:bg-slate-800 transition-colors"
              aria-label="Close preview"
            >
              <X size={20} />
            </button>
            <motion.img
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              src={previewImage}
              alt="Certificate preview"
              onClick={(e) => e.stopPropagation()}
              className="max-w-full max-h-full rounded-2xl shadow-2xl object-contain"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
