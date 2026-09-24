import React from 'react';
import PageHero from '../sections/PageHero.jsx';
import Values from '../sections/Values.jsx';
import Performance from '../sections/Performance.jsx';
import Story from '../sections/Story.jsx';
import BothSides from '../sections/BothSides.jsx';
import Testimonials from '../sections/Testimonials.jsx';
import Download from '../sections/Download.jsx';

export default function About() {
  return (
    <>
      <PageHero lines={['About Tazmify']} />
      <div className="sheet sheet-light sheet-page">
        <Values number="01" />
        <Performance />
      </div>
      <div className="dark-block">
        <Story number="02" />
      </div>
      <div className="sheet sheet-light">
        <BothSides number="03" />
      </div>
      <div className="dark-block dark-block-testi">
        <Testimonials number="04" />
        <Download />
      </div>
    </>
  );
}
