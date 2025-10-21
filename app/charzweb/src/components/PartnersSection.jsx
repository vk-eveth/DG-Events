import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import partner1 from '../assets/partner1.webp';
import partner2 from '../assets/partner2.png';
import partner3 from '../assets/partner3.png';
import partner4 from '../assets/partner4.png';
import partner5 from '../assets/partner5.png';
import partner6 from '../assets/partner6.png';

const PartnersSection = () => {
   const partners = [
    { name: 'Partner 1', logo: partner1 },
    { name: 'Partner 2', logo: partner2 },
    { name: 'Partner 3', logo: partner3 },
    { name: 'Partner 4', logo: partner4 },
    { name: 'Partner 5', logo: partner5 },
    { name: 'Partner 6', logo: partner6 }
  ];

  return (
    <section className="relative py-12 md:py-16 lg:py-20 bg-gradient-to-br from-gray-50 to-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle, #0d47a1 1px, transparent 1px)',
          backgroundSize: '30px 30px'
        }}></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-8 md:mb-12">
          <span className="inline-block bg-gradient-to-r from-blue-100 to-yellow-100 text-[#0d47a1] px-4 py-2 rounded-full text-sm font-semibold mb-4">
            🤝 Trusted Partnerships
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-6">
            Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0d47a1] to-[#1976d2]">Valued</span>{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 to-yellow-600">Partners</span>
          </h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-yellow-500 to-yellow-600 mx-auto mb-6 rounded-full"></div>
          <p className="text-gray-600 text-base sm:text-lg max-w-3xl mx-auto leading-relaxed">
            We collaborate with industry leaders and premier brands to deliver exceptional event experiences across Zanzibar and East Africa
          </p>
        </div>

        {/* Partners Carousel */}
        <div className="relative">
          <Swiper
            modules={[Autoplay]}
            spaceBetween={30}
            slidesPerView={2}
            autoplay={{ 
              delay: 3000, 
              disableOnInteraction: false,
              pauseOnMouseEnter: true 
            }}
            breakpoints={{
              640: { slidesPerView: 3, spaceBetween: 40 },
              768: { slidesPerView: 4, spaceBetween: 40 },
              1024: { slidesPerView: 5, spaceBetween: 50 },
              1280: { slidesPerView: 6, spaceBetween: 50 }
            }}
            loop={true}
            className="py-8"
          >
            {partners.map((partner, index) => (
              <SwiperSlide key={index}>
                <div className="group relative bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100 hover:border-[#0d47a1]">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#0d47a1]/5 to-yellow-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="relative flex items-center justify-center h-20">
                    <img 
                      src={partner.logo} 
                      alt={partner.name} 
                      className="max-h-full max-w-full object-contain opacity-60 group-hover:opacity-100 transition-opacity duration-300 filter grayscale group-hover:grayscale-0"
                    />
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Stats Section */}
        <div className="mt-10 md:mt-12 grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="text-center">
            <div className="text-4xl font-bold text-[#0d47a1] mb-2">50+</div>
            <div className="text-gray-600 font-medium">Active Partners</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-[#0d47a1] mb-2">10+</div>
            <div className="text-gray-600 font-medium">Countries Served</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-[#0d47a1] mb-2">100%</div>
            <div className="text-gray-600 font-medium">Satisfaction Rate</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-[#0d47a1] mb-2">24/7</div>
            <div className="text-gray-600 font-medium">Support Available</div>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-8 md:mt-10 text-center">
          <p className="text-lg text-gray-700 mb-6">Interested in partnering with us?</p>
          <button className="bg-gradient-to-r from-[#0d47a1] to-[#1976d2] hover:from-[#1976d2] hover:to-[#0d47a1] text-white px-8 py-3 rounded-xl font-bold text-base md:text-lg shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300">
            Become a Partner
          </button>
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;