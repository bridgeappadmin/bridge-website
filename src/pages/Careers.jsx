import React from 'react';
import PageHero from '../sections/PageHero.jsx';
import { Different, Openings, Teammates } from '../sections/CareerSections.jsx';
import Faq from '../sections/Faq.jsx';
import Download from '../sections/Download.jsx';

export default function Careers() {
  return (
    <>
      <PageHero lines={['Build the future of', 'collabs with us']} />
      <div className="sheet sheet-light sheet-page">
        <Different number="01" />
        <Teammates number="02" />
        <Openings number="03" />
      </div>
      <div className="dark-block">
        <Faq number="04" />
        <Download />
      </div>
    </>
  );
}
