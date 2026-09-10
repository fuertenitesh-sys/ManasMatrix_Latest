import React, { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { 
  PhoneIcon, 
  ChevronDownIcon, 
  ChildIcon, 
  BriefcaseIcon, 
  BrainIcon, 
  UsersIcon 
} from '../Icons';
import BookingModal from '../BookingModal/BookingModal';
import './Navbar.css';

const programOptions = [
  { 
    label: 'Child Development', 
    path: '/programs/child-development', 
    icon: <ChildIcon size={18} color="#EC4899" /> 
  },
  { 
    label: 'Personalized Business Development', 
    path: '/programs/business-development', 
    icon: <BriefcaseIcon size={18} color="#60A5FA" /> 
  },
  { 
    label: 'Brain Mapping (DMIT)', 
    path: '/programs/brain-mapping', 
    icon: <BrainIcon size={18} color="#F59E0B" /> 
  },
  { 
    label: 'Team Building & Employee Development', 
    path: '/programs/team-building', 
    icon: <UsersIcon size={18} color="#10B981" /> 
  },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileProgramsOpen, setMobileProgramsOpen] = useState(false);
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [selectedService, setSelectedService] = useState('');
  const location = useLocation();

  useEffect(() => {
    const handleOpenModal = (e) => {
      if (e.detail?.service) {
        setSelectedService(e.detail.service);
      } else {
        setSelectedService('');
      }
      setIsBookingOpen(true);
    };
    window.addEventListener('open-booking-modal', handleOpenModal);
    return () => window.removeEventListener('open-booking-modal', handleOpenModal);
  }, []);

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

  useEffect(() => {
    setDropdownOpen(false);
    setMenuOpen(false);
  }, [location.pathname]);

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
    setDropdownOpen(false);
    if (document.activeElement) {
      document.activeElement.blur();
    }
    if (location.pathname === path) {
      window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    }
  };

  const openBookingModal = (e) => {
    if (e && e.preventDefault) e.preventDefault();
    setMenuOpen(false);
    setSelectedService('');
    setIsBookingOpen(true);
  };

  return (
    <>
      <nav className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`} id="navbar">
        <div className="navbar__inner">
          {/* Logo: MANAS MATRIX GrowUp Business Services */}
          <Link to="/" className="navbar__logo" id="navbar-logo" onClick={() => handleNavClick('/')}>
            <img src="/logo_clean.png" alt="MANAS MATRIX Logo Icon" className="navbar__logo-icon-img" />
            <div className="navbar__logo-text-group">
              <span className="navbar__logo-title">MANAS MATRIX</span>
              <span className="navbar__logo-sub">GrowUp Business Services</span>
            </div>
          </Link>

          {/* Desktop Nav Links */}
          <ul className="navbar__links" id="navbar-links">
            {navLinks.map((link) => {
              if (link.label === 'Programs') {
                return (
                  <li 
                    key={link.label} 
                    className="navbar__item navbar__item--dropdown"
                    onMouseEnter={() => setDropdownOpen(true)}
                    onMouseLeave={() => setDropdownOpen(false)}
                  >
                    <NavLink
                      to={link.path}
                      className={({ isActive }) => 
                        `navbar__link navbar__link--has-dropdown ${
                          isActive || location.pathname.startsWith('/programs') ? 'navbar__link--active' : ''
                        }`
                      }
                      onMouseEnter={() => setDropdownOpen(true)}
                      onClick={() => handleNavClick(link.path)}
                    >
                      <span>{link.label}</span>
                      <span 
                        className="navbar__dropdown-arrow"
                        style={{
                          transform: dropdownOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                          transition: 'transform 0.25s ease'
                        }}
                      >
                        <ChevronDownIcon size={14} color="#F59E0B" />
                      </span>
                    </NavLink>

                    <div 
                      className={`navbar__dropdown ${dropdownOpen ? 'navbar__dropdown--open' : ''}`}
                      onMouseEnter={() => setDropdownOpen(true)}
                    >
                      {programOptions.map((opt) => (
                        <Link
                          key={opt.label}
                          to={opt.path}
                          className={`navbar__dropdown-item ${location.pathname === opt.path ? 'navbar__dropdown-item--active' : ''}`}
                          onClick={(e) => {
                            e.stopPropagation();
                            setDropdownOpen(false);
                            handleNavClick(opt.path);
                          }}
                        >
                          <span className="navbar__dropdown-icon">{opt.icon}</span>
                          <span>{opt.label}</span>
                        </Link>
                      ))}
                    </div>
                  </li>
                );
              }

              return (
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
              );
            })}
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
            {navLinks.map((link) => {
              if (link.label === 'Programs') {
                return (
                  <React.Fragment key={link.label}>
                    <li>
                      <div className="navbar__mobile-programs-header">
                        <NavLink
                          to={link.path}
                          className={({ isActive }) => `navbar__mobile-link ${isActive ? 'navbar__mobile-link--active' : ''}`}
                          onClick={() => handleNavClick(link.path)}
                        >
                          {link.label}
                        </NavLink>
                        <button 
                          className="navbar__mobile-toggle-btn"
                          onClick={(e) => {
                            e.preventDefault();
                            setMobileProgramsOpen(!mobileProgramsOpen);
                          }}
                        >
                          <ChevronDownIcon 
                            size={16} 
                            color="#F59E0B" 
                            style={{ 
                              transform: mobileProgramsOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                              transition: 'transform 0.2s ease'
                            }} 
                          />
                        </button>
                      </div>
                    </li>
                    {mobileProgramsOpen && (
                      <div className="navbar__mobile-sublinks">
                        {programOptions.map((opt) => (
                          <Link
                            key={opt.label}
                            to={opt.path}
                            className={`navbar__mobile-sublink ${location.pathname === opt.path ? 'navbar__mobile-sublink--active' : ''}`}
                            onClick={() => handleNavClick(opt.path)}
                          >
                            <span className="navbar__dropdown-icon">{opt.icon}</span>
                            <span>{opt.label}</span>
                          </Link>
                        ))}
                      </div>
                    )}
                  </React.Fragment>
                );
              }

              return (
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
              );
            })}
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
      <BookingModal isOpen={isBookingOpen} onClose={() => setIsBookingOpen(false)} defaultService={selectedService} />
    </>
  );
};

export default Navbar;
