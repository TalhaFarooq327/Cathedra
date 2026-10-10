import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { BOOKSY_BOOKING_URL } from '../../config';
import { openBooksyWidget } from '../../utils/booksy';
import { getActivePhaseTarget, calculateTimeLeft } from '../../utils/flashOfferSchedule';
import './FlashOfferBar.css';

export default function FlashOfferBar() {
  const [isVisible, setIsVisible] = useState(true);
  const [targetMs, setTargetMs]   = useState(() => getActivePhaseTarget());
  const [timeLeft, setTimeLeft]   = useState(() => {
    const t = getActivePhaseTarget();
    return t ? calculateTimeLeft(t) : null;
  });

  useEffect(() => {
    // Respect user dismiss within this session
    const isDismissed = sessionStorage.getItem('cathedra_flash_bar_dismissed');
    if (isDismissed === 'true') setIsVisible(false);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      const newTarget = getActivePhaseTarget();

      // Phase changed (timer reset) or offer ended
      if (newTarget !== targetMs) {
        setTargetMs(newTarget);
      }

      setTimeLeft(newTarget ? calculateTimeLeft(newTarget) : null);
    }, 1000);

    return () => clearInterval(timer);
  }, [targetMs]);

  const handleDismiss = () => {
    setIsVisible(false);
    sessionStorage.setItem('cathedra_flash_bar_dismissed', 'true');
  };

  const handleClaimClick = (e) => {
    e.preventDefault();
    openBooksyWidget(e);
  };

  // Hide if user dismissed, no active phase, or current phase countdown expired
  if (!isVisible || !targetMs || !timeLeft) return null;


  return (
    <AnimatePresence>
      <motion.div
        className="flash-offer-bar"
        initial={{ height: 0, opacity: 0 }}
        animate={{ height: 'auto', opacity: 1 }}
        exit={{ height: 0, opacity: 0 }}
        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className="flash-offer-bar__inner container--wide">
          {/* Mobile & Desktop Icon & Label */}
          <div className="flash-offer-bar__left">
            <span className="flash-offer-bar__badge">⚡ FLASH OFFER</span>
            <span className="flash-offer-bar__text">
              Get <strong className="flash-offer-bar__gold">10% OFF</strong> All Grooming Services
            </span>
          </div>

          {/* Center Ticker Countdown */}
          <div className="flash-offer-bar__center">
            <span className="flash-offer-bar__timer-icon" aria-hidden="true">⏱</span>
            <span className="flash-offer-bar__timer-digits">
              {String(timeLeft.days).padStart(2, '0')}d : {String(timeLeft.hours).padStart(2, '0')}h : {String(timeLeft.minutes).padStart(2, '0')}m : {String(timeLeft.seconds).padStart(2, '0')}s
            </span>
          </div>

          {/* Right Action Button & Dismiss */}
          <div className="flash-offer-bar__right">
            <a
              href={BOOKSY_BOOKING_URL}
              onClick={handleClaimClick}
              className="flash-offer-bar__cta"
            >
              Claim 10% OFF →
            </a>
            <button
              type="button"
              className="flash-offer-bar__close"
              onClick={handleDismiss}
              aria-label="Dismiss offer banner"
            >
              ✕
            </button>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
