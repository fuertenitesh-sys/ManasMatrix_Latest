import React from 'react';
import { Link } from 'react-router-dom';
import { BrainIcon, RocketIcon, PhoneIcon, MessageCircleIcon, FingerprintIcon, BriefcaseIcon, BarChartIcon, BuildingIcon } from '../Icons';
import './CTABanner.css';

const CTABanner = () => {
  return (
    <section className="cta-banner" id="cta">
      <div className="cta-banner__bg">
        <div className="cta-banner__orb cta-banner__orb--1"></div>
        <div className="cta-banner__orb cta-banner__orb--2"></div>
        <div className="cta-banner__orb cta-banner__orb--3"></div>
        <div className="cta-banner__grid"></div>
      </div>

      <div className="container cta-banner__content">
        <div className="cta-banner__brain animate-reveal zoom-in"><BrainIcon size={40} color="#F59E0B" /></div>
        <div className="section-badge animate-reveal fade-up" style={{ margin: '0 auto 16px' }}>Start with the Right Conversation</div>
        
        <h2 className="cta-banner__title animate-reveal fade-up delay-100">
          Not Sure Which Program<br />
          <span className="gradient-text-gold">Is Right for You?</span>
        </h2>
        
        <p className="cta-banner__subtitle animate-reveal fade-up delay-200">
          Tell us your goal. We will suggest the right starting point — no pressure.
        </p>

        <div className="cta-banner__actions animate-reveal fade-up delay-300">
          <Link
            to="/contact"
            className="btn-primary cta-banner__btn"
            id="cta-banner-primary"
            onClick={(e) => {
              e.preventDefault();
              window.dispatchEvent(new CustomEvent('open-booking-modal', { detail: { service: 'general' } }));
            }}
          >
            <RocketIcon size={18} />
            <span>Book a Consultation</span>
          </Link>
          <a href="tel:9106545374" className="btn-secondary cta-banner__btn" id="cta-banner-secondary">
            <PhoneIcon size={18} />
            <span>Call 9106545374</span>
          </a>
          <a href="https://wa.me/919106545374" className="btn-secondary cta-banner__btn" target="_blank" rel="noopener noreferrer">
            <MessageCircleIcon size={18} />
            <span>WhatsApp Us</span>
          </a>
        </div>

        <div className="cta-banner__programs animate-reveal zoom-in delay-400">
          {[
            { id: 'dmit', icon: <FingerprintIcon size={20} color="#F59E0B" />, name: 'Brain Mapping Reports (BMR)' },
            { id: 'business', icon: <BriefcaseIcon size={20} color="#60A5FA" />, name: 'For Business Owners' },
            { id: 'manas-360', icon: <BarChartIcon size={20} color="#10B981" />, name: 'Manas 360' },
            { id: 'team', icon: <BuildingIcon size={20} color="#C084FC" />, name: 'HR Matrix' },
          ].map((p) => (
            <Link
              to="/contact"
              key={p.name}
              className="cta-banner__program"
              style={{ textDecoration: 'none' }}
              onClick={(e) => {
                e.preventDefault();
                window.dispatchEvent(new CustomEvent('open-booking-modal', { detail: { service: p.id } }));
              }}
            >
              <span>{p.icon}</span>
              <div>
                <div className="cta-banner__program-name">{p.name}</div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CTABanner;
