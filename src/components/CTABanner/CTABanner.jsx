import React from 'react';
import { Link } from 'react-router-dom';
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
        <div className="cta-banner__brain animate-reveal zoom-in">🧠</div>
        <div className="section-badge animate-reveal fade-up" style={{ margin: '0 auto 16px' }}>🚀 Begin Now</div>
        
        <h2 className="cta-banner__title animate-reveal fade-up delay-100">
          Your Mind Holds The<br />
          <span className="gradient-text-gold">Blueprint of Your Future</span>
        </h2>
        
        <p className="cta-banner__subtitle animate-reveal fade-up delay-200">
          Don't just wonder about your potential — <em>discover it</em>. Join 500+ families
          and professionals in Rajkot who have already unlocked their brain's true power.
        </p>

        <div className="cta-banner__actions animate-reveal fade-up delay-300">
          <Link to="/contact" className="btn-primary cta-banner__btn" id="cta-banner-primary">
            <span>🚀 Begin Your Elite Transformation Journey</span>
          </Link>
          <a href="tel:9106545374" className="btn-secondary cta-banner__btn" id="cta-banner-secondary">
            📞 Call: 9106545374
          </a>
        </div>

        <div className="cta-banner__programs animate-reveal zoom-in delay-400">
          {[
            { emoji: '🔍', name: 'DISC Assessment', price: '₹1,999' },
            { emoji: '🌱', name: 'Child Program', price: '₹9,999' },
            { emoji: '💼', name: 'Professional', price: '₹14,999' },
            { emoji: '👨‍👩‍👧', name: 'Elite Family', price: '₹37,499' },
          ].map((p) => (
            <Link to="/programs" key={p.name} className="cta-banner__program" style={{ textDecoration: 'none' }}>
              <span>{p.emoji}</span>
              <div>
                <div className="cta-banner__program-name">{p.name}</div>
                <div className="cta-banner__program-price">{p.price}</div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CTABanner;
