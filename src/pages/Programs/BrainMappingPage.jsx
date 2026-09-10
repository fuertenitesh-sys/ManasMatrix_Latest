import React from 'react';
import { 
  BrainIcon, 
  FingerprintIcon, 
  DnaIcon, 
  AwardIcon, 
  CheckIcon, 
  RocketIcon, 
  UsersIcon, 
  EyeIcon, 
  HeadphonesIcon, 
  ActivityIcon,
  BarChartIcon,
  StarIcon
} from '../../components/Icons';
import '../../components/Programs/ProgramDetail.css';

const BrainMappingPage = () => {
  const openBookingModal = (service = 'dmit') => {
    window.dispatchEvent(new CustomEvent('open-booking-modal', { detail: { service } }));
  };

  const researchStats = [
    { num: '88.3%', label: 'Students Experiencing High Academic Stress' },
    { num: '41.7%', label: 'Students Showing Signs of Depressive Symptoms' },
    { num: '68+', label: 'Pages of In-Depth Biometric Intelligence Blueprint' },
    { num: '100%', label: 'Scientific Lifetime Validity (Ridge Patterns Never Change)' }
  ];

  const scientificPillars = [
    {
      title: 'Embryology Science',
      desc: 'Skin ridge patterns form in the womb between the 13th and 21st week of pregnancy, developing alongside the cerebral cortex of the brain.',
      icon: <DnaIcon size={24} color="#F59E0B" />,
      badge: 'Fetal Development'
    },
    {
      title: 'Neuroscience & 10 Lobes',
      desc: 'Your 10 fingers directly correspond to 10 specific lobes & compartments of the brain, providing a biological blueprint of innate potential.',
      icon: <BrainIcon size={24} color="#60A5FA" />,
      badge: 'Cerebral Cortex'
    },
    {
      title: 'Psychology & Behavior',
      desc: 'Decodes innate behavioral tendencies, emotional responses, and psychological drivers rooted in neural pathways.',
      icon: <UsersIcon size={24} color="#EC4899" />,
      badge: 'Behavioral Traits'
    },
    {
      title: 'Genetics & Inheritance',
      desc: 'Biometric fingerprint patterns are unique inherited genetic markers that remain unchanged for your entire lifetime.',
      icon: <AwardIcon size={24} color="#10B981" />,
      badge: 'Biological Data'
    },
    {
      title: 'Multiple Intelligence Theory',
      desc: 'Based on Prof. Howard Gardner’s 8-dimensional intelligence model to evaluate potential beyond traditional school marks.',
      icon: <StarIcon size={24} color="#C084FC" />,
      badge: '8D Blueprint'
    }
  ];

  const discTypes = [
    {
      name: 'Dominance (D) — Eagle',
      color: '#EF4444',
      desc: 'Direct, decisive, results-driven problem solver who thrives under challenge and independent leadership.'
    },
    {
      name: 'Influence (I) — Peacock',
      color: '#F59E0B',
      desc: 'Enthusiastic, communicative, social spark who excels in public speaking, motivation, and teamwork.'
    },
    {
      name: 'Steadiness (S) — Dove',
      color: '#10B981',
      desc: 'Patient, loyal, empathetic stabilizer who thrives in calm environments and cooperative long-term roles.'
    },
    {
      name: 'Conscientiousness (C) — Owl',
      color: '#3B82F6',
      desc: 'Detail-oriented, analytical quality seeker who values precision, systematic data, and structured logic.'
    }
  ];

  const learningStyles = [
    {
      title: 'Visual Learner',
      tagline: 'Learning by Seeing',
      color: '#60A5FA',
      icon: <EyeIcon size={24} color="#60A5FA" />,
      desc: 'Thrives on diagrams, mind maps, color-coded notes, and visual cues. Absorbs complex ideas quickly when presented visually.'
    },
    {
      title: 'Auditory Learner',
      tagline: 'Learning by Hearing',
      color: '#F59E0B',
      icon: <HeadphonesIcon size={24} color="#F59E0B" />,
      desc: 'Absorbs information best through lectures, verbal discussions, listening to explanations, and vocal repetition.'
    },
    {
      title: 'Kinesthetic Learner',
      tagline: 'Learning by Doing',
      color: '#10B981',
      icon: <ActivityIcon size={24} color="#10B981" />,
      desc: 'Excels through hands-on practice, physical interaction, role-playing, movement, and real-world application.'
    }
  ];

  const packageIncludes = [
    {
      title: 'Non-Invasive Biometric Scanning',
      desc: 'High-precision 10-fingerprint scan conducted by certified experts using advanced Dermatoglyphics technology.'
    },
    {
      title: 'Full 68+ Page Printed Report',
      desc: 'In-depth diagnostic breakdown of 10 brain lobes, 8 multiple intelligences, and 4 quotients (IQ, EQ, CQ, AQ).'
    },
    {
      title: '1-on-1 Discovery Consultation',
      desc: 'Private guidance session with Sandip Pala & certified brain mapping experts in Rajkot to create your growth plan.'
    },
    {
      title: 'Lifetime Validity Data',
      desc: 'Your biological fingerprint ridge patterns never change — your report is valid for your entire lifetime.'
    }
  ];

  return (
    <div className="program-page container">
      {/* Hero Section */}
      <div className="program-hero">
        <div className="program-hero__grid">
          <div className="animate-reveal fade-up">
            <div className="program-hero__badge">
              <BrainIcon size={14} color="#F59E0B" />
              <span>Biometric Cognitive Analysis</span>
            </div>
            <h1 className="program-hero__title">
              Brain Mapping (DMIT) <br />
              <span className="gradient-text-gold">Decode Your Biological Blueprint</span>
            </h1>
            <p className="program-hero__subtitle">
              "Know yourself: You are already a genius. I'm just here to give you the map to prove it." Stop guessing. Start mapping your innate potential with scientific Dermatoglyphics technology.
            </p>
            <div className="program-hero__actions">
              <button className="btn-primary" onClick={() => openBookingModal('dmit')}>
                <RocketIcon size={18} />
                <span>Book Brain Mapping Session</span>
              </button>
              <a href="#science-section" className="btn-secondary" style={{ padding: '12px 24px', borderRadius: '30px', textDecoration: 'none', color: '#fff', border: '1px solid rgba(255,255,255,0.2)' }}>
                <span>Explore the Science ↓</span>
              </a>
            </div>
          </div>

          <div className="program-hero__image-wrapper animate-reveal fade-left">
            <div className="program-hero__image-card">
              <img src="/prog_brain_mapping.jpg" alt="Brain Mapping DMIT Biometric Scanning" className="program-hero__image" loading="eager" fetchPriority="high" decoding="sync" />
              <div className="program-hero__image-badge">
                <FingerprintIcon size={20} color="#F59E0B" />
                <span>10 Lobe Neural Blueprint • 100% Scientific</span>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Bar */}
        <div className="program-stats-bar animate-reveal fade-up">
          {researchStats.map((st, i) => (
            <div key={i} className="program-stat-item">
              <div className="program-stat-num">{st.num}</div>
              <div className="program-stat-label">{st.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Section 1: The Core Problem & Academic Reality */}
      <div className="program-section program-section--dark">
        <div className="container">
          <div className="program-section-header animate-reveal fade-up">
            <span className="program-section-tag">Understanding The Crisis</span>
            <h2 className="program-section-title">The Real Problem with Generic Education & Pressure</h2>
            <p className="program-section-subtitle">
              Why do 90% of students struggle unnecessarily despite hard work? When expectations clash with biological brain wiring, stress and burnout are inevitable.
            </p>
          </div>

          <div className="program-cards-grid">
            <div className="program-card-box animate-reveal fade-up delay-100">
              <div className="program-card-box__icon">
                <UsersIcon size={24} color="#EF4444" />
              </div>
              <h3 className="program-card-box__title">The Student's Identity Crisis</h3>
              <p className="program-card-box__desc">
                "I'm not lazy, I'm just lost." Studying 8 hours a day with zero retention happens when studying against your brain's natural processing style.
              </p>
            </div>

            <div className="program-card-box animate-reveal fade-up delay-200">
              <div className="program-card-box__icon">
                <BarChartIcon size={24} color="#F59E0B" />
              </div>
              <h3 className="program-card-box__title">The Parent's Silent Struggle</h3>
              <p className="program-card-box__desc">
                Spending thousands on coaching centers that don't work, suffering from the "Comparison Curse", and choosing careers based on "scope" rather than soul.
              </p>
            </div>

            <div className="program-card-box animate-reveal fade-up delay-300">
              <div className="program-card-box__icon">
                <BrainIcon size={24} color="#3B82F6" />
              </div>
              <h3 className="program-card-box__title">IQ vs. Multiple Intelligences</h3>
              <p className="program-card-box__desc">
                Traditional IQ tests measure only 25% of intelligence (Logic & Language). Brain mapping decodes all 8 dimensions needed for real-life success.
              </p>
            </div>
          </div>

          <div className="program-highlight-box animate-reveal zoom-in">
            <p className="program-highlight-text">
              "Everyone is a genius. But if you judge a fish by its ability to climb a tree, it will live its whole life believing it is stupid."
            </p>
            <div className="program-highlight-author">— Albert Einstein</div>
          </div>
        </div>
      </div>

      {/* Section 2: 5 Scientific Pillars */}
      <div className="program-section" id="science-section">
        <div className="container">
          <div className="program-section-header animate-reveal fade-up">
            <span className="program-section-tag">Backed By Science</span>
            <h2 className="program-section-title">Grounded in 5 Validated Scientific Fields</h2>
            <p className="program-section-subtitle">
              Brain Mapping is not guesswork or mood-dependent testing. It is a biological assessment backed by decades of neuroscience and genetics research.
            </p>
          </div>

          <div className="program-cards-grid program-cards-grid--3col">
            {scientificPillars.map((pil, idx) => (
              <div key={pil.title} className={`program-card-box animate-reveal fade-up delay-${(idx + 1) * 100}`}>
                <div className="program-card-box__icon">{pil.icon}</div>
                <div style={{ fontSize: '0.75rem', color: 'var(--color-gold)', fontWeight: '700', textTransform: 'uppercase' }}>{pil.badge}</div>
                <h3 className="program-card-box__title">{pil.title}</h3>
                <p className="program-card-box__desc">{pil.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Section 3: Frameworks (DISC & Learning Styles) */}
      <div className="program-section program-section--dark">
        <div className="container">
          <div className="program-section-header animate-reveal fade-up">
            <span className="program-section-tag">Psychological & Cognitive Models</span>
            <h2 className="program-section-title">Decoding Behavioral & Learning Modalities</h2>
          </div>

          <div className="program-split-grid">
            <div className="animate-reveal fade-right">
              <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.6rem', marginBottom: '20px', color: 'var(--color-gold)' }}>
                DISC Behavioral Personality Profile
              </h3>
              <p style={{ color: 'var(--color-text-secondary)', marginBottom: '24px', lineHeight: '1.6' }}>
                Based on Dr. William Marston's 1928 behavioral research, mapping your natural communication and problem-solving style:
              </p>
              <div className="program-checklist">
                {discTypes.map((dt, i) => (
                  <div key={i} className="program-checklist-item">
                    <div className="program-checklist-icon" style={{ background: `${dt.color}20`, color: dt.color }}>✓</div>
                    <div className="program-checklist-text">
                      <h4 style={{ color: dt.color }}>{dt.name}</h4>
                      <p>{dt.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="animate-reveal fade-left">
              <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.6rem', marginBottom: '20px', color: 'var(--color-gold)' }}>
                3 Primary Learning Input Channels
              </h3>
              <p style={{ color: 'var(--color-text-secondary)', marginBottom: '24px', lineHeight: '1.6' }}>
                Knowing your child's innate input modality saves up to 70% of study time and eliminates homework stress:
              </p>
              <div className="program-checklist">
                {learningStyles.map((ls, i) => (
                  <div key={i} className="program-checklist-item">
                    <div className="program-checklist-icon" style={{ background: `${ls.color}20` }}>{ls.icon}</div>
                    <div className="program-checklist-text">
                      <h4 style={{ color: ls.color }}>{ls.title} ({ls.tagline})</h4>
                      <p>{ls.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Section 4: What's Included */}
      <div className="program-section">
        <div className="container">
          <div className="program-section-header animate-reveal fade-up">
            <span className="program-section-tag">Complete Package</span>
            <h2 className="program-section-title">What You Receive in Your Brain Mapping Session</h2>
          </div>

          <div className="program-cards-grid program-cards-grid--2col">
            {packageIncludes.map((pkg, idx) => (
              <div key={pkg.title} className="program-card-box animate-reveal fade-up">
                <div className="program-card-box__icon">
                  <CheckIcon size={24} color="#F59E0B" />
                </div>
                <h3 className="program-card-box__title">{pkg.title}</h3>
                <p className="program-card-box__desc">{pkg.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Banner */}
      <div className="program-cta-banner animate-reveal zoom-in">
        <h2>Don't Leave Your Future to Chance</h2>
        <p>
          Stop fighting your nature. Start following your biological brain map. Book your personal 1-on-1 Brain Mapping Discovery Consultation today.
        </p>
        <div className="program-cta-banner__actions">
          <button className="btn-primary" onClick={() => openBookingModal('dmit')}>
            <RocketIcon size={20} />
            <span>Book Consultation Now</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default BrainMappingPage;
