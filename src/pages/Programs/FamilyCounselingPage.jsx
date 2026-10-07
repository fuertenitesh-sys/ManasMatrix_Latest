import React from 'react';
import { Link } from 'react-router-dom';
import { HomeIcon, UsersIcon, CheckIcon, LockIcon, RocketIcon } from '../../components/Icons';
import '../../components/Programs/ProgramDetail.css';

const faq = [
  ['Does every member get a separate report?', 'Yes. Each participating member receives an individual report.'],
  ['Can this resolve family conflict?', 'It helps family members understand each other better, but it cannot guarantee that conflicts will be resolved.'],
  ['Is it suitable for children?', 'Yes, from [4] years onwards, with a parent\'s consent. Confirm the final minimum age before publishing.'],
  ['Will our reports stay private?', 'Yes. Reports are shared only with the family members who took part, and never with anyone else without your consent.'],
];

const FamilyCounselingPage = () => {
  const openBooking = () => window.dispatchEvent(new CustomEvent('open-booking-modal', { detail: { service: 'elite' } }));
  return (
    <div className="program-page container">
      <div className="program-hero">
        <div className="program-hero__grid">
          <div className="animate-reveal fade-up">
            <div className="program-hero__badge"><HomeIcon size={14} color="#F59E0B" /><span>Family Counseling</span></div>
            <h1 className="program-hero__title">Create More Understanding <span className="gradient-text-gold">in Your Family</span></h1>
            <p className="program-hero__subtitle">Family Combo Brain Mapping combines individual Brain Mapping Reports with a family counseling session to help family members understand differences, communication patterns and practical ways to work better together.</p>
            <div className="program-hero__actions">
              <button className="btn-primary" onClick={openBooking}><RocketIcon size={18} /><span>Book Family Counseling</span></button>
              <Link to="/contact" className="btn-secondary">Talk to Our Team</Link>
            </div>
          </div>
          <div className="program-hero__image-wrapper animate-reveal fade-left">
            <div className="program-hero__image-card">
              <img src="/parents_hero.webp" alt="Family counseling and family understanding" className="program-hero__image" />
              <div className="program-hero__image-badge"><UsersIcon size={20} color="#F59E0B" /><span>Understand • Communicate • Grow</span></div>
            </div>
          </div>
        </div>
      </div>

      <div className="program-section program-section--dark">
        <div className="container">
          <div className="program-section-header animate-reveal fade-up"><span className="program-section-tag">Family Combo</span><h2 className="program-section-title">A Shared Starting Point for Better Conversations</h2><p className="program-section-subtitle">The family option is designed around individual insight and a guided conversation together.</p></div>
          <div className="program-cards-grid">
            {[
              ['Up to 5 Members', 'The family combo includes up to five participating family members.'],
              ['Individual Reports', 'Each participating member receives an individual Brain Mapping Report.'],
              ['90-Minute Family Session', 'A guided family counseling conversation focused on understanding and communication.'],
              ['Individual Q&A', 'Space for members to ask questions about their own report and practical next steps.'],
              ['Communication Plan', 'A practical family communication plan to take the discussion into everyday life.'],
              ['Privacy', 'Reports are shared only with participating family members and according to consent.'],
            ].map(([title, desc]) => <div key={title} className="program-card-box animate-reveal fade-up"><div className="program-card-box__icon"><CheckIcon size={24} color="#F59E0B" /></div><h3 className="program-card-box__title">{title}</h3><p className="program-card-box__desc">{desc}</p></div>)}
          </div>
        </div>
      </div>

      <div className="program-section">
        <div className="container">
          <div className="program-section-header animate-reveal fade-up"><span className="program-section-tag">Not Therapy</span><h2 className="program-section-title">Guidance, Not a Substitute for Professional Care</h2></div>
          <div className="program-highlight-box animate-reveal zoom-in"><p className="program-highlight-text">Family Counseling at Manas Matrix is guidance based on Brain Mapping Reports. It is not a substitute for medical care, mental-health treatment or professional family therapy when those are needed.</p><div className="program-highlight-author"><LockIcon size={16} /> Reports are handled with privacy and consent in mind.</div></div>
        </div>
      </div>

      <div className="program-section program-section--dark">
        <div className="container"><div className="program-section-header animate-reveal fade-up"><span className="program-section-tag">FAQ</span><h2 className="program-section-title">Common Questions</h2></div><div className="program-cards-grid">{faq.map(([q,a]) => <div key={q} className="program-card-box animate-reveal fade-up"><h3 className="program-card-box__title">{q}</h3><p className="program-card-box__desc">{a}</p></div>)}</div><div className="program-hero__actions" style={{justifyContent:'center', marginTop:'32px'}}><button className="btn-primary" onClick={openBooking}>Book Family Counseling</button><Link to="/contact" className="btn-secondary">Talk to Our Team</Link></div></div>
      </div>
    </div>
  );
};

export default FamilyCounselingPage;
