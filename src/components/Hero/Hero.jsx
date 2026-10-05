import React, { useEffect, useRef } from 'react';
import { RocketIcon, BrainIcon, GraduationCapIcon, UsersIcon, BriefcaseIcon, StarIcon, MessageCircleIcon, FingerprintIcon } from '../Icons';
import './Hero.css';

const Hero = () => {
  const heroRef = useRef(null);

  useEffect(() => {
    const hero = heroRef.current;
    if (!hero) return;
    const handleMouseMove = (e) => {
      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;
      const xRatio = (clientX / innerWidth - 0.5) * 8;
      const yRatio = (clientY / innerHeight - 0.5) * 8;
      const bg = hero.querySelector('.hero__full-bg-img');
      if (bg) {
        bg.style.transform = `scale(1.04) translate(${xRatio}px, ${yRatio}px)`;
      }
    };
    hero.addEventListener('mousemove', handleMouseMove);
    return () => hero.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section className="hero" id="home" ref={heroRef}>
      {/* Full Section Vivid HD Background Image */}
      <div className="hero__full-bg">
        <img src="/hero_student_vivid.jpg" alt="Student learning background" className="hero__full-bg-img" />
        <div className="hero__full-bg-overlay"></div>
        <div className="hero__orb hero__orb--1"></div>
        <div className="hero__orb hero__orb--2"></div>
      </div>

      <div className="container hero__content">
        {/* Point 2: Hero text and buttons strictly left-aligned with a clean offset */}
        <div className="hero__left animate-reveal fade-left">
          <div className="section-badge">
            <BrainIcon size={14} color="#F59E0B" />
            <span>Understand Brain. Unlock Potential.</span>
          </div>

          <h1 className="hero__title">
            <span className="hero__title-line">Know Yourself</span>
            <span className="hero__title-highlight gradient-text-gold">Better to Grow</span>
            <span className="hero__title-line">Better</span>
          </h1>

          <p className="hero__subtitle">
            Brain Mapping Reports and personal counseling for children, students, adults, families, business owners and teams in Rajkot. Manas Matrix helps you understand your strengths, behavioral style, learning or working pattern and communication style through a Brain Mapping Report and a one-to-one counseling session. From a student choosing the right stream to a business owner building a stronger team, we turn insight into a clear plan with practical next steps.
          </p>

          <div className="hero__pills">
            <span className="hero__pill">
              <GraduationCapIcon size={14} color="#F59E0B" />
              <span>Children, Students & Families</span>
            </span>
            <span className="hero__pill">
              <BriefcaseIcon size={14} color="#60A5FA" />
              <span>Business Owners & Professionals</span>
            </span>
            <span className="hero__pill">
              <UsersIcon size={14} color="#FF6B35" />
              <span>Teams & Organizations</span>
            </span>
          </div>

          <div className="hero__stats">
            <div className="hero__stat">
              <span className="hero__stat-number">4</span>
              <span className="hero__stat-label">Service Areas</span>
            </div>
            <div className="hero__stat-divider"></div>
            <div className="hero__stat">
              <span className="hero__stat-number">6</span>
              <span className="hero__stat-label">Report Options</span>
            </div>
            <div className="hero__stat-divider"></div>
            <div className="hero__stat">
              <span className="hero__stat-number">1:1</span>
              <span className="hero__stat-label">Personal Counseling</span>
            </div>
          </div>

          <div className="hero__ctas">
            <button
              className="btn-primary"
              id="hero-cta-primary"
              onClick={() => window.dispatchEvent(new CustomEvent('open-booking-modal', { detail: { service: 'general' } }))}
            >
              <RocketIcon size={18} />
              <span>Book a Consultation</span>
            </button>
            <a href="https://wa.me/919106545374" className="btn-secondary" id="hero-cta-secondary" target="_blank" rel="noopener noreferrer">
              <MessageCircleIcon size={18} />
              <span>WhatsApp Us</span>
            </a>
          </div>
        </div>

        {/* Right Column: Floating Interactive Assessment Card */}
        <div className="hero__right animate-reveal fade-right">
          <div className="hero__floating-card glass-card">
            <div className="hero__card-header">
              <img src="/logo_brain_icon.png" alt="Manas Matrix logo" className="hero__card-logo-img" />
              <div>
                <div className="hero__card-title">MANAS MATRIX</div>
                <div className="hero__card-sub">Brain Mapping Report & Counseling</div>
              </div>
            </div>

            <div className="hero__card-body">
              <div className="hero__metric">
                <BrainIcon size={16} color="#F59E0B" />
                <span className="hero__metric-label">Strengths & development areas</span>
              </div>
              <div className="hero__metric">
                <FingerprintIcon size={16} color="#60A5FA" />
                <span className="hero__metric-label">Learning or working style</span>
              </div>
              <div className="hero__metric">
                <MessageCircleIcon size={16} color="#10B981" />
                <span className="hero__metric-label">Communication style</span>
              </div>
            </div>

            <div className="hero__card-footer">
              <span className="hero__card-footer-badge">
                <StarIcon size={14} color="#FCD34D" />
                <span>Four service areas</span>
              </span>
              <button
                className="hero__card-price"
                style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 0 }}
                onClick={(e) => {
                  e.preventDefault();
                  window.dispatchEvent(new CustomEvent('open-booking-modal', { detail: { service: 'general' } }));
                }}
              >
                Book a Consultation
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
