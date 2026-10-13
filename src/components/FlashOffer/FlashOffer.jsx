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

  // 1. Extract current NY date components reliably via Intl API
  const parts = new Intl.DateTimeFormat('en-US', {
    timeZone: 'America/New_York',
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    weekday: 'short',
    hour12: false,
  }).formatToParts(now);

  const get = (type) => parts.find((p) => p.type === type)?.value ?? '';
  const nyYear  = parseInt(get('year'));
  const nyMonth = parseInt(get('month')) - 1; // 0-indexed for Date constructor
  const nyDay   = parseInt(get('day'));
  const dowMap  = { Sun: 0, Mon: 1, Tue: 2, Wed: 3, Thu: 4, Fri: 5, Sat: 6 };
  const dow     = dowMap[get('weekday')];

  // 2. Days until end of current offer window
  let daysUntilEnd;
  if (dow === 1 || dow === 2)      daysUntilEnd = 2 - dow;                // Mon/Tue → Tue
  else if (dow === 3 || dow === 4) daysUntilEnd = 4 - dow;                // Wed/Thu → Thu
  else                             daysUntilEnd = dow === 0 ? 0 : 7 - dow; // Fri/Sat/Sun → Sun

  // 3. Build the target calendar date using arithmetic on NY date values
  const targetDate = new Date(nyYear, nyMonth, nyDay + daysUntilEnd);
  const ty = targetDate.getFullYear();
  const tm = String(targetDate.getMonth() + 1).padStart(2, '0');
  const td = String(targetDate.getDate()).padStart(2, '0');

  // 4. Determine NY UTC offset on target date (handles EDT vs EST automatically).
  //    Probe at UTC noon on that date — NY is always 7–8 AM at that point.
  const noonUTC  = new Date(`${ty}-${tm}-${td}T12:00:00Z`);
  const noonParts = new Intl.DateTimeFormat('en-US', {
    timeZone: 'America/New_York',
    hour: '2-digit',
    minute: '2-digit',
    hour12: false,
  }).formatToParts(noonUTC);
  const nyHour     = parseInt(noonParts.find((p) => p.type === 'hour')?.value   ?? '12');
  const nyMin      = parseInt(noonParts.find((p) => p.type === 'minute')?.value ?? '0');
  const nyOffsetMs = (12 * 60 - (nyHour * 60 + nyMin)) * 60 * 1000;
  // e.g. EDT (UTC-4): 12:00 UTC = 08:00 NY → offset = (720-480)*60000 = 4h in ms

  // 5. 23:59:59 in NY time = T23:59:59 UTC + NY offset (since NY is behind UTC)
  return new Date(`${ty}-${tm}-${td}T23:59:59Z`).getTime() + nyOffsetMs;
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
