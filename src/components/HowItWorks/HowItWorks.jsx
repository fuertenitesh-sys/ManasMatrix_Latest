import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  FingerprintIcon,
  BrainIcon,
  BarChartIcon,
  UsersIcon,
  RocketIcon,
  CheckIcon,
  LockIcon,
  AwardIcon,
} from '../Icons';
import './HowItWorks.css';

const steps = [
  {
    num: '01',
    icon: <UsersIcon size={26} color="#F59E0B" />,
    title: 'Share your goal',
    desc: 'Tell us what you want to understand or improve so we can help you choose a suitable starting point.',
    color: '#F59E0B',
  },
  {
    num: '02',
    icon: <FingerprintIcon size={26} color="#7C3AED" />,
    title: 'Brain mapping assessment',
    desc: 'Complete a painless fingerprint pattern scan at our Rajkot center.',
    color: '#7C3AED',
  },
  {
    num: '03',
    icon: <BarChartIcon size={26} color="#3B82F6" />,
    title: 'Report & counseling',
    desc: 'Receive your Brain Mapping Report and understand it in a one-to-one counseling session.',
    color: '#3B82F6',
  },
  {
    num: '04',
    icon: <RocketIcon size={26} color="#10B981" />,
    title: 'Practical action plan',
    desc: 'Leave with clear next steps for study, career, family, business or your team.',
    color: '#10B981',
  },
];

const reportDetails = [
  {
    title: 'A structured profile',
    desc: 'Your report brings together strengths, behavioral style, learning or working pattern, communication style and development areas.',
    icon: <BrainIcon size={24} color="#F59E0B" />,
    badge: 'Brain Mapping Report',
    badgeColor: 'rgba(245, 158, 11, 0.15)',
    badgeTextColor: '#F59E0B',
  },
  {
    title: 'A stable starting point',
    desc: 'Fingerprint patterns form before birth and stay the same throughout life. They provide a starting point for self-awareness, not a complete judgment of a person.',
    icon: <FingerprintIcon size={24} color="#60A5FA" />,
    badge: 'Fingerprint patterns',
    badgeColor: 'rgba(96, 165, 250, 0.15)',
    badgeTextColor: '#60A5FA',
  },
  {
    title: 'Counseling that connects it to real life',
    desc: 'A counselor explains the findings in simple language and helps you consider them alongside your own experience.',
    icon: <UsersIcon size={24} color="#10B981" />,
    badge: 'One-to-one session',
    badgeColor: 'rgba(16, 185, 129, 0.15)',
    badgeTextColor: '#10B981',
  },
];

const limitations = [
  'Not a medical brain scan. Nothing is attached to your head; there are no needles or machines.',
  'Not a diagnosis of any medical, learning or mental-health condition.',
  'Not a guarantee of marks, admission, career success or business results.',
  'Not a replacement for a doctor, psychologist or therapist when professional care is needed.',
];

