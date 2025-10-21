import React from 'react';

const WelcomeSection = () => {
  return (
    <section className="py-12 md:py-16 lg:py-20 bg-gradient-to-br from-gray-50 via-white to-blue-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 md:mb-12">
          <div className="inline-block mb-4">
            <span className="bg-blue-100 text-[#0d47a1] px-4 py-2 rounded-full text-sm font-semibold">
              ✨ About Us
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Welcome to <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0d47a1] to-[#1976d2]">ZALDA</span> <span className="text-yellow-500">Events</span>
          </h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-yellow-500 to-yellow-600 mx-auto mb-6 rounded-full"></div>
          <p className="text-gray-600 text-base sm:text-lg max-w-3xl mx-auto leading-relaxed">
            ZALDA Events is a dynamic event management company based in Zanzibar, Tanzania. Founded by passionate professionals in 2024, 
            we blend diplomacy, creativity, and precision logistics to deliver unforgettable event experiences.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          <div className="group bg-white p-5 md:p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 text-center border border-gray-100 hover:border-[#0d47a1] transform hover:-translate-y-2">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
              <span className="text-4xl">🎯</span>
            </div>
            <h3 className="text-xl md:text-2xl font-bold mb-3 text-gray-900 group-hover:text-[#0d47a1] transition-colors">Our Mission</h3>
            <p className="text-gray-600 text-sm md:text-base leading-relaxed">
              To transform visions into reality through innovative, personalized, and professional event management solutions that exceed expectations.
            </p>
          </div>
          
          <div className="group bg-white p-5 md:p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 text-center border border-gray-100 hover:border-[#0d47a1] transform hover:-translate-y-2">
            <div className="bg-gradient-to-br from-yellow-50 to-yellow-100 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
              <span className="text-4xl">👁️</span>
            </div>
            <h3 className="text-xl md:text-2xl font-bold mb-3 text-gray-900 group-hover:text-[#0d47a1] transition-colors">Our Vision</h3>
            <p className="text-gray-600 text-sm md:text-base leading-relaxed">
              To become East Africa's leading youth-driven event management brand, celebrated for diplomacy, excellence, and creative innovation.
            </p>
          </div>
          
          <div className="group bg-white p-6 md:p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 text-center border border-gray-100 hover:border-[#0d47a1] transform hover:-translate-y-2 sm:col-span-2 lg:col-span-1">
            <div className="bg-gradient-to-br from-purple-50 to-purple-100 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
              <span className="text-4xl">💎</span>
            </div>
            <h3 className="text-xl md:text-2xl font-bold mb-3 text-gray-900 group-hover:text-[#0d47a1] transition-colors">Our Values</h3>
            <p className="text-gray-600 text-sm md:text-base leading-relaxed">
              Innovation, Teamwork, Youth Empowerment, Precision, Cultural Respect, and Outstanding Client Service.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WelcomeSection;
