import React from 'react';
import PageHero from '../sections/PageHero.jsx';
import Download from '../sections/Download.jsx';
import { Bullets } from '../sections/Prose.jsx';
import { changelog } from '../data/changelog.js';

export default function Changelog() {
  return (
    <>
      <PageHero lines={['Changelog']} />
      <div className="sheet sheet-light sheet-page">
        <section className="section narrow">
          <div className="prose">
            {changelog.map((entry) => (
              <section className="release" key={entry.version}>
                <time className="release-date">{entry.date}</time>
                <h2 className="release-version">{entry.version}</h2>
                {entry.text && <p>{entry.text}</p>}
                {entry.groups?.map((group) => (
                  <div key={group.title}>
                    <p className="prose-strong">{group.title}</p>
                    <Bullets items={group.items} />
                  </div>
                ))}
              </section>
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
