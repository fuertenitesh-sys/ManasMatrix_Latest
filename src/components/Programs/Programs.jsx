import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  StarIcon, 
  BriefcaseIcon, 
  ChildIcon, 
  UsersIcon, 
  BarChartIcon, 
  ChevronRightIcon, 
  ArrowRightIcon 
} from '../Icons';
import './Programs.css';

const programsData = [
  {
    id: 'child',
    title: 'Child Development',
    tagline: 'FROM EARLY TALENT DISCOVERY TO ZERO HOMEWORK STRESS',
    desc: 'Identify your child\'s innate cognitive channels (Visual, Auditory, Kinesthetic) and DISC personality type (Dominant Eagle, Influential Peacock, Steady Dove, Conscientious Owl) to foster academic confidence and eliminate study friction.',
    image: '/card_child_dev.jpg',
    icon: <ChildIcon size={24} color="#EC4899" />,
    badge: 'Children & Parents',
    detailPath: '/programs/child-development'
  },
  {
    id: 'business',
    title: 'Personalized Business Development',
    tagline: 'FROM TRIAL-AND-ERROR TO SCIENTIFIC SCALING',
    desc: 'Spearheaded by Sandip Pala with frameworks refined alongside top business coaches Dr. Vivek Bindra and Harshvardhan Jain. Aligns executive decision-making and leadership roles with your biological "Zone of Genius" for sustainable business scaling.',
    image: '/card_biz_dev.jpg',
    icon: <BriefcaseIcon size={24} color="#60A5FA" />,
    badge: 'Founders & Leaders',
    detailPath: '/programs/business-development'
  },
  {
    id: 'dmit',
    title: 'Brain Mapping (DMIT)',
    tagline: 'FROM BIOMETRIC FINGERPRINTS TO 10 LOBE MAPS',
    desc: 'Scientific fingerprint analysis to decode 10 brain lobes, left vs. right hemisphere dominance, 8 multiple intelligences, and innate learning sensitivities—replacing trial and error with biological clarity.',
    image: '/card_brain_dmit.jpg',
    icon: <BarChartIcon size={24} color="#F59E0B" />,
    badge: 'Most Popular',
    detailPath: '/programs/brain-mapping'
  },
  {
    id: 'team',
    title: 'Team Building & Employee Development',
    tagline: 'FROM CONFLICT TO HIGH-PERFORMANCE TEAM SYNERGY',
    desc: 'Build resilient, high-output corporate teams by evaluating individual brain lobe distributions, communication styles, and leadership traits—optimizing delegation and preventing workplace burnout.',
    image: '/card_team_build.jpg',
    icon: <UsersIcon size={24} color="#10B981" />,
    badge: 'Teams & HR',
    detailPath: '/programs/team-building'
  }
];

const Programs = ({ hideHeader = false }) => {
  const [activeTabIndex, setActiveTabIndex] = useState(0);
  const currentTab = programsData[activeTabIndex];

  // Preload all 4 card images into browser memory immediately on component mount
  useEffect(() => {
    programsData.forEach((prog) => {
      const img = new window.Image();
      img.src = prog.image;
    });
  }, []);

  return (
    <section className="section programs" id="programs">
      <div className="container">
        {!hideHeader && (
          <div className="section-header animate-reveal fade-up">
            <div className="section-badge">
              <StarIcon size={14} color="#F59E0B" />
              <span>Programs</span>
            </div>
            <h2 className="section-title">
              Tailored Brain Intelligence <span className="gradient-text-gold">Programs</span>
            </h2>
            <p className="section-subtitle">
              Scientific cognitive assessments and brain-alignment frameworks designed to give clarity at every stage of life — from early childhood learning to executive scaling.
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
            {/* Header Image Container - Pre-rendered Eager Stack with Instant Cross-fade */}
            <div className="programs-tabbed__img-wrapper">
              {programsData.map((prog, idx) => (
                <img
                  key={prog.id}
                  src={prog.image}
                  alt={prog.title}
                  loading="eager"
                  fetchPriority={idx === 0 ? "high" : "auto"}
                  decoding="sync"
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
          All programs include a 1-on-1 private consultation with Sandip Pala & certified Brain Mapping experts in Rajkot, Gujarat.
        </p>
      </div>
    </section>
  );
};

export default Programs;
