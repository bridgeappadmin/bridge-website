import React from 'react';
import { Lightbulb } from 'lucide-react';

export const slugify = (text) =>
  text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');

export function Bullets({ items }) {
  if (!items?.length) return null;
  return (
    <ul className="prose-list">
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
}

export function ProseSection({ section, level = 'h2' }) {
  const Heading = level;
  return (
    <section
      className="prose-section"
      id={slugify(section.heading || section.title)}
    >
      {section.heading && (
        <Heading className="prose-h">{section.heading}</Heading>
      )}
      {section.title && <h3 className="prose-h3">{section.title}</h3>}
      {section.paragraphs?.map((p, i) => (
        <p key={i}>{p}</p>
      ))}
      {section.strong && <p className="prose-strong">{section.strong}</p>}
      <Bullets items={section.bullets} />
      {section.strong2 && <p className="prose-strong">{section.strong2}</p>}
      <Bullets items={section.bullets2} />
      {section.note && <p className="prose-note">{section.note}</p>}
      {section.after?.map((p) => (
        <p key={p}>{p}</p>
      ))}
      {section.sub?.map((s) => (
        <ProseSection key={s.title} section={s} level="h3" />
      ))}
      {section.tip && (
        <aside className="prose-tip">
          <Lightbulb size={26} strokeWidth={1.8} />
          <div>
            <strong>Pro tip:</strong>
            <p>{section.tip}</p>
          </div>
        </aside>
      )}
    </section>
  );
}
