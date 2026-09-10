import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import ScrollToTop from './components/ScrollToTop';

import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import HowItWorksPage from './pages/HowItWorksPage';
import ProgramsPage from './pages/ProgramsPage';
import ServicesPage from './pages/ServicesPage';
import ContactPage from './pages/ContactPage';
import AdminPage from './pages/Admin/AdminPage';

import BrainMappingPage from './pages/Programs/BrainMappingPage';
import BusinessDevelopmentPage from './pages/Programs/BusinessDevelopmentPage';
import TeamBuildingPage from './pages/Programs/TeamBuildingPage';
import ChildDevelopmentPage from './pages/Programs/ChildDevelopmentPage';

import './App.css';

const ScrollRevealObserver = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
        } else {
          entry.target.classList.remove('is-visible');
        }
      });
    };

    const observerOptions = {
      root: null,
      rootMargin: '0px 0px -15px 0px',
      threshold: 0.05,
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    const elements = document.querySelectorAll('.animate-reveal');
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, [pathname]);

  return null;
};

function App() {
  useEffect(() => {
    const imagesToPreload = [
      '/card_child_dev.jpg',
      '/card_biz_dev.jpg',
      '/card_brain_dmit.jpg',
      '/card_team_build.jpg',
      '/prog_child_dev.jpg',
      '/prog_business_dev.jpg',
      '/prog_brain_mapping.jpg',
      '/prog_team_building.jpg'
    ];
    imagesToPreload.forEach((src) => {
      const img = new Image();
      img.src = src;
    });
  }, []);

  return (
    <Router>
      <ScrollToTop />
      <ScrollRevealObserver />
      <div className="app">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/how-it-works" element={<HowItWorksPage />} />
            <Route path="/programs" element={<ProgramsPage />} />
            <Route path="/programs/child-development" element={<ChildDevelopmentPage />} />
            <Route path="/programs/business-development" element={<BusinessDevelopmentPage />} />
            <Route path="/programs/brain-mapping" element={<BrainMappingPage />} />
            <Route path="/programs/team-building" element={<TeamBuildingPage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/admin/bookings" element={<AdminPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
