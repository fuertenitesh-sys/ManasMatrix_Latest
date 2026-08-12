import React from 'react';
import { Link } from 'react-router-dom';
import { FingerprintIcon, BrainIcon, BarChartIcon, UsersIcon, RocketIcon } from '../Icons';
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

const HowItWorks = () => {
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

        {/* Bottom CTA Box Component */}
        <div className="how-it-works__cta animate-reveal fade-up">
          <p className="how-it-works__cta-text">
            Ready to discover your brain's hidden potential?
          </p>
          <Link to="/programs" className="btn-primary" id="howitworks-cta">
            <RocketIcon size={18} />
            <span>Start Your Journey</span>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;