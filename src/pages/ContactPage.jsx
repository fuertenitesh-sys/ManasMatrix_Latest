import React from 'react';
import Contact from '../components/Contact/Contact';

const ContactPage = () => {
  return (
    <div style={{ paddingTop: '120px' }}>
      <div className="page-header container">
        <div className="section-badge">📞 Contact Us</div>
        <h1 className="section-title">
          Get in Touch With <span className="gradient-text-gold">MANAS MATRIX</span>
        </h1>
        <div className="divider"></div>
        <p className="section-subtitle">
          Visit us at Rajkot, Gujarat or book your free consultation online today.
        </p>
      </div>

      <Contact />
    </div>
  );
};

export default ContactPage;
