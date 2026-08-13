import React, { useEffect, useState } from 'react';
import './AdminSuccessAnimation.css';

const AdminSuccessAnimation = ({ onComplete }) => {
  const [phase, setPhase] = useState(1);

  useEffect(() => {
    const p2 = setTimeout(() => setPhase(2), 4000); // 4s -> Brain Formation
    const p3 = setTimeout(() => setPhase(3), 9000); // 9s -> Logo Reveal
    const p4 = setTimeout(() => setPhase(4), 14000); // 14s -> Brand Reveal
    const p5 = setTimeout(() => setPhase(5), 18000); // 18s -> Admin Access
    const p6 = setTimeout(() => setPhase(6), 22000); // 22s -> Transition to dashboard
    
    const end = setTimeout(() => {
      if (onComplete) onComplete();
    }, 25000); // 25s -> Done

    return () => {
      clearTimeout(p2);
      clearTimeout(p3);
      clearTimeout(p4);
      clearTimeout(p5);
      clearTimeout(p6);
      clearTimeout(end);
    };
  }, [onComplete]);

  return (
    <div className={`admin-cinema-overlay phase-${phase}`} role="status" aria-live="polite">
      
      {/* Background Glows */}
      <div className="cinema-bg">
        <div className="cinema-glow-1"></div>
        <div className="cinema-glow-2"></div>
      </div>
      
      {/* Neural Network Base */}
      <div className="cinema-neural-net"></div>

      <div className="cinema-content">
        
        {/* Phase 1 & 2: Abstract Neural Brain */}
        <div className="cinema-abstract-brain">
          <svg viewBox="0 0 100 100" width="150" height="150">
            {/* Elegant abstract neural paths shaping a brain */}
            <path className="brain-path" d="M50 10 Q30 5 20 20 T10 50 Q15 70 30 80 T50 90 Q70 80 80 70 T90 50 Q85 30 80 20 T50 10 Z" />
            <path className="brain-path" d="M50 10 Q40 30 25 45 T10 50" />
            <path className="brain-path" d="M50 10 Q60 30 75 45 T90 50" />
            <path className="brain-path" d="M30 80 Q45 60 50 45" />
            <path className="brain-path" d="M70 80 Q55 60 50 45" />
            <path className="brain-path" d="M20 20 Q40 40 50 45" />
            <path className="brain-path" d="M80 20 Q60 40 50 45" />
            
            {/* Glowing nodes at intersections */}
            <circle className="brain-node" cx="50" cy="10" r="2" />
            <circle className="brain-node" cx="20" cy="20" r="2" />
            <circle className="brain-node" cx="80" cy="20" r="2" />
            <circle className="brain-node" cx="10" cy="50" r="2" />
            <circle className="brain-node" cx="90" cy="50" r="2" />
            <circle className="brain-node" cx="30" cy="80" r="2" />
            <circle className="brain-node" cx="70" cy="80" r="2" />
            <circle className="brain-node" cx="50" cy="90" r="2" />
            <circle className="brain-node" cx="50" cy="45" r="2" />
            <circle className="brain-node" cx="25" cy="45" r="2" />
            <circle className="brain-node" cx="75" cy="45" r="2" />
          </svg>
        </div>

        {/* Phase 3 & 4: Actual Existing Logo */}
        <div className="cinema-logo-container">
          <div className="logo-core-glow"></div>
          <div className="cinema-logo-sweep"></div>
          <img 
            src="/logo_brain_icon.png" 
            alt="Manas Matrix" 
            className="cinema-actual-logo" 
          />
        </div>
        
        {/* Phase 4: Brand Text */}
        <div className="cinema-brand-text">
          <h1>MANAS MATRIX</h1>
          <h2>ADMIN PORTAL</h2>
        </div>
        
        {/* Phase 5: Welcome / Access */}
        <div className="cinema-welcome-text">
          <h3>WELCOME BACK</h3>
          <p>SECURE ADMIN ACCESS</p>
          <div className="secure-pulse"></div>
        </div>
        
      </div>
    </div>
  );
};

export default AdminSuccessAnimation;
