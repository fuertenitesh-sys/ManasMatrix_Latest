import React from 'react';
import { Link } from 'react-router-dom';
import {
  UsersIcon,
  BrainIcon,
  GraduationCapIcon,
  CheckIcon,
  RocketIcon,
} from '../../components/Icons';
import '../../components/Programs/ProgramDetail.css';

const ChildDevelopmentPage = () => {
  const openBookingModal = () => {
    window.dispatchEvent(new CustomEvent('open-booking-modal', { detail: { service: 'child' } }));
  };

  const childrenBenefits = [
    'Understand your child’s natural learning style',
    'Discover strengths and interests',
    'Choose suitable activities and study methods',
    'Get parenting guidance that suits your child',
  ];
  const studentBenefits = [
    'Stream selection support after Class 10 — Science, Commerce or Arts',
    'Career direction based on strengths and interests',
    'Study methods that match learning style',
    'Clarity and confidence before important decisions',
  ];
  const receives = [
    'A Brain Mapping Report for the child or student',
    'A counseling session with parent(s) and the child or student',
    'Practical study and activity suggestions',
    'For students, stream and career direction with a shortlist of matching fields',
  ];

  return (
    <div className="program-page container">
      <div className="program-hero">
        <div className="program-hero__grid">
          <div className="animate-reveal fade-up">
            <div className="program-hero__badge">
              <GraduationCapIcon size={14} color="#F59E0B" />
              <span>Children & Students</span>
            </div>
            <h1 className="program-hero__title">
              Help Your Child Learn, Grow and <span className="gradient-text-gold">Choose with Clarity</span>
            </h1>
            <p className="program-hero__subtitle">
              Every child learns differently. A Brain Mapping Report helps parents and students understand natural strengths, learning style and interests, so study methods, activities and stream choices can be planned with more confidence.
            </p>
            <div className="program-hero__actions">
              <button className="btn-primary" onClick={openBookingModal}>
                <RocketIcon size={18} />
                <span>Book a Child / Student Session</span>
              </button>
              <a href="#child-student-options" className="btn-secondary" style={{ padding: '12px 24px', borderRadius: '30px', textDecoration: 'none', color: '#fff', border: '1px solid rgba(255,255,255,0.2)' }}>
                <span>Explore the Options</span>
              </a>
            </div>
          </div>
          <div className="program-hero__image-wrapper animate-reveal fade-left">
            <div className="program-hero__image-card">
              <img src="/prog_child_dev.jpg" alt="Brain Mapping guidance for children and students" className="program-hero__image" loading="eager" fetchPriority="high" decoding="sync" />
              <div className="program-hero__image-badge">
                <BrainIcon size={20} color="#F59E0B" />
                <span>Learning style • Strengths • Direction</span>
              </div>
            </div>
          </div>
        </div>
        <div className="program-stats-bar animate-reveal fade-up">
          {['Children', 'Students', 'Parents', 'Families'].map((label) => (
            <div key={label} className="program-stat-item">
              <div className="program-stat-num"><UsersIcon size={22} color="#F59E0B" /></div>
              <div className="program-stat-label">{label}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="program-section program-section--dark" id="child-student-options">
        <div className="container">
          <div className="program-section-header animate-reveal fade-up">
            <span className="program-section-tag">A starting point for growth</span>
            <h2 className="program-section-title">Support for Children and Students</h2>
          </div>
          <div className="program-cards-grid program-cards-grid--2col">
            <div className="program-card-box animate-reveal fade-up">
              <div className="program-card-box__icon"><BrainIcon size={24} color="#EC4899" /></div>
              <h3 className="program-card-box__title">For Children</h3>
              {childrenBenefits.map((item) => <p key={item} className="program-card-box__desc">• {item}</p>)}
            </div>
            <div className="program-card-box animate-reveal fade-up">
              <div className="program-card-box__icon"><GraduationCapIcon size={24} color="#60A5FA" /></div>
              <h3 className="program-card-box__title">For Students</h3>
              {studentBenefits.map((item) => <p key={item} className="program-card-box__desc">• {item}</p>)}
            </div>
          </div>
        </div>
      </div>

      <div className="program-section">
        <div className="container">
          <div className="program-section-header animate-reveal fade-up">
            <span className="program-section-tag">What You Receive</span>
            <h2 className="program-section-title">Guidance for the Next Step</h2>
          </div>
          <div className="program-cards-grid program-cards-grid--2col">
            {receives.map((item) => (
              <div key={item} className="program-card-box animate-reveal fade-up">
                <div className="program-card-box__icon"><CheckIcon size={24} color="#10B981" /></div>
                <p className="program-card-box__desc">{item}</p>
              </div>
            ))}
          </div>
          <div className="program-highlight-box animate-reveal zoom-in">
            <p className="program-highlight-text">
              The report gives direction; it does not predict marks or guarantee admission or career success. The final decision stays with the student and family.
            </p>
            <div className="program-highlight-author">For anyone under 18, a parent’s written consent is required and a parent joins the counseling session.</div>
          </div>
          <div className="program-hero__actions" style={{ justifyContent: 'center', marginTop: '32px' }}>
            <Link to="/services" className="btn-secondary">Explore Our Services</Link>
            <button className="btn-primary" onClick={openBookingModal}>Book a Child / Student Session</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChildDevelopmentPage;
