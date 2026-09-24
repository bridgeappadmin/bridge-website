import React from 'react';
import { BadgeCheck } from 'lucide-react';
import { BlurText, Pop, Reveal, SectionTag } from '../motion.jsx';

// Compares the three Connects top-up packs from the app's Connects screen.
const PACKS = ['Starter', 'Popular', 'Pro'];
const PRICES = ['₹99', '₹249', '₹699'];
const GROUPS = [
  {
    label: 'Connects pack',
    coin: true,
    rows: [
      ['Connects', ['10', '30', '100']],
      ['Applications (2 connects each)', ['5', '15', '50']],
      ['Price per connect', ['₹9.90', '₹8.30', '₹6.99']],
      ['Saving vs Starter', ['—', '16%', '29%']],
    ],
  },
  {
    label: 'Included with every account',
    Icon: BadgeCheck,
    rows: [
      ['Free connects every month', ['10', '10', '10']],
      ['Direct chat with brands', ['Included', 'Included', 'Included']],
      ['Protected payments', ['Included', 'Included', 'Included']],
      ['Earnings tracking', ['Included', 'Included', 'Included']],
    ],
  },
];

export default function PlanCompare({ number = '02' }) {
  return (
    <section className="section compare" id="compare">
      <div className="section-head">
        <SectionTag number={number}>Compare packs</SectionTag>
        <BlurText
          className="h2 on-dark"
          lines={['Compare Connects', 'packs side by side.']}
        />
        <Reveal as="p" className="lead">
          Bigger packs cost less per connect. Every account also gets 10 free
          connects each month.
        </Reveal>
      </div>
      <Pop className="compare-box" delay={0} amount="some">
        <div className="compare-head">
          <span />
          {PACKS.map((pack, i) => (
            <div key={pack}>
              <strong>{pack}</strong>
              <b>
                <i>₹</i>
                {PRICES[i].slice(1)}
              </b>
            </div>
          ))}
        </div>
        {GROUPS.map(({ label, Icon, coin, rows }) => (
          <div className="compare-group" key={label}>
            <div className="compare-group-head">
              {coin ? (
                <img
                  className="compare-group-coin"
                  src="/images/icons/connects-64.webp"
                  width={40}
                  height={40}
                  alt=""
                />
              ) : (
                <span className="compare-group-icon">
                  <Icon size={18} />
                </span>
              )}
              <span>{label}</span>
            </div>
            <div className="compare-rows">
              {rows.map(([name, values]) => (
                <div className="compare-row" key={name}>
                  <span className="compare-row-name">{name}</span>
                  {values.map((v, i) => (
                    <span className="compare-cell" key={PACKS[i]}>
                      {v}
                    </span>
                  ))}
                </div>
              ))}
            </div>
          </div>
        ))}
        <div className="compare-foot">
          <span />
          {PACKS.map((pack) => (
            <div key={pack}>
              <a className="btn btn-tertiary" href="#download">
                <span>Top up</span>
              </a>
            </div>
          ))}
        </div>
      </Pop>
    </section>
  );
}
