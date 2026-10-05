import React from 'react';
import HowItWorks from '../components/HowItWorks/HowItWorks';
import CTABanner from '../components/CTABanner/CTABanner';
import { FingerprintIcon } from '../components/Icons';

const HowItWorksPage = () => {
  return (
    <div style={{ paddingTop: '120px' }}>
      <div className="page-header container">
        <div className="section-badge"><FingerprintIcon size={14} color="#F59E0B" /> How It Works</div>
        <h1 className="section-title">
          How Brain Mapping <span className="gradient-text-gold">Works at Manas Matrix</span>
        </h1>
        <div className="divider"></div>
        <p className="section-subtitle">
          A simple, painless process — from assessment to a clear action plan.
        </p>
      </div>

      <HowItWorks hideHeader={true} />
      <CTABanner />
    </div>
  );
};

export default HowItWorksPage;
