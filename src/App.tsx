import React, { useState } from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Education from './components/Education';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Contact from './components/Contact';
import { useScrollSpy } from './hooks/useScrollSpy';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const sectionIds = ['hero', 'about', 'skills', 'education', 'projects', 'experience', 'contact'];
  const activeSection = useScrollSpy(sectionIds);

  return (
    <div className="relative min-h-screen bg-[#0a0d12] text-slate-100">
      <div className="pointer-events-none fixed inset-0 -z-10 bg-[radial-gradient(circle_at_15%_20%,rgba(56,189,248,0.1),transparent_35%),radial-gradient(circle_at_85%_80%,rgba(52,211,153,0.08),transparent_40%)]" />
      <div className="pointer-events-none fixed inset-0 -z-10 opacity-[0.16] [background-image:linear-gradient(rgba(148,163,184,0.18)_1px,transparent_1px),linear-gradient(90deg,rgba(148,163,184,0.18)_1px,transparent_1px)] [background-size:36px_36px]" />

      <Navigation
        activeSection={activeSection}
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
      />

      <main>
        <Hero />
        <About />
        <Skills />
        <Education />
        <Projects />
        <Experience />
        <Contact />
      </main>

      <footer className="border-t border-slate-800/80 bg-[#090c10]/95 py-8">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-4 text-center text-sm text-slate-400 sm:px-6 lg:px-8">
          <p>© 2026 Yashdeep Tehlan</p>
          <p>Built with React, TypeScript, and Tailwind CSS.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
