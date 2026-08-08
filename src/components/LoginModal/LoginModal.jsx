import React, { useState } from 'react';
import { PhoneIcon, MailIcon, LockIcon, CheckIcon } from '../Icons';
import './LoginModal.css';

const LoginModal = ({ isOpen, onClose }) => {
  const [loginType, setLoginType] = useState('phone'); // 'phone' or 'email'
  const [inputValue, setInputValue] = useState('');
  const [password, setPassword] = useState('');
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      onClose();
    }, 2000);
  };

  return (
    <div className="login-modal__overlay" onClick={onClose}>
      <div className="login-modal__card glass-card" onClick={(e) => e.stopPropagation()}>
        <button className="login-modal__close" onClick={onClose} aria-label="Close modal">✕</button>
        
        <div className="login-modal__header">
          <div className="login-modal__logo-box">
            <img src="/logo_brain_icon.png" alt="MANAS MATRIX Logo Icon" className="login-modal__logo-icon-img" />
            <div className="login-modal__logo-text-group">
              <span className="login-modal__logo-title">MANAS MATRIX</span>
              <span className="login-modal__logo-sub">GrowUp Business Services</span>
            </div>
          </div>
          <h3 className="login-modal__title">Client Portal Login</h3>
          <p className="login-modal__sub">Access your Brain Mapping Reports & Progress Dashboard</p>
        </div>

        {submitted ? (
          <div className="login-modal__success">
            <CheckIcon size={18} color="#10B981" />
            <span>Welcome back! Redirecting to your dashboard...</span>
          </div>
        ) : (
          <form className="login-modal__form" onSubmit={handleSubmit}>
            <div className="login-modal__tabs">
              <button
                type="button"
                className={`login-modal__tab ${loginType === 'phone' ? 'login-modal__tab--active' : ''}`}
                onClick={() => setLoginType('phone')}
              >
                <PhoneIcon size={14} />
                <span>Phone / Mobile</span>
              </button>
              <button
                type="button"
                className={`login-modal__tab ${loginType === 'email' ? 'login-modal__tab--active' : ''}`}
                onClick={() => setLoginType('email')}
              >
                <MailIcon size={14} />
                <span>Email Address</span>
              </button>
            </div>

            <div className="login-modal__group">
              <label className="login-modal__label">
                {loginType === 'phone' ? 'Mobile Number' : 'Email Address'} *
              </label>
              <input
                type={loginType === 'phone' ? 'tel' : 'email'}
                className="login-modal__input"
                placeholder={loginType === 'phone' ? 'Enter 10-digit mobile number' : 'Enter registered email'}
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                required
              />
            </div>

            <div className="login-modal__group">
              <label className="login-modal__label">Password / PIN *</label>
              <input
                type="password"
                className="login-modal__input"
                placeholder="Enter password or report access code"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>

            <div className="login-modal__row">
              <label className="login-modal__remember">
                <input type="checkbox" defaultChecked /> Remember me
              </label>
              <a href="tel:9106545374" className="login-modal__forgot">Forgot Password?</a>
            </div>

            <button type="submit" className="btn-primary login-modal__submit">
              <LockIcon size={16} />
              <span>Login to Portal</span>
            </button>

            <p className="login-modal__footer-text">
              Don't have a report access code yet? <a href="tel:9106545374" style={{ color: 'var(--color-gold)' }}>Contact Support</a>
            </p>
          </form>
        )}
      </div>
    </div>
  );
};

export default LoginModal;
