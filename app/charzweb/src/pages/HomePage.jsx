import React from 'react';
import TopNav from '../components/shared/TopNav';
import MainHeader from '../components/shared/MainHeader';
import HeroSlider from '../components/HeroSlider';
import WelcomeSection from '../components/WelcomeSection';
import ServicesSection from '../components/ServicesSection';
import AboutSection from '../components/AboutSection';
import CounterSection from '../components/CounterSection';
import PartnersSection from '../components/PartnersSection';
import Footer from '../components/shared/Footer';

function HomePage() {
  return (
    <div className="font-sans bg-white text-gray-800">
      <TopNav />
      <MainHeader />
      <HeroSlider />
      <WelcomeSection />
      <ServicesSection />
      <AboutSection />
      <CounterSection />
      <PartnersSection />
      <Footer />
    </div>
  );
}

export default HomePage;