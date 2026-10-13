import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';

// Above-fold: eagerly loaded (visible on first paint)
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import TrustBar from './components/TrustBar/TrustBar';
import MobileBookBar from './components/MobileBookBar/MobileBookBar';
import BooksyModal from './components/BooksyModal/BooksyModal';

// Below-fold: lazy loaded to reduce initial bundle parse cost
const About = lazy(() => import('./components/About/About'));
const FeaturedServices = lazy(() => import('./components/FeaturedServices/FeaturedServices'));
const Experience = lazy(() => import('./components/Experience/Experience'));
const Gallery = lazy(() => import('./components/Gallery/Gallery'));
const WhyCathedra = lazy(() => import('./components/WhyCathedra/WhyCathedra'));
const Testimonials = lazy(() => import('./components/Testimonials/Testimonials'));
const Location = lazy(() => import('./components/Location/Location'));
const SocialSection = lazy(() => import('./components/SocialSection/SocialSection'));
const FinalCTA = lazy(() => import('./components/FinalCTA/FinalCTA'));
const Footer = lazy(() => import('./components/Footer/Footer'));
const ThankYou = lazy(() => import('./components/ThankYou/ThankYou'));

function HomePage() {
  return (
    <div className="app">
      <Navbar />
      <main>
        <Hero />
        <TrustBar />
        <Suspense fallback={null}>
          <About />
          <FeaturedServices />
          <Experience />
          <Gallery />
          <WhyCathedra />
          <Testimonials />
          <Location />
          <SocialSection />
          <FinalCTA />
        </Suspense>
      </main>
      <Suspense fallback={null}>
        <Footer />
      </Suspense>
      <MobileBookBar />
      <BooksyModal />
    </div>
  );
}

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/thank-you" element={<Suspense fallback={null}><ThankYou /></Suspense>} />
    </Routes>
  );
}
