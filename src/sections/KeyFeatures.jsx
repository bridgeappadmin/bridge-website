import React, { useEffect, useId, useRef, useState } from 'react';
import { AnimatePresence, motion, useInView } from 'framer-motion';
import { useReducedMotion } from '../lib/motion-pref';
import {
  Bell,
  CheckCheck,
  LayoutGrid,
  Pause,
  Play,
  Sparkles,
  Users,
} from 'lucide-react';
import {
  BlurText,
  Pop,
  Reveal,
  SectionTag,
  tween,
  useElementSize,
} from '../motion.jsx';
import { FEATURE_SCENES } from './FeatureScenes.jsx';

const DURATION = 6800;
const ITEMS = [
  {
    title: 'Unified campaign view',
    text: 'Bring every brief, shortlist and conversation into one shared campaign workspace.',
    Icon: LayoutGrid,
    label: 'A home for every collaboration.',
    caption: 'From the first spark to the final post.',
  },
  {
    title: 'Smart creator matching',
    text: 'Discover people who share your niche, understand your audience and bring a fresh point of view.',
    Icon: Users,
    label: 'Your people are out there.',
    caption: 'Find the right fit. Make something great.',
  },
  {
    title: 'Real-time updates',
    text: 'Stay in the loop as applications arrive, conversations happen and your collaboration moves forward.',
    Icon: CheckCheck,
    label: 'Keep the good work moving.',
    caption: 'A little progress. A shared next step.',
  },
  {
    title: 'Custom alerts',
    text: 'Stay close to the moments that matter, from a new application to your next campaign conversation.',
    Icon: Bell,
    label: 'Never miss your next big thing.',
    caption: 'The right moment to make your move.',
  },
];

function Accordion({ active, onChange, id, reduce, onFocus }) {
  return (
    <ul className="acc" onFocusCapture={onFocus}>
      {ITEMS.map(({ title, text, Icon }, i) => (
        <li
          key={title}
          className={`acc-row ${i === active ? 'is-active' : ''}`}
        >
          <button
            type="button"
            id={`${id}-trigger-${i}`}
            aria-expanded={i === active}
            aria-controls={`${id}-copy-${i}`}
            onClick={() => onChange(i)}
          >
            <span className="acc-title">
              <span className="acc-num">{i + 1}</span>
              {title}
            </span>
            <span className="acc-icon">
              <Icon size={18} />
            </span>
          </button>
          <motion.div
            id={`${id}-copy-${i}`}
            role="region"
            aria-labelledby={`${id}-trigger-${i}`}
            aria-hidden={i !== active}
            className="kf-acc-description"
            initial={false}
            animate={{
              height: i === active ? 'auto' : 0,
              opacity: i === active ? 1 : 0,
            }}
            transition={
              reduce
                ? { duration: 0 }
                : { type: 'spring', stiffness: 300, damping: 34 }
            }
          >
            <p className="acc-text">{text}</p>
          </motion.div>
        </li>
      ))}
    </ul>
  );
}

export default function KeyFeatures({ number = '02' }) {
  const reduce = useReducedMotion();
  const id = useId();
  const stageRef = useRef(null);
  const visible = useInView(stageRef, { amount: 0.35 });
  const size = useElementSize(stageRef);
  const [active, setActive] = useState(0);
  const [revision, setRevision] = useState(0);
  const [auto, setAuto] = useState(true);
  const [paused, setPaused] = useState(false);
  const [pageVisible, setPageVisible] = useState(true);
  const remaining = useRef(DURATION);
  const motionAllowed = visible && pageVisible && !reduce && !paused;
  const running = auto && motionAllowed;

  useEffect(() => {
    const update = () => setPageVisible(!document.hidden);
    update();
    document.addEventListener('visibilitychange', update);
    return () => document.removeEventListener('visibilitychange', update);
  }, []);
  useEffect(() => {
    remaining.current = DURATION;
  }, [active, revision]);
  useEffect(() => {
    if (!running) return undefined;
    const started = performance.now();
    const timer = setTimeout(
      () => setActive((current) => (current + 1) % ITEMS.length),
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
    setAuto(false);
    setPaused(false);
    setActive(index);
    setRevision((current) => current + 1);
  };
  const togglePlayback = () => {
    if (auto && !paused) setPaused(true);
    else {
      setAuto(true);
      setPaused(false);
    }
  };
  const scale = size.width
    ? Math.min((size.width - 40) / 520, (size.height - 152) / 540, 1.15)
    : 0.8;
  const Scene = FEATURE_SCENES[active];
  const sceneKey = `${active}-${revision}`;
  const isPlaying = auto && !paused;

  return (
    <section className="section features" id="features">
      <div className="aurora" aria-hidden="true" />
      <div className="section-head">
        <SectionTag number={number}>Key features</SectionTag>
        <BlurText
          className="h2 on-dark"
          lines={['Everything collab.', 'Unified.']}
        />
        <Reveal as="p" className="lead">
          Experience the power of one shared workspace — smarter discovery,
          stronger partnerships and better decisions in one platform.
        </Reveal>
      </div>
      <div className="features-grid kf-grid">
        <Pop
          as="article"
          className="fcard fcard-lavender kf-art-card"
          delay={0}
        >
          {/* Phones: the features as horizontal tabs on top of the scene. */}
          <div className="kf-tabs" role="tablist" aria-label="Key features">
            {ITEMS.map((item, i) => {
              const TabIcon = item.Icon;
              return (
                <button
                  key={item.title}
                  type="button"
                  role="tab"
                  aria-selected={active === i}
                  className={`kf-tab ${active === i ? 'is-active' : ''}`}
                  onClick={(e) => {
                    select(i);
                    e.currentTarget.scrollIntoView({ block: 'nearest', inline: 'center', behavior: 'smooth' });
                  }}
                >
                  <TabIcon size={16} />
                  {item.title}
                </button>
              );
            })}
          </div>
          <div
            className="kf-stage"
            ref={stageRef}
            data-scene={active}
            data-motion={motionAllowed ? 'running' : 'paused'}
            data-reduced={!!reduce}
            data-running={running}
            data-auto={auto}
          >
            <div className="kf-stage-top">
              <span className="kf-stage-brand">
                <img className="kf-stage-appicon" src="/app-icon.svg" alt="" /> The collaboration space
              </span>
              {!reduce && (
                <button
                  className="kf-playback"
                  type="button"
                  onClick={togglePlayback}
                  aria-label={
                    isPlaying
                      ? 'Pause feature animation'
                      : 'Play feature animation'
                  }
                >
                  {isPlaying ? <Pause size={15} /> : <Play size={15} />}
                </button>
              )}
            </div>
            <div
              className="kf-canvas"
              style={{ '--art-scale': scale }}
              aria-hidden="true"
            >
              <AnimatePresence initial={false}>
                <motion.div
                  className="kf-scene"
                  key={sceneKey}
                  initial={reduce ? false : { opacity: 0, scale: 0.96, y: 24 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={
                    reduce
                      ? { opacity: 0, transition: { duration: 0 } }
                      : { opacity: 0, scale: 0.98, y: -16 }
                  }
                  transition={reduce ? { duration: 0 } : tween(0.4)}
                >
                  <Scene />
                </motion.div>
              </AnimatePresence>
            </div>
            <div className="kf-stage-bottom">
              <div className="kf-caption">
                <strong>{ITEMS[active].label}</strong>
                <span>{ITEMS[active].caption}</span>
              </div>
              <div className="kf-scene-nav" aria-label="Feature previews">
                {ITEMS.map((item, i) => (
                  <button
                    key={i}
                    type="button"
                    onClick={() => select(i)}
                    aria-label={`Show ${item.title.toLowerCase()}`}
                    aria-pressed={active === i}
                  >
                    <span
                      className={`kf-scene-dot ${active === i ? 'is-active' : ''}`}
                    >
                      {active === i && (
                        <span
                          key={sceneKey}
                          className="kf-tour-progress"
                          style={{ animationDuration: `${DURATION}ms` }}
                        />
                      )}
                    </span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </Pop>
        <Pop as="article" className="fcard fcard-dark" delay={0.12}>
          <span className="eyebrow">Campaign management</span>
          <h3 className="fcard-title">
            Run every collab
            <br />
            effortlessly.
          </h3>
          <p className="fcard-text">
            Keep briefs, creators and conversations moving together, from the
            first pitch to the final post.
          </p>
          <Accordion
            active={active}
            onChange={select}
            id={id}
            reduce={reduce}
            onFocus={() => setAuto(false)}
          />
          <span className="fcard-spark" aria-hidden="true">
            <Sparkles size={18} />
          </span>
        </Pop>
      </div>
    </section>
  );
}
