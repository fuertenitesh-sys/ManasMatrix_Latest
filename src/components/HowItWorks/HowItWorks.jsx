import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  FingerprintIcon, 
  BrainIcon, 
  BarChartIcon, 
  UsersIcon, 
  RocketIcon, 
  DnaIcon,
  AwardIcon,
  StarIcon,
  EyeIcon,
  HeadphonesIcon,
  ActivityIcon
} from '../Icons';
import './HowItWorks.css';

const steps = [
  {
    num: '01',
    icon: <FingerprintIcon size={26} color="#F59E0B" />,
    title: 'Fingerprint Scanning',
    desc: 'Certified experts conduct a quick, painless fingerprint scan using advanced Dermatoglyphics technology.',
    color: '#F59E0B',
    anim: 'fade-up delay-100',
  },
  {
    num: '02',
    icon: <BrainIcon size={26} color="#7C3AED" />,
    title: 'Biometric Analysis',
    desc: 'Your fingerprint patterns are analyzed to map 10 brain lobes & compartments and calculate intelligence distribution.',
    color: '#7C3AED',
    anim: 'fade-up delay-200',
  },
  {
    num: '03',
    icon: <BarChartIcon size={26} color="#3B82F6" />,
    title: 'Report Generation',
    desc: 'A comprehensive 68+ page scientific report is generated covering intelligence breakdown, learning style, and quotient assessment (IQ, EQ, CQ, AQ).',
    color: '#3B82F6',
    anim: 'fade-up delay-300',
  },
  {
    num: '04',
    icon: <UsersIcon size={26} color="#FF6B35" />,
    title: '1-on-1 Discovery Consultation',
    desc: 'A personalized consultation session with certified brain mapping experts to walk through your detailed report findings.',
    color: '#FF6B35',
    anim: 'fade-up delay-400',
  },
  {
    num: '05',
    icon: <AwardIcon size={26} color="#0D9488" />,
    title: 'Personalized Counselling & Remedial Measures',
    desc: 'Actionable guidance to convert weaknesses into strengths, with lifetime validity since biological fingerprint data never changes.',
    color: '#0D9488',
    anim: 'fade-up delay-500',
  },
];

const scienceItems = [
  {
    title: 'Dermatoglyphics Science',
    desc: 'Skin ridge patterns form in the womb between the 13th and 21st week of pregnancy, developing alongside the cerebral cortex of the brain.',
    icon: <DnaIcon size={24} color="#F59E0B" />,
    badge: 'Fetal Science',
    badgeColor: 'rgba(245, 158, 11, 0.15)',
    badgeTextColor: '#F59E0B',
  },
  {
    title: 'The Brain-Finger Connection',
    desc: 'Your 10 fingers directly correspond to 10 specific lobes & compartments of the human brain, providing a biological blueprint of innate potential.',
    icon: <FingerprintIcon size={24} color="#60A5FA" />,
    badge: '10 Lobe Mapping',
    badgeColor: 'rgba(96, 165, 250, 0.15)',
    badgeTextColor: '#60A5FA',
  },
  {
    title: 'Grounded in 5 Scientific Fields',
    desc: 'Validated across Embryology, Neuroscience, Psychology, Genetics, and Howard Gardner’s Multiple Intelligence Theory.',
    icon: <AwardIcon size={24} color="#C084FC" />,
    badge: '5 Disciplines',
    badgeColor: 'rgba(192, 132, 252, 0.15)',
    badgeTextColor: '#C084FC',
  },
  {
    title: 'Left Brain vs Right Brain',
    desc: 'Decodes left-hemisphere analytical & logical skills vs right-hemisphere creative, intuitive, and spatial abilities.',
    icon: <BrainIcon size={24} color="#FF6B35" />,
    badge: 'Hemisphere Dynamics',
    badgeColor: 'rgba(255, 107, 53, 0.15)',
    badgeTextColor: '#FF6B35',
  },
];

const learningStyles = [
  {
    title: 'Visual Learner',
    tagline: 'Learning by Seeing',
    desc: 'Thrives on visual cues, diagrams, charts, mind maps, and color-coded notes to process and retain information quickly.',
    icon: <EyeIcon size={26} color="#60A5FA" />,
    color: '#60A5FA',
  },
  {
    title: 'Auditory Learner',
    tagline: 'Learning by Hearing',
    desc: 'Absorbs information best through lectures, discussions, listening to explanations, and vocal repetition.',
    icon: <HeadphonesIcon size={26} color="#F59E0B" />,
    color: '#F59E0B',
  },
  {
    title: 'Kinesthetic Learner',
    tagline: 'Learning by Doing',
    desc: 'Excels through hands-on practice, physical interaction, movement, role-playing, and real-world application.',
    icon: <ActivityIcon size={26} color="#10B981" />,
    color: '#10B981',
  },
];

