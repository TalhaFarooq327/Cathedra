import { motion } from 'framer-motion';
import { BOOKSY_BOOKING_URL } from '../../config';
import Button from '../ui/Button';
import heroBg from '../../assets/images/hero-bg.png';
import logoGold from '../../assets/images/logo-gold-bright.png';
import './Hero.css';

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.3,
    },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 1, ease: [0.16, 1, 0.3, 1] },
  },
};

const imageReveal = {
  hidden: { scale: 1.15, opacity: 0 },
  show: {
    scale: 1,
    opacity: 1,
    transition: { duration: 1.8, ease: [0.16, 1, 0.3, 1] },
  },
};

export default function Hero() {
  const handleExplore = (e) => {
    e.preventDefault();
    const services = document.querySelector('#services');
    if (services) {
      services.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="hero" id="hero">
      {/* Background Image */}
      <motion.div
        className="hero__bg"
        variants={imageReveal}
        initial="hidden"
        animate="show"
      >
        <img
          src={heroBg}
          alt="Premium grooming salon interior at Cathedra NYC"
          className="hero__bg-image"
          loading="eager"
        />
        <div className="hero__overlay" />
      </motion.div>

      {/* Content */}
      <motion.div
        className="hero__content container"
        variants={container}
        initial="hidden"
        animate="show"
      >
        <motion.div className="hero__logo-wrapper" variants={fadeUp}>
          <img src={logoGold} alt="Cathedra NYC Official Logo" className="hero__logo-badge" />
        </motion.div>

        <motion.span className="hero__brand overline" variants={fadeUp}>
          Cathedra NYC
        </motion.span>

        <motion.h1 className="hero__title" variants={fadeUp}>
          Grooming <br /> Refined
        </motion.h1>

        <motion.p className="hero__subtitle" variants={fadeUp}>
          Premium grooming in the heart of New York City.
        </motion.p>

        <motion.div className="hero__actions" variants={fadeUp}>
          <Button href={BOOKSY_BOOKING_URL} variant="primary" size="lg">
            Book an Appointment
          </Button>
          <Button
            href="#services"
            variant="secondary"
            size="lg"
            onClick={handleExplore}
            icon={false}
          >
            <span>Explore Services</span>
            <motion.span
              style={{ display: 'inline-block', marginLeft: '0.5rem' }}
              animate={{ y: [0, 4, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            >
              ↓
            </motion.span>
          </Button>
        </motion.div>


      </motion.div>

    </section>
  );
}
