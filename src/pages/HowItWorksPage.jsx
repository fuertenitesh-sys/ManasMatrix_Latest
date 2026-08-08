import React from 'react';
import HowItWorks from '../components/HowItWorks/HowItWorks';
import CTABanner from '../components/CTABanner/CTABanner';

const HowItWorksPage = () => {
  return (
    <div style={{ paddingTop: '120px' }}>
      <div className="page-header container">
        <div className="section-badge">⚡ Step-By-Step Journey</div>
        <h1 className="section-title">
          How Brain Mapping <span className="gradient-text-gold">Works</span>
        </h1>
        <div className="divider"></div>
        <p className="section-subtitle">
          From fingerprint scanning to personalized coaching — here is how we unlock your full potential.
        </p>
      </div>

      <HowItWorks />
      <CTABanner />
    </div>
  );
};

export default HowItWorksPage;
