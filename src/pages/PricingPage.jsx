import React from 'react';
import PageHero from '../sections/PageHero.jsx';
import Pricing from '../sections/Pricing.jsx';
import PlanCompare from '../sections/PlanCompare.jsx';
import Faq from '../sections/Faq.jsx';
import Download from '../sections/Download.jsx';

export default function PricingPage() {
  return (
    <>
      <PageHero lines={['Simple Connects', 'smarter collabs']} />
      <div className="sheet sheet-light sheet-page">
        <Pricing number="01" />
      </div>
      <div className="dark-block">
        <PlanCompare number="02" />
        <Faq number="03" />
        <Download />
      </div>
    </>
  );
}
