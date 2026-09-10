import React from 'react';
import { 
  UsersIcon, 
  BrainIcon, 
  StarIcon, 
  CheckIcon, 
  RocketIcon, 
  AwardIcon, 
  EyeIcon, 
  HeadphonesIcon, 
  ActivityIcon,
  BarChartIcon
} from '../../components/Icons';
import '../../components/Programs/ProgramDetail.css';

const ChildDevelopmentPage = () => {
  const openBookingModal = (service = 'parenting') => {
    window.dispatchEvent(new CustomEvent('open-booking-modal', { detail: { service } }));
  };

  const discTypes = [
    {
      title: "Dominance (D) — Eagle",
      badge: "The Goal-Oriented Leader",
      color: "#EF4444",
      desc: "Independent, assertive, and direct. Learns best when given autonomy, clear goals, and constructive challenges."
    },
    {
      title: "Influence (I) — Peacock",
      badge: "The Social Spark",
      color: "#F59E0B",
      desc: "Expressive, enthusiastic, and highly communicative. Thrives in collaborative, interactive, and encouraging study settings."
    },
    {
      title: "Steadiness (S) — Dove",
      badge: "The Empathetic Stabilizer",
      color: "#10B981",
      desc: "Patient, gentle, loyal, and supportive. Needs a calm, low-stress environment and predictable routine to process ideas."
    },
    {
      title: "Conscientiousness (C) — Owl",
      badge: "The Analytical Quality Seeker",
      color: "#3B82F6",
      desc: "Detail-oriented, curious, and systematic. Excels when given structured explanations, logical rules, and time to analyze."
    }
  ];

  const assessmentComponents = [
    {
      title: "Mini Cognitive Assessment",
      desc: "Maps your child's innate attention span, memory retention channels, and processing speed."
    },
    {
      title: "DISC Personality Analysis",
      desc: "Identifies whether your child is a Dominant Eagle, Influential Peacock, Steady Dove, or Conscientious Owl."
    },
    {
      title: "Natural SWOT Analysis for Kids",
      desc: "Pinpoints biological strengths, potential development areas, environmental opportunities, and stress triggers."
    },
    {
      title: "Quick Potential Snapshot",
      desc: "Provides parents with a clear 1-page visual summary of top learning modalities (Visual, Auditory, Kinesthetic) and parenting advice."
    }
  ];

  const benefitsList = [
    {
      title: "Eliminate Homework Frictions & Arguments",
      desc: "Align your child's study routine with their natural attention curve and input channel."
    },
    {
      title: "Stop Comparisons with Siblings or Peers",
      desc: "Understand that every child possesses a unique cognitive blueprint that requires personalized parenting."
    },
    {
      title: "Early Talent Discovery",
      desc: "Identify innate strengths in mathematics, spatial arts, linguistics, sports, or emotional leadership early."
    },
    {
      title: "Build Lasting Self-Confidence & Resilience",
      desc: "Nurture emotional intelligence (EQ) and adversity quotient (AQ) to handle exam pressure with ease."
    }
  ];

  return (
    <div className="program-page container">
      {/* Hero Section */}
      <div className="program-hero">
        <div className="program-hero__grid">
          <div className="animate-reveal fade-up">
            <div className="program-hero__badge">
              <UsersIcon size={14} color="#F59E0B" />
              <span>Early Childhood Cognition</span>
            </div>
            <h1 className="program-hero__title">
              Child Development & DISC <br />
              <span className="gradient-text-gold">Personality Assessment</span>
            </h1>
            <p className="program-hero__subtitle">
              Discover your child's innate cognitive blueprint, natural learning style, and personality dynamics early — eliminating study stress, scolding, and tuition guesswork.
            </p>
            <div className="program-hero__actions">
              <button className="btn-primary" onClick={() => openBookingModal('parenting')}>
                <RocketIcon size={18} />
                <span>Book Child Assessment</span>
              </button>
              <a href="#assessment-section" className="btn-secondary" style={{ padding: '12px 24px', borderRadius: '30px', textDecoration: 'none', color: '#fff', border: '1px solid rgba(255,255,255,0.2)' }}>
                <span>Explore Assessment ↓</span>
              </a>
            </div>
          </div>

          <div className="program-hero__image-wrapper animate-reveal fade-left">
            <div className="program-hero__image-card">
              <img src="/prog_child_dev.jpg" alt="Child Development & Cognitive Assessment" className="program-hero__image" loading="eager" fetchPriority="high" decoding="sync" />
              <div className="program-hero__image-badge">
                <BrainIcon size={20} color="#F59E0B" />
                <span>DISC Profile • Mini Cognitive Assessment • SWOT Report</span>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Bar */}
        <div className="program-stats-bar animate-reveal fade-up">
          <div className="program-stat-item">
            <div className="program-stat-num">DISC Profile</div>
            <div className="program-stat-label">4 Personality Types</div>
          </div>
          <div className="program-stat-item">
            <div className="program-stat-num">3 Input Channels</div>
            <div className="program-stat-label">Visual, Auditory, Kinesthetic</div>
          </div>
          <div className="program-stat-item">
            <div className="program-stat-num">Child SWOT</div>
            <div className="program-stat-label">Strengths & Potential Snapshot</div>
          </div>
          <div className="program-stat-item">
            <div className="program-stat-num">1-on-1</div>
            <div className="program-stat-label">Expert Parent Guidance</div>
          </div>
        </div>
      </div>

      {/* Section 1: The Core Value */}
      <div className="program-section program-section--dark" id="assessment-section">
        <div className="container">
          <div className="program-section-header animate-reveal fade-up">
            <span className="program-section-tag">Self Discovery For Children</span>
            <h2 className="program-section-title">Understanding How Your Child Learns & Thinks</h2>
            <p className="program-section-subtitle">
              Every child is born with a distinct neurological wiring. Forcing a child into a study method or discipline style that conflicts with their brain wiring causes academic anxiety, low self-esteem, and behavioral friction.
            </p>
          </div>

          <div className="program-cards-grid program-cards-grid--2col">
            {assessmentComponents.map((comp, idx) => (
              <div key={comp.title} className="program-card-box animate-reveal fade-up">
                <div className="program-card-box__icon">
                  <StarIcon size={24} color="#F59E0B" />
                </div>
                <h3 className="program-card-box__title">{comp.title}</h3>
                <p className="program-card-box__desc">{comp.desc}</p>
              </div>
            ))}
          </div>

          <div className="program-highlight-box animate-reveal zoom-in">
            <p className="program-highlight-text">
              "When you understand your child's innate brain type, parenting changes from scolding and frustration to guided mentorship and mutual trust."
            </p>
            <div className="program-highlight-author">— Manas Matrix Child Development Team</div>
          </div>
        </div>
      </div>

      {/* Section 2: DISC Personality Breakdown */}
      <div className="program-section">
        <div className="container">
          <div className="program-section-header animate-reveal fade-up">
            <span className="program-section-tag">DISC Personality Blueprint</span>
            <h2 className="program-section-title">The 4 Child Personality Archetypes</h2>
            <p className="program-section-subtitle">
              Understanding which archetype your child belongs to helps tailor communication and motivation methods:
            </p>
          </div>

          <div className="program-cards-grid program-cards-grid--2col">
            {discTypes.map((dt, idx) => (
              <div key={dt.title} className={`program-card-box animate-reveal fade-up delay-${(idx + 1) * 100}`}>
                <div style={{ fontSize: '0.75rem', color: dt.color, fontWeight: '700', textTransform: 'uppercase' }}>{dt.badge}</div>
                <h3 className="program-card-box__title" style={{ color: dt.color }}>{dt.title}</h3>
                <p className="program-card-box__desc">{dt.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Section 3: Benefits for Parents & Kids */}
      <div className="program-section program-section--dark">
        <div className="container">
          <div className="program-split-grid">
            <div className="animate-reveal fade-right">
              <span className="program-section-tag">Transformative Impact</span>
              <h2 className="program-section-title" style={{ textAlign: 'left', marginBottom: '20px' }}>
                Why Early Cognitive Discovery Matters
              </h2>
              <div className="program-checklist">
                {benefitsList.map((ben, i) => (
                  <div key={i} className="program-checklist-item">
                    <div className="program-checklist-icon">✓</div>
                    <div className="program-checklist-text">
                      <h4>{ben.title}</h4>
                      <p>{ben.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="animate-reveal fade-left">
              <div className="program-split-image-card">
                <img src="/parents_learning.jpg" alt="Parent and Child Learning Environment" className="program-split-image" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Banner */}
      <div className="program-cta-banner animate-reveal zoom-in">
        <h2>Unlock Your Child's True Potential Today</h2>
        <p>
          Book a 1-on-1 Child Development & Cognitive Personality Assessment consultation with certified experts.
        </p>
        <div className="program-cta-banner__actions">
          <button className="btn-primary" onClick={() => openBookingModal('parenting')}>
            <RocketIcon size={20} />
            <span>Book Child Assessment Now</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChildDevelopmentPage;
