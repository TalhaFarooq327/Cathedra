import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useScrollPosition } from '../../hooks/useScrollPosition';
import { BOOKSY_BOOKING_URL } from '../../config';
import logoMark from '../../assets/images/logo-mark-gold.png';
import Button from '../ui/Button';
import './Navbar.css';

const NAV_LINKS = [
  { label: 'About', href: '#about' },

  { label: 'Services', href: '#services' },
  { label: 'Experience', href: '#experience' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Reviews', href: '#reviews' },
  { label: 'Location', href: '#location' },
];

export default function Navbar() {
  const { isScrolled } = useScrollPosition();
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');

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

  // ScrollSpy Active Link Tracker
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200;
      const sections = NAV_LINKS.map((link) => link.href.substring(1));

      let currentSection = '';
      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            currentSection = `#${sectionId}`;
          }
        }
      }
      setActiveSection(currentSection);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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
                className={`navbar__link ${activeSection === link.href ? 'navbar__link--active' : ''}`}
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
            transition={{ duration: 0.3 }}
          >
            <div className="mobile-menu__top">
              <div className="mobile-menu__logo">
                <img src={logoMark} alt="Cathedra NYC Logo Crest" className="mobile-menu__logo-img" />
                <span className="mobile-menu__logo-text">CATHEDRA</span>
              </div>
              <button
                className="mobile-menu__close"
                onClick={() => setIsMobileOpen(false)}
                aria-label="Close menu"
              >
                ✕
              </button>
            </div>

            <motion.div
              className="mobile-menu__content"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.3, delay: 0.05 }}
            >
              <nav className="mobile-menu__nav">
                {NAV_LINKS.map((link, i) => (
                  <motion.a
                    key={link.href}
                    href={link.href}
                    className={`mobile-menu__link ${activeSection === link.href ? 'mobile-menu__link--active' : ''}`}
                    onClick={(e) => handleNavClick(e, link.href)}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{
                      duration: 0.4,
                      delay: 0.1 + i * 0.05,
                      ease: [0.16, 1, 0.3, 1],
                    }}
                  >
                    {activeSection === link.href && <span className="mobile-menu__link-star">✦ </span>}
                    {link.label}
                  </motion.a>
                ))}
              </nav>

              <motion.div
                className="mobile-menu__cta"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.4 }}
              >
                <Button
                  href={BOOKSY_BOOKING_URL}
                  variant="primary"
                  size="md"
                  onClick={() => setIsMobileOpen(false)}
                >
                  Book Appointment
                </Button>
              </motion.div>

              <motion.div
                className="mobile-menu__info"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.4 }}
              >
                <p className="mobile-menu__address">131 Varick St, Suite 938 · New York</p>
                <a href="tel:3476729171" className="mobile-menu__phone">
                  (347) 672-9171
                </a>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
