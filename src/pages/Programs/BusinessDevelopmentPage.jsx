import React from 'react';
import { Link } from 'react-router-dom';
import {
  BriefcaseIcon,
  BrainIcon,
  BarChartIcon,
  CheckIcon,
  RocketIcon,
  AwardIcon,
} from '../../components/Icons';
import '../../components/Programs/ProgramDetail.css';

const BusinessDevelopmentPage = () => {
  const openBookingModal = () => {
    window.dispatchEvent(new CustomEvent('open-booking-modal', { detail: { service: 'business' } }));
  };

  const counselingFocus = [
    'Leadership style and decision-making habits',
    'Communication with your team, partners and family members in the business',
    'Personal strengths to use more',
    'Time, attention, growth mindset and accountability',
  ];
  const developmentAreas = [
    'Your natural leadership and decision-making style',
    'Delegation and building ownership in your team',
    'Communication with partners, team and family members',
    'Time and energy management, with a personal action plan',
  ];

  return (
    <div className="program-page container">
      <div className="program-hero">
        <div className="program-hero__grid">
          <div className="animate-reveal fade-up">
            <div className="program-hero__badge">
              <BriefcaseIcon size={14} color="#F59E0B" />
              <span>For Business Owners</span>
            </div>
            <h1 className="program-hero__title">
              Develop the Person <span className="gradient-text-gold">Behind the Business</span>
            </h1>
            <p className="program-hero__subtitle">
              Personalized Business Counseling helps business owners understand their working style, leadership approach, decision habits and strengths, and apply them to real business challenges.
            </p>
            <div className="program-hero__actions">
              <button className="btn-primary" onClick={openBookingModal}>
                <RocketIcon size={18} />
                <span>Book a Business Consultation</span>
              </button>
              <a href="#business-programs" className="btn-secondary" style={{ padding: '12px 24px', borderRadius: '30px', textDecoration: 'none', color: '#fff', border: '1px solid rgba(255,255,255,0.2)' }}>
                <span>Explore Business Owner Programs</span>
              </a>
            </div>
          </div>
          <div className="program-hero__image-wrapper animate-reveal fade-left">
            <div className="program-hero__image-card">
              <img src="/prog_business_dev.webp" alt="Personalized business owner counseling" className="program-hero__image" loading="eager" fetchPriority="high" decoding="sync" />
              <div className="program-hero__image-badge">
                <BrainIcon size={20} color="#F59E0B" />
                <span>Leadership • Decisions • Communication</span>
              </div>
            </div>
          </div>
        </div>
        <div className="program-stats-bar animate-reveal fade-up">
          {['Business owners', 'Founders', 'Family businesses', 'Leaders'].map((label) => (
            <div key={label} className="program-stat-item">
              <div className="program-stat-num"><BriefcaseIcon size={22} color="#F59E0B" /></div>
              <div className="program-stat-label">{label}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="program-section program-section--dark" id="business-programs">
        <div className="container">
          <div className="program-section-header animate-reveal fade-up">
            <span className="program-section-tag">One-to-one guidance</span>
            <h2 className="program-section-title">Personalized Business Counseling</h2>
            <p className="program-section-subtitle">
              Counseling starts with your Brain Mapping Report and focuses on you as the business owner. It does not replace financial, legal or operational consulting.
            </p>
          </div>
          <div className="program-cards-grid program-cards-grid--2col">
            {counselingFocus.map((item) => (
              <div key={item} className="program-card-box animate-reveal fade-up">
                <div className="program-card-box__icon"><BarChartIcon size={24} color="#60A5FA" /></div>
                <p className="program-card-box__desc">{item}</p>
              </div>
            ))}
          </div>
          <div className="program-highlight-box animate-reveal zoom-in">
            <p className="program-highlight-text">
              Counseling offers guidance on current challenges. It does not guarantee business growth; results depend on many factors, including market, team and effort.
            </p>
            <div className="program-highlight-author">Starts with your Brain Mapping Report</div>
          </div>
        </div>
      </div>

      <div className="program-section">
        <div className="container">
          <div className="program-section-header animate-reveal fade-up">
            <span className="program-section-tag">A structured growth program</span>
            <h2 className="program-section-title">Brain-Based Development Program</h2>
            <p className="program-section-subtitle">
              A structured program for business owners that starts with a Brain Mapping Report and turns it into a personal development plan with sessions, practical assignments and progress reviews.
            </p>
          </div>
          <div className="program-cards-grid">
            {developmentAreas.map((item) => (
              <div key={item} className="program-card-box animate-reveal fade-up">
                <div className="program-card-box__icon"><CheckIcon size={24} color="#10B981" /></div>
                <p className="program-card-box__desc">{item}</p>
              </div>
            ))}
          </div>
          <div className="program-highlight-box animate-reveal zoom-in">
            <p className="program-highlight-text">
              The program supports your personal development as a business owner. It does not guarantee business results.
            </p>
            <div className="program-highlight-author">Discuss the program and its structure with our team.</div>
          </div>
          <div className="program-hero__actions" style={{ justifyContent: 'center', marginTop: '32px' }}>
            <Link to="/services" className="btn-secondary">Explore Our Services</Link>
            <button className="btn-primary" onClick={openBookingModal}>
              <AwardIcon size={18} />
              <span>Discuss the Program</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BusinessDevelopmentPage;
