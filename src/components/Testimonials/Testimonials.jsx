import React, { useEffect, useRef, useState } from 'react';
import {
  UsersIcon,
  BriefcaseIcon,
  GraduationCapIcon,
  LockIcon,
  CheckIcon,
  BrainIcon,
  StarIcon,
  RocketIcon,
} from '../Icons';
import './Testimonials.css';

const reasons = [
  {
    title: 'One-to-one counseling',
    text: 'Your report is explained in a personal session, so you can connect the findings with real life.',
    program: 'Understand your results',
    role: 'Guided conversation',
    icon: <UsersIcon size={20} color="#F59E0B" />,
  },
  {
    title: 'Simple, easy-to-read reports',
    text: 'Findings are explained in plain language, with strengths and development areas clearly discussed.',
    program: 'Clear information',
    role: 'Plain language',
    icon: <BrainIcon size={20} color="#3B82F6" />,
  },
  {
    title: 'Personally guided by Sandip Pala',
    text: 'Sandip Pala, Brain-Based Performance Coach, guides individuals, families and business owners.',
    program: 'Personal guidance',
    role: 'Founder & coach',
    icon: <StarIcon size={20} color="#8B5CF6" />,
  },
  {
    title: 'Options for every stage',
    text: 'Services are available for children, students, adults, families, business owners and teams.',
    program: 'People at every stage',
    role: 'Choose your path',
    icon: <GraduationCapIcon size={20} color="#10B981" />,
  },
  {
    title: 'Practical action plan',
    text: 'Use insight to identify clear priorities and practical next steps, not just labels to show.',
    program: 'From insight to action',
    role: 'Practical next steps',
    icon: <CheckIcon size={20} color="#F59E0B" />,
  },
  {
    title: 'Privacy matters',
    text: 'Your data is kept private and used only with your consent.',
    program: 'Confidentiality',
    role: 'Respect for privacy',
    icon: <LockIcon size={20} color="#EC4899" />,
  },
];

const serviceAreas = [
  { id: '1', icon: <BrainIcon size={28} color="#F59E0B" />, title: 'Brain Mapping Reports', label: 'Insight & counseling' },
  { id: '2', icon: <BriefcaseIcon size={28} color="#60A5FA" />, title: 'Business Owner Programs', label: 'Counseling & development' },
  { id: '3', icon: <RocketIcon size={28} color="#C084FC" />, title: 'Manas 360', label: 'Brain performance' },
  { id: '4', icon: <UsersIcon size={28} color="#10B981" />, title: 'HR Matrix', label: 'Teams & organizations' },
];

const Testimonials = () => {
  const gridRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);
  const carouselReasons = [...reasons, ...reasons];

  useEffect(() => {
    let animationId;
    const scrollStep = () => {
      if (gridRef.current && !isHovered) {
        gridRef.current.scrollLeft += 1;
        if (gridRef.current.scrollLeft >= gridRef.current.scrollWidth / 2) {
          gridRef.current.scrollLeft = 0;
        }
      }
      animationId = requestAnimationFrame(scrollStep);
    };

    animationId = requestAnimationFrame(scrollStep);
    return () => cancelAnimationFrame(animationId);
  }, [isHovered]);

  return (
    <section className="testimonials section" id="why-manas-matrix">
      <div className="glow-orb" style={{ width: '600px', height: '600px', background: 'radial-gradient(circle, rgba(124,58,237,0.08), transparent)', top: '50%', left: '50%', transform: 'translate(-50%,-50%)' }}></div>
      <div className="container">
        <div className="section-header animate-reveal fade-up">
          <div className="section-badge">
            <StarIcon size={14} color="#F59E0B" />
            <span>Why Manas Matrix</span>
          </div>
          <h2 className="section-title">
            A Report Is the Start. <span className="gradient-text-gold">Counseling Makes It Useful.</span>
          </h2>
          <div className="divider"></div>
          <p className="section-subtitle">
            Understand your results, connect them with real life and leave with clear priorities.
          </p>
        </div>

        <div
          className="testimonials__grid"
          ref={gridRef}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          onTouchStart={() => setIsHovered(true)}
          onTouchEnd={() => setIsHovered(false)}
        >
          {carouselReasons.map((item, index) => (
            <div key={`${item.title}-${index}`} className={`testimonials__card glass-card animate-reveal fade-up delay-${((index % reasons.length) + 1) * 100}`}>
              <div className="testimonials__rating" style={{ display: 'flex', gap: '4px' }}>
                {item.icon}
              </div>
              <h3 className="testimonials__text">{item.title}</h3>
              <p className="testimonials__text">{item.text}</p>
              <div className="testimonials__program" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <RocketIcon size={16} color="#F59E0B" />
                <span>{item.program}</span>
              </div>
              <div className="testimonials__author">
                <div className="testimonials__avatar" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>{item.icon}</div>
                <div>
                  <div className="testimonials__name">{item.role}</div>
                  <div className="testimonials__role">Manas Matrix</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="testimonials__trust-wrapper animate-reveal zoom-in">
          <div className="testimonials__trust-badge-hint" style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
            <RocketIcon size={14} color="#F59E0B" />
            <span>Choose the service that matches your goal</span>
          </div>
          <div className="testimonials__trust-container">
            <div className="testimonials__trust-track">
              {[...serviceAreas, ...serviceAreas].map((item, index) => (
                <div key={`${item.id}-${index}`} className="testimonials__trust-card">
                  <div className="testimonials__trust-icon-box">{item.icon}</div>
                  <div className="testimonials__trust-num">{item.title}</div>
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
