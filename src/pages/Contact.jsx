import React from 'react';
import { useLocation } from 'react-router-dom';
import PageHero from '../sections/PageHero.jsx';
import ContactSection from '../sections/ContactSection.jsx';
import Download from '../sections/Download.jsx';
import { BackButton } from '../sections/BlogSections.jsx';

export default function Contact() {
  const location = useLocation();
  const fromRole = new URLSearchParams(location.search).get('role');
  // Show a way back when the visitor arrived from another page (an Apply
  // button, a plan CTA, a blog post) rather than landing here directly.
  const showBack = Boolean(fromRole) || location.key !== 'default';
  return (
    <>
      <PageHero lines={['We’re here to help']} />
      <div className="sheet sheet-light sheet-page">
        {showBack && (
          <div className="back-row">
            <BackButton
              to={fromRole ? `/careers/${fromRole}` : '/'}
              label={fromRole ? 'Back to the job' : 'Back'}
            />
          </div>
        )}
        <ContactSection />
      </div>
      <div className="dark-block">
        <Download />
      </div>
    </>
  );
}
