import { motion } from 'framer-motion';
import { BOOKSY_BOOKING_URL } from '../../config';
import Button from '../ui/Button';
import finalCtaBg from '../../assets/images/final-cta-bg.png';
import './FinalCTA.css';

export default function FinalCTA() {
  return (
    <section className="final-cta">
      {/* Background */}
      <div className="final-cta__bg">
        <img
          src={finalCtaBg}
          alt="Cathedra NYC atmosphere"
          className="final-cta__bg-image"
          loading="lazy"
        />
        <div className="final-cta__overlay" />
      </div>

      {/* Content */}
      <motion.div
        className="final-cta__content container"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
      >
        <span className="overline">Cathedra NYC</span>
        <h2 className="final-cta__title">
          Ready for your next appointment?
        </h2>
        <p className="final-cta__subtitle">Premium grooming in NYC.</p>
        <div className="final-cta__action">
          <Button href={BOOKSY_BOOKING_URL} variant="accent" size="lg">
            Book Now
          </Button>
        </div>
      </motion.div>
    </section>
  );
}
