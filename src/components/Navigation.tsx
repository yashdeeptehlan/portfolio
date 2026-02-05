import React from 'react';
import { Menu, X, Download, Github, Linkedin, Mail } from 'lucide-react';
import { personalInfo } from '../data/portfolio';

interface NavigationProps {
  activeSection: string;
  isMenuOpen: boolean;
  setIsMenuOpen: (open: boolean) => void;
}

const Navigation: React.FC<NavigationProps> = ({ activeSection, isMenuOpen, setIsMenuOpen }) => {
  const navItems = [
    { id: 'hero', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'education', label: 'Education' },
    { id: 'projects', label: 'Projects' },
    { id: 'experience', label: 'Experience' },
    { id: 'contact', label: 'Contact' }
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-coffee-bean/95 backdrop-blur-md border-b border-wisteria/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <button
              onClick={() => scrollToSection('hero')}
              className="text-2xl font-bold bg-gradient-to-r from-tea-green to-wisteria bg-clip-text text-transparent hover:scale-105 transition-transform"
            >
              YT
            </button>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:block">
            <div className="flex items-center space-x-8">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`px-3 py-2 text-sm font-medium transition-colors relative ${
                    activeSection === item.id
                      ? 'text-neon-violet'
                      : 'text-light-cyan hover:text-white'
                  }`}
                >
                  {item.label}
                  {activeSection === item.id && (
                    <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-tea-green to-neon-violet rounded-full"></div>
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* Desktop Actions */}
          <div className="hidden lg:flex items-center space-x-4">
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-light-cyan/70 hover:text-neon-violet transition-colors p-2 rounded-lg hover:bg-wisteria/10"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-light-cyan/70 hover:text-neon-violet transition-colors p-2 rounded-lg hover:bg-wisteria/10"
            >
              <Github className="w-5 h-5" />
            </a>
            <button className="flex items-center space-x-2 bg-gradient-to-r from-wisteria to-neon-violet px-6 py-2.5 rounded-lg text-white text-sm font-medium hover:from-wisteria/80 hover:to-neon-violet/80 transition-all hover:scale-105 shadow-lg">
              <Download className="w-4 h-4" />
              <span>Resume</span>
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-light-cyan/70 hover:text-white p-2 rounded-lg hover:bg-wisteria/10 transition-colors"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="lg:hidden bg-coffee-bean/98 backdrop-blur-md border-t border-wisteria/20">
          <div className="px-4 pt-2 pb-4 space-y-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`block w-full text-left px-4 py-3 text-base font-medium rounded-lg transition-colors ${
                  activeSection === item.id
                    ? 'text-neon-violet bg-wisteria/10'
                    : 'text-light-cyan hover:text-white hover:bg-wisteria/5'
                }`}
              >
                {item.label}
              </button>
            ))}
            
            {/* Mobile social links */}
            <div className="flex items-center justify-center space-x-6 pt-6 pb-2">
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-light-cyan/70 hover:text-neon-violet transition-colors p-2 rounded-lg hover:bg-wisteria/10"
              >
                <Linkedin className="w-6 h-6" />
              </a>
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-light-cyan/70 hover:text-neon-violet transition-colors p-2 rounded-lg hover:bg-wisteria/10"
              >
                <Github className="w-6 h-6" />
              </a>
              <a
                href={`mailto:${personalInfo.email}`}
                className="text-light-cyan/70 hover:text-neon-violet transition-colors p-2 rounded-lg hover:bg-wisteria/10"
              >
                <Mail className="w-6 h-6" />
              </a>
            </div>
            
            {/* Mobile resume button */}
            <button className="w-full flex items-center justify-center space-x-2 bg-gradient-to-r from-wisteria to-neon-violet px-6 py-3 rounded-lg text-white font-medium hover:from-wisteria/80 hover:to-neon-violet/80 transition-all mt-4">
              <Download className="w-4 h-4" />
              <span>Download Resume</span>
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;