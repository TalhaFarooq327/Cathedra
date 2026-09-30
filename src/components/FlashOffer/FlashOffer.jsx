import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Button from '../ui/Button';
import { BOOKSY_BOOKING_URL } from '../../config';
import './FlashOffer.css';

// Flash promo target date (Default: Oct 11, 2026 23:59:59)
const DEFAULT_TARGET_DATE = new Date('2026-10-11T23:59:59').getTime();

const calculateTimeLeft = (targetDate) => {
  const now = new Date().getTime();
  const difference = targetDate - now;

  if (difference <= 0) {
    return null;
  }

  return {
    days: Math.floor(difference / (1000 * 60 * 60 * 24)),
    hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((difference / 1000 / 60) % 60),
    seconds: Math.floor((difference / 1000) % 60),
  };
};

export default function FlashOffer({
  targetDate = DEFAULT_TARGET_DATE,
  discountPercent = '10%',
  promoCode = 'FLASH10',
  validityText = 'Valid Through Oct 11',
  className = '',
}) {
  const [timeLeft, setTimeLeft] = useState(() => calculateTimeLeft(targetDate));
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      const remaining = calculateTimeLeft(targetDate);
      setTimeLeft(remaining);
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  const handleCopyCode = (e) => {
    e.preventDefault();
    e.stopPropagation();
    navigator.clipboard.writeText(promoCode).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }).catch(() => {
      // Fallback if clipboard API restricted
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    });
  };

  if (!timeLeft) return null;

  return (
    <motion.div
      className={`flash-offer-card ${className}`}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      id="flash-offer-section"
    >
      {/* Visual Ambient Glow & Metallic Shimmer Accent */}
      <div className="flash-offer-card__ambient-glow" aria-hidden="true" />
      <div className="flash-offer-card__shimmer" aria-hidden="true" />

      {/* Header Bar: Pulsing Live Badge & Validity */}
      <div className="flash-offer-card__header">
        <div className="flash-offer-card__badge">
          <span className="flash-offer-card__pulse-dot" aria-hidden="true" />
          <span className="flash-offer-card__icon" aria-hidden="true">⚡</span>
          <span className="flash-offer-card__badge-text">LIMITED TIME FLASH OFFER</span>
        </div>
        <span className="flash-offer-card__validity">{validityText}</span>
      </div>

      {/* Main Content Body: Offer Details & Countdown Timer */}
      <div className="flash-offer-card__body">
        <div className="flash-offer-card__info">
          <h3 className="flash-offer-card__title">
            Get <span className="flash-offer-card__highlight">{discountPercent} OFF</span> All Grooming Services
          </h3>
          <p className="flash-offer-card__desc">
            Exclusive seasonal offer open to <strong>all clients</strong>. Enjoy elite NYC barbering, precision hot towel shaves, and custom styling at a reduced rate.
          </p>

          {/* Interactive Promo Code Pill */}
          <div className="flash-offer-card__code-container">
            <span className="flash-offer-card__code-label">PROMO CODE:</span>
            <button
              type="button"
              className={`flash-offer-card__code-btn ${copied ? 'copied' : ''}`}
              onClick={handleCopyCode}
              title="Click to copy promo code"
            >
              <span className="flash-offer-card__code-text">{promoCode}</span>
              <span className="flash-offer-card__copy-badge">
                {copied ? '✓ COPIED' : '📋 TAP TO COPY'}
              </span>
            </button>
          </div>
        </div>

        {/* Live Countdown Timer Block */}
        <div className="flash-offer-card__timer-box">
          <div className="flash-offer-card__timer-head">
            <span className="flash-offer-card__timer-icon" aria-hidden="true">⏱</span>
            <span className="flash-offer-card__timer-label">OFFER EXPIRES IN</span>
          </div>

          <div className="flash-offer-card__timer-units">
            <div className="flash-timer-unit">
              <div className="flash-timer-digit">
                {String(timeLeft.days).padStart(2, '0')}
              </div>
              <span className="flash-timer-label">DAYS</span>
            </div>

            <span className="flash-timer-divider">:</span>

            <div className="flash-timer-unit">
              <div className="flash-timer-digit">
                {String(timeLeft.hours).padStart(2, '0')}
              </div>
              <span className="flash-timer-label">HOURS</span>
            </div>

            <span className="flash-timer-divider">:</span>

            <div className="flash-timer-unit">
              <div className="flash-timer-digit">
                {String(timeLeft.minutes).padStart(2, '0')}
              </div>
              <span className="flash-timer-label">MINS</span>
            </div>

            <span className="flash-timer-divider">:</span>

            <div className="flash-timer-unit">
              <div className="flash-timer-digit">
                {String(timeLeft.seconds).padStart(2, '0')}
              </div>
              <span className="flash-timer-label">SECS</span>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Bar: Meta Guarantee & CTA Action */}
      <div className="flash-offer-card__footer">
        <div className="flash-offer-card__meta">
          <span className="flash-offer-card__check-icon" aria-hidden="true">✓</span>
          <span>Auto-applied at Booksy checkout or mention code at studio</span>
        </div>

        <div className="flash-offer-card__action">
          <Button href={BOOKSY_BOOKING_URL} variant="accent" size="lg">
            Claim {discountPercent} Discount & Book Now
          </Button>
        </div>
      </div>
    </motion.div>
  );
}
