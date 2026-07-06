import React from 'react';
import { TypingHero } from '../components/TypingHero';
import { ProcessSlider } from '../components/ProcessSlider';
import { ServicePillars } from '../components/ServicePillars';
import { CustomWebsites } from '../components/CustomWebsites';
import { MissedCallProduct } from '../components/MissedCallProduct';
import { AboutSection } from '../components/AboutSection';
import { FAQ } from '../components/FAQ';
import { ContactForm } from '../components/ContactForm';

export const Home: React.FC = () => {
  return (
    <>
      <TypingHero />
      <ProcessSlider />
      <ServicePillars />
      <CustomWebsites />
      <MissedCallProduct />
      <AboutSection />
      <FAQ />
      <ContactForm />
    </>
  );
};

export default Home;
