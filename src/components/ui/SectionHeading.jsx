import { motion } from 'framer-motion';
import './SectionHeading.css';

export default function SectionHeading({
  overline,
  title,
  subtitle,
  align = 'center',
  light = false,
}) {
  return (
    <motion.div
      className={`section-heading section-heading--${align} ${light ? 'section-heading--light' : ''}`}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
    >
      {overline && <span className="section-heading__overline overline">{overline}</span>}
      <h2 className="section-heading__title">{title}</h2>
      {subtitle && <p className="section-heading__subtitle">{subtitle}</p>}
    </motion.div>
  );
}
