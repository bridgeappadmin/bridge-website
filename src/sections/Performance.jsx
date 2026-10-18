import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useReducedMotion } from '../lib/motion-pref';

// Pre-launch: what Tazmify offers, not usage numbers. Swap in real stats
// (e.g. campaigns launched, creators onboard) once they exist.
const STATS = [
  {
    value: 'One app',
    label: 'From pitch to payout',
    text: 'Discovery, briefs, chat, deliverables and payments in one place, so nothing gets lost between tools.',
  },
  {
    value: 'Every niche',
    label: 'Creators of all kinds',
    text: 'Fashion, food, tech, beauty, travel and more, for creators who want to work with brands that fit.',
  },
  {
    value: 'Any size',
    label: 'Brands big and small',
    text: 'From neighbourhood cafés to growing labels, brands can find the right voices and keep every collaboration on track.',
  },
];

const HEADLINE = 'Built for creators. Made for brands.';

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
