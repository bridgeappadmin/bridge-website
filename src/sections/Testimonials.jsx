import React, { useEffect, useLayoutEffect, useRef, useState } from 'react';
import { motion, useMotionValue, useScroll, useTransform } from 'framer-motion';
import { useReducedMotion } from '../lib/motion-pref';
import { BriefcaseBusiness, Quote, Sparkles, Star } from 'lucide-react';
import {
  BlurText,
  Reveal,
  SectionTag,
  useElementSize,
  useMedia,
} from '../motion.jsx';
import { image } from './Phone.jsx';

// Four cards anchored to the corners of the dark box, two on each side of the
// heading. Geometry is measured from the rendered box so the cards keep a
// clear gap from each other and from the heading at any window height.
const GAP = 32;
const MIN_SCALE = 0.6;

const CARDS = [
  {
    slot: 'lt',
    tone: 'dark',
    stars: false,
    quote:
      'Payments were my biggest worry before switching. Knowing every deal is tracked and protected in one place gives me complete peace of mind. Now I check my Tazmify dashboard more than my inbox.',
    name: 'Ananya Sharma',
    role: 'Lifestyle creator',
    avatar: 'avatars/ananya-sharma.webp',
    rot: -3,
  },
  {
    slot: 'lb',
    tone: 'magenta',
    stars: true,
    quote:
      'The matching is scary good. My first three campaigns came from brands I would never have found on my own. It is like having an agent in my pocket.',
    name: 'Kavya Reddy',
    role: 'Food creator',
    avatar: 'avatars/kavya-reddy.webp',
    rot: 2,
  },
  {
    slot: 'rt',
    tone: 'blue',
    stars: true,
    quote:
      'I used to juggle three different apps for briefs, DMs and invoices. Now everything lives in one place, and I actually know where every collaboration stands. Love it!',
    name: 'Rohan Mehta',
    role: 'Brand manager',
    avatar: 'avatars/rohan-mehta.webp',
    rot: 3,
  },
  {
    slot: 'rb',
    tone: 'sky',
    stars: false,
    quote:
      'Shortlisting creators used to take our team a week of spreadsheets. Now it takes an afternoon, and the fits are better.',
    name: 'Priya Nair',
    role: 'Marketing lead',
    avatar: 'avatars/priya-nair.webp',
    rot: -2,
  },
];

const clamp = (v) => Math.min(1, Math.max(0, v / 0.6));
const easeOut = (t) => 1 - (1 - t) * (1 - t);

const Card = React.forwardRef(function Card(
  { card, progress, geo, animate },
  ref,
) {
  const spread = (p) => easeOut(clamp(p));
  const x = useTransform([progress, geo.dx], ([p, d]) => d * (1 - spread(p)));
  const y = useTransform([progress, geo.dy], ([p, d]) => d * (1 - spread(p)));
  const rotate = useTransform(progress, (p) => card.rot * spread(p));
  const scale = useTransform(
    [progress, geo.cs],
    ([p, cs]) => cs * (0.92 + 0.08 * spread(p)),
  );

  return (
    <motion.blockquote
      ref={ref}
      className={`tcard tcard-${card.tone} tcard-${card.slot}`}
      style={animate ? { x, y, rotate, scale } : undefined}
    >
      {card.stars && (
        <span className="tcard-stars" aria-label="Five stars">
          {[0, 1, 2, 3, 4].map((i) => (
            <Star key={i} size={20} fill="currentColor" strokeWidth={0} />
          ))}
        </span>
      )}
      <p>
        <span className="tcard-quote">
          <Quote size={12} fill="currentColor" strokeWidth={0} />
        </span>
        {card.quote}
      </p>
      <footer>
        <span className="tcard-avatar">
          <img src={image(card.avatar)} alt="" width={44} height={44} />
        </span>
        <span>
          <strong>{card.name}</strong>
          <small>{card.role}</small>
        </span>
      </footer>
    </motion.blockquote>
  );
});

function useCardGeometry() {
  // One set of motion values per card, updated from measurements.
  const dx = [useMotionValue(0), useMotionValue(0), useMotionValue(0), useMotionValue(0)];
  const dy = [useMotionValue(0), useMotionValue(0), useMotionValue(0), useMotionValue(0)];
  const cs = useMotionValue(1);
  return CARDS.map((_, i) => ({ dx: dx[i], dy: dy[i], cs }));
}

