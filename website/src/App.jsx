import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { Toaster } from 'sonner';
import { AnimatePresence } from 'framer-motion';

// Context
import { SearchProvider } from './context/SearchContext';

// Layout Components
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import { CookieConsent } from './components/Modals';
import SearchModal from './components/SearchModal';

// Pages
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import ServiceDetail from './pages/ServiceDetail';
import Projects from './pages/Projects';
import Gallery from './pages/Gallery';
import Careers from './pages/Careers';
import News from './pages/News';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';

function App() {
  return (
    <HelmetProvider>
      <SearchProvider>
        <Router>
          <ScrollToTop />
          
          {/* Toast notifications */}
          <Toaster 
            position="top-right"
            toastOptions={{
              style: {
                background: '#1a1a1a',
                color: '#fff',
                border: '1px solid rgba(255, 255, 255, 0.1)',
              },
              className: 'font-body',
            }}
            richColors
          />
          
          {/* Main layout */}
          <div className="min-h-screen bg-arch-black text-white font-body antialiased">
            <Navbar />
            
            <main>
              <AnimatePresence mode="wait">
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/about" element={<About />} />
                  <Route path="/services" element={<Services />} />
                  <Route path="/services/:serviceId" element={<ServiceDetail />} />
                  <Route path="/projects" element={<Projects />} />
                  <Route path="/gallery" element={<Gallery />} />
                  <Route path="/careers" element={<Careers />} />
                  <Route path="/news" element={<News />} />
                  <Route path="/contact" element={<Contact />} />
                  <Route path="*" element={<NotFound />} />
                </Routes>
              </AnimatePresence>
            </main>
            
            <Footer />
          </div>
          
          {/* Global modals */}
          <SearchModal />
          <CookieConsent />
          
        </Router>
      </SearchProvider>
    </HelmetProvider>
  );
}

export default App;
