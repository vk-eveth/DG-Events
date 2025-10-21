import React from 'react';

const AboutHero = () => {
  return (
    <section className="relative bg-[#0d47a1] text-white py-20">
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">About Us</h1>
          <p className="text-xl">
            Learn more about DG Events and our commitment to excellence in event management
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutHero;