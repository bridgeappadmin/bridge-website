import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useReducedMotion } from '../lib/motion-pref';
import { Facebook, Instagram, Linkedin, Youtube } from 'lucide-react';
import {
  BlurText,
  Reveal,
  inView,
  spring,
  useElementSize,
  useIsMobile,
} from '../motion.jsx';

function XMark() {
  return (
    <svg viewBox="0 0 24 24" width="26" height="26" aria-hidden="true">
      <path
        fill="currentColor"
        d="M18.9 1.5h3.4l-7.4 8.5 8.7 11.5h-6.8l-5.3-7-6.1 7H1.9l7.9-9.1L1.5 1.5h7l4.8 6.4 5.6-6.4Zm-1.2 18h1.9L7.4 3.4H5.4l12.3 16.1Z"
      />
    </svg>
  );
}

// Icon tiles: positions live in cta.css, measured from the reference stage.
const SOCIAL = [
  ['YouTube', Youtube, 'cta-social-yt', 0],
  ['LinkedIn', Linkedin, 'cta-social-in', 0.1],
  ['Facebook', Facebook, 'cta-social-fb', 0.2],
  ['X', XMark, 'cta-social-x', 0.3],
  ['Instagram', Instagram, 'cta-social-ig', 0.4],
];

function AppleMark() {
  return (
    <svg viewBox="0 0 24 24" width="30" height="30" aria-hidden="true">
      <path
        fill="currentColor"
        d="M16.37 12.63c.03 2.89 2.53 3.85 2.56 3.86-.02.07-.4 1.38-1.33 2.72-.8 1.17-1.63 2.33-2.94 2.35-1.29.02-1.7-.76-3.17-.76-1.47 0-1.93.74-3.15.79-1.26.05-2.22-1.26-3.03-2.42-1.65-2.38-2.91-6.72-1.22-9.66.84-1.46 2.35-2.38 3.98-2.4 1.24-.03 2.41.83 3.17.83.76 0 2.19-1.03 3.69-.88.63.03 2.39.25 3.52 1.9-.09.06-2.1 1.23-2.08 3.67zM13.94 5.5c.67-.81 1.12-1.94 1-3.07-.97.04-2.14.65-2.83 1.46-.62.72-1.16 1.87-1.02 2.97 1.08.08 2.18-.55 2.85-1.36z"
      />
    </svg>
  );
}

function PlayMark() {
  return (
    <svg viewBox="0 0 24 24" width="30" height="30" aria-hidden="true">
      <path
        fill="#34a853"
        d="M3.6 2.4 13.9 12 3.6 21.6c-.4-.2-.6-.6-.6-1.1V3.5c0-.5.2-.9.6-1.1z"
      />
      <path
        fill="#fbbc04"
        d="M13.9 12l3.3-3.1 3.6 2.1c1 .6 1 1.5 0 2.1l-3.6 2.1L13.9 12z"
      />
      <path
        fill="#4285f4"
        d="M3.6 2.4c.3-.2.8-.2 1.3.1l12.3 6.4L13.9 12 3.6 2.4z"
      />
      <path
        fill="#ea4335"
        d="M13.9 12l3.3 3.1L4.9 21.5c-.5.3-1 .3-1.3.1L13.9 12z"
      />
    </svg>
  );
}

// The reference stage: 614 x 400 at 1440px, scaled down to fit narrower
// viewports. Every child is positioned inside it in reference pixels.
const STAGE_W = 614;
const STAGE_H = 400;
// Widest heading line ("Collaborate.") is 746px at 128px on desktop. On
// phones the panel narrows to a 460px zone (see cta.css) and the type shrinks
// to fit it, so the whole stage can scale up. The stage always keeps a 16px
// gutter each side.
const FIT_W = 746;
const FIT_W_MOBILE = 460;

