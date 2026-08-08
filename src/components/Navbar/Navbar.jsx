import React, { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import LoginModal from '../LoginModal/LoginModal';
import './Navbar.css';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [loginOpen, setLoginOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', path: '/' },
    { label: 'About', path: '/about' },
    { label: 'How It Works', path: '/how-it-works' },
    { label: 'Programs', path: '/programs' },
    { label: 'Services', path: '/services' },
    { label: 'Contact', path: '/contact' },
  ];

  const handleNavClick = () => setMenuOpen(false);

  return (
    <>
      <nav className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`} id="navbar">
        <div className="container navbar__inner">
          {/* Official Transparent Logo - Big & Clear */}
          <Link to="/" className="navbar__logo" id="navbar-logo" onClick={handleNavClick}>
            <img src="/logo_clean.png" alt="MANAS MATRIX Logo" className="navbar__logo-img" />
          </Link>

          {/* Desktop Nav Links */}
          <ul className="navbar__links" id="navbar-links">
            {navLinks.map((link) => (
              <li key={link.label} className="navbar__item">
                <NavLink
                  to={link.path}
                  className={({ isActive }) => `navbar__link ${isActive ? 'navbar__link--active' : ''}`}
                  onClick={handleNavClick}
                  end={link.path === '/'}
                >
                  <span>{link.label}</span>
                </NavLink>
              </li>
            ))}
          </ul>

          {/* Action Buttons: Location + Login + Book Now */}
          <div className="navbar__actions">
            <a
              href="https://maps.google.com/?q=MANAS+MATRIX+Spire+150+Feet+Ring+Rd+Rajkot"
              target="_blank"
              rel="noopener noreferrer"
              className="navbar__location-btn"
              title="Click to view location on Google Maps"
            >
              📍 Rajkot ↗
            </a>

            {/* Login Button (Inspired by Taqsha Header) */}
            <button
              className="navbar__login-btn"
              onClick={() => setLoginOpen(true)}
              id="navbar-login-btn"
            >
              <span>👤 Login</span>
            </button>

            <Link to="/contact" className="btn-primary navbar__cta" id="navbar-cta">
              <span>📞 Book Now</span>
            </Link>
          </div>

          {/* Mobile Hamburger */}
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

        {/* Mobile Menu */}
        <div className={`navbar__mobile-menu ${menuOpen ? 'navbar__mobile-menu--open' : ''}`} id="navbar-mobile-menu">
          <ul>
            {navLinks.map((link) => (
              <li key={link.label}>
                <NavLink
                  to={link.path}
                  className={({ isActive }) => `navbar__mobile-link ${isActive ? 'navbar__mobile-link--active' : ''}`}
                  onClick={handleNavClick}
                  end={link.path === '/'}
                >
                  {link.label}
                </NavLink>
              </li>
            ))}
            <li>
              <a
                href="https://maps.google.com/?q=MANAS+MATRIX+Spire+150+Feet+Ring+Rd+Rajkot"
                target="_blank"
                rel="noopener noreferrer"
                className="navbar__mobile-location"
              >
                📍 Spire, 150 Feet Ring Rd, Rajkot ↗
              </a>
            </li>
            <li style={{ display: 'flex', gap: '10px', marginTop: '12px' }}>
              <button
                className="navbar__login-btn"
                style={{ flex: 1, justifyContent: 'center' }}
                onClick={() => {
                  setMenuOpen(false);
                  setLoginOpen(true);
                }}
              >
                👤 Login
              </button>
              <Link to="/contact" className="btn-primary" onClick={handleNavClick} style={{ flex: 1.2, justifyContent: 'center' }}>
                <span>📞 Book Now</span>
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
