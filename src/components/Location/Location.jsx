import { motion } from 'framer-motion';
import SectionHeading from '../ui/SectionHeading';
import Button from '../ui/Button';
import { ADDRESS, CITY_STATE_ZIP, GOOGLE_MAPS_URL, GOOGLE_MAPS_EMBED_URL, HOURS, PHONE, EMAIL, INSTAGRAM_URL, INSTAGRAM_HANDLE, FACEBOOK_URL, FACEBOOK_HANDLE } from '../../config';
import './Location.css';

export default function Location() {
  return (
    <section className="location section" id="location">
      <div className="container">
        <SectionHeading
          overline="Location & Sanctuary"
          title="Find Cathedra"
          subtitle="Located in the heart of New York City."
        />

        <div className="location__grid">
          {/* Map */}
          <motion.div
            className="location__map"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="location__map-embed">
              <iframe
                src={GOOGLE_MAPS_EMBED_URL}
                width="100%"
                height="100%"
                style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg) grayscale(40%)' }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Cathedra NYC location on Google Maps"
              />
            </div>
          </motion.div>

          {/* Info */}
          <motion.div
            className="location__info"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="location__address">
              <h3 className="location__label">Studio Address</h3>
              <p className="location__address-primary">{ADDRESS}</p>
              <p className="location__address-secondary">{CITY_STATE_ZIP}</p>
              <div className="location__address-cta">
                <Button href={GOOGLE_MAPS_URL} variant="ghost" size="sm">
                  Get Directions →
                </Button>
              </div>
            </div>

            <div className="location__hours">
              <h3 className="location__label">Hours of Operation</h3>
              <div className="location__hours-list">
                {HOURS.map((item) => (
                  <div key={item.day} className="location__hours-row">
                    <span className="location__hours-day">{item.day}</span>
                    <span className="location__hours-time">{item.hours}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="location__contact">
              <h3 className="location__label">Direct Contact & Social</h3>
              <p>
                <strong>Phone: </strong>
                <a href={`tel:${PHONE.replace(/[^0-9]/g, '')}`} style={{ color: 'inherit', textDecoration: 'underline' }}>
                  {PHONE}
                </a>
              </p>
              <p>
                <strong>Email: </strong>
                <a href={`mailto:${EMAIL}`} style={{ color: 'inherit', textDecoration: 'underline' }}>
                  {EMAIL}
                </a>
              </p>

            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
