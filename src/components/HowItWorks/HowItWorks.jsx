import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FingerprintIcon, BrainIcon, BarChartIcon, UsersIcon, RocketIcon, GraduationCapIcon, BriefcaseIcon } from '../Icons';
import './HowItWorks.css';

const steps = [
  {
    num: '01',
    icon: <FingerprintIcon size={26} color="#F59E0B" />,
    title: 'Fingerprint Scanning',
    desc: 'Our certified experts conduct a quick and painless fingerprint scan using advanced Dermatoglyphics (DMI) technology.',
    color: '#F59E0B',
    anim: 'fade-up delay-100',
  },
  {
    num: '02',
    icon: <BrainIcon size={26} color="#7C3AED" />,
    title: 'Brain Intelligence Analysis',
    desc: 'Our software analyzes your fingerprint patterns to map your unique brain structure, revealing dominant intelligence types and learning styles.',
    color: '#7C3AED',
    anim: 'fade-up delay-200',
  },
  {
    num: '03',
    icon: <BarChartIcon size={26} color="#3B82F6" />,
    title: 'Detailed Report Generation',
    desc: 'Receive a comprehensive printed Brain Mapping Report covering strengths, potential, personality traits, and recommended development areas.',
    color: '#3B82F6',
    anim: 'fade-up delay-300',
  },
  {
    num: '04',
    icon: <UsersIcon size={26} color="#FF6B35" />,
    title: 'Personalized Counselling',
    desc: 'A one-on-one expert counselling session to explain your report, answer questions, and create a customized growth & development plan.',
    color: '#FF6B35',
    anim: 'fade-up delay-400',
  },
  {
    num: '05',
    icon: <BarChartIcon size={26} color="#0D9488" />,
    title: 'Ongoing Coaching & Review',
    desc: 'Regular follow-up sessions, habit coaching, and monthly/quarterly progress reviews to ensure lasting transformation.',
    color: '#0D9488',
    anim: 'fade-up delay-500',
  },
];

const targetAudience = [
  {
    title: 'Parents',
    subtitle: 'For Children & Family Growth',
    desc: "Understand your child's brain map & natural learning style.",
    badge: 'Parents & Kids',
    badgeColor: 'rgba(236, 72, 153, 0.15)',
    badgeTextColor: '#EC4899',
    icon: <UsersIcon size={24} color="#EC4899" />,
    anim: 'fade-left delay-100',
  },
  {
    title: 'Students',
    subtitle: 'For Stream & Career Clarity',
    desc: 'Choose the right career path before wasting years.',
    badge: 'Students & Career',
    badgeColor: 'rgba(96, 165, 250, 0.15)',
    badgeTextColor: '#60A5FA',
    icon: <GraduationCapIcon size={24} color="#60A5FA" />,
    anim: 'fade-up delay-200',
  },
  {
    title: 'Professionals',
    subtitle: 'For Business & Leadership',
    desc: 'Discover why you are burnt out or stagnant.',
    badge: 'Leaders & Business',
    badgeColor: 'rgba(255, 107, 53, 0.15)',
    badgeTextColor: '#FF6B35',
    icon: <BriefcaseIcon size={24} color="#FF6B35" />,
    anim: 'fade-right delay-300',
  },
];

const HowItWorks = ({ showTargetAudience }) => {
  const location = useLocation();
  const shouldShowAudience = showTargetAudience !== undefined 
    ? showTargetAudience 
    : location.pathname === '/how-it-works';

  return (
    <section className="how-it-works section" id="how-it-works">
      <div className="glow-orb" style={{ width: '500px', height: '500px', background: 'radial-gradient(circle, rgba(124,58,237,0.1), transparent)', top: '50%', left: '50%', transform: 'translate(-50%,-50%)' }}></div>

      <div className="container">
        <div className="section-header animate-reveal fade-up">
          <div className="section-badge">
            <RocketIcon size={14} color="#F59E0B" />
            <span>The Process</span>
          </div>
          <h2 className="section-title">
            How Brain Mapping <span className="gradient-text-gold">Works</span>
          </h2>
          <div className="divider"></div>
          <p className="section-subtitle">
            A simple, scientific, and life-changing 5-step journey to discover your true potential.
          </p>
        </div>

        <div className="how-it-works__steps">
          {steps.map((step, index) => (
            <div key={step.num} className={`how-it-works__step animate-reveal ${step.anim}`} id={`step-${step.num}`}>
              <div className="how-it-works__step-card glass-card">
                <div className="how-it-works__step-num" style={{ color: step.color }}>
                  {step.num}
                </div>
                <div className="how-it-works__step-icon" style={{ background: `${step.color}18`, border: `1px solid ${step.color}30` }}>
                  {step.icon}
                </div>
                <div className="how-it-works__step-content">
                  <h3 className="how-it-works__step-title" style={{ color: step.color }}>
                    {step.title}
                  </h3>
                  <p className="how-it-works__step-desc">{step.desc}</p>
                </div>
              </div>

              {/* Connector Line */}
              {index < steps.length - 1 && (
                <div className="how-it-works__connector">
                  <div className="how-it-works__connector-line" style={{ background: `linear-gradient(180deg, ${step.color}, ${steps[index + 1].color})` }}></div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Who Is This For? Section - Only rendered on /how-it-works page */}
        {shouldShowAudience && (
          <div className="how-it-works__target animate-reveal fade-up" style={{ marginTop: '70px' }}>
            <div className="section-header">
              <div className="section-badge">
                <UsersIcon size={14} color="#F59E0B" />
                <span>Target Audience</span>
              </div>
              <h2 className="section-title">
                Who Is This <span className="gradient-text-gold">For?</span>
              </h2>
              <div className="divider"></div>
              <p className="section-subtitle">
                Brain Mapping provides tailored clarity whether you are guiding a child, choosing a career, or scaling a business.
              </p>
            </div>

            <div className="target-audience__grid">
              {targetAudience.map((item) => (
                <div key={item.title} className={`target-audience__card glass-card animate-reveal ${item.anim}`}>
                  <div className="target-audience__card-header">
                    <div className="target-audience__icon-box">
                      {item.icon}
                    </div>
                    <div
                      className="target-audience__badge"
                      style={{ background: item.badgeColor, color: item.badgeTextColor }}
                    >
                      <span>{item.badge}</span>
                    </div>
                  </div>

                  <h3 className="target-audience__title">{item.title}</h3>
                  <div className="target-audience__subtitle">{item.subtitle}</div>
                  <p className="target-audience__desc">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Bottom CTA Box Component */}
        <div className="how-it-works__cta animate-reveal fade-up">
          <p className="how-it-works__cta-text">
            Ready to discover your brain's hidden potential?
          </p>
          <Link
            to="/programs"
            className="btn-primary"
            id="howitworks-cta"
            onClick={(e) => {
              e.preventDefault();
              window.dispatchEvent(new CustomEvent('open-booking-modal', { detail: { service: 'dmit' } }));
            }}
          >
            <RocketIcon size={18} />
            <span>Start Your Journey</span>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;