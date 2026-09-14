import { BOOKSY_SERVICE_URLS } from '../config';

/**
 * Cathedra NYC — Complete Service Menu
 * 
 * Each service has exact names and prices as provided.
 * No duplicates. Organized into categories.
 */

// ─── Individual Services ─────────────────────────────────

export const REGULARIS = {
  id: 'regularis',
  name: 'REGULARIS',
  description: 'Haircut',
  duration: '45 min',
  price: 60,
  bookUrl: BOOKSY_SERVICE_URLS.regularis,
  featured: true,
};

export const EQUES = {
  id: 'eques',
  name: 'EQUES',
  description: 'Haircut + Beard',
  duration: '55 min',
  price: 75,
  bookUrl: BOOKSY_SERVICE_URLS.eques,
  featured: true,
};

export const LUX = {
  id: 'lux',
  name: 'LUX',
  description: 'Haircut + Beard + Enhancements + Steamed Facial',
  duration: '1h 15m',
  price: 100,
  bookUrl: BOOKSY_SERVICE_URLS.lux,
  featured: true,
  premium: true,
};

export const REIGN = {
  id: 'reign',
  name: 'REIGN',
  description: 'Haircut + Beard + Enhancements',
  duration: '1 hour',
  price: 85,
  bookUrl: BOOKSY_SERVICE_URLS.reign,
};

export const THE_MONARCH = {
  id: 'monarch',
  name: 'THE MONARCH',
  description: 'Scissor Cut + Beard + Steamed Facial',
  duration: '1h 20m',
  price: 110,
  bookUrl: BOOKSY_SERVICE_URLS.monarch,
};

export const THE_HEIR = {
  id: 'heir',
  name: 'THE HEIR',
  description: 'Scissor Cut',
  duration: '50 min',
  price: 75,
  bookUrl: BOOKSY_SERVICE_URLS.heir,
};

export const DUX = {
  id: 'dux',
  name: 'DUX',
  description: 'Scissor Cut + Beard',
  duration: '1h 10m',
  price: 85,
  bookUrl: BOOKSY_SERVICE_URLS.dux,
};

export const EAR_NOSE_TRIM = {
  id: 'earNose',
  name: 'Ear & Nose Trim',
  description: 'Quick ear and nose grooming',
  duration: '5 min',
  price: 10,
  bookUrl: BOOKSY_SERVICE_URLS.earNose,
};

export const HOUSE_CALL = {
  id: 'houseCall',
  name: 'House Call',
  description: 'Premium grooming at your location',
  duration: '3 hours',
  price: 250,
  priceLabel: '$250+',
  bookUrl: BOOKSY_SERVICE_URLS.houseCall,
};

export const DAY_OFF = {
  id: 'dayOff',
  name: 'Day Off Haircuts',
  description: 'Extended session for a relaxed experience',
  duration: '50 min',
  price: 100,
  priceLabel: '$100+',
  bookUrl: BOOKSY_SERVICE_URLS.dayOff,
};

// ─── Featured Services (Top 3) ──────────────────────────

export const FEATURED_SERVICES = [REGULARIS, EQUES, LUX];

// ─── Categorized Menu ────────────────────────────────────

export const SERVICE_CATEGORIES = [
  {
    title: 'Signature Packages',
    description: 'Our most popular grooming experiences.',
    services: [REGULARIS, EQUES, LUX, REIGN, THE_MONARCH],
  },
  {
    title: 'Cuts & Grooming',
    description: 'Precision cuts and grooming essentials.',
    services: [THE_HEIR, DUX, EAR_NOSE_TRIM],
  },
  {
    title: 'Premium & Special',
    description: 'Exclusive experiences beyond the chair.',
    services: [HOUSE_CALL, DAY_OFF],
  },
];

// ─── All Services (flat list) ────────────────────────────

export const ALL_SERVICES = [
  REGULARIS, EQUES, LUX, REIGN, THE_MONARCH,
  THE_HEIR, DUX, EAR_NOSE_TRIM,
  HOUSE_CALL, DAY_OFF,
];
