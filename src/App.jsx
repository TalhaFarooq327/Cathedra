import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import TrustBar from './components/TrustBar/TrustBar';
import About from './components/About/About';
import FeaturedServices from './components/FeaturedServices/FeaturedServices';
import Experience from './components/Experience/Experience';
import Gallery from './components/Gallery/Gallery';
import WhyCathedra from './components/WhyCathedra/WhyCathedra';
import Testimonials from './components/Testimonials/Testimonials';
import Location from './components/Location/Location';
import SocialSection from './components/SocialSection/SocialSection';
import FinalCTA from './components/FinalCTA/FinalCTA';
import Footer from './components/Footer/Footer';
import MobileBookBar from './components/MobileBookBar/MobileBookBar';

export default function App() {
  return (
    <div className="app">
      <Navbar />
      <main>
        <Hero />
        <TrustBar />
        <About />
        <FeaturedServices />
        <Experience />
        <Gallery />
        <WhyCathedra />
        <Testimonials />
        <Location />
        <SocialSection />
        <FinalCTA />
      </main>
      <Footer />
      <MobileBookBar />
    </div>
  );
}
