import React from 'react';
import PageHero from '../sections/PageHero.jsx';
import Download from '../sections/Download.jsx';
import { ProseSection, linkify } from '../sections/Prose.jsx';
import { Link } from 'react-router-dom';
import { legal, supportEmail } from '../data/legal.jsx';

export default function Legal({ kind }) {
  const doc = legal[kind];
  return (
    <>
      <PageHero lines={[doc.title]} subtitle={doc.updated} />
      <div className="sheet sheet-light sheet-page">
        <section className="section narrow">
          <div className="prose">
            {doc.intro.map((p) => (
              <p key={p}>{linkify(p)}</p>
            ))}
            <p className="legal-links">
              <Link to="/privacy-policy">Privacy Policy</Link> ·{' '}
              <Link to="/terms-and-conditions">Terms &amp; Conditions</Link> ·{' '}
              <Link to="/data-deletion">Data Deletion</Link> · Support:{' '}
              <a href={`mailto:${supportEmail}`}>{supportEmail}</a>
            </p>
            {doc.sections.map((s) => (
              <ProseSection key={s.heading} section={s} />
            ))}
          </div>
        </section>
      </div>
      <div className="dark-block">
        <Download />
      </div>
    </>
  );
}
