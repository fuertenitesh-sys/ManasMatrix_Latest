import React from 'react';
import { 
  UsersIcon, 
  BuildingIcon, 
  CheckIcon, 
  RocketIcon, 
  StarIcon,
  BrainIcon,
  AwardIcon,
  BarChartIcon
} from '../../components/Icons';
import '../../components/Programs/ProgramDetail.css';

const TeamBuildingPage = () => {
  const openBookingModal = (service = 'corporate') => {
    window.dispatchEvent(new CustomEvent('open-booking-modal', { detail: { service } }));
  };

  const teamFrictions = [
    {
      title: "Work Without Ownership",
      desc: "Employees work strictly to fulfill minimum hours without taking personal responsibility or accountability for final outcomes."
    },
    {
      title: "Poor Cross-Department Communication",
      desc: "Inter-departmental conflicts, siloing, and misunderstandings stall project delivery and lower overall organizational morale."
    },
    {
      title: "Low Motivation & Engagement",
      desc: "Reduced workplace energy, disengagement, and declining productivity due to lack of purpose and skill-role alignment."
    },
    {
      title: "The Leadership Gap",
      desc: "Middle management and staff depend too heavily on senior executives for routine decisions instead of exercising initiative."
    }
  ];

  const developmentModules = [
    {
      title: "Problem Solving & Decision Making",
      desc: "Employees learn critical thinking, structured root-cause analysis, and practical problem-solving instead of escalating issues."
    },
    {
      title: "Productivity & Time Management",
      desc: "Master prioritization frameworks, focus cycles, and daily planning systems for maximum output without burnout."
    },
    {
      title: "Customer Service Excellence",
      desc: "Train teams in customer psychology, active listening, handling complaints effectively, and building long-term loyalty."
    }
  ];

  const activityLearning = [
    {
      title: "Team Challenge Activities",
      desc: "Hands-on collaborative challenges that build coordination, trust, and cross-functional alignment."
    },
    {
      title: "Problem Solving Games",
      desc: "Interactive scenarios that develop creative innovation, rapid trial, and critical thinking under time constraints."
    },
    {
      title: "Leadership Simulations",
      desc: "Simulated business environments training employees to take initiative, delegate, and manage group dynamics."
    },
    {
      title: "Communication Role Plays",
      desc: "Real-world scenario practice to improve workplace dialogue, active listening, and conflict resolution."
    },
    {
      title: "Trust Building Exercises",
      desc: "Experiential activities designed to break down barriers, strengthen team bonds, and foster empathy."
    }
  ];

  const orgBenefits = [
    { title: "Better Teamwork", desc: "Improved collaboration and seamless communication across departments." },
    { title: "Higher Motivation", desc: "Engaged, driven employees aligned with organizational goals." },
    { title: "Boosted Productivity", desc: "Streamlined work processes, faster execution, and higher output." },
    { title: "Stronger Internal Leadership", desc: "A robust internal culture of proactive problem solvers and leaders." },
    { title: "Reduced Conflicts", desc: "Drastic reduction in office friction, politics, and misunderstandings." },
    { title: "More Responsibility", desc: "Staff take genuine ownership of goals, deadlines, and customer satisfaction." }
  ];

  return (
    <div className="program-page container">
      {/* Hero Section */}
      <div className="program-hero">
        <div className="program-hero__grid">
          <div className="animate-reveal fade-up">
            <div className="program-hero__badge">
              <UsersIcon size={14} color="#F59E0B" />
              <span>Corporate Team Transformations</span>
            </div>
            <h1 className="program-hero__title">
              Team Building & Employee <br />
              <span className="gradient-text-gold">Development Program</span>
            </h1>
            <p className="program-hero__subtitle">
              "Train the Mind. Transform the Team." Many businesses struggle not due to lack of market opportunities, but because of lack of team alignment and internal leadership. Build a high-performing organization through brain-based learning and activity-based training.
            </p>
            <div className="program-hero__actions">
              <button className="btn-primary" onClick={() => openBookingModal('corporate')}>
                <RocketIcon size={18} />
                <span>Request Team Training Workshop</span>
              </button>
              <a href="#frictions-section" className="btn-secondary" style={{ padding: '12px 24px', borderRadius: '30px', textDecoration: 'none', color: '#fff', border: '1px solid rgba(255,255,255,0.2)' }}>
                <span>Explore Program ↓</span>
              </a>
            </div>
          </div>

          <div className="program-hero__image-wrapper animate-reveal fade-left">
            <div className="program-hero__image-card">
              <img src="/prog_team_building.jpg" alt="Team Building & Employee Development Workshop" className="program-hero__image" loading="eager" fetchPriority="high" decoding="sync" />
              <div className="program-hero__image-badge">
                <BuildingIcon size={20} color="#F59E0B" />
                <span>Activity-Based Training • On-Site & Off-Site</span>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Bar */}
        <div className="program-stats-bar animate-reveal fade-up">
          <div className="program-stat-item">
            <div className="program-stat-num">100%</div>
            <div className="program-stat-label">Activity-Based Learning</div>
          </div>
          <div className="program-stat-item">
            <div className="program-stat-num">6</div>
            <div className="program-stat-label">Core Organizational Benefits</div>
          </div>
          <div className="program-stat-item">
            <div className="program-stat-num">Half / Full Day</div>
            <div className="program-stat-label">Flexible Training Formats</div>
          </div>
          <div className="program-stat-item">
            <div className="program-stat-num">On / Off-Site</div>
            <div className="program-stat-label">Custom Corporate Delivery</div>
          </div>
        </div>
      </div>

      {/* Section 1: Why Team Development Matters */}
      <div className="program-section program-section--dark" id="frictions-section">
        <div className="container">
          <div className="program-section-header animate-reveal fade-up">
            <span className="program-section-tag">Organizational Reality</span>
            <h2 className="program-section-title">Why Team Development Matters</h2>
            <p className="program-section-subtitle">
              Great businesses are built by great brains. When employees develop the right mindset, skills, and collaboration, organizations achieve sustainable growth.
            </p>
          </div>

          <div className="program-cards-grid program-cards-grid--2col">
            {teamFrictions.map((fric, idx) => (
              <div key={fric.title} className="program-card-box animate-reveal fade-up">
                <div className="program-card-box__icon">
                  <UsersIcon size={24} color="#EF4444" />
                </div>
                <h3 className="program-card-box__title">{fric.title}</h3>
                <p className="program-card-box__desc">{fric.desc}</p>
              </div>
            ))}
          </div>

          <div className="program-highlight-box animate-reveal zoom-in">
            <p className="program-highlight-text">
              "Great businesses are built by great Brains. Train the Mind. Transform the Team."
            </p>
            <div className="program-highlight-author">— ManasMatrix Corporate Mission</div>
          </div>
        </div>
      </div>

      {/* Section 2: Core Development Modules */}
      <div className="program-section">
        <div className="container">
          <div className="program-section-header animate-reveal fade-up">
            <span className="program-section-tag">Core Development Modules</span>
            <h2 className="program-section-title">Targeted Skill Building for Employees & Managers</h2>
          </div>

          <div className="program-cards-grid program-cards-grid--3col">
            {developmentModules.map((mod, idx) => (
              <div key={mod.title} className={`program-card-box animate-reveal fade-up delay-${(idx + 1) * 100}`}>
                <div className="program-card-box__icon">
                  <BarChartIcon size={24} color="#F59E0B" />
                </div>
                <h3 className="program-card-box__title">{mod.title}</h3>
                <p className="program-card-box__desc">{mod.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Section 3: Activity-Based Learning */}
      <div className="program-section program-section--dark">
        <div className="container">
          <div className="program-section-header animate-reveal fade-up">
            <span className="program-section-tag">Experiential Learning</span>
            <h2 className="program-section-title">Practical, Memorable Activity-Based Learning</h2>
            <p className="program-section-subtitle">
              We replace boring lectures with interactive, high-engagement activities that instill practical teamwork and leadership habits.
            </p>
          </div>

          <div className="program-cards-grid program-cards-grid--3col">
            {activityLearning.map((act, i) => (
              <div key={act.title} className="program-card-box animate-reveal fade-up">
                <div className="program-card-box__icon">
                  <BrainIcon size={24} color="#60A5FA" />
                </div>
                <h3 className="program-card-box__title">{act.title}</h3>
                <p className="program-card-box__desc">{act.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Section 4: Benefits & Target Audience */}
      <div className="program-section">
        <div className="container">
          <div className="program-section-header animate-reveal fade-up">
            <span className="program-section-tag">Measurable ROI</span>
            <h2 className="program-section-title">Benefits for Your Organization</h2>
          </div>

          <div className="program-cards-grid program-cards-grid--3col">
            {orgBenefits.map((ben, idx) => (
              <div key={ben.title} className="program-card-box animate-reveal fade-up">
                <div className="program-card-box__icon">
                  <CheckIcon size={24} color="#10B981" />
                </div>
                <h3 className="program-card-box__title">{ben.title}</h3>
                <p className="program-card-box__desc">{ben.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Section 5: Program Formats */}
      <div className="program-section program-section--dark">
        <div className="container">
          <div className="program-split-grid">
            <div className="animate-reveal fade-right">
              <span className="program-section-tag">Flexible Delivery</span>
              <h2 className="program-section-title" style={{ textAlign: 'left', marginBottom: '20px' }}>
                Who Should Attend & Formats
              </h2>
              
              <h4 style={{ color: 'var(--color-gold)', fontSize: '1.1rem', marginBottom: '10px' }}>Ideal For:</h4>
              <ul style={{ color: 'var(--color-text-secondary)', paddingLeft: '20px', lineHeight: '1.8', marginBottom: '24px' }}>
                <li>MSME Companies & Scaling Enterprises</li>
                <li>Corporate Teams & Executive Boards</li>
                <li>Factory Staff & Operations Teams</li>
                <li>Sales & Customer Support Teams</li>
                <li>Managers, Supervisors & Team Leads</li>
                <li>Startups Building Core Team Culture</li>
              </ul>

              <h4 style={{ color: 'var(--color-gold)', fontSize: '1.1rem', marginBottom: '10px' }}>Program Formats:</h4>
              <ul style={{ color: 'var(--color-text-secondary)', paddingLeft: '20px', lineHeight: '1.8' }}>
                <li>Half-Day Workshop (4 Hours)</li>
                <li>Full-Day Training Program (8 Hours)</li>
                <li>2-Day Intensive Corporate Retreat</li>
                <li>Customized Corporate Training (On-Site or Off-Site)</li>
              </ul>
            </div>

            <div className="animate-reveal fade-left">
              <div className="program-split-image-card">
                <img src="/about_counseling.jpg" alt="Corporate Team Workshop Formats" className="program-split-image" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Banner */}
      <div className="program-cta-banner animate-reveal zoom-in">
        <h2>Transform Your Team's Productivity & Culture</h2>
        <p>
          Book a customized team building and employee development workshop for your company today.
        </p>
        <div className="program-cta-banner__actions">
          <button className="btn-primary" onClick={() => openBookingModal('corporate')}>
            <RocketIcon size={20} />
            <span>Request Corporate Workshop</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default TeamBuildingPage;
