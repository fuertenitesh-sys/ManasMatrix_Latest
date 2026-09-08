import React from 'react';
import { Link } from 'react-router-dom';
import { StarIcon, CheckIcon, BriefcaseIcon, ChildIcon, UsersIcon, BarChartIcon } from '../Icons';
import './Programs.css';

const Programs = () => {
  const programsData = [
    {
      id: 'dmit',
      title: 'Brain Mapping (DMIT) Program',
      subtitle: 'Unlock Your Hidden Potential',
      tagline: 'Stop Guessing. Start Mapping.',
      badge: 'Most Popular',
      badgeColor: 'rgba(245, 158, 11, 0.15)',
      badgeTextColor: '#F59E0B',
      icon: <BarChartIcon size={24} color="#F59E0B" />,
      features: [
        'Biometric Scanning & 68+ Page Report',
        'Multiple Intelligences & Learning Style',
        '1-on-1 Discovery Consultation',
        'Lifetime Validity Biological Data'
      ],
      outcomes: ['Clear Career Path', 'Reduced Academic Stress'],
      ctaText: 'Get a Quote →',
      ctaClass: 'btn-primary',
      popular: true,
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
      features: [
        'Brain-Based Business Development Framework',
        '12 Core Business Brain Segments Analysis',
        'Strategic Thinking & Decision Making',
        'Sales Intelligence & Financial Discipline'
      ],
      outcomes: ['Strong Leadership', 'Business Clarity'],
      ctaText: 'Get a Quote →',
      ctaClass: 'btn-secondary',
    },
    {
      id: 'team',
      title: 'Team Building & Employee Development',
      subtitle: 'Train the Mind. Transform the Team.',
      tagline: 'For Corporate Teams, Startups & MSMEs',
      badge: 'Corporate Focus',
      badgeColor: 'rgba(168, 85, 247, 0.15)',
      badgeTextColor: '#C084FC',
      icon: <UsersIcon size={24} color="#C084FC" />,
      features: [
        'Team Mindset & Communication Intelligence',
        'Problem Solving & Leadership Simulations',
        'Activity-Based Learning Experiences',
        'Customer Service Excellence Training'
      ],
      outcomes: ['Higher Motivation', 'Improved Productivity'],
      ctaText: 'Get a Quote →',
      ctaClass: 'btn-secondary',
    },
    {
      id: 'elite-family',
      title: 'Elite Family Brain Mapping',
      subtitle: 'Complete Family Transformation',
      tagline: 'For Entire Family (Parents + Children)',
      badge: 'Complete Package',
      badgeColor: 'rgba(239, 68, 68, 0.15)',
      badgeTextColor: '#EF4444',
      icon: <ChildIcon size={24} color="#EF4444" />,
      features: [
        'Complete Brain Mapping for 4 Family Members',
        'Family Harmony & Inter-relational Dynamics Analysis',
        'Parent-Child Communication Blueprint',
        '4 Printed Premium Intelligence Reports',
        'Multiple Counselling & Progress Alignment Sessions',
        'Lifelong Cognitive Guidance & Support',
      ],
      outcomes: ['Family Harmony', 'Complete Alignment'],
      ctaText: 'Get a Quote →',
      ctaClass: 'btn-secondary',
    },
  ];

  return (
    <section className="section programs" id="programs">
      <div className="container">
        <div className="section-header">
          <div className="section-badge">
            <StarIcon size={14} color="#F59E0B" />
            <span>Programs</span>
          </div>
          <h2 className="section-title">
            Tailored Brain Intelligence <span className="gradient-text-gold">Programs</span>
          </h2>
          <p className="section-subtitle">
            Scientific cognitive assessments designed to give clarity at every stage of life — from early childhood learning to executive performance.
          </p>
        </div>

        {/* Balanced 2-Column Grid where Professional and Elite Family sit side-by-side */}
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

              <Link to="/contact" className={`programs__cta ${program.ctaClass}`}>
                <span>{program.ctaText}</span>
              </Link>
            </div>
          ))}
        </div>

        <p className="programs__note">
          All programs include a 1-on-1 private consultation with certified Brain Mapping experts in Rajkot, Gujarat.
        </p>
      </div>
    </section>
  );
};

export default Programs;
