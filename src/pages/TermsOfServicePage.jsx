import React from 'react';
import { Link } from 'react-router-dom';
import { LockIcon } from '../components/Icons';

const TermsOfServicePage = () => (
  <div className="section legal-page" style={{paddingTop:'140px', minHeight:'70vh'}}>
    <div className="container">
      <div className="page-header"><div className="section-badge"><LockIcon size={14} color="#F59E0B"/> Terms of Service</div><h1 className="section-title">Service <span className="gradient-text-gold">Terms</span></h1><div className="divider"/><p className="section-subtitle">Draft service terms for the Manas Matrix website. Review the final terms legally before launch.</p></div>
      <div className="glass-card legal-card">
        <section><h2>1. Services</h2><p>Manas Matrix provides Brain Mapping Reports, counseling and development programs as described on this website. Service scope, session format, report format, timing and pricing should be confirmed with the client before booking.</p></section>
        <section><h2>2. Reports and Counseling</h2><p>Reports and counseling are guidance and self-awareness tools. They are not medical, psychological or clinical tests, and they do not replace professional care where such care is required.</p></section>
        <section><h2>3. Client Responsibilities</h2><p>Clients are responsible for providing accurate information, following agreed appointment arrangements and making their own decisions about education, careers, employment, relationships and business.</p></section>
        <section><h2>4. Children</h2><p>For anyone under 18, written parent or guardian consent is required. Parents/guardians remain responsible for decisions made for a child.</p></section>
        <section><h2>5. HR Matrix Responsible Use</h2><p>Organizations using employee reports agree to define purpose, consent, access, confidentiality, storage and retention in writing. Reports should not be the sole basis for hiring, termination, promotion, salary, performance ratings or job-fit decisions.</p></section>
        <section><h2>6. Outcomes</h2><p>Manas Matrix does not guarantee specific academic, career, relationship, employment or business outcomes. Results depend on circumstances, decisions, participation and other factors outside the service provider’s control.</p></section>
        <section><h2>7. Bookings, Changes and Fees</h2><p>Booking, cancellation, rescheduling, payment and refund conditions should be confirmed by Manas Matrix and communicated to the client before payment or service delivery.</p></section>
        <section><h2>8. Intellectual Property</h2><p>Website text, branding, graphics and original report materials belong to their respective rights holders. Clients may use their own reports for their personal or organizational purposes subject to the agreed service terms.</p></section>
        <section><h2>9. Privacy</h2><p>Personal information and service data are handled according to the Privacy Policy and any additional written arrangements applicable to a specific program.</p></section>
        <section><h2>10. Contact</h2><p>Manas Matrix, Spire, 150 Feet Ring Road, Rajkot, Gujarat 360006. Phone: <a href="tel:9106545374">9106545374</a>.</p></section>
        <div className="legal-note">This is a website-content draft based on the supplied Manas Matrix content document and is not legal advice. Have final Terms of Service reviewed before publishing.</div>
        <p><Link to="/privacy-policy">View Privacy Policy</Link> · <Link to="/disclaimer">View Disclaimer</Link></p>
      </div>
    </div>
  </div>
);
export default TermsOfServicePage;
