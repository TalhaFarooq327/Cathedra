import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SectionHeading from '../ui/SectionHeading';
import orig1 from '../../assets/images/cathedra-orig-1.jpg';
import orig2 from '../../assets/images/cathedra-orig-2.jpg';
import orig3 from '../../assets/images/cathedra-orig-3.jpg';
import orig4 from '../../assets/images/cathedra-orig-4.jpg';
import orig5 from '../../assets/images/cathedra-orig-5.jpg';
import orig6 from '../../assets/images/cathedra-orig-6.jpg';
import orig7 from '../../assets/images/cathedra-orig-7.jpg';
import orig8 from '../../assets/images/cathedra-orig-8.jpg';
import orig9 from '../../assets/images/cathedra-orig-9.jpg';
import orig10 from '../../assets/images/cathedra-orig-10.jpg';
import orig11 from '../../assets/images/cathedra-orig-11.jpg';
import orig12 from '../../assets/images/cathedra-orig-12.jpg';
import orig13 from '../../assets/images/cathedra-orig-13.jpg';
import orig14 from '../../assets/images/cathedra-orig-14.jpg';
import orig15 from '../../assets/images/cathedra-orig-15.jpg';
import orig16 from '../../assets/images/cathedra-orig-16.jpg';
import orig17 from '../../assets/images/cathedra-orig-17.jpg';

import toolsImg from '../../assets/images/gallery-tools.png';
import chairImg from '../../assets/images/gallery-chair.png';
import philosophyImg from '../../assets/images/philosophy-craft.jpg';
import './Gallery.css';

const GALLERY_IMAGES = [
  { id: 1, src: orig7, alt: 'Cole Anthony Ginsu haircut by Cathedra NYC', category: 'Beard' },
  { id: 2, src: orig15, alt: 'Precision beard line & taper sculpting', category: 'Hair' },
  { id: 3, src: orig5, alt: 'Cathedra NYC luxury grooming formulations & finished products', category: 'Hair' },
  { id: 4, src: orig8, alt: 'Master barber crafting haircut in the Cathedra lab', category: 'Beard' },
  { id: 5, src: orig3, alt: 'Precision blended fade haircut', category: 'Beard' },
  { id: 6, src: orig16, alt: 'Straight razor technique & beard architecture', category: 'Hair' },
  { id: 7, src: orig4, alt: 'Custom birthday taper fade haircut', category: 'Beard' },
  { id: 8, src: orig11, alt: 'Clean line-up and executive grooming', category: 'Beard' },
  { id: 9, src: orig9, alt: 'Shark Szn precision haircut and beard finish', category: 'Hair' },
  { id: 10, src: toolsImg, alt: 'Handcrafted Japanese steel shears & ritual tools', category: 'The Studio' },
  { id: 11, src: orig1, alt: 'Executive client style & crisp hairline', category: 'Beard' },
  { id: 12, src: orig14, alt: 'Cathedra NYC private studio atmosphere & city view', category: 'Beard' },
  { id: 13, src: orig10, alt: 'Creative hair design and tailored architecture', category: 'Hair' },
  { id: 14, src: orig17, alt: 'Master barber in the process of perfection', category: 'Hair' },
  { id: 15, src: orig2, alt: 'Classic Cathedra NYC client haircut ritual', category: 'Hair' },
  { id: 16, src: orig13, alt: 'Tailored personal style haircut', category: 'Beard' },
  { id: 17, src: orig6, alt: 'Executive grooming service on location', category: 'Hair' },
  { id: 18, src: orig12, alt: 'Community & love at Cathedra NYC', category: 'Hair' },
  { id: 19, src: philosophyImg, alt: 'Outdoor ritual haircut session in NYC', category: 'Hair' },
  { id: 20, src: chairImg, alt: 'Belmont leather barber chair in Suite 938', category: 'The Studio' },
];

const CATEGORIES = ['All', 'Hair', 'Beard', 'The Studio'];

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState('Beard');
  const [lightboxIndex, setLightboxIndex] = useState(null);

  const filteredImages = activeCategory === 'All'
    ? GALLERY_IMAGES
    : GALLERY_IMAGES.filter((img) => img.category === activeCategory);

  const openLightbox = (index) => setLightboxIndex(index);
  const closeLightbox = () => setLightboxIndex(null);

  const prevLightbox = () => {
    if (lightboxIndex === null) return;
    setLightboxIndex((prev) => (prev === 0 ? filteredImages.length - 1 : prev - 1));
  };

  const nextLightbox = () => {
    if (lightboxIndex === null) return;
    setLightboxIndex((prev) => (prev === filteredImages.length - 1 ? 0 : prev + 1));
  };

  useEffect(() => {
    if (lightboxIndex === null) return;

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') setLightboxIndex(null);
      if (e.key === 'ArrowLeft') {
        setLightboxIndex((prev) => (prev === 0 ? filteredImages.length - 1 : prev - 1));
      }
      if (e.key === 'ArrowRight') {
        setLightboxIndex((prev) => (prev === filteredImages.length - 1 ? 0 : prev + 1));
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightboxIndex, filteredImages.length]);

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
              onClick={() => {
                setActiveCategory(cat);
                setLightboxIndex(null);
              }}
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
                transition={{
                  layout: { type: 'spring', stiffness: 350, damping: 30 },
                  opacity: { duration: 0.25 },
                  scale: { duration: 0.25 },
                  delay: Math.min(i * 0.03, 0.15),
                }}
                onClick={() => openLightbox(i)}
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
        {lightboxIndex !== null && filteredImages[lightboxIndex] && (
          <motion.div
            className="lightbox"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={closeLightbox}
          >
            <motion.div
              className="lightbox__content"
              initial={{ scale: 0.92, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.92, opacity: 0 }}
              transition={{ duration: 0.25 }}
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={filteredImages[lightboxIndex].src}
                alt={filteredImages[lightboxIndex].alt}
                className="lightbox__image"
              />

              <div className="lightbox__caption">
                <span>{filteredImages[lightboxIndex].category}</span>
                <p>{filteredImages[lightboxIndex].alt}</p>
              </div>

              {/* Prev / Next Arrows */}
              {filteredImages.length > 1 && (
                <>
                  <button
                    className="lightbox__btn lightbox__btn--prev"
                    onClick={prevLightbox}
                    aria-label="Previous image"
                  >
                    ‹
                  </button>
                  <button
                    className="lightbox__btn lightbox__btn--next"
                    onClick={nextLightbox}
                    aria-label="Next image"
                  >
                    ›
                  </button>
                </>
              )}

              <button
                className="lightbox__close"
                onClick={closeLightbox}
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
