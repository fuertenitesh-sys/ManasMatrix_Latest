import React, { useState, useEffect } from 'react';
import { PhoneIcon, CheckIcon } from '../Icons';
import './BookingModal.css';

const BookingModal = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    service: '',
    date: '',
    time: ''
  });
  const [submitted, setSubmitted] = useState(false);

  // Close on Escape key
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.addEventListener('keydown', handleEsc);
      document.body.style.overflow = 'hidden'; // Prevent background scrolling
    }
    return () => {
      document.removeEventListener('keydown', handleEsc);
      document.body.style.overflow = '';
    };
  }, [isOpen, onClose]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    try {
      const response = await fetch('/api/bookings', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || 'Failed to submit booking');
      }

      setSubmitted(true);
      setTimeout(() => {
        setSubmitted(false);
        setFormData({ name: '', phone: '', service: '', date: '', time: '' });
        onClose();
      }, 4000);
    } catch (err) {
      setError(err.message);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isOpen && !submitted) return null;

  return (
    <div className={`booking-modal-overlay ${isOpen ? 'is-open' : ''}`} onClick={onClose}>
      <div className="booking-modal-container" onClick={(e) => e.stopPropagation()}>
        <button className="booking-modal-close" onClick={onClose} aria-label="Close modal">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>

        {!submitted ? (
          <>
            <div className="booking-modal-header">
              <div className="booking-modal-icon-wrapper">
                <PhoneIcon size={28} color="#F59E0B" />
              </div>
              <h2 className="booking-modal-title">Book a Free Consultation</h2>
              <p className="booking-modal-subtitle">Select a date and time, and our experts will reach out to confirm your slot.</p>
            </div>

            <form className="booking-form" onSubmit={handleSubmit}>
              <div className="booking-form-row">
                <div className="booking-form-group">
                  <label className="booking-label" htmlFor="booking-name">Full Name *</label>
                  <input
                    id="booking-name"
                    type="text"
                    name="name"
                    className="booking-input"
                    placeholder="Your name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="booking-form-group">
                  <label className="booking-label" htmlFor="booking-phone">Phone Number *</label>
                  <input
                    id="booking-phone"
                    type="tel"
                    name="phone"
                    className="booking-input"
                    placeholder="Your phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              <div className="booking-form-group">
                <label className="booking-label" htmlFor="booking-service">Service *</label>
                <select
                  id="booking-service"
                  name="service"
                  className="booking-select"
                  value={formData.service}
                  onChange={handleChange}
                  required
                >
                  <option value="" disabled>Select Service</option>
                  <option value="disc">DISC Personality Assessment</option>
                  <option value="child">Growth Transformation (Child)</option>
                  <option value="pro">Advanced Brain Mapping (Pro)</option>
                  <option value="elite">Elite Family Transformation</option>
                  <option value="general">General Consultation</option>
                </select>
              </div>

              <div className="booking-form-row">
                <div className="booking-form-group">
                  <label className="booking-label" htmlFor="booking-date">Preferred Date *</label>
                  <input
                    id="booking-date"
                    type="date"
                    name="date"
                    className="booking-input"
                    value={formData.date}
                    onChange={handleChange}
                    min={new Date().toISOString().split('T')[0]}
                    required
                  />
                </div>
                <div className="booking-form-group">
                  <label className="booking-label" htmlFor="booking-time">Preferred Time *</label>
                  <select
                    id="booking-time"
                    name="time"
                    className="booking-select"
                    value={formData.time}
                    onChange={handleChange}
                    required
                  >
                    <option value="" disabled>Select Time</option>
                    <option value="10:00 AM">10:00 AM</option>
                    <option value="11:30 AM">11:30 AM</option>
                    <option value="01:00 PM">01:00 PM</option>
                    <option value="03:00 PM">03:00 PM</option>
                    <option value="04:30 PM">04:30 PM</option>
                    <option value="06:00 PM">06:00 PM</option>
                  </select>
                </div>
              </div>

              {error && <div className="booking-error-message" style={{color: '#EF4444', marginBottom: '10px', fontSize: '14px'}}>{error}</div>}
              <button type="submit" className="btn-primary booking-submit" disabled={isSubmitting}>
                <span>{isSubmitting ? 'Submitting...' : 'Confirm Booking Request'}</span>
              </button>
            </form>
          </>
        ) : (
          <div className="booking-success">
            <div className="booking-success-icon">
              <CheckIcon size={40} color="#10B981" />
            </div>
            <h3>Request Received!</h3>
            <p>Thank you, {formData.name || 'friend'}. We have received your booking request for {formData.date || 'your selected date'}. Our team will call you shortly to confirm the appointment.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default BookingModal;
