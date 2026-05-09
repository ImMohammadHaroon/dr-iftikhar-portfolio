import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import HeroSection from './components/sections/HeroSection';
import StatsSection from './components/sections/StatsSection';
import AboutSection from './components/sections/AboutSection';
import ResearchSection from './components/sections/ResearchSection';
import TimelineSection from './components/sections/TimelineSection';
import ConferencesSection from './components/sections/ConferencesSection';
import ContactSection from './components/sections/ContactSection';

function App() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <StatsSection />
        <AboutSection />
        <ResearchSection />
        <TimelineSection />
        <ConferencesSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}

export default App;