import React from 'react';
import CTABanner from '../components/CTABanner/CTABanner';
import {
  BrainIcon,
  FingerprintIcon,
  BarChartIcon,
  UsersIcon,
  CheckIcon,
  AwardIcon,
  StarIcon,
} from '../components/Icons';
import '../components/About/About.css';

const AboutPage = () => {
  const approach = [
    {
      icon: <BrainIcon size={24} color="#F59E0B" />,
      title: 'Start with your goal',
      desc: 'Understand your goal and strengths before recommending a service.',
    },
    {
      icon: <FingerprintIcon size={24} color="#60A5FA" />,
      title: 'Structured assessment',
      desc: 'Use a structured assessment and an organized report to support self-awareness.',
    },
    {
      icon: <UsersIcon size={24} color="#C084FC" />,
      title: 'Clear explanation',
      desc: 'Explain every finding in simple language, focusing on strengths as well as development areas.',
    },
    {
      icon: <CheckIcon size={24} color="#10B981" />,
      title: 'Practical next steps',
      desc: 'Create an action plan you can start using, while respecting privacy and personal context.',
    },
  ];

  return (
    <div style={{ paddingTop: '120px' }}>
      <div className="page-header container">
        <div className="section-badge"><BrainIcon size={14} color="#F59E0B" /> About Us</div>
        <h1 className="section-title">
          Understanding People. <span className="gradient-text-gold">Supporting Meaningful Growth.</span>
        </h1>
        <div className="divider"></div>
        <p className="section-subtitle">
          Manas Matrix brings Brain Mapping and personal counseling together for individuals, families, business owners and organizations.
        </p>
      </div>

      <div className="container">
        <div className="about__grid about-page__story">
          <div className="about__content animate-reveal fade-right">
            <div className="section-badge">
              <StarIcon size={14} color="#F59E0B" />
              <span>Our Purpose</span>
            </div>
            <h2 className="section-title" style={{ textAlign: 'left', marginBottom: '16px' }}>
              Clarity Before <span className="gradient-text-gold">Change</span>
            </h2>
            <p className="about__text">
              We help people understand their natural strengths, behavioral style, learning or working style and communication pattern — then turn that understanding into practical next steps.
            </p>
            <p className="about__text" style={{ marginTop: '12px' }}>
              People grow faster when they understand themselves first, and then each other. We make personal and professional insight easier to understand, discuss and use.
            </p>
            <p className="about__text" style={{ marginTop: '12px' }}>
              We use reports as a guide for self-awareness — never as a fixed label and never as a medical diagnosis.
            </p>
          </div>

          <div className="about__visual animate-reveal fade-left">
            <div className="about__visual-card">
              <div className="about__visual-img-wrapper">
                <img src="/sandip_pala_dmi.jpg" alt="Sandip Pala, founder of Manas Matrix" className="about__visual-showcase-img" />
              </div>
            </div>
          </div>
        </div>

        <div className="about-page__bio-grid animate-reveal fade-up">
          <div className="about-page__bio-img-card glass-card">
            <img src="/sandip_pala_harshvardhan.jpg" alt="Sandip Pala, founder of Manas Matrix" className="about-page__bio-img" />
          </div>
          <div className="about__content">
            <div className="section-badge">
              <UsersIcon size={14} color="#F59E0B" />
              <span>Founder & Brain-Based Performance Coach</span>
            </div>
            <h2 className="section-title" style={{ textAlign: 'left', marginBottom: '12px' }}>
              Guided by <span className="gradient-text-gold">Sandip Pala</span>
            </h2>
            <p className="about__text">
              Sandip Pala is the founder of Manas Matrix and a Brain-Based Performance Coach. He personally guides individuals, families and business owners through their Brain Mapping Reports and helps them turn insight into practical action for the future.
            </p>
            <div className="about__services-list">
              <span className="about__service-tag">Children & Students</span>
              <span className="about__service-tag">Adults & Families</span>
              <span className="about__service-tag">Business Owners</span>
              <span className="about__service-tag">Organizations</span>
            </div>
          </div>
        </div>

        <div className="about-page__pillars animate-reveal fade-up">
          <div className="section-header">
            <div className="section-badge">
              <AwardIcon size={14} color="#F59E0B" />
              <span>Our Approach</span>
            </div>
            <h2 className="section-title">
              From Insight to <span className="gradient-text-gold">Practical Development</span>
            </h2>
            <div className="divider"></div>
            <p className="section-subtitle">
              A human-centered process that supports reflection and development.
            </p>
          </div>
          <div className="about-page__pillars-grid">
            {approach.map((item) => (
              <div key={item.title} className="about-page__pillar-card glass-card">
                <div className="about-page__pillar-icon">{item.icon}</div>
                <h3 className="about-page__pillar-title">{item.title}</h3>
                <p className="about-page__pillar-desc">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="about__report-showcase animate-reveal fade-up" style={{ marginTop: '80px', marginBottom: '80px' }}>
          <div className="about__report-grid">
            <div className="about__report-text">
              <div className="section-badge">
                <BarChartIcon size={14} color="#F59E0B" />
                <span>Our Services</span>
              </div>
              <h3 className="section-title" style={{ textAlign: 'left' }}>
                One Human-Centered <span className="gradient-text-gold">Approach</span>
              </h3>
              <p className="about__text">
                Brain Mapping Reports, Family Counseling, business owner programs, Manas 360 and HR Matrix support people at different stages and with different goals.
              </p>
              <div className="about__report-points">
                <div className="about__report-point">
                  <CheckIcon size={18} color="#F59E0B" />
                  <div><strong>Brain Mapping Report:</strong> A profile with one-to-one counseling for children, students, adults and professionals.</div>
                </div>
                <div className="about__report-point">
                  <CheckIcon size={18} color="#F59E0B" />
                  <div><strong>Family Counseling:</strong> Individual reports with a family counseling session.</div>
                </div>
                <div className="about__report-point">
                  <CheckIcon size={18} color="#F59E0B" />
                  <div><strong>Business Owner Programs:</strong> Counseling and a structured development program.</div>
                </div>
                <div className="about__report-point">
                  <CheckIcon size={18} color="#F59E0B" />
                  <div><strong>Manas 360 & HR Matrix:</strong> Brain performance development and team brain mapping.</div>
                </div>
              </div>
            </div>
            <div className="about__report-img-wrapper">
              <div className="about__report-img-card glass-card">
                <img src="/brain_report.jpg" alt="Sample Manas Matrix Brain Mapping Report" className="about__report-img" />
                <div className="about__report-img-badge">
                  <span style={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
                    <FingerprintIcon size={14} color="#F59E0B" />
                    <span>Brain Mapping Report (BMR)</span>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <CTABanner />
    </div>
  );
};

export default AboutPage;
