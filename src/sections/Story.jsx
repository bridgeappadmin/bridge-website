import React from 'react';
import {
  ChartColumn,
  Check,
  FileText,
  MessageCircle,
  Search,
  ShieldCheck,
} from 'lucide-react';
import { motion } from 'framer-motion';
import { useReducedMotion } from '../lib/motion-pref';
import { BlurText, Pop, SectionTag, inView, spring } from '../motion.jsx';

const PILLS = [
  ['Discovery', Search],
  ['Briefs', FileText],
  ['Chat', MessageCircle],
  ['Connects', null],
  ['Insights', ChartColumn],
  ['Trust', ShieldCheck],
];

export default function Story({ number = '02' }) {
  const reduce = useReducedMotion();
  const items = [...PILLS, ...PILLS];
  return (
    <section className="section story" id="story">
      <div className="section-head">
        <SectionTag number={number}>Story &amp; mission</SectionTag>
        <BlurText
          className="h2 on-dark"
          lines={['Empowering creators.', 'Empowering brands.']}
        />
      </div>
      <div className="story-grid">
        <Pop as="article" className="story-card" delay={0} amount="some">
          <p className="story-text">
            We started with a simple idea:{' '}
            <em>make collaboration feel human again.</em>
          </p>
          <p className="story-text">
            No agencies in the middle. No lost DMs.{' '}
            <em>
              Just a clearer way for creators and brands to find each other and
              do the work.
            </em>
          </p>
          <div className="story-ticker" aria-hidden="true">
            <div className="story-ticker-track">
              {items.map(([label, Icon], i) => (
                <span className="story-pill" key={`${label}-${i}`}>
                  {Icon ? (
                    <span className="story-pill-icon">
                      <Icon size={22} />
                    </span>
                  ) : (
                    <img
                      className="story-pill-coin"
                      src="/images/icons/connects-240.webp"
                      width={56}
                      height={56}
                      alt=""
                    />
                  )}
                  {label}
                </span>
              ))}
            </div>
          </div>
        </Pop>
        <Pop as="article" className="story-visual" delay={0.12} amount="some">
          {/* "Who are you joining as?" screen (Figma 484:85) with the
              "I am a Brand" role card popping out of it (Figma 486:76). */}
          <div className="story-device">
            <img
              className="story-phone"
              src="/images/mockups/role-select-gold.webp"
              width={600}
              height={1305}
              alt="Tazmify app screen asking whether you are joining as a creator or a brand"
              loading="lazy"
              decoding="async"
            />
            <motion.div
              className="role-card"
              aria-hidden="true"
              initial={reduce ? false : { opacity: 0, x: -24, scale: 0.92 }}
              whileInView={{ opacity: 1, x: 0, scale: 1 }}
              viewport={inView}
              transition={spring(0.35, 1, 0.35)}
            >
              <span className="role-card-radio">
                <Check strokeWidth={3} />
              </span>
              <strong>I am a Brand</strong>
              <span className="role-card-text">
                Find creators, run campaigns and track performance.
              </span>
              <img
                className="role-card-mascot"
                src="/images/mockups/mascot-brand-tablet.webp"
                width={360}
                height={505}
                alt=""
                loading="lazy"
              />
            </motion.div>
          </div>
        </Pop>
      </div>
    </section>
  );
}
