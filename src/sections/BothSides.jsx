import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, Check, Clapperboard, Megaphone } from 'lucide-react';
import { BlurText, Pop, Reveal, SectionTag } from '../motion.jsx';

// About page: who Tazmify is for. Replaces the former team carousel.
const SIDES = [
  {
    key: 'creators',
    label: 'For creators',
    title: 'Turn your content into paid work',
    Icon: Clapperboard,
    points: [
      'Discover campaigns that match your niche',
      'Pitch with your portfolio and quote',
      'Chat directly with brands',
      'Get paid on approval, tracked in one place',
    ],
    cta: ['See creator features', '/features'],
  },
  {
    key: 'brands',
    label: 'For brands',
    title: 'Find the right creators, faster',
    Icon: Megaphone,
    points: [
      'Publish a brief in minutes',
      'Shortlist creators by niche and fit',
      'Approve drafts and deliverables',
      'Pay securely once the work is approved',
    ],
    cta: ['See Connects pricing', '/pricing'],
  },
];

export default function BothSides({ number = '03' }) {
  return (
    <section className="section both-sides" id="who-its-for">
      <div className="section-head">
        <SectionTag number={number}>Who it’s for</SectionTag>
        <BlurText
          className="h2"
          lines={['Built for both sides', 'of every collab.']}
        />
        <Reveal as="p" className="lead">
          One app where creators find paid work and brands find the right
          voices, with everything in between handled in the same thread.
        </Reveal>
      </div>
      <div className="sides-grid">
        {SIDES.map(({ key, label, title, Icon, points, cta }, i) => (
          <Pop
            as="article"
            className={`side-card side-card-${key}`}
            key={key}
            delay={i * 0.08}
          >
            <span className="side-icon">
              <Icon size={24} />
            </span>
            <span className="side-label">{label}</span>
            <h3>{title}</h3>
            <ul>
              {points.map((p) => (
                <li key={p}>
                  <Check size={16} strokeWidth={2.6} />
                  {p}
                </li>
              ))}
            </ul>
            <Link className="btn btn-secondary side-cta" to={cta[1]}>
              <span>
                {cta[0]} <ArrowUpRight size={16} />
              </span>
            </Link>
          </Pop>
        ))}
      </div>
    </section>
  );
}
