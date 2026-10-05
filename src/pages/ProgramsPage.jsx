import React from 'react';
import ProgramsGrid from '../components/Programs/ProgramsGrid';
import CTABanner from '../components/CTABanner/CTABanner';
import { BrainIcon } from '../components/Icons';

const ProgramsPage = () => {
  return (
    <div style={{ paddingTop: '120px' }}>
      <div className="page-header container">
        <div className="section-badge"><BrainIcon size={14} color="#F59E0B" /> Our Services</div>
        <h1 className="section-title">
          One Place to <span className="gradient-text-gold">Understand People Better</span>
        </h1>
        <div className="divider"></div>
        <p className="section-subtitle">
          Choose the path that matches your goal: Brain Mapping Reports, business owner programs, Manas 360 or HR Matrix.
        </p>
      </div>

      <ProgramsGrid />
      <CTABanner />
    </div>
  );
};

export default ProgramsPage;
