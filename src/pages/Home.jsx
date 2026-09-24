import React from 'react';
import Hero from '../sections/Hero.jsx';
import Benefits from '../sections/Benefits.jsx';
import Statement from '../sections/Statement.jsx';
import Performance from '../sections/Performance.jsx';
import KeyFeatures from '../sections/KeyFeatures.jsx';
import Deals from '../sections/Deals.jsx';
import Growth from '../sections/Growth.jsx';
import Integrations from '../sections/Integrations.jsx';
import Testimonials from '../sections/Testimonials.jsx';
import Pricing from '../sections/Pricing.jsx';
import Blog from '../sections/Blog.jsx';
import Faq from '../sections/Faq.jsx';
import Download from '../sections/Download.jsx';

export default function Home() {
  return (
    <>
      <Hero />
      <div className="sheet sheet-light sheet-first" id="about">
        <Benefits />
        <Statement />
        <Performance />
      </div>
      <div className="dark-block">
        <KeyFeatures />
        <Deals />
        <Growth />
      </div>
      <div className="sheet sheet-light sheet-mid">
        <Integrations />
        <Testimonials />
        <Pricing />
        <Blog />
      </div>
      <div className="dark-block">
        <Faq />
        <Download />
      </div>
    </>
  );
}
