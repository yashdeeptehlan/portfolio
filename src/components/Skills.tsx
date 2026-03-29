import React, { useRef, useState } from 'react';
import { Brain, Cloud, Code, Database, Wrench } from 'lucide-react';
import { motion, useInView, AnimatePresence } from 'motion/react';
import { skills } from '../data/portfolio';

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 }
};

const Skills: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('Programming');
  const sectionRef = useRef<HTMLElement>(null);
  const inView = useInView(sectionRef, { once: true, margin: '-80px' });

  const categoryIcons = {
    Programming: Code,
    'ML & Data': Brain,
    'Databases & Pipelines': Database,
    Frameworks: Wrench,
    'Cloud & Tools': Cloud,
    Other: Brain
  };

  const currentSkills = skills[activeCategory as keyof typeof skills];

  return (
    <section id="skills" ref={sectionRef} className="py-20 lg:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <motion.p
          className="font-mono text-xs tracking-[0.18em] text-cyan-600 dark:text-cyan-300"
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          variants={fadeUp}
          transition={{ duration: 0.5 }}
        >
          02 / SKILLS
        </motion.p>
        <motion.h2
          className="mt-3 text-3xl font-semibold text-slate-900 dark:text-slate-100 sm:text-4xl"
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          variants={fadeUp}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          Technical stack and depth.
        </motion.h2>

        <div className="mt-10 grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <motion.div
            className="grid gap-2 sm:grid-cols-2 lg:grid-cols-1"
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.07, delayChildren: 0.2 } } }}
          >
            {Object.keys(skills).map((category) => {
              const Icon = categoryIcons[category as keyof typeof categoryIcons];
              return (
                <motion.button
                  key={category}
                  variants={fadeUp}
                  onClick={() => setActiveCategory(category)}
                  className={`flex items-center gap-3 rounded-md border px-4 py-3 text-left transition ${
                    activeCategory === category
                      ? 'border-cyan-500/40 dark:border-cyan-400/40 bg-cyan-500/10 dark:bg-cyan-400/10 text-cyan-700 dark:text-cyan-200'
                      : 'border-slate-200 dark:border-slate-800 bg-white dark:bg-[#0e131a]/75 text-slate-700 dark:text-slate-300 hover:border-slate-300 dark:hover:border-slate-700'
                  }`}
                  whileHover={{ x: activeCategory === category ? 0 : 4 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Icon className="h-4 w-4" />
                  <span className="font-mono text-xs tracking-wide">{category}</span>
                </motion.button>
              );
            })}
          </motion.div>

          <motion.div
            className="rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-[#0e131a]/75 p-6 sm:p-8"
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            variants={fadeUp}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="mb-6 flex items-center gap-3">
              {React.createElement(categoryIcons[activeCategory as keyof typeof categoryIcons], {
                className: 'h-5 w-5 text-cyan-600 dark:text-cyan-300'
              })}
              <h3 className="font-mono text-sm tracking-wide text-slate-800 dark:text-slate-200">{activeCategory}</h3>
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={activeCategory}
                className="space-y-5"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.25 }}
              >
                {currentSkills.map((skill, i) => (
                  <div key={skill.name}>
                    <div className="mb-2 flex items-center justify-between text-sm">
                      <span className="text-slate-700 dark:text-slate-300">{skill.name}</span>
                      <span className="font-mono text-xs text-cyan-600 dark:text-cyan-300">{skill.level}%</span>
                    </div>
                    <div className="h-2 w-full overflow-hidden rounded-full bg-slate-200 dark:bg-slate-800">
                      <motion.div
                        className="h-full rounded-full bg-gradient-to-r from-cyan-400 to-emerald-400"
                        initial={{ width: 0 }}
                        animate={{ width: `${skill.level}%` }}
                        transition={{ duration: 0.7, delay: i * 0.06, ease: 'easeOut' }}
                      />
                    </div>
                  </div>
                ))}
              </motion.div>
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
