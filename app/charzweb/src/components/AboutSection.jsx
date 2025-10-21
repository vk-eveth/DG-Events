import React from 'react';
import { FaAward, FaUsers, FaGlobeAfrica, FaRocket } from 'react-icons/fa';

const AboutSection = () => {
  const features = [
    {
      icon: <FaAward className="text-3xl" />,
      title: "Award-Winning Service",
      description: "Recognized for excellence in event management"
    },
    {
      icon: <FaUsers className="text-3xl" />,
      title: "Expert Team",
      description: "Passionate professionals with diplomatic expertise"
    },
    {
      icon: <FaGlobeAfrica className="text-3xl" />,
      title: "International Reach",
      description: "Serving clients across East Africa and beyond"
    },
    {
      icon: <FaRocket className="text-3xl" />,
      title: "Innovation First",
      description: "Cutting-edge solutions for modern events"
    }
  ];

  return (
    <section className="relative py-12 md:py-16 lg:py-20 bg-gradient-to-br from-white via-blue-50 to-gray-50 overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-100 rounded-full filter blur-3xl opacity-30 -translate-y-1/2 translate-x-1/2"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-yellow-100 rounded-full filter blur-3xl opacity-30 translate-y-1/2 -translate-x-1/2"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-10 items-center">
          {/* Image Section */}
          <div className="relative group">
            <div className="absolute -inset-4 bg-gradient-to-r from-[#0d47a1] to-yellow-500 rounded-3xl opacity-20 group-hover:opacity-30 blur-xl transition-all duration-500"></div>
            <div className="relative">
              <img 
                src="/images/about-us.jpg" 
                alt="ZALDA Events Team" 
                className="rounded-3xl shadow-2xl w-full transform group-hover:scale-[1.02] transition-all duration-500"
                onError={(e) => {
                  e.target.src = 'https://images.unsplash.com/photo-1511578314322-379afb476865?w=800&auto=format&fit=crop';
                }}
              />
              {/* Floating Badge */}
              <div className="absolute -bottom-6 -right-6 bg-gradient-to-br from-yellow-500 to-yellow-600 text-gray-900 px-6 py-4 rounded-2xl shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-300">
                <div className="text-3xl font-bold">2024</div>
                <div className="text-sm font-semibold">Since</div>
              </div>
            </div>
          </div>

          {/* Content Section */}
          <div className="space-y-6">
            <div>
              <span className="inline-block bg-blue-100 text-[#0d47a1] px-4 py-2 rounded-full text-sm font-semibold mb-4">
                🏆 About Us
              </span>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 leading-tight">
                Crafting <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0d47a1] to-[#1976d2]">Unforgettable</span>{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 to-yellow-600">Experiences</span>
              </h2>
              <div className="w-24 h-2 bg-gradient-to-r from-yellow-500 to-yellow-600 rounded-full mb-6"></div>
            </div>

            <p className="text-lg text-gray-700 leading-relaxed">
              <span className="font-bold text-[#0d47a1]">ZALDA Events Ltd</span> is Zanzibar's premier event management company, founded in 2024 
              by visionary young professionals passionate about International Relations and Diplomacy. 
              <span className="inline-block bg-yellow-100 text-yellow-800 px-2 py-0.5 rounded text-sm font-semibold mx-1">Z0000240001</span>
            </p>
            
            <p className="text-base text-gray-600 leading-relaxed">
              From high-profile weddings to international forums, we bring professionalism, 
              protocol expertise, and personalized service to every event. Our comprehensive approach 
              covers ushering, seating, logistics, catering coordination, and more.
            </p>

            {/* Feature Cards */}
            <div className="grid grid-cols-2 gap-3 pt-4">
              {features.map((feature, index) => (
                <div 
                  key={index}
                  className="bg-white/80 backdrop-blur-sm p-3 md:p-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100"
                >
                  <div className="text-[#0d47a1] mb-2">{feature.icon}</div>
                  <h4 className="font-bold text-gray-900 text-sm mb-1">{feature.title}</h4>
                  <p className="text-xs text-gray-600">{feature.description}</p>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 pt-4">
              <button className="bg-gradient-to-r from-[#0d47a1] to-[#1976d2] hover:from-[#1976d2] hover:to-[#0d47a1] text-white px-6 py-3 rounded-xl font-bold shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300 flex items-center justify-center group">
                Learn More About Us
                <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </button>
              <button className="border-2 border-[#0d47a1] text-[#0d47a1] px-6 py-3 rounded-xl font-bold hover:bg-[#0d47a1] hover:text-white transition-all duration-300 flex items-center justify-center group">
                View Portfolio
                <svg className="w-5 h-5 ml-2 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
