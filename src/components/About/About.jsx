import React from 'react';
import { BrainIcon, DnaIcon, BarChartIcon, UsersIcon, CheckIcon } from '../Icons';
import './About.css';

const About = () => {
  return (
    <section className="section about" id="about">
      <div className="container">
        {/* Main About Grid: Left side brand new dedicated showcase image card */}
        <div className="about__grid">
          {/* Left Column: Dedicated New Brain Analysis Showcase Image Card */}
          <div className="about__visual animate-reveal fade-right">
            <div className="about__visual-card glass-card">
              <div className="about__visual-img-wrapper">
                <img src="/about_counseling.jpg" alt="Dedicated Brain Intelligence Counseling Session" className="about__visual-showcase-img" />
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

          {/* Right Column: About Content */}
          <div className="about__content animate-reveal fade-left">
            <div className="section-badge">
              <BrainIcon size={14} color="#F59E0B" />
              <span>About MANAS MATRIX</span>
            </div>

            <h2 className="section-title" style={{ textAlign: 'left', marginBottom: '8px' }}>
              Unlocking Human Potential Through <span className="gradient-text-gold">Brain Intelligence</span>
            </h2>

            <p className="about__text">
              At MANAS MATRIX (GrowUp Business Services), we believe that every individual holds a unique blueprint of intelligence. Operating from Spire, 150 Feet Ring Road, Rajkot, our certified Brain Mapping experts specialize in Dermatoglyphics Multiple Intelligence (DMI) analysis to help children, families, and professionals discover their natural talents, learning styles, and growth pathways.
            </p>

            {/* Specialization Tags */}
            <div className="about__services-list">
              <span className="about__service-tag">Parenting Counselling</span>
              <span className="about__service-tag">Education Counselling</span>
              <span className="about__service-tag">Relationship Counselling</span>
              <span className="about__service-tag">Family Counselling</span>
              <span className="about__service-tag">Corporate Counselling</span>
              <span className="about__service-tag">Business Counselling</span>
            </div>

            {/* Features List with Vector SVG Icons */}
            <div className="about__features">
              <div className="about__feature">
                <div className="about__feature-icon">
                  <DnaIcon size={22} color="#F59E0B" />
                </div>
                <div>
                  <h4 className="about__feature-title">Dermatoglyphics Brain Mapping</h4>
                  <p className="about__feature-desc">Scientific fingerprint analysis to reveal innate brain potential, dominant intelligence, and learning style.</p>
                </div>
              </div>

              <div className="about__feature">
                <div className="about__feature-icon">
                  <BarChartIcon size={22} color="#3B82F6" />
                </div>
                <div>
                  <h4 className="about__feature-title">Personalized Reports</h4>
                  <p className="about__feature-desc">Customized Brain Intelligence Reports tailored for each individual's unique cognitive profile.</p>
                </div>
              </div>

              <div className="about__feature">
                <div className="about__feature-icon">
                  <UsersIcon size={22} color="#FF6B35" />
                </div>
                <div>
                  <h4 className="about__feature-title">Expert Counselling</h4>
                  <p className="about__feature-desc">In-depth guidance sessions with certified brain mapping professionals in Rajkot.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Report Showcase Grid */}
        <div className="about__report-showcase animate-reveal fade-up">
          <div className="about__report-grid">
            <div className="about__report-text">
              <div className="section-badge">
                <BarChartIcon size={14} color="#F59E0B" />
                <span>Comprehensive Diagnostic Report</span>
              </div>
              <h3 className="section-title" style={{ textAlign: 'left' }}>
                Inside Your Child's <span className="gradient-text-gold">Brain Report</span>
              </h3>
              <p className="about__text">
                Our 40+ page printed intelligence report provides detailed insights into 10 brain lobes, 8 multiple intelligences, learning sensitivity, and career suitability.
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
                  <div><strong>Career & Stream Selection:</strong> Ideal streams based on innate brain strengths.</div>
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
    </section>
  );
};

export default About;
