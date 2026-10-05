import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import ScrollToTop from './components/ScrollToTop';
import { WhatsAppIcon } from './components/Icons';

import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import HowItWorksPage from './pages/HowItWorksPage';
import ProgramsPage from './pages/ProgramsPage';
import ServicesPage from './pages/ServicesPage';
import ContactPage from './pages/ContactPage';
import DisclaimerPage from './pages/DisclaimerPage';
import PrivacyPolicyPage from './pages/PrivacyPolicyPage';
import TermsOfServicePage from './pages/TermsOfServicePage';
import FamilyCounselingPage from './pages/Programs/FamilyCounselingPage';
import EmployeeProgressReportPage from './pages/Programs/EmployeeProgressReportPage';
import AdminPage from './pages/Admin/AdminPage';

import BrainMappingPage from './pages/Programs/BrainMappingPage';
import BusinessDevelopmentPage from './pages/Programs/BusinessDevelopmentPage';
import TeamBuildingPage from './pages/Programs/TeamBuildingPage';
import ChildDevelopmentPage from './pages/Programs/ChildDevelopmentPage';
import Manas360Page from './pages/Programs/Manas360Page';

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
            <Route path="/programs/manas-360" element={<Manas360Page />} />
            <Route path="/programs/family-counseling" element={<FamilyCounselingPage />} />
            <Route path="/programs/employee-progress-report" element={<EmployeeProgressReportPage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/disclaimer" element={<DisclaimerPage />} />
            <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
            <Route path="/terms-of-service" element={<TermsOfServicePage />} />
            <Route path="/admin/bookings" element={<AdminPage />} />
          </Routes>
        </main>
        <a className="floating-cta" href="https://wa.me/919106545374" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp Manas Matrix" title="WhatsApp Us">
          <WhatsAppIcon color="#FFFFFF" />
        </a>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
