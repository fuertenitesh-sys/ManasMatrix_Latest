import React, { useState } from 'react';
import './Programs.css';

const programs = [
  {
    id: 'disc',
    badge: '🔍 Entry Level',
    badgeColor: '#0D9488',
    title: 'DISC Personality Assessment',
    subtitle: 'Know Yourself First',
    price: '₹1,999',
    tagline: 'Your Mind Holds The Blueprint of Your Future',
    features: [
      'Mini Cognitive Assessment',
      'DISC Personality Analysis',
      'Natural SWOT Analysis',
      'Quick Potential Snapshot',
    ],
    cta: 'Unlock Your Personality',
    popular: false,
    gradient: 'linear-gradient(135deg, rgba(13,148,136,0.15), rgba(13,148,136,0.05))',
    border: 'rgba(13,148,136,0.4)',
    glowColor: 'rgba(13,148,136,0.2)',
    anim: 'fade-up delay-100',
  },
  {
    id: 'child',
    badge: '🌱 Child Program',
    badgeColor: '#3B82F6',
    title: 'Growth Transformation Program',
    subtitle: 'Build Your Child\'s Future With Science',
    price: '₹9,999',
    tagline: 'Advance Brain Mapping Report for Children',
    features: [
      'Printed Brain Mapping Report',
      'Complete Brain Mapping Analysis',
      'Personalized Counseling Session',
      '1 Month Development Plan',
      'Habit & Performance Coaching',
      'Monthly Review Session',
    ],
    cta: 'Start Child\'s Journey',
    popular: false,
    gradient: 'linear-gradient(135deg, rgba(59,130,246,0.15), rgba(59,130,246,0.05))',
    border: 'rgba(59,130,246,0.4)',
    glowColor: 'rgba(59,130,246,0.2)',
    anim: 'fade-up delay-200',
  },
  {
    id: 'professional',
    badge: '💼 Professional',
    badgeColor: '#FF6B35',
    title: 'Advanced Brain Mapping',
    subtitle: 'Build The Mindset That Builds Success',
    price: '₹14,999',
    tagline: 'For Business Professionals & Leaders',
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
    cta: 'Elevate Your Performance',
    popular: false,
    gradient: 'linear-gradient(135deg, rgba(255,107,53,0.15), rgba(255,107,53,0.05))',
    border: 'rgba(255,107,53,0.4)',
    glowColor: 'rgba(255,107,53,0.2)',
    anim: 'fade-up delay-300',
  },
  {
    id: 'elite',
    badge: '⭐ Most Popular',
    badgeColor: '#F59E0B',
    title: 'Elite Family Transformation',
    subtitle: 'Transform Your Family\'s Future With Science',
    price: '₹37,499',
    tagline: 'The Ultimate Family Transformation Program',
    features: [
      'Everything in Growth Transformation Program',
      '90 Day Complete Development Journey',
      'Personalized Family Counseling Sessions',
      'Family Brain Reports (2-3 Members)',
      'Quarterly Progress Review Sessions',
      'Advanced Brain Performance Coaching',
      'Premium Personal Growth Guidance',
      'Long-Term Transformation Planning',
    ],
    outcomes: [
      'Better Child Development & Growth',
      'Improved Parent-Child Understanding',
      'Better Family Communication Patterns',
      'Long-Term Habit Transformation',
      'Emotional Intelligence Development',
      'Complete Family Alignment For Future',
      'Sustainable Personal Transformation',
    ],
    cta: 'Begin Elite Journey',
    popular: true,
    gradient: 'linear-gradient(135deg, rgba(245,158,11,0.15), rgba(124,58,237,0.08))',
    border: 'rgba(245,158,11,0.5)',
    glowColor: 'rgba(245,158,11,0.25)',
    anim: 'zoom-in delay-400',
  },
];

const Programs = () => {
  const [hoveredId, setHoveredId] = useState(null);

  return (
    <section className="programs section" id="programs">
      <div className="glow-orb" style={{ width: '600px', height: '600px', background: 'radial-gradient(circle, rgba(245,158,11,0.07), transparent)', bottom: '0', right: '0' }}></div>

      <div className="container">
        <div className="section-header animate-reveal fade-up">
          <div className="section-badge">💎 Our Programs</div>
          <h2 className="section-title">
            Choose Your <span className="gradient-text-gold">Transformation</span> Path
          </h2>
          <div className="divider"></div>
          <p className="section-subtitle">
            Science-backed programs designed for every stage of life — starting from just ₹1,999.
          </p>
        </div>

        {/* Outer Grid Container of Pricing Cards */}
        <div className="programs__grid">
          {programs.map((program) => (
            <div
              key={program.id}
              id={`program-${program.id}`}
              className={`programs__card ${program.popular ? 'programs__card--popular' : ''} animate-reveal ${program.anim}`}
              style={{
                background: program.gradient,
                borderColor: hoveredId === program.id ? program.border : 'var(--color-border)',
                boxShadow: hoveredId === program.id ? `0 20px 60px ${program.glowColor}` : 'none',
              }}
              onMouseEnter={() => setHoveredId(program.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              {program.popular && (
                <div className="programs__popular-tag">⭐ Most Popular</div>
              )}

              <div className="programs__card-header">
                <div className="programs__badge" style={{ background: `${program.badgeColor}20`, color: program.badgeColor, border: `1px solid ${program.badgeColor}40` }}>
                  {program.badge}
                </div>
                <div className="programs__price" style={{ color: program.badgeColor }}>
                  {program.price}
                  <span className="programs__price-sub">only</span>
                </div>
              </div>

              <h3 className="programs__title">{program.title}</h3>
              <p className="programs__subtitle">{program.subtitle}</p>
              <p className="programs__tagline">{program.tagline}</p>

              <div className="programs__divider" style={{ background: program.border }}></div>

              <div className="programs__features">
                <p className="programs__features-label">Includes:</p>
                {program.features.map((f) => (
                  <div key={f} className="programs__feature-item">
                    <span className="programs__feature-check" style={{ color: program.badgeColor }}>✓</span>
                    <span>{f}</span>
                  </div>
                ))}
              </div>

              {program.outcomes && (
                <div className="programs__outcomes">
                  <p className="programs__outcomes-label">Your Family Will Experience:</p>
                  {program.outcomes.map((o) => (
                    <div key={o} className="programs__outcome-item">
                      <span className="programs__feature-check" style={{ color: '#F59E0B' }}>•</span>
                      <span>{o}</span>
                    </div>
                  ))}
                </div>
              )}

              <a
                href="tel:9106545374"
                className="programs__cta"
                id={`program-cta-${program.id}`}
                style={{
                  background: program.popular
                    ? 'var(--gradient-orange-gold)'
                    : `linear-gradient(135deg, ${program.badgeColor}, ${program.badgeColor}cc)`,
                }}
              >
                {program.cta} →
              </a>
            </div>
          ))}
        </div>

        <div className="programs__note animate-reveal fade-up">
          <p>📞 Call us at <a href="tel:9106545374" style={{ color: 'var(--color-gold)' }}>9106545374</a> to discuss which program is right for you.</p>
        </div>
      </div>
    </section>
  );
};

export default Programs;
