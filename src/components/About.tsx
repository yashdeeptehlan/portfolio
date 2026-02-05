import React from 'react';
import { Globe, Sparkles, Target, Zap } from 'lucide-react';
import { personalInfo } from '../data/portfolio';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 lg:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <p className="font-mono text-xs tracking-[0.18em] text-cyan-300">01 / ABOUT</p>
        <h2 className="mt-3 text-3xl font-semibold text-slate-100 sm:text-4xl">Engineering mindset, product focus.</h2>

        <div className="mt-10 grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
          <article className="rounded-xl border border-slate-800 bg-[#0e131a]/75 p-6 sm:p-8">
            <p className="text-slate-300">
              Originally from <span className="text-slate-100">{personalInfo.originalLocation}</span>, I moved to
              <span className="text-cyan-300"> {personalInfo.location}</span> to build practical AI-driven systems.
            </p>
            <p className="mt-4 text-slate-400">
              I work across machine learning, backend engineering, data workflows, and blockchain. I care about building reliable systems that are useful in production, not just demos.
            </p>
            <p className="mt-4 text-slate-400">
              My approach is simple: understand the problem deeply, ship lean, then iterate fast with measurable improvements.
            </p>

            <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4">
              {[
                ['3+', 'Years Experience'],
                ['15+', 'Technologies'],
                ['5+', 'Projects'],
                ['2', 'Countries']
              ].map(([value, label]) => (
                <div key={label} className="rounded-md border border-slate-800 bg-[#0c1117] p-3 text-center">
                  <p className="font-mono text-xl text-cyan-300">{value}</p>
                  <p className="mt-1 text-xs text-slate-500">{label}</p>
                </div>
              ))}
            </div>
          </article>

          <div className="grid gap-3">
            {[
              { icon: Sparkles, title: 'Passion-Driven', text: 'Deep interest in AI, ML, and real-world innovation.' },
              { icon: Target, title: 'Solution-Focused', text: 'Build practical systems with clear outcomes.' },
              { icon: Zap, title: 'Execution Speed', text: 'Rapid learner with strong implementation pace.' },
              { icon: Globe, title: 'Global Perspective', text: 'Education and experience across India and Canada.' }
            ].map((item) => (
              <div key={item.title} className="rounded-md border border-slate-800 bg-[#0e131a]/75 p-4">
                <div className="flex items-center gap-3">
                  <item.icon className="h-4 w-4 text-cyan-300" />
                  <h3 className="text-sm font-medium text-slate-100">{item.title}</h3>
                </div>
                <p className="mt-2 text-sm text-slate-400">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
