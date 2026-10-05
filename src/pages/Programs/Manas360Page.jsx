import React from 'react';
import {
  BrainIcon,
  EyeIcon,
  ActivityIcon,
  CheckIcon,
  RocketIcon,
  AwardIcon,
} from '../../components/Icons';
import '../../components/Programs/ProgramDetail.css';

const framework = [
  ['M — Mind Awareness', 'Understand your natural strengths, thinking pattern, triggers and blind spots.'],
  ['A — Attention', 'Build focus and concentration, reduce distraction and make working hours count.'],
  ['N — Neuro-Skills', 'Practice memory, observation, processing, problem solving and learning methods.'],
  ['A — Adaptability', 'Handle change, pressure and emotions with more flexibility.'],
  ['S — Sustained Performance', 'Turn new skills into daily habits and routines.'],
];

const developmentAreas = [
  ['Mind', 'Awareness, focus and clarity of thinking'],
  ['Emotion', 'Emotional balance and response under pressure'],
  ['Learning', 'How you take in, store and use information'],
  ['Behavior', 'Habits, communication and daily actions'],
  ['Performance', 'Consistent output in work, business or studies'],
];

const Manas360Page = () => {
  const openBookingModal = () => {
    window.dispatchEvent(new CustomEvent('open-booking-modal', { detail: { service: 'manas-360' } }));
  };

  return (
    <div className="program-page container">
      <div className="program-hero">
        <div className="program-hero__grid">
          <div className="animate-reveal fade-up">
            <div className="program-hero__badge">
              <BrainIcon size={14} color="#F59E0B" />
              <span>Unlock Your Brain. Unlock Your Strength.</span>
            </div>
            <h1 className="program-hero__title">
              Manas 360 — The <span className="gradient-text-gold">Brain Performance Program</span>
            </h1>
            <p className="program-hero__subtitle">
              One program. Five areas of development: mind, emotion, learning, behavior and performance. Manas 360 builds skills on top of your Brain Mapping Report through the MANAS framework.
            </p>
            <div className="program-hero__actions">
              <button className="btn-primary" onClick={openBookingModal}>
                <RocketIcon size={18} />
                <span>Join Manas 360</span>
              </button>
              <a href="#manas-framework" className="btn-secondary" style={{ padding: '12px 24px', borderRadius: '30px', textDecoration: 'none', color: '#fff', border: '1px solid rgba(255,255,255,0.2)' }}>
                <span>Explore the MANAS Framework</span>
              </a>
            </div>
          </div>
          <div className="program-hero__image-wrapper animate-reveal fade-left">
            <div className="program-hero__image-card">
              <img src="/prog_brain_mapping.jpg" alt="Manas 360 brain performance program" className="program-hero__image" loading="eager" fetchPriority="high" decoding="sync" />
              <div className="program-hero__image-badge">
                <ActivityIcon size={20} color="#F59E0B" />
                <span>Mind • Emotion • Learning • Behavior • Performance</span>
              </div>
            </div>
          </div>
        </div>
        <div className="program-stats-bar animate-reveal fade-up">
          {['10 guided sessions', 'One month', 'Practice activities', 'Weekly progress review'].map((label) => (
            <div key={label} className="program-stat-item">
              <div className="program-stat-num"><CheckIcon size={22} color="#F59E0B" /></div>
              <div className="program-stat-label">{label}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="program-section program-section--dark" id="manas-framework">
        <div className="container">
          <div className="program-section-header animate-reveal fade-up">
            <span className="program-section-tag">The MANAS Framework</span>
            <h2 className="program-section-title">Five Steps That Build on Each Other</h2>
          </div>
          <div className="program-cards-grid">
            {framework.map(([title, desc]) => (
              <div key={title} className="program-card-box animate-reveal fade-up">
                <div className="program-card-box__icon"><BrainIcon size={24} color="#F59E0B" /></div>
                <h3 className="program-card-box__title">{title}</h3>
                <p className="program-card-box__desc">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="program-section">
        <div className="container">
          <div className="program-section-header animate-reveal fade-up">
            <span className="program-section-tag">What 360 Means</span>
            <h2 className="program-section-title">Development in Five Areas, Not Just One</h2>
          </div>
          <div className="program-cards-grid">
            {developmentAreas.map(([title, desc]) => (
              <div key={title} className="program-card-box animate-reveal fade-up">
                <div className="program-card-box__icon"><EyeIcon size={24} color="#60A5FA" /></div>
                <h3 className="program-card-box__title">{title}</h3>
                <p className="program-card-box__desc">{desc}</p>
              </div>
            ))}
          </div>
          <div className="program-highlight-box animate-reveal zoom-in">
            <p className="program-highlight-text">
              Manas 360 is a personal development and training program, not a medical, psychological or therapy service. It does not treat ADHD, learning disorders, anxiety, depression or any other condition.
            </p>
            <div className="program-highlight-author">Results depend on your participation and regular practice.</div>
          </div>
          <div className="program-hero__actions" style={{ justifyContent: 'center', marginTop: '32px' }}>
            <button className="btn-primary" onClick={openBookingModal}>
              <AwardIcon size={18} />
              <span>Book a Consultation</span>
            </button>
            <a href="tel:9106545374" className="btn-secondary">Call 9106545374</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Manas360Page;
