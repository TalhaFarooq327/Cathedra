import { motion } from 'framer-motion';
import Button from '../ui/Button';
import philosophyImg from '../../assets/images/philosophy-craft.webp';
import './About.css';

export default function About() {
  return (
    <section className="about section section--warm" id="about">
      <div className="container">
        <div className="about__grid">
          {/* Image */}
          <motion.div
            className="about__image-wrapper"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="about__image-container">
              <img
                src={philosophyImg}
                alt="Master barber performing a precision haircut ritual at Cathedra NYC"
                className="about__image"
                loading="lazy"
              />
            </div>
          </motion.div>

          {/* Text */}
          <motion.div
            className="about__content"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 1, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="overline overline--dark">The Philosophy</span>

            <h2 className="about__title">More Than a Haircut.</h2>

            <div className="about__text">
              <p>
                Cathedra is a private grooming sanctuary in the heart of New York City. We believe that grooming is an essential ritual that should be executed with surgical precision, uncompromising attention to detail, and a deep respect for individual style.
              </p>
              <p>
                Located in suite 938 on Varick Street, our NYC studio offers an intimate environment designed for modern gentlemen who demand excellence. From flawless clipper fades, razor sharp lines to tailored gentelman scissor cuts.
              </p>
            </div>

            <Button href="#experience" variant="dark" size="md">
              Discover The Experience
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
