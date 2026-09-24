import React from 'react';
import {
  ChevronDown,
  EllipsisVertical,
  Plus,
  ShieldCheck,
  TrendingUp,
  Wallet,
} from 'lucide-react';
import { BlurText, Pop, Reveal, SectionTag } from '../motion.jsx';

// Card artwork for the first three cards comes from the reference template
// (public/images/ref). Replace with owned assets before launch; see README.
const art = (name) => `/images/ref/${name}`;

export default function Benefits({ number = '01' }) {
  return (
    <section className="section benefits" id="benefits">
      <div className="section-head">
        <SectionTag number={number}>Benefits</SectionTag>
        <BlurText className="h2" lines={['Collaboration, simplified.']} />
        <Reveal as="p" className="lead">
          Tazmify unites discovery, conversations, briefs and payments — giving
          creators and brands the clarity, control and confidence to make great
          work together every day.
        </Reveal>
      </div>

      <div className="benefit-grid">
        <Pop as="article" className="bcard" delay={0}>
          <img
            className="bcard-art"
            src={art('simplify.png')}
            width={532}
            height={440}
            alt=""
            loading="lazy"
          />
          <h3>
            Find your creator
            <br />
            based on your niche
          </h3>
        </Pop>

        <Pop as="article" className="bcard" delay={0.08}>
          <h3>
            Get smart
            <br />
            matches
          </h3>
          <img
            className="bcard-art"
            src={art('smart-action-duo.png')}
            width={532}
            height={676}
            alt=""
            loading="lazy"
          />
        </Pop>

        <Pop as="article" className="bcard bcard-photo" delay={0.16}>
          <img
            src={art('growth.png')}
            width={660}
            height={720}
            alt="Creator smiling in pink sunglasses"
            loading="lazy"
          />
          <div className="bcard-photo-copy">
            <strong>₹1,80,200</strong>
            <span className="glass-pill">
              <TrendingUp size={14} /> + 24%
            </span>
            <h3>
              Grow your
              <br />
              earnings
            </h3>
          </div>
        </Pop>

        <Pop as="article" className="bcard bcard-bleed" delay={0.24}>
          <h3>
            Secure
            <br />
            every step
          </h3>
          <div className="wallet-ui" aria-hidden="true">
            <span className="wallet-ui-shield">
              <ShieldCheck size={26} strokeWidth={2.2} />
            </span>
            <div className="wallet-ui-card">
              <div className="wallet-ui-head">
                <span className="wallet-ui-brand">
                  <img
                    className="connects-ico"
                    src="/images/icons/connects-64.webp"
                    width={18}
                    height={18}
                    alt=""
                  />
                  Connects
                </span>
                <ChevronDown size={16} />
              </div>
              <div className="wallet-ui-panel">
                <div className="wallet-ui-account">
                  <span>
                    <strong>Campaign wallet</strong>
                    <small>Total balance: ₹1,28,800</small>
                  </span>
                  <b>
                    Add <Plus size={11} />
                  </b>
                </div>
                <div className="wallet-ui-row">
                  <i>
                    <Wallet size={12} />
                  </i>
                  <span>Payouts</span>
                  <strong>₹42,564</strong>
                  <EllipsisVertical size={14} />
                </div>
                <div className="wallet-ui-row">
                  <i>
                    <TrendingUp size={12} />
                  </i>
                  <span>Pending</span>
                  <strong>₹28,000</strong>
                  <EllipsisVertical size={14} />
                </div>
              </div>
            </div>
          </div>
        </Pop>
      </div>
    </section>
  );
}
