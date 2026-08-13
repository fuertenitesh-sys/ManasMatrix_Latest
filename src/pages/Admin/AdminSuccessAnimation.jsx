import React, { useEffect, useState } from 'react';
import './AdminSuccessAnimation.css';

const AdminSuccessAnimation = ({ onComplete }) => {
  const [phase, setPhase] = useState(1);

  useEffect(() => {
    // Phase 1 is the initial elegant logo reveal (0s to 1.5s)
    const p2 = setTimeout(() => setPhase(2), 1500); // 1.5s -> Brand text smoothly appears
    const p3 = setTimeout(() => setPhase(3), 3500); // 3.5s -> Starts fading out cleanly
    
    const end = setTimeout(() => {
      if (onComplete) onComplete();
    }, 5000); // 5.0s -> Complete transition to dashboard

    return () => {
      clearTimeout(p2);
      clearTimeout(p3);
      clearTimeout(end);
    };
  }, [onComplete]);

  return (
    <div className={`admin-cinema-overlay phase-${phase}`} role="status" aria-live="polite">
      
      {/* Subtle, minimal background glow */}
      <div className="cinema-bg">
        <div className="cinema-glow-center"></div>
      </div>
      
      <div className="cinema-content">
        
        {/* Elegant Logo Reveal */}
        <div className="cinema-logo-container">
          <img 
            src="/logo_brain_icon.png" 
            alt="Manas Matrix" 
            className="cinema-actual-logo" 
          />
        </div>
        
        {/* Clean Typography */}
        <div className="cinema-brand-text">
          <h1>MANAS MATRIX</h1>
          <h2>ADMIN PORTAL</h2>
        </div>
        
      </div>
    </div>
  );
};

export default AdminSuccessAnimation;
