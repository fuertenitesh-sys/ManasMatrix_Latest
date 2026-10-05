import React from 'react';
import { LockIcon } from '../components/Icons';

const DisclaimerPage = () => (
  <div className="section" style={{ paddingTop: '140px', minHeight: '70vh' }}>
    <div className="container">
      <div className="page-header">
        <div className="section-badge"><LockIcon size={14} color="#F59E0B" /> Disclaimer</div>
        <h1 className="section-title">
          Important <span className="gradient-text-gold">Information</span>
        </h1>
        <div className="divider"></div>
      </div>
      <div className="glass-card" style={{ maxWidth: '900px', margin: '0 auto', padding: 'clamp(24px, 5vw, 48px)', lineHeight: 1.8, color: 'var(--color-text-secondary)' }}>
        <p>
          Manas Matrix provides Brain Mapping Reports, counseling and development programs as tools for self-awareness and personal, family and professional development.
        </p>
        <p style={{ marginTop: '20px' }}>
          Our assessments and reports are not medical, psychological or clinical tests. They do not diagnose, treat or prevent any medical, learning or mental-health condition, and they are not a substitute for advice from a qualified doctor, psychologist or therapist.
        </p>
        <p style={{ marginTop: '20px' }}>
          Reports and counseling offer guidance, not certainty. We do not guarantee any specific academic, career, relationship or business outcome. Decisions about education, careers, employment and business remain the responsibility of the client.
        </p>
        <p style={{ marginTop: '20px' }}>
          For any person under 18, services are provided only with the written consent of a parent or guardian.
        </p>
      </div>
    </div>
  </div>
);

export default DisclaimerPage;
