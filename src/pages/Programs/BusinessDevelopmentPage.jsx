import React from 'react';
import { 
  BuildingIcon, 
  BarChartIcon, 
  BriefcaseIcon, 
  UsersIcon, 
  CheckIcon, 
  RocketIcon, 
  StarIcon,
  BrainIcon,
  AwardIcon
} from '../../components/Icons';
import '../../components/Programs/ProgramDetail.css';

const BusinessDevelopmentPage = () => {
  const openBookingModal = (service = 'business') => {
    window.dispatchEvent(new CustomEvent('open-booking-modal', { detail: { service } }));
  };

  const businessProblems = [
    {
      title: "Employees Don't Work with Ownership",
      desc: "Staff wait for orders instead of taking initiative, leading to operational friction and constant supervision."
    },
    {
      title: "Unpredictable & Stagnant Sales",
      desc: "Revenue growth fluctuates month-to-month without a systematic, high-converting customer acquisition framework."
    },
    {
      title: "Customers Constantly Negotiate Price",
      desc: "Products and services are treated as commodities because market positioning lacks distinct value perception."
    },
    {
      title: "Business Depends 100% On You",
      desc: "You are trapped in daily firefighting, with zero time for family, personal health, or strategic long-term vision."
    },
    {
      title: "Rising Competition & Shrinking Margins",
      desc: "Competitors copy prices and services, squeezing profit margins and creating constant price wars."
    },
    {
      title: "Lack of Leadership Pipeline",
      desc: "Difficulty identifying and training internal managers who can scale operations independently."
    }
  ];

  const corePillars = [
    {
      title: "Team Mindset Development",
      badge: "Pillar 01",
      icon: <UsersIcon size={24} color="#F59E0B" />,
      desc: "Develop a proactive growth mindset, accountability, and an intrapreneurial ownership attitude across departments."
    },
    {
      title: "Communication Intelligence",
      badge: "Pillar 02",
      icon: <BarChartIcon size={24} color="#60A5FA" />,
      desc: "Eliminate department siloing, improve inter-team dialogue, and align staff around unified company targets."
    },
    {
      title: "Leadership Development",
      badge: "Pillar 03",
      icon: <BuildingIcon size={24} color="#10B981" />,
      desc: "Identify innate leadership DNA, train future managers, and delegate execution with absolute confidence."
    }
  ];

  const businessSegments = [
    { title: "Vision Intelligence", desc: "Setting clear long-term direction & strategic goals." },
    { title: "Leadership Intelligence", desc: "Inspiring teams & driving organizational alignment." },
    { title: "Customer Psychology", desc: "Understanding buyer triggers & emotional value." },
    { title: "Sales Intelligence", desc: "High-converting sales systems & relationship building." },
    { title: "Market Influence", desc: "Positioning your brand as an authority." },
    { title: "Financial Intelligence", desc: "Cash-flow discipline & margin optimization." },
    { title: "Innovation & Creativity", desc: "Developing unique solutions & market offerings." },
    { title: "Communication", desc: "Clear department alignment & conflict resolution." },
    { title: "Systems Thinking", desc: "Building scalable SOPs & operational workflows." },
    { title: "Execution Mastery", desc: "Consistent project delivery & milestone tracking." },
    { title: "Resilience & Grit", desc: "Overcoming market downturns & setbacks." },
    { title: "Time & Productivity", desc: "Prioritizing high-ROI founder tasks over firefighting." }
  ];

  return (
    <div className="program-page container">
      {/* Hero Section */}
      <div className="program-hero">
        <div className="program-hero__grid">
          <div className="animate-reveal fade-up">
            <div className="program-hero__badge">
              <BriefcaseIcon size={14} color="#F59E0B" />
              <span>Executive Brain Alignment</span>
            </div>
            <h1 className="program-hero__title">
              Personalized Business <br />
              <span className="gradient-text-gold">Development Program</span>
            </h1>
            <p className="program-hero__subtitle">
              "Decode the Intelligence Behind Successful Businesses." Most business owners try to grow using longer hours and constant firefighting. Upgrade your thinking systems — upgrade your business.
            </p>
            <div className="program-hero__actions">
              <button className="btn-primary" onClick={() => openBookingModal('business')}>
                <RocketIcon size={18} />
                <span>Book Strategy Consultation</span>
              </button>
              <a href="#problems-section" className="btn-secondary" style={{ padding: '12px 24px', borderRadius: '30px', textDecoration: 'none', color: '#fff', border: '1px solid rgba(255,255,255,0.2)' }}>
                <span>Explore Framework ↓</span>
              </a>
            </div>
          </div>

          <div className="program-hero__image-wrapper animate-reveal fade-left">
            <div className="program-hero__image-card">
              <img src="/prog_business_dev.jpg" alt="Personalized Business Development Program" className="program-hero__image" />
              <div className="program-hero__image-badge">
                <BuildingIcon size={20} color="#F59E0B" />
                <span>12 Core Business Brain Segments • Executive Scaling</span>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Bar */}
        <div className="program-stats-bar animate-reveal fade-up">
          <div className="program-stat-item">
            <div className="program-stat-num">12</div>
            <div className="program-stat-label">Core Business Brain Segments</div>
          </div>
          <div className="program-stat-item">
            <div className="program-stat-num">100%</div>
            <div className="program-stat-label">Scientific Brain-Alignment</div>
          </div>
          <div className="program-stat-item">
            <div className="program-stat-num">3x</div>
            <div className="program-stat-label">Operational Efficiency Boost</div>
          </div>
          <div className="program-stat-item">
            <div className="program-stat-num">0</div>
            <div className="program-stat-label">Trial & Error Guesswork</div>
          </div>
        </div>
      </div>

      {/* Section 1: Business Problems */}
      <div className="program-section program-section--dark" id="problems-section">
        <div className="container">
          <div className="program-section-header animate-reveal fade-up">
            <span className="program-section-tag">Identifying The Root Cause</span>
            <h2 className="program-section-title">Are You Facing These Business Challenges?</h2>
            <p className="program-section-subtitle">
              If these problems exist, it is not just an operational issue — it is a Business Intelligence Gap. Your business challenges are a direct reflection of the thinking systems behind them.
            </p>
          </div>

          <div className="program-cards-grid">
            {businessProblems.map((prob, idx) => (
              <div key={prob.title} className={`program-card-box animate-reveal fade-up delay-${(idx % 3 + 1) * 100}`}>
                <div className="program-card-box__icon">
                  <BarChartIcon size={24} color="#FF6B35" />
                </div>
                <h3 className="program-card-box__title">{prob.title}</h3>
                <p className="program-card-box__desc">{prob.desc}</p>
              </div>
            ))}
          </div>

          <div className="program-highlight-box animate-reveal zoom-in">
            <p className="program-highlight-text">
              "Your business challenges are a reflection of the thinking systems behind them. Upgrade the thinking — upgrade the business."
            </p>
            <div className="program-highlight-author">— Manas-Matrix Framework</div>
          </div>
        </div>
      </div>

      {/* Section 2: 3 Core Program Pillars */}
      <div className="program-section">
        <div className="container">
          <div className="program-section-header animate-reveal fade-up">
            <span className="program-section-tag">Structured Methodology</span>
            <h2 className="program-section-title">The 3 Pillars of Manas-Matrix Business Development</h2>
          </div>

          <div className="program-cards-grid program-cards-grid--3col">
            {corePillars.map((pil, idx) => (
              <div key={pil.title} className={`program-card-box animate-reveal fade-up delay-${(idx + 1) * 100}`}>
                <div className="program-card-box__icon">{pil.icon}</div>
                <div style={{ fontSize: '0.75rem', color: 'var(--color-gold)', fontWeight: '700', textTransform: 'uppercase' }}>{pil.badge}</div>
                <h3 className="program-card-box__title">{pil.title}</h3>
                <p className="program-card-box__desc">{pil.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Section 3: About Sandip Pala */}
      <div className="program-section program-section--dark">
        <div className="container">
          <div className="program-split-grid">
            <div className="animate-reveal fade-right">
              <span className="program-section-tag">Lead Development Strategist</span>
              <h2 className="program-section-title" style={{ textAlign: 'left', marginBottom: '20px' }}>
                Meet Sandip Pala
              </h2>
              <p style={{ color: 'var(--color-text-secondary)', lineHeight: '1.7', marginBottom: '16px' }}>
                Sandip Pala is a Strategic Brain-Alignment and Development Strategist dedicated to building high-performance executive personalities. Having worked closely with top-tier business coaches like Dr. Vivek Bindra and Harshvardhan Jain, he has mastered high-impact frameworks to help entrepreneurs move from "trial and error" to scientific scaling.
              </p>
              <p style={{ color: 'var(--color-text-secondary)', lineHeight: '1.7', marginBottom: '24px' }}>
                His unique edge lies in merging traditional business management with Brain-Based Cognitive Analysis. By identifying the biological "Zone of Genius" within a leader or team, he provides a clear "User Manual" for professional success.
              </p>

              <div className="program-checklist">
                <div className="program-checklist-item">
                  <div className="program-checklist-icon">✓</div>
                  <div className="program-checklist-text">
                    <h4>Scientifically Prevents Executive Burnout</h4>
                    <p>Aligns daily leadership roles with innate DNA-level cognitive strengths.</p>
                  </div>
                </div>
                <div className="program-checklist-item">
                  <div className="program-checklist-icon">✓</div>
                  <div className="program-checklist-text">
                    <h4>Stop Guessing — Start Leading</h4>
                    <p>Decode your biological blueprint to operate with clarity, confidence, and authority.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="animate-reveal fade-left">
              <div className="program-split-image-card">
                <img src="/sandip_pala_harshvardhan.jpg" alt="Sandip Pala Strategic Brain Alignment Strategist" className="program-split-image" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Section 4: 12 Core Business Brain Segments */}
      <div className="program-section">
        <div className="container">
          <div className="program-section-header animate-reveal fade-up">
            <span className="program-section-tag">Comprehensive Framework</span>
            <h2 className="program-section-title">The 12 Core Business Brain Segments</h2>
            <p className="program-section-subtitle">
              Our program systematically develops the 12 neural segments that govern business growth, leadership clarity, and financial performance.
            </p>
          </div>

          <div className="program-cards-grid program-cards-grid--4col">
            {businessSegments.map((seg, i) => (
              <div key={seg.title} className="program-card-box animate-reveal fade-up">
                <div className="program-card-box__icon">
                  <BrainIcon size={22} color="#F59E0B" />
                </div>
                <h3 className="program-card-box__title" style={{ fontSize: '1.05rem' }}>{seg.title}</h3>
                <p className="program-card-box__desc" style={{ fontSize: '0.85rem' }}>{seg.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Banner */}
      <div className="program-cta-banner animate-reveal zoom-in">
        <h2>Transform Your Business Through Scientific Leadership</h2>
        <p>
          Ready to move from trial and error to predictable, brain-aligned business scaling? Book your 1-on-1 Business Strategy Session now.
        </p>
        <div className="program-cta-banner__actions">
          <button className="btn-primary" onClick={() => openBookingModal('business')}>
            <RocketIcon size={20} />
            <span>Book Consultation Now</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default BusinessDevelopmentPage;
