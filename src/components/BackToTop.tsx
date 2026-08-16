import { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';

interface BackToTopProps {
  isDark: boolean;
}

export function BackToTop({ isDark }: BackToTopProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 400);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (!isVisible) return null;

  return (
    <button
      id="floating-back-to-top-btn"
      onClick={scrollToTop}
      className={`fixed bottom-6 right-6 z-40 p-3 rounded-2xl border shadow-xl transition-all duration-300 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-blue-500 cursor-pointer ${
        isDark
          ? 'bg-slate-900/90 border-slate-700 text-blue-400 hover:bg-slate-800 hover:text-white backdrop-blur-md shadow-black/40'
          : 'bg-white/95 border-slate-200 text-blue-600 hover:bg-slate-50 hover:text-blue-700 backdrop-blur-md shadow-slate-300/60'
      }`}
      aria-label="Back to top"
      title="Scroll to top"
    >
      <ArrowUp size={20} />
    </button>
  );
}
