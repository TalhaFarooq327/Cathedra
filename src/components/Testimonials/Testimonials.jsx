import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SectionHeading from '../ui/SectionHeading';
import './Testimonials.css';

const REVIEWS = [
  {
    id: 1,
    text: 'Cathedra is hands down the finest grooming studio in NYC. The level of precision, atmosphere, and attention to detail is completely unmatched.',
    name: 'Marcus V. — Executive & Client',
    rating: 5,
  },
  {
    id: 2,
    text: 'The Lux experience is incredible. Steamed facial, precise beard architecture, and a flawless haircut. I won\'t go anywhere else in Manhattan.',
    name: 'Julian R. — Fashion Director',
    rating: 5,
  },
  {
    id: 3,
    text: 'Stepping into suite 938 feels like entering a private club. Elegant, understated, and masterclass craftsmanship every single time.',
    name: 'David K. — Founder & CEO',
    rating: 5,
  },
  {
    id: 4,
    text: 'Extremely easy to book via Booksy. High quality cuts, clean lines, and an atmosphere that respects your time and personal style.',
    name: 'Harrison B. — NYC Resident',
    rating: 5,
  },
  {
    id: 5,
    text: 'Finding a master barber who understands classic razor work and modern texture is rare. Cathedra delivers perfection on every single visit.',
    name: 'Alexander M. — Private Equity Principal',
    rating: 5,
  },
  {
    id: 6,
    text: 'The attention to detail during the beard sculpt ritual is out of this world. Clean lines, hot towels, and an ambience of refined luxury.',
    name: 'Christian T. — Senior Architect',
    rating: 5,
  },
  {
    id: 7,
    text: 'Suite 938 provides a completely tailored, private experience. No rush, no noise — just immaculate grooming by true masters of the craft.',
    name: 'Dominic S. — Venture Partner',
    rating: 5,
  },
  {
    id: 8,
    text: 'Seamless booking, top-tier hospitality, and the sharpest haircut in Soho/Tribeca. I recommend Cathedra to all my colleagues.',
    name: 'Sebastian P. — Creative Director',
    rating: 5,
  },
];

function Stars({ count }) {
  return (
    <div className="testimonial__stars">
      {Array.from({ length: count }, (_, i) => (
        <span key={i} className="testimonial__star">★</span>
      ))}
    </div>
  );
}

const slideVariants = {
  enter: (direction) => ({
    x: direction > 0 ? 50 : -50,
    opacity: 0,
  }),
  center: {
    x: 0,
    opacity: 1,
  },
  exit: (direction) => ({
    x: direction < 0 ? 50 : -50,
    opacity: 0,
  }),
};

export default function Testimonials() {
  const [[page, direction], setPage] = useState([0, 0]);

  const current = ((page % REVIEWS.length) + REVIEWS.length) % REVIEWS.length;

  const handlePrev = () => {
    setPage([page - 1, -1]);
  };

  const handleNext = () => {
    setPage([page + 1, 1]);
  };

  const handleDotClick = (index) => {
    const dir = index > current ? 1 : -1;
    const diff = index - current;
    setPage([page + diff, dir]);
  };

  return (
    <section className="testimonials section section--light" id="reviews">
      <div className="container">
        <SectionHeading
          overline="Client Praise"
          title="What Modern Gentlemen Say"
          subtitle="Real experiences from regulars at Cathedra NYC."
          light={true}
        />

        <div className="testimonials__carousel">
          <div className="testimonials__viewport">
            <AnimatePresence mode="wait" custom={direction} initial={false}>
              <motion.div
                key={page}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: 'spring', stiffness: 350, damping: 32 },
                  opacity: { duration: 0.2 },
                }}
                className="testimonial"
              >
                <Stars count={REVIEWS[current].rating} />
                <blockquote className="testimonial__text">
                  &ldquo;{REVIEWS[current].text}&rdquo;
                </blockquote>
                <cite className="testimonial__name">{REVIEWS[current].name}</cite>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation */}
          <div className="testimonials__nav">
            <button
              className="testimonials__btn"
              onClick={handlePrev}
              aria-label="Previous review"
            >
              ←
            </button>
            <div className="testimonials__dots">
              {REVIEWS.map((_, i) => (
                <button
                  key={i}
                  className={`testimonials__dot ${i === current ? 'testimonials__dot--active' : ''}`}
                  onClick={() => handleDotClick(i)}
                  aria-label={`Go to review ${i + 1}`}
                />
              ))}
            </div>
            <button
              className="testimonials__btn"
              onClick={handleNext}
              aria-label="Next review"
            >
              →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

