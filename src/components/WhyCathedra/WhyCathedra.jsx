import { motion } from 'framer-motion';
import SectionHeading from '../ui/SectionHeading';
import './WhyCathedra.css';

const values = [
  {
    title: 'Precision',
    description: 'Every detail matters.',
    icon: '◇',
  },
  {
    title: 'Personal Style',
    description: 'Grooming tailored to you.',
    icon: '◆',
  },
  {
    title: 'Craft',
    description: 'Technique meets modern style.',
    icon: '▪',
  },
  {
    title: 'Experience',
    description: 'A premium grooming environment.',
    icon: '✦',
  },
];

export default function WhyCathedra() {
  return (
    <section className="why-cathedra section">
      <div className="container">
        <SectionHeading
          overline="Why Cathedra"
          title="The Cathedra Standard"
        />

        <div className="why-cathedra__grid">
          {values.map((value, i) => (
            <motion.div
              key={value.title}
              className="why-cathedra__item"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{
                duration: 0.6,
                delay: i * 0.1,
                ease: [0.16, 1, 0.3, 1],
              }}
            >
              <span className="why-cathedra__icon">{value.icon}</span>
              <h3 className="why-cathedra__title">{value.title}</h3>
              <p className="why-cathedra__description">{value.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
