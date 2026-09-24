import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { ArrowUpRight, Menu, X } from 'lucide-react';
import { tween, useIsMobile } from '../motion.jsx';

const LINKS = [
  ['Home', '/'],
  ['About', '/about'],
  ['Features', '/features'],
  ['Pricing', '/pricing'],
  ['Blog', '/blog'],
  ['Careers', '/careers'],
];
const layoutSpring = { type: 'spring', stiffness: 260, damping: 30 };

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const mobile = useIsMobile();
  const { pathname } = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname, mobile]);

  const compact = scrolled && !mobile;
  const useLayout = !mobile;

  return (
    <motion.header
      className={`nav ${compact ? 'is-compact' : ''} ${scrolled ? 'is-scrolled' : ''} ${open ? 'is-open' : ''}`}
      initial={{ y: -150, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={tween(1, 0.2)}
    >
      <motion.div
        className="nav-bar"
        layout={useLayout}
        transition={layoutSpring}
      >
        <motion.div layout={useLayout} transition={layoutSpring}>
          <Link className="nav-logo" to="/" aria-label="Tazmify home">
            <img src="/app-icon.svg" alt="" width={40} height={40} />
            {!compact && <span className="nav-wordmark">Tazmify</span>}
          </Link>
        </motion.div>
        <motion.nav
          layout={useLayout}
          className={`nav-menu ${open ? 'is-open' : ''}`}
          aria-label="Main navigation"
          id="site-menu"
          transition={layoutSpring}
        >
          {LINKS.map(([name, to]) => (
            <NavLink
              key={to}
              to={to}
              end={to === '/'}
              className={({ isActive }) => (isActive ? 'is-active' : '')}
            >
              <span className="nav-dot" aria-hidden="true" />
              {name}
            </NavLink>
          ))}
          <Link className="btn btn-tertiary nav-cta-mobile" to="/contact">
            <span>
              Contact us <ArrowUpRight size={16} />
            </span>
          </Link>
        </motion.nav>
        <motion.div
          layout={useLayout}
          transition={layoutSpring}
          className="nav-cta"
        >
          <Link className="btn btn-tertiary" to="/contact">
            <span>Contact us</span>
          </Link>
        </motion.div>
        <button
          className="nav-toggle"
          type="button"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          aria-controls="site-menu"
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </motion.div>
    </motion.header>
  );
}
