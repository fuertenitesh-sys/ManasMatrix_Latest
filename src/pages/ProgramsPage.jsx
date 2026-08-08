import React from 'react';
import Programs from '../components/Programs/Programs';
import CTABanner from '../components/CTABanner/CTABanner';

const ProgramsPage = () => {
  return (
    <div style={{ paddingTop: '120px' }}>
      <div className="page-header container">
        <div className="section-badge">💎 Our Programs</div>
        <h1 className="section-title">
          Explore Our <span className="gradient-text-gold">4 Elite Programs</span>
        </h1>
        <div className="divider"></div>
        <p className="section-subtitle">
          Transparent pricing and tailored programs for individuals, children, professionals, and families.
        </p>
      </div>

      <Programs />
      <CTABanner />
    </div>
  );
};

export default ProgramsPage;