const deliverables = [
  {
    title: 'Biometric Scanning & Analysis',
    desc: 'High-precision non-invasive fingerprint scanning conducted by certified professionals.',
    icon: <FingerprintIcon size={24} color="#F59E0B" />,
  },
  {
    title: 'Full 68+ Page Printed Report',
    desc: 'In-depth diagnostic breakdown of 10 brain lobes, 8 multiple intelligences, and 4 quotients (IQ, EQ, CQ, AQ).',
    icon: <BarChartIcon size={24} color="#60A5FA" />,
  },
  {
    title: '1-on-1 Discovery Consultation',
    desc: 'In-depth private guidance session with Sandip Pala & certified brain mapping experts in Rajkot.',
    icon: <UsersIcon size={24} color="#C084FC" />,
  },
  {
    title: 'Lifetime Validity Data',
    desc: 'Your biological fingerprint ridge patterns never change — your report is valid for your entire lifetime.',
    icon: <AwardIcon size={24} color="#10B981" />,
  },
];

const HowItWorks = ({ hideHeader = false }) => {
  const location = useLocation();
  const isStandalonePage = location.pathname === '/how-it-works';

  return (
    <section className="how-it-works section" id="how-it-works">
      <div className="glow-orb" style={{ width: '500px', height: '500px', background: 'radial-gradient(circle, rgba(124,58,237,0.1), transparent)', top: '50%', left: '50%', transform: 'translate(-50%,-50%)' }}></div>

      <div className="container">
        {/* Section Header */}
        {!hideHeader && (
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
              From fingerprint scanning to personalized coaching — a simple, scientific 5-step journey to unlock your full potential.
            </p>
          </div>
        )}

        {/* 1. Full 5-Step Process Timeline */}
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

        {/* Extended Sections - Only rendered when on standalone /how-it-works page */}
        {isStandalonePage && (
          <>
            {/* 2. The Science Behind It */}
            <div className="how-it-works__science animate-reveal fade-up" style={{ marginTop: '80px' }}>
              <div className="section-header">
                <div className="section-badge">
                  <DnaIcon size={14} color="#F59E0B" />
                  <span>Scientific Foundation</span>
                </div>
                <h2 className="section-title">
                  The Science <span className="gradient-text-gold">Behind It</span>
                </h2>
                <div className="divider"></div>
                <p className="section-subtitle">
                  Brain Mapping is not guesswork. It is a biological assessment backed by decades of neuroscience and genetics research.
                </p>
              </div>

              <div className="science__grid">
                {scienceItems.map((item) => (
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

            {/* 3. Learning Styles Section */}
            <div className="how-it-works__learning animate-reveal fade-up" style={{ marginTop: '80px' }}>
              <div className="section-header">
                <div className="section-badge">
                  <BrainIcon size={14} color="#F59E0B" />
                  <span>Cognitive Intelligence</span>
                </div>
                <h2 className="section-title">
                  Discover Your <span className="gradient-text-gold">Learning Style</span>
                </h2>
                <div className="divider"></div>
                <p className="section-subtitle">
                  Knowing whether you process information visually, auditorily, or kinesthetically saves study time and boosts performance.
                </p>
              </div>

              <div className="learning-styles__grid">
                {learningStyles.map((style) => (
                  <div key={style.title} className="learning-style__card glass-card">
                    <div className="learning-style__icon-box" style={{ background: `${style.color}15`, border: `1px solid ${style.color}30` }}>
                      {style.icon}
                    </div>
                    <h3 className="learning-style__title">{style.title}</h3>
                    <div className="learning-style__tagline" style={{ color: style.color }}>{style.tagline}</div>
                    <p className="learning-style__desc">{style.desc}</p>
                  </div>
                ))}
              </div>

              <div className="learning-styles__banner glass-card">
                <StarIcon size={20} color="#F59E0B" />
                <span>Identifying your innate learning sensitivity helps eliminate academic stress and optimizes career efficiency.</span>
              </div>
            </div>

            {/* 4. What You Get (Deliverables Recap) */}
            <div className="how-it-works__deliverables animate-reveal fade-up" style={{ marginTop: '80px' }}>
              <div className="section-header">
                <div className="section-badge">
                  <BarChartIcon size={14} color="#F59E0B" />
                  <span>Key Deliverables</span>
                </div>
                <h2 className="section-title">
                  What You <span className="gradient-text-gold">Receive</span>
                </h2>
                <div className="divider"></div>
                <p className="section-subtitle">
                  Here is what is included in your complete Brain Mapping package with MANAS MATRIX.
                </p>
              </div>

              <div className="deliverables__grid">
                {deliverables.map((d) => (
                  <div key={d.title} className="deliverable__card glass-card">
                    <div className="deliverable__icon-box">{d.icon}</div>
                    <h3 className="deliverable__title">{d.title}</h3>
                    <p className="deliverable__desc">{d.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </>
        )}

        {/* Bottom CTA Box Component (only rendered when not in standalone page view) */}
        {!isStandalonePage && (
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
        )}
      </div>
    </section>
  );
};

export default HowItWorks;