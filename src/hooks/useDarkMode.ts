import { useState, useEffect } from 'react';

export function useDarkMode() {
  const [isDark, setIsDark] = useState<boolean>(() => {
    try {
      const saved = localStorage.getItem('mim_portfolio_theme');
      if (saved !== null) {
        return saved === 'dark';
      }
      // If no preference saved, check system theme
      if (typeof window !== 'undefined' && window.matchMedia) {
        return window.matchMedia('(prefers-color-scheme: dark)').matches;
      }
    } catch {
      // Fallback in restricted storage contexts
    }
    return true; // Default fallback
  });

  // Listen to system theme changes if user hasn't explicitly saved a preference
  useEffect(() => {
    try {
      const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
      const handleSystemThemeChange = (e: MediaQueryListEvent) => {
        const saved = localStorage.getItem('mim_portfolio_theme');
        if (saved === null) {
          setIsDark(e.matches);
        }
      };

      mediaQuery.addEventListener('change', handleSystemThemeChange);
      return () => mediaQuery.removeEventListener('change', handleSystemThemeChange);
    } catch {
      // Ignore if matchMedia is unavailable
    }
  }, []);

  useEffect(() => {
    const root = document.documentElement;
    if (isDark) {
      root.classList.add('dark');
      root.classList.remove('light');
    } else {
      root.classList.remove('dark');
      root.classList.add('light');
    }
  }, [isDark]);

  const toggleDarkMode = () => {
    setIsDark((prev) => {
      const next = !prev;
      try {
        localStorage.setItem('mim_portfolio_theme', next ? 'dark' : 'light');
      } catch {
        // Handle private browsing or localStorage errors
      }
      return next;
    });
  };

  return { isDark, toggleDarkMode, setIsDark };
}

