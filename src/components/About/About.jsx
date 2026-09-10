import React from 'react';
import { Link } from 'react-router-dom';
import { BrainIcon, ArrowRightIcon } from '../Icons';
import './About.css';

const About = () => {
  return (
    <section className="section about" id="about">
      <div className="container">
        {/* Main About Grid: Left side showcase image card + Right side shortened summary */}
        <div className="about__grid">
          {/* Left Column: Brain Analysis Showcase Image Card */}
          <div className="about__visual animate-reveal fade-right">
            <div className="about__visual-card glass-card">
              <div className="about__visual-img-wrapper">
                <img src="/sandip_pala_dmi.jpg" alt="Sandip Pala - DMI Brain Analysis Technology" className="about__visual-showcase-img" />
                <div className="about__visual-overlay"></div>
                <div className="about__visual-badge">
                  <BrainIcon size={18} color="#F59E0B" />
                  <span>DMI Brain Analysis Technology</span>
                </div>
              </div>

              <div className="about__visual-inner">
                <div className="about__logo-box">
                  <img src="/logo_brain_icon.png" alt="MANAS MATRIX Logo Icon" className="about__logo-img" />
                </div>
                <h3 className="about__visual-title">MANAS MATRIX</h3>
                <p className="about__visual-sub">GrowUp Business Services • Rajkot</p>

                <div className="about__visual-stats">
                  <div className="about__visual-stat">
                    <span className="about__visual-stat-num">500+</span>
                    <span className="about__visual-stat-label">Happy Families</span>
                  </div>
                  <div className="about__visual-stat">
                    <span className="about__visual-stat-num">98%</span>
                    <span className="about__visual-stat-label">Satisfaction Rate</span>
                  </div>
                  <div className="about__visual-stat">
                    <span className="about__visual-stat-num">5+</span>
                    <span className="about__visual-stat-label">Years in Rajkot</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Shortened High-Impact Intro Content */}
          <div className="about__content animate-reveal fade-left">
            <div className="section-badge">
              <BrainIcon size={14} color="#F59E0B" />
              <span>Strategic Brain Leadership</span>
            </div>

            <h2 className="section-title" style={{ textAlign: 'left', marginBottom: '8px' }}>
              Unlocking Human Potential with <span className="gradient-text-gold">Sandip Pala</span>
            </h2>

            <p className="about__text">
              I am Sandip Pala, a Strategic Brain-Alignment Strategist in Rajkot. Having worked closely with top business coaches like Dr. Vivek Bindra and Harshvardhan Jain, I help individuals, parents, and leaders transition from trial-and-error decisions to scientific clarity.
            </p>
            <p className="about__text" style={{ marginTop: '10px' }}>
              By merging traditional growth strategies with Brain-Based Cognitive Analysis (DMIT), ManasMatrix identifies your biological "Zone of Genius" to provide a lifetime roadmap for personal and professional excellence.
            </p>

            <blockquote className="about__quote">
              "I believe that once you truly know yourself, you can finally operate with the confidence and excellence you were born for."
            </blockquote>

            {/* Specialization Tags */}
            <div className="about__services-list">
              <span className="about__service-tag">Parenting Counselling</span>
              <span className="about__service-tag">Education Counselling</span>
              <span className="about__service-tag">Relationship Counselling</span>
              <span className="about__service-tag">Corporate & Business Growth</span>
            </div>

            {/* CTA Button to Dedicated Full About Page */}
            <div style={{ marginTop: '20px' }}>
              <Link to="/about" className="btn-secondary" style={{ gap: '10px', display: 'inline-flex', alignItems: 'center' }}>
                <span>Learn More About Us</span>
                <ArrowRightIcon size={16} color="#F59E0B" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
