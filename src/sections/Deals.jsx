import React, { useRef, useState } from 'react';
import { AnimatePresence, motion, useInView, useMotionValueEvent, useScroll } from 'framer-motion';
import { useReducedMotion } from '../lib/motion-pref';
import {
  Check,
  FileText,
  MessageCircle,
  Send,
  ShieldCheck,
  TriangleAlert,
} from 'lucide-react';
import { BlurText, Reveal, spring, tween} from '../motion.jsx';
import { Mockup } from './Phone.jsx';

function ChatScreen() {
  return (
    <div className="deal-art deal-art-chat" aria-hidden="true">
      <div className="deal-art-orbit" />
      <div className="deal-device-wrap">
        <Mockup name="chat" className="deal-device" />
      </div>
      <span className="deal-accent deal-chat-left">
        <MessageCircle size={24} />
        <span className="deal-typing">
          <i />
          <i />
          <i />
        </span>
      </span>
      <span className="deal-accent deal-chat-right">
        <Send size={25} />
      </span>
      <svg className="deal-signal" viewBox="0 0 620 520" fill="none">
        <path d="M104 176 C126 176 157 154 189 173 M426 363 C467 351 470 316 517 316" />
      </svg>
    </div>
  );
}
function BriefScreen() {
  return (
    <div className="deal-art deal-art-brief" aria-hidden="true">
      <div className="deal-art-orbit" />
      <div className="deal-device-wrap">
        <Mockup name="apply-sheet" className="deal-device" />
      </div>
      <span className="deal-badge deal-brief-approved">
        <span className="deal-badge-check">
          <Check size={15} />
        </span>
        Approved
      </span>
      <span className="deal-badge deal-brief-pay">
        <i />
        Direct pay + ₹5,000
      </span>
    </div>
  );
}
function TrustScreen() {
  return (
    <div className="deal-art deal-art-trust" aria-hidden="true">
      <div className="deal-art-orbit" />
      <div className="deal-device-wrap">
        <Mockup name="connected" className="deal-device" />
      </div>
      <span className="deal-badge deal-trust-profile">
        <span className="deal-badge-check">
          <ShieldCheck size={18} />
        </span>
        <span>
          <b>Profile verified</b>
          <small>08:02 AM</small>
        </span>
      </span>
      <span className="deal-badge deal-trust-payment">
        <span className="deal-badge-check">
          <TriangleAlert size={18} />
        </span>
        <span>
          <b>Payment protected</b>
          <small>Released on delivery</small>
        </span>
      </span>
    </div>
  );
}

const STEPS = [
  {
    title: 'Direct chat with brands',
    text: 'Pitch, negotiate and agree on the details in one thread, with nothing lost in email.',
    Icon: MessageCircle,
    Screen: ChatScreen,
  },
  {
    title: 'Briefs & deliverables',
    text: 'Every campaign becomes a clear checklist with formats, dates and approvals.',
    Icon: FileText,
    Screen: BriefScreen,
  },
  {
    title: 'Trust & safety',
    text: 'Verified profiles and protected payments keep every collaboration fair.',
    Icon: ShieldCheck,
    Screen: TrustScreen,
  },
];

function Deal({ step, index, onSelect, reduce, stage }) {
  const ref = useRef(null);
  const visible = useInView(ref, { amount: 0.25 });
  const { title, text, Screen, Icon } = step;
  if (stage) {
    // Desktop scroll stage (reference behaviour): the frame stays pinned and
    // still; only the scene inside it, the rail icon and the copy swap, with
    // the badges popping in on their own springs.
    return (
      <div
        ref={ref}
        className="deal deal-stage is-active"
        data-step={index}
        data-visible={visible}
      >
        <div className="deal-rail">
          <AnimatePresence initial={false} mode="popLayout">
            <motion.span
              key={index}
              className="deal-rail-icon"
              initial={{ scale: 0.6, opacity: 0, rotate: -12 }}
              animate={{ scale: 1, opacity: 1, rotate: 0 }}
              exit={{ scale: 0.6, opacity: 0 }}
              transition={spring(0.45, 0.7)}
            >
              <Icon size={26} />
            </motion.span>
          </AnimatePresence>
          <ol className="deals-steps deals-steps-rail" aria-label="Collaboration steps">
            {STEPS.map((item, i) => (
              <li key={item.title}>
                <button
                  type="button"
                  aria-label={`Step ${i + 1}: ${item.title}`}
                  aria-current={i === index ? 'step' : undefined}
                  className={i === index ? 'is-active' : i < index ? 'is-done' : ''}
                  onClick={() => onSelect(i)}
                >
                  <span>{i + 1}</span>
                </button>
              </li>
            ))}
          </ol>
        </div>
        <div className="deal-frame-wrap">
          <span className="deal-ghost deal-ghost-top" aria-hidden="true" />
          <span className="deal-ghost deal-ghost-bottom" aria-hidden="true" />
          <div className="deal-frame">
            <div className="deal-screen">
              <AnimatePresence initial={false} mode="popLayout">
                <motion.div
                  key={index}
                  className="deal-screen-scene"
                  initial={{ opacity: 0, scale: 0.94 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 1.03 }}
                  transition={spring(0.25, 0.7)}
                >
                  <Screen />
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
        <div className="deal-copy">
          <AnimatePresence initial={false} mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={tween(0.3)}
            >
              <h3>{title}</h3>
              <p>{text}</p>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    );
  }
  return (
    <div
      ref={ref}
      className="deal is-active"
      data-step={index}
      data-visible={visible}
      data-reduced={!!reduce}
    >
      <div className="deal-frame">
        <div className="deal-screen">
          <Screen />
        </div>
      </div>
      <div className="deal-copy">
        <span className="deal-chapter">
          <Icon size={18} />
          <span>
            0{index + 1}
            <i />
            03
          </span>
        </span>
        <h3>{title}</h3>
        <p>{text}</p>
        {onSelect && (
          <ol className="deals-steps" aria-label="Collaboration steps">
            {STEPS.map((item, i) => (
              <li key={item.title}>
                <button
                  type="button"
                  aria-label={`Step ${i + 1}: ${item.title}`}
                  aria-current={i === index ? 'step' : undefined}
                  className={i === index ? 'is-active' : ''}
                  onClick={() => onSelect(i)}
                >
                  <span>0{i + 1}</span>
                </button>
              </li>
            ))}
          </ol>
        )}
      </div>
    </div>
  );
}

function ScrollingDeals() {
  const ref = useRef(null);
  const [active, setActive] = useState(0);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end end'],
  });
  useMotionValueEvent(scrollYProgress, 'change', (value) =>
    setActive(value < 0.34 ? 0 : value < 0.67 ? 1 : 2),
  );
  const select = (index) => {
    const track = ref.current;
    if (!track) return;
    const start = track.getBoundingClientRect().top + window.scrollY;
    const travel = track.offsetHeight - window.innerHeight;
    window.scrollTo({
      top: start + travel * [0.1, 0.5, 0.86][index],
      behavior: 'instant',
    });
    setActive(index);
  };
  return (
    <div className="deals-track" ref={ref}>
      <div className="deals-pin">
        <div className="deals-window" data-active-step={active}>
          <Deal step={STEPS[active]} index={active} onSelect={select} stage />
        </div>
      </div>
    </div>
  );
}

export default function Deals() {
  const reduce = useReducedMotion();
  return (
    <section className="section deals" id="deals">
      <div className="section-head">
        <Reveal as="span" className="eyebrow" delay={0}>
          Direct collaboration
        </Reveal>
        <BlurText
          className="h3-lg on-dark"
          lines={['Pitch and get hired.', 'Quickly, safely, fairly.']}
        />
        <Reveal as="p" className="lead">
          Make every collaboration smooth and secure, whether it&rsquo;s a
          one-off post, a launch campaign or a year-long partnership.
        </Reveal>
      </div>
      {reduce ? (
        <div className="deals-static">
          {STEPS.map((step, index) => (
            <motion.div
              key={step.title}
              initial={reduce ? false : { opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={spring(0.2, 1.4)}
            >
              <Deal step={step} index={index} reduce={reduce} />
            </motion.div>
          ))}
        </div>
      ) : (
        <ScrollingDeals />
      )}
    </section>
  );
}
