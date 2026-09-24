import React from 'react';
import { motion } from 'framer-motion';
import { useReducedMotion } from '../lib/motion-pref';
import { spring } from '../motion.jsx';

export default function PageHero({ lines, subtitle, children, short = false }) {
  const reduce = useReducedMotion();
  const anim = (delay) =>
    reduce
      ? { initial: false }
      : {
          initial: { opacity: 0, scale: 0.5, y: 50 },
          animate: { opacity: 1, scale: 1, y: 0 },
          transition: spring(0.6, 1.2, delay),
        };
  return (
    <section className={`page-hero ${short ? 'is-short' : ''}`}>
      <div className="page-hero-bg" aria-hidden="true" />
      {!short && (
        <div className="page-hero-inner">
          <h1 className="page-title">
            {lines.map((line, i) => (
              <motion.span
                className="page-title-line"
                key={line}
                {...anim(0.3 + i * 0.2)}
              >
                {line}
              </motion.span>
            ))}
          </h1>
          {subtitle && (
            <motion.p
              className="page-sub"
              {...(reduce
                ? { initial: false }
                : {
                    initial: { opacity: 0, y: 40 },
                    animate: { opacity: 1, y: 0 },
                    transition: spring(0.2, 0.8, 0.5),
                  })}
            >
              {subtitle}
            </motion.p>
          )}
          {children}
        </div>
      )}
    </section>
  );
}
