import React from 'react';
import { Link } from 'react-router-dom';
import { BriefcaseIcon, ChildIcon, UsersIcon, BarChartIcon } from '../Icons';
import './Programs.css';

const programsGridData = [
  {
    id: 'child',
    title: 'Child Development',
    badge: 'Children & Parents',
    badgeColor: 'rgba(236, 72, 153, 0.15)',
    badgeTextColor: '#EC4899',
    icon: <ChildIcon size={20} color="#EC4899" />,
    cardImage: '/card_child_dev.jpg',
    detailPath: '/programs/child-development',
    shortDesc: 'Identify your child’s innate cognitive channels and DISC personality profile to foster academic confidence and eliminate study friction.',
    popular: false,
  },
  {
    id: 'business',
    title: 'Personalized Business Development',
    badge: 'Founders & Leaders',
    badgeColor: 'rgba(59, 130, 246, 0.15)',
    badgeTextColor: '#60A5FA',
    icon: <BriefcaseIcon size={20} color="#60A5FA" />,
    cardImage: '/card_biz_dev.jpg',
    detailPath: '/programs/business-development',
    shortDesc: 'Spearheaded by Sandip Pala to align executive decision-making and leadership roles with your biological "Zone of Genius" for sustainable scaling.',
    popular: false,
  },
  {
    id: 'dmit',
    title: 'Brain Mapping (DMIT)',
    badge: 'Most Popular',
    badgeColor: 'rgba(245, 158, 11, 0.15)',
    badgeTextColor: '#F59E0B',
    icon: <BarChartIcon size={20} color="#F59E0B" />,
    cardImage: '/card_brain_dmit.jpg',
    detailPath: '/programs/brain-mapping',
    shortDesc: 'Decode your 10 brain lobes, hemisphere dominance, and learning sensitivities with a printed 68+ page biometric diagnostic report.',
    popular: true,
  },
  {
    id: 'team',
    title: 'Team Building & Employee Development',
    badge: 'Teams & HR',
    badgeColor: 'rgba(16, 185, 129, 0.15)',
    badgeTextColor: '#10B981',
    icon: <UsersIcon size={20} color="#10B981" />,
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

            {/* Single Prominent Action Button: View Program Details */}
            <div className="programs__card-actions" style={{ paddingTop: '16px' }}>
              <Link
                to={program.detailPath}
                className="programs__card-btn-primary"
                style={{ width: '100%', textDecoration: 'none', textAlign: 'center', justifyContent: 'center' }}
                onClick={() => {
                  window.scrollTo(0, 0);
                  document.documentElement.scrollTop = 0;
                  document.body.scrollTop = 0;
                }}
              >
                View Program Details &rarr;
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProgramsGrid;

