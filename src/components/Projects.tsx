import React, { useMemo, useRef, useState } from 'react';
import { Calendar, ExternalLink, Github } from 'lucide-react';
import { motion, AnimatePresence, useInView } from 'motion/react';
import { projects } from '../data/portfolio';
import { useCardTilt } from '../hooks/useCardTilt';

function ProductionBadge({ note }: { note: string }) {
  return (
    <div className="group relative inline-flex items-center gap-1.5">
      <span className="relative flex h-2 w-2">
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
        <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
      </span>
      <span className="font-mono text-[10px] font-semibold tracking-[0.18em] text-emerald-400 uppercase">
        In Production
      </span>
      {/* Tooltip */}
      <div className="pointer-events-none absolute left-0 top-6 z-20 w-max max-w-[240px] rounded-md border border-emerald-500/20 bg-slate-900 px-2.5 py-1.5 opacity-0 shadow-xl transition-opacity duration-150 group-hover:opacity-100">
        <p className="text-[10px] leading-snug text-emerald-300/80">{note}</p>
      </div>
    </div>
  );
}

function ProjectCard({ project, index }: { project: (typeof import('../data/portfolio').projects)[number]; index: number }) {
  const { ref, onMouseMove, onMouseLeave } = useCardTilt();
  const isProd = project.inProduction;

  return (
    <motion.article
      ref={ref as React.RefObject<HTMLElement>}
      layout
      className={`holo-card rounded-xl border p-6 transition-shadow ${
        isProd
          ? 'border-emerald-500/25 dark:border-emerald-500/20 bg-white dark:bg-[#0b1510]/80 shadow-[0_0_0_1px_rgba(52,211,153,0.05),0_8px_32px_-8px_rgba(52,211,153,0.10)]'
          : 'border-slate-200 dark:border-slate-800 bg-white dark:bg-[#0e131a]/75'
      }`}
      data-hover
      initial={{ opacity: 0, y: 30, scale: 0.97 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.4, delay: index * 0.08 }}
      onMouseMove={onMouseMove as unknown as React.MouseEventHandler<HTMLElement>}
      onMouseLeave={onMouseLeave}
    >
      {/* Top row: category + production badge on left, date on right */}
      <div className="flex items-start justify-between gap-3">
        <div className="flex flex-col gap-1.5">
          <p className="font-mono text-xs tracking-wide text-cyan-600 dark:text-cyan-300">{project.category}</p>
          {isProd && <ProductionBadge note={project.productionNote ?? ''} />}
        </div>
        <p className="inline-flex shrink-0 items-center gap-1.5 font-mono text-xs text-slate-500 dark:text-slate-400">
          <Calendar className="h-3.5 w-3.5" />
          {project.date}
        </p>
      </div>

      <h3 className="mt-3 text-xl font-medium text-slate-900 dark:text-slate-100">{project.title}</h3>
      <p className="mt-3 text-sm leading-relaxed text-slate-700 dark:text-slate-300">{project.description}</p>

      <div className="mt-4 flex flex-wrap gap-2">
        {project.technologies.map((tech) => (
          <span
            key={tech}
            className="rounded border border-slate-300 dark:border-slate-700 px-2 py-1 font-mono text-[11px] text-slate-600 dark:text-slate-300"
          >
            {tech}
          </span>
        ))}
      </div>

      <ul className="mt-5 space-y-2">
        {project.features.map((feature, idx) => (
          <li key={idx} className="text-sm text-slate-600 dark:text-slate-400">
            <span className="mr-2 text-cyan-600 dark:text-cyan-300">#</span>
            {feature}
          </li>
        ))}
      </ul>

      <div className="mt-6 flex items-center gap-4">
        {project.liveUrl && (
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            data-hover
            className="inline-flex items-center gap-2 font-mono text-xs tracking-wide text-cyan-600 dark:text-cyan-300 transition hover:text-cyan-700 dark:hover:text-cyan-200"
          >
            LIVE DEMO <ExternalLink className="h-3.5 w-3.5" />
          </a>
        )}
        {project.githubUrl && (
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            data-hover
            className="inline-flex items-center gap-2 font-mono text-xs tracking-wide text-slate-500 dark:text-slate-400 transition hover:text-slate-700 dark:hover:text-slate-200"
          >
            <Github className="h-3.5 w-3.5" /> SOURCE
          </a>
        )}
      </div>
    </motion.article>
  );
}

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 }
};

const Projects: React.FC = () => {
  const categories = useMemo(() => ['All', ...Array.from(new Set(projects.map((p) => p.category)))], []);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const sectionRef = useRef<HTMLElement>(null);
  const inView = useInView(sectionRef, { once: true, margin: '-80px' });

  const filteredProjects =
    selectedCategory === 'All' ? projects : projects.filter((p) => p.category === selectedCategory);

  const prodCount = projects.filter((p) => p.inProduction).length;

  return (
    <section id="projects" ref={sectionRef} className="py-20 lg:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <motion.p
          className="font-mono text-xs tracking-[0.18em] text-cyan-600 dark:text-cyan-300"
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          variants={fadeUp}
          transition={{ duration: 0.5 }}
        >
          04 / PROJECTS
        </motion.p>

        <div className="mt-3 flex flex-wrap items-end justify-between gap-4">
          <motion.h2
            className="text-3xl font-semibold text-slate-900 dark:text-slate-100 sm:text-4xl"
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            variants={fadeUp}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Selected work.
          </motion.h2>

          {/* Production stat pill */}
          <motion.div
            className="flex items-center gap-2 rounded-full border border-emerald-500/25 bg-emerald-500/5 px-3 py-1.5"
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            variants={fadeUp}
            transition={{ duration: 0.5, delay: 0.15 }}
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
            </span>
            <span className="font-mono text-xs text-emerald-600 dark:text-emerald-400">
              {prodCount}/{projects.length} shipped to production
            </span>
          </motion.div>
        </div>

        <motion.div
          className="mt-8 flex flex-wrap gap-2"
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          variants={fadeUp}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {categories.map((category) => (
            <motion.button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`rounded-md border px-3 py-1.5 font-mono text-xs transition ${
                selectedCategory === category
                  ? 'border-cyan-500/50 dark:border-cyan-400/50 bg-cyan-500/10 dark:bg-cyan-400/10 text-cyan-700 dark:text-cyan-200'
                  : 'border-slate-300 dark:border-slate-700 text-slate-600 dark:text-slate-300 hover:border-slate-400 dark:hover:border-slate-500'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.96 }}
            >
              {category}
            </motion.button>
          ))}
        </motion.div>

        <motion.div className="mt-8 grid gap-5 lg:grid-cols-2" layout>
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, i) => (
              <ProjectCard key={project.id} project={project} index={i} />
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
