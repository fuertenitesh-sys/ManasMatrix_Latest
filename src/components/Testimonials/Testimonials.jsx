import React from 'react';
import { UsersIcon, StarIcon, AwardIcon, BarChartIcon } from '../Icons';
import './Testimonials.css';

const Testimonials = () => {
  const trustStats = [
    {
      id: 'clients',
      icon: <UsersIcon size={24} color="#F59E0B" />,
      number: '500+',
      label: 'Happy Clients',
      sub: 'In Rajkot & Gujarat',
    },
    {
      id: 'satisfaction',
      icon: <StarIcon size={24} color="#FCD34D" />,
      number: '98%',
      label: 'Satisfaction Rate',
      sub: 'Based on Parent Reviews',
    },
    {
      id: 'experience',
      icon: <AwardIcon size={24} color="#60A5FA" />,
      number: '5+',
      label: 'Years in Rajkot',
      sub: 'Proven Track Record',
    },
    {
      id: 'reports',
      icon: <BarChartIcon size={24} color="#FF6B35" />,
      number: '1000+',
      label: 'Reports Generated',
      sub: 'Printed DMI Analysis',
    },
  ];

  const marqueeStats = [...trustStats, ...trustStats];

  return (
    <section className="section testimonials" id="testimonials">
      <div className="container">
        <div className="section-header">
          <div className="section-badge">
            <StarIcon size={14} color="#F59E0B" />
            <span>Proven Track Record</span>
          </div>
          <h2 className="section-title">
            Trusted by <span className="gradient-text-gold">Families in Rajkot</span>
          </h2>
          <p className="section-subtitle">
            See how our scientific brain mapping assessments have transformed learning, family bonding, and career direction.
          </p>
        </div>

        {/* Continuous Right-to-Left Marquee Track */}
        <div className="testimonials__trust-marquee">
          <div className="testimonials__trust-track">
            {marqueeStats.map((stat, idx) => (
              <div key={`${stat.id}-${idx}`} className="testimonials__trust-card glass-card">
                <div className="testimonials__trust-icon-wrapper">
                  {stat.icon}
                </div>
                <div className="testimonials__trust-number">{stat.number}</div>
                <div className="testimonials__trust-label">{stat.label}</div>
                <div className="testimonials__trust-sub">{stat.sub}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
