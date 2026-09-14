import { motion } from 'framer-motion';
import { BOOKSY_BOOKING_URL } from '../../config';
import Button from '../ui/Button';
import './BookingCTA.css';

export default function BookingCTA() {
  return (
    <section className="booking-cta section">
      <div className="container">
        <motion.div
          className="booking-cta__content"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <h2 className="booking-cta__title">
            Your next look starts here.
          </h2>
          <p className="booking-cta__subtitle">
            Choose your service and book your appointment through Booksy.
          </p>
          <div className="booking-cta__action">
            <Button href={BOOKSY_BOOKING_URL} variant="accent" size="lg">
              Book Your Appointment
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
