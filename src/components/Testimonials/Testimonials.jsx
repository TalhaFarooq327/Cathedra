import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
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

export default function Testimonials() {
  const [current, setCurrent] = useState(0);
  const containerRef = useRef(null);

  const handlePrev = () => {
    setCurrent((prev) => (prev === 0 ? REVIEWS.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrent((prev) => (prev === REVIEWS.length - 1 ? 0 : prev + 1));
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

        <div className="testimonials__carousel" ref={containerRef}>
          <div
            className="testimonials__track"
            style={{ transform: `translateX(-${current * 100}%)` }}
          >
            {REVIEWS.map((review) => (
              <div key={review.id} className="testimonial">
                <Stars count={review.rating} />
                <blockquote className="testimonial__text">
                  &ldquo;{review.text}&rdquo;
                </blockquote>
                <cite className="testimonial__name">{review.name}</cite>
              </div>
            ))}
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
                  onClick={() => setCurrent(i)}
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
