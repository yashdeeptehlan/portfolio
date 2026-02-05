import React from 'react';
import { Calendar, GraduationCap, MapPin } from 'lucide-react';
import { education } from '../data/portfolio';

const Education: React.FC = () => {
  return (
    <section id="education" className="py-20 lg:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <p className="font-mono text-xs tracking-[0.18em] text-cyan-300">03 / EDUCATION</p>
        <h2 className="mt-3 text-3xl font-semibold text-slate-100 sm:text-4xl">Academic foundations.</h2>

        <div className="mt-10 space-y-4">
          {education.map((edu) => (
            <article key={edu.id} className="rounded-xl border border-slate-800 bg-[#0e131a]/75 p-6 sm:p-7">
              <div className="flex flex-wrap items-start justify-between gap-3">
                <div>
                  <p className="text-lg font-medium text-slate-100">{edu.degree}</p>
                  <p className="mt-1 text-slate-300">{edu.institution}</p>
                </div>
                <span className="rounded border border-slate-700 px-2 py-1 font-mono text-xs text-slate-300">{edu.status}</span>
              </div>

              <div className="mt-4 flex flex-wrap gap-4 text-sm text-slate-400">
                <p className="inline-flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-cyan-300" />
                  {edu.location}
                </p>
                <p className="inline-flex items-center gap-2">
                  <Calendar className="h-4 w-4 text-cyan-300" />
                  {edu.duration}
                </p>
                <p className="inline-flex items-center gap-2">
                  <GraduationCap className="h-4 w-4 text-cyan-300" />
                  {edu.type}
                </p>
              </div>

              <div className="mt-5 rounded-md border border-slate-800 bg-[#0b1016] p-4">
                <p className="font-mono text-xs tracking-wide text-slate-500">FOCUS AREAS</p>
                <p className="mt-2 text-sm leading-relaxed text-slate-300">{edu.focus}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
