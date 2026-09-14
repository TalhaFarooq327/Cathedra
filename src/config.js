/**
 * Cathedra NYC — Site Configuration
 * 
 * Update these values when the client provides
 * actual Booksy URL, Instagram handle, contact info, etc.
 */

// ─── Booking ─────────────────────────────────────────────
// Replace with actual Booksy booking URL once provided
export const BOOKSY_BOOKING_URL = '#booksy-placeholder';

// Service-specific Booksy URLs (if deep-linking is supported)
// Otherwise, all fall back to BOOKSY_BOOKING_URL
export const BOOKSY_SERVICE_URLS = {
  regularis: BOOKSY_BOOKING_URL,
  eques: BOOKSY_BOOKING_URL,
  lux: BOOKSY_BOOKING_URL,
  heir: BOOKSY_BOOKING_URL,
  dux: BOOKSY_BOOKING_URL,
  reign: BOOKSY_BOOKING_URL,
  monarch: BOOKSY_BOOKING_URL,
  earNose: BOOKSY_BOOKING_URL,
  houseCall: BOOKSY_BOOKING_URL,
  dayOff: BOOKSY_BOOKING_URL,
};

// ─── Location ────────────────────────────────────────────
export const ADDRESS = '131 Varick St, Suite 938';
export const CITY_STATE_ZIP = 'New York, NY 10013';
export const FULL_ADDRESS = `${ADDRESS}, ${CITY_STATE_ZIP}`;
export const NEIGHBORHOOD = 'New York City';
export const GOOGLE_MAPS_URL = 'https://maps.google.com/?q=131+Varick+St+Suite+938+New+York+NY+10013';
export const GOOGLE_MAPS_EMBED_URL = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3024.0!2d-74.0055!3d40.7267!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2s131+Varick+St%2C+New+York%2C+NY+10013!5e0!3m2!1sen!2sus!4v1';

// ─── Social ──────────────────────────────────────────────
// Replace with actual Instagram URL
export const INSTAGRAM_URL = '#instagram-placeholder';
export const INSTAGRAM_HANDLE = '@cathedra.nyc';

// ─── Contact ─────────────────────────────────────────────
// Replace with actual contact info
export const PHONE = '(212) 000-0000'; // Placeholder
export const EMAIL = 'hello@cathedranyc.com'; // Placeholder

// ─── Business Hours ──────────────────────────────────────
// Replace with actual hours
export const HOURS = [
  { day: 'Monday', hours: '10:00 AM – 8:00 PM' },
  { day: 'Tuesday', hours: '10:00 AM – 8:00 PM' },
  { day: 'Wednesday', hours: '10:00 AM – 8:00 PM' },
  { day: 'Thursday', hours: '10:00 AM – 8:00 PM' },
  { day: 'Friday', hours: '10:00 AM – 8:00 PM' },
  { day: 'Saturday', hours: '9:00 AM – 6:00 PM' },
  { day: 'Sunday', hours: 'Closed' },
];

// ─── Brand ───────────────────────────────────────────────
export const SITE_NAME = 'Cathedra NYC';
export const SITE_TAGLINE = 'Grooming, Refined.';
export const SITE_DESCRIPTION = 'Premium men\'s grooming in the heart of New York City.';
