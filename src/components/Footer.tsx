import { MouseEvent } from 'react';
import { Github, Linkedin, Mail, ArrowUp } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

interface FooterProps {
  isDark: boolean;
}

export function Footer({ isDark }: FooterProps) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { name: 'Home', href: '#hero' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Education', href: '#education' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleNavClick = (e: MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer
      id="main-footer"
      className={`border-t relative overflow-hidden transition-colors ${
        isDark 
          ? 'bg-slate-950 border-slate-900 text-slate-400' 
          : 'bg-white border-slate-200 text-slate-600'
      }`}
    >
      {/* Subtle Bottom Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3/4 h-20 bg-blue-600/5 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-12 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-slate-800/60 dark:border-slate-800/80">
          
          {/* Brand/Identity */}
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-blue-600 to-indigo-600 flex items-center justify-center text-white font-mono font-bold text-xs shadow-md shadow-blue-600/25">
              FM
            </div>
            <div>
              <span className={`text-sm font-bold font-display block ${isDark ? 'text-white' : 'text-slate-900'}`}>
                Farjana Akter Mim
              </span>
              <span className="text-[11px] font-mono text-blue-400">
                CSE Student & Aspiring Developer
              </span>
            </div>
          </div>

          {/* Minimal Navigation Links */}
          <nav aria-label="Footer Navigation" className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs sm:text-sm font-medium">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className={`transition-colors hover:text-blue-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded px-1 ${
                  isDark ? 'text-slate-300' : 'text-slate-600'
                }`}
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Social Links & Back to Top */}
          <div className="flex items-center gap-2.5">
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className={`p-2.5 rounded-xl border transition-all duration-200 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 ${
                isDark 
                  ? 'border-slate-800 bg-slate-900 text-slate-300 hover:text-white hover:border-slate-700 hover:bg-slate-800' 
                  : 'border-slate-200 bg-slate-50 text-slate-700 hover:bg-slate-100 hover:text-slate-900'
              }`}
              aria-label="Farjana Akter Mim GitHub profile"
              title="GitHub"
            >
              <Github size={16} />
            </a>

            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className={`p-2.5 rounded-xl border transition-all duration-200 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 ${
                isDark 
                  ? 'border-slate-800 bg-slate-900 text-slate-300 hover:text-blue-400 hover:border-blue-500/30 hover:bg-slate-800' 
                  : 'border-slate-200 bg-slate-50 text-slate-700 hover:bg-slate-100 hover:text-blue-600'
              }`}
              aria-label="Farjana Akter Mim LinkedIn profile"
              title="LinkedIn"
            >
              <Linkedin size={16} />
            </a>

            <a
              href={`mailto:${personalInfo.email}`}
              className={`p-2.5 rounded-xl border transition-all duration-200 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 ${
                isDark 
                  ? 'border-slate-800 bg-slate-900 text-slate-300 hover:text-cyan-400 hover:border-cyan-500/30 hover:bg-slate-800' 
                  : 'border-slate-200 bg-slate-50 text-slate-700 hover:bg-slate-100 hover:text-cyan-600'
              }`}
              aria-label={`Send email to ${personalInfo.email}`}
              title="Email"
            >
              <Mail size={16} />
            </a>

            <button
              onClick={scrollToTop}
              className={`p-2.5 rounded-xl border transition-all duration-200 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 ${
                isDark 
                  ? 'border-slate-800 bg-slate-900 text-slate-300 hover:text-white hover:border-slate-700 hover:bg-slate-800' 
                  : 'border-slate-200 bg-slate-50 text-slate-700 hover:bg-slate-100 hover:text-slate-900'
              }`}
              title="Scroll back to top"
              aria-label="Scroll back to top"
            >
              <ArrowUp size={16} />
            </button>
          </div>

        </div>

        {/* Minimal Copyright Statement */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-500 text-center sm:text-left">
          <p>© 2026 Farjana Akter Mim. Built with React.</p>
          <p className="font-mono text-[11px] text-slate-500">
            Computer Science & Engineering
          </p>
        </div>

      </div>
    </footer>
  );
}

