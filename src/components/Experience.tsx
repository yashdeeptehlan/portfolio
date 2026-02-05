import React from 'react';
import { Award, Calendar, MapPin } from 'lucide-react';
import { certifications, experience } from '../data/portfolio';

const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-20 lg:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <p className="font-mono text-xs tracking-[0.18em] text-cyan-300">05 / EXPERIENCE</p>
        <h2 className="mt-3 text-3xl font-semibold text-slate-100 sm:text-4xl">Professional work and impact.</h2>

        <div className="mt-10 space-y-4">
          {experience.map((exp) => (
            <article key={exp.id} className="rounded-xl border border-slate-800 bg-[#0e131a]/75 p-6 sm:p-7">
              <div className="flex flex-wrap items-start justify-between gap-3">
                <div>
                  <h3 className="text-xl font-medium text-slate-100">{exp.title}</h3>
                  <p className="mt-1 text-slate-300">{exp.company}</p>
                </div>
                <span className="rounded border border-slate-700 px-2 py-1 font-mono text-xs capitalize text-slate-300">
                  {exp.type}
                </span>
              </div>

              <div className="mt-4 flex flex-wrap gap-4 text-sm text-slate-400">
                <p className="inline-flex items-center gap-2">
                  <Calendar className="h-4 w-4 text-cyan-300" />
                  {exp.duration}
                </p>
                <p className="inline-flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-cyan-300" />
                  {exp.location}
                </p>
              </div>

              <ul className="mt-5 space-y-2">
                {exp.achievements.map((achievement, index) => (
                  <li key={index} className="text-sm leading-relaxed text-slate-300">
                    <span className="mr-2 text-cyan-300">+</span>
                    {achievement}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        {certifications.length > 0 && (
          <div className="mt-12">
            <h3 className="font-mono text-xs tracking-[0.16em] text-slate-400">CERTIFICATIONS</h3>
            <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {certifications.map((cert) => (
                <div key={cert.id} className="rounded-md border border-slate-800 bg-[#0d1218] p-4">
                  <div className="mb-2 inline-flex rounded border border-cyan-400/40 bg-cyan-400/10 p-1.5">
                    <Award className="h-3.5 w-3.5 text-cyan-300" />
                  </div>
                  <p className="text-sm text-slate-100">{cert.title}</p>
                  <p className="mt-1 text-xs text-slate-400">{cert.issuer}</p>
                  <p className="mt-1 font-mono text-xs text-cyan-300">{cert.year}</p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Experience;
