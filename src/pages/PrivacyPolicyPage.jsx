import React from 'react';
import { Link } from 'react-router-dom';
import { LockIcon } from '../components/Icons';

const PrivacyPolicyPage = () => (
  <div className="section legal-page" style={{paddingTop:'140px', minHeight:'70vh'}}>
    <div className="container">
      <div className="page-header"><div className="section-badge"><LockIcon size={14} color="#F59E0B"/> Privacy Policy</div><h1 className="section-title">Your Data, <span className="gradient-text-gold">Handled Carefully</span></h1><div className="divider"/><p className="section-subtitle">Draft website privacy information for Manas Matrix. Please have the final policy reviewed before launch.</p></div>
      <div className="glass-card legal-card">
        <section><h2>1. What We Collect</h2><p>Depending on the service you request, Manas Matrix may collect your name, phone/WhatsApp number, email address, enquiry details and service preferences. Brain Mapping services may also involve fingerprint pattern data used to prepare a report.</p></section>
        <section><h2>2. Why We Collect It</h2><p>Information is used to respond to enquiries, arrange consultations, prepare requested reports, provide counseling or development services, communicate about bookings and administer the requested program.</p></section>
        <section><h2>3. Fingerprint and Report Data</h2><p>Fingerprint data and Brain Mapping Reports are treated as confidential service information. They should be used only for the purposes agreed with the client and should not be shared with third parties without appropriate consent, except where disclosure is required by applicable law.</p></section>
        <section><h2>4. Children and Consent</h2><p>For people under 18, services are provided only with written parent or guardian consent. Parents/guardians should be involved in the assessment and counseling process as described on the relevant service page.</p></section>
        <section><h2>5. Access, Storage and Retention</h2><p>Access to reports and personal information is limited to people who need it to provide the requested service or who have been authorized by the client. Final storage systems, retention periods and deletion procedures must be confirmed by Manas Matrix before launch and stated here clearly.</p></section>
        <section><h2>6. Employee / HR Programs</h2><p>For HR Matrix programs, employee consent, purpose, report access, confidentiality, storage and retention should be agreed in writing before assessment. Reports should not be the only basis for hiring, termination, promotion, salary, performance ratings or job-fit decisions.</p></section>
        <section><h2>7. Your Requests</h2><p>Clients can contact Manas Matrix to ask about the personal information held about them and, where applicable, request correction or deletion subject to applicable law and legitimate record-keeping requirements. The final contact method should be added before launch.</p></section>
        <section><h2>8. Updates</h2><p>This policy may be updated when the services, technology or applicable requirements change. The latest version published on this page will apply from its stated effective date.</p></section>
        <section><h2>9. Contact</h2><p>Manas Matrix, Spire, 150 Feet Ring Road, Rajkot, Gujarat 360006. Phone: <a href="tel:9106545374">9106545374</a>. For the final policy, add the business email address and any dedicated privacy contact before launch.</p></section>
        <div className="legal-note">This is a website-content draft aligned to the supplied Manas Matrix content document. It is not legal advice. Have the final policy checked by a qualified lawyer before publishing.</div>
        <p><Link to="/terms-of-service">View Terms of Service</Link> · <Link to="/disclaimer">View Disclaimer</Link></p>
      </div>
    </div>
  </div>
);
export default PrivacyPolicyPage;
