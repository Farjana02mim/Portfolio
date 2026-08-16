import { useState } from 'react';
import { useDarkMode } from './hooks/useDarkMode';
import { useScrollSpy } from './hooks/useScrollSpy';

// Components
import { BackgroundDecor } from './components/BackgroundDecor';
import { ScrollProgress } from './components/ScrollProgress';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { MachineLearning } from './components/MachineLearning';
import { Education } from './components/Education';
import { LearningJourney } from './components/LearningJourney';
import { Certifications } from './components/Certifications';
import { Achievements } from './components/Achievements';
import { ResumeSection } from './components/ResumeSection';
import { DeveloperProfiles } from './components/DeveloperProfiles';
import { GitHubSection } from './components/GitHubSection';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { ResumeModal } from './components/ResumeModal';
import { BackToTop } from './components/BackToTop';

const sectionIds = [
  'hero',
  'about',
  'skills',
  'projects',
  'machine-learning',
  'education',
  'journey',
  'certifications',
  'achievements',
  'resume',
  'profiles',
  'github',
  'contact',
];

export default function App() {
  const { isDark, toggleDarkMode } = useDarkMode();
  const { activeId, scrollProgress } = useScrollSpy(sectionIds, 120);
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  return (
    <div className={`min-h-screen relative overflow-x-hidden selection:bg-blue-500 selection:text-white transition-colors duration-300 ${
      isDark ? 'bg-slate-950 text-slate-100' : 'bg-slate-50 text-slate-900'
    }`}>
      {/* Background Animated Gradient Mesh & Ambient Lighting */}
      <BackgroundDecor isDark={isDark} />

      {/* Scroll Progress Bar at the top */}
      <ScrollProgress progress={scrollProgress} />

      {/* Main Sticky Glassmorphism Navbar */}
      <Navbar
        activeSection={activeId}
        isDark={isDark}
        onToggleTheme={toggleDarkMode}
        onOpenResume={() => setIsResumeOpen(true)}
      />

      {/* Main Content Sections */}
      <main id="main-content" className="relative z-10">
        <Hero
          isDark={isDark}
          onOpenResume={() => setIsResumeOpen(true)}
        />

        <About
          isDark={isDark}
        />

        <Skills
          isDark={isDark}
        />

        <Projects
          isDark={isDark}
        />

        <MachineLearning
          isDark={isDark}
        />

        <Education
          isDark={isDark}
        />

        <LearningJourney
          isDark={isDark}
        />

        <Certifications
          isDark={isDark}
        />

        <Achievements
          isDark={isDark}
        />

        <ResumeSection
          isDark={isDark}
          onOpenModal={() => setIsResumeOpen(true)}
        />

        <DeveloperProfiles
          isDark={isDark}
        />

        <GitHubSection
          isDark={isDark}
        />

        <Contact
          isDark={isDark}
        />
      </main>

      {/* Footer */}
      <Footer isDark={isDark} />

      {/* Floating Back to Top Button */}
      <BackToTop isDark={isDark} />

      {/* Interactive Resume Preview Modal */}
      <ResumeModal
        isOpen={isResumeOpen}
        onClose={() => setIsResumeOpen(false)}
        isDark={isDark}
      />
    </div>
  );
}
