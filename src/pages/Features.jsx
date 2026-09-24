import React from 'react';
import PageHero from '../sections/PageHero.jsx';
import Benefits from '../sections/Benefits.jsx';
import KeyFeatures from '../sections/KeyFeatures.jsx';
import Deals from '../sections/Deals.jsx';
import Growth from '../sections/Growth.jsx';
import HowItWorks from '../sections/HowItWorks.jsx';
import Integrations from '../sections/Integrations.jsx';
import Download from '../sections/Download.jsx';

export default function Features() {
  return (
    <>
      <PageHero lines={['Everything collab', '— all in one place']} />
      <div className="sheet sheet-light sheet-page">
        <Benefits number="01" />
      </div>
      <div className="dark-block">
        <KeyFeatures number="02" />
        <Deals />
        <Growth />
      </div>
      <div className="sheet sheet-light">
        <HowItWorks number="03" />
        <Integrations number="04" />
      </div>
      <div className="dark-block">
        <Download />
      </div>
    </>
  );
}
