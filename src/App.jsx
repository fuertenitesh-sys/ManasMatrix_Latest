import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import ScrollToTop from './components/ScrollToTop';

import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import HowItWorksPage from './pages/HowItWorksPage';
import ProgramsPage from './pages/ProgramsPage';
import ServicesPage from './pages/ServicesPage';
import ContactPage from './pages/ContactPage';

import './App.css';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="app">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/how-it-works" element={<HowItWorksPage />} />
            <Route path="/programs" element={<ProgramsPage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </main>
        <Footer />

        {/* Floating Call CTA */}
        <a
          href="tel:9106545374"
          className="floating-cta"
          id="floating-cta"
          aria-label="Call Manas Matrix"
          title="Call us: 9106545374"
        >
          <span>📞</span>
        </a>
      </div>
    </Router>
  );
}

export default App;
