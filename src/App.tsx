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
    <div className="min-h-screen bg-coffee-bean text-white">
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

      {/* Footer */}
      <footer className="bg-coffee-bean border-t border-wisteria/20 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-light-cyan/70 text-sm">
              © 2025 Yashdeep Tehlan. Built with React, TypeScript, and Tailwind CSS.
            </p>
            <p className="text-light-cyan/50 text-xs mt-2">
              Crafted with passion for innovation and excellence.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;