import React from 'react';
import { motion } from 'framer-motion';
import { useReducedMotion } from '../lib/motion-pref';
import {
  Chrome,
  Dribbble,
  Facebook,
  Figma,
  Instagram,
  Linkedin,
  Music2,
  Slack,
  Twitch,
  Twitter,
  Youtube,
} from 'lucide-react';
import { BlurText, Reveal, SectionTag, inView, spring } from '../motion.jsx';
import { Mockup } from './Phone.jsx';

const APPS = [
  ['Slack', Slack, '#4a154b'],
  ['Twitch', Twitch, '#9146ff'],
  ['Figma', Figma, '#a259ff'],
  ['LinkedIn', Linkedin, '#0a66c2'],
  ['Instagram', Instagram, '#e1306c'],
  ['YouTube', Youtube, '#ff0000'],
  ['TikTok', Music2, '#121214'],
  ['X', Twitter, '#121214'],
  ['Facebook', Facebook, '#1877f2'],
  ['Dribbble', Dribbble, '#ea4c89'],
  ['Chrome', Chrome, '#1a73e8'],
];

const CENTER = Math.floor(APPS.length / 2);
const layout = (i) => {
  const d = i - CENTER;
  const a = Math.abs(d);
  return {
    x: d * 126,
    y: a * a * 4.5 + a * 6,
    size: 168 - a * 16,
    rotate: d * 3,
    delay: a * 0.05,
  };
};

export default function Integrations({ number = '03' }) {
  const reduce = useReducedMotion();
  return (
    <section className="section integrations" id="integrations">
      <div className="section-head">
        <SectionTag number={number}>Integrations</SectionTag>
        <BlurText
          className="h2"
          lines={['Seamless integrations for a', 'seamless creator life.']}
        />
      </div>

      <motion.div
        className="arc-stage"
        initial={reduce ? false : 'hidden'}
        whileInView="show"
        viewport={{ ...inView, amount: 0.35 }}
        aria-label="Connected platforms"
      >
        <div className="arc-phone-wrap" aria-hidden="true">
          <Mockup name="connected" />
        </div>
        {APPS.map(([name, Icon, color], i) => {
          const { x, y, size, rotate, delay } = layout(i);
          return (
            <motion.span
              key={name}
              className="arc-tile"
              title={name}
              style={{
                width: size,
                height: size,
                marginLeft: -size / 2,
                borderRadius: size * 0.36,
                color,
              }}
              variants={{
                hidden: { x: 0, y: 60, scale: 0.6, opacity: 0, rotate: 0 },
                show: {
                  x,
                  y,
                  scale: 1,
                  opacity: 1,
                  rotate,
                  transition: spring(0.3, 1.2, delay),
                },
              }}
            >
              <Icon size={size * 0.46} strokeWidth={1.9} />
              <span className="sr-only">{name}</span>
            </motion.span>
          );
        })}
      </motion.div>

      <Reveal as="p" className="lead lead-wide">
        Connect your favourite channels, storefronts and creative tools in
        seconds. Spend less time copying links and more time making confident
        creative moves — all powered by seamless, secure automation.
      </Reveal>
    </section>
  );
}
