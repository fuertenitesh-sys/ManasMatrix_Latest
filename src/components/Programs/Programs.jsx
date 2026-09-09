import React from 'react';
import { Link } from 'react-router-dom';
import { StarIcon, CheckIcon, BriefcaseIcon, ChildIcon, UsersIcon, BarChartIcon } from '../Icons';
import './Programs.css';

const Programs = ({ hideHeader = false }) => {
  const programsData = [
    {
      id: 'child',
      title: 'Child Development & DISC Profile',
      subtitle: 'Discover Your Child’s Innate Cognitive Genius Early',
      tagline: 'Stop Scolding. Start Scientific Mentorship.',
      badge: 'Children & Parents',
      badgeColor: 'rgba(236, 72, 153, 0.15)',
      badgeTextColor: '#EC4899',
      icon: <ChildIcon size={24} color="#EC4899" />,
      cardImage: '/card_child_dev.jpg',
      detailPath: '/programs/child-development',
      features: [
        'DISC Personality Profile (Dominant, Influential, Steady, Conscientious)',
        'Mini Cognitive Assessment (Attention Span & Memory)',
        'Natural SWOT Analysis for Kids',
        'Quick Potential Snapshot & Parent Guide'
      ],
      outcomes: ['Zero Homework Stress', 'Early Talent Discovery'],
      ctaText: 'Book Consultation',
      popular: false,
    },
    {
      id: 'business',
      title: 'Personalized Business Development',
      subtitle: 'Decode the Intelligence Behind Successful Businesses',
      tagline: 'Upgrade the thinking — upgrade the business',
      badge: 'Founders & Leaders',
      badgeColor: 'rgba(59, 130, 246, 0.15)',
      badgeTextColor: '#60A5FA',
      icon: <BriefcaseIcon size={24} color="#60A5FA" />,
      cardImage: '/card_biz_dev.jpg',
      detailPath: '/programs/business-development',
      features: [
        'Brain-Based Business Development Framework',
        '12 Core Business Brain Segments Analysis',
        'Strategic Thinking & Decision Making',
        'Sales Intelligence & Financial Discipline'
      ],
      outcomes: ['Strong Leadership', 'Business Scaling Clarity'],
      ctaText: 'Book Consultation',
      popular: false,
    },
    {
      id: 'dmit',
      title: 'Brain Mapping (DMIT) Program',
      subtitle: 'Decode Your Innate Biological Blueprint',
      tagline: 'Stop Guessing. Start Mapping.',
      badge: 'Most Popular',
      badgeColor: 'rgba(245, 158, 11, 0.15)',
      badgeTextColor: '#F59E0B',
      icon: <BarChartIcon size={24} color="#F59E0B" />,
      cardImage: '/card_brain_dmit.jpg',
      detailPath: '/programs/brain-mapping',
      features: [
        'Biometric Scanning & 68+ Page Printed Report',
        'Multiple Intelligences & 3 Input Learning Styles',
        '1-on-1 Discovery Consultation with Sandip Pala',
        'Lifetime Validity Biological Fingerprint Data'
      ],
      outcomes: ['Clear Career Path', 'Reduced Academic Stress'],
      ctaText: 'Book Consultation',
      popular: true,
    },
    {
      id: 'team',
      title: 'Team Building & Employee Development',
      subtitle: 'Train the Mind. Transform the Team.',
      tagline: 'Right Person in the Right Seat',
      badge: 'Teams & HR',
      badgeColor: 'rgba(16, 185, 129, 0.15)',
      badgeTextColor: '#10B981',
      icon: <UsersIcon size={24} color="#10B981" />,
      cardImage: '/card_team_build.jpg',
      detailPath: '/programs/team-building',
      features: [
        'Activity-Based Learning & Practical Workshops',
        'Problem Solving, Time Management & Customer Excellence',
        'Conflict Resolution & Communication Alignment',
        'Half-Day, Full-Day, & 2-Day Training Formats'
      ],
      outcomes: ['Higher Productivity', 'Reduced Office Friction'],
      ctaText: 'Book Consultation',
      popular: false,
    },
  ];

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

        <div className="programs__grid">
          {programsData.map((program, index) => (
            <div
              key={program.id}
              className={`programs__card glass-card ${program.popular ? 'programs__card--popular' : ''} animate-reveal ${index % 2 === 0 ? 'fade-left delay-100' : 'fade-right delay-200'}`}
            >
              {program.popular && <div className="programs__popular-tag">MOST RECOMMENDED</div>}

              <div className="programs__card-header">
                <div className="programs__card-icon-box">
                  {program.icon}
                </div>
                <div
                  className="programs__badge"
                  style={{ background: program.badgeColor, color: program.badgeTextColor }}
                >
                  <span>{program.badge}</span>
                </div>
              </div>

              {/* Header Image Frame - Dedicated container ensuring zero text overlap */}
              <div className="programs__card-img-box">
                <img src={program.cardImage} alt={program.title} className="programs__card-img" />
                <div className="programs__card-img-overlay"></div>
              </div>

              <h3 className="programs__title">{program.title}</h3>
              <div className="programs__subtitle">{program.subtitle}</div>
              <div className="programs__tagline">{program.tagline}</div>

              <div className="programs__divider"></div>

              <div className="programs__features">
                <div className="programs__features-label">INCLUDES:</div>
                {program.features.map((feat, idx) => (
                  <div key={idx} className="programs__feature-item">
                    <CheckIcon size={16} color="#F59E0B" className="programs__feature-check" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>

              <div className="programs__outcomes">
                <div className="programs__outcomes-label">KEY OUTCOMES:</div>
                {program.outcomes.map((out, idx) => (
                  <div key={idx} className="programs__outcome-item">
                    <StarIcon size={12} color="#FCD34D" />
                    <span>{out}</span>
                  </div>
                ))}
              </div>

              <div style={{ display: 'flex', gap: '12px', marginTop: '16px', flexWrap: 'wrap' }}>
                <Link
                  to={program.detailPath}
                  className="btn-secondary"
                  style={{ flex: 1, padding: '12px 18px', textAlign: 'center', fontSize: '0.86rem', borderRadius: '30px', textDecoration: 'none', color: '#fff', border: '1px solid rgba(255,255,255,0.2)', whiteSpace: 'nowrap' }}
                >
                  <span>View Program Details →</span>
                </Link>
                <button
                  className="btn-primary"
                  style={{ flex: 1, padding: '12px 18px', fontSize: '0.86rem', whiteSpace: 'nowrap' }}
                  onClick={() => {
                    window.dispatchEvent(new CustomEvent('open-booking-modal', { detail: { service: program.id } }));
                  }}
                >
                  <span>{program.ctaText}</span>
                </button>
              </div>
            </div>
          ))}
        </div>

        <p className="programs__note">
          All programs include a 1-on-1 private consultation with Sandip Pala & certified Brain Mapping experts in Rajkot, Gujarat.
        </p>
      </div>
    </section>
  );
};

export default Programs;
