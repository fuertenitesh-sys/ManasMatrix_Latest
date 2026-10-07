import React, { useEffect, useRef } from 'react';
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
  const sectionRef = useRef(null);

  useEffect(() => {
    const viewports = [...(sectionRef.current?.querySelectorAll('.testimonials__grid, .testimonials__trust-container') || [])];
    const drags = new Map();
    const getLoopWidth = (viewport) => {
      const firstSet = viewport.firstElementChild?.children[0];
      const repeatedSet = viewport.firstElementChild?.children[1];
      return firstSet && repeatedSet ? repeatedSet.offsetLeft - firstSet.offsetLeft : 0;
    };
    const synchronizeSpeeds = () => {
      viewports.forEach((viewport) => {
        const track = viewport.firstElementChild;
        const animation = track?.getAnimations()[0];
        const loopWidth = getLoopWidth(viewport);
        if (animation && loopWidth > 0) {
          animation.effect.updateTiming({ duration: (loopWidth / 36) * 1000 });
        }
      });
    };
    synchronizeSpeeds();
    const resizeObserver = new ResizeObserver(synchronizeSpeeds);
    viewports.forEach((viewport) => {
      resizeObserver.observe(viewport);
      resizeObserver.observe(viewport.firstElementChild);
      resizeObserver.observe(viewport.firstElementChild.children[0]);
    });

    const getTrackMetrics = (viewport) => {
      const track = viewport.firstElementChild;
      const animation = track?.getAnimations()[0];
      const duration = animation?.effect?.getTiming().duration;
      const loopWidth = getLoopWidth(viewport);
      return typeof duration === 'number' && loopWidth > 0 ? { animation, duration, loopWidth } : null;
    };

    const moveTrack = (viewport, pixels) => {
      const metrics = getTrackMetrics(viewport);
      if (!metrics?.animation) return;
      const currentTime = Number(metrics.animation.currentTime) || 0;
      metrics.animation.currentTime = currentTime + (pixels / metrics.loopWidth) * metrics.duration;
    };

    const handleWheel = (event) => {
      const pixels = event.deltaX || (event.shiftKey ? event.deltaY : 0);
      if (!pixels || !getTrackMetrics(event.currentTarget)) return;
      event.preventDefault();
      moveTrack(event.currentTarget, pixels);
    };

    const startDrag = (event) => {
      if (event.isPrimary === false || event.pointerType !== 'touch') return;
      const viewport = event.currentTarget;
      const metrics = getTrackMetrics(viewport);
      if (!metrics?.animation) return;
      drags.set(viewport, {
        pointerId: event.pointerId,
        startX: event.clientX,
        startTime: Number(metrics.animation.currentTime) || 0,
      });
      viewport.setPointerCapture(event.pointerId);
      viewport.classList.add('is-dragging');
      metrics.animation.pause();
    };

    const moveDrag = (event) => {
      const viewport = event.currentTarget;
      const drag = drags.get(viewport);
      if (!drag || drag.pointerId !== event.pointerId) return;
      event.preventDefault();
      const metrics = getTrackMetrics(viewport);
      if (!metrics?.animation) return;
      metrics.animation.currentTime = drag.startTime + ((drag.startX - event.clientX) / metrics.loopWidth) * metrics.duration;
    };

    const endDrag = (event) => {
      const viewport = event.currentTarget;
      const drag = drags.get(viewport);
      if (!drag || drag.pointerId !== event.pointerId) return;
      drags.delete(viewport);
      viewport.classList.remove('is-dragging');
      const animation = viewport.firstElementChild?.getAnimations()[0];
      if (animation) animation.play();
    };

    viewports.forEach((viewport) => {
      viewport.addEventListener('wheel', handleWheel, { passive: false });
      viewport.addEventListener('pointerdown', startDrag);
      viewport.addEventListener('pointermove', moveDrag);
      viewport.addEventListener('pointerup', endDrag);
      viewport.addEventListener('pointercancel', endDrag);
    });

    return () => {
      resizeObserver.disconnect();
      viewports.forEach((viewport) => {
        viewport.removeEventListener('wheel', handleWheel);
        viewport.removeEventListener('pointerdown', startDrag);
        viewport.removeEventListener('pointermove', moveDrag);
        viewport.removeEventListener('pointerup', endDrag);
        viewport.removeEventListener('pointercancel', endDrag);
      });
    };
  }, []);

  return (
    <section className="testimonials section" id="why-manas-matrix" ref={sectionRef}>
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

        <div className="testimonials__grid" aria-label="Reasons to choose Manas Matrix">
          <div className="testimonials__track">
            {[0, 1].map((copy) => (
              <div className="testimonials__set" key={copy}>
                {reasons.map((item, index) => (
                  <div key={`${item.title}-${index}`} className={`testimonials__card glass-card animate-reveal fade-up delay-${(index + 1) * 100}`}>
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
            ))}
          </div>
        </div>

        <div className="testimonials__trust-wrapper animate-reveal zoom-in">
          <div className="testimonials__trust-badge-hint" style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
            <RocketIcon size={14} color="#F59E0B" />
            <span>Choose the service that matches your goal</span>
          </div>
          <div className="testimonials__trust-container" aria-label="Manas Matrix services">
            <div className="testimonials__trust-track">
              {[0, 1].map((copy) => (
                <div className="testimonials__trust-set" key={copy}>
                  {serviceAreas.map((item) => (
                    <div key={item.id} className="testimonials__trust-card">
                      <div className="testimonials__trust-icon-box">{item.icon}</div>
                      <div className="testimonials__trust-num">{item.title}</div>
                      <span className="testimonials__trust-label">{item.label}</span>
                      <div className="testimonials__trust-glow"></div>
                    </div>
                  ))}
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
