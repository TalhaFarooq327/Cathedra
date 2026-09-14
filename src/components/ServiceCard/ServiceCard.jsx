import { motion } from 'framer-motion';
import Button from '../ui/Button';
import './ServiceCard.css';

export default function ServiceCard({ service, index = 0, featured = false, light = true }) {
  const { name, description, duration, price, priceLabel, bookUrl, premium } = service;

  return (
    <motion.div
      className={`service-card ${light ? 'service-card--light' : ''} ${premium ? 'service-card--premium' : ''} ${featured ? 'service-card--featured' : ''}`}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{
        duration: 0.7,
        delay: index * 0.1,
        ease: [0.16, 1, 0.3, 1],
      }}
      whileHover={{ y: -4 }}
    >
      {premium && (
        <div className="service-card__badge">
          <span>Most Popular</span>
        </div>
      )}

      <div className="service-card__header">
        <h3 className="service-card__name">{name}</h3>
        <p className="service-card__description">{description}</p>
      </div>

      <div className="service-card__details">
        <span className="service-card__duration">⏱ {duration}</span>
        <span className="service-card__dot">·</span>
        <span className="service-card__price">{priceLabel || `$${price}`}</span>
      </div>

      <div className="service-card__footer">
        <Button
          href={bookUrl}
          variant={premium ? 'accent' : light ? 'dark' : 'secondary'}
          size="md"
        >
          {featured ? `Book ${name}` : 'Book Now'}
        </Button>
      </div>
    </motion.div>
  );
}
