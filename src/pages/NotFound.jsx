import React from 'react';
import { Link } from 'react-router-dom';
import PageHero from '../sections/PageHero.jsx';
import Download from '../sections/Download.jsx';

export default function NotFound() {
  return (
    <>
      <PageHero
        lines={['404']}
        subtitle="This page moved on to its next collab."
      />
      <div className="sheet sheet-light sheet-page">
        <section className="section narrow not-found">
          <h2 className="h2">Nothing to see here.</h2>
          <p className="lead">
            The link may be old, or the page may have been renamed. Head back
            home or explore what Tazmify can do.
          </p>
          <div className="not-found-actions">
            <Link className="btn btn-primary" to="/">
              <span>Back home</span>
            </Link>
            <Link className="btn btn-secondary" to="/features">
              <span>Explore features</span>
            </Link>
          </div>
        </section>
      </div>
      <div className="dark-block">
        <Download />
      </div>
    </>
  );
}
