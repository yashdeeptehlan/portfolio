import React, { useMemo, useState } from 'react';
import { Calendar, ExternalLink } from 'lucide-react';
import { projects } from '../data/portfolio';

const Projects: React.FC = () => {
  const categories = useMemo(() => ['All', ...Array.from(new Set(projects.map((project) => project.category)))], []);
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredProjects =
    selectedCategory === 'All' ? projects : projects.filter((project) => project.category === selectedCategory);

  return (
    <section id="projects" className="py-20 lg:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <p className="font-mono text-xs tracking-[0.18em] text-cyan-300">04 / PROJECTS</p>
        <h2 className="mt-3 text-3xl font-semibold text-slate-100 sm:text-4xl">Selected work.</h2>

        <div className="mt-8 flex flex-wrap gap-2">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`rounded-md border px-3 py-1.5 font-mono text-xs transition ${
                selectedCategory === category
                  ? 'border-cyan-400/50 bg-cyan-400/10 text-cyan-200'
                  : 'border-slate-700 text-slate-300 hover:border-slate-500'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="mt-8 grid gap-5 lg:grid-cols-2">
          {filteredProjects.map((project) => (
            <article key={project.id} className="rounded-xl border border-slate-800 bg-[#0e131a]/75 p-6">
              <div className="flex items-start justify-between gap-3">
                <div>
                  <p className="font-mono text-xs tracking-wide text-cyan-300">{project.category}</p>
                  <h3 className="mt-2 text-xl font-medium text-slate-100">{project.title}</h3>
                </div>
                <p className="inline-flex items-center gap-2 font-mono text-xs text-slate-400">
                  <Calendar className="h-3.5 w-3.5" />
                  {project.date}
                </p>
              </div>

              <p className="mt-4 text-sm leading-relaxed text-slate-300">{project.description}</p>

              <div className="mt-4 flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span key={tech} className="rounded border border-slate-700 px-2 py-1 font-mono text-[11px] text-slate-300">
                    {tech}
                  </span>
                ))}
              </div>

              <ul className="mt-5 space-y-2">
                {project.features.map((feature, index) => (
                  <li key={index} className="text-sm text-slate-400">
                    <span className="mr-2 text-cyan-300">#</span>
                    {feature}
                  </li>
                ))}
              </ul>

              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-flex items-center gap-2 font-mono text-xs tracking-wide text-cyan-300 transition hover:text-cyan-200"
                >
                  LIVE DEMO <ExternalLink className="h-3.5 w-3.5" />
                </a>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
