import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SectionHeading from '../ui/SectionHeading';
import ServiceCard from '../ServiceCard/ServiceCard';
import Button from '../ui/Button';
import { FEATURED_SERVICES, SERVICE_CATEGORIES, ALL_SERVICES } from '../../data/services';
import { BOOKSY_BOOKING_URL } from '../../config';
import './FeaturedServices.css';

// Promotion expires on October 15th at 23:59:59
const PROMO_END_DATE = new Date('2026-10-15T23:59:59').getTime();

const calculateTimeLeft = () => {
  const difference = PROMO_END_DATE - new Date().getTime();
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

export default function FeaturedServices() {
  const [activeTab, setActiveTab] = useState('all');
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft);

  useEffect(() => {
    const timer = setInterval(() => {
      const remaining = calculateTimeLeft();
      setTimeLeft(remaining);
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="featured-services section section--light" id="services">
      <div className="container">
        <SectionHeading
          overline="Services & Menu"
          title="The Signature Experience"
          subtitle="Bespoke haircuts, hot-towel beard architecture, and private grooming sessions."
          light={true}
        />

        {/* Featured Top 3 Services */}
        <div className="featured-services__section-label">
          <span>Featured Packages</span>
        </div>

        <div className="featured-services__grid">
          {FEATURED_SERVICES.map((service, i) => (
            <ServiceCard
              key={service.id}
              service={service}
              index={i}
              featured
              light={true}
            />
          ))}
        </div>

        {/* Flash Offer Banner with Countdown - Auto hides when expired */}
        {timeLeft && (
          <motion.div
            className="featured-services__flash-banner"
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* Ambient Background Glow */}
            <div className="flash-banner__ambient-glow" />
            <div className="flash-banner__shimmer-line" />

            <div className="flash-banner__header">
              <div className="flash-banner__badge">
                <span className="flash-banner__badge-dot" />
                <span className="flash-banner__badge-icon">⚡</span>
                <span className="flash-banner__badge-text">LIMITED TIME FLASH OFFER</span>
              </div>
              <span className="flash-banner__validity">Valid Through Oct 15</span>
            </div>

            <div className="flash-banner__body">
              <div className="flash-banner__content">
                <h3 className="flash-banner__title">
                  Get <span className="flash-banner__highlight">10% OFF</span> All Services
                </h3>
                <p className="flash-banner__desc">
                  Exclusive seasonal reward open to <strong>all new & returning clients</strong>. Discount is automatically applied at checkout when booking via Booksy.
                </p>
              </div>

              {/* Countdown Timer Block */}
              <div className="flash-banner__timer-card">
                <div className="flash-banner__timer-header">
                  <span className="flash-banner__timer-icon">⏱</span>
                  <span className="flash-banner__timer-title">OFFER EXPIRES IN</span>
                </div>
                <div className="flash-banner__timer-grid">
                  <div className="flash-timer-box">
                    <span className="flash-timer-num">{String(timeLeft.days).padStart(2, '0')}</span>
                    <span className="flash-timer-unit">DAYS</span>
                  </div>
                  <span className="flash-timer-colon">:</span>
                  <div className="flash-timer-box">
                    <span className="flash-timer-num">{String(timeLeft.hours).padStart(2, '0')}</span>
                    <span className="flash-timer-unit">HOURS</span>
                  </div>
                  <span className="flash-timer-colon">:</span>
                  <div className="flash-timer-box">
                    <span className="flash-timer-num">{String(timeLeft.minutes).padStart(2, '0')}</span>
                    <span className="flash-timer-unit">MINS</span>
                  </div>
                  <span className="flash-timer-colon">:</span>
                  <div className="flash-timer-box">
                    <span className="flash-timer-num">{String(timeLeft.seconds).padStart(2, '0')}</span>
                    <span className="flash-timer-unit">SECS</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="flash-banner__footer">
              <div className="flash-banner__meta">
                <span className="flash-banner__meta-icon">✓</span>
                <span>Auto-applied at Booksy checkout · No promo code needed</span>
              </div>
              <div className="flash-banner__action">
                <Button href={BOOKSY_BOOKING_URL} variant="accent" size="lg">
                  Claim 10% Discount & Book Now
                </Button>
              </div>
            </div>
          </motion.div>
        )}

        {/* Full Categorized Menu Section */}
        <div className="featured-services__menu-container">
          <div className="featured-services__menu-header">
            <h3 className="featured-services__menu-title">Complete Grooming Menu</h3>
            <p className="featured-services__menu-subtitle">Explore our full line of dedicated hair, beard, and lifestyle services.</p>
          </div>

          {/* Category Tabs */}
          <div className="featured-services__tabs">
            <button
              className={`featured-services__tab ${activeTab === 'all' ? 'active' : ''}`}
              onClick={() => setActiveTab('all')}
            >
              All Services ({ALL_SERVICES.length})
            </button>
            {SERVICE_CATEGORIES.map((cat, idx) => (
              <button
                key={idx}
                className={`featured-services__tab ${activeTab === idx ? 'active' : ''}`}
                onClick={() => setActiveTab(idx)}
              >
                {cat.title}
              </button>
            ))}
          </div>

          {/* Tab Content List */}
          <div className="featured-services__menu-list">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.3 }}
                className="featured-services__menu-grid"
              >
                {(activeTab === 'all'
                  ? ALL_SERVICES
                  : SERVICE_CATEGORIES[activeTab].services
                ).map((service) => (
                  <div className="featured-services__menu-item" key={service.id}>
                    <div className="featured-services__item-info">
                      <div className="featured-services__item-header">
                        <span className="featured-services__item-name">{service.name}</span>
                        <span className="featured-services__item-dots"></span>
                        <span className="featured-services__item-price">{service.priceLabel || `$${service.price}`}</span>
                      </div>
                      <p className="featured-services__item-desc">{service.description}</p>
                      <span className="featured-services__item-duration">⏱ {service.duration}</span>
                    </div>
                    <div className="featured-services__item-action">
                      <Button href={service.bookUrl} variant="outline-dark" size="sm">
                        Book
                      </Button>
                    </div>
                  </div>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
