import React from 'react';
import { Link } from 'react-router-dom';

const NotFoundPage = () => (
  <section className="not-found section">
    <div className="container not-found__content">
      <span className="section-badge">Page not found</span>
      <p className="not-found__code" aria-hidden="true">404</p>
      <h1 className="section-title">
        This page is <span className="gradient-text-gold">out of focus.</span>
      </h1>
      <p className="section-subtitle">
        The link may be incorrect, or the page may have moved. Let’s help you find your way.
      </p>
      <Link to="/" className="btn-primary not-found__home-link">
        <span>Back to Home</span>
      </Link>
    </div>
  </section>
);

export default NotFoundPage;