export default function Download() {
  const reduce = useReducedMotion();
  const sectionRef = useRef(null);
  const stageRef = useRef(null);

  const isMobile = useIsMobile();
  const { width } = useElementSize(sectionRef);
  const bpScale = 1;
  const fit = isMobile ? FIT_W_MOBILE : FIT_W;
  const scale = width ? Math.min(bpScale, (width - 32) / fit) : bpScale;

  // Choreography measured from the reference: from the moment the stage
  // enters at the bottom of the viewport until it reaches the top, the three
  // lines slide from staggered offsets (-229 / +380 / -359px) to centred while
  // the phone panel rises 108px to rest just under the first line.
  const { scrollYProgress } = useScroll({
    target: stageRef,
    // On phones the section is read in the middle of the screen, so the lines
    // settle when the stage is centred instead of at the very top.
    offset: isMobile ? ['start end', 'center center'] : ['start end', 'start start'],
  });
  const line1 = useTransform(scrollYProgress, [0, 1], [-229, 0]);
  const line2 = useTransform(scrollYProgress, [0, 1], [380, 0]);
  const line3 = useTransform(scrollYProgress, [0, 1], [-359, 0]);
  const rise = useTransform(scrollYProgress, [0, 1], [108, 0]);
  const lineStyle = (x) => (reduce ? undefined : { x });
  const riseStyle = reduce ? undefined : { y: rise };

  return (
    <section className="section cta" id="download" ref={sectionRef}>
      <div
        className="cta-stage-outer"
        ref={stageRef}
        style={{ height: STAGE_H * scale }}
      >
        <motion.div
          className="cta-stage"
          style={{ '--s': scale }}
          initial={reduce ? false : 'hidden'}
          whileInView="show"
          viewport={{ ...inView, amount: 0.3 }}
        >
          {/* Layer 1: gradient-filled heading, behind the panel */}
          <BlurText
            as="h2"
            className="cta-title"
            lines={[
              { text: 'Create.', style: lineStyle(line1) },
              { text: 'Connect.', style: lineStyle(line2) },
              { text: 'Collaborate.', style: lineStyle(line3) },
            ]}
            delay={0}
          />

          {/* Layer 2: rounded clip holding the phone and the violet fade */}
          <motion.div className="cta-panel" style={riseStyle} aria-hidden="true">
            <motion.div
              className="cta-phone"
              variants={{
                hidden: { y: 140, opacity: 0 },
                show: {
                  y: 0,
                  opacity: 1,
                  transition: spring(0.2, 1.6, 0.2),
                },
              }}
            >
              <img
                src="/images/ref/cta-phone.webp"
                width={338}
                height={681}
                alt=""
                loading="lazy"
                decoding="async"
              />
              <motion.span
                className="cta-coin"
                variants={{
                  hidden: { scale: 0, opacity: 0 },
                  show: {
                    scale: 1,
                    opacity: 1,
                    transition: spring(0.5, 1, 0.6),
                  },
                }}
              >
                <img src="/logo-mark-light.svg" width={83} height={100} alt="" />
              </motion.span>
            </motion.div>
            <span className="cta-fade" />
          </motion.div>

          {/* Layer 3: social tiles */}
          <div className="cta-icons">
            {SOCIAL.map(([name, Icon, cls, delay]) => (
              <motion.span
                key={name}
                className={`cta-social ${cls}`}
                title={name}
                variants={{
                  hidden: { scale: 0, opacity: 0 },
                  show: {
                    scale: 1,
                    opacity: 1,
                    transition: spring(0.5, 1, 0.4 + delay),
                  },
                }}
              >
                <Icon size={30} strokeWidth={1.9} />
                <span className="sr-only">{name}</span>
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>

      <Reveal className="cta-actions" delay={0.3}>
        <a
          className="btn btn-store is-soon"
          href="#download"
          aria-label="App Store, coming soon"
          aria-disabled="true"
          onClick={(e) => e.preventDefault()}
        >
          <span>
            <AppleMark />
            <span className="store-text">
              <small>Coming soon on the</small>
              <strong>App Store</strong>
            </span>
          </span>
        </a>
        <a
          className="btn btn-store is-soon"
          href="#download"
          aria-label="Google Play, coming soon"
          aria-disabled="true"
          onClick={(e) => e.preventDefault()}
        >
          <span>
            <PlayMark />
            <span className="store-text">
              <small>Coming soon on</small>
              <strong>Google Play</strong>
            </span>
          </span>
        </a>
      </Reveal>
    </section>
  );
}
