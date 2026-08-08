import React from 'react';
import { Link } from 'react-router-dom';
import { RocketIcon, PhoneIcon, BrainIcon } from '../Icons';
import './CTABanner.css';

const CTABanner = () => {
  return (
    <section className="cta-banner" id="cta">
      <div className="container">
        <div className="cta-banner__card glass-card animate-reveal zoom-in">
          <div className="cta-banner__orb cta-banner__orb--1"></div>
          <div className="cta-banner__orb cta-banner__orb--2"></div>

          <div className="cta-banner__content">
            <div className="section-badge">
              <BrainIcon size={14} color="#F59E0B" />
              <span>Begin Now</span>
            </div>

            <h2 className="cta-banner__title">
              Your Mind Holds The <span className="gradient-text-gold">Blueprint of Your Future</span>
            </h2>

            <p className="cta-banner__desc">
              Don't just wonder about your potential — discover it. Join 500+ families and professionals in Rajkot who have already unlocked their brain's true power.
            </p>

            <div className="cta-banner__actions">
              <Link to="/contact" className="btn-primary cta-banner__btn">
                <RocketIcon size={18} />
                <span>Begin Your Transformation Journey</span>
              </Link>
              <a href="tel:9106545374" className="btn-secondary cta-banner__btn">
                <PhoneIcon size={18} />
                <span>Call: 9106545374</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTABanner;
