import React from 'react';
import { Lightbulb, ShieldCheck, Target } from 'lucide-react';
import { BlurText, Pop, SectionTag } from '../motion.jsx';

const VALUES = [
  {
    title: 'Simplicity first',
    Icon: Target,
    text: 'We turn a messy collaboration into a clear thread. Because working with people you admire should never feel like admin.',
  },
  {
    title: 'Trust by default',
    Icon: ShieldCheck,
    text: 'Verified profiles and protected payments come standard. Both sides know what was agreed and when it gets paid.',
  },
  {
    title: 'Built with creators',
    Icon: Lightbulb,
    text: 'We do not add features for their own sake. Every screen exists because a creator or a brand asked for it.',
  },
];

export default function Values({ number = '01' }) {
  return (
    <section className="section values" id="values">
      <div className="section-head">
        <SectionTag number={number}>Our values</SectionTag>
        <BlurText
          className="h2"
          lines={['Values that power', 'better collabs.']}
        />
      </div>
      <div className="values-grid">
        {VALUES.map(({ title, Icon, text }, i) => (
          <Pop as="article" className="vcard" key={title} delay={i * 0.08}>
            <h3>{title}</h3>
            <span className="vcard-icon" aria-hidden="true">
              <span>
                <Icon size={44} strokeWidth={2.2} />
              </span>
            </span>
            <p>{text}</p>
          </Pop>
        ))}
      </div>
    </section>
  );
}
