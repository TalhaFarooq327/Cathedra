import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './ThankYou.css';

export default function ThankYou() {
  useEffect(() => {
    // ── Meta Pixel — fire Schedule conversion event ───────────────────────────
    // This tells Meta Ads that an appointment was successfully booked.
    // The Pixel base code must be present in index.html for this to work.
    if (typeof window.fbq === 'function') {
      window.fbq('track', 'Schedule');
    }

    // Scroll to top on mount
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="thankyou-page" id="thank-you-page">
      {/* Ambient background orbs */}
      <div className="thankyou-orb thankyou-orb--1" aria-hidden="true" />
      <div className="thankyou-orb thankyou-orb--2" aria-hidden="true" />

      <div className="thankyou-container">

        {/* Logo / Brand */}
        <Link to="/" className="thankyou-brand" aria-label="Back to Cathedra NYC home">
          <span className="thankyou-brand-name">CATHEDRA</span>
          <span className="thankyou-brand-location">NEW YORK CITY</span>
        </Link>

        {/* Check icon */}
        <div className="thankyou-icon" aria-hidden="true">
          <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="32" cy="32" r="31" stroke="currentColor" strokeWidth="1.5" />
            <path
              d="M20 32.5L28 40.5L44 24"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>

        {/* Heading */}
        <div className="thankyou-eyebrow">Appointment Confirmed</div>
        <h1 className="thankyou-heading">
          Thank You for<br />
          <em>Choosing Cathedra</em>
        </h1>

        <p className="thankyou-subtext">
          Your appointment has been booked. A confirmation has been sent to your
          email. We look forward to welcoming you to our studio.
        </p>

        {/* Details card */}
        <div className="thankyou-card">
          <div className="thankyou-card-row">
            <span className="thankyou-card-label">Location</span>
            <span className="thankyou-card-value">131 Varick St, Suite 938<br />New York, NY 10013</span>
          </div>
          <div className="thankyou-card-divider" />
          <div className="thankyou-card-row">
            <span className="thankyou-card-label">Hours</span>
            <span className="thankyou-card-value">Mon – Sat: 9AM – 8PM<br />Sun: 10AM – 6PM</span>
          </div>
          <div className="thankyou-card-divider" />
          <div className="thankyou-card-row">
            <span className="thankyou-card-label">Contact</span>
            <span className="thankyou-card-value">
              <a href="https://booksy.com/en-us/biz/231737" target="_blank" rel="noopener noreferrer">
                Manage on Booksy →
              </a>
            </span>
          </div>
        </div>

        {/* CTA */}
        <Link to="/" className="thankyou-cta" id="thank-you-return-home">
          Return to Cathedra NYC
        </Link>

        <p className="thankyou-footer-note">
          Need to reschedule? Visit{' '}
          <a href="https://booksy.com" target="_blank" rel="noopener noreferrer">
            booksy.com
          </a>{' '}
          or call us directly.
        </p>
      </div>
    </div>
  );
}
