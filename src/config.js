/**
 * Cathedra NYC — Site Configuration
 * 
 * Update these values when the client provides
 * actual Booksy URL, Instagram handle, contact info, etc.
 */

// ─── Booking ─────────────────────────────────────────────
export const BOOKSY_BOOKING_URL = 'https://booksy.com/en-us/dl/show-business/231737';
export const BOOKSY_WIDGET_SCRIPT = 'https://booksy.com/widget/code.js?id=231737&country=us&lang=en';

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
export const GOOGLE_MAPS_EMBED_URL = 'https://maps.google.com/maps?q=131+Varick+St+Suite+938+New+York+NY+10013&t=&z=16&ie=UTF8&iwloc=&output=embed';

// ─── Social ──────────────────────────────────────────────
export const INSTAGRAM_URL = 'https://www.instagram.com/cathedra.nyc/';
export const INSTAGRAM_HANDLE = '@cathedra.nyc';

// ─── Contact ─────────────────────────────────────────────
export const PHONE = '(347) 672-9171';
export const PHONE_RAW = '3476729171';
export const EMAIL = 'valjean@cathedra.nyc';

// ─── Business Hours ──────────────────────────────────────
export const HOURS = [
  { day: 'Tuesday', hours: '10:00 AM – 8:00 PM' },
  { day: 'Wednesday', hours: '10:00 AM – 8:00 PM' },
  { day: 'Thursday', hours: '10:00 AM – 8:00 PM' },
  { day: 'Friday', hours: '10:00 AM – 8:00 PM' },
];

// ─── Brand ───────────────────────────────────────────────
export const SITE_NAME = 'Cathedra NYC';
export const SITE_TAGLINE = 'Grooming, Refined.';
export const SITE_DESCRIPTION = 'Premium men\'s grooming in the heart of New York City.';
