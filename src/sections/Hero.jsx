import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useReducedMotion } from '../lib/motion-pref';
import { Link } from 'react-router-dom';
import {
  ArrowUpRight,
  Baby,
  BookOpen,
  Camera,
  Car,
  Dumbbell,
  Gamepad2,
  GraduationCap,
  HeartPulse,
  Laugh,
  Music,
  Palette,
  PawPrint,
  Plane,
  Shirt,
  Smartphone,
  Sofa,
  Sparkles,
  Sun,
  Trophy,
  TrendingUp,
  UtensilsCrossed,
  Wallet,
} from 'lucide-react';
import { spring, useIsMobile } from '../motion.jsx';
import { SplashPhone } from '@/components/tazmify/splash-phone';


// Creator niches on Tazmify, shown as a looping ticker under the hero.
const NICHES = [
  ['Fashion', Shirt],
  ['Beauty', Sparkles],
  ['Fitness', Dumbbell],
  ['Food', UtensilsCrossed],
  ['Travel', Plane],
  ['Tech', Smartphone],
  ['Gaming', Gamepad2],
  ['Music', Music],
  ['Lifestyle', Sun],
  ['Finance', Wallet],
  ['Education', GraduationCap],
  ['Health & Wellness', HeartPulse],
  ['Parenting', Baby],
  ['Pets', PawPrint],
  ['Photography', Camera],
  ['Comedy', Laugh],
  ['Home & Decor', Sofa],
  ['Automotive', Car],
  ['Art & Design', Palette],
  ['Sports', Trophy],
  ['Books', BookOpen],
];

function LogoTicker() {
  const items = [...NICHES, ...NICHES];
  return (
    <div className="ticker" aria-label="Creator niches on Tazmify">
      <div className="ticker-track">
        {items.map(([name, Icon], i) => (
          <span
            className="ticker-logo"
            key={`${name}-${i}`}
            aria-hidden={i >= NICHES.length}
          >
            <Icon size={26} strokeWidth={2.4} />
            {name}
          </span>
        ))}
      </div>
    </div>
  );
}

// Floating cards: HTML replicas of the reference's card artwork with rupee
// amounts. Positions, rotations and entrance springs come from the reference.
const CARDS = [
  {
    slot: 'hslot-balance',
    from: { rotate: -37, x: -221, y: -67 },
    to: { rotate: -13, x: 0, y: 0 },
    delay: 0.1,
    front: false,
    render: () => (
      <div className="hcard hcard-balance">
        <span className="hcard-label">Your Balance</span>
        <strong>₹80,240</strong>
        <span className="hcard-pill">+20,8%</span>
        <span className="hcard-account">**** 7421</span>
      </div>
    ),
  },
  {
    slot: 'hslot-plus',
    from: { rotate: -17, x: 218, y: -91 },
    to: { rotate: -12, x: 0, y: 0 },
    delay: 0.3,
    front: false,
    render: () => (
      <div className="hcard hcard-plus">
        <span className="hcard-plus-text">
          <small>Campaign payout</small>
          <strong>+ ₹24,050</strong>
        </span>
        <span className="hcard-plus-ico">
          <TrendingUp size={18} strokeWidth={2.4} />
        </span>
      </div>
    ),
  },
  {
    slot: 'hslot-pay',
    from: { rotate: -5, x: -98, y: -80 },
    to: { rotate: 9, x: 0, y: 0 },
    delay: 0.2,
    front: true,
    render: () => (
      <div className="hcard hcard-pay">
        <strong>₹27,400</strong>
        <span>/week</span>
        <b>Pay</b>
      </div>
    ),
  },
  {
    slot: 'hslot-expense',
    from: { rotate: 24, x: 202, y: -252 },
    to: { rotate: 18, x: 0, y: 0 },
    delay: 0.1,
    front: true,
    render: () => (
      <div className="hcard hcard-expense">
        <span className="hcard-label">Total earned</span>
        <strong>₹6,850</strong>
        <i className="hcard-dots">···</i>
        <span className="hcard-bars" aria-hidden="true">
          {[40, 70, 55, 90, 62, 78, 48].map((h, i) => (
            <span key={i} style={{ '--h': `${h}%` }} className={i === 3 ? 'is-hot' : ''} />
          ))}
        </span>
      </div>
    ),
  },
];

