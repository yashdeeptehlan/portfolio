import React, { useMemo, useRef, useState } from 'react';
import { Calendar, ExternalLink } from 'lucide-react';
import { motion, AnimatePresence, useInView } from 'motion/react';
import { projects } from '../data/portfolio';
import { useCardTilt } from '../hooks/useCardTilt';

function ProjectCard({ project, index }: { project: (typeof import('../data/portfolio').projects)[number]; index: number }) {
  const { ref, onMouseMove, onMouseLeave } = useCardTilt();
  return (
    <motion.article
      ref={ref as React.RefObject<HTMLElement>}
      layout
      className="holo-card rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-[#0e131a]/75 p-6"
      data-hover
      initial={{ opacity: 0, y: 30, scale: 0.97 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.4, delay: index * 0.08 }}
      onMouseMove={onMouseMove as unknown as React.MouseEventHandler<HTMLElement>}
      onMouseLeave={onMouseLeave}
    >
      <div className="flex items-start justify-between gap-3">
        <div>
          <p className="font-mono text-xs tracking-wide text-cyan-600 dark:text-cyan-300">{project.category}</p>
          <h3 className="mt-2 text-xl font-medium text-slate-900 dark:text-slate-100">{project.title}</h3>
        </div>
        <p className="inline-flex items-center gap-2 font-mono text-xs text-slate-500 dark:text-slate-400">
          <Calendar className="h-3.5 w-3.5" />
          {project.date}
        </p>
      </div>
      <p className="mt-4 text-sm leading-relaxed text-slate-700 dark:text-slate-300">{project.description}</p>
      <div className="mt-4 flex flex-wrap gap-2">
        {project.technologies.map((tech) => (
          <span key={tech} className="rounded border border-slate-300 dark:border-slate-700 px-2 py-1 font-mono text-[11px] text-slate-600 dark:text-slate-300">
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
      {project.liveUrl && (
        <a
          href={project.liveUrl}
          target="_blank"
          rel="noopener noreferrer"
          data-hover
          className="mt-6 inline-flex items-center gap-2 font-mono text-xs tracking-wide text-cyan-600 dark:text-cyan-300 transition hover:text-cyan-700 dark:hover:text-cyan-200"
        >
          LIVE DEMO <ExternalLink className="h-3.5 w-3.5" />
        </a>
      )}
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
        <motion.h2
          className="mt-3 text-3xl font-semibold text-slate-900 dark:text-slate-100 sm:text-4xl"
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          variants={fadeUp}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          Selected work.
        </motion.h2>

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