export default function Testimonials({ number = '04' }) {
  const trackRef = useRef(null);
  const boxRef = useRef(null);
  const headRef = useRef(null);
  const cardRefs = useRef([]);
  const reduce = useReducedMotion();
  const wide = useMedia('(min-width: 1024px)');
  const [fits, setFits] = useState(true);
  const animate = !reduce && wide && fits;
  const ticker = !reduce && !wide;
  const geo = useCardGeometry();
  const { width, height } = useElementSize(boxRef);

  // Retry the spread layout whenever the viewport changes size.
  useEffect(() => {
    const retry = () => setFits(true);
    window.addEventListener('resize', retry);
    return () => window.removeEventListener('resize', retry);
  }, []);

  useLayoutEffect(() => {
    if (!animate || !width || !height || !headRef.current) return;
    const cards = cardRefs.current;
    if (cards.some((c) => !c)) return;
    const size = cards.map((c) => ({ w: c.offsetWidth, h: c.offsetHeight }));
    const cw = Math.max(...size.map((c) => c.w));
    const pair = Math.max(size[0].h + size[1].h, size[2].h + size[3].h);
    const side = (width - headRef.current.offsetWidth) / 2 - GAP;
    const cs = Math.min(1, (height - 3 * GAP) / pair, (side - GAP) / cw);
    if (cs < MIN_SCALE) {
      setFits(false);
      return;
    }
    geo[0].cs.set(cs);
    CARDS.forEach((card, i) => {
      const { w, h } = size[i];
      const cx = card.slot[0] === 'l' ? GAP + (w * cs) / 2 : width - GAP - (w * cs) / 2;
      const cy = card.slot[1] === 't' ? GAP + (h * cs) / 2 : height - GAP - (h * cs) / 2;
      geo[i].dx.set(width / 2 - cx);
      geo[i].dy.set(height / 2 - cy);
    });
    // geo holds stable motion values; only size and mode changes matter.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [animate, width, height]);

  const { scrollYProgress } = useScroll({
    target: trackRef,
    offset: ['start start', 'end end'],
  });

  return (
    <section
      className={`testimonials ${animate ? '' : 'is-static'} ${ticker ? 'is-ticker' : ''}`}
      id="testimonials"
      ref={trackRef}
    >
      <div className="testi-pin">
        <div className="testi-box" ref={boxRef}>
          <div className="testi-head" ref={headRef}>
            <SectionTag number={number}>Testimonials</SectionTag>
            <BlurText
              className="h2 on-dark"
              lines={['Trusted by creators,', 'loved by brands.']}
            />
            <Reveal as="p" className="lead">
              See how creators and brands from every background simplify their
              collaborations and take control of the work with one shared app.
            </Reveal>
            <Reveal className="ratings" delay={0.35}>
              <span className="rating">
                <span className="rating-icon">
                  <Sparkles size={18} />
                </span>
                <span>
                  <strong>
                    <Star size={12} fill="currentColor" strokeWidth={0} /> 4.9
                    /5
                  </strong>
                  <small>(200+ creator reviews)</small>
                </span>
              </span>
              <span className="rating">
                <span className="rating-icon">
                  <BriefcaseBusiness size={18} />
                </span>
                <span>
                  <strong>
                    <Star size={12} fill="currentColor" strokeWidth={0} /> 4.8
                    /5
                  </strong>
                  <small>(500+ brand reviews)</small>
                </span>
              </span>
            </Reveal>
          </div>
          <div className="testi-cards">
            {ticker ? (
              // Phones and tablets: an endless ticker of the cards (two
              // identical halves, the second hidden from assistive tech).
              <div className="testi-ticker-track">
                {[...CARDS, ...CARDS].map((card, i) => (
                  <div
                    className="testi-ticker-item"
                    key={card.name + i}
                    aria-hidden={i >= CARDS.length || undefined}
                  >
                    <Card
                      card={card}
                      progress={scrollYProgress}
                      geo={geo[i % CARDS.length]}
                      animate={false}
                    />
                  </div>
                ))}
              </div>
            ) : (
              CARDS.map((card, i) => (
                <Card
                  key={card.name}
                  ref={(el) => {
                    cardRefs.current[i] = el;
                  }}
                  card={card}
                  progress={scrollYProgress}
                  geo={geo[i]}
                  animate={animate}
                />
              ))
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
