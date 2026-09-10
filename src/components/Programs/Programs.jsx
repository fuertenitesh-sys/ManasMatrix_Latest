import React from 'react';
import { Link } from 'react-router-dom';
import { StarIcon, BriefcaseIcon, ChildIcon, UsersIcon, BarChartIcon, ArrowRightIcon } from '../Icons';
import './Programs.css';

const Programs = ({ hideHeader = false }) => {
  const programsData = [
    {
      id: 'child',
      title: 'Child Development & DISC Profile',
      shortDesc: 'Identify your child’s innate cognitive channels and DISC personality profile to foster academic confidence and eliminate study stress early.',
      badge: 'Children & Parents',
      badgeColor: 'rgba(236, 72, 153, 0.15)',
      badgeTextColor: '#EC4899',
      icon: <ChildIcon size={22} color="#EC4899" />,
      cardImage: '/card_child_dev.jpg',
      detailPath: '/programs/child-development',
      popular: false,
    },
    {
      id: 'business',
      title: 'Personalized Business Development',
      shortDesc: 'Spearheaded by Sandip Pala to align executive decision-making and leadership roles with your biological "Zone of Genius" for sustainable scaling.',
      badge: 'Founders & Leaders',
      badgeColor: 'rgba(59, 130, 246, 0.15)',
      badgeTextColor: '#60A5FA',
      icon: <BriefcaseIcon size={22} color="#60A5FA" />,
      cardImage: '/card_biz_dev.jpg',
      detailPath: '/programs/business-development',
      popular: false,
    },
    {
      id: 'dmit',
      title: 'Brain Mapping (DMIT) Program',
      shortDesc: 'Decode your 10 brain lobes, hemisphere dominance, and learning sensitivities with a printed 68+ page biometric diagnostic report.',
      badge: 'Most Popular',
      badgeColor: 'rgba(245, 158, 11, 0.15)',
      badgeTextColor: '#F59E0B',
      icon: <BarChartIcon size={22} color="#F59E0B" />,
      cardImage: '/card_brain_dmit.jpg',
      detailPath: '/programs/brain-mapping',
      popular: true,
    },
    {
      id: 'team',
      title: 'Team Building & Employee Development',
      shortDesc: 'Build resilient corporate teams by evaluating brain lobe distributions, communication styles, and leadership traits to optimize performance.',
      badge: 'Teams & HR',
      badgeColor: 'rgba(16, 185, 129, 0.15)',
      badgeTextColor: '#10B981',
      icon: <UsersIcon size={22} color="#10B981" />,
      cardImage: '/card_team_build.jpg',
      detailPath: '/programs/team-building',
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

              {/* Action Button: View Program Details */}
              <div className="programs__card-action">
                <Link
                  to={program.detailPath}
                  className="btn-primary programs__detail-btn"
                >
                  <span>View Program Details</span>
                  <ArrowRightIcon size={16} color="#FFFFFF" />
                </Link>
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
