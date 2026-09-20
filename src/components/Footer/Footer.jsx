import { ADDRESS, CITY_STATE_ZIP, INSTAGRAM_URL, FACEBOOK_URL, PHONE, EMAIL } from '../../config';
import logoGold from '../../assets/images/logo-gold-bright.png';
import './Footer.css';

const NAV_LINKS = [
  { label: 'Services', href: '#services' },
  { label: 'About', href: '#about' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Reviews', href: '#reviews' },
  { label: 'Location', href: '#location' },
];

export default function Footer() {
  const handleNavClick = (e, href) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__grid">
          {/* Brand */}
          <div className="footer__brand">
            <a href="#" className="footer__logo" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}>
              <img src={logoGold} alt="Cathedra NYC Official Logo" className="footer__logo-img" />
            </a>
            <div className="footer__address">
              <p>{ADDRESS}</p>
              <p>{CITY_STATE_ZIP}</p>
            </div>
          </div>

          {/* Navigation */}
          <div className="footer__nav">
            <h4 className="footer__nav-title">Navigate</h4>
            <nav>
              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="footer__link"
                  onClick={(e) => handleNavClick(e, link.href)}
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Connect */}
          <div className="footer__connect">
            <h4 className="footer__nav-title">Connect & Contact</h4>
            <a href={`tel:${PHONE.replace(/[^0-9]/g, '')}`} className="footer__link">
              {PHONE}
            </a>
            <a href={`mailto:${EMAIL}`} className="footer__link">
              {EMAIL}
            </a>
            <a href={INSTAGRAM_URL} className="footer__link" target="_blank" rel="noopener noreferrer">
              Instagram
            </a>
            <a href={FACEBOOK_URL} className="footer__link" target="_blank" rel="noopener noreferrer">
              Facebook
            </a>
          </div>
        </div>

        {/* Bottom */}
        <div className="footer__bottom">
          <p className="footer__copyright">
            © {new Date().getFullYear()} Cathedra NYC. All rights reserved.
          </p>
          <div className="footer__legal">
            <a href="#" className="footer__legal-link">Privacy Policy</a>
            <span className="footer__legal-dot">•</span>
            <a href="#" className="footer__legal-link">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
