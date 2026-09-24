import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useReducedMotion } from '../lib/motion-pref';
import { Camera, Handshake, Megaphone, TrendingUp, Wallet } from 'lucide-react';

const CONTENT = [
  'From your first',
  { pill: 'Campaign' },
  'to lasting',
  { pill: 'Partnerships,' },
  'Tazmify unites every tool you need to take charge of your',
  { pill: 'Creative Business', dark: true, Icon: TrendingUp },
  '— all in one intuitive, secure space.',
];

const TILES = [
  {
    Icon: Megaphone,
    size: 121,
    className: 'st-tile-1',
    from: 140,
    to: -60,
    rot: 20,
  },
  {
    Icon: Handshake,
    size: 64,
    className: 'st-tile-2',
    from: 90,
    to: -90,
    rot: -14,
  },
  {
    Icon: Wallet,
    size: 95,
    className: 'st-tile-3',
    from: 120,
    to: -40,
    rot: -12,
  },
  {
    Icon: Camera,
    size: 86,
    className: 'st-tile-4',
    from: 60,
    to: -80,
    rot: 10,
  },
  {
    Icon: TrendingUp,
    size: 93,
    className: 'st-tile-5',
    from: 160,
    to: -30,
    rot: 22,
  },
  {
    // The app's Connects coin (Figma 297:2).
    coin: true,
    size: 92,
    className: 'st-tile-6 st-tile-coin',
    from: 110,
    to: -50,
    rot: -8,
  },
];

// The words finish revealing halfway through the pinned scroll, then the
// section holds in place until the next one arrives (see .statement height).
const REVEAL_START = 0.04;
const REVEAL_END = 0.5;

const tokens = CONTENT.flatMap((part) =>
  typeof part === 'string' ? part.split(' ').map((w) => ({ word: w })) : [part],
);
const N = tokens.length;
const win = (i) => [
  REVEAL_START + ((REVEAL_END - REVEAL_START) * i) / N,
  REVEAL_START + ((REVEAL_END - REVEAL_START) * (i + 1)) / N,
];

function Word({ text, progress, start, end, reduce }) {
  const color = useTransform(progress, [start, end], ['#d9d9d9', '#121214']);
  return (
    <motion.span className="st-word" style={reduce ? undefined : { color }}>
      {text}{' '}
    </motion.span>
  );
}

function Pill({ label, dark, Icon, progress, start, end, reduce }) {
  const opacity = useTransform(progress, [start, end], [0, 1]);
  const scale = useTransform(progress, [start, end], [0.6, 1]);
  return (
    <motion.span
      className={`st-pill ${dark ? 'is-dark' : ''}`}
      style={reduce ? undefined : { '--st-o': opacity, scale }}
    >
      {label}
      {Icon && (
        <span className="st-pill-tile" aria-hidden="true">
          <Icon size={26} />
        </span>
      )}
    </motion.span>
  );
}

function Tile({ Icon, coin, size, className, from, to, rot, progress, reduce }) {
  const y = useTransform(progress, [0, REVEAL_END + 0.05], [from, to]);
  const rotate = useTransform(
    progress,
    [0, REVEAL_END + 0.05],
    [rot - 18, rot + 6],
  );
  const opacity = useTransform(progress, [0.02, 0.15], [0, 1]);
  return (
    <motion.span
      className={`st-tile ${className}`}
      style={
        reduce
          ? { width: size, height: size, rotate: rot }
          : { width: size, height: size, y, rotate, '--st-o': opacity }
      }
      aria-hidden="true"
    >
      {coin ? (
        <img src="/images/icons/connects-240.webp" alt="" width={size} height={size} />
      ) : (
        <Icon size={size * 0.42} strokeWidth={2.2} />
      )}
    </motion.span>
  );
}

export default function Statement() {
  const ref = useRef(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end end'],
  });

  return (
    <section className="statement" ref={ref} aria-label="Why Tazmify">
      <div className="statement-pin">
        <p className="statement-text">
          {tokens.map((t, i) => {
            const [start, end] = win(i);
            return t.pill ? (
              <Pill
                key={i}
                label={t.pill}
                dark={t.dark}
                Icon={t.Icon}
                progress={scrollYProgress}
                start={start}
                end={end}
                reduce={reduce}
              />
            ) : (
              <Word
                key={i}
                text={t.word}
                progress={scrollYProgress}
                start={start}
                end={end}
                reduce={reduce}
              />
            );
          })}
        </p>
        {TILES.map((tile) => (
          <Tile
            key={tile.className}
            {...tile}
            progress={scrollYProgress}
            reduce={reduce}
          />
        ))}
      </div>
    </section>
  );
}
