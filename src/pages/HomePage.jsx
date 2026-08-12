import React from 'react';
import Hero from '../components/Hero/Hero';
import About from '../components/About/About';
import HowItWorks from '../components/HowItWorks/HowItWorks';
import Programs from '../components/Programs/Programs';
import Services from '../components/Services/Services';
import Testimonials from '../components/Testimonials/Testimonials';
import CTABanner from '../components/CTABanner/CTABanner';
import Contact from '../components/Contact/Contact';

const HomePage = () => {
  return (
    <>
      <Hero />
      <About />
      <HowItWorks />
      <Programs />
      <Services />
      <Testimonials />
      <CTABanner />
      <Contact />
    </>
  );
};

export default HomePage;