const HowItWorks = ({ hideHeader = false }) => {
  const isStandalonePage = useLocation().pathname === '/how-it-works';

  return (
    <section className="how-it-works section" id="how-it-works">
      <div className="glow-orb" style={{ width: '500px', height: '500px', background: 'radial-gradient(circle, rgba(124,58,237,0.1), transparent)', top: '50%', left: '50%', transform: 'translate(-50%,-50%)' }}></div>

      <div className="container">
        {!hideHeader && (
          <div className="section-header animate-reveal fade-up">
            <div className="section-badge">
              <RocketIcon size={14} color="#F59E0B" />
              <span>The Process</span>
            </div>
            <h2 className="section-title">
              Four Simple Steps from <span className="gradient-text-gold">Assessment to Action</span>
            </h2>
            <div className="divider"></div>
            <p className="section-subtitle">
              A simple, painless process — from assessment to a clear action plan.
            </p>
          </div>
        )}

        <div className="how-it-works__steps">
          {steps.map((step, index) => (
            <div key={step.num} className="how-it-works__step animate-reveal fade-up" id={`step-${step.num}`}>
              <div className="how-it-works__step-card glass-card">
                <div className="how-it-works__step-num" style={{ color: step.color }}>{step.num}</div>
                <div className="how-it-works__step-icon" style={{ background: `${step.color}18`, border: `1px solid ${step.color}30` }}>
                  {step.icon}
                </div>
                <div className="how-it-works__step-content">
                  <h3 className="how-it-works__step-title" style={{ color: step.color }}>{step.title}</h3>
                  <p className="how-it-works__step-desc">{step.desc}</p>
                </div>
              </div>
              {index < steps.length - 1 && (
                <div className="how-it-works__connector">
                  <div className="how-it-works__connector-line" style={{ background: `linear-gradient(180deg, ${step.color}, ${steps[index + 1].color})` }}></div>
                </div>
              )}
            </div>
          ))}
        </div>

        {isStandalonePage && (
          <>
            <div className="how-it-works__science animate-reveal fade-up" style={{ marginTop: '80px' }}>
              <div className="section-header">
                <div className="section-badge">
                  <BrainIcon size={14} color="#F59E0B" />
                  <span>About Your Report</span>
                </div>
                <h2 className="section-title">
                  What Is a <span className="gradient-text-gold">Brain Mapping Report?</span>
                </h2>
                <div className="divider"></div>
                <p className="section-subtitle">
                  A profile prepared from a painless fingerprint pattern scan and explained in a personal counseling session.
                </p>
              </div>

              <div className="science__grid">
                {reportDetails.map((item) => (
                  <div key={item.title} className="science__card glass-card">
                    <div className="science__card-header">
                      <div className="science__icon-box">{item.icon}</div>
                      <div className="science__badge" style={{ background: item.badgeColor, color: item.badgeTextColor }}>
                        <span>{item.badge}</span>
                      </div>
                    </div>
                    <h3 className="science__title">{item.title}</h3>
                    <p className="science__desc">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="how-it-works__learning animate-reveal fade-up" style={{ marginTop: '80px' }}>
              <div className="section-header">
                <div className="section-badge">
                  <AwardIcon size={14} color="#F59E0B" />
                  <span>Clear and Honest from the Start</span>
                </div>
                <h2 className="section-title">
                  What Brain Mapping <span className="gradient-text-gold">Is Not</span>
                </h2>
              </div>

              <div className="learning-styles__grid">
                {limitations.map((text, index) => (
                  <div key={text} className="learning-style__card glass-card">
                    <div className="learning-style__icon-box" style={{ background: 'rgba(96, 165, 250, 0.12)', border: '1px solid rgba(96, 165, 250, 0.25)' }}>
                      <CheckIcon size={24} color="#60A5FA" />
                    </div>
                    <h3 className="learning-style__title">Limit {index + 1}</h3>
                    <p className="learning-style__desc">{text}</p>
                  </div>
                ))}
              </div>
              <div className="learning-styles__banner glass-card">
                <LockIcon size={20} color="#F59E0B" />
                <span>Your report is a guide for self-awareness. Use it with counselor guidance and your own real-life experience.</span>
              </div>
            </div>

            <div className="how-it-works__deliverables animate-reveal fade-up" style={{ marginTop: '80px' }}>
              <div className="section-header">
                <div className="section-badge">
                  <UsersIcon size={14} color="#F59E0B" />
                  <span>Care & Privacy</span>
                </div>
                <h2 className="section-title">
                  Safe for Children. <span className="gradient-text-gold">Respectful of Privacy.</span>
                </h2>
              </div>
              <div className="deliverables__grid">
                <div className="deliverable__card glass-card">
                  <div className="deliverable__icon-box"><UsersIcon size={24} color="#F59E0B" /></div>
                  <h3 className="deliverable__title">For anyone under 18</h3>
                  <p className="deliverable__desc">A parent's written consent is required. A parent stays with the child during the scan and joins the counseling session.</p>
                </div>
                <div className="deliverable__card glass-card">
                  <div className="deliverable__icon-box"><LockIcon size={24} color="#60A5FA" /></div>
                  <h3 className="deliverable__title">Your privacy</h3>
                  <p className="deliverable__desc">Fingerprint data and reports are kept confidential and are not shared without your written consent.</p>
                </div>
                <div className="deliverable__card glass-card">
                  <div className="deliverable__icon-box"><BarChartIcon size={24} color="#10B981" /></div>
                  <h3 className="deliverable__title">Report delivery</h3>
                  <p className="deliverable__desc">Your report includes a profile, learning or work guidance and practical suggestions. Delivery timing is confirmed when you book.</p>
                </div>
              </div>
            </div>
          </>
        )}

        {!isStandalonePage && (
          <div className="how-it-works__cta animate-reveal fade-up">
            <p className="how-it-works__cta-text">Ready to choose your starting point?</p>
            <Link
              to="/contact"
              className="btn-primary"
              id="howitworks-cta"
              onClick={(event) => {
                event.preventDefault();
                window.dispatchEvent(new CustomEvent('open-booking-modal', { detail: { service: 'general' } }));
              }}
            >
              <RocketIcon size={18} />
              <span>Book a Consultation</span>
            </Link>
          </div>
        )}
      </div>
    </section>
  );
};

export default HowItWorks;
