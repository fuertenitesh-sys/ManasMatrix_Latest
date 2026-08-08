import React, { useState } from 'react';
import { PhoneIcon, MapPinIcon, InstagramIcon, ArrowRightIcon, BrainIcon } from '../Icons';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    program: 'Child Program (₹9,999)',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <section className="section contact" id="contact">
      <div className="container">
        <div className="section-header">
          <div className="section-badge">
            <PhoneIcon size={14} color="#F59E0B" />
            <span>Get In Touch</span>
          </div>
          <h2 className="section-title">
            Begin Your <span className="gradient-text-gold">Transformation Today</span>
          </h2>
          <p className="section-subtitle">
            Contact us for a free consultation. Our certified brain mapping experts in Rajkot are ready to guide you.
          </p>
        </div>

        <div className="contact__grid">
          {/* Left Column: Contact Details Card (Image 4 Fix: Our Programs box removed for equal height alignment) */}
          <div className="contact__info-card glass-card animate-reveal fade-right">
            <div className="contact__brand-header">
              <img src="/logo_brain_icon.png" alt="MANAS MATRIX Logo Icon" className="contact__logo-icon-img" />
              <div className="contact__brand-text">
                <span className="contact__brand-title">MANAS MATRIX</span>
                <span className="contact__brand-sub">GrowUp Business Services</span>
              </div>
            </div>

            <h3 className="contact__info-title">Let's Connect</h3>
            <p className="contact__info-text">
              Ready to discover your brain's true potential? Book a consultation call with our certified Brain Mapping experts in Rajkot today.
            </p>

            <div className="contact__details">
              <a href="tel:9106545374" className="contact__detail contact__detail--clickable">
                <div className="contact__detail-icon">
                  <PhoneIcon size={20} color="#F59E0B" />
                </div>
                <div>
                  <div className="contact__detail-label">CALL US DIRECTLY</div>
                  <div className="contact__detail-value">9106545374 ↗</div>
                </div>
              </a>

              <a
                href="https://maps.google.com/?q=MANAS+MATRIX+Spire+150+Feet+Ring+Rd+Rajkot"
                target="_blank"
                rel="noopener noreferrer"
                className="contact__detail contact__detail--clickable"
              >
                <div className="contact__detail-icon">
                  <MapPinIcon size={20} color="#3B82F6" />
                </div>
                <div>
                  <div className="contact__detail-label">LOCATION (CLICK FOR GOOGLE MAPS)</div>
                  <div className="contact__detail-value">
                    Spire, 150 Feet Ring Rd, near Sheetal Park, Rajkot, Gujarat 360006 ↗
                  </div>
                </div>
              </a>

              <a
                href="https://instagram.com/manas_matrix"
                target="_blank"
                rel="noopener noreferrer"
                className="contact__detail contact__detail--clickable"
              >
                <div className="contact__detail-icon">
                  <InstagramIcon size={20} color="#FF6B35" />
                </div>
                <div>
                  <div className="contact__detail-label">INSTAGRAM</div>
                  <div className="contact__detail-value">@manas_matrix ↗</div>
                </div>
              </a>
            </div>

            {/* Note: "Our Programs" list removed per Image 4 directive to ensure left and right cards are perfectly equal in size! */}
          </div>

          {/* Right Column: Contact Form */}
          <div className="contact__form glass-card animate-reveal fade-left">
            <h3 className="contact__form-title">Book a Free Consultation</h3>

            {submitted && (
              <div className="contact__success">
                ✅ Thank you! Our Rajkot expert will call you shortly on <strong>{formData.phone}</strong>.
              </div>
            )}

            <form onSubmit={handleSubmit}>
              <div className="contact__form-row">
                <div className="contact__form-group">
                  <label className="contact__label">Full Name *</label>
                  <input
                    type="text"
                    className="contact__input"
                    placeholder="Your full name"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  />
                </div>
                <div className="contact__form-group">
                  <label className="contact__label">Phone Number *</label>
                  <input
                    type="tel"
                    className="contact__input"
                    placeholder="Your phone number"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  />
                </div>
              </div>

              <div className="contact__form-group" style={{ marginTop: '16px' }}>
                <label className="contact__label">Email Address</label>
                <input
                  type="email"
                  className="contact__input"
                  placeholder="your@email.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                />
              </div>

              <div className="contact__form-group" style={{ marginTop: '16px' }}>
                <label className="contact__label">Program Interested In *</label>
                <select
                  className="contact__input contact__select"
                  value={formData.program}
                  onChange={(e) => setFormData({ ...formData, program: e.target.value })}
                >
                  <option value="DISC Assessment (₹1,999)">DISC Assessment (₹1,999)</option>
                  <option value="Child Program (₹9,999)">Child Program (₹9,999)</option>
                  <option value="Professional (₹14,999)">Professional (₹14,999)</option>
                  <option value="Elite Family (₹37,499)">Elite Family (₹37,499)</option>
                </select>
              </div>

              <div className="contact__form-group" style={{ marginTop: '16px' }}>
                <label className="contact__label">Message (Optional)</label>
                <textarea
                  className="contact__input contact__textarea"
                  placeholder="Tell us about yourself or your child..."
                  rows="3"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                ></textarea>
              </div>

              <button type="submit" className="btn-primary contact__submit" style={{ marginTop: '24px' }}>
                <PhoneIcon size={18} />
                <span>Send Enquiry</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
