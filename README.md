# Cathedra NYC — Luxury Men's Grooming Web Application

> **Grooming, Refined.**  
> 131 Varick St, Suite 938 · New York, NY 10013  
> [(347) 672-9171](tel:3476729171) · [valjean@cathedra.nyc](mailto:valjean@cathedra.nyc)

---

## ✦ Overview

**Cathedra NYC** is a luxury web application built for an elite Manhattan grooming studio. Designed with an ultra-premium aesthetic featuring gold accent details, deep dark mode backgrounds (`#0A0A0A` / `#111111`), fluid typography, and dynamic micro-animations.

The application delivers a seamless experience across desktop, tablet, and mobile devices, allowing clients to explore services, view editorial portfolio photography, inspect client testimonials, and instantly book appointments via Booksy.

---

## ✦ Key Features

- **ScrollSpy Active Navigation**: High-precision active section tracking in the top navigation bar and mobile drawer.
- **Instant Booksy Modal Integration**: Seamless in-app booking modal powered by Booksy widget with zero page redirection.
- **Full Mobile Responsiveness**:
  - **Dynamic Viewport Modal**: Custom `100dvh` full-screen mobile modal layout supporting iOS safe area insets.
  - **Grid Trust Bar**: 2-column stacked layout on mobile for location, service highlights, and reward callouts.
  - **Fluid Testimonial Heights**: Fixed viewport height container for reviews to prevent layout shifts during review transitions.
  - **Mobile Bottom Booking Bar**: Sticky bottom appointment booking bar on mobile devices.
  - **Mobile Footer**: Clean 2-column mobile sub-grid with centered branding and full-width CTA buttons.
- **Filtered Photo Gallery**: Interactive editorial photography showcase with filter controls (*All*, *Cuts & Styling*, *Beard & Shave*, *Vibe*).
- **Interactive Location Section**: Google Maps integration, address details, hours of operation, and direct navigation links.
- **Social Feed Grid**: Interactive Instagram media grid showcasing authentic studio cuts and shave architecture.

---

## ✦ Tech Stack

- **Core**: React 19, JavaScript (ESNext)
- **Build Tool**: Vite 8
- **Styling**: Modern Vanilla CSS, CSS Variables / Design Tokens, Flexbox & CSS Grid
- **Animations**: Framer Motion
- **Typography**: *Cormorant Garamond* (Display Serif) & *Inter* (Sans-Serif)

---

## ✦ Getting Started

### Prerequisites
Make sure you have **Node.js** (v18+) and **npm** installed.

### Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/TalhaFarooq327/Cathedra.git
   cd Cathedra
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Start local development server**:
   ```bash
   npm run dev
   ```
   Open your browser at `http://localhost:5173`.

4. **Build for production**:
   ```bash
   npm run build
   ```
   The built assets will be generated in the `dist/` directory.

---

## ✦ Project Structure

```
Cathedra/
├── public/                  # Static public assets (favicon, images)
├── src/
│   ├── assets/
│   │   └── images/          # High-resolution studio & hero photography
│   ├── components/
│   │   ├── About/           # Barbering philosophy section
│   │   ├── BooksyModal/     # Instant booking modal overlay
│   │   ├── Experience/      # The Eques Experience section
│   │   ├── FeaturedServices/# Service offerings & pricing cards
│   │   ├── FinalCTA/        # Bottom call-to-action banner
│   │   ├── Footer/          # Multi-column footer & copyright
│   │   ├── Gallery/         # Categorized photo gallery
│   │   ├── Hero/            # Hero section with gold crest logo
│   │   ├── Location/        # Address, Google Maps embed & hours
│   │   ├── MobileBookBar/   # Sticky bottom mobile booking bar
│   │   ├── Navbar/          # ScrollSpy navigation bar & mobile drawer
│   │   ├── ServiceCard/     # Individual service item component
│   │   ├── SocialSection/   # Instagram feed grid
│   │   ├── Testimonials/    # Client reviews & star ratings
│   │   ├── TrustBar/        # Highlights bar (Address, Rewards, etc.)
│   │   ├── WhyCathedra/     # Unique selling points
│   │   └── ui/              # Reusable UI components (Button, SectionHeading)
│   ├── data/
│   │   └── services.js      # Service catalog data
│   ├── hooks/
│   │   └── useScrollPosition.js # Custom scroll tracker hook
│   ├── utils/
│   │   └── booksy.js        # Booksy modal event dispatcher
│   ├── config.js            # Site-wide business configuration
│   ├── App.jsx              # Main App component
│   ├── index.css            # Design tokens, typography & CSS reset
│   └── main.jsx             # React DOM root entry point
├── index.html               # Main HTML document template
├── package.json             # Scripts & dependencies
└── README.md                # Documentation
```

---

## ✦ Configuration

All key business values (Booksy URLs, Google Maps parameters, address, phone number, email, and opening hours) are centralized in `src/config.js`:

```javascript
// src/config.js
export const BOOKSY_BOOKING_URL = 'https://booksy.com/en-us/dl/show-business/231737';
export const ADDRESS = '131 Varick St, Suite 938';
export const CITY_STATE_ZIP = 'New York, NY 10013';
export const PHONE = '(347) 672-9171';
export const EMAIL = 'valjean@cathedra.nyc';
```

---

## ✦ License

© 2026 Cathedra NYC. All rights reserved.
