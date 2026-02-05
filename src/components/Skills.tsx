import React, { useState } from 'react';
import { Brain, Cloud, Code, Database, Wrench } from 'lucide-react';
import { skills } from '../data/portfolio';

const Skills: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('Programming');

  const categoryIcons = {
    Programming: Code,
    'ML & Data': Brain,
    'Databases & Pipelines': Database,
    Frameworks: Wrench,
    'Cloud & Tools': Cloud,
    Other: Brain
  };

  return (
    <section id="skills" className="py-20 lg:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <p className="font-mono text-xs tracking-[0.18em] text-cyan-300">02 / SKILLS</p>
        <h2 className="mt-3 text-3xl font-semibold text-slate-100 sm:text-4xl">Technical stack and depth.</h2>

        <div className="mt-10 grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-1">
            {Object.keys(skills).map((category) => {
              const Icon = categoryIcons[category as keyof typeof categoryIcons];
              return (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`flex items-center gap-3 rounded-md border px-4 py-3 text-left transition ${
                    activeCategory === category
                      ? 'border-cyan-400/40 bg-cyan-400/10 text-cyan-200'
                      : 'border-slate-800 bg-[#0e131a]/75 text-slate-300 hover:border-slate-700'
                  }`}
                >
                  <Icon className="h-4 w-4" />
                  <span className="font-mono text-xs tracking-wide">{category}</span>
                </button>
              );
            })}
          </div>

          <div className="rounded-xl border border-slate-800 bg-[#0e131a]/75 p-6 sm:p-8">
            <div className="mb-6 flex items-center gap-3">
              {React.createElement(categoryIcons[activeCategory as keyof typeof categoryIcons], {
                className: 'h-5 w-5 text-cyan-300'
              })}
              <h3 className="font-mono text-sm tracking-wide text-slate-200">{activeCategory}</h3>
            </div>

            <div className="space-y-5">
              {skills[activeCategory as keyof typeof skills].map((skill) => (
                <div key={skill.name}>
                  <div className="mb-2 flex items-center justify-between text-sm">
                    <span className="text-slate-300">{skill.name}</span>
                    <span className="font-mono text-xs text-cyan-300">{skill.level}%</span>
                  </div>
                  <div className="h-2 w-full overflow-hidden rounded-full bg-slate-800">
                    <div className="h-full rounded-full bg-gradient-to-r from-cyan-400 to-emerald-400" style={{ width: `${skill.level}%` }} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
