import React, { useEffect } from 'react';
import './AdminSuccessAnimation.css';

const AdminSuccessAnimation = ({ onComplete }) => {
  useEffect(() => {
    // Animation runs for ~25s before transitioning to dashboard
    const timer = setTimeout(() => {
      if (onComplete) {
        onComplete();
      }
    }, 25000);

    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <div className="admin-success-overlay" role="status" aria-live="polite">
      <div className="admin-success-background">
        <div className="neural-lines"></div>
      </div>
      
      <div className="admin-success-content">
        <div className="logo-container">
          <div className="logo-glow"></div>
          <img 
            src="/logo_brain_icon.png" 
            alt="Manas Matrix" 
            className="animated-logo" 
          />
        </div>
        
        <div className="brand-text">
          <h1 className="brand-title">MANAS MATRIX</h1>
          <p className="brand-subtitle">Admin Portal</p>
        </div>
        
        <div className="welcome-text">
          <h2 className="welcome-title">Welcome Back</h2>
          <div className="loading-container">
            <span className="loading-dot"></span>
            <span className="loading-dot"></span>
            <span className="loading-dot"></span>
            <p className="loading-text">Preparing your dashboard...</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminSuccessAnimation;
