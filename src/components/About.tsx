import React from 'react';
import { Globe, Sparkles, Target, Zap } from 'lucide-react';
import { personalInfo } from '../data/portfolio';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 lg:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <p className="font-mono text-xs tracking-[0.18em] text-cyan-300">01 / ABOUT</p>
        <h2 className="mt-3 text-3xl font-semibold text-slate-100 sm:text-4xl">AI and backend systems for real production outcomes.</h2>

        <div className="mt-10 grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
          <article className="rounded-xl border border-slate-800 bg-[#0e131a]/75 p-6 sm:p-8">
            <p className="text-slate-300">
              Based in <span className="text-cyan-300">{personalInfo.location}</span>, I build and ship production-grade AI systems with strong backend foundations.
            </p>
            <p className="mt-4 text-slate-400">
              My work centers on LLM applications, RAG pipelines, SQL optimization workflows, and API-first backend architecture. I focus on practical delivery: measurable performance, maintainable code, and scalable system design.
            </p>
            <p className="mt-4 text-slate-400">
              I combine applied research rigor with product execution speed to take systems from concept to deployed production environments.
            </p>

            <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4">
              {[
                ['3', 'Core Roles'],
                ['3', 'Production Systems'],
                ['3', 'Advanced Degrees'],
                ['Canada', 'Work Eligible']
              ].map(([value, label]) => (
                <div key={label} className="rounded-md border border-slate-800 bg-[#0c1117] p-3 text-center">
                  <p className="font-mono text-base text-cyan-300 sm:text-xl">{value}</p>
                  <p className="mt-1 text-xs text-slate-500">{label}</p>
                </div>
              ))}
            </div>
          </article>

          <div className="grid gap-3">
            {[
              {
                icon: Sparkles,
                title: 'Production AI Focus',
                text: 'Hands-on delivery of LLM workflows, RAG systems, and backend AI integration.'
              },
              {
                icon: Target,
                title: 'Optimization Mindset',
                text: 'Strong focus on query optimization, response quality, and cost-efficient inference.'
              },
              {
                icon: Zap,
                title: 'Backend Execution',
                text: 'Builds clean APIs and deployable architectures with FastAPI and modern data stacks.'
              },
              {
                icon: Globe,
                title: 'Cross-Functional Delivery',
                text: 'Collaborates across research and engineering teams to ship practical systems.'
              }
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
