import React, { useState, useEffect, useRef } from 'react';
import { StarIcon, UsersIcon, BriefcaseIcon, GraduationCapIcon, AwardIcon, BarChartIcon, RocketIcon, HeartIcon } from '../Icons';
import './Testimonials.css';

const testimonials = [
  {
    name: 'Priya Sharma',
    role: 'Mother of 2, Rajkot',
    text: 'The Brain Mapping Report for my son was life-changing! We finally understood why he struggles with traditional learning. The counselling helped us create a personalized approach that has improved his grades dramatically.',
    rating: 5,
    program: 'Growth Transformation Program',
    avatar: <HeartIcon size={20} color="#EC4899" />,
  },
  {
    name: 'Rahul Mehta',
    role: 'Business Owner, Rajkot',
    text: 'The Advanced Brain Mapping for Professionals was exactly what I needed. Understanding my decision-making style and leadership strengths helped me grow my business by 40% in just 6 months.',
    rating: 5,
    program: 'Advanced Brain Mapping',
    avatar: <BriefcaseIcon size={20} color="#3B82F6" />,
  },
  {
    name: 'Kavita & Vijay Patel',
    role: 'Parents, Rajkot',
    text: 'The Elite Family Transformation Program brought our entire family closer. We understand each other so much better now. Our children\'s performance has improved and our communication as a family is so much healthier.',
    rating: 5,
    program: 'Elite Family Transformation',
    avatar: <UsersIcon size={20} color="#F59E0B" />,
  },
  {
    name: 'Aakash Joshi',
    role: 'Student, Age 16',
    text: 'I was confused about my career after 10th. The DISC Assessment and counselling helped me discover I have strong analytical and leadership abilities. Now I know exactly which direction to take!',
    rating: 5,
    program: 'DISC Personality Assessment',
    avatar: <GraduationCapIcon size={20} color="#8B5CF6" />,
  },
];

// Smooth Animated Count-Up Component
const CountUpNumber = ({ target, suffix = '', duration = 2000 }) => {
  const [count, setCount] = useState(0);
  const elementRef = useRef(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          let startTime = null;

          const animate = (currentTime) => {
            if (!startTime) startTime = currentTime;
            const progress = Math.min((currentTime - startTime) / duration, 1);
            const easeProgress = 1 - Math.pow(1 - progress, 3);
            setCount(Math.floor(easeProgress * target));

            if (progress < 1) {
              requestAnimationFrame(animate);
            } else {
              setCount(target);
            }
          };

          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.2 }
    );

    const currentEl = elementRef.current;
    if (currentEl) {
      observer.observe(currentEl);
    }

    return () => {
      if (currentEl) observer.unobserve(currentEl);
    };
  }, [target, duration]);

  return (
    <span ref={elementRef} className="count-up-num">
      {count}{suffix}
    </span>
  );
};

const trustItems = [
  { id: '1', icon: <UsersIcon size={28} color="#F59E0B" />, num: 500, suffix: '+', label: 'Happy Clients' },
  { id: '2', icon: <StarIcon size={28} color="#FCD34D" />, num: 98, suffix: '%', label: 'Satisfaction Rate' },
  { id: '3', icon: <AwardIcon size={28} color="#C084FC" />, num: 5, suffix: '+', label: 'Years in Rajkot' },
  { id: '4', icon: <BarChartIcon size={28} color="#3B82F6" />, num: 1000, suffix: '+', label: 'Reports Generated' },
];

const Testimonials = () => {
  // Double array for seamless infinite marquee loop
  const marqueeItems = [...trustItems, ...trustItems];

  return (
    <section className="testimonials section" id="testimonials">
      <div className="glow-orb" style={{ width: '600px', height: '600px', background: 'radial-gradient(circle, rgba(124,58,237,0.08), transparent)', top: '50%', left: '50%', transform: 'translate(-50%,-50%)' }}></div>

      <div className="container">
        <div className="section-header animate-reveal fade-up">
          <div className="section-badge">
            <HeartIcon size={14} color="#F59E0B" />
            <span>Testimonials & Impact</span>
          </div>
          <h2 className="section-title">
            Real Stories of <span className="gradient-text-gold">Transformation</span>
          </h2>
          <div className="divider"></div>
          <p className="section-subtitle">
            Hundreds of families and professionals in Rajkot have already transformed their lives through our brain mapping programs.
          </p>
        </div>

        <div className="testimonials__grid">
          {testimonials.map((t, i) => (
            <div key={t.name} className={`testimonials__card glass-card animate-reveal fade-up delay-${(i + 1) * 100}`} id={`testimonial-${i + 1}`}>
              <div className="testimonials__rating" style={{ display: 'flex', gap: '4px' }}>
                {[...Array(t.rating)].map((_, idx) => (
                  <StarIcon key={idx} size={16} color="#FCD34D" />
                ))}
              </div>
              <p className="testimonials__text">"{t.text}"</p>
              <div className="testimonials__program" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <RocketIcon size={16} color="#F59E0B" />
                <span>{t.program}</span>
              </div>
              <div className="testimonials__author">
                <div className="testimonials__avatar" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>{t.avatar}</div>
                <div>
                  <div className="testimonials__name">{t.name}</div>
                  <div className="testimonials__role">{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Continuous Right-to-Left Infinite Marquee Motion Bar */}
        <div className="testimonials__trust-wrapper animate-reveal zoom-in">
          <div className="testimonials__trust-badge-hint" style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
             <RocketIcon size={14} color="#F59E0B" />
            <span>Hover cursor over any card to pause motion</span>
          </div>

          <div className="testimonials__trust-container">
            <div className="testimonials__trust-track">
              {marqueeItems.map((item, idx) => (
                <div key={`${item.id}-${idx}`} className="testimonials__trust-card">
                  <div className="testimonials__trust-icon-box">{item.icon}</div>
                  <div className="testimonials__trust-num">
                    <CountUpNumber target={item.num} suffix={item.suffix} duration={2200} />
                  </div>
                  <span className="testimonials__trust-label">{item.label}</span>
                  <div className="testimonials__trust-glow"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
