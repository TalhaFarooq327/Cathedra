import { motion } from 'framer-motion';
import SectionHeading from '../ui/SectionHeading';
import Button from '../ui/Button';
import { INSTAGRAM_URL } from '../../config';
import heroBg from '../../assets/images/hero-bg.png';
import aboutImg from '../../assets/images/about-editorial.png';
import finalCtaBg from '../../assets/images/final-cta-bg.png';
import beardImg from '../../assets/images/gallery-beard.png';
import toolsImg from '../../assets/images/gallery-tools.png';
import chairImg from '../../assets/images/gallery-chair.png';
import './SocialSection.css';

const SOCIAL_IMAGES = [
  { src: heroBg, alt: 'Cathedra NYC salon interior' },
  { src: beardImg, alt: 'Beard detail work' },
  { src: aboutImg, alt: 'Precision grooming session' },
  { src: toolsImg, alt: 'Precision grooming tools' },
  { src: chairImg, alt: 'Studio chair detail' },
  { src: finalCtaBg, alt: 'Cathedra NYC storefront at night' },
];

export default function SocialSection() {
  return (
    <section className="social section section--warm">
      <div className="container">
        <SectionHeading
          overline="Instagram"
          title="Follow the Craft."
          subtitle="A glimpse into daily precision and studio atmosphere."
          light={true}
        />

        <motion.div
          className="social__grid"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {SOCIAL_IMAGES.map((img, i) => (
            <motion.a
              key={i}
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="social__item"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
            >
              <img src={img.src} alt={img.alt} loading="lazy" />
              <div className="social__item-overlay">
                <span className="social__item-icon">↗</span>
              </div>
            </motion.a>
          ))}
        </motion.div>

        <div className="social__cta">
          <Button href={INSTAGRAM_URL} variant="dark" size="md">
            Follow on Instagram
          </Button>
        </div>
      </div>
    </section>
  );
}
