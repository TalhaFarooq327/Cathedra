import { motion } from 'framer-motion';
import './TrustBar.css';

const items = [
  {
    label: '131 Varick St',
    sublabel: 'Suite 938 · New York City',
    icon: '◎',
  },
  {
    label: 'Premium Grooming',
    sublabel: 'Personalized service',
    icon: '✦',
  },
  {
    label: '$15 Off 2nd Visit',
    sublabel: 'Automatic Booksy reward',
    icon: '★',
  },
  {
    label: 'Book Online',
    sublabel: 'Powered by Booksy',
    icon: '→',
  },
];

export default function TrustBar() {
  return (
    <section className="trust-bar">
      <div className="trust-bar__inner container--wide">
        {items.map((item, i) => (
          <motion.div
            key={i}
            className="trust-bar__item"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.6,
              delay: i * 0.1,
              ease: [0.16, 1, 0.3, 1],
            }}
          >
            <span className="trust-bar__icon">{item.icon}</span>
            <div className="trust-bar__text">
              <span className="trust-bar__label">{item.label}</span>
              <span className="trust-bar__sublabel">{item.sublabel}</span>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
