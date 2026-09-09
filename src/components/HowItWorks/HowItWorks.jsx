import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  FingerprintIcon, 
  BrainIcon, 
  BarChartIcon, 
  UsersIcon, 
  RocketIcon, 
  GraduationCapIcon, 
  BriefcaseIcon,
  DnaIcon,
  CheckIcon,
  AwardIcon,
  StarIcon,
  EyeIcon,
  HeadphonesIcon,
  ActivityIcon,
  ArrowRightIcon
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

const targetAudience = [
  {
    id: 'parents',
    title: 'Parents',
    subtitle: 'For Children & Family Growth',
    desc: "Understand your child's brain map & natural learning style.",
    badge: 'Parents & Kids',
    badgeColor: 'rgba(236, 72, 153, 0.15)',
    badgeTextColor: '#EC4899',
    icon: <UsersIcon size={24} color="#EC4899" />,
    anim: 'fade-left delay-100',
    modalData: {
      title: 'Brain Mapping for Parents',
      subtitle: 'Unlock Your Child’s Biological Blueprint for Academic & Personal Success',
      image: '/about_counseling.jpg',
      imageAlt: 'Parent and child receiving professional counseling session',
      points: [
        {
          title: "Understanding Learning Styles (Visual, Auditory, Kinesthetic)",
          desc: "Every child absorbs information differently. Brain mapping pinpoints whether your child is a Visual, Auditory, or Kinesthetic learner so you can adapt study environments to their natural neurological preference."
        },
        {
          title: "Identifying Natural Strengths vs. Weaknesses",
          desc: "Our 68+ page analysis maps 10 core brain lobes, identifying innate potential in logic, language, visual-spatial, or musical intelligence before academic stress and frustration build up."
        },
        {
          title: "Addressing Common Parent Struggles",
          desc: "Provides clear answers to 'Why does my child study hard but get low marks?', eliminates unhealthy comparisons with siblings or peers, and prevents wasting money on generic tuitions that don't match their learning style."
        },
        {
          title: "Personalized Brain Wiring Outcome",
          desc: "Transition from generic advice to a tailored educational approach based on your child's actual biological brain structure—delivering targeted study techniques, emotional support, and lasting confidence."
        }
      ]
    }
  },
  {
    id: 'students',
    title: 'Students',
    subtitle: 'For Stream & Career Clarity',
    desc: 'Choose the right career path before wasting years.',
    badge: 'Students & Career',
    badgeColor: 'rgba(96, 165, 250, 0.15)',
    badgeTextColor: '#60A5FA',
    icon: <GraduationCapIcon size={24} color="#60A5FA" />,
    anim: 'fade-up delay-200',
    modalData: {
      title: 'Brain Mapping for Students',
      subtitle: 'Scientific Career & Stream Selection Without Peer Pressure or Guesswork',
      image: '/hero_student_vivid.jpg',
      imageAlt: 'Student focused on study and career planning',
      points: [
        {
          title: "Solving the Stream & Career Choice Dilemma",
          desc: "Stop picking Science, Commerce, or Arts based on peer pressure or social trends. Brain mapping scientifically evaluates your innate cognitive capacity to align choices with your true aptitude."
        },
        {
          title: "'I'm Not Lazy, I'm Just Lost'",
          desc: "Studying for hours without retention often stems from studying against your brain's natural processing style. Learn how to study smarter, retain complex topics faster, and eliminate exam anxiety."
        },
        {
          title: "Scientific Analysis vs. Trial & Error",
          desc: "Using Dermatoglyphics (DMIT), receive 68+ pages of objective biological data mapping your IQ, EQ, CQ, and AQ balance to choose high-satisfaction fields where you naturally excel."
        },
        {
          title: "Long-Term Career Fulfillment",
          desc: "Build unwavering career confidence, avoid costly stream switches mid-degree, and create a clear roadmap for competitive exams, university degrees, and future professions."
        }
      ]
    }
  },
  {
    id: 'professionals',
    title: 'Professionals',
    subtitle: 'For Business & Leadership',
    desc: 'Discover why you are burnt out or stagnant.',
    badge: 'Leaders & Business',
    badgeColor: 'rgba(255, 107, 53, 0.15)',
    badgeTextColor: '#FF6B35',
    icon: <BriefcaseIcon size={24} color="#FF6B35" />,
    anim: 'fade-right delay-300',
    modalData: {
      title: 'Brain Mapping for Professionals',
      subtitle: 'Overcome Stagnation & Unlock Your Corporate Zone of Genius',
      image: '/counselor.jpg',
      imageAlt: 'Business professional in executive counseling setting',
      points: [
        {
          title: "Conquering Corporate Burnout",
          desc: "Persistent fatigue and dissatisfaction often result from working in roles that clash with your natural brain type and dominant hemisphere. Identify neurological misalignment before burnout sets in."
        },
        {
          title: "Leadership & Decision-Making Alignment",
          desc: "A mismatch between your natural decision-making style and leadership responsibilities creates tension and career stagnation. Brain mapping realigns your management approach with your innate strengths."
        },
        {
          title: "Discovering Your 'Zone of Genius'",
          desc: "Uncover your top innate intelligences (Interpersonal, Intrapersonal, Logical, Spatial) to transition into high-impact corporate positions, executive leadership, or entrepreneurial ventures."
        },
        {
          title: "Strategic Career Trajectory",
          desc: "Gain crisp clarity for career pivots, optimize team delegation, reduce work stress, and accelerate professional growth grounded in scientific self-awareness."
        }
      ]
    }
  }
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

const HowItWorks = ({ showTargetAudience }) => {
  const location = useLocation();
  const [selectedAudience, setSelectedAudience] = useState(null);

  const shouldShowAudience = showTargetAudience !== undefined 
    ? showTargetAudience 
    : location.pathname === '/how-it-works';

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setSelectedAudience(null);
      }
    };

    if (selectedAudience) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [selectedAudience]);

  return (
    <section className="how-it-works section" id="how-it-works">
      <div className="glow-orb" style={{ width: '500px', height: '500px', background: 'radial-gradient(circle, rgba(124,58,237,0.1), transparent)', top: '50%', left: '50%', transform: 'translate(-50%,-50%)' }}></div>

      <div className="container">
        {/* Section Header */}
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
        {shouldShowAudience && (
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

            {/* 3. Who Is This For? */}
            <div className="how-it-works__target animate-reveal fade-up" style={{ marginTop: '80px' }}>
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
                  Brain Mapping provides tailored clarity whether you are guiding a child, choosing a career, or scaling a business. Click any category for a detailed guide.
                </p>
              </div>

              <div className="target-audience__grid">
                {targetAudience.map((item) => (
                  <div 
                    key={item.id} 
                    className={`target-audience__card target-audience__card--clickable glass-card animate-reveal ${item.anim}`}
                    onClick={() => setSelectedAudience(item)}
                    role="button"
                    tabIndex={0}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter' || e.key === ' ') {
                        e.preventDefault();
                        setSelectedAudience(item);
                      }
                    }}
                    aria-label={`View detailed guide for ${item.title}`}
                  >
                    <div className="target-audience__card-header">
                      <div className="target-audience__icon-box">{item.icon}</div>
                      <div className="target-audience__badge" style={{ background: item.badgeColor, color: item.badgeTextColor }}>
                        <span>{item.badge}</span>
                      </div>
                    </div>
                    <h3 className="target-audience__title">{item.title}</h3>
                    <div className="target-audience__subtitle">{item.subtitle}</div>
                    <p className="target-audience__desc">{item.desc}</p>

                    <div className="target-audience__click-hint" style={{ color: item.badgeTextColor }}>
                      <span>Click to view detailed guide</span>
                      <ArrowRightIcon size={14} color={item.badgeTextColor} />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* 4. Learning Styles Section */}
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

            {/* 5. What You Get (Deliverables Recap) */}
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

      {/* Target Audience Detail Modal Overlay */}
      {selectedAudience && (
        <div 
          className="audience-modal-overlay" 
          onClick={() => setSelectedAudience(null)}
          role="dialog"
          aria-modal="true"
          aria-labelledby="audience-modal-title"
        >
          <div 
            className="audience-modal-container glass-card"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button 
              className="audience-modal-close"
              onClick={() => setSelectedAudience(null)}
              aria-label="Close modal"
            >
              ✕
            </button>

            {/* Modal Header */}
            <div className="audience-modal-header">
              <div 
                className="target-audience__badge" 
                style={{ background: selectedAudience.badgeColor, color: selectedAudience.badgeTextColor, marginBottom: '10px' }}
              >
                <span>{selectedAudience.badge}</span>
              </div>
              <h3 id="audience-modal-title" className="audience-modal-title">
                {selectedAudience.modalData.title}
              </h3>
              <p className="audience-modal-subtitle">
                {selectedAudience.modalData.subtitle}
              </p>
            </div>

            {/* Modal Body Grid */}
            <div className="audience-modal-body">
              {/* Left Column: Image */}
              <div className="audience-modal-img-col">
                <div className="audience-modal-img-wrapper">
                  <img 
                    src={selectedAudience.modalData.image} 
                    alt={selectedAudience.modalData.imageAlt}
                    className="audience-modal-img"
                  />
                  <div className="audience-modal-img-caption">
                    <span>Scientific Brain Mapping Assessment</span>
                  </div>
                </div>
              </div>

              {/* Right Column: Points */}
              <div className="audience-modal-content-col">
                <div className="audience-modal-points">
                  {selectedAudience.modalData.points.map((pt, index) => (
                    <div key={index} className="audience-modal-point">
                      <div className="audience-modal-point-icon" style={{ color: selectedAudience.badgeTextColor }}>
                        <CheckIcon size={16} color={selectedAudience.badgeTextColor} />
                      </div>
                      <div className="audience-modal-point-text">
                        <h4>{pt.title}</h4>
                        <p>{pt.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="audience-modal-footer">
              <button
                className="btn-primary audience-modal-action-btn"
                onClick={() => {
                  setSelectedAudience(null);
                  window.dispatchEvent(new CustomEvent('open-booking-modal', { detail: { service: 'dmit' } }));
                }}
              >
                <RocketIcon size={18} />
                <span>Book Discovery Consultation</span>
              </button>
              <button
                className="audience-modal-secondary-btn"
                onClick={() => setSelectedAudience(null)}
              >
                Close View
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default HowItWorks;