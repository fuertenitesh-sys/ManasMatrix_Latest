import React from 'react';
import { Link } from 'react-router-dom';
import {
  FingerprintIcon,
  GraduationCapIcon,
  HomeIcon,
  BriefcaseIcon,
  BrainIcon,
  BuildingIcon,
} from '../Icons';
import './Services.css';

const services = [
  {
    id: 'brain-mapping-reports',
    icon: <FingerprintIcon size={26} color="#F59E0B" />,
    title: 'Brain Mapping Reports (BMR)',
    desc: 'Understand strengths, behavioral style, learning or working style and development areas. Options are available for children, students, adults, professionals and families.',
    path: '/programs/brain-mapping',
    anim: 'fade-left delay-100',
  },
  // {
  //   id: 'children-students',
  //   icon: <GraduationCapIcon size={26} color="#60A5FA" />,
  //   title: 'Children & Students',
  //   desc: 'Explore learning style, strengths, suitable study methods, stream selection and career direction, with parent involvement where required.',
  //   path: '/programs/child-development',
  //   anim: 'fade-up delay-200',
  // },
  // {
  //   id: 'family-counseling',
  //   icon: <HomeIcon size={26} color="#EC4899" />,
  //   title: 'Family Counseling',
  //   desc: 'Individual Brain Mapping Reports followed by a family counseling session to discuss communication, differences and practical next steps.',
  //   path: '/programs/brain-mapping#report-options',
  //   anim: 'fade-right delay-300',
  // },
  {
    id: 'business-owners',
    icon: <BriefcaseIcon size={26} color="#10B981" />,
    title: 'For Business Owners',
    desc: 'Personalized Business Counseling and a structured Brain-Based Development Program for business owners, founders and leaders.',
    path: '/programs/business-development',
    anim: 'fade-left delay-100',
  },
  {
    id: 'manas-360',
    icon: <BrainIcon size={26} color="#8B5CF6" />,
    title: 'Manas 360 — Brain Performance Program',
    desc: 'A guided program across mind, emotion, learning, behavior and performance, built on the MANAS framework.',
    path: '/programs/manas-360',
    anim: 'fade-up delay-200',
  },
  {
    id: 'hr-matrix',
    icon: <BuildingIcon size={26} color="#FF6B35" />,
    title: 'HR Matrix — Organizations & HR',
    desc: 'Brain mapping for your team, with individual reports and a summary dashboard for HR and management.',
    path: '/programs/team-building',
    anim: 'fade-right delay-300',
  },
];

const Services = ({ hideHeader = false }) => (
  <section className="services section" id="services">
    <div className="glow-orb" style={{ width: '500px', height: '500px', background: 'radial-gradient(circle, rgba(59,130,246,0.1), transparent)', top: '0', right: '0' }}></div>
    <div className="container">
      {!hideHeader && (
        <div className="section-header animate-reveal fade-up">
          <div className="section-badge">
            <BrainIcon size={14} color="#F59E0B" />
            <span>Our Services</span>
          </div>
          <h2 className="section-title">
            One Place to <span className="gradient-text-gold">Understand People Better</span>
          </h2>
          <div className="divider"></div>
          <p className="section-subtitle">Choose the path that matches your goal.</p>
        </div>
      )}

      <div className="services__grid">
        {services.map((service) => (
          <Link
            key={service.id}
            to={service.path}
            className={`services__card glass-card animate-reveal ${service.anim}`}
            id={service.id}
            style={{ textDecoration: 'none', color: 'inherit' }}
          >
            <div className="services__icon">{service.icon}</div>
            <h3 className="services__title">{service.title}</h3>
            <p className="services__desc">{service.desc}</p>
            <div className="services__arrow" aria-hidden="true">→</div>
          </Link>
        ))}
      </div>

      <div className="services__quote animate-reveal zoom-in" style={{ marginTop: '80px' }}>
        <div className="services__quote-mark" aria-hidden="true">"</div>
        <p className="services__quote-text">
          Start with a Brain Mapping Report. Then choose the next step that matches your goal.
        </p>
        <div className="services__quote-author">— MANAS MATRIX</div>
      </div>
    </div>
  </section>
);

export default Services;
