import React from 'react';
import Contact from '../components/Contact/Contact';
import { PhoneIcon } from '../components/Icons';

const ContactPage = () => {
  return (
    <div style={{ paddingTop: '120px' }}>
      <div className="page-header container">
        <div className="section-badge"><PhoneIcon size={14} color="#F59E0B" /> Contact Us</div>
        <h1 className="section-title">
          Let's Find the Right <span className="gradient-text-gold">Program for Your Goal</span>
        </h1>
        <div className="divider"></div>
        <p className="section-subtitle">
          Talk to us about yourself, your child, your family, your business or your team.
        </p>
      </div>

      <Contact hideHeader={true} showMap />
    </div>
  );
};

export default ContactPage;
