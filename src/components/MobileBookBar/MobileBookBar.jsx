import { motion, AnimatePresence } from 'framer-motion';
import { useScrollPosition } from '../../hooks/useScrollPosition';
import { BOOKSY_BOOKING_URL } from '../../config';
import { openBooksyWidget } from '../../utils/booksy';
import './MobileBookBar.css';

export default function MobileBookBar() {
  const { scrollY } = useScrollPosition();
  const isVisible = scrollY > 600;

  const handleClick = (e) => {
    openBooksyWidget(e);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="mobile-book-bar"
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
        >
          <a
            href={BOOKSY_BOOKING_URL}
            onClick={handleClick}
            className="mobile-book-bar__btn"
          >
            Book Appointment
          </a>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
