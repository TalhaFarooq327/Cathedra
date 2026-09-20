import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useScrollPosition } from '../../hooks/useScrollPosition';
import { BOOKSY_BOOKING_URL } from '../../config';
import logoMark from '../../assets/images/logo-mark-gold.png';
import Button from '../ui/Button';
import './Navbar.css';

const NAV_LINKS = [
  { label: 'Services', href: '#services' },
  { label: 'Experience', href: '#experience' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'About', href: '#about' },
  { label: 'Reviews', href: '#reviews' },
  { label: 'Location', href: '#location' },
];

export default function Navbar() {
  const { isScrolled } = useScrollPosition();
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileOpen]);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setIsMobileOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <motion.header
        className={`navbar ${isScrolled ? 'navbar--scrolled' : ''}`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className="navbar__inner container--wide">
          {/* Logo */}
          <a href="#" className="navbar__logo" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}>
            <img src={logoMark} alt="Cathedra NYC Logo Crest" className="navbar__logo-icon" />
            <span className="navbar__logo-text">CATHEDRA</span>
          </a>

          {/* Desktop Nav */}
          <nav className="navbar__nav" aria-label="Main navigation">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="navbar__link"
                onClick={(e) => handleNavClick(e, link.href)}
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="navbar__cta">
            <Button href={BOOKSY_BOOKING_URL} variant="primary" size="sm">
              Book Now
            </Button>
          </div>

          {/* Mobile Hamburger */}
          <button
            className={`navbar__hamburger ${isMobileOpen ? 'navbar__hamburger--open' : ''}`}
            onClick={() => setIsMobileOpen(!isMobileOpen)}
            aria-label="Toggle menu"
            aria-expanded={isMobileOpen}
          >
            <span className="navbar__hamburger-line" />
            <span className="navbar__hamburger-line" />
          </button>
        </div>
      </motion.header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            className="mobile-menu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
          >
            <motion.div
              className="mobile-menu__content"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3, delay: 0.1 }}
            >
              <nav className="mobile-menu__nav">
                {NAV_LINKS.map((link, i) => (
                  <motion.a
                    key={link.href}
                    href={link.href}
                    className="mobile-menu__link"
                    onClick={(e) => handleNavClick(e, link.href)}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{
                      duration: 0.5,
                      delay: 0.15 + i * 0.06,
                      ease: [0.16, 1, 0.3, 1],
                    }}
                  >
                    {link.label}
                  </motion.a>
                ))}
              </nav>

              <motion.div
                className="mobile-menu__cta"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.5 }}
              >
                <Button
                  href={BOOKSY_BOOKING_URL}
                  variant="accent"
                  size="lg"
                  onClick={() => setIsMobileOpen(false)}
                >
                  Book Appointment
                </Button>
              </motion.div>

              <motion.div
                className="mobile-menu__info"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.7, duration: 0.5 }}
              >
                <p>131 Varick St, Suite 938</p>
                <p>New York, NY 10013</p>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
