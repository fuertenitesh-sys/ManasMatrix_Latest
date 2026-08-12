import React from 'react';
import { Link } from 'react-router-dom';
import { StarIcon, CheckIcon, BriefcaseIcon, ChildIcon, UsersIcon, BarChartIcon } from '../Icons';
import './Programs.css';

const Programs = () => {
  const programsData = [
    {
      id: 'disc',
      title: 'DISC Assessment',
      subtitle: 'Understand Personality & Behavioral Traits',
      tagline: 'Ideal for Students & Early Career',
      price: '₹1,999',
      badge: 'Popular Entry',
      badgeColor: 'rgba(59, 130, 246, 0.15)',
      badgeTextColor: '#60A5FA',
      icon: <BarChartIcon size={24} color="#60A5FA" />,
      features: [
        'DISC Personality Profile Analysis',
        'Dominance, Influence, Steadiness & Compliance Score',
        'Basic Communication & Behavior Style Insights',
        'Digital Assessment Report',
        'Self-Discovery Summary Session',
      ],
      outcomes: ['Behavioral Awareness', 'Communication Boost'],
      ctaText: 'Book Assessment →',
      ctaClass: 'btn-secondary',
    },
    {
      id: 'child',
      title: 'Child Program',
      subtitle: 'Discover Innate Learning Potential',
      tagline: 'Recommended for Ages 4 to 16',
      price: '₹9,999',
      badge: 'Most Popular',
      badgeColor: 'rgba(245, 158, 11, 0.15)',
      badgeTextColor: '#F59E0B',
      icon: <ChildIcon size={24} color="#F59E0B" />,
      features: [
        'Full 10-Lobe DMI Fingerprint Brain Mapping',
        'Multiple Intelligence (MI) & Brain Dominance Analysis',
        'Visual, Auditory, Kinesthetic Learning Style Identification',
        'Printed 40+ Page Premium Brain Report',
        '1-on-1 Parent Counselling Session in Rajkot',
      ],
      outcomes: ['Study Method Clarity', 'Parenting Blueprint'],
      ctaText: 'Unlock Child Potential →',
      ctaClass: 'btn-primary',
      popular: true,
    },
    {
      id: 'professional',
      title: 'Professional',
      subtitle: 'Build The Mindset That Builds Success',
      tagline: 'For Business Professionals & Leaders',
      price: '₹14,999',
      badge: 'Career & Business',
      badgeColor: 'rgba(239, 68, 68, 0.15)',
      badgeTextColor: '#EF4444',
      icon: <BriefcaseIcon size={24} color="#FF6B35" />,
      features: [
        'Printed Premium Brain Mapping Report',
        'Advanced Brain Intelligence Analysis',
        'Personalized Business Growth Consultation',
        'Leadership & Performance Analysis',
        'Business Decision Making Assessment',
        '30 Day Growth Optimization Plan',
        'Habit Building & High Performance Coaching',
        'Monthly Review & Performance Tracking',
      ],
      outcomes: ['Leadership Boost', 'Decision Making Clarity'],
      ctaText: 'Elevate Your Performance →',
      ctaClass: 'btn-primary',
    },
    {
      id: 'elite-family',
      title: 'Elite Family',
      subtitle: 'Complete Family Transformation',
      tagline: 'For Entire Family (Parents + Children)',
      price: '₹37,499',
      badge: 'Complete Package',
      badgeColor: 'rgba(168, 85, 247, 0.15)',
      badgeTextColor: '#C084FC',
      icon: <UsersIcon size={24} color="#C084FC" />,
      features: [
        'Complete Brain Mapping for 4 Family Members',
        'Family Harmony & Inter-relational Dynamics Analysis',
        'Parent-Child Communication Blueprint',
        '4 Printed Premium Intelligence Reports',
        'Multiple Counselling & Progress Alignment Sessions',
        'Lifelong Cognitive Guidance & Support',
      ],
      outcomes: ['Family Harmony', 'Complete Alignment'],
      ctaText: 'Transform Your Family →',
      ctaClass: 'btn-primary',
    },
  ];

  return (
    <section className="section programs" id="programs">
      <div className="container">
        <div className="section-header">
          <div className="section-badge">
            <StarIcon size={14} color="#F59E0B" />
            <span>Programs & Pricing</span>
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

              <div className="programs__price-row">
                <div className="programs__price">{program.price}</div>
                <div className="programs__price-sub">only</div>
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
