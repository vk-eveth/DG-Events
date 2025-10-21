import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

import jpgA from '../assets/ZanziLeading.jpeg';
import jpgB from '../assets/CorporateDiplomatic.jpeg';
import jpgC from '../assets/Comm.jpeg';
import jpgD from '../assets/Vibe.jpeg';
import jpegA from '../assets/youthPowered.jpeg';
import jpegB from '../assets/b.jpeg';
import jpegC from '../assets/a.jpeg';

function HeroSlider() {
  const slides = [
    {
      title: "Zanzibar's Leading Event Experts",
      subtitle: "Where creativity meets diplomacy",
      description: "ZALDA Events transforms your vision into unforgettable experiences",
      image: jpgA
    },
    {
      title: "Youth-Powered Innovation",
      subtitle: "Founded by passionate professionals",
      description: "Driving excellence in event management across East Africa",
      image: jpegA
    },
    {
      title: "Corporate & Diplomatic Events",
      subtitle: "Tailored with precision and class",
      description: "Seamless execution for high-profile gatherings",
      image: jpgB
    },
    {
      title: "Dream Weddings, Zanzibar Style",
      subtitle: "Experience romance with island flair",
      description: "Creating magical moments on paradise shores",
      image: jpegB
    },
    {
      title: "Cultural & Community Engagement",
      subtitle: "Bridging people through powerful experiences",
      description: "Celebrating diversity and bringing communities together",
      image: jpgC
    },
    {
      title: "Visual Storytelling & Decor",
      subtitle: "Crafted scenes that inspire and impress",
      description: "Every detail tells your unique story",
      image: jpegC
    },
    {
      title: "From Vision to Vibe",
      subtitle: "We don't just plan—we design experiences",
      description: "Your event, elevated to extraordinary",
      image: jpgD
    }
  ];

  return (
    <div className="relative">
      <Swiper
        modules={[Autoplay, Pagination]}
        spaceBetween={0}
        slidesPerView={1}
        autoplay={{ delay: 6000, disableOnInteraction: false }}
        pagination={{ 
          clickable: true,
          bulletActiveClass: 'swiper-pagination-bullet-active',
          bulletClass: 'swiper-pagination-bullet'
        }}
        speed={1000}
        className="h-full"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div
              className="w-full h-full relative"
              style={{ 
                backgroundImage: `url(${slide.image})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat'
              }}
            >
              {/* Enhanced Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent"></div>
              
              <div className="absolute inset-0 flex items-center justify-center z-10">
                <div className="text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
                  <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-4 leading-tight animate-fade-in-up text-shadow-lg">
                    {slide.title}
                  </h1>
                  <p className="text-base sm:text-lg md:text-xl text-white/95 mb-6 leading-relaxed max-w-2xl mx-auto animate-fade-in-up text-shadow">
                    {slide.description}
                  </p>
                  <div className="flex flex-col sm:flex-row gap-3 justify-center animate-fade-in-up">
                    <button className="bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-600 hover:to-yellow-700 text-gray-900 px-6 py-3 rounded-xl font-bold text-base shadow-2xl hover:shadow-yellow-500/50 transform hover:scale-105 transition-all duration-300">
                      {slide.cta}
                    </button>
                    <button className="bg-white/20 backdrop-blur-md hover:bg-white/30 text-white border-2 border-white px-6 py-3 rounded-xl font-bold text-base transition-all duration-300">
                      Learn More
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      
      {/* Custom Pagination Styles */}
      <style jsx global>{`
        .swiper-pagination-bullet {
          width: 12px;
          height: 12px;
          background: white;
          opacity: 0.5;
          transition: all 0.3s ease;
        }
        .swiper-pagination-bullet-active {
          background: #eab308;
          opacity: 1;
          width: 30px;
          border-radius: 6px;
        }
        @keyframes fade-in-down {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in-down {
          animation: fade-in-down 0.8s ease-out;
        }
        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out;
        }
        .animation-delay-200 {
          animation-delay: 0.2s;
          opacity: 0;
          animation-fill-mode: forwards;
        }
        .animation-delay-400 {
          animation-delay: 0.4s;
          opacity: 0;
          animation-fill-mode: forwards;
        }
        .animation-delay-600 {
          animation-delay: 0.6s;
          opacity: 0;
          animation-fill-mode: forwards;
        }
      `}</style>
    </div>
  );
}

export default HeroSlider;
