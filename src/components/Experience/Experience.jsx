import { motion } from 'framer-motion';
import SectionHeading from '../ui/SectionHeading';
import './Experience.css';

const steps = [
  {
    number: '01',
    title: 'Choose Your Service',
    description: 'Select the grooming experience that fits you.',
  },
  {
    number: '02',
    title: 'Book Your Time',
    description: 'Choose your preferred appointment through Booksy.',
  },
  {
    number: '03',
    title: 'Experience Cathedra',
    description: 'Visit the studio and enjoy the grooming experience.',
  },
  {
    number: '04',
    title: 'Leave Refined',
    description: 'Walk out feeling confident and refreshed.',
  },
];

export default function Experience() {
  return (
    <section className="experience section" id="experience">
      <div className="container">
        <SectionHeading
          overline="The Process"
          title="Your Experience"
          subtitle="From booking to walking out every step is crafted."
        />

        <div className="experience__grid">
          {steps.map((step, i) => (
            <motion.div
              key={step.number}
              className="experience__step"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{
                duration: 0.7,
                delay: i * 0.12,
                ease: [0.16, 1, 0.3, 1],
              }}
            >
              <span className="experience__number">{step.number}</span>
              <div className="experience__divider" />
              <h3 className="experience__title">{step.title}</h3>
              <p className="experience__description">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
