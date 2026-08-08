import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { PhoneIcon, MapPinIcon, InstagramIcon, BrainIcon } from '../Icons';
import './Footer.css';

const Footer = () => {
  const location = useLocation();

  const handleNavClick = (path) => {
    if (location.pathname === path) {
      window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    } else {
      window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    }
  };

  return (
    <footer className="footer" id="footer">
      <div className="container">
        <div className="footer__top-inner">
          {/* Brand */}
          <div className="footer__brand animate-reveal fade-right">
            <Link to="/" className="footer__logo" onClick={() => handleNavClick('/')}>
              <img src="/logo_brain_icon.png" alt="MANAS MATRIX Logo Icon" className="footer__logo-icon-img" />
              <div className="footer__logo-text-group">
                <span className="footer__logo-title">MANAS MATRIX</span>
                <span className="footer__logo-sub">GrowUp Business Services</span>
              </div>
            </Link>
            <p className="footer__brand-desc">
              Scientific Brain Mapping & DMI Multiple Intelligence Analysis. Empowering children, families, and professionals in Rajkot, Gujarat to discover their true cognitive blueprint.
            </p>
            <div className="footer__location-badge">
              <MapPinIcon size={14} color="#F59E0B" />
              <span>Spire, 150 Feet Ring Rd, Rajkot</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="footer__col animate-reveal fade-up delay-100">
            <h4 className="footer__col-title">Quick Links</h4>
            <ul className="footer__links">
              <li><Link to="/" onClick={() => handleNavClick('/')}>Home</Link></li>
              <li><Link to="/about" onClick={() => handleNavClick('/about')}>About Us</Link></li>
              <li><Link to="/how-it-works" onClick={() => handleNavClick('/how-it-works')}>How It Works</Link></li>
              <li><Link to="/programs" onClick={() => handleNavClick('/programs')}>Programs & Pricing</Link></li>
              <li><Link to="/services" onClick={() => handleNavClick('/services')}>Our Services</Link></li>
              <li><Link to="/contact" onClick={() => handleNavClick('/contact')}>Contact Us</Link></li>
            </ul>
          </div>

          {/* Programs */}
          <div className="footer__col animate-reveal fade-up delay-200">
            <h4 className="footer__col-title">Our Programs</h4>
            <ul className="footer__links">
              <li><Link to="/programs" onClick={() => handleNavClick('/programs')}>DISC Assessment (₹1,999)</Link></li>
              <li><Link to="/programs" onClick={() => handleNavClick('/programs')}>Child Program (₹9,999)</Link></li>
              <li><Link to="/programs" onClick={() => handleNavClick('/programs')}>Professional Program (₹14,999)</Link></li>
              <li><Link to="/programs" onClick={() => handleNavClick('/programs')}>Elite Family Program (₹37,499)</Link></li>
            </ul>
          </div>

          {/* Contact Details */}
          <div className="footer__col animate-reveal fade-left delay-300">
            <h4 className="footer__col-title">Contact Us</h4>
            <div className="footer__contact-items">
              <a href="tel:9106545374" className="footer__contact-item">
                <PhoneIcon size={16} color="#F59E0B" />
                <span>Call: 9106545374</span>
              </a>
              <a
                href="https://maps.google.com/?q=MANAS+MATRIX+Spire+150+Feet+Ring+Rd+Rajkot"
                target="_blank"
                rel="noopener noreferrer"
                className="footer__contact-item"
              >
                <MapPinIcon size={16} color="#3B82F6" />
                <span>Spire, 150 Feet Ring Rd, Rajkot, Gujarat 360006 ↗</span>
              </a>
              <a
                href="https://instagram.com/manas_matrix"
                target="_blank"
                rel="noopener noreferrer"
                className="footer__contact-item"
              >
                <InstagramIcon size={16} color="#FF6B35" />
                <span>Instagram: @manas_matrix ↗</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="footer__bottom">
          <div className="footer__bottom-inner">
            <p>© {new Date().getFullYear()} MANAS MATRIX • GrowUp Business Services. All rights reserved.</p>
            <p>Designed with excellence for clients in Rajkot, Gujarat.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
