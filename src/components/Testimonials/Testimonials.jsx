import React from 'react';
import './Testimonials.css';

const testimonials = [
  {
    name: 'Priya Sharma',
    role: 'Mother of 2, Rajkot',
    text: 'The Brain Mapping Report for my son was life-changing! We finally understood why he struggles with traditional learning. The counselling helped us create a personalized approach that has improved his grades dramatically.',
    rating: 5,
    program: 'Growth Transformation Program',
    avatar: '👩',
  },
  {
    name: 'Rahul Mehta',
    role: 'Business Owner, Rajkot',
    text: 'The Advanced Brain Mapping for Professionals was exactly what I needed. Understanding my decision-making style and leadership strengths helped me grow my business by 40% in just 6 months.',
    rating: 5,
    program: 'Advanced Brain Mapping',
    avatar: '👨‍💼',
  },
  {
    name: 'Kavita & Vijay Patel',
    role: 'Parents, Rajkot',
    text: 'The Elite Family Transformation Program brought our entire family closer. We understand each other so much better now. Our children\'s performance has improved and our communication as a family is so much healthier.',
    rating: 5,
    program: 'Elite Family Transformation',
    avatar: '👨‍👩‍👧‍👦',
  },
  {
    name: 'Aakash Joshi',
    role: 'Student, Age 16',
    text: 'I was confused about my career after 10th. The DISC Assessment and counselling helped me discover I have strong analytical and leadership abilities. Now I know exactly which direction to take!',
    rating: 5,
    program: 'DISC Personality Assessment',
    avatar: '🧑‍🎓',
  },
];

const Testimonials = () => {
  return (
    <section className="testimonials section" id="testimonials">
      <div className="glow-orb" style={{ width: '600px', height: '600px', background: 'radial-gradient(circle, rgba(124,58,237,0.08), transparent)', top: '50%', left: '50%', transform: 'translate(-50%,-50%)' }}></div>

      <div className="container">
        <div className="section-header">
          <div className="section-badge">💬 Testimonials</div>
          <h2 className="section-title">
            Real Stories of <span className="gradient-text-gold">Transformation</span>
          </h2>
          <div className="divider"></div>
          <p className="section-subtitle" style={{ marginTop: '16px' }}>
            Hundreds of families and professionals in Rajkot have already transformed their lives through our brain mapping programs.
          </p>
        </div>

        <div className="testimonials__grid">
          {testimonials.map((t, i) => (
            <div key={t.name} className="testimonials__card glass-card" id={`testimonial-${i + 1}`}>
              <div className="testimonials__rating">
                {'⭐'.repeat(t.rating)}
              </div>
              <p className="testimonials__text">"{t.text}"</p>
              <div className="testimonials__program">
                🎯 {t.program}
              </div>
              <div className="testimonials__author">
                <div className="testimonials__avatar">{t.avatar}</div>
                <div>
                  <div className="testimonials__name">{t.name}</div>
                  <div className="testimonials__role">{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Trust indicators */}
        <div className="testimonials__trust">
          <div className="testimonials__trust-item">
            <span className="testimonials__trust-num">500+</span>
            <span className="testimonials__trust-label">Happy Clients</span>
          </div>
          <div className="testimonials__trust-item">
            <span className="testimonials__trust-num">98%</span>
            <span className="testimonials__trust-label">Satisfaction Rate</span>
          </div>
          <div className="testimonials__trust-item">
            <span className="testimonials__trust-num">5+</span>
            <span className="testimonials__trust-label">Years in Rajkot</span>
          </div>
          <div className="testimonials__trust-item">
            <span className="testimonials__trust-num">1000+</span>
            <span className="testimonials__trust-label">Reports Generated</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
