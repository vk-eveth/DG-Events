import React from 'react';
import { FaUsers, FaChair, FaHandshake, FaUtensils, FaCamera, FaPalette, FaHeart, FaMicrophone } from 'react-icons/fa';

const ServicesSection = () => {
  const services = [
    {
      icon: <FaHandshake className="text-5xl" />,
      title: "Corporate & Diplomatic Events",
      description: "Planning and execution of conferences, launches, retreats, and high-level forums with precision and discretion.",
      color: "from-blue-500 to-blue-600",
      bgColor: "from-blue-50 to-blue-100"
    },
    {
      icon: <FaHeart className="text-5xl" />,
      title: "Weddings & Private Functions",
      description: "Create magical moments with our bespoke wedding planning and private event coordination services.",
      color: "from-pink-500 to-pink-600",
      bgColor: "from-pink-50 to-pink-100"
    },
    {
      icon: <FaUsers className="text-5xl" />,
      title: "Ushering & Protocol",
      description: "Professional ushering and protocol services ensuring smooth and respectful guest handling at every event.",
      color: "from-purple-500 to-purple-600",
      bgColor: "from-purple-50 to-purple-100"
    },
    {
      icon: <FaChair className="text-5xl" />,
      title: "Venue Management",
      description: "Expert management of seating plans and venue arrangements tailored to your event's formality and flow.",
      color: "from-green-500 to-green-600",
      bgColor: "from-green-50 to-green-100"
    },
    {
      icon: <FaCamera className="text-5xl" />,
      title: "Photography & Visuals",
      description: "Capture every precious moment with professional photography and videography services.",
      color: "from-yellow-500 to-yellow-600",
      bgColor: "from-yellow-50 to-yellow-100"
    },
    {
      icon: <FaPalette className="text-5xl" />,
      title: "Creative Design & Decor",
      description: "Transform spaces with stunning decor and creative designs that reflect your unique style and vision.",
      color: "from-orange-500 to-orange-600",
      bgColor: "from-orange-50 to-orange-100"
    },
    {
      icon: <FaMicrophone className="text-5xl" />,
      title: "Sound & Entertainment",
      description: "Professional audio systems and entertainment coordination to keep your guests engaged and delighted.",
      color: "from-indigo-500 to-indigo-600",
      bgColor: "from-indigo-50 to-indigo-100"
    },
    {
      icon: <FaUtensils className="text-5xl" />,
      title: "Catering Coordination",
      description: "Comprehensive catering support ensuring your guests enjoy exceptional culinary experiences.",
      color: "from-red-500 to-red-600",
      bgColor: "from-red-50 to-red-100"
    }
  ];

  return (
    <section className="py-12 md:py-16 lg:py-20 bg-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle, #0d47a1 1px, transparent 1px)',
          backgroundSize: '30px 30px'
        }}></div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-8 md:mb-12">
          <div className="inline-block mb-4">
            <span className="bg-yellow-100 text-yellow-800 px-4 py-2 rounded-full text-sm font-semibold">
              🎨 What We Offer
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0d47a1] to-[#1976d2]">Premium</span> Services
          </h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-yellow-500 to-yellow-600 mx-auto mb-6 rounded-full"></div>
          <p className="text-gray-600 text-base sm:text-lg max-w-3xl mx-auto leading-relaxed">
            At ZALDA Events, we bring creativity, professionalism, and diplomacy into every detail—
            offering comprehensive end-to-end solutions for both private and corporate events.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="group bg-white p-5 md:p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 text-center border border-gray-100 hover:border-transparent transform hover:-translate-y-2 relative overflow-hidden"
            >
              {/* Gradient Background on Hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
              
              <div className="relative z-10">
                <div className={`bg-gradient-to-br ${service.bgColor} w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-white/20 transition-all duration-300 text-gray-700 group-hover:text-white group-hover:scale-110`}>
                  {service.icon}
                </div>
                <h3 className="text-lg md:text-xl font-bold mb-3 text-gray-900 group-hover:text-white transition-colors">{service.title}</h3>
                <p className="text-gray-600 text-sm md:text-base leading-relaxed group-hover:text-white/90 transition-colors mb-4">{service.description}</p>
                <div className="inline-flex items-center text-[#0d47a1] group-hover:text-white font-semibold text-sm">
                  Learn More 
                  <svg className="w-4 h-4 ml-2 group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* CTA Section */}
        <div className="text-center mt-10 md:mt-12">
          <p className="text-gray-600 mb-6 text-base sm:text-lg">Ready to make your event extraordinary?</p>
          <button className="bg-gradient-to-r from-[#0d47a1] to-[#1976d2] hover:from-[#1976d2] hover:to-[#0d47a1] text-white px-8 py-4 rounded-lg font-semibold text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
            Get a Free Consultation
          </button>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
