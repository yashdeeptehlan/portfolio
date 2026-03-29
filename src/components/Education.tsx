import React, { useRef } from 'react';
import { Calendar, GraduationCap, MapPin } from 'lucide-react';
import { motion, useInView } from 'motion/react';
import { education } from '../data/portfolio';
import { useCardTilt } from '../hooks/useCardTilt';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 }
};

type Edu = (typeof education)[number];

function EducationCard({ edu }: { edu: Edu }) {
  const { ref, onMouseMove, onMouseLeave } = useCardTilt();
  return (
    <motion.article
      ref={ref as React.RefObject<HTMLElement>}
      variants={fadeUp}
      className="holo-card rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-[#0e131a]/75 p-6 sm:p-7"
      data-hover
      onMouseMove={onMouseMove as unknown as React.MouseEventHandler<HTMLElement>}
      onMouseLeave={onMouseLeave}
    >
      <div className="flex flex-wrap items-start justify-between gap-3">
        <div>
          <p className="text-lg font-medium text-slate-900 dark:text-slate-100">{edu.degree}</p>
          <p className="mt-1 text-slate-700 dark:text-slate-300">{edu.institution}</p>
        </div>
        <span className="rounded border border-slate-300 dark:border-slate-700 px-2 py-1 font-mono text-xs text-slate-600 dark:text-slate-300">{edu.status}</span>
      </div>

      <div className="mt-4 flex flex-wrap gap-4 text-sm text-slate-500 dark:text-slate-400">
        <p className="inline-flex items-center gap-2">
          <MapPin className="h-4 w-4 text-cyan-600 dark:text-cyan-300" />
          {edu.location}
        </p>
        <p className="inline-flex items-center gap-2">
          <Calendar className="h-4 w-4 text-cyan-600 dark:text-cyan-300" />
          {edu.duration}
        </p>
        <p className="inline-flex items-center gap-2">
          <GraduationCap className="h-4 w-4 text-cyan-600 dark:text-cyan-300" />
          {edu.type}
        </p>
      </div>

      <div className="mt-5 rounded-md border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-[#0b1016] p-4">
        <p className="font-mono text-xs tracking-wide text-slate-500 dark:text-slate-500">FOCUS AREAS</p>
        <p className="mt-2 text-sm leading-relaxed text-slate-700 dark:text-slate-300">{edu.focus}</p>
      </div>
    </motion.article>
  );
}

const Education: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const inView = useInView(sectionRef, { once: true, margin: '-80px' });

  return (
    <section id="education" ref={sectionRef} className="py-20 lg:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <motion.p
          className="font-mono text-xs tracking-[0.18em] text-cyan-600 dark:text-cyan-300"
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          variants={fadeUp}
          transition={{ duration: 0.5 }}
        >
          03 / EDUCATION
        </motion.p>
        <motion.h2
          className="mt-3 text-3xl font-semibold text-slate-900 dark:text-slate-100 sm:text-4xl"
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          variants={fadeUp}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          Academic foundations.
        </motion.h2>

        <motion.div
          className="mt-10 space-y-4"
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.13, delayChildren: 0.2 } } }}
        >
          {education.map((edu) => (
            <EducationCard key={edu.id} edu={edu} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Education;
