import React, { useRef } from 'react';
import { Award, Calendar, MapPin } from 'lucide-react';
import { motion, useInView } from 'motion/react';
import { certifications, experience } from '../data/portfolio';
import { useCardTilt } from '../hooks/useCardTilt';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 }
};

type Exp = (typeof experience)[number];

function ExperienceCard({ exp, inView }: { exp: Exp; inView: boolean }) {
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
          <h3 className="text-xl font-medium text-slate-900 dark:text-slate-100">{exp.title}</h3>
          <p className="mt-1 text-slate-700 dark:text-slate-300">{exp.company}</p>
        </div>
        <span className="rounded border border-slate-300 dark:border-slate-700 px-2 py-1 font-mono text-xs capitalize text-slate-600 dark:text-slate-300">
          {exp.type}
        </span>
      </div>

      <div className="mt-4 flex flex-wrap gap-4 text-sm text-slate-500 dark:text-slate-400">
        <p className="inline-flex items-center gap-2">
          <Calendar className="h-4 w-4 text-cyan-600 dark:text-cyan-300" />
          {exp.duration}
        </p>
        <p className="inline-flex items-center gap-2">
          <MapPin className="h-4 w-4 text-cyan-600 dark:text-cyan-300" />
          {exp.location}
        </p>
      </div>

      <ul className="mt-5 space-y-2">
        {exp.achievements.map((achievement, index) => (
          <motion.li
            key={index}
            className="text-sm leading-relaxed text-slate-700 dark:text-slate-300"
            initial={{ opacity: 0, x: -10 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
            transition={{ duration: 0.4, delay: 0.4 + index * 0.06 }}
          >
            <span className="mr-2 text-cyan-600 dark:text-cyan-300">+</span>
            {achievement}
          </motion.li>
        ))}
      </ul>
    </motion.article>
  );
}

const Experience: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const inView = useInView(sectionRef, { once: true, margin: '-80px' });

  return (
    <section id="experience" ref={sectionRef} className="py-20 lg:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <motion.p
          className="font-mono text-xs tracking-[0.18em] text-cyan-600 dark:text-cyan-300"
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          variants={fadeUp}
          transition={{ duration: 0.5 }}
        >
          05 / EXPERIENCE
        </motion.p>
        <motion.h2
          className="mt-3 text-3xl font-semibold text-slate-900 dark:text-slate-100 sm:text-4xl"
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          variants={fadeUp}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          Professional work and impact.
        </motion.h2>

        <motion.div
          className="mt-10 space-y-4"
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.12, delayChildren: 0.2 } } }}
        >
          {experience.map((exp) => (
            <ExperienceCard key={exp.id} exp={exp} inView={inView} />
          ))}
        </motion.div>

        {certifications.length > 0 && (
          <div className="mt-12">
            <motion.h3
              className="font-mono text-xs tracking-[0.16em] text-slate-500 dark:text-slate-400"
              initial="hidden"
              animate={inView ? 'visible' : 'hidden'}
              variants={fadeUp}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              CERTIFICATIONS
            </motion.h3>
            <motion.div
              className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3"
              initial="hidden"
              animate={inView ? 'visible' : 'hidden'}
              variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.1, delayChildren: 0.6 } } }}
            >
              {certifications.map((cert) => (
                <motion.div
                  key={cert.id}
                  variants={fadeUp}
                  className="rounded-md border border-slate-200 dark:border-slate-800 bg-white dark:bg-[#0d1218] p-4"
                  whileHover={{ borderColor: 'rgba(6,182,212,0.3)', y: -3 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="mb-2 inline-flex rounded border border-cyan-500/40 dark:border-cyan-400/40 bg-cyan-500/10 dark:bg-cyan-400/10 p-1.5">
                    <Award className="h-3.5 w-3.5 text-cyan-600 dark:text-cyan-300" />
                  </div>
                  <p className="text-sm text-slate-900 dark:text-slate-100">{cert.title}</p>
                  <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">{cert.issuer}</p>
                  <p className="mt-1 font-mono text-xs text-cyan-600 dark:text-cyan-300">{cert.year}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Experience;
