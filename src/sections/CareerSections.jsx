import React from 'react';
import { Link } from 'react-router-dom';
import {
  Briefcase,
  Clock,
  Globe,
  GraduationCap,
  HeartHandshake,
  Laptop,
  Lightbulb,
  MapPin,
  Puzzle,
  Sparkles,
  TrendingUp,
  Users,
  Wallet,
} from 'lucide-react';
import { BlurText, Pop, Reveal, SectionTag } from '../motion.jsx';
import { jobs } from '../data/jobs.js';
import { image } from './Phone.jsx';

const PERKS = [
  ['Remote-friendly team', Globe],
  ['Learning budget', GraduationCap],
  ['Flexible schedule', Clock],
  ['Modern tools', Laptop],
  ['Competitive pay', Wallet],
  ['Annual retreat', Sparkles],
  ['Inclusive culture', HeartHandshake],
  ['Room to grow', TrendingUp],
];
// Team-life strip: parties, shoots, podcasts, lounging (Unsplash, free licence;
// credits in README). Two identical halves, each wider than the widest
// layout, so the ticker loops with no visible end.
const FACES = Array.from(
  { length: 14 },
  (_, i) => `careers/team-${String(i + 1).padStart(2, '0')}.webp`,
);

export function Different({ number = '01' }) {
  const faces = [...FACES, ...FACES];
  return (
    <section className="section different" id="why-join">
      <div className="section-head">
        <SectionTag number={number}>Why join us?</SectionTag>
        <BlurText className="h2" lines={['What makes us different']} />
      </div>
      <Pop className="different-box" delay={0} amount="some">
        <p className="different-text">
          At Tazmify, we’re not just building a product.
          <br />
          We’re <em>redefining how creators and brands work together.</em>
          <br />
          Here, you’ll work with passionate, purpose-driven teammates who value
          collaboration, creativity and impact.
        </p>
        <ul className="perks" aria-label="Perks">
          {PERKS.map(([label, Icon]) => (
            <li key={label}>
              <span className="perk-icon">
                <Icon size={16} />
              </span>
              {label}
            </li>
          ))}
        </ul>
        {/* Phones: the same perks as one horizontal ticker (visual only; the
            list above stays available to assistive tech). */}
        <div className="perks-ticker" aria-hidden="true">
          <div className="perks-track">
            {[...PERKS, ...PERKS].map(([label, Icon], i) => (
              <span className="perk-chip" key={label + i}>
                <span className="perk-icon">
                  <Icon size={16} />
                </span>
                {label}
              </span>
            ))}
          </div>
        </div>
        <div className="faces" aria-hidden="true">
          <div className="faces-track">
            {faces.map((f, i) => (
              <span className="face" key={`${f}-${i}`}>
                <img src={image(f)} alt="" width={120} height={120} loading="lazy" />
              </span>
            ))}
          </div>
        </div>
      </Pop>
    </section>
  );
}

const TRAITS = [
  [
    'Problem solvers',
    Puzzle,
    'You love tackling complex challenges and finding elegant solutions.',
  ],
  [
    'Team players',
    Users,
    'You thrive in cross-functional teams that brainstorm, test and ship together.',
  ],
  [
    'Lifelong learners',
    Lightbulb,
    'You stay curious, ask questions and keep improving your craft.',
  ],
  [
    'Adaptable',
    Sparkles,
    'You’re comfortable with change, feedback and growth in a fast-moving environment.',
  ],
];

export function Teammates({ number = '02' }) {
  return (
    <section className="section teammates" id="what-we-look-for">
      <div className="section-head">
        <SectionTag number={number}>What we look for</SectionTag>
        <BlurText className="h2" lines={['Our ideal teammates']} />
        <Reveal as="p" className="lead lead-wide">
          We hire people who are more than just skilled. We look for curiosity,
          empathy and drive. If you love solving problems with smart,
          user-centred solutions, you’ll fit right in.
        </Reveal>
      </div>
      <div className="traits-grid">
        {TRAITS.map(([title, Icon, text], i) => (
          <Pop as="article" className="trait" key={title} delay={i * 0.08}>
            <span className="trait-icon" aria-hidden="true">
              <Icon size={40} strokeWidth={2} />
            </span>
            <h3>{title}</h3>
            <p>{text}</p>
          </Pop>
        ))}
      </div>
    </section>
  );
}

export function Openings({ number = '03' }) {
  return (
    <section className="section openings" id="open-positions">
      <div className="section-head">
        <SectionTag number={number}>Open positions</SectionTag>
        <BlurText className="h2" lines={['We’re hiring!']} />
        <Reveal as="p" className="lead">
          Join a mission that helps creators and brands do their best work
          together.
        </Reveal>
      </div>
      <Pop className="jobs" delay={0} amount="some">
        {jobs.map((job) => (
          <article className="job" key={job.slug}>
            <div className="job-main">
              <h3>
                <Link to={`/careers/${job.slug}`}>{job.title}</Link>
              </h3>
              <div className="job-meta">
                <span>
                  <MapPin size={13} /> {job.location}
                </span>
                <span>
                  <Clock size={13} /> {job.type}
                </span>
                <span>
                  <Briefcase size={13} /> {job.department}
                </span>
              </div>
            </div>
            <Link className="btn btn-secondary" to={`/careers/${job.slug}`}>
              <span>Learn more</span>
            </Link>
          </article>
        ))}
        <div className="jobs-note">
          <strong>Don’t see a role that fits?</strong>
          <p>
            Send your resume and a short note to{' '}
            <a href="mailto:contact@tazmify.com">contact@tazmify.com</a>{' '}
            or call <a href="tel:+919733877693">+91 97338 77693</a> — let’s
            start a conversation.
          </p>
        </div>
      </Pop>
    </section>
  );
}
