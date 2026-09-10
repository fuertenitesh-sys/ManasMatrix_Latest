import React from 'react';
import { Link } from 'react-router-dom';
import { StarIcon, BriefcaseIcon, ChildIcon, UsersIcon, BarChartIcon } from '../Icons';
import './Programs.css';

const programsGridData = [
  {
    id: 'child',
    title: 'Child Development',
    subtitle: 'Discover Your Child’s Innate Cognitive Genius Early',
    badge: 'Children & Parents',
    badgeColor: 'rgba(236, 72, 153, 0.15)',
    badgeTextColor: '#EC4899',
    icon: <ChildIcon size={22} color="#EC4899" />,
    cardImage: '/card_child_dev.jpg',
    detailPath: '/programs/child-development',
    shortDesc: 'Identify your child’s innate cognitive channels and DISC personality profile to foster academic confidence and eliminate study friction.',
    popular: false,
  },
  {
    id: 'business',
    title: 'Personalized Business Development',
    subtitle: 'Decode the Intelligence Behind Successful Businesses',
    badge: 'Founders & Leaders',
    badgeColor: 'rgba(59, 130, 246, 0.15)',
    badgeTextColor: '#60A5FA',
    icon: <BriefcaseIcon size={22} color="#60A5FA" />,
    cardImage: '/card_biz_dev.jpg',
    detailPath: '/programs/business-development',
    shortDesc: 'Spearheaded by Sandip Pala to align executive decision-making and leadership roles with your biological "Zone of Genius" for sustainable scaling.',
    popular: false,
  },
  {
    id: 'dmit',
    title: 'Brain Mapping (DMIT)',
    subtitle: 'Decode Your Innate Biological Blueprint',
    badge: 'Most Popular',
    badgeColor: 'rgba(245, 158, 11, 0.15)',
    badgeTextColor: '#F59E0B',
    icon: <BarChartIcon size={22} color="#F59E0B" />,
    cardImage: '/card_brain_dmit.jpg',
    detailPath: '/programs/brain-mapping',
    shortDesc: 'Decode your 10 brain lobes, hemisphere dominance, and learning sensitivities with a printed 68+ page biometric diagnostic report.',
    popular: true,
  },
  {
    id: 'team',
    title: 'Team Building & Employee Development',
    subtitle: 'Train the Mind. Transform the Team.',
    badge: 'Teams & HR',
    badgeColor: 'rgba(16, 185, 129, 0.15)',
    badgeTextColor: '#10B981',
    icon: <UsersIcon size={22} color="#10B981" />,
    cardImage: '/card_team_build.jpg',
    detailPath: '/programs/team-building',
    shortDesc: 'Build resilient corporate teams by evaluating brain lobe distributions, communication styles, and leadership traits to optimize performance.',
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

            {/* Card Header: Icon & Category Badge */}
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

            {/* Header Image Frame */}
            <div className="programs__card-img-box">
              <img 
                src={program.cardImage} 
                alt={program.title} 
                className={`programs__card-img programs__card-img--${program.id}`} 
              />
              <div className="programs__card-img-overlay"></div>
            </div>

            {/* Title & Short Description */}
            <h3 className="programs__title">{program.title}</h3>
            <p className="programs__short-desc">{program.shortDesc}</p>

            {/* Action Buttons */}
            <div style={{ display: 'flex', gap: '12px', marginTop: 'auto', paddingTop: '12px', flexWrap: 'wrap' }}>
              <Link
                to={program.detailPath}
                className="btn-secondary"
                style={{ flex: 1, padding: '10px 16px', textAlign: 'center', fontSize: '0.84rem', borderRadius: '30px', textDecoration: 'none', color: '#fff', border: '1px solid rgba(255,255,255,0.2)', whiteSpace: 'nowrap' }}
                onClick={() => {
                  window.scrollTo(0, 0);
                  document.documentElement.scrollTop = 0;
                  document.body.scrollTop = 0;
                }}
              >
                <span>View Details →</span>
              </Link>
              <button
                className="btn-primary"
                style={{ flex: 1, padding: '10px 16px', fontSize: '0.84rem', whiteSpace: 'nowrap' }}
                onClick={() => {
                  window.dispatchEvent(new CustomEvent('open-booking-modal', { detail: { service: program.id } }));
                }}
              >
                <span>Book Consultation</span>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProgramsGrid;
