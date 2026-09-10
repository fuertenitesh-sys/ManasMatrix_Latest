import React from 'react';
import { Link } from 'react-router-dom';
import CTABanner from '../components/CTABanner/CTABanner';
import { 
  BrainIcon, 
  DnaIcon, 
  BarChartIcon, 
  UsersIcon, 
  CheckIcon, 
  AwardIcon, 
  RocketIcon, 
  StarIcon,
  BriefcaseIcon 
} from '../components/Icons';
import '../components/About/About.css';

const AboutPage = () => {
  const pillars = [
    {
      icon: <DnaIcon size={24} color="#F59E0B" />,
      title: "Biological Blueprint",
      desc: "Fingerprint ridge patterns develop in the womb between the 13th and 21st week alongside the cerebral cortex, forming a permanent biological blueprint."
    },
    {
      icon: <BrainIcon size={24} color="#60A5FA" />,
      title: "10-Lobe Brain Mapping",
      desc: "Decodes left vs. right hemisphere dominance and maps 10 specific brain lobes to identify innate cognitive strengths and potential."
    },
    {
      icon: <BarChartIcon size={24} color="#C084FC" />,
      title: "68+ Page Diagnostic Report",
      desc: "Delivers a printed scientific report evaluating 8 multiple intelligences, learning styles (Visual, Auditory, Kinesthetic), and 4 key quotients (IQ, EQ, CQ, AQ)."
    },
    {
      icon: <AwardIcon size={24} color="#10B981" />,
      title: "Lifetime Actionable Guidance",
      desc: "Biological fingerprint data never changes. Your custom report provides a lifetime roadmap for parenting, education, and career growth."
    }
  ];

  return (
    <div style={{ paddingTop: '120px' }}>
      {/* 1. Page Header */}
      <div className="page-header container">
        <div className="section-badge">🏢 Who We Are</div>
        <h1 className="section-title">
          About <span className="gradient-text-gold">MANAS MATRIX</span>
        </h1>
        <div className="divider"></div>
        <p className="section-subtitle">
          Discover our vision, technology, and commitment to transforming families & business leaders in Rajkot.
        </p>
      </div>

      <div className="container">
        {/* 2. Company Overview & Founding Story */}
        <div className="about__grid about-page__story">
          {/* Left Column: Story Content */}
          <div className="about__content animate-reveal fade-right">
            <div className="section-badge">
              <DnaIcon size={14} color="#F59E0B" />
              <span>Our Founding Story</span>
            </div>
            <h2 className="section-title" style={{ textAlign: 'left', marginBottom: '16px' }}>
              Pioneering Scientific Brain Intelligence in <span className="gradient-text-gold">Rajkot</span>
            </h2>

            <p className="about__text">
              <strong>What is ManasMatrix?</strong> MANAS MATRIX (GrowUp Business Services) is a premier cognitive intelligence and development organization headquartered in Rajkot, Gujarat. We specialize in Dermatoglyphics Multiple Intelligence Testing (DMIT), brain lobe distribution mapping, and executive leadership alignment.
            </p>
            <p className="about__text" style={{ marginTop: '12px' }}>
              <strong>Founding Background:</strong> Established over 5 years ago by Strategic Brain-Alignment Strategist Sandip Pala, ManasMatrix was founded to eliminate trial-and-error decision making in parenting, education, and business scaling. Having worked closely with top business mentors like Dr. Vivek Bindra and Harshvardhan Jain, Sandip Pala pioneered a biological, neuroscience-backed framework that replaces guesswork with objective clarity.
            </p>
            <p className="about__text" style={{ marginTop: '12px' }}>
              <strong>Our Mission:</strong> To empower individuals, parents, students, and corporate leaders to operate from their biological "Zone of Genius"—providing a clear, scientific user manual for lifelong confidence and excellence.
            </p>
          </div>

          {/* Right Column: Visual Showcase Card */}
          <div className="about__visual animate-reveal fade-left">
            <div className="about__visual-card glass-card">
              <div className="about__visual-img-wrapper">
                <img src="/sandip_pala_dmi.jpg" alt="Sandip Pala - DMI Brain Analysis Technology" className="about__visual-showcase-img" />
                <div className="about__visual-overlay"></div>
                <div className="about__visual-badge">
                  <BrainIcon size={18} color="#F59E0B" />
                  <span>DMI Brain Analysis Technology</span>
                </div>
              </div>

              <div className="about__visual-inner">
                <div className="about__logo-box">
                  <img src="/logo_brain_icon.png" alt="MANAS MATRIX Logo Icon" className="about__logo-img" />
                </div>
                <h3 className="about__visual-title">MANAS MATRIX</h3>
                <p className="about__visual-sub">GrowUp Business Services • Rajkot</p>

                <div className="about__visual-stats">
                  <div className="about__visual-stat">
                    <span className="about__visual-stat-num">500+</span>
                    <span className="about__visual-stat-label">Happy Families</span>
                  </div>
                  <div className="about__visual-stat">
                    <span className="about__visual-stat-num">98%</span>
                    <span className="about__visual-stat-label">Satisfaction Rate</span>
                  </div>
                  <div className="about__visual-stat">
                    <span className="about__visual-stat-num">5+</span>
                    <span className="about__visual-stat-label">Years in Rajkot</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 3. Founder Spotlight Section */}
        <div className="about-page__bio-grid animate-reveal fade-up">
          <div className="about-page__bio-img-card glass-card">
            <img src="/sandip_pala_harshvardhan.jpg" alt="Sandip Pala Strategic Brain Alignment Strategist" className="about-page__bio-img" />
          </div>

          <div className="about__content">
            <div className="section-badge">
              <BrainIcon size={14} color="#F59E0B" />
              <span>Founder & Lead Strategist</span>
            </div>

            <h2 className="section-title" style={{ textAlign: 'left', marginBottom: '12px' }}>
              Meet <span className="gradient-text-gold">Sandip Pala</span>
            </h2>

            <p className="about__text">
              Sandip Pala is a Strategic Brain-Alignment and Development Strategist dedicated to building high-performance executive personalities and empowering families. Having worked closely alongside top-tier business coaches like Dr. Vivek Bindra and Harshvardhan Jain, he has mastered high-impact frameworks to help entrepreneurs move from "trial and error" to scientific scaling.
            </p>
            <p className="about__text" style={{ marginTop: '12px' }}>
              His unique edge lies in merging traditional business management with Brain-Based Cognitive Analysis. By identifying the biological "Zone of Genius" within a child, parent, leader, or team, he provides a clear "User Manual" for personal and professional success.
            </p>

            <blockquote className="about__quote">
              "I believe that once you truly know yourself, you can finally operate with the confidence and excellence you were born for. Stop guessing and start leading with absolute clarity."
            </blockquote>

            <div className="about__services-list">
              <span className="about__service-tag">Parenting Counselling</span>
              <span className="about__service-tag">Education Counselling</span>
              <span className="about__service-tag">Relationship Counselling</span>
              <span className="about__service-tag">Family Counselling</span>
              <span className="about__service-tag">Corporate Counselling</span>
              <span className="about__service-tag">Business Counselling</span>
            </div>
          </div>
        </div>

        {/* 4. Company Core Pillars */}
        <div className="about-page__pillars animate-reveal fade-up">
          <div className="section-header">
            <div className="section-badge">
              <StarIcon size={14} color="#F59E0B" />
              <span>Our Methodology</span>
            </div>
            <h2 className="section-title">
              The 4 Pillars of <span className="gradient-text-gold">ManasMatrix</span>
            </h2>
            <div className="divider"></div>
            <p className="section-subtitle">
              Our scientific framework combines biometrics, neuroscience, and strategic mentorship.
            </p>
          </div>

          <div className="about-page__pillars-grid">
            {pillars.map((pillar) => (
              <div key={pillar.title} className="about-page__pillar-card glass-card">
                <div className="about-page__pillar-icon">{pillar.icon}</div>
                <h3 className="about-page__pillar-title">{pillar.title}</h3>
                <p className="about-page__pillar-desc">{pillar.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* 5. Comprehensive Diagnostic Report Showcase */}
        <div className="about__report-showcase animate-reveal fade-up" style={{ marginTop: '80px', marginBottom: '80px' }}>
          <div className="about__report-grid">
            <div className="about__report-text">
              <div className="section-badge">
                <BarChartIcon size={14} color="#F59E0B" />
                <span>Comprehensive Diagnostic Report</span>
              </div>
              <h3 className="section-title" style={{ textAlign: 'left' }}>
                What's Inside Your <span className="gradient-text-gold">Brain Report</span>
              </h3>
              <p className="about__text">
                Our 68+ page printed intelligence report provides detailed insights into 10 brain lobes, 8 multiple intelligences, learning sensitivity, and career alignment for parents, students, and professionals.
              </p>
              <div className="about__report-points">
                <div className="about__report-point">
                  <CheckIcon size={18} color="#F59E0B" />
                  <div><strong>10 Lobe Intelligence Breakdown:</strong> Left vs Right hemisphere brain dominance.</div>
                </div>
                <div className="about__report-point">
                  <CheckIcon size={18} color="#F59E0B" />
                  <div><strong>Learning Style Analysis:</strong> Visual, Auditory, or Kinesthetic preference.</div>
                </div>
                <div className="about__report-point">
                  <CheckIcon size={18} color="#F59E0B" />
                  <div><strong>Quotient Assessment:</strong> IQ, EQ, CQ, and AQ balance evaluation.</div>
                </div>
                <div className="about__report-point">
                  <CheckIcon size={18} color="#F59E0B" />
                  <div><strong>Career & Growth Alignment:</strong> Ideal streams and career paths based on innate brain strengths.</div>
                </div>
              </div>
            </div>

            <div className="about__report-img-wrapper">
              <div className="about__report-img-card glass-card">
                <img src="/brain_report.jpg" alt="Manas Matrix Brain Report Sample" className="about__report-img" />
                <div className="about__report-img-badge">
                  <span style={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
                    <BarChartIcon size={14} color="#F59E0B" />
                    <span>1000+ Printed Reports Generated in Rajkot</span>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 6. CTA Banner */}
      <CTABanner />
    </div>
  );
};

export default AboutPage;
