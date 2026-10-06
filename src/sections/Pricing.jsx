import React from 'react';
import { Check, Gift, Send, Sparkles } from 'lucide-react';
import { BlurText, Pop, Reveal, SectionTag } from '../motion.jsx';
import { CONNECTS_LIVE } from '../config/launch.js';

// Connects top-up packs, exactly as listed on the app's Connects screen.
// Each application uses 2 connects; every account gets 10 free each month.
const PER_APPLICATION = 2;
const PACKS = [
  {
    key: 'starter',
    name: 'Starter',
    badge: 'Try it out',
    badgeTone: 'gray',
    connects: 10,
    price: 99,
    tone: 'free',
    text: 'Top up for a handful of pitches when a campaign you love goes live.',
    features: [
      'Apply with pitch, portfolio and quote',
      'Direct chat with brands',
      'Protected payments on delivery',
    ],
  },
  {
    key: 'popular',
    name: 'Popular',
    badge: 'Most popular',
    badgeTone: 'violet',
    connects: 30,
    price: 249,
    tone: 'plus',
    text: 'The pack most creators pick for a steady month of applications.',
    features: [
      'Everything in Starter',
      'Pitch more campaigns every week',
      'Save 16% per connect vs Starter',
    ],
  },
  {
    key: 'pro',
    name: 'Pro',
    badge: 'Best value',
    badgeTone: 'white',
    connects: 100,
    price: 699,
    tone: 'premium',
    text: 'For full-time creators pitching across niches and brands.',
    features: [
      'Everything in Popular',
      'Lowest price per connect',
      'Save 29% per connect vs Starter',
    ],
  },
];

const perConnect = (p) =>
  (p.price / p.connects).toLocaleString('en-IN', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });

export default function Pricing({ number = '05' }) {
  return (
    <section className="section pricing" id="pricing">
      <div className="section-head">
        <SectionTag number={number}>Pricing</SectionTag>
        <BlurText
          className="h2"
          lines={['Simple Connects', 'for smarter collabs.']}
        />
        <Reveal as="p" className="lead">
          {CONNECTS_LIVE
            ? 'Joining Tazmify is free. Connects are what you spend to apply to campaigns. Top up only when you need more.'
            : 'Joining Tazmify is free. Connects, the credits you use to apply to campaigns, are coming soon. Pricing will be shared before they launch.'}
        </Reveal>
        <Reveal className="connects-facts" delay={0.35}>
          {CONNECTS_LIVE ? (
            <>
              <span>
                <Send size={16} /> Each application uses {PER_APPLICATION}{' '}
                connects
              </span>
              <span>
                <Gift size={16} /> 10 free connects every month
              </span>
            </>
          ) : (
            <span className="connects-soon">
              <Sparkles size={16} /> Connects coming soon
            </span>
          )}
        </Reveal>
      </div>

      <Pop className="price-box" delay={0} amount="some">
        {PACKS.map((pack) => (
          <article className={`plan plan-${pack.tone}`} key={pack.key}>
            <div className="plan-name">
              <h3>{pack.name}</h3>
              <span className={`plan-badge plan-badge-${pack.badgeTone}`}>
                {pack.badgeTone === 'violet' && <Sparkles size={12} />}
                {pack.badge}
              </span>
            </div>
            <div className="plan-price">
              {CONNECTS_LIVE ? (
                <>
                  <strong>
                    <i>₹</i>
                    {pack.price.toLocaleString('en-IN')}
                  </strong>
                  <span>/ {pack.connects} connects</span>
                </>
              ) : (
                <strong className="plan-soon">Coming soon</strong>
              )}
            </div>
            <p className="plan-text">{pack.text}</p>
            <div className="plan-connects">
              <img
                className="plan-coin"
                src="/images/icons/connects-240.webp"
                width={80}
                height={80}
                alt=""
                loading="lazy"
              />
              {CONNECTS_LIVE ? (
                <span>
                  <strong>{pack.connects} connects</strong>
                  <small>{pack.connects / PER_APPLICATION} applications</small>
                  <small>₹{perConnect(pack)} per connect</small>
                </span>
              ) : (
                <span>
                  <strong>Connects pack</strong>
                  <small>Details and pricing at launch</small>
                </span>
              )}
            </div>
            <strong className="plan-included">What you get:</strong>
            <ul>
              {(CONNECTS_LIVE
                ? pack.features
                : pack.features.filter((f) => !/Save|price|per connect/i.test(f))
              ).map((f) => (
                <li key={f}>
                  <Check size={14} strokeWidth={2.6} />
                  {f}
                </li>
              ))}
            </ul>
            {CONNECTS_LIVE ? (
              <a className="btn btn-secondary plan-cta" href="#download">
                <span>Top up in the app</span>
              </a>
            ) : (
              <span className="btn btn-secondary plan-cta is-soon" aria-disabled="true">
                <span>Coming soon</span>
              </span>
            )}
          </article>
        ))}
      </Pop>
    </section>
  );
}
