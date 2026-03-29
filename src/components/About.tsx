import React, { useEffect, useRef, useState } from 'react';
import { Globe, Sparkles, Target, Zap } from 'lucide-react';
import { motion, useInView } from 'motion/react';
import { personalInfo } from '../data/portfolio';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 }
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } }
};

function AnimatedStat({ value, label }: { value: string; label: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true });
  const isNumber = !isNaN(Number(value));
  const [display, setDisplay] = useState(isNumber ? '0' : value);

  useEffect(() => {
    if (!inView || !isNumber) return;
    const target = Number(value);
    let start = 0;
    const step = Math.ceil(target / 20);
    const interval = setInterval(() => {
      start += step;
      if (start >= target) {
        setDisplay(String(target));
        clearInterval(interval);
      } else {
        setDisplay(String(start));
      }
    }, 40);
    return () => clearInterval(interval);
  }, [inView, value, isNumber]);

  return (
    <motion.div
      ref={ref}
      variants={fadeUp}
      className="rounded-md border border-slate-800 bg-[#0c1117] p-3 text-center"
      whileHover={{ borderColor: 'rgba(6,182,212,0.3)', scale: 1.04 }}
      transition={{ duration: 0.2 }}
    >
      <p className="font-mono text-base text-cyan-300 sm:text-xl">{display}</p>
      <p className="mt-1 text-xs text-slate-500">{label}</p>
    </motion.div>
  );
}

const About: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const inView = useInView(sectionRef, { once: true, margin: '-80px' });

  const stats: [string, string][] = [
    ['3', 'Core Roles'],
    ['3', 'Production Systems'],
    ['3', 'Advanced Degrees'],
    ['Canada', 'Work Eligible']
  ];

  const cards = [
    { icon: Sparkles, title: 'Production AI Focus', text: 'Hands-on delivery of LLM workflows, RAG systems, and backend AI integration.' },
    { icon: Target, title: 'Optimization Mindset', text: 'Strong focus on query optimization, response quality, and cost-efficient inference.' },
    { icon: Zap, title: 'Backend Execution', text: 'Builds clean APIs and deployable architectures with FastAPI and modern data stacks.' },
    { icon: Globe, title: 'Cross-Functional Delivery', text: 'Collaborates across research and engineering teams to ship practical systems.' }
  ];

  return (
    <section id="about" ref={sectionRef} className="py-20 lg:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <motion.p
          className="font-mono text-xs tracking-[0.18em] text-cyan-300"
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          variants={fadeUp}
          transition={{ duration: 0.5 }}
        >
          01 / ABOUT
        </motion.p>
        <motion.h2
          className="mt-3 text-3xl font-semibold text-slate-100 sm:text-4xl"
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          variants={fadeUp}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          AI and backend systems for real production outcomes.
        </motion.h2>

        <div className="mt-10 grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
          <motion.article
            className="rounded-xl border border-slate-800 bg-[#0e131a]/75 p-6 sm:p-8"
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            variants={fadeUp}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <p className="text-slate-300">
              Based in <span className="text-cyan-300">{personalInfo.location}</span>, I build and ship production-grade AI systems with strong backend foundations.
            </p>
            <p className="mt-4 text-slate-400">
              My work centers on LLM applications, RAG pipelines, SQL optimization workflows, and API-first backend architecture. I focus on practical delivery: measurable performance, maintainable code, and scalable system design.
            </p>
            <p className="mt-4 text-slate-400">
              I combine applied research rigor with product execution speed to take systems from concept to deployed production environments.
            </p>

            <motion.div
              className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4"
              variants={stagger}
              initial="hidden"
              animate={inView ? 'visible' : 'hidden'}
            >
              {stats.map(([value, label]) => (
                <AnimatedStat key={label} value={value} label={label} />
              ))}
            </motion.div>
          </motion.article>

          <motion.div
            className="grid gap-3"
            variants={stagger}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            transition={{ delayChildren: 0.3 }}
          >
            {cards.map((item) => (
              <motion.div
                key={item.title}
                variants={fadeUp}
                className="rounded-md border border-slate-800 bg-[#0e131a]/75 p-4"
                whileHover={{ borderColor: 'rgba(6,182,212,0.25)', x: 4 }}
                transition={{ duration: 0.2 }}
              >
                <div className="flex items-center gap-3">
                  <item.icon className="h-4 w-4 text-cyan-300" />
                  <h3 className="text-sm font-medium text-slate-100">{item.title}</h3>
                </div>
                <p className="mt-2 text-sm text-slate-400">{item.text}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
