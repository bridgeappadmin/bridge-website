import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useReducedMotion } from '../lib/motion-pref';

const STATS = [
  {
    value: '12K+',
    label: 'Campaigns launched',
    text: 'From product drops to always-on programs, briefed, matched and delivered through Tazmify.',
  },
  {
    value: '40K+',
    label: 'Creators onboard',
    text: 'Fashion, food, tech, beauty and more, showing their work and pitching with clarity and control.',
  },
  {
    value: '3K+',
    label: 'Brands hiring',
    text: 'Teams of every size finding the right voices and keeping every collaboration on track.',
  },
];

const HEADLINE = 'Proven results. Trusted by creators & brands.';

export default function Performance() {
  const ref = useRef(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end end'],
  });
  const glass = useTransform(scrollYProgress, [0.22, 0.4], [0, 1]);

  return (
    <section className="perf" ref={ref} aria-labelledby="perf-title">
      {/* The giant headline is a continuous ticker (48s loop), pinned while
          the number cards stack over it. */}
      <div className="perf-text">
        <p id="perf-title" className="sr-only">
          {HEADLINE}
        </p>
        <div className="perf-track" aria-hidden="true">
          <span>{HEADLINE}</span>
          <span>{HEADLINE}</span>
        </div>
      </div>
      <div className="perf-glass-wrap" aria-hidden="true">
        <motion.div
          className="perf-glass"
          style={reduce ? undefined : { opacity: glass }}
        />
      </div>
      <div className="perf-cards">
        <div className="perf-col">
          {STATS.map((stat, i) => (
            <article className={`ncard ncard-${i + 1}`} key={stat.value}>
              <span className="ncard-index">0{i + 1}</span>
              <strong>{stat.value}</strong>
              <span className="ncard-label">{stat.label}</span>
              <p>{stat.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
