import { motion } from 'framer-motion';
import SectionHeading from '../ui/SectionHeading';
import Button from '../ui/Button';
import { INSTAGRAM_URL, INSTAGRAM_HANDLE, FACEBOOK_URL, INSTAGRAM_POST_IDS } from '../../config';
import orig5 from '../../assets/images/cathedra-orig-5.jpg';
import orig7 from '../../assets/images/cathedra-orig-7.jpg';
import orig8 from '../../assets/images/cathedra-orig-8.jpg';
import orig14 from '../../assets/images/cathedra-orig-14.jpg';
import orig15 from '../../assets/images/cathedra-orig-15.jpg';
import philosophyImg from '../../assets/images/philosophy-craft.jpg';
import './SocialSection.css';

const INSTAGRAM_POSTS = [
  {
    src: orig7,
    alt: 'Precision scissor architecture and tailored taper cut',
    caption: 'Precision scissor work & clean taper architecture. Book your seat at Cathedra NYC.',
    tag: '@cathedranyc',
  },
  {
    src: orig15,
    alt: 'Hot towel beard sculpting and razor finish',
    caption: 'Hot towel steam & straight razor detail line. The Eques ritual in progress.',
    tag: '@cathedranyc',
  },
  {
    src: orig14,
    alt: 'Cathedra NYC private sanctuary atmosphere at Varick St',
    caption: 'Private suite 938 on Varick St. An exclusive atmosphere for refined gentlemen.',
    tag: '@cathedranyc',
  },
  {
    src: orig5,
    alt: 'Handcrafted Japanese steel shears and grooming ritual tools',
    caption: 'Custom Japanese steel & premium grooming formulations.',
    tag: '@cathedranyc',
  },
  {
    src: orig8,
    alt: 'Master barber crafting haircut in the Cathedra lab',
    caption: 'In the lab every season. Craftsmanship in action at Cathedra NYC.',
    tag: '@cathedranyc',
  },
  {
    src: philosophyImg,
    alt: 'Master barber sculpting hairline precision',
    caption: 'Craftsmanship in action. Book your session via Booksy link in bio.',
    tag: '@cathedranyc',
  },
];

export default function SocialSection() {
  const hasCustomPostEmbeds = INSTAGRAM_POST_IDS && INSTAGRAM_POST_IDS.length > 0;

  return (
    <section className="social section section--warm" id="social">
      <div className="container">
        <SectionHeading
          overline="Instagram Feed"
          title="Follow the Craft."
          subtitle={`Follow ${INSTAGRAM_HANDLE} for daily precision, studio atmosphere, and gentlemen's style.`}
          light={true}
        />

        {/* Horizontally Scrollable Slider Track */}
        <motion.div
          className="social__slider-track"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {hasCustomPostEmbeds ? (
            INSTAGRAM_POST_IDS.map((postId, i) => (
              <div key={postId || i} className="social__embed-card">
                <iframe
                  src={`https://www.instagram.com/p/${postId}/embed/`}
                  className="social__embed-iframe"
                  title={`Cathedra NYC Instagram Post ${i + 1}`}
                  frameBorder="0"
                  scrolling="no"
                  allowTransparency="true"
                />
              </div>
            ))
          ) : (
            INSTAGRAM_POSTS.map((post, i) => (
              <a
                key={i}
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="social__item"
              >
                <img src={post.src} alt={post.alt} loading="lazy" />
                <div className="social__item-overlay">
                  <div className="social__item-meta">
                    <span className="social__item-badge">Instagram</span>
                    <p className="social__item-caption">{post.caption}</p>
                    <span className="social__item-handle">{post.tag}</span>
                  </div>
                  <span className="social__item-icon">↗</span>
                </div>
              </a>
            ))
          )}
        </motion.div>

        {/* Social Action CTAs */}
        <div className="social__actions">
          <Button href={INSTAGRAM_URL} variant="dark" size="md">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
            </svg>
            <span>Follow on Instagram</span>
          </Button>

          <Button href={FACEBOOK_URL} variant="outline-dark" size="md">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
              <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
            </svg>
            <span>Facebook Page</span>
          </Button>
        </div>
      </div>
    </section>
  );
}

