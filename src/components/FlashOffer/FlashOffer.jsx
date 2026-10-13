import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Button from '../ui/Button';
import { BOOKSY_BOOKING_URL } from '../../config';
import './FlashOffer.css';

// Returns the UTC timestamp for end-of-day on the last day of the current
// offer window, expressed in New York time (America/New_York, DST-aware).
// Schedule: Mon–Tue → expires Tue 23:59:59 NY
//           Wed–Thu → expires Thu 23:59:59 NY
//           Fri/Sat/Sun → expires Sun 23:59:59 NY
const getOfferEndDateNY = () => {
  const now = new Date();

  // ── Step 1: Get NY UTC offset (4h for EDT, 5h for EST) ──────────────
  // Intl.format() with just `hour` reliably returns a numeric hour string.
  // No locale-string-to-Date parsing → no browser inconsistency.
  const nyHourRaw = new Intl.DateTimeFormat('en-US', {
    timeZone: 'America/New_York',
    hour: 'numeric',
    hour12: false,
  }).format(now);
  const nyHour = parseInt(nyHourRaw, 10) % 24; // guard against "24" midnight edge case
  const utcHour = now.getUTCHours();
  let nyOffsetHours = utcHour - nyHour;
  if (nyOffsetHours < 0) nyOffsetHours += 24; // handle midnight boundary
  if (nyOffsetHours > 12) nyOffsetHours = 4;  // sanity fallback → EDT

  const nyOffsetMs = nyOffsetHours * 3_600_000;

  // ── Step 2: Get current NY day-of-week via UTC arithmetic ───────────
  // Subtract the offset from UTC so UTC methods behave as NY methods.
  const nyNow = new Date(now.getTime() - nyOffsetMs);
  const dow = nyNow.getUTCDay(); // 0=Sun 1=Mon 2=Tue 3=Wed 4=Thu 5=Fri 6=Sat

  // ── Step 3: Days until end of offer window ───────────────────────────
  let daysUntilEnd;
  if (dow === 1 || dow === 2)      daysUntilEnd = 2 - dow;                // Mon/Tue → Tue
  else if (dow === 3 || dow === 4) daysUntilEnd = 4 - dow;                // Wed/Thu → Thu
  else                             daysUntilEnd = dow === 0 ? 0 : 7 - dow; // Fri/Sat/Sun → Sun

  // ── Step 4: Build target UTC timestamp ──────────────────────────────
  // 23:59:59 NY = (target date 23:59:59 UTC) + nyOffsetMs
  const targetNY = new Date(nyNow.getTime());
  targetNY.setUTCDate(targetNY.getUTCDate() + daysUntilEnd);

  return Date.UTC(
    targetNY.getUTCFullYear(),
    targetNY.getUTCMonth(),
    targetNY.getUTCDate(),
    23, 59, 59, 999,
  ) + nyOffsetMs;
};



const calculateTimeLeft = () => {
  const difference = getOfferEndDateNY() - Date.now();
  if (difference <= 0) return null;

  return {
    days: Math.floor(difference / (1000 * 60 * 60 * 24)),
    hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((difference / 1000 / 60) % 60),
    seconds: Math.floor((difference / 1000) % 60),
  };
};

export default function FlashOffer({
  discountPercent = '10%',
  promoCode = 'FLASH10',
  validityText = 'Valid Through Oct 18',
  className = '',
}) {
  const [timeLeft, setTimeLeft] = useState(() => calculateTimeLeft());
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

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

      {/* Header Bar: Pulsing Live Badge */}
      <div className="flash-offer-card__header">
        <div className="flash-offer-card__badge">
          <span className="flash-offer-card__pulse-dot" aria-hidden="true" />
          <span className="flash-offer-card__icon" aria-hidden="true">⚡</span>
          <span className="flash-offer-card__badge-text">LIMITED TIME FLASH OFFER</span>
        </div>
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

        {/* Live Countdown Timer Block + CTA stacked in right column */}
        <div className="flash-offer-card__right-col">
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

          <Button href={BOOKSY_BOOKING_URL} variant="accent" size="lg" className="flash-offer-card__cta-btn">
            Claim {discountPercent} Discount & Book Now
          </Button>
        </div>
      </div>

      {/* Footer Bar: Meta Guarantee */}
      <div className="flash-offer-card__footer">
        <div className="flash-offer-card__meta">
          <span className="flash-offer-card__check-icon" aria-hidden="true">✓</span>
          <span>Auto-applied at Booksy checkout or mention code at studio</span>
        </div>
      </div>
    </motion.div>
  );
}
