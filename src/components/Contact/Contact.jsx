import React, { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { PhoneIcon, MapPinIcon, MailIcon, MessageCircleIcon, CheckIcon } from '../Icons';
import './Contact.css';

const Contact = ({ hideHeader = false }) => {
  const [searchParams] = useSearchParams();
  const [formData, setFormData] = useState(() => ({
    name: '',
    phone: '',
    email: '',
    program: searchParams.get('service') || '',
    message: '',
    companyName: '',
    teamSize: '',
    consent: false,
  }));
  const [submitted, setSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError('');

    try {
      const response = await fetch('/api/contact-submissions', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.message || 'Unable to submit your enquiry.');
      }

      setSubmitted(true);
      setFormData({ name: '', phone: '', email: '', program: '', message: '', companyName: '', teamSize: '', consent: false });
      window.setTimeout(() => setSubmitted(false), 5000);
    } catch (error) {
      setSubmitError(error.message || 'Unable to submit your enquiry. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const mapSearchUrl = "https://maps.google.com/?q=MANAS+MATRIX+Spire+150+Feet+Ring+Rd+Rajkot";

  return (
    <section className="contact section" id="contact">
      <div className="glow-orb" style={{ width: '500px', height: '500px', background: 'radial-gradient(circle, rgba(245,158,11,0.1), transparent)', bottom: '0', left: '0' }}></div>

      <div className="container">
        {!hideHeader && (
          <div className="section-header animate-reveal fade-up">
            <div className="section-badge">
              <PhoneIcon size={14} color="#F59E0B" />
              <span>Get In Touch</span>
            </div>
            <h2 className="section-title">
              Begin Your <span className="gradient-text-gold">Transformation</span> Today
            </h2>
            <div className="divider"></div>
            <p className="section-subtitle">
              Tell us what you want to understand or improve. We will help you choose a suitable next step.
            </p>
          </div>
        )}

        <div className="contact__grid">
          {/* Left Info Card */}
          <div className="contact__info animate-reveal fade-left delay-100">
            <div className="contact__info-card glass-card">
              <div className="contact__brand-header animate-reveal fade-up">
                <img src="/logo_brain_icon.png" alt="MANAS MATRIX Logo Icon" className="contact__logo-icon-img" />
                <div className="contact__brand-text">
                  <span className="contact__brand-title">MANAS MATRIX</span>
                  <span className="contact__brand-sub">Understand Brain. Unlock Potential.</span>
                </div>
              </div>

              <h3 className="contact__info-title animate-reveal fade-up delay-100">Let's Find the Right Program for Your Goal</h3>
              <p className="contact__info-text animate-reveal fade-up delay-200">
                Talk to us about yourself, your child, your family, your business or your team.
              </p>

              <div className="contact__details animate-reveal fade-up delay-300">
                {/* Phone */}
                <a href="tel:9106545374" className="contact__detail contact__detail--clickable" id="contact-phone">
                  <div className="contact__detail-icon">
                    <PhoneIcon size={20} color="#F59E0B" />
                  </div>
                  <div>
                    <div className="contact__detail-label">Call Us Directly</div>
                    <div className="contact__detail-value">9106545374 ↗</div>
                  </div>
                </a>

                <a href="https://wa.me/919106545374" target="_blank" rel="noopener noreferrer" className="contact__detail contact__detail--clickable" id="contact-whatsapp">
                  <div className="contact__detail-icon">
                    <MessageCircleIcon size={20} color="#10B981" />
                  </div>
                  <div>
                    <div className="contact__detail-label">WhatsApp</div>
                    <div className="contact__detail-value">WhatsApp Us ↗</div>
                  </div>
                </a>

                {/* Email */}
                <a href={`mailto:${import.meta.env.VITE_BUSINESS_EMAIL || 'contact@manasmatrix.in'}`} className="contact__detail contact__detail--clickable">
                  <div className="contact__detail-icon"><MailIcon size={20} color="#60A5FA" /></div>
                  <div><div className="contact__detail-label">Email</div><div className="contact__detail-value">{import.meta.env.VITE_BUSINESS_EMAIL || 'contact@manasmatrix.in'}</div></div>
                </a>

                {/* Location */}
                <a
                  href={mapSearchUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact__detail contact__detail--clickable"
                  id="contact-location"
                  title="Click to open location in Google Maps"
                >
                  <div className="contact__detail-icon">
                    <MapPinIcon size={20} color="#EC4899" />
                  </div>
                  <div>
                    <div className="contact__detail-label">Location (Click for Google Maps)</div>
                    <div className="contact__detail-value">
                      Spire, 150 Feet Ring Road, Rajkot, Gujarat 360006 ↗
                    </div>
                  </div>
                </a>

              </div>
            </div>
          </div>

          {/* Right Form Card */}
          <div className="contact__form-wrapper animate-reveal fade-right delay-200">
            <form className="contact__form glass-card" onSubmit={handleSubmit} id="contact-form">
              <h3 className="contact__form-title">Tell Us How We Can Help</h3>

              {submitted && (
                <div className="contact__success">
                  <CheckIcon size={18} color="#10B981" />
                  <span>Thank you! We will be in touch soon.</span>
                </div>
              )}
              {submitError && <div className="contact__error" role="alert">{submitError}</div>}

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
                  <label className="contact__label" htmlFor="contact-phone-input">Phone / WhatsApp Number *</label>
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

              {formData.program === 'team' && (
                <div className="contact__form-row">
                  <div className="contact__form-group">
                    <label className="contact__label" htmlFor="contact-company">Company Name</label>
                    <input
                      id="contact-company"
                      type="text"
                      name="companyName"
                      placeholder="Your company"
                      className="contact__input"
                      value={formData.companyName}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="contact__form-group">
                    <label className="contact__label" htmlFor="contact-team-size">Team Size</label>
                    <input
                      id="contact-team-size"
                      type="number"
                      name="teamSize"
                      min="1"
                      placeholder="Number of people"
                      className="contact__input"
                      value={formData.teamSize}
                      onChange={handleChange}
                    />
                  </div>
                </div>
              )}

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
                <label className="contact__label" htmlFor="contact-program">I am interested in *</label>
                <select
                  id="contact-program"
                  name="program"
                  className="contact__input contact__select"
                  value={formData.program}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select a service</option>
                  <option value="dmit">Brain Mapping Report (BMR)</option>
                  <option value="child">Children & Students</option>
                  <option value="elite">Family Counseling</option>
                  <option value="business">Business Owner Programs</option>
                  <option value="manas-360">Manas 360</option>
                  <option value="team">HR Matrix</option>
                  <option value="general">Not Sure</option>
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

              <label className="contact__consent">
                <input type="checkbox" name="consent" checked={formData.consent} onChange={(e) => setFormData({ ...formData, consent: e.target.checked })} required />
                <span>I agree to be contacted and accept the <a href="/privacy-policy">Privacy Policy</a>.</span>
              </label>

              <button type="submit" className="btn-primary contact__submit" id="contact-submit" disabled={isSubmitting}>
                <MailIcon size={16} />
                <span>{isSubmitting ? 'Submitting...' : 'Submit Enquiry'}</span>
              </button>
            </form>
          </div>
        </div>

        <div className="contact__next-step glass-card animate-reveal fade-up">
          <h3>What Happens Next?</h3>
          <p>We will call or WhatsApp you within the agreed response time to understand your goal, explain the right option and answer your questions about the process, report and booking.</p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
