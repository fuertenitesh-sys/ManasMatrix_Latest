import React, { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { PhoneIcon } from '../Icons';
import BookingModal from '../BookingModal/BookingModal';
import './Navbar.css';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled((prev) => {
        const isScrolled = window.scrollY > 20;
        return prev !== isScrolled ? isScrolled : prev;
      });
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
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

  const handleNavClick = (path) => {
    setMenuOpen(false);
    if (location.pathname === path) {
      window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    }
  };

  const openBookingModal = (e) => {
    e.preventDefault();
    setMenuOpen(false);
    setIsBookingOpen(true);
  };

  return (
    <>
      <nav className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`} id="navbar">
        <div className="navbar__inner">
          {/* Logo: MANAS MATRIX GrowUp Business Services */}
          <Link to="/" className="navbar__logo" id="navbar-logo" onClick={() => handleNavClick('/')}>
            <img src="/logo_brain_icon.png" alt="MANAS MATRIX Logo Icon" className="navbar__logo-icon-img" />
            <div className="navbar__logo-text-group">
              <span className="navbar__logo-title">MANAS MATRIX</span>
              <span className="navbar__logo-sub">GrowUp Business Services</span>
            </div>
          </Link>

          {/* Desktop Nav Links - Generous Equal Spacing */}
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

          {/* Action Button */}
          <div className="navbar__actions">
            {location.pathname.startsWith('/admin') ? (
              <button 
                className="btn-primary navbar__cta" 
                style={{ background: '#EF4444' }} 
                onClick={async () => {
                  try {
                    await fetch('/api/auth/logout', { method: 'POST' });
                    window.location.href = '/admin/bookings';
                  } catch(err) {}
                }}
              >
                <span>Logout</span>
              </button>
            ) : (
              <button className="btn-primary navbar__cta" id="navbar-cta" onClick={openBookingModal}>
                <PhoneIcon size={16} />
                <span>Book Now</span>
              </button>
            )}
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
            <li style={{ marginTop: '12px' }}>
              <button className="btn-primary" onClick={openBookingModal} style={{ width: '100%', justifyContent: 'center' }}>
                <PhoneIcon size={16} />
                <span>Book Now</span>
              </button>
            </li>
          </ul>
        </div>
      </nav>

      {/* Professional Booking Modal Overlay */}
      <BookingModal isOpen={isBookingOpen} onClose={() => setIsBookingOpen(false)} />
    </>
  );
};

export default Navbar;
