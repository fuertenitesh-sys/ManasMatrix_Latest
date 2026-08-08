import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    program: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
    setFormData({ name: '', phone: '', email: '', program: '', message: '' });
  };

  const mapSearchUrl = "https://maps.google.com/?q=MANAS+MATRIX+Spire+150+Feet+Ring+Rd+Rajkot";

  return (
    <section className="contact section" id="contact">
      <div className="glow-orb" style={{ width: '500px', height: '500px', background: 'radial-gradient(circle, rgba(245,158,11,0.1), transparent)', bottom: '0', left: '0' }}></div>

      <div className="container">
        <div className="section-header">
          <div className="section-badge">📞 Get In Touch</div>
          <h2 className="section-title">
            Begin Your <span className="gradient-text-gold">Transformation</span> Today
          </h2>
          <div className="divider"></div>
          <p className="section-subtitle" style={{ marginTop: '16px' }}>
            Contact us for a free consultation. Our experts in Rajkot are ready to guide you.
          </p>
        </div>

        <div className="contact__grid">
          {/* Info */}
          <div className="contact__info">
            <div className="contact__info-card glass-card">
              <div className="contact__brand-header">
                <img src="/logo_clean.png" alt="MANAS MATRIX Logo" className="contact__logo-img" />
              </div>

              <h3 className="contact__info-title">Let's Connect</h3>
              <p className="contact__info-text">
                Ready to discover your brain's true potential? Book a free consultation call with our certified Brain Mapping experts today.
              </p>

              <div className="contact__details">
                {/* Phone */}
                <a href="tel:9106545374" className="contact__detail contact__detail--clickable" id="contact-phone">
                  <div className="contact__detail-icon">📞</div>
                  <div>
                    <div className="contact__detail-label">Call Us Directly</div>
                    <div className="contact__detail-value">9106545374 ↗</div>
                  </div>
                </a>

                {/* Clickable Location Link */}
                <a
                  href={mapSearchUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact__detail contact__detail--clickable"
                  id="contact-location"
                  title="Click to open location in Google Maps"
                >
                  <div className="contact__detail-icon">📍</div>
                  <div>
                    <div className="contact__detail-label">Location (Click for Google Maps)</div>
                    <div className="contact__detail-value">
                      Spire, 150 Feet Ring Rd, near Sheetal Park, Rajkot, Gujarat 360006 ↗
                    </div>
                  </div>
                </a>

                {/* Instagram */}
                <a
                  href="https://instagram.com/manas_matrix"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact__detail contact__detail--clickable"
                  id="contact-instagram"
                >
                  <div className="contact__detail-icon">📸</div>
                  <div>
                    <div className="contact__detail-label">Instagram</div>
                    <div className="contact__detail-value">@manas_matrix ↗</div>
                  </div>
                </a>
              </div>

              {/* Programs quick links */}
              <div className="contact__programs">
                <p className="contact__programs-label">Our Programs:</p>
                {[
                  { name: 'DISC Assessment', price: '₹1,999' },
                  { name: 'Child Program', price: '₹9,999' },
                  { name: 'Professional', price: '₹14,999' },
                  { name: 'Elite Family', price: '₹37,499' },
                ].map((p) => (
                  <div key={p.name} className="contact__program-chip">
                    <span>{p.name}</span>
                    <span className="contact__program-price">{p.price}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="contact__form-wrapper">
            <form className="contact__form glass-card" onSubmit={handleSubmit} id="contact-form">
              <h3 className="contact__form-title">Book a Free Consultation</h3>

              {submitted && (
                <div className="contact__success">
                  ✅ Thank you! We will contact you within 24 hours.
                </div>
              )}

              <div className="contact__form-row">
                <div className="contact__form-group">
                  <label className="contact__label" htmlFor="contact-name">Full Name *</label>
                  <input
                    id="contact-name"
                    type="text"
                    name="name"
                    placeholder="Your full name"
                    className="contact__input"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="contact__form-group">
                  <label className="contact__label" htmlFor="contact-phone-input">Phone Number *</label>
                  <input
                    id="contact-phone-input"
                    type="tel"
                    name="phone"
                    placeholder="Your phone number"
                    className="contact__input"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              <div className="contact__form-group">
                <label className="contact__label" htmlFor="contact-email">Email Address</label>
                <input
                  id="contact-email"
                  type="email"
                  name="email"
                  placeholder="your@email.com"
                  className="contact__input"
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>

              <div className="contact__form-group">
                <label className="contact__label" htmlFor="contact-program">Program Interested In *</label>
                <select
                  id="contact-program"
                  name="program"
                  className="contact__input contact__select"
                  value={formData.program}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select a program</option>
                  <option value="disc">DISC Personality Assessment — ₹1,999</option>
                  <option value="child">Growth Transformation Program — ₹9,999</option>
                  <option value="professional">Advanced Brain Mapping (Professional) — ₹14,999</option>
                  <option value="elite">Elite Family Transformation — ₹37,499</option>
                  <option value="counselling">General Counselling Enquiry</option>
                </select>
              </div>

              <div className="contact__form-group">
                <label className="contact__label" htmlFor="contact-message">Message (Optional)</label>
                <textarea
                  id="contact-message"
                  name="message"
                  placeholder="Tell us about yourself or your child..."
                  className="contact__input contact__textarea"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                />
              </div>

              <button type="submit" className="btn-primary contact__submit" id="contact-submit">
                <span>📩 Send Enquiry</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
