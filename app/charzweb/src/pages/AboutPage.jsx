import React from 'react';
import TopNav from '../components/shared/TopNav';
import MainHeader from '../components/shared/MainHeader';
import AboutHero from '../components/AboutPage/AboutHero';
import OurStory from '../components/AboutPage/OurStory';
import MissionVision from '../components/AboutPage/MissionVision';
import WhyChooseUs from '../components/AboutPage/WhyChooseUs';
import TeamPreview from '../components/AboutPage/TeamPreview';
import Footer from '../components/shared/Footer';

const AboutPage = () => {
  return (
    <div className="font-sans bg-white text-gray-800">
      <TopNav />
      <MainHeader />
      <AboutHero />
      <OurStory />
      <MissionVision />
      <WhyChooseUs />
      <TeamPreview />
      <Footer />
    </div>
  );
};

export default AboutPage;