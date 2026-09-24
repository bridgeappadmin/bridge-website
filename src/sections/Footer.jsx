import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUp, Sparkles } from 'lucide-react';
import { posts } from '../data/posts.js';
import { jobs } from '../data/jobs.js';

const MAIN = [
  ['Home', '/'],
  ['Pricing', '/pricing'],
  ['Careers', '/careers'],
  ['About', '/about'],
  ['Blog', '/blog'],
  ['Job post', `/careers/${jobs[0].slug}`],
  ['Features', '/features'],
  ['Blog post', `/blog/${posts[0].slug}`],
  ['Contact', '/contact'],
];
const LEGAL = [
  ['Contact', '/contact'],
  ['Changelog', '/changelog'],
  ['FAQs', '/#faqs'],
  ['Terms & conditions', '/terms-and-conditions'],
  ['404 error', '/404'],
  ['Privacy policy', '/privacy-policy'],
  ['Data deletion', '/data-deletion'],
];

export default function Footer() {
  const toTop = (event) => {
    event.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  return (
    <footer className="footer" aria-label="Footer">
      <div className="footer-glow" aria-hidden="true" />
      <div className="footer-wordmark" aria-hidden="true">
        <img src="/logo-mark.svg" alt="" />
        Tazmify
      </div>
      <a
        className="footer-top"
        href="#top"
        onClick={toTop}
        aria-label="Back to top"
      >
        <ArrowUp size={20} />
      </a>
      <div className="footer-cards">
        <div className="footer-card">
          <h4>
            Main
            <br />
            pages
          </h4>
          <ul>
            {MAIN.map(([name, to]) => (
              <li key={name}>
                <Link to={to}>{name}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="footer-card">
          <h4>
            Legal &amp;
            <br />
            utilities
          </h4>
          <ul className="footer-list-2">
            {LEGAL.map(([name, to]) => (
              <li key={name}>
                <Link to={to}>{name}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <span>
          <Sparkles size={14} /> Made for making things happen
        </span>
        <span>© Tazmify {new Date().getFullYear()}. All rights reserved.</span>
        <span>Creators × Brands</span>
      </div>
    </footer>
  );
}
