import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SectionHeading from '../ui/SectionHeading';
import ServiceCard from '../ServiceCard/ServiceCard';
import Button from '../ui/Button';
import { FEATURED_SERVICES, SERVICE_CATEGORIES, ALL_SERVICES } from '../../data/services';
import { BOOKSY_BOOKING_URL } from '../../config';
import './FeaturedServices.css';

export default function FeaturedServices() {
  const [activeTab, setActiveTab] = useState('all');

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

        {/* Loyalty Privilege Banner */}
        <motion.div
          className="featured-services__loyalty-banner"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="loyalty-banner__badge">
            <span className="loyalty-banner__icon">✦</span> RETURNING CLIENT PRIVILEGE
          </div>
          <div className="loyalty-banner__content">
            <h3 className="loyalty-banner__title">$15 OFF Your 2nd Visit</h3>
            <p className="loyalty-banner__desc">
              We reward gentleman loyalty. <strong>New clients</strong> automatically earn a <strong>$15 discount</strong> on their 2nd visit, applied seamlessly at checkout in Booksy.
            </p>
          </div>
          <div className="loyalty-banner__action">
            <Button href={BOOKSY_BOOKING_URL} variant="secondary" size="md">
              Book Appointment
            </Button>
          </div>
        </motion.div>

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
