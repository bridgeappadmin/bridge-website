import React from 'react';
import { LayoutGrid, Send, Sparkles, UserPlus } from 'lucide-react';
import { BlurText, Pop, Reveal, SectionTag } from '../motion.jsx';

const STEPS = [
  ['Create your profile', UserPlus],
  ['Discover and pitch', Send],
  ['Brief, chat and deliver', LayoutGrid],
  ['Get paid and grow', Sparkles],
];

export default function HowItWorks({ number = '03' }) {
  return (
    <section className="section how" id="how-it-works">
      <div className="section-head">
        <SectionTag number={number}>How it works</SectionTag>
        <BlurText className="h2" lines={['How it all comes together.']} />
        <Reveal as="p" className="lead">
          Here’s how one shared workspace helps creators and brands find each
          other, agree on the work and get it done in a few steps.
        </Reveal>
      </div>
      <div className="how-grid">
        {STEPS.map(([title, Icon], i) => (
          <Pop as="article" className="how-card" key={title} delay={i * 0.08}>
            <span className="how-num">{i + 1}</span>
            <span className="how-icon" aria-hidden="true">
              <Icon size={52} strokeWidth={1.8} />
            </span>
            <h3>{title}</h3>
          </Pop>
        ))}
      </div>
    </section>
  );
}
