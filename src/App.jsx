import React, { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import EmergencyTopBar from './components/EmergencyTopBar';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// Pages
import Home from './pages/Home';
import Pricing from './pages/Pricing';
import Guarantees from './pages/Guarantees';
import Services from './pages/Services';
import BookNow from './pages/BookNow';
import ServiceAreas from './pages/ServiceAreas';
import Emergency from './pages/Emergency';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, [pathname]);

  return null;
}

export default function App() {
  return (
    <div className="flex flex-col min-h-screen bg-[#0B0F17] text-slate-100 selection:bg-orange-500 selection:text-white">
      {/* Scroll Reset on Route Change */}
      <ScrollToTop />

      {/* 1. Header & Navigation Structure from Blueprint */}
      {/* Top Bar (Emergency Alert): 🚨 Stuck on the side of the road? Tap to Call: (919) 888-0919 */}
      <EmergencyTopBar />

      {/* Navigation Menu Links: • Home • Our Pricing • Our Guarantees • Book Diagnostics Now */}
      <Navbar />

      {/* Main Content Router */}
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/guarantees" element={<Guarantees />} />
          <Route path="/services" element={<Services />} />
          <Route path="/book" element={<BookNow />} />
          <Route path="/service-areas" element={<ServiceAreas />} />
          <Route path="/emergency" element={<Emergency />} />
          {/* Catch-all fallback */}
          <Route path="*" element={<Home />} />
        </Routes>
      </main>

      {/* 5. Footer & Local SEO Footprint from Blueprint */}
      <Footer />
    </div>
  );
}
