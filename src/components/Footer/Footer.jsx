import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const handleLinkClick = () => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  };

  const programs = [
    { name: 'DISC Personality Assessment', price: '₹1,999', path: '/programs' },
    { name: 'Growth Transformation (Child)', price: '₹9,999', path: '/programs' },
    { name: 'Advanced Brain Mapping', price: '₹14,999', path: '/programs' },
    { name: 'Elite Family Transformation', price: '₹37,499', path: '/programs' },
  ];

  const services = [
    'Parenting Counselling',
    'Education Counselling',
    'Relationship Counselling',
    'Family Counselling',
    'Corporate Counselling',
    'Business Counselling',
  ];

  const mapSearchUrl = "https://maps.google.com/?q=MANAS+MATRIX+Spire+150+Feet+Ring+Rd+Rajkot";

  return (
    <footer className="footer" id="footer">
      <div className="footer__top">
        <div className="container footer__top-inner">
          {/* Brand Column */}
          <div className="footer__brand animate-reveal fade-up delay-100">
            <Link to="/" className="footer__logo" onClick={handleLinkClick} style={{ textDecoration: 'none' }}>
              <img src="/logo_brain_icon.png" alt="MANAS MATRIX Logo Icon" className="footer__logo-icon-img" />
              <div className="footer__logo-text-group">
                <span className="footer__logo-title">MANAS MATRIX</span>
                <span className="footer__logo-sub">GrowUp Business Services</span>
              </div>
            </Link>

            <p className="footer__tagline">
              Know Yourself Better to Grow Better. Rajkot's leading Brain Mapping & Self Discovery Center.
            </p>

            <div className="footer__contact-quick">
              <a href="tel:9106545374" className="footer__phone" id="footer-phone">📞 9106545374</a>
              <a
                href={mapSearchUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="footer__location-link"
                title="Click to view Google Maps location"
              >
                📍 Spire, 150 Feet Ring Rd, Rajkot, Gujarat ↗
              </a>
            </div>

            <div className="footer__social">
              <a href="https://instagram.com/manas_matrix" target="_blank" rel="noopener noreferrer" className="footer__social-link" id="footer-instagram" aria-label="Instagram">
                <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Programs Column */}
          <div className="footer__col animate-reveal fade-up delay-200">
            <h4 className="footer__col-title">Our Programs</h4>
            <div className="footer__programs">
              {programs.map((p) => (
                <Link key={p.name} to={p.path} className="footer__program-link" onClick={handleLinkClick}>
                  <span>{p.name}</span>
                  <span className="footer__program-price">{p.price}</span>
                </Link>
              ))}
            </div>
          </div>

          {/* Services Column */}
          <div className="footer__col animate-reveal fade-up delay-300">
            <h4 className="footer__col-title">Counselling Services</h4>
            <ul className="footer__links">
              {services.map((s) => (
                <li key={s}>
                  <Link to="/services" className="footer__link" onClick={handleLinkClick}>✦ {s}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links Column */}
          <div className="footer__col animate-reveal fade-up delay-400">
            <h4 className="footer__col-title">Quick Links</h4>
            <ul className="footer__links">
              <li><Link to="/" className="footer__link" onClick={handleLinkClick}>Home</Link></li>
              <li><Link to="/about" className="footer__link" onClick={handleLinkClick}>About Us</Link></li>
              <li><Link to="/how-it-works" className="footer__link" onClick={handleLinkClick}>How It Works</Link></li>
              <li><Link to="/programs" className="footer__link" onClick={handleLinkClick}>Programs & Pricing</Link></li>
              <li><Link to="/services" className="footer__link" onClick={handleLinkClick}>Our Services</Link></li>
              <li><Link to="/contact" className="footer__link" onClick={handleLinkClick}>Contact Us</Link></li>
            </ul>
          </div>
        </div>
      </div>

      <div className="footer__bottom animate-reveal fade-up">
        <div className="container footer__bottom-inner">
          <p>© {currentYear} Manas Matrix | GrowUp Business Services. All rights reserved.</p>
          <a
            href={mapSearchUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="footer__map-bottom-link"
          >
            📍 Spire, 150 Feet Ring Rd, Rajkot, Gujarat 360006 (Click for Directions ↗) | 📞 9106545374
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