// Glow and texture are the reference template's own (public/images/ref).
const art = (name) => `/images/ref/${name}`;

export default function Hero() {
  const reduce = useReducedMotion();
  const anim = (props) =>
    reduce ? { initial: false, animate: props.animate } : props;

  // Everything on the stage drifts downward as the page scrolls; the phone
  // and the front cards move faster than the cards behind.
  const { scrollY } = useScroll();
  // Phones scale the stage to ~0.6 and the hero is shorter, so the same
  // drift runs over less scroll with larger stage offsets to stay visible.
  const mobile = useIsMobile();
  const range = mobile ? [0, 520] : [0, 900];
  const backDrift = useTransform(scrollY, range, mobile ? [0, 330] : [0, 200]);
  const frontDrift = useTransform(scrollY, range, mobile ? [0, 520] : [0, 340]);
  const phoneDrift = useTransform(scrollY, range, mobile ? [0, 430] : [0, 260]);
  const drift = (value) => (reduce ? undefined : { y: value });

  const renderCard = (card) => (
    <motion.div
      key={card.slot}
      className={`hslot ${card.slot}`}
      style={drift(card.front ? frontDrift : backDrift)}
    >
      <motion.div
        className="hcard-spin"
        {...anim({
          initial: card.from,
          animate: card.to,
          transition: spring(0.2, 2.5, card.delay),
        })}
      >
        {card.render()}
      </motion.div>
    </motion.div>
  );

  return (
    <section className="hero" id="home">
      <div className="hero-bg" aria-hidden="true">
        <img className="hero-texture" src={art('hero-texture.svg')} alt="" />
        <img className="hero-glow" src={art('hero-glow.webp')} alt="" />
      </div>
      <div className="hero-stage" aria-hidden="true">
        {CARDS.filter((c) => !c.front).map(renderCard)}
        <motion.div className="hero-phone-drift" style={drift(phoneDrift)}>
          <motion.div
            className="hero-phone-wrap"
            {...anim({
              initial: { y: 108 },
              animate: { y: 0 },
              transition: spring(0.2, 2.5, 0.2),
            })}
          >
            <SplashPhone />
          </motion.div>
        </motion.div>
        {CARDS.filter((c) => c.front).map(renderCard)}
        <div className="hero-glass" />
      </div>

      <div className="hero-copy">
        <h1 className="hero-title">
          <motion.span
            className="hero-line hero-line-1"
            {...anim({
              initial: { opacity: 0, scale: 0.5, y: 50 },
              animate: { opacity: 1, scale: 1, y: 0 },
              transition: spring(0.6, 1.2, 0.4),
            })}
          >
            Better work.
          </motion.span>
          <motion.span
            className="hero-line hero-line-2"
            {...anim({
              initial: { opacity: 0, scale: 0.5, y: 50 },
              animate: { opacity: 1, scale: 1, y: 0 },
              transition: spring(0.6, 1.2, 0.6),
            })}
          >
            Together.
          </motion.span>
        </h1>
        <motion.p
          className="hero-lead"
          {...anim({
            initial: { opacity: 0, y: 150 },
            animate: { opacity: 1, y: 0 },
            transition: spring(0.2, 0.4),
          })}
        >
          A complete platform for creators and brands to discover each other,
          agree on the work, and get it done — all in one place.
        </motion.p>
        <motion.div
          className="hero-actions"
          {...anim({
            initial: { opacity: 0, y: 150 },
            animate: { opacity: 1, y: 0 },
            transition: spring(0.2, 0.4, 0.05),
          })}
        >
          <a className="btn btn-primary" href="#download">
            <span>Get started</span>
          </a>
          <Link className="btn btn-secondary" to="/features">
            <span>
              Explore Tazmify <ArrowUpRight size={16} />
            </span>
          </Link>
        </motion.div>
      </div>

      <LogoTicker />
      <div className="hero-sheets" aria-hidden="true">
        <span />
        <span />
      </div>
    </section>
  );
}
