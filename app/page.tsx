import React from 'react';
import HeroSection from '../components/HeroSection';
import ServicesSection from '../components/ServicesSection';
import TestimonialSection from '../components/TestimonialSection';
import FAQSection from '../components/FAQSection';

const HomePage = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <ServicesSection />
      <TestimonialSection />
      <FAQSection />
    </div>
  );
};

export default HomePage;