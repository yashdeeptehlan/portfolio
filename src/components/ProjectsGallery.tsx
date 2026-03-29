import React, { useRef } from 'react';
import { motion, useInView } from 'motion/react';
import StackedPanels from './ui/stacked-panels-cursor-intereactive-component';

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

const ProjectsGallery: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const inView = useInView(sectionRef, { once: true, margin: '-100px' });

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden py-12 bg-slate-100 dark:bg-[#060910]"
    >
      {/* Subtle radial glow behind the panels */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse 70% 50% at 50% 60%, rgba(34,211,238,0.04) 0%, transparent 70%)',
        }}
        aria-hidden="true"
      />

      {/* Section header */}
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 mb-6">
        <motion.p
          className="font-mono text-xs tracking-[0.18em] text-cyan-600 dark:text-cyan-300"
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          variants={fadeUp}
          transition={{ duration: 0.5 }}
        >
          IN PRODUCTION
        </motion.p>
        <motion.h2
          className="mt-2 text-3xl font-semibold text-slate-900 dark:text-slate-100 sm:text-4xl"
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          variants={fadeUp}
          transition={{ duration: 0.5, delay: 0.08 }}
        >
          Work I've shipped.
        </motion.h2>
        <motion.p
          className="mt-2 text-slate-600 dark:text-slate-400 text-sm max-w-lg"
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          variants={fadeUp}
          transition={{ duration: 0.5, delay: 0.14 }}
        >
          Five production systems — trading bots, AI voice platforms, rideshare apps, crypto exchanges, and developer tooling.
          Move your cursor to interact.
        </motion.p>
      </div>

      {/* Panel stage */}
      <motion.div
        className="w-full"
        style={{ height: '560px' }}
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <StackedPanels />
      </motion.div>

      {/* Project name strip */}
      <motion.div
        className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 mt-6"
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
        variants={fadeUp}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        <div className="flex flex-wrap gap-x-6 gap-y-2 justify-center">
          {[
            { name: 'PromptForge', color: 'text-cyan-600 dark:text-cyan-400', tag: 'MCP · Python' },
            { name: 'Polymarket Bot', color: 'text-emerald-600 dark:text-emerald-400', tag: 'Trading · FastAPI' },
            { name: 'AI-Interviewer', color: 'text-violet-600 dark:text-violet-400', tag: 'Voice AI · Next.js' },
            { name: 'Hitch', color: 'text-emerald-600 dark:text-emerald-300', tag: 'Rideshare · React' },
            { name: 'VaultX', color: 'text-amber-600 dark:text-amber-400', tag: 'Exchange · Escrow' },
          ].map(({ name, color, tag }) => (
            <div key={name} className="flex items-center gap-1.5">
              <span className={`text-xs font-medium ${color}`}>{name}</span>
              <span className="text-[10px] text-slate-500 dark:text-slate-600">{tag}</span>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default ProjectsGallery;
