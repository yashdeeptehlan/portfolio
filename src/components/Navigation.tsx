import React from 'react';
import { Menu, X, Github, Linkedin } from 'lucide-react';
import { personalInfo } from '../data/portfolio';

interface NavigationProps {
  activeSection: string;
  isMenuOpen: boolean;
  setIsMenuOpen: (open: boolean) => void;
}

const Navigation: React.FC<NavigationProps> = ({ activeSection, isMenuOpen, setIsMenuOpen }) => {
  const navItems = [
    { id: 'hero', label: 'Home', index: '00' },
    { id: 'about', label: 'About', index: '01' },
    { id: 'skills', label: 'Skills', index: '02' },
    { id: 'education', label: 'Education', index: '03' },
    { id: 'projects', label: 'Projects', index: '04' },
    { id: 'experience', label: 'Experience', index: '05' },
    { id: 'contact', label: 'Contact', index: '06' }
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <nav className="fixed left-0 right-0 top-0 z-50 border-b border-slate-800/80 bg-[#090c10]/90 backdrop-blur">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <button
            onClick={() => scrollToSection('hero')}
            className="font-mono text-sm tracking-[0.18em] text-slate-200 transition hover:text-cyan-300"
          >
            YASHDEEP.T
          </button>

          <div className="hidden items-center gap-6 lg:flex">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`font-mono text-xs tracking-wide transition ${
                  activeSection === item.id ? 'text-cyan-300' : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                {item.index}.{item.label}
              </button>
            ))}
          </div>

          <div className="hidden items-center gap-2 lg:flex">
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-md border border-slate-700 p-2 text-slate-300 transition hover:border-cyan-400/60 hover:text-cyan-300"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-4 w-4" />
            </a>
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-md border border-slate-700 p-2 text-slate-300 transition hover:border-cyan-400/60 hover:text-cyan-300"
              aria-label="GitHub"
            >
              <Github className="h-4 w-4" />
            </a>
          </div>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="rounded-md border border-slate-700 p-2 text-slate-300 transition hover:text-white lg:hidden"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="border-t border-slate-800 bg-[#090c10] px-4 py-4 lg:hidden">
          <div className="mx-auto flex max-w-6xl flex-col gap-2">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`w-full rounded-md border px-3 py-2 text-left font-mono text-xs tracking-wide transition ${
                  activeSection === item.id
                    ? 'border-cyan-400/50 text-cyan-300'
                    : 'border-slate-700 text-slate-300 hover:text-slate-100'
                }`}
              >
                {item.index}.{item.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
