import React, { useCallback, useEffect, useState } from 'react';
import Navigation from './components/Navigation';
import { CinematicHero } from './components/ui/cinematic-landing-hero';
import About from './components/About';
import Skills from './components/Skills';
import Education from './components/Education';
import Projects from './components/Projects';
import Experience from './components/Experience';
import ProjectsGallery from './components/ProjectsGallery';
import Contact from './components/Contact';
import CursorGlow from './components/CursorGlow';
import { useScrollSpy } from './hooks/useScrollSpy';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDark, setIsDark] = useState(() => {
    const s = localStorage.getItem('theme');
    return s ? s === 'dark' : true;
  });
  const sectionIds = ['hero', 'about', 'skills', 'education', 'projects', 'experience', 'contact'];
  const activeSection = useScrollSpy(sectionIds);

  useEffect(() => {
    document.documentElement.classList.toggle('dark', isDark);
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
  }, [isDark]);

  const toggleTheme = useCallback(() => setIsDark((d) => !d), []);

  return (
    <div className="relative min-h-screen bg-slate-50 dark:bg-[#0a0d12] text-slate-900 dark:text-slate-100 transition-colors duration-300">
      <CursorGlow />

      <Navigation
        activeSection={activeSection}
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
        isDark={isDark}
        toggleTheme={toggleTheme}
      />

      <main>
        <CinematicHero id="hero" />
        <About />
        <Skills />
        <Education />
        <Projects />
        <ProjectsGallery />
        <Experience />
        <Contact />
      </main>

      <footer className="border-t border-slate-200 dark:border-slate-800/80 bg-white/95 dark:bg-[#090c10]/95 py-8">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-4 text-center text-sm text-slate-500 dark:text-slate-400 sm:px-6 lg:px-8">
          <p>© 2026 Yashdeep Tehlan</p>
          <p>Built with React, TypeScript, and Tailwind CSS.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
