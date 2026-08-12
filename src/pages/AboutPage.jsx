import React from 'react';
import About from '../components/About/About';
import CTABanner from '../components/CTABanner/CTABanner';

const AboutPage = () => {
  return (
    <div style={{ paddingTop: '120px' }}>
      <div className="page-header container">
        <div className="section-badge">🏢 Who We Are</div>
        <h1 className="section-title">
          About <span className="gradient-text-gold">MANAS MATRIX</span>
        </h1>
        <div className="divider"></div>
        <p className="section-subtitle">
          Discover our vision, technology, and commitment to transforming families & professionals in Rajkot.
        </p>
      </div>

      <About />
      <CTABanner />
    </div>
  );
};

export default AboutPage;
