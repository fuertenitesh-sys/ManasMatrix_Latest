import React, { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import LoginModal from '../LoginModal/LoginModal';
import { PhoneIcon, ArrowRightIcon } from '../Icons';
import './Navbar.css';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [loginOpen, setLoginOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', path: '/' },
    { label: 'Programs ∨', path: '/programs' },
    { label: 'How It Works', path: '/how-it-works' },
    { label: 'About Us', path: '/about' },
    { label: 'Contact Us', path: '/contact' },
  ];

  const handleNavClick = (path) => {
    setMenuOpen(false);
    if (location.pathname === path) {
      window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    }
  };

  return (
    <>
      <nav className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`} id="navbar">
        <div className="navbar__inner">
          {/* Taqsha Style Logo: MANAS MATRIX by GROWUP BUSINESS SERVICES */}
          <Link to="/" className="navbar__logo" id="navbar-logo" onClick={() => handleNavClick('/')}>
            <img src="/logo_brain_icon.png" alt="MANAS MATRIX Logo Icon" className="navbar__logo-icon-img" />
            <div className="navbar__logo-text-group">
              <span className="navbar__logo-title">MANAS MATRIX</span>
              <span className="navbar__logo-sub">by GROWUP BUSINESS SERVICES</span>
            </div>
          </Link>

          {/* Desktop Nav Links (Taqsha Style) */}
          <ul className="navbar__links" id="navbar-links">
            {navLinks.map((link) => (
              <li key={link.label} className="navbar__item">
                <NavLink
                  to={link.path}
                  className={({ isActive }) => `navbar__link ${isActive ? 'navbar__link--active' : ''}`}
                  onClick={() => handleNavClick(link.path)}
                  end={link.path === '/'}
                >
                  <span>{link.label}</span>
                </NavLink>
              </li>
            ))}
          </ul>

          {/* Taqsha Style Right Action Buttons: Login + Book Now CTA */}
          <div className="navbar__actions">
            <button
              className="navbar__login-btn"
              onClick={() => setLoginOpen(true)}
              id="navbar-login-btn"
            >
              <span>Login</span>
              <ArrowRightIcon size={14} />
            </button>

            <Link to="/contact" className="btn-primary navbar__cta" id="navbar-cta" onClick={() => handleNavClick('/contact')}>
              <PhoneIcon size={16} />
              <span>Book Now</span>
            </Link>
          </div>

          {/* Mobile Hamburger Toggle */}
          <button
            className={`navbar__hamburger ${menuOpen ? 'navbar__hamburger--open' : ''}`}
            onClick={() => setMenuOpen(!menuOpen)}
            id="navbar-hamburger"
            aria-label="Toggle menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>

        {/* Mobile Menu Drawer */}
        <div className={`navbar__mobile-menu ${menuOpen ? 'navbar__mobile-menu--open' : ''}`} id="navbar-mobile-menu">
          <ul>
            {navLinks.map((link) => (
              <li key={link.label}>
                <NavLink
                  to={link.path}
                  className={({ isActive }) => `navbar__mobile-link ${isActive ? 'navbar__mobile-link--active' : ''}`}
                  onClick={() => handleNavClick(link.path)}
                  end={link.path === '/'}
                >
                  {link.label}
                </NavLink>
              </li>
            ))}
            <li style={{ display: 'flex', gap: '10px', marginTop: '12px' }}>
              <button
                className="navbar__login-btn"
                style={{ flex: 1, justifyContent: 'center' }}
                onClick={() => {
                  setMenuOpen(false);
                  setLoginOpen(true);
                }}
              >
                <span>Login</span>
                <ArrowRightIcon size={14} />
              </button>
              <Link to="/contact" className="btn-primary" onClick={() => handleNavClick('/contact')} style={{ flex: 1.2, justifyContent: 'center' }}>
                <PhoneIcon size={16} />
                <span>Book Now</span>
              </Link>
            </li>
          </ul>
        </div>
      </nav>

      {/* Login Portal Modal */}
      <LoginModal isOpen={loginOpen} onClose={() => setLoginOpen(false)} />
    </>
  );
};

export default Navbar;
