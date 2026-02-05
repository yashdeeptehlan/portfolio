import React, { useEffect, useState } from 'react';
import { ChevronDown, ExternalLink, Mail, MapPin, Phone } from 'lucide-react';
import { personalInfo } from '../data/portfolio';

const Hero: React.FC = () => {
  const [currentText, setCurrentText] = useState('');
  const [textIndex, setTextIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  const texts = ['AI / Backend Engineer', 'LLM & RAG Systems', 'FastAPI & SQL Optimization', 'Production AI Deployment'];

  useEffect(() => {
    const typeSpeed = isDeleting ? 45 : 90;
    const pauseTime = isDeleting ? 500 : 1800;

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
    <section id="hero" className="relative flex min-h-screen items-center pt-24">
      <div className="mx-auto grid w-full max-w-6xl gap-12 px-4 pb-16 sm:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16 lg:px-8">
        <div>
          <p className="mb-4 font-mono text-xs tracking-[0.2em] text-cyan-300">{personalInfo.title.toUpperCase()}</p>
          <h1 className="text-4xl font-semibold leading-tight text-slate-100 sm:text-6xl">{personalInfo.name}</h1>
          <p className="mt-5 font-mono text-lg text-slate-300 sm:text-xl">
            <span className="text-cyan-300">{currentText}</span>
            <span className="ml-1 animate-pulse text-slate-500">|</span>
          </p>

          <p className="mt-8 max-w-2xl text-base leading-relaxed text-slate-300 sm:text-lg">{personalInfo.tagline}</p>
          <p className="mt-4 max-w-2xl text-sm leading-relaxed text-slate-400 sm:text-base">{personalInfo.description}</p>

          <div className="mt-10 flex flex-wrap gap-3">
            <button
              onClick={() => scrollToSection('projects')}
              className="rounded-md border border-cyan-400/50 bg-cyan-400/10 px-5 py-2.5 font-mono text-xs tracking-wide text-cyan-200 transition hover:border-cyan-300 hover:bg-cyan-300/15"
            >
              VIEW PROJECTS
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="rounded-md border border-slate-700 px-5 py-2.5 font-mono text-xs tracking-wide text-slate-200 transition hover:border-slate-500"
            >
              CONTACT
            </button>
          </div>
        </div>

        <aside className="rounded-xl border border-slate-800 bg-[#0e131a]/80 p-6">
          <p className="mb-4 font-mono text-xs tracking-[0.16em] text-slate-400">SYSTEM PROFILE</p>
          <div className="space-y-4 text-sm text-slate-300">
            <div className="flex items-start gap-3 border-b border-slate-800 pb-3">
              <MapPin className="mt-0.5 h-4 w-4 text-cyan-300" />
              <div>
                <p className="font-mono text-xs text-slate-500">LOCATION</p>
                <p>{personalInfo.location}</p>
              </div>
            </div>
            <a
              href={`mailto:${personalInfo.email}`}
              className="flex items-start gap-3 border-b border-slate-800 pb-3 transition hover:text-cyan-300"
            >
              <Mail className="mt-0.5 h-4 w-4 text-cyan-300" />
              <div>
                <p className="font-mono text-xs text-slate-500">EMAIL</p>
                <p>{personalInfo.email}</p>
              </div>
            </a>
            <a href={`tel:${personalInfo.phone}`} className="flex items-start gap-3 transition hover:text-cyan-300">
              <Phone className="mt-0.5 h-4 w-4 text-cyan-300" />
              <div>
                <p className="font-mono text-xs text-slate-500">PHONE</p>
                <p>{personalInfo.phone}</p>
              </div>
            </a>
          </div>

          <a
            href={personalInfo.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex items-center gap-2 font-mono text-xs tracking-wide text-cyan-300 transition hover:text-cyan-200"
          >
            OPEN LINKEDIN <ExternalLink className="h-3.5 w-3.5" />
          </a>
        </aside>
      </div>

      <button
        onClick={() => scrollToSection('about')}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-slate-500 transition hover:text-cyan-300"
        aria-label="Scroll to about section"
      >
        <ChevronDown className="h-6 w-6 animate-bounce" />
      </button>
    </section>
  );
};

export default Hero;
