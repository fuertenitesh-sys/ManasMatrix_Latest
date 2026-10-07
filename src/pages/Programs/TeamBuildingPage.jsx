import React from 'react';
import { Link } from 'react-router-dom';
import {
  BuildingIcon,
  BarChartIcon,
  UsersIcon,
  CheckIcon,
  RocketIcon,
  LockIcon,
} from '../../components/Icons';
import '../../components/Programs/ProgramDetail.css';

const TeamBuildingPage = () => {
  const services = [
    'Team Brain Mapping & Summary Dashboard — brain mapping for your team with one summary dashboard.',
    'Employee Brain Mapping Progress Report — individual employee development tracking over time.',
  ];
  const supports = [
    'Team understanding and communication awareness',
    'Strength identification and employee development planning',
    'Better manager–employee conversations',
    'Collaboration across departments and progress tracking',
  ];

  return (
    <div className="program-page container">
      <div className="program-hero">
        <div className="program-hero__grid">
          <div className="animate-reveal fade-up">
            <div className="program-hero__badge">
              <BuildingIcon size={14} color="#F59E0B" />
              <span>For Organizations & HR</span>
            </div>
            <h1 className="program-hero__title">
              HR Matrix — Understand Your People. <span className="gradient-text-gold">Build Stronger Teams.</span>
            </h1>
            <p className="program-hero__subtitle">
              Brain mapping for your whole team, with individual reports and one simple summary dashboard for HR and management.
            </p>
            <div className="program-hero__actions">
              <Link to="/contact?service=team#contact-form" className="btn-primary" style={{ textDecoration: 'none' }}>
                <RocketIcon size={18} />
                <span>Request an HR Matrix Proposal</span>
              </Link>
              <a href="#hr-matrix-details" className="btn-secondary" style={{ padding: '12px 24px', borderRadius: '30px', textDecoration: 'none', color: '#fff', border: '1px solid rgba(255,255,255,0.2)' }}>
                <span>How HR Matrix Works</span>
              </a>
            </div>
          </div>
          <div className="program-hero__image-wrapper animate-reveal fade-left">
            <div className="program-hero__image-card">
              <img src="/prog_team_building.webp" alt="HR Matrix team brain mapping and development" className="program-hero__image" loading="eager" fetchPriority="high" decoding="sync" />
              <div className="program-hero__image-badge">
                <UsersIcon size={20} color="#F59E0B" />
                <span>Individual Reports • Team Summary Dashboard</span>
              </div>
            </div>
          </div>
        </div>
        <div className="program-stats-bar animate-reveal fade-up">
          {['Team understanding', 'Communication awareness', 'Development priorities', 'Progress tracking'].map((label) => (
            <div key={label} className="program-stat-item">
              <div className="program-stat-num"><UsersIcon size={22} color="#F59E0B" /></div>
              <div className="program-stat-label">{label}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="program-section program-section--dark" id="hr-matrix-details">
        <div className="container">
          <div className="program-section-header animate-reveal fade-up">
            <span className="program-section-tag">What You Get</span>
            <h2 className="program-section-title">A Clear View of Your Team</h2>
            <p className="program-section-subtitle">
              Each participating employee receives an individual Brain Mapping Report. Management receives a point-to-point summary dashboard of team strengths, working styles, communication patterns and development areas.
            </p>
          </div>
          <div className="program-cards-grid program-cards-grid--2col">
            {services.map((item) => (
              <div key={item} className="program-card-box animate-reveal fade-up">
                <div className="program-card-box__icon"><BarChartIcon size={24} color="#60A5FA" /></div>
                <p className="program-card-box__desc">{item}</p>
                {item.startsWith('Employee Brain Mapping') && <Link to="/programs/employee-progress-report" className="btn-secondary" style={{display:'inline-flex', marginTop:'14px', width:'fit-content'}}>Explore Progress Report</Link>}
              </div>
            ))}
            {supports.map((item) => (
              <div key={item} className="program-card-box animate-reveal fade-up">
                <div className="program-card-box__icon"><CheckIcon size={24} color="#10B981" /></div>
                <p className="program-card-box__desc">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="program-section">
        <div className="container">
          <div className="program-section-header animate-reveal fade-up">
            <span className="program-section-tag">Responsible Use</span>
            <h2 className="program-section-title">Better Conversations, Not Automatic Decisions</h2>
          </div>
          <div className="program-cards-grid program-cards-grid--2col">
            <div className="program-card-box animate-reveal fade-up">
              <div className="program-card-box__icon"><LockIcon size={24} color="#F59E0B" /></div>
              <p className="program-card-box__desc">Before the program, we agree in writing on employee consent, purpose, report access, confidentiality and data handling.</p>
            </div>
            <div className="program-card-box animate-reveal fade-up">
              <div className="program-card-box__icon"><BuildingIcon size={24} color="#60A5FA" /></div>
              <p className="program-card-box__desc">Insights support development discussions, coaching priorities and team planning. They should not be the only basis for hiring, firing, promotion, performance ratings or job suitability.</p>
            </div>
          </div>
          <div className="program-highlight-box animate-reveal zoom-in">
            <p className="program-highlight-text">
              HR Matrix works for any team size. Scope, reports and dashboard focus are planned around your goals.
            </p>
            <div className="program-highlight-author">Individual employee reports are shared according to written agreement and consent.</div>
          </div>
          <div className="program-hero__actions" style={{ justifyContent: 'center', marginTop: '32px' }}>
            <Link to="/contact?service=team#contact-form" className="btn-primary" style={{ textDecoration: 'none' }}>
              <RocketIcon size={18} />
              <span>Request an HR Matrix Proposal</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamBuildingPage;
