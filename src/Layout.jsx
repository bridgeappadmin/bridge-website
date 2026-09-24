import React, { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Nav from './sections/Nav.jsx';
import Footer from './sections/Footer.jsx';

const TITLES = [
  [/^\/$/, 'Tazmify — Where creators and brands connect'],
  [/^\/about/, 'About — Tazmify'],
  [/^\/features/, 'Features — Tazmify'],
  [/^\/pricing/, 'Pricing — Tazmify'],
  [/^\/blog\/.+/, 'Blog post — Tazmify'],
  [/^\/blog/, 'Blog — Tazmify'],
  [/^\/careers\/.+/, 'Open role — Tazmify'],
  [/^\/careers/, 'Careers — Tazmify'],
  [/^\/contact/, 'Contact — Tazmify'],
  [/^\/changelog/, 'Changelog — Tazmify'],
  [/^\/terms-(and-conditions|of-service)/, 'Terms & Conditions | Tazmify'],
  [/^\/data-deletion/, 'Data Deletion Instructions | Tazmify'],
  [/^\/privacy-policy/, 'Privacy Policy | Tazmify'],
];

// Routes manage their own scroll position; stop the browser restoring it.
if (typeof window !== 'undefined' && 'scrollRestoration' in window.history) {
  window.history.scrollRestoration = 'manual';
}

export default function Layout() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    const match = TITLES.find(([re]) => re.test(pathname));
    document.title = match ? match[1] : 'Page not found — Tazmify';
  }, [pathname]);

  useEffect(() => {
    if (hash) {
      const id = hash.slice(1);
      const scroll = () => {
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      };
      const frame = requestAnimationFrame(() => setTimeout(scroll, 60));
      return () => cancelAnimationFrame(frame);
    }
    // Jump to the top on every route change. The page uses smooth scrolling
    // (base.css), and on phones a smooth glide from the footer gets cut short
    // by touch momentum or the new page loading, leaving the visitor near the
    // bottom. So smooth scrolling is switched off for the jump, and the reset
    // is repeated while the new page settles.
    const root = document.documentElement;
    const toTop = () => {
      root.style.scrollBehavior = 'auto';
      window.scrollTo(0, 0);
      root.scrollTop = 0;
      document.body.scrollTop = 0;
    };
    toTop();
    const frame = requestAnimationFrame(toTop);
    const timers = [60, 200, 450].map((ms) => setTimeout(toTop, ms));
    const restore = setTimeout(() => {
      root.style.scrollBehavior = '';
    }, 600);
    return () => {
      cancelAnimationFrame(frame);
      timers.forEach(clearTimeout);
      clearTimeout(restore);
      root.style.scrollBehavior = '';
    };
  }, [pathname, hash]);

  return (
    <>
      <Nav />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
