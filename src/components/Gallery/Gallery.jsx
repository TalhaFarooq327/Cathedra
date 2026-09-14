import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SectionHeading from '../ui/SectionHeading';
import heroBg from '../../assets/images/hero-bg.png';
import aboutImg from '../../assets/images/about-editorial.png';
import finalCtaBg from '../../assets/images/final-cta-bg.png';
import beardImg from '../../assets/images/gallery-beard.png';
import toolsImg from '../../assets/images/gallery-tools.png';
import chairImg from '../../assets/images/gallery-chair.png';
import cutImg from '../../assets/images/gallery-cut.png';
import './Gallery.css';

const GALLERY_IMAGES = [
  { id: 1, src: heroBg, alt: 'Cathedra NYC salon interior', category: 'The Studio' },
  { id: 2, src: aboutImg, alt: 'Precision haircut in progress', category: 'Hair' },
  { id: 3, src: beardImg, alt: 'Beard sculpting with straight razor', category: 'Beard' },
  { id: 4, src: toolsImg, alt: 'Executive Japanese steel shears and grooming tools', category: 'Details' },
  { id: 5, src: chairImg, alt: 'Belmont leather barber chair detail', category: 'The Studio' },
  { id: 6, src: cutImg, alt: 'Precision hair styling profile', category: 'Hair' },
  { id: 7, src: finalCtaBg, alt: 'Cathedra NYC studio night view', category: 'The Studio' },
];

const CATEGORIES = ['All', 'Hair', 'Beard', 'Details', 'The Studio'];

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [lightboxImage, setLightboxImage] = useState(null);

  const filteredImages = activeCategory === 'All'
    ? GALLERY_IMAGES
    : GALLERY_IMAGES.filter((img) => img.category === activeCategory);

  return (
    <section className="gallery section section--warm" id="gallery">
      <div className="container">
        <SectionHeading
          overline="Gallery"
          title="The Craft"
          subtitle="A look inside Cathedra NYC."
          light={true}
        />

        {/* Category Filters */}
        <div className="gallery__filters">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              className={`gallery__filter ${activeCategory === cat ? 'gallery__filter--active' : ''}`}
              onClick={() => setActiveCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <motion.div className="gallery__grid" layout>
          <AnimatePresence mode="popLayout">
            {filteredImages.map((image, i) => (
              <motion.div
                key={image.id}
                className="gallery__item"
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                onClick={() => setLightboxImage(image)}
              >
                <div className="gallery__image-wrapper">
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="gallery__image"
                    loading="lazy"
                  />
                  <div className="gallery__image-overlay">
                    <span className="gallery__image-category">{image.category}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxImage && (
          <motion.div
            className="lightbox"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={() => setLightboxImage(null)}
          >
            <motion.div
              className="lightbox__content"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={lightboxImage.src}
                alt={lightboxImage.alt}
                className="lightbox__image"
              />
              <button
                className="lightbox__close"
                onClick={() => setLightboxImage(null)}
                aria-label="Close lightbox"
              >
                ✕
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
