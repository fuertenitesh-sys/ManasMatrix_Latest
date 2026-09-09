import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Footer from '../Footer/Footer';
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
    cardImage: '/parents_hero.jpg',
    fullPageData: {
      categoryBadge: 'Parents & Family Growth',
      heroTitle: "Understand Your Child's Unique Brain Map & Learning Potential",
      heroSubtitle: "Stop guessing and forcing generic study methods. Discover your child's biological cognitive wiring to foster academic excellence, confidence, and long-term success.",
      heroImage: '/parents_hero.jpg',
      problemTitle: "Ending Academic Friction & Tuition Waste",
      problemSubtitle: "Why generic advice fails and how biological brain mapping changes everything for parents.",
      sectionImage: '/parents_learning.jpg',
      problems: [
        {
          title: "Why does my child study hard but get low marks?",
          desc: "Studying against natural brain lobe distribution causes memory blockage and exhaustion. Brain mapping identifies your child's innate processing channels so learning becomes effortless."
        },
        {
          title: "Eliminating Toxic Comparisons",
          desc: "Comparing siblings or classmates creates severe anxiety and self-doubt. Understanding biological brain differences helps parents celebrate individual uniqueness rather than forcing conformity."
        },
        {
          title: "Stopping Wasted Money on Generic Tuitions",
          desc: "Sending children to standard coaching centers without knowing their core learning style leads to trial-and-error spending. Targeted remediation delivers 10x better results with less stress."
        }
      ],
      stylesTitle: "Decoding the 3 Primary Learning Styles",
      stylesSubtitle: "Brain mapping accurately identifies how your child's brain processes and retains information.",
      styles: [
        {
          title: "Visual Learner",
          badge: "Learning by Seeing",
          color: "#60A5FA",
          desc: "Thrives on visual cues, diagrams, color coding, mind maps, and flashcards. Absorbs complex ideas quickly when presented visually."
        },
        {
          title: "Auditory Learner",
          badge: "Learning by Hearing",
          color: "#F59E0B",
          desc: "Absorbs information best through lectures, verbal discussions, listening to explanations, rhymes, and vocal repetition."
        },
        {
          title: "Kinesthetic Learner",
          badge: "Learning by Doing",
          color: "#10B981",
          desc: "Excels through hands-on practice, physical interaction, role-playing, movement, and real-world application."
        }
      ],
      outcomesTitle: "What Brain Mapping Delivers for Your Child",
      outcomes: [
        {
          title: "Personalized Study Environment",
          desc: "Create an optimal home learning setup and study schedule matched to your child's peak attention spans."
        },
        {
          title: "Mapping 10 Core Brain Lobes",
          desc: "Identify innate strengths in mathematics, spatial reasoning, creative arts, or linguistic intelligence."
        },
        {
          title: "Balanced Quotient Assessment",
          desc: "Diagnostic evaluation of IQ, EQ, CQ, and AQ to nurture emotional resilience alongside academic intelligence."
        },
        {
          title: "Lifetime Parent Blueprint",
          desc: "Receive an actionable 68+ page printed report with lifetime biological validity since fingerprint ridge patterns never change."
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
    cardImage: '/students_hero.jpg',
    fullPageData: {
      categoryBadge: 'Students & Career Clarity',
      heroTitle: "Choose the Right Career & Stream Before Wasting Years",
      heroSubtitle: "Stop relying on peer pressure and guesswork. Make critical academic and career choices grounded in scientific brain mapping and your natural biological strengths.",
      heroImage: '/students_hero.jpg',
      problemTitle: "'I'm Not Lazy, I'm Just Lost'",
      problemSubtitle: "Overcoming stream selection confusion and study burnout with scientific precision.",
      sectionImage: '/students_career.jpg',
      problems: [
        {
          title: "Solving the Stream Choice Dilemma (Science, Commerce, Arts)",
          desc: "Choosing a stream based on peer pressure or social trends often leads to frustration and mid-degree switches. Brain mapping evaluates your innate cognitive capacity to align choices with your true aptitude."
        },
        {
          title: "Studying Hard vs. Studying Smart",
          desc: "Studying for hours without retention stems from studying against your brain's natural processing style. Discover how to study smarter in 50% less time with maximum memory retention."
        },
        {
          title: "Scientific Precision Over Guesswork",
          desc: "Using Dermatoglyphics (DMIT), receive 68+ pages of objective biological data mapping your IQ, EQ, CQ, and AQ balance to choose high-satisfaction career paths."
        }
      ],
      stylesTitle: "The 4 Essential Cognitive Quotients",
      stylesSubtitle: "A complete diagnostic breakdown of your inner psychological and problem-solving drivers.",
      styles: [
        {
          title: "IQ (Intelligence Quotient)",
          badge: "Analytical Logic",
          color: "#60A5FA",
          desc: "Evaluates numerical reasoning, spatial visualization, problem-solving speed, and analytical processing power."
        },
        {
          title: "EQ (Emotional Quotient)",
          badge: "Interpersonal Mastery",
          color: "#EC4899",
          desc: "Measures self-awareness, empathy, emotional control, leadership potential, and team collaboration capability."
        },
        {
          title: "CQ & AQ (Creativity & Adversity)",
          badge: "Grit & Innovation",
          color: "#F59E0B",
          desc: "Assesses out-of-the-box creative thinking (CQ) and your ability to overcome stress, exam anxiety, and setbacks (AQ)."
        }
      ],
      outcomesTitle: "Four Transformation Pillars for Students",
      outcomes: [
        {
          title: "Confident Stream Selection",
          desc: "Clear, scientific direction for Class 8-12 students choosing between STEM, Commerce, Arts, or Vocational fields."
        },
        {
          title: "University Major Alignment",
          desc: "Align your degree choices with your top 8 multiple intelligences to excel effortlessly in college."
        },
        {
          title: "Competitive Exam Strategy",
          desc: "Custom revision techniques and time management strategies optimized for your brain's attention curve."
        },
        {
          title: "Zero Career Regret",
          desc: "Build long-term career confidence, high job satisfaction, and a fulfilling lifelong professional trajectory."
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
    cardImage: '/professionals_hero.jpg',
    fullPageData: {
      categoryBadge: 'Leaders & Business Growth',
      heroTitle: "Discover Your 'Zone of Genius' & Eliminate Corporate Burnout",
      heroSubtitle: "Overcome workplace fatigue and career stagnation. Align your leadership style, decision-making, and professional path with your innate biological brain wiring.",
      heroImage: '/professionals_hero.jpg',
      problemTitle: "Aligning Natural Brain Type with Corporate Reality",
      problemSubtitle: "Why career stagnation happens and how brain mapping restores executive energy and growth.",
      sectionImage: '/professionals_genius.jpg',
      problems: [
        {
          title: "Conquering Corporate Burnout",
          desc: "Persistent fatigue and dissatisfaction often result from working in roles that clash with your natural brain type and dominant hemisphere. Identify neurological misalignment before burnout sets in."
        },
        {
          title: "Leadership & Decision-Making Mismatch",
          desc: "A mismatch between your natural decision-making style and workplace responsibilities creates constant tension and career stagnation. Brain mapping realigns your management approach with your innate strengths."
        },
        {
          title: "Discovering Your 'Zone of Genius'",
          desc: "Uncover your top innate intelligences (Interpersonal, Intrapersonal, Logical, Spatial) to transition into high-impact corporate positions, executive leadership, or entrepreneurial ventures."
        }
      ],
      stylesTitle: "Brain Hemisphere Dominance & Executive Function",
      stylesSubtitle: "Understand how your brain makes decisions, processes risk, and leads teams.",
      styles: [
        {
          title: "Left Hemisphere Dominance",
          badge: "Analytical Execution",
          color: "#3B82F6",
          desc: "Excels in logical deduction, systematic data analysis, structured operations, finance, and precise risk calculation."
        },
        {
          title: "Right Hemisphere Dominance",
          badge: "Visionary Strategy",
          color: "#FF6B35",
          desc: "Thrives in creative vision, intuitive decision-making, spatial design, emotional connection, and disruptive innovation."
        },
        {
          title: "Integrated Hemisphere Synergy",
          badge: "Balanced Leadership",
          color: "#10B981",
          desc: "Combines left-brain execution with right-brain strategic intuition for executive decision-making under uncertainty."
        }
      ],
      outcomesTitle: "Executive Growth & Strategic Business Benefits",
      outcomes: [
        {
          title: "Strategic Career Pivots",
          desc: "Clear blueprint for switching job roles, industries, or leadership tracks with maximum confidence and minimal risk."
        },
        {
          title: "Optimized Team Delegation",
          desc: "Understand team member strengths and delegate responsibilities aligned with innate cognitive capabilities."
        },
        {
          title: "Stress & Fatigue Reduction",
          desc: "Structure your daily workflow around your brain's natural focus cycles to boost output without chronic exhaustion."
        },
        {
          title: "Executive Self-Awareness",
          desc: "Gain deep scientific self-awareness to negotiate roles, lead high-stakes negotiations, and achieve work-life balance."
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
  const [heroLoaded, setHeroLoaded] = useState(false);
  const [secLoaded, setSecLoaded] = useState(false);

  const shouldShowAudience = showTargetAudience !== undefined 
    ? showTargetAudience 
    : location.pathname === '/how-it-works';

  // Preload all 6 images on component mount to avoid any load flash
  useEffect(() => {
    targetAudience.forEach((item) => {
      if (item.cardImage) {
        const img = new Image();
        img.src = item.cardImage;
      }
      if (item.fullPageData?.heroImage) {
        const img1 = new Image();
        img1.src = item.fullPageData.heroImage;
      }
      if (item.fullPageData?.sectionImage) {
        const img2 = new Image();
        img2.src = item.fullPageData.sectionImage;
      }
    });
  }, []);

  // Reset image load states on audience change
  useEffect(() => {
    setHeroLoaded(false);
    setSecLoaded(false);
  }, [selectedAudience]);

  // Handle ESC key and scroll lock
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

  // Reset selected audience overlay when route changes
  useEffect(() => {
    setSelectedAudience(null);
  }, [location]);

  // IntersectionObserver for smooth scroll-reveal animations inside fullpage view (repeatable on scroll)
  useEffect(() => {
    if (selectedAudience) {
      const overlay = document.querySelector('.audience-fullpage-overlay');
      if (!overlay) return;

      const observerCallback = (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
          } else {
            entry.target.classList.remove('is-visible');
          }
        });
      };

      const observer = new IntersectionObserver(observerCallback, {
        root: overlay,
        rootMargin: '0px 0px -20px 0px',
        threshold: 0.08,
      });

      const elements = overlay.querySelectorAll('.audience-animate, .animate-reveal');
      elements.forEach((el) => observer.observe(el));

      return () => observer.disconnect();
    }
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
                  Brain Mapping provides tailored clarity whether you are guiding a child, choosing a career, or scaling a business. Click any card below to open the complete full-page guide.
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
                    aria-label={`Explore full detail guide for ${item.title}`}
                  >
                    <div className="target-audience__card-header">
                      <div className="target-audience__icon-box">{item.icon}</div>
                      <div className="target-audience__badge" style={{ background: item.badgeColor, color: item.badgeTextColor }}>
                        <span>{item.badge}</span>
                      </div>
                    </div>

                    {/* Continuous Motion Card Image Frame */}
                    <div className="target-audience__card-media">
                      <div className="target-audience__img-frame">
                        <img 
                          src={item.cardImage} 
                          alt={item.title} 
                          className="target-audience__img" 
                          loading="eager"
                        />
                      </div>
                    </div>

                    <h3 className="target-audience__title">{item.title}</h3>
                    <div className="target-audience__subtitle">{item.subtitle}</div>
                    <p className="target-audience__desc">{item.desc}</p>

                    <div className="target-audience__click-hint" style={{ color: item.badgeTextColor }}>
                      <span>Explore Full Guide</span>
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

      {/* FULL PAGE AUDIENCE DETAIL VIEW (Full Viewport Experience) */}
      {selectedAudience && (
        <div className="audience-fullpage-overlay">
          {/* Sticky Top Navigation Bar */}
          <div className="audience-fullpage-navbar">
            <div className="audience-fullpage-nav-container">
              <button 
                className="audience-fullpage-back-btn"
                onClick={() => setSelectedAudience(null)}
                aria-label="Back to How It Works"
              >
                <span className="back-arrow">←</span>
                <span className="back-btn-full">Back to How It Works</span>
                <span className="back-btn-short">Back</span>
              </button>

              <div 
                className="target-audience__badge" 
                style={{ background: selectedAudience.badgeColor, color: selectedAudience.badgeTextColor }}
              >
                <span>{selectedAudience.fullPageData.categoryBadge}</span>
              </div>

              <button
                className="btn-primary audience-fullpage-nav-cta"
                onClick={() => {
                  setSelectedAudience(null);
                  window.dispatchEvent(new CustomEvent('open-booking-modal', { detail: { service: 'dmit' } }));
                }}
              >
                <RocketIcon size={16} />
                <span>Book Consultation</span>
              </button>
            </div>
          </div>

          {/* Full Page Content Area */}
          <div className="audience-fullpage-content">
            {/* HERO SECTION */}
            <div className="audience-hero-section">
              <div className="audience-hero-container">
                <div className="audience-hero-text audience-animate audience-fade-right">
                  <div 
                    className="audience-hero-badge"
                    style={{ background: selectedAudience.badgeColor, color: selectedAudience.badgeTextColor }}
                  >
                    {selectedAudience.icon}
                    <span>{selectedAudience.fullPageData.categoryBadge}</span>
                  </div>
                  <h1 className="audience-hero-title">{selectedAudience.fullPageData.heroTitle}</h1>
                  <p className="audience-hero-subtitle">{selectedAudience.fullPageData.heroSubtitle}</p>

                  <div className="audience-hero-actions">
                    <button
                      className="btn-primary"
                      onClick={() => {
                        setSelectedAudience(null);
                        window.dispatchEvent(new CustomEvent('open-booking-modal', { detail: { service: 'dmit' } }));
                      }}
                    >
                      <RocketIcon size={18} />
                      <span>Book Free 1-on-1 Discovery Session</span>
                    </button>
                    <button
                      className="audience-secondary-btn"
                      onClick={() => {
                        const elem = document.getElementById('audience-deep-dive');
                        if (elem) elem.scrollIntoView({ behavior: 'smooth' });
                      }}
                    >
                      <span>Explore In-Depth Guide ↓</span>
                    </button>
                  </div>
                </div>

                <div className="audience-hero-media audience-animate audience-fade-left">
                  <div className="audience-hero-img-frame">
                    <img 
                      src={selectedAudience.fullPageData.heroImage} 
                      alt={selectedAudience.fullPageData.heroTitle}
                      className={`audience-hero-img ${heroLoaded ? 'is-loaded' : ''}`}
                      onLoad={() => setHeroLoaded(true)}
                    />
                    <div className="audience-hero-img-overlay">
                      <StarIcon size={18} color="#F59E0B" />
                      <span>Scientific Brain Mapping & Biometric Analysis</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* SECTION 1: CORE PROBLEMS & SOLUTIONS (Side-by-side Layout) */}
            <div className="audience-section section-dark" id="audience-deep-dive">
              <div className="audience-container">
                <div className="audience-section-header audience-animate audience-fade-up">
                  <span className="audience-section-tag" style={{ color: selectedAudience.badgeTextColor }}>
                    Deep Dive Analysis
                  </span>
                  <h2 className="audience-section-title">{selectedAudience.fullPageData.problemTitle}</h2>
                  <p className="audience-section-subtitle">{selectedAudience.fullPageData.problemSubtitle}</p>
                </div>

                <div className="audience-grid-2col">
                  <div className="audience-problems-list">
                    {selectedAudience.fullPageData.problems.map((prob, idx) => (
                      <div 
                        key={idx} 
                        className={`audience-problem-card glass-card audience-animate audience-fade-right delay-${(idx + 1) * 100}`}
                      >
                        <div className="audience-problem-icon-num" style={{ background: `${selectedAudience.badgeTextColor}15`, color: selectedAudience.badgeTextColor }}>
                          0{idx + 1}
                        </div>
                        <div className="audience-problem-content">
                          <h3>{prob.title}</h3>
                          <p>{prob.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="audience-section-image-wrapper audience-animate audience-fade-left">
                    <div className="audience-image-card glass-card">
                      <img 
                        src={selectedAudience.fullPageData.sectionImage} 
                        alt={selectedAudience.fullPageData.problemTitle}
                        className={`audience-section-img ${secLoaded ? 'is-loaded' : ''}`}
                        onLoad={() => setSecLoaded(true)}
                      />
                      <div className="audience-image-caption">
                        <span>Personalized 68+ Page Biometric Intelligence Report</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* SECTION 2: CATEGORY SPECIFIC STYLES / QUOTIENTS */}
            <div className="audience-section">
              <div className="audience-container">
                <div className="audience-section-header text-center audience-animate audience-fade-up">
                  <span className="audience-section-tag" style={{ color: selectedAudience.badgeTextColor }}>
                    Neurological Assessment
                  </span>
                  <h2 className="audience-section-title">{selectedAudience.fullPageData.stylesTitle}</h2>
                  <p className="audience-section-subtitle">{selectedAudience.fullPageData.stylesSubtitle}</p>
                </div>

                <div className="audience-styles-grid">
                  {selectedAudience.fullPageData.styles.map((style, idx) => {
                    const animDir = idx % 3 === 0 ? 'audience-fade-right' : idx % 3 === 1 ? 'audience-fade-up' : 'audience-fade-left';
                    return (
                      <div 
                        key={idx} 
                        className={`audience-style-card glass-card audience-animate ${animDir} delay-${(idx + 1) * 100}`}
                      >
                        <div className="audience-style-badge" style={{ background: `${style.color}20`, color: style.color }}>
                          {style.badge}
                        </div>
                        <h3 style={{ color: style.color }}>{style.title}</h3>
                        <p>{style.desc}</p>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* SECTION 3: KEY OUTCOMES & TRANSFORMATION PILLARS */}
            <div className="audience-section section-dark">
              <div className="audience-container">
                <div className="audience-section-header text-center audience-animate audience-fade-up">
                  <span className="audience-section-tag" style={{ color: selectedAudience.badgeTextColor }}>
                    Proven Outcomes
                  </span>
                  <h2 className="audience-section-title">{selectedAudience.fullPageData.outcomesTitle}</h2>
                </div>

                <div className="audience-outcomes-grid">
                  {selectedAudience.fullPageData.outcomes.map((out, idx) => {
                    const animDir = idx % 2 === 0 ? 'audience-fade-right' : 'audience-fade-left';
                    return (
                      <div 
                        key={idx} 
                        className={`audience-outcome-card glass-card audience-animate ${animDir} delay-${(idx + 1) * 100}`}
                      >
                        <div className="audience-outcome-check">
                          <CheckIcon size={20} color={selectedAudience.badgeTextColor} />
                        </div>
                        <div className="audience-outcome-text">
                          <h4>{out.title}</h4>
                          <p>{out.desc}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* SECTION 4: CALL TO ACTION BANNER */}
            <div className="audience-cta-section">
              <div className="audience-container">
                <div className="audience-cta-box glass-card audience-animate audience-zoom-in">
                  <h2>Take the First Step Toward Scientific Clarity</h2>
                  <p>Book a 1-on-1 private consultation with Sandip Pala & certified brain mapping experts in Rajkot.</p>
                  
                  <div className="audience-cta-buttons">
                    <button
                      className="btn-primary audience-cta-main-btn"
                      onClick={() => {
                        setSelectedAudience(null);
                        window.dispatchEvent(new CustomEvent('open-booking-modal', { detail: { service: 'dmit' } }));
                      }}
                    >
                      <RocketIcon size={20} />
                      <span>Book Your Discovery Consultation</span>
                    </button>

                    <button 
                      className="audience-back-bottom-btn"
                      onClick={() => setSelectedAudience(null)}
                    >
                      <span>← Back to How It Works</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Full Page Footer */}
          <Footer />
        </div>
      )}
    </section>
  );
};

export default HowItWorks;