import React from 'react';
import { Link } from 'react-router-dom';
import { BrainIcon, ArrowRightIcon } from '../Icons';
import './About.css';

const About = () => {
  return (
    <section className="section about" id="about">
      <div className="container">
        <div className="about__grid">
          <div className="about__visual animate-reveal fade-right">
            <div className="about__visual-card glass-card">
              <div className="about__visual-img-wrapper">
                <img src="/sandip_pala_dmi.jpg" alt="Sandip Pala, founder of Manas Matrix" className="about__visual-showcase-img" />
              </div>
            </div>
          </div>

          <div className="about__content animate-reveal fade-left">
            <div className="section-badge">
              <BrainIcon size={14} color="#F59E0B" />
              <span>Our Approach</span>
            </div>

            <h2 className="section-title" style={{ textAlign: 'left', marginBottom: '8px' }}>
              A Report Is the Start. <span className="gradient-text-gold">Counseling Makes It Useful.</span>
            </h2>

            <p className="about__text">
              A report alone is only information. At Manas Matrix, your Brain Mapping Report is explained in a one-to-one counseling session, so you can understand your results, connect them with real life and leave with clear priorities.
            </p>
            <p className="about__text" style={{ marginTop: '10px' }}>
              Guided personally by Sandip Pala, Brain-Based Performance Coach, we help children, students, adults, families, business owners and teams turn insight into practical next steps.
            </p>

            <blockquote className="about__quote">
              "Clarity before change. Understand yourself first, then choose a practical next step."
            </blockquote>

            <div className="about__services-list">
              <span className="about__service-tag">Brain Mapping Reports</span>
              <span className="about__service-tag">Family Counseling</span>
              <span className="about__service-tag">Business Owner Programs</span>
              <span className="about__service-tag">HR Matrix</span>
            </div>

            <div style={{ marginTop: '20px' }}>
              <Link to="/about" className="btn-secondary" style={{ gap: '10px', display: 'inline-flex', alignItems: 'center' }}>
                <span>Read Our Story</span>
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
