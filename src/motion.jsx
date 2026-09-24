import React, { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { useReducedMotion } from './lib/motion-pref';

export const EASE = [0.44, 0, 0.56, 1];
export const spring = (bounce, duration, delay = 0) => ({
  type: 'spring',
  bounce,
  duration,
  delay,
});
export const tween = (duration, delay = 0) => ({
  type: 'tween',
  ease: EASE,
  duration,
  delay,
});
export const inView = { once: true, amount: 0.2, margin: '0px 0px -6% 0px' };

export function useMedia(query) {
  const [matches, setMatches] = useState(
    () => typeof window !== 'undefined' && window.matchMedia(query).matches,
  );
  useEffect(() => {
    const mq = window.matchMedia(query);
    const update = () => setMatches(mq.matches);
    update();
    // Older Safari (iOS 13 and earlier) only has addListener.
    if (mq.addEventListener) mq.addEventListener('change', update);
    else mq.addListener(update);
    return () => {
      if (mq.removeEventListener) mq.removeEventListener('change', update);
      else mq.removeListener(update);
    };
  }, [query]);
  return matches;
}
export const useIsMobile = () => useMedia('(max-width: 809.98px)');

export function useElementSize(ref) {
  const [size, setSize] = useState({ width: 0, height: 0 });
  useEffect(() => {
    if (!ref.current) return undefined;
    const ro = new ResizeObserver(([entry]) => {
      const { width, height } = entry.contentRect;
      setSize({ width, height });
    });
    ro.observe(ref.current);
    return () => ro.disconnect();
  }, [ref]);
  return size;
}

export function Reveal({
  as = 'div',
  children,
  delay = 0.25,
  y = 40,
  className = '',
  ...rest
}) {
  const reduce = useReducedMotion();
  const Tag = motion[as];
  return (
    <Tag
      className={className}
      initial={reduce ? false : { opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={inView}
      transition={tween(0.6, delay)}
      {...rest}
    >
      {children}
    </Tag>
  );
}

export function Pop({
  as = 'div',
  children,
  delay = 0.1,
  amount = 0.1,
  className = '',
  ...rest
}) {
  const reduce = useReducedMotion();
  const Tag = motion[as];
  return (
    <Tag
      className={className}
      initial={reduce ? false : { opacity: 0, scale: 0.5 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ ...inView, amount }}
      transition={spring(0.3, 1, delay)}
      {...rest}
    >
      {children}
    </Tag>
  );
}

// Letter-by-letter blur-in heading. The letters are plain spans driven by one
// CSS transition each (see .bt-ch in base.css), staggered through a --i custom
// property, so a heading costs one IntersectionObserver instead of dozens of
// animated components.
export function BlurText({
  as = 'h2',
  lines,
  className = '',
  delay = 0.1,
  id,
}) {
  const reduce = useReducedMotion();
  const ref = useRef(null);
  const visible = useInView(ref, inView);
  const Tag = as;
  let index = 0;
  const items = lines.map((line) =>
    typeof line === 'string' ? { text: line } : line,
  );
  return (
    <Tag
      ref={ref}
      id={id}
      className={`bt ${visible || reduce ? 'is-in' : ''} ${className}`}
      style={{ '--bt-delay': `${delay}s` }}
      aria-label={items.map((l) => l.text).join(' ')}
    >
      {items.map((line, li) => {
        const words = line.text.split(' ');
        const Line = line.style ? motion.span : 'span';
        return (
          <Line
            className={`bt-line ${line.className || ''}`}
            key={li}
            aria-hidden="true"
            style={line.style}
          >
            {words.map((word, wi) => (
              <React.Fragment key={wi}>
                <span className="bt-word">
                  {Array.from(word).map((ch, ci) => {
                    const i = index;
                    index += 1;
                    return (
                      <span key={ci} className="bt-ch" style={{ '--i': i }}>
                        {ch}
                      </span>
                    );
                  })}
                </span>
                {wi < words.length - 1 ? ' ' : null}
              </React.Fragment>
            ))}
          </Line>
        );
      })}
    </Tag>
  );
}

const numChip = {
  hidden: { scale: 0, rotate: -50, opacity: 0 },
  show: { scale: 1, rotate: -17, opacity: 1, transition: spring(0.5, 0.8) },
};
const nameChip = {
  hidden: { scale: 0, rotate: 40, opacity: 0 },
  show: { scale: 1, rotate: 9, opacity: 1, transition: spring(0.5, 0.8, 0.08) },
};

export function SectionTag({ number, children, className = '' }) {
  const reduce = useReducedMotion();
  return (
    <motion.div
      className={`tag ${className}`}
      initial={reduce ? false : 'hidden'}
      whileInView="show"
      viewport={inView}
    >
      <motion.span className="tag-num" variants={numChip}>
        {number}
      </motion.span>
      <motion.span className="tag-name" variants={nameChip}>
        {children}
      </motion.span>
    </motion.div>
  );
}

export function Button({
  href,
  children,
  variant = 'primary',
  className = '',
  onClick,
  type,
}) {
  const cls = `btn btn-${variant} ${className}`;
  if (href) {
    return (
      <a className={cls} href={href} onClick={onClick}>
        <span>{children}</span>
      </a>
    );
  }
  return (
    <button className={cls} type={type || 'button'} onClick={onClick}>
      <span>{children}</span>
    </button>
  );
}
