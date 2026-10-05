import React from 'react';
import { Link } from 'react-router-dom';
import { StarIcon, CheckIcon, BriefcaseIcon, BrainIcon, BuildingIcon, FingerprintIcon } from '../Icons';
import './Programs.css';

const programsGridData = [
  {
    id: 'dmit',
    title: 'Brain Mapping Reports (BMR)',
    subtitle: 'Clear insight into strengths, style and development areas',
    tagline: 'A report, explained through personal counseling.',
    badge: 'Individuals & Families',
    badgeColor: 'rgba(236, 72, 153, 0.15)',
    badgeTextColor: '#EC4899',
    icon: <FingerprintIcon size={24} color="#EC4899" />,
    cardImage: '/card_brain_dmit.jpg',
    detailPath: '/programs/brain-mapping',
    features: [
      'Options for children, students, adults and professionals',
      'Behavioral, learning or working-style insights',
      'Family Combo Brain Mapping & Family Counseling',
      'One-to-one counseling to explain your report'
    ],
    outcomes: ['Understand your profile', 'Plan practical next steps'],
    ctaText: 'Book a Consultation',
    popular: false,
  },
  {
    id: 'business',
    title: 'For Business Owners',
    subtitle: 'Develop the person behind the business',
    tagline: 'Personalized counseling and structured development.',
    badge: 'Founders & Leaders',
    badgeColor: 'rgba(59, 130, 246, 0.15)',
    badgeTextColor: '#60A5FA',
    icon: <BriefcaseIcon size={24} color="#60A5FA" />,
    cardImage: '/card_biz_dev.jpg',
    detailPath: '/programs/business-development',
    features: [
      'Personalized Business Counseling',
      'Brain-Based Development Program',
      'Leadership, decisions and communication',
      'Development based on your Brain Mapping Report'
    ],
    outcomes: ['Clarity on current challenges', 'A practical growth plan'],
    ctaText: 'Book a Business Consultation',
    popular: false,
  },
  {
    id: 'manas-360',
    title: 'Manas 360 — Brain Performance Program',
    subtitle: 'One program. Five areas of development.',
    tagline: 'Unlock your brain. Unlock your strength.',
    badge: 'Mind, Emotion, Learning, Behavior & Performance',
    badgeColor: 'rgba(245, 158, 11, 0.15)',
    badgeTextColor: '#F59E0B',
    icon: <BrainIcon size={24} color="#F59E0B" />,
    cardImage: '/card_brain_dmit.jpg',
    detailPath: '/programs/manas-360',
    features: [
      'Built on the MANAS framework',
      'Starts from your Brain Mapping Report',
      'Guided sessions and practice activities',
      'A personal plan with progress reviews'
    ],
    outcomes: ['Build awareness and focus', 'Develop practical performance habits'],
    ctaText: 'Explore Manas 360',
    popular: true,
  },
  {
    id: 'team',
    title: 'HR Matrix — For Organizations & HR',
    subtitle: 'Understand your people. Build stronger teams.',
    tagline: 'Team mapping with a summary dashboard.',
    badge: 'Teams & Organizations',
    badgeColor: 'rgba(16, 185, 129, 0.15)',
    badgeTextColor: '#10B981',
    icon: <BuildingIcon size={24} color="#10B981" />,
    cardImage: '/card_team_build.jpg',
    detailPath: '/programs/team-building',
    features: [
      'Individual Brain Mapping Report for each participant',
      'Point-to-point team summary dashboard',
      'Team strengths and development priorities',
      'Debrief session with management'
    ],
    outcomes: ['Support development discussions', 'Plan team development actions'],
    ctaText: 'Request an HR Matrix Proposal',
    popular: false,
  },
];

const ProgramsGrid = () => {
  return (
    <div className="container" style={{ marginBottom: '60px' }}>
      <div className="programs__grid">
        {programsGridData.map((program, index) => (
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
              <img 
                src={program.cardImage} 
                alt={program.title} 
                className={`programs__card-img programs__card-img--${program.id}`} 
              />
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

            <div className="programs__card-actions" style={{ display: 'flex', gap: '12px', marginTop: '16px', flexWrap: 'wrap' }}>
              <Link
                to={program.detailPath}
                className="btn-secondary"
                style={{ flex: 1, padding: '12px 18px', textAlign: 'center', fontSize: '0.86rem', borderRadius: '30px', textDecoration: 'none', color: '#fff', border: '1px solid rgba(255,255,255,0.2)', whiteSpace: 'nowrap' }}
                onClick={() => {
                  window.scrollTo(0, 0);
                  document.documentElement.scrollTop = 0;
                  document.body.scrollTop = 0;
                }}
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
    </div>
  );
};

export default ProgramsGrid;
