import React, { useEffect, useId, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { useReducedMotion } from '../lib/motion-pref';
import {
  ArrowLeft,
  ArrowRight,
  ChartColumn,
  Pause,
  Play,
  ListChecks,
  Wallet,
} from 'lucide-react';
import {
  BlurText,
  Reveal,
  spring,
  useElementSize,
  useIsMobile,
} from '../motion.jsx';
import { Mockup } from './Phone.jsx';

const INTERVAL = 5000;
const CARDS = [
  {
    n: 1,
    title: 'Active job tracking',
    text: 'Follow every collaboration from accepted to shipped, draft, review and paid, with deliverables in one place.',
    Icon: ListChecks,
    mockup: 'active-job',
    note: ['Draft submitted', 'Today'],
  },
  {
    n: 2,
    title: 'Performance insights',
    text: 'Understand reach, saves and clicks per campaign, then pitch with proof.',
    Icon: ChartColumn,
    mockup: 'analytics',
    note: ['This month', '+2.4%'],
  },
  {
    n: 3,
    title: 'Earnings tracking',
    text: 'Follow every payment from agreed fee to payout in one clear view.',
    Icon: Wallet,
    mockup: 'earnings',
    note: ['Available', '₹84,500'],
  },
];
const wrap = (index) => (index + CARDS.length) % CARDS.length;

export default function Growth() {
  const reduce = useReducedMotion();
  const mobile = useIsMobile();
  const id = useId();
  const stageRef = useRef(null);
  const cardButtons = useRef([]);
  const touch = useRef(null);
  const suppressClickUntil = useRef(0);
  const remaining = useRef(INTERVAL);
  const visible = useInView(stageRef, { amount: 0.35 });
  const entered = useInView(stageRef, { amount: 0.15, once: true });
  const size = useElementSize(stageRef);
  const [active, setActive] = useState(0);
  const [revision, setRevision] = useState(0);
  const [paused, setPaused] = useState(false);
  const [hovered, setHovered] = useState(false);
  const [keyboardFocus, setKeyboardFocus] = useState(false);
  const [touching, setTouching] = useState(false);
  const [pageVisible, setPageVisible] = useState(true);
  const [announcement, setAnnouncement] = useState('');
  const running =
    visible &&
    pageVisible &&
    !reduce &&
    !paused &&
    !hovered &&
    !keyboardFocus &&
    !touching;

  useEffect(() => {
    const update = () => setPageVisible(!document.hidden);
    update();
    document.addEventListener('visibilitychange', update);
    return () => document.removeEventListener('visibilitychange', update);
  }, []);
  useEffect(() => {
    remaining.current = INTERVAL;
  }, [active, revision]);
  useEffect(() => {
    if (!running) return undefined;
    const started = performance.now();
    const timer = setTimeout(
      () => setActive((current) => wrap(current + 1)),
      remaining.current,
    );
    return () => {
      clearTimeout(timer);
      remaining.current = Math.max(
        0,
        remaining.current - (performance.now() - started),
      );
    };
  }, [active, revision, running]);

  const select = (index) => {
    const next = wrap(index);
    setActive(next);
    setRevision((current) => current + 1);
    setAnnouncement(
      CARDS[next].title + ', ' + (next + 1) + ' of ' + CARDS.length,
    );
  };
  const handleKey = (event) => {
    const next = {
      ArrowLeft: wrap(active - 1),
      ArrowRight: wrap(active + 1),
      Home: 0,
      End: CARDS.length - 1,
    }[event.key];
    if (next === undefined) return;
    event.preventDefault();
    setKeyboardFocus(true);
    select(next);
    if (event.target.closest('.gcard-select'))
      cardButtons.current[next]?.focus({ preventScroll: true });
  };
  const finishTouch = (event) => {
    const start = touch.current;
    touch.current = null;
    setTouching(false);
    if (!start || event.pointerId !== start.id) return;
    const dx = event.clientX - start.x;
    const dy = event.clientY - start.y;
    if (Math.abs(dx) > 40 && Math.abs(dx) > Math.abs(dy) * 1.25) {
      suppressClickUntil.current = performance.now() + 400;
      select(active + (dx < 0 ? 1 : -1));
    }
  };
  const available = size.width || (mobile ? 358 : 1344);
  const cardWidth = mobile
    ? Math.min(340, available - 56)
    : Math.min(484, Math.max(350, available * 0.46));
  const spread = mobile
    ? Math.min(available * 0.44, 265)
    : Math.min(available * 0.29, 310);

  return (
    <section className="section growth" id="growth">
      <div className="section-head">
        <Reveal as="span" className="eyebrow" delay={0}>
          Growth tools
        </Reveal>
        <BlurText
          className="h3-lg on-dark"
          lines={['Grow your reach with confidence.']}
        />
        <Reveal as="p" className="lead">
          From first-time creators to seasoned teams, get tools that make
          growing your work simple and smart.
        </Reveal>
      </div>

      <div
        className="growth-carousel"
        role="region"
        aria-roledescription="carousel"
        aria-label="Growth tools"
        data-active={active}
        data-running={running}
        data-paused={paused}
        data-reduced={!!reduce}
        onPointerEnter={(event) => {
          if (event.pointerType === 'mouse') setHovered(true);
        }}
        onPointerLeave={() => setHovered(false)}
        onFocusCapture={(event) => {
          if (event.target.matches(':focus-visible')) setKeyboardFocus(true);
        }}
        onBlurCapture={(event) => {
          if (!event.currentTarget.contains(event.relatedTarget))
            setKeyboardFocus(false);
        }}
        onPointerDownCapture={() => setKeyboardFocus(false)}
        onKeyDown={handleKey}
      >
        <div
          className="growth-stage"
          ref={stageRef}
          style={{ '--growth-card-width': cardWidth + 'px' }}
          onPointerDown={(event) => {
            if (event.pointerType !== 'touch') return;
            touch.current = {
              x: event.clientX,
              y: event.clientY,
              id: event.pointerId,
            };
            setTouching(true);
          }}
          onPointerUp={finishTouch}
          onPointerCancel={() => {
            touch.current = null;
            setTouching(false);
          }}
        >
          {CARDS.map((card, index) => {
            const offset = wrap(index - active);
            const side = offset === 0 ? 0 : offset === 1 ? 1 : -1;
            const centered = side === 0;
            const { Icon } = card;
            return (
              <motion.article
                key={card.title}
                className={'gcard' + (centered ? ' is-active' : '')}
                data-position={
                  centered ? 'center' : side < 0 ? 'left' : 'right'
                }
                data-index={index}
                role="group"
                aria-roledescription="slide"
                aria-label={
                  index + 1 + ' of ' + CARDS.length + ': ' + card.title
                }
                style={{ zIndex: centered ? 3 : 1 }}
                initial={false}
                animate={
                  entered || reduce
                    ? {
                        x: side * spread,
                        y: centered ? 0 : mobile ? 26 : 46,
                        rotate: side * (mobile ? 7 : 10),
                        scale: centered ? 1 : 0.84,
                        opacity: 1,
                      }
                    : { x: 0, y: 60, rotate: 0, scale: 0.9, opacity: 0 }
                }
                transition={reduce ? { duration: 0 } : spring(0.2, 1.2)}
              >
                <div className="gcard-screen">
                  <Mockup name={card.mockup} className="gcard-mock" />
                  <span className="gscr-note" aria-hidden="true">
                    <small>{card.note[0]}</small>
                    <strong>{card.note[1]}</strong>
                  </span>
                </div>
                <div className="gcard-body">
                  <div className="gcard-head">
                    <span className="icon-frame icon-frame-lg">
                      <Icon size={22} />
                    </span>
                    <span className="gcard-num">{card.n}</span>
                  </div>
                  <h3 id={id + '-title-' + index}>{card.title}</h3>
                  <p id={id + '-description-' + index}>{card.text}</p>
                </div>
                <button
                  className="gcard-select"
                  type="button"
                  ref={(node) => {
                    cardButtons.current[index] = node;
                  }}
                  aria-label={'Center ' + card.title.toLowerCase() + ' card'}
                  aria-describedby={id + '-description-' + index}
                  aria-pressed={centered}
                  onClick={() => {
                    if (performance.now() >= suppressClickUntil.current)
                      select(index);
                  }}
                />
              </motion.article>
            );
          })}
        </div>
        <div className="growth-controls">
          <button
            type="button"
            className="growth-arrow"
            aria-label="Previous growth card"
            onClick={() => select(active - 1)}
          >
            <ArrowLeft size={19} />
          </button>
          <div className="growth-dots" aria-label="Choose a growth card">
            {CARDS.map((card, index) => (
              <button
                type="button"
                key={card.title}
                aria-label={'Show ' + card.title.toLowerCase()}
                aria-pressed={index === active}
                onClick={() => select(index)}
              >
                <span
                  className={
                    'growth-dot' + (active === index ? ' is-active' : '')
                  }
                >
                  {active === index && (
                    <span
                      className="growth-progress"
                      key={active + '-' + revision}
                      style={{ animationDuration: INTERVAL + 'ms' }}
                    />
                  )}
                </span>
              </button>
            ))}
          </div>
          <button
            type="button"
            className="growth-arrow"
            aria-label="Next growth card"
            onClick={() => select(active + 1)}
          >
            <ArrowRight size={19} />
          </button>
          {!reduce && (
            <button
              type="button"
              className="growth-playback"
              aria-label={
                paused ? 'Play growth carousel' : 'Pause growth carousel'
              }
              onClick={() => setPaused((value) => !value)}
            >
              {paused ? <Play size={16} /> : <Pause size={16} />}
            </button>
          )}
        </div>
        <span
          className="sr-only"
          role="status"
          aria-live="polite"
          aria-atomic="true"
        >
          {announcement}
        </span>
      </div>
      <div className="growth-glow" aria-hidden="true" />
    </section>
  );
}
