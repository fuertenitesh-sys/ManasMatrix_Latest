import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
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
        {/* Left Column */}
        <div className="hero__left animate-reveal fade-left">
          {/* Badge */}
          <div className="section-badge hero__badge">
            🧠 Brain Mapping Report •{' '}
            <a
              href="https://maps.google.com/?q=MANAS+MATRIX+Spire+150+Feet+Ring+Rd+Rajkot"
              target="_blank"
              rel="noopener noreferrer"
              className="hero__badge-location"
            >
              📍 Rajkot, Gujarat ↗
            </a>
          </div>

          {/* Heading */}
          <h1 className="hero__title">
            <span className="hero__title-line">Know Yourself</span>
            <span className="hero__title-highlight gradient-text-gold">Better to</span>
            <span className="hero__title-line">Grow Better</span>
          </h1>

          {/* Subtitle */}
          <p className="hero__subtitle">
            Understand how your child learns. Beyond marks. A scientific cognitive assessment that gives parents a clear, structured view of the skills shaping how their child thinks, focuses, learns, and grows.
          </p>

          {/* Feature Pills */}
          <div className="hero__pills">
            <span className="hero__pill">🎓 Recommended for Ages 4 - 25</span>
            <span className="hero__pill">🧬 100% Scientific DMI Analysis</span>
            <span className="hero__pill">📊 Printed Intelligence Report</span>
          </div>

          {/* Stats Bar */}
          <div className="hero__stats">
            <div className="hero__stat">
              <span className="hero__stat-number">500+</span>
              <span className="hero__stat-label">Families Transformed</span>
            </div>
            <div className="hero__stat-divider"></div>
            <div className="hero__stat">
              <span className="hero__stat-number">4</span>
              <span className="hero__stat-label">Expert Programs</span>
            </div>
            <div className="hero__stat-divider"></div>
            <div className="hero__stat">
              <span className="hero__stat-number">98%</span>
              <span className="hero__stat-label">Satisfaction Rate</span>
            </div>
          </div>

          {/* CTAs */}
          <div className="hero__ctas">
            <Link to="/programs" className="btn-primary" id="hero-cta-primary">
              <span>🚀 Explore Programs</span>
            </Link>
            <a href="tel:9106545374" className="btn-secondary" id="hero-cta-secondary">
              📞 Call: 9106545374
            </a>
          </div>
        </div>

        {/* Right Column: Floating Interactive Assessment Card (Restored to original right-side floating position) */}
        <div className="hero__right animate-reveal fade-right">
          <div className="hero__floating-card glass-card">
            <div className="hero__card-header">
              <img src="/logo_brain_icon.png" alt="MANAS MATRIX Logo Icon" className="hero__card-logo-img" />
              <div>
                <div className="hero__card-title">MANAS MATRIX</div>
                <div className="hero__card-sub">Brain Intelligence Assessment</div>
              </div>
            </div>

            <div className="hero__card-body">
              <div className="hero__metric">
                <span className="hero__metric-label">Memory Retention</span>
                <div className="hero__bar-bg"><div className="hero__bar-fill" style={{ width: '92%' }}></div></div>
              </div>
              <div className="hero__metric">
                <span className="hero__metric-label">Attention & Focus</span>
                <div className="hero__bar-bg"><div className="hero__bar-fill" style={{ width: '88%', background: 'var(--gradient-orange-gold)' }}></div></div>
              </div>
              <div className="hero__metric">
                <span className="hero__metric-label">Logical Reasoning</span>
                <div className="hero__bar-bg"><div className="hero__bar-fill" style={{ width: '95%', background: 'linear-gradient(90deg, #3B82F6, #7C3AED)' }}></div></div>
              </div>
            </div>

            <div className="hero__card-footer">
              <span className="hero__card-footer-badge">⭐ 4 Programs Available</span>
              <span className="hero__card-price">Starting ₹1,999</span>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="hero__scroll">
        <div className="hero__scroll-dot"></div>
        <span>Scroll to explore</span>
      </div>
    </section>
  );
};

export default Hero;
