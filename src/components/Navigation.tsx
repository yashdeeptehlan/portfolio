import React from 'react';
import { Menu, Moon, Sun, X, Github, Linkedin } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { personalInfo } from '../data/portfolio';

interface NavigationProps {
  activeSection: string;
  isMenuOpen: boolean;
  setIsMenuOpen: (open: boolean) => void;
  isDark: boolean;
  toggleTheme: () => void;
}

const Navigation: React.FC<NavigationProps> = ({ activeSection, isMenuOpen, setIsMenuOpen, isDark, toggleTheme }) => {
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
    <motion.nav
      className="fixed left-0 right-0 top-0 z-50 border-b border-slate-200/80 dark:border-slate-800/80 bg-white/90 dark:bg-[#090c10]/90 backdrop-blur"
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <motion.button
            onClick={() => scrollToSection('hero')}
            className="font-mono text-sm tracking-[0.18em] text-slate-800 dark:text-slate-200 transition hover:text-cyan-600 dark:hover:text-cyan-300"
            whileHover={{ scale: 1.04 }}
          >
            YASHDEEP.T
          </motion.button>

          <div className="hidden items-center gap-6 lg:flex">
            {navItems.map((item) => (
              <button
                key={item.id}
                data-hover
                onClick={() => scrollToSection(item.id)}
                className={`relative font-mono text-xs tracking-wide transition ${
                  activeSection === item.id
                    ? 'text-cyan-600 dark:text-cyan-300'
                    : 'text-slate-500 hover:text-slate-800 dark:text-slate-400 dark:hover:text-slate-200'
                }`}
              >
                {item.index}.{item.label}
                {activeSection === item.id && (
                  <motion.span
                    layoutId="nav-indicator"
                    className="absolute -bottom-1 left-0 right-0 h-px bg-cyan-600 dark:bg-cyan-400"
                    transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                  />
                )}
              </button>
            ))}
          </div>

          <div className="hidden items-center gap-2 lg:flex">
            <motion.a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-md border border-slate-300 dark:border-slate-700 p-2 text-slate-600 dark:text-slate-300 transition hover:border-cyan-500/60 dark:hover:border-cyan-400/60 hover:text-cyan-600 dark:hover:text-cyan-300"
              aria-label="LinkedIn"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <Linkedin className="h-4 w-4" />
            </motion.a>
            <motion.a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-md border border-slate-300 dark:border-slate-700 p-2 text-slate-600 dark:text-slate-300 transition hover:border-cyan-500/60 dark:hover:border-cyan-400/60 hover:text-cyan-600 dark:hover:text-cyan-300"
              aria-label="GitHub"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <Github className="h-4 w-4" />
            </motion.a>
            <motion.button
              onClick={toggleTheme}
              className="rounded-md border border-slate-300 dark:border-slate-700 p-2 text-slate-600 dark:text-slate-300 transition hover:border-cyan-500/60 dark:hover:border-cyan-400/60 hover:text-cyan-600 dark:hover:text-cyan-300"
              aria-label="Toggle theme"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              {isDark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
            </motion.button>
          </div>

          <div className="flex items-center gap-2 lg:hidden">
            <motion.button
              onClick={toggleTheme}
              className="rounded-md border border-slate-300 dark:border-slate-700 p-2 text-slate-600 dark:text-slate-300 transition hover:border-cyan-500/60 dark:hover:border-cyan-400/60 hover:text-cyan-600 dark:hover:text-cyan-300"
              aria-label="Toggle theme"
              whileTap={{ scale: 0.95 }}
            >
              {isDark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
            </motion.button>
            <motion.button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="rounded-md border border-slate-300 dark:border-slate-700 p-2 text-slate-600 dark:text-slate-300 transition hover:text-slate-900 dark:hover:text-white"
              aria-label="Toggle menu"
              whileTap={{ scale: 0.95 }}
            >
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </motion.button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className="border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-[#090c10] px-4 py-4 lg:hidden"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
          >
            <div className="mx-auto flex max-w-6xl flex-col gap-2">
              {navItems.map((item, i) => (
                <motion.button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`w-full rounded-md border px-3 py-2 text-left font-mono text-xs tracking-wide transition ${
                    activeSection === item.id
                      ? 'border-cyan-400/50 text-cyan-600 dark:text-cyan-300'
                      : 'border-slate-300 dark:border-slate-700 text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-slate-100'
                  }`}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.04 }}
                >
                  {item.index}.{item.label}
                </motion.button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navigation;
