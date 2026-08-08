import React from 'react';
import { Link } from 'react-router-dom';
import './About.css';

const About = () => {
  const features = [
    { icon: '🧬', title: 'Dermatoglyphics Brain Mapping', desc: 'Scientific fingerprint analysis to reveal innate brain potential and learning style.' },
    { icon: '🎯', title: 'Personalized Reports', desc: 'Customized Brain Intelligence Reports tailored for each individual\'s unique profile.' },
    { icon: '🤝', title: 'Expert Counselling', desc: 'One-on-one counselling sessions with certified brain mapping professionals.' },
    { icon: '📈', title: 'Measurable Growth', desc: 'Quarterly reviews and performance tracking to ensure consistent transformation.' },
  ];

  return (
    <section className="about section" id="about">
      <div className="glow-orb" style={{ width: '400px', height: '400px', background: 'radial-gradient(circle, rgba(59,130,246,0.15), transparent)', top: '0', left: '0' }}></div>

      <div className="container">
        {/* Main Grid */}
        <div className="about__grid">
          {/* Left Visual Box with Official Logo & Location */}
          <div className="about__visual">
            <div className="about__visual-card">
              <div className="about__visual-inner">
                {/* Official Logo Display */}
                <div className="about__logo-box">
                  <img src="/logo_clean.png" alt="MANAS MATRIX Logo" className="about__logo-img" />
                </div>
                <h3 className="about__visual-title gradient-text-gold">MANAS MATRIX</h3>
                <p className="about__visual-sub">GrowUp Business Services</p>
                
                {/* Clickable Location Link */}
                <a
                  href="https://maps.google.com/?q=MANAS+MATRIX+Spire+150+Feet+Ring+Rd+Rajkot"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="about__visual-location"
                  title="Click to open Google Maps"
                >
                  📍 Rajkot, Gujarat ↗
                </a>

                <div className="about__visual-stats">
                  <div className="about__visual-stat">
                    <span className="about__visual-stat-num">500+</span>
                    <span className="about__visual-stat-label">Lives Changed</span>
                  </div>
                  <div className="about__visual-stat">
                    <span className="about__visual-stat-num">5+</span>
                    <span className="about__visual-stat-label">Years Experience</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Certification badge */}
            <div className="about__cert-badge">
              <span>✅</span>
              <div>
                <div className="about__cert-title">Certified</div>
                <div className="about__cert-sub">Brain Mapping Experts</div>
              </div>
            </div>
          </div>

          {/* Right Content */}
          <div className="about__content">
            <div className="section-badge">🏢 Who We Are</div>
            <h2 className="section-title">
              Transform Your Future <br />
              <span className="gradient-text-gold">With Science</span>
            </h2>
            <div className="divider" style={{ margin: '0 0 24px' }}></div>

            <p className="about__text">
              <strong style={{ color: 'var(--color-gold)' }}>Manas Matrix</strong> is Rajkot's leading Brain Mapping and Self Discovery center. We use scientifically proven <strong>Dermatoglyphics Multiple Intelligence (DMI)</strong> technology to unlock the hidden potential within every individual.
            </p>
            <p className="about__text">
              Our expert team guides children, families, and professionals through personalized brain mapping journeys — helping them understand their unique intelligence patterns, learning styles, and growth pathways.
            </p>

            <div className="about__services-list">
              {['Parenting Counselling', 'Education Counselling', 'Relationship Counselling', 'Family Counselling', 'Corporate Counselling', 'Business Counselling'].map((service) => (
                <span key={service} className="about__service-tag">{service}</span>
              ))}
            </div>

            <div className="about__features">
              {features.map((f) => (
                <div key={f.title} className="about__feature">
                  <div className="about__feature-icon">{f.icon}</div>
                  <div>
                    <div className="about__feature-title">{f.title}</div>
                    <div className="about__feature-desc">{f.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* --- Image Section 1: Brain Mapping Report Dashboard Feature (Inspired by Taqsha) --- */}
        <div className="about__report-showcase">
          <div className="about__report-grid">
            <div className="about__report-text">
              <div className="section-badge">📊 Deep Scientific Insights</div>
              <h2 className="section-title">
                Serious Insight Through a Journey <br />
                <span className="gradient-text-gold">Children & Parents Enjoy</span>
              </h2>
              <p className="about__text">
                Every report generated at Manas Matrix provides comprehensive 3D brain lobe analysis, cognitive score gauges, radar profile charts, and tailored actionable advice.
              </p>
              <div className="about__report-points">
                <div className="about__report-point">
                  <span>🧠</span>
                  <div>
                    <strong>Brain Lobe Dominance:</strong> Understand Left vs Right brain thinking style.
                  </div>
                </div>
                <div className="about__report-point">
                  <span>🎯</span>
                  <div>
                    <strong>Multiple Intelligences:</strong> Identify Musical, Spatial, Kinesthetic & Logical strengths.
                  </div>
                </div>
                <div className="about__report-point">
                  <span>📈</span>
                  <div>
                    <strong>SWOT & Learning Style:</strong> Discover whether your child is Visual, Auditory or Kinesthetic.
                  </div>
                </div>
              </div>
              <Link to="/programs" className="btn-primary" style={{ marginTop: '20px' }}>
                <span>🚀 View Sample Report Details</span>
              </Link>
            </div>
            
            <div className="about__report-img-wrapper">
              <div className="about__report-img-card glass-card">
                <img src="/brain_report.jpg" alt="Brain Intelligence Analysis Dashboard Report" className="about__report-img" />
                <div className="about__report-img-badge">
                  <span>📊 100% Scientific Analysis</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* --- Image Section 2: Meet Our Expert Counselor (Inspired by Taqsha) --- */}
        <div className="about__expert-showcase">
          <div className="about__expert-card glass-card">
            <div className="about__expert-grid">
              <div className="about__expert-img-wrapper">
                <img src="/counselor.jpg" alt="Dr. Priya Sharma - Senior Brain Mapping Expert" className="about__expert-img" />
                <div className="about__expert-tag">Certified Cognitive Psychologist</div>
              </div>

              <div className="about__expert-info">
                <div className="section-badge">👩‍⚕️ Meet Our Lead Expert</div>
                <h3 className="about__expert-name">Dr. Priya Sharma</h3>
                <p className="about__expert-role">Senior Brain Mapping Expert & Child Counselor</p>
                <p className="about__expert-bio">
                  "Every child has extraordinary potential when guided in the right way. At Manas Matrix, our mission is to ensure parents understand how their child learns best, building a foundation of confidence, emotional intelligence, and lifelong success."
                </p>
                <div className="about__expert-credentials">
                  <span>🎓 M.Sc. Cognitive Psychology</span>
                  <span>🏆 Certified DMI Specialist</span>
                  <span>⭐ 500+ Consultations</span>
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
