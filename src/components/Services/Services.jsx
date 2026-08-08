import React from 'react';
import './Services.css';

const services = [
  { icon: '👨‍👩‍👧', title: 'Parenting Counselling', desc: 'Understand your child\'s unique brain type and learning style to become a more effective and empathetic parent.' },
  { icon: '🎓', title: 'Education Counselling', desc: 'Discover the best learning methods, career paths, and subjects aligned with your child\'s innate intelligence.' },
  { icon: '💑', title: 'Relationship Counselling', desc: 'Understand personality differences and communication styles for stronger, more fulfilling relationships.' },
  { icon: '🏠', title: 'Family Counselling', desc: 'Align your entire family towards shared goals with deeper understanding and improved communication patterns.' },
  { icon: '🏢', title: 'Corporate Counselling', desc: 'Build high-performance teams by understanding individual strengths, leadership styles, and decision-making patterns.' },
  { icon: '📊', title: 'Business Counselling', desc: 'Make better business decisions by leveraging your natural brain strengths, leadership style, and SWOT profile.' },
];

const Services = () => {
  return (
    <section className="services section" id="services">
      <div className="glow-orb" style={{ width: '500px', height: '500px', background: 'radial-gradient(circle, rgba(59,130,246,0.1), transparent)', top: '0', right: '0' }}></div>

      <div className="container">
        <div className="section-header">
          <div className="section-badge">🧩 Our Services</div>
          <h2 className="section-title">
            Brain Mapping Counselling <br />
            <span className="gradient-text-gold">For Every Life Area</span>
          </h2>
          <div className="divider"></div>
          <p className="section-subtitle" style={{ marginTop: '16px' }}>
            "Know Yourself Better to Grow Better" — discover in-depth insights through Brain Mapping (BMI) across all dimensions of life.
          </p>
        </div>

        <div className="services__grid">
          {services.map((service, i) => (
            <div key={service.title} className="services__card glass-card" id={`service-${i + 1}`}>
              <div className="services__icon">{service.icon}</div>
              <h3 className="services__title">{service.title}</h3>
              <p className="services__desc">{service.desc}</p>
              <div className="services__arrow">→</div>
            </div>
          ))}
        </div>

        {/* Quote Banner */}
        <div className="services__quote">
          <div className="services__quote-mark">"</div>
          <p className="services__quote-text">
            Discover in-depth insights through Brain Mapping (BMI) and unlock your true potential
          </p>
          <div className="services__quote-author">— MANAS MATRIX</div>
        </div>
      </div>
    </section>
  );
};

export default Services;
