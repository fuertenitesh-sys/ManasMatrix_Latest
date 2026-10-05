import React from 'react';
import { Link } from 'react-router-dom';
import {
  BrainIcon,
  FingerprintIcon,
  UsersIcon,
  BarChartIcon,
  RocketIcon,
  CheckIcon,
  AwardIcon,
} from '../../components/Icons';
import '../../components/Programs/ProgramDetail.css';

const reportOptions = [
  ['DISC Profiling', 'A focused profile of behavioral style and communication preferences.'],
  ['Basic Brain Mapping', 'A simple first report for foundational self-awareness.'],
  ['Advanced Brain Mapping', 'A deeper personal profile covering strengths, preferences and development areas.'],
  ['Advanced for Professionals & Business Owners', 'Work, leadership, communication and decision-making insights.'],
  ['Children & Students', 'Learning style, strengths, stream selection and career direction.'],
  ['Family Combo & Family Counseling', 'Individual reports followed by a family counseling session.'],
];

const BrainMappingPage = () => {
  const openBookingModal = () => {
    window.dispatchEvent(new CustomEvent('open-booking-modal', { detail: { service: 'dmit' } }));
  };

  return (
    <div className="program-page container">
      <div className="program-hero">
        <div className="program-hero__grid">
          <div className="animate-reveal fade-up">
            <div className="program-hero__badge">
              <FingerprintIcon size={14} color="#F59E0B" />
              <span>Brain Mapping Report (BMR)</span>
            </div>
            <h1 className="program-hero__title">
              Brain Mapping Reports for <span className="gradient-text-gold">Better Self-Understanding</span>
            </h1>
            <p className="program-hero__subtitle">
              A Brain Mapping Report shows your strengths, behavioral style, learning or working style, communication pattern and development areas in one clear report. It is a self-awareness and guidance tool, not a medical or clinical test.
            </p>
            <div className="program-hero__actions">
              <a href="#report-options" className="btn-secondary" style={{ padding: '12px 24px', borderRadius: '30px', textDecoration: 'none', color: '#fff', border: '1px solid rgba(255,255,255,0.2)' }}>
                <span>Compare Reports</span>
              </a>
              <button className="btn-primary" onClick={openBookingModal}>
                <RocketIcon size={18} />
                <span>Book a Consultation</span>
              </button>
            </div>
          </div>
          <div className="program-hero__image-wrapper animate-reveal fade-left">
            <div className="program-hero__image-card">
              <img src="/prog_brain_mapping.jpg" alt="Brain Mapping Report and fingerprint assessment" className="program-hero__image" loading="eager" fetchPriority="high" decoding="sync" />
              <div className="program-hero__image-badge">
                <BrainIcon size={20} color="#F59E0B" />
                <span>Strengths • Style • Development Areas</span>
              </div>
            </div>
          </div>
        </div>
        <div className="program-stats-bar animate-reveal fade-up">
          {['DISC Profiling', 'Basic Brain Mapping', 'Advanced Brain Mapping', 'Children, Professionals & Families'].map((label) => (
            <div key={label} className="program-stat-item">
              <div className="program-stat-num"><FingerprintIcon size={22} color="#F59E0B" /></div>
              <div className="program-stat-label">{label}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="program-section program-section--dark" id="report-options">
        <div className="container">
          <div className="program-section-header animate-reveal fade-up">
            <span className="program-section-tag">Choose the Right Level and Purpose</span>
            <h2 className="program-section-title">Which Brain Mapping Report Is Right for You?</h2>
            <p className="program-section-subtitle">Tell us what you want to understand and we will help you choose a suitable report.</p>
          </div>
          <div className="program-cards-grid">
            {reportOptions.map(([title, desc]) => (
              <div key={title} className="program-card-box animate-reveal fade-up">
                <div className="program-card-box__icon"><BarChartIcon size={24} color="#F59E0B" /></div>
                <h3 className="program-card-box__title">{title}</h3>
                <p className="program-card-box__desc">{desc}</p>
              </div>
            ))}
          </div>
          <div className="program-comparison-wrap animate-reveal fade-up">
            <h3 className="program-section-title" style={{fontSize:'1.5rem', marginTop:'48px'}}>Which Brain Mapping Report Is Right for You?</h3>
            <div className="program-comparison-scroll">
              <table className="program-comparison-table">
                <thead><tr><th>Service</th><th>Best For</th><th>Main Focus</th><th>Next Step</th></tr></thead>
                <tbody>
                  <tr><td>DISC Profiling</td><td>Individuals and teams</td><td>Behaviour and communication</td><td>Explore DISC</td></tr>
                  <tr><td>Basic Brain Mapping</td><td>First-time users</td><td>Foundational self-awareness</td><td>Explore Basic</td></tr>
                  <tr><td>Advanced Brain Mapping</td><td>Anyone wanting depth</td><td>Detailed personal insight</td><td>Explore Advanced</td></tr>
                  <tr><td>Advanced Professional</td><td>Professionals and business owners</td><td>Leadership and work patterns</td><td>Explore Professional</td></tr>
                  <tr><td>Children & Students</td><td>Parents, children and students</td><td>Learning style, stream and career direction</td><td>Explore Children & Students</td></tr>
                  <tr><td>Family Combo & Counseling</td><td>Families</td><td>Differences and communication</td><td><Link to="/programs/family-counseling">Explore Family Combo</Link></td></tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

      <div className="program-section">
        <div className="container">
          <div className="program-section-header animate-reveal fade-up">
            <span className="program-section-tag">More Than a Report</span>
            <h2 className="program-section-title">What You Receive</h2>
          </div>
          <div className="program-cards-grid program-cards-grid--2col">
            <div className="program-card-box animate-reveal fade-up">
              <div className="program-card-box__icon"><BrainIcon size={24} color="#60A5FA" /></div>
              <h3 className="program-card-box__title">A clear, easy-to-read report</h3>
              <p className="program-card-box__desc">A profile of strengths, behavioral style, learning or working pattern and development areas.</p>
            </div>
            <div className="program-card-box animate-reveal fade-up">
              <div className="program-card-box__icon"><UsersIcon size={24} color="#C084FC" /></div>
              <h3 className="program-card-box__title">One-to-one counseling</h3>
              <p className="program-card-box__desc">A counselor explains your report in simple language and helps you identify practical next steps.</p>
            </div>
            <div className="program-card-box animate-reveal fade-up">
              <div className="program-card-box__icon"><CheckIcon size={24} color="#10B981" /></div>
              <h3 className="program-card-box__title">A practical action plan</h3>
              <p className="program-card-box__desc">Use your insights as a starting point for thoughtful decisions and development.</p>
            </div>
            <div className="program-card-box animate-reveal fade-up">
              <div className="program-card-box__icon"><AwardIcon size={24} color="#F59E0B" /></div>
              <h3 className="program-card-box__title">Use insights responsibly</h3>
              <p className="program-card-box__desc">Reports support reflection. They should not be the only basis for medical, educational, hiring, firing, promotion or other high-impact decisions.</p>
            </div>
          </div>
          <div className="program-highlight-box animate-reveal zoom-in">
            <p className="program-highlight-text">
              A Brain Mapping Report is not a medical brain scan, diagnosis or guarantee of any academic, career or business outcome.
            </p>
            <div className="program-highlight-author">Manas Matrix • Rajkot</div>
          </div>
          <div className="program-hero__actions" style={{ justifyContent: 'center', marginTop: '32px' }}>
            <Link to="/services" className="btn-secondary">Explore Our Services</Link>
            <button className="btn-primary" onClick={openBookingModal}>Book a Consultation</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BrainMappingPage;
