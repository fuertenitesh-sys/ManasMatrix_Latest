import React from 'react';
import Services from '../components/Services/Services';
import CTABanner from '../components/CTABanner/CTABanner';
import { BrainIcon } from '../components/Icons';
import { Link } from 'react-router-dom';

const ServicesPage = () => {
  return (
    <div style={{ paddingTop: '120px' }}>
      <div className="page-header container">
        <div className="section-badge"><BrainIcon size={14} color="#F59E0B" /> Our Services</div>
        <h1 className="section-title">
          Services Designed to Help You <span className="gradient-text-gold">Understand and Develop People</span>
        </h1>
        <div className="divider"></div>
        <p className="section-subtitle">
          For children, students, adults, families, business owners and organizations.
        </p>
      </div>

      <Services hideHeader={true} showTargetAudience={false} />

      <section className="section" style={{ paddingTop: 20 }}>
        <div className="container">
          <div className="section-header animate-reveal fade-up">
            <div className="section-badge"><BrainIcon size={14} color="#F59E0B" /> Choose Your Next Step</div>
            <h2 className="section-title">Which Program Is <span className="gradient-text-gold">Right for You?</span></h2>
            <div className="divider"></div>
          </div>
          <div className="service-compare-grid">
            <div className="glass-card service-compare-card"><h3>Personalized Business Counseling</h3><p><strong>What it is:</strong> One-to-one counseling sessions.</p><p><strong>Main focus:</strong> A challenge you are facing now.</p><p><strong>Best for:</strong> Quick clarity and direction.</p><p><strong>Next step:</strong> <Link to="/programs/business-development">Book a Business Consultation</Link></p></div>
            <div className="glass-card service-compare-card"><h3>Brain-Based Development Program</h3><p><strong>What it is:</strong> Structured growth program for your business role.</p><p><strong>Main focus:</strong> Leadership, delegation and long-term growth.</p><p><strong>Best for:</strong> Business owners building the next stage.</p><p><strong>Next step:</strong> <Link to="/programs/business-development">Explore Business Owner Programs</Link></p></div>
            <div className="glass-card service-compare-card"><h3>Manas 360</h3><p><strong>What it is:</strong> Brain performance training across five areas.</p><p><strong>Main focus:</strong> Mind, emotion, learning, behavior and performance.</p><p><strong>Best for:</strong> Professionals and owners who want sharper focus and consistency.</p><p><strong>Next step:</strong> <Link to="/programs/manas-360">Explore Manas 360</Link></p></div>
          </div>
        </div>
      </section>
      <CTABanner />
    </div>
  );
};

export default ServicesPage;
