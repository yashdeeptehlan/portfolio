import React, { useState, useEffect } from 'react';
import { ChevronDown, MapPin, Mail, Phone, ExternalLink, Sparkles } from 'lucide-react';
import { personalInfo } from '../data/portfolio';

const Hero: React.FC = () => {
  const [currentText, setCurrentText] = useState('');
  const [textIndex, setTextIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  const texts = ['AI/ML Developer', 'Blockchain Enthusiast', 'Data Scientist', 'Innovation Builder'];

  useEffect(() => {
    const typeSpeed = isDeleting ? 50 : 100;
    const pauseTime = isDeleting ? 500 : 2000;

    const timer = setTimeout(() => {
      if (!isDeleting && charIndex < texts[textIndex].length) {
        setCurrentText(texts[textIndex].substring(0, charIndex + 1));
        setCharIndex(charIndex + 1);
      } else if (isDeleting && charIndex > 0) {
        setCurrentText(texts[textIndex].substring(0, charIndex - 1));
        setCharIndex(charIndex - 1);
      } else if (!isDeleting && charIndex === texts[textIndex].length) {
        setTimeout(() => setIsDeleting(true), pauseTime);
      } else if (isDeleting && charIndex === 0) {
        setIsDeleting(false);
        setTextIndex((textIndex + 1) % texts.length);
      }
    }, typeSpeed);

    return () => clearTimeout(timer);
  }, [charIndex, isDeleting, textIndex, texts]);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-coffee-bean">
      {/* Enhanced background gradients */}
      <div className="absolute inset-0 bg-gradient-to-br from-coffee-bean via-coffee-bean/80 to-coffee-bean"></div>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-wisteria/20 via-transparent to-transparent"></div>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-neon-violet/20 via-transparent to-transparent"></div>
      
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-tea-green/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-neon-violet/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-light-cyan/5 rounded-full blur-3xl animate-pulse"></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Main content */}
        <div className="space-y-8">
          {/* Location with enhanced styling */}
          <div className="flex items-center justify-center space-x-2 text-neon-violet mb-6">
            <div className="flex items-center space-x-2 bg-wisteria/10 backdrop-blur-sm px-4 py-2 rounded-full border border-wisteria/30">
              <MapPin className="w-4 h-4" />
              <span className="text-sm font-medium">{personalInfo.location}</span>
            </div>
          </div>

          {/* Name and title with enhanced typography */}
          <div className="space-y-6">
            <div className="flex items-center justify-center space-x-3 mb-4">
              <Sparkles className="w-6 h-6 text-tea-green animate-pulse" />
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold">
                <span className="bg-gradient-to-r from-white via-light-cyan to-tea-green bg-clip-text text-transparent">
                  {personalInfo.name}
                </span>
              </h1>
              <Sparkles className="w-6 h-6 text-tea-green animate-pulse" />
            </div>
            
            <div className="h-16 flex items-center justify-center">
              <p className="text-xl sm:text-2xl lg:text-3xl text-light-cyan">
                <span className="text-neon-violet font-medium">{currentText}</span>
                <span className="animate-pulse text-wisteria ml-1">|</span>
              </p>
            </div>
          </div>

          {/* Enhanced tagline */}
          <div className="max-w-4xl mx-auto">
            <p className="text-lg sm:text-xl lg:text-2xl text-light-cyan leading-relaxed font-light">
              {personalInfo.tagline}
            </p>
          </div>

          {/* Description with better spacing */}
          <div className="max-w-3xl mx-auto">
            <p className="text-light-cyan/70 text-base sm:text-lg leading-relaxed">
              {personalInfo.description}
            </p>
          </div>

          {/* Enhanced CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6 pt-8">
            <button
              onClick={() => scrollToSection('projects')}
              className="w-full sm:w-auto bg-gradient-to-r from-wisteria to-neon-violet px-8 py-4 rounded-xl text-white font-medium hover:from-wisteria/80 hover:to-neon-violet/80 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-neon-violet/25 border border-neon-violet/20"
            >
              View Projects
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="w-full sm:w-auto border border-wisteria/50 bg-wisteria/10 backdrop-blur-sm px-8 py-4 rounded-xl text-light-cyan hover:bg-wisteria/20 hover:border-wisteria/70 transform hover:scale-105 transition-all duration-300"
            >
              Contact Me
            </button>
          </div>

          {/* Enhanced quick contact info */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-12 max-w-2xl mx-auto">
            <a
              href={`mailto:${personalInfo.email}`}
              className="flex items-center justify-center space-x-2 bg-wisteria/10 backdrop-blur-sm border border-wisteria/30 rounded-lg px-4 py-3 hover:bg-wisteria/20 hover:border-neon-violet/50 transition-all text-sm text-light-cyan/70 hover:text-neon-violet"
            >
              <Mail className="w-4 h-4" />
              <span className="hidden sm:inline">{personalInfo.email}</span>
              <span className="sm:hidden">Email</span>
            </a>
            <a
              href={`tel:${personalInfo.phone}`}
              className="flex items-center justify-center space-x-2 bg-wisteria/10 backdrop-blur-sm border border-wisteria/30 rounded-lg px-4 py-3 hover:bg-wisteria/20 hover:border-neon-violet/50 transition-all text-sm text-light-cyan/70 hover:text-neon-violet"
            >
              <Phone className="w-4 h-4" />
              <span className="hidden sm:inline">{personalInfo.phone}</span>
              <span className="sm:hidden">Phone</span>
            </a>
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center space-x-2 bg-wisteria/10 backdrop-blur-sm border border-wisteria/30 rounded-lg px-4 py-3 hover:bg-wisteria/20 hover:border-neon-violet/50 transition-all text-sm text-light-cyan/70 hover:text-neon-violet"
            >
              <ExternalLink className="w-4 h-4" />
              <span>LinkedIn</span>
            </a>
          </div>
        </div>

        {/* Enhanced scroll indicator */}
        <button
          onClick={() => scrollToSection('about')}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-light-cyan/70 hover:text-white transition-colors animate-bounce bg-wisteria/10 backdrop-blur-sm rounded-full p-3 border border-wisteria/30 hover:border-neon-violet/50"
        >
          <ChevronDown className="w-6 h-6" />
        </button>
      </div>
    </section>
  );
};

export default Hero;