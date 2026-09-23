import { useState, useEffect } from 'react';
import './BooksyModal.css';

const BOOKSY_IFRAME_URL = 'https://booksy.com/widget/index.html?id=231737&country=us&lang=en&mode=dialog&theme=default';

export default function BooksyModal() {
  const [isOpen, setIsOpen] = useState(false);

  // Strict scroll lock on background page when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      document.documentElement.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
      document.documentElement.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
      document.documentElement.style.overflow = '';
    };
  }, [isOpen]);

  useEffect(() => {
    const handleOpen = () => setIsOpen(true);
    window.addEventListener('open-booksy-modal', handleOpen);

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') setIsOpen(false);
    };
    window.addEventListener('keydown', handleKeyDown);

    // Listen for close postMessages sent from inside Booksy iframe
    const handleMessage = (e) => {
      if (!e.data) return;
      if (
        e.data.events?.close ||
        e.data.name === 'close' ||
        e.data === 'close' ||
        e.data.action === 'close'
      ) {
        setIsOpen(false);
      }
    };
    window.addEventListener('message', handleMessage);

    return () => {
      window.removeEventListener('open-booksy-modal', handleOpen);
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('message', handleMessage);
    };
  }, []);

  const closeModal = () => setIsOpen(false);

  return (
    <div className={`booksy-modal-wrapper ${isOpen ? 'is-open' : 'is-closed'}`}>
      <div className="booksy-modal-backdrop" onClick={closeModal}>
        <div className="booksy-modal-container" onClick={(e) => e.stopPropagation()}>
          <div className="booksy-modal-header">
            <div className="booksy-modal-title">
              <span className="booksy-modal-brand">CATHEDRA NYC</span>
              <span className="booksy-modal-subtitle">— Instant Booking</span>
            </div>
            <button
              type="button"
              className="booksy-modal-close"
              onClick={closeModal}
              aria-label="Close modal"
            >
              ✕ Close
            </button>
          </div>
          <div className="booksy-modal-body">
            <iframe
              src={BOOKSY_IFRAME_URL}
              title="Booksy Booking Widget"
              className="booksy-modal-iframe"
              allow="payment"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
