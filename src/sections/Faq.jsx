import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Minus, Plus } from 'lucide-react';
import { BlurText, Reveal, SectionTag } from '../motion.jsx';
import { CONNECTS_LIVE } from '../config/launch.js';

const FAQS = [
  [
    'Is my payment and profile data secure?',
    'Your security is our top priority. Profiles are verified, payments are held until deliverables are approved, and all data is protected with bank-level encryption. We never share your audience data without permission.',
  ],
  [
    'How do I get matched with campaigns?',
    'Tell us your niche, platforms and the kind of work you love. Tazmify ranks live campaigns by fit and shows you why each one matches, so you can pitch with confidence.',
  ],
  [
    'Does it cost anything to join as a creator?',
    CONNECTS_LIVE
      ? 'Joining is free, and every account gets 10 free connects each month. Each application uses 2 connects. When you need more, top up in the app from ₹99 for 10 connects.'
      : 'Joining Tazmify is free. Connects, the credits used to apply to campaigns, are coming soon, and we will share pricing before they launch.',
  ],
  [
    'What makes Tazmify different from other creator platforms?',
    'Most tools stop at discovery. Tazmify carries the whole collaboration: brief, chat, deliverables and payment live in one thread, so nothing gets lost between apps.',
  ],
  [
    'Can brands and creators outside my country work together?',
    'Yes. Campaigns can be open worldwide or limited to specific regions, and protected payments work across borders.',
  ],
];

export default function Faq({ number = '07' }) {
  const [open, setOpen] = useState(0);
  return (
    <section className="section faq" id="faqs">
      <div className="faq-box">
        <div className="section-head">
          <SectionTag number={number}>FAQs</SectionTag>
          <BlurText
            className="h2 on-dark"
            lines={['Got questions?', 'We’ve got clear answers.']}
          />
        </div>
        <ul className="faq-list">
          {FAQS.map(([q, a], i) => {
            const isOpen = open === i;
            const id = `faq-panel-${i}`;
            return (
              <li key={q} className={`faq-item ${isOpen ? 'is-open' : ''}`}>
                <button
                  type="button"
                  aria-expanded={isOpen}
                  aria-controls={id}
                  onClick={() => setOpen(isOpen ? -1 : i)}
                >
                  <span className="faq-num">{i + 1}</span>
                  <span className="faq-q">{q}</span>
                  <span className="faq-toggle" aria-hidden="true">
                    {isOpen ? <Minus size={20} /> : <Plus size={20} />}
                  </span>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      className="faq-a"
                      id={id}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{
                        type: 'spring',
                        stiffness: 300,
                        damping: 34,
                      }}
                    >
                      <p>{a}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </li>
            );
          })}
        </ul>
        <Reveal className="faq-more" delay={0.1}>
          <strong>Still have more questions?</strong>
          <p>
            If you have more questions, <Link to="/contact">contact us</Link> so
            we can help.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
