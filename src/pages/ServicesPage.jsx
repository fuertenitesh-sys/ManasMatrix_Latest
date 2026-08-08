import React from 'react';
import Services from '../components/Services/Services';
import CTABanner from '../components/CTABanner/CTABanner';

const ServicesPage = () => {
  return (
    <div style={{ paddingTop: '120px' }}>
      <div className="page-header container">
        <div className="section-badge">🧩 Our Services</div>
        <h1 className="section-title">
          Brain Mapping <span className="gradient-text-gold">Counselling Services</span>
        </h1>
        <div className="divider"></div>
        <p className="section-subtitle">
          Comprehensive guidance for parenting, education, relationships, families, corporate teams, and business growth.
        </p>
      </div>

      <Services />
      <CTABanner />
    </div>
  );
};

export default ServicesPage;
