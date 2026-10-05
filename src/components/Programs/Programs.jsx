import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  StarIcon, 
  BriefcaseIcon, 
  BuildingIcon, 
  FingerprintIcon, 
  BrainIcon, 
  ChevronRightIcon, 
  ArrowRightIcon 
} from '../Icons';
import './Programs.css';

const programsData = [
  {
    id: 'dmit',
    title: 'Brain Mapping Reports (BMR)',
    tagline: 'CLEAR INSIGHT, WITH PERSONAL COUNSELING',
    desc: 'Understand strengths, behavioral style, learning or working pattern, communication style and development areas. Options are available for children, students, adults, professionals and families.',
    image: '/card_brain_dmit.jpg',
    icon: <FingerprintIcon size={24} color="#EC4899" />,
    badge: 'Individuals & Families',
    detailPath: '/programs/brain-mapping'
  },
  {
    id: 'business',
    title: 'For Business Owners',
    tagline: 'DEVELOP THE PERSON BEHIND THE BUSINESS',
    desc: 'Personalized Business Counseling and the Brain-Based Development Program help business owners understand their working style, leadership approach and strengths, then apply that insight to practical growth.',
    image: '/card_biz_dev.jpg',
    icon: <BriefcaseIcon size={24} color="#60A5FA" />,
    badge: 'Founders & Leaders',
    detailPath: '/programs/business-development'
  },
  {
    id: 'manas-360',
    title: 'Manas 360 — Brain Performance Program',
    tagline: 'UNLOCK YOUR BRAIN. UNLOCK YOUR STRENGTH.',
    desc: 'A guided program for professionals and business owners across mind, emotion, learning, behavior and performance, built on the MANAS framework.',
    image: '/card_brain_dmit.jpg',
    icon: <BrainIcon size={24} color="#F59E0B" />,
    badge: 'Five Areas of Development',
    detailPath: '/programs/manas-360'
  },
  {
    id: 'team',
    title: 'HR Matrix — For Organizations & HR',
    tagline: 'UNDERSTAND YOUR PEOPLE. BUILD STRONGER TEAMS.',
    desc: 'Map your team in one organized process. Each participating employee receives an individual report, while HR and management receive a summary dashboard of team strengths, working styles and development areas.',
    image: '/card_team_build.jpg',
    icon: <BuildingIcon size={24} color="#10B981" />,
    badge: 'Teams & HR',
    detailPath: '/programs/team-building'
  }
];

const Programs = ({ hideHeader = false }) => {
  const [activeTabIndex, setActiveTabIndex] = useState(0);
  const currentTab = programsData[activeTabIndex];

  return (
    <section className="section programs" id="programs">
      <div className="container">
        {!hideHeader && (
          <div className="section-header animate-reveal fade-up">
            <div className="section-badge">
              <StarIcon size={14} color="#F59E0B" />
              <span>Our Services</span>
            </div>
            <h2 className="section-title">
              One Place to <span className="gradient-text-gold">Understand People Better</span>
            </h2>
            <p className="section-subtitle">
              Choose the path that matches your goal: Brain Mapping Reports, business owner programs, Manas 360 or HR Matrix.
            </p>
          </div>
        )}

        {/* Tabbed Side-by-Side Showcase Grid */}
        <div className="programs-tabbed__grid">
          {/* Left Column: Vertical Menu List */}
          <div className="programs-tabbed__list animate-reveal fade-right">
            {programsData.map((prog, index) => {
              const isActive = activeTabIndex === index;
              return (
                <button
                  key={prog.id}
                  className={`programs-tabbed__item ${isActive ? 'programs-tabbed__item--active' : ''}`}
                  onClick={() => setActiveTabIndex(index)}
                  type="button"
                >
                  <span className="programs-tabbed__item-title">{prog.title}</span>
                  {isActive && (
                    <span className="programs-tabbed__item-arrow">
                      <ChevronRightIcon size={18} color="#F59E0B" />
                    </span>
                  )}
                </button>
              );
            })}
          </div>

          {/* Right Column: Active Program Card Showcase */}
          <div className="programs-tabbed__card glass-card animate-reveal fade-left">
            {/* Load only the selected tab image instead of downloading every tab image. */}
            <div className="programs-tabbed__img-wrapper">
              {programsData.map((prog, idx) => (
                <img
                  key={prog.id}
                  src={activeTabIndex === idx ? prog.image : undefined}
                  alt={prog.title}
                  loading="lazy"
                  decoding="async"
                  className="programs-tabbed__img"
                  style={{
                    position: 'absolute',
                    inset: 0,
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    objectPosition: 'center 20%',
                    opacity: activeTabIndex === idx ? 1 : 0,
                    transition: 'opacity 0.25s ease-in-out',
                    zIndex: activeTabIndex === idx ? 1 : 0,
                    pointerEvents: 'none'
                  }}
                />
              ))}
              <div className="programs-tabbed__img-overlay" style={{ zIndex: 2 }}></div>
              <div className="programs-tabbed__icon-badge" style={{ zIndex: 3 }}>
                {currentTab.icon}
              </div>
            </div>

            {/* Program Details Content */}
            <div className="programs-tabbed__content">
              <h3 className="programs-tabbed__card-title">{currentTab.title}</h3>
              <div className="programs-tabbed__card-tagline">{currentTab.tagline}</div>
              <p className="programs-tabbed__card-desc">{currentTab.desc}</p>

              <div className="programs-tabbed__action-row">
                <Link 
                  to={currentTab.detailPath} 
                  className="programs-tabbed__cta-btn"
                  onClick={() => {
                    window.scrollTo(0, 0);
                    document.documentElement.scrollTop = 0;
                    document.body.scrollTop = 0;
                  }}
                >
                  <span>READ MORE</span>
                  <ArrowRightIcon size={16} color="#FFFFFF" />
                </Link>
                <button
                  className="btn-primary"
                  style={{ padding: '10px 22px', fontSize: '0.82rem', whiteSpace: 'nowrap' }}
                  onClick={() => {
                    window.dispatchEvent(new CustomEvent('open-booking-modal', { detail: { service: currentTab.id } }));
                  }}
                >
                  <span>Book Consultation</span>
                </button>
              </div>
            </div>
          </div>
        </div>

        <p className="programs__note">
          Brain Mapping Reports are explained in a one-to-one counseling session. Other program details are discussed before you decide.
        </p>
      </div>
    </section>
  );
};

export default Programs;
