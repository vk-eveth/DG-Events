import React, { useState } from 'react';
import TopNav from '../components/shared/TopNav';
import MainHeader from '../components/shared/MainHeader';
import Footer from '../components/shared/Footer';
import { FaHandshake, FaHeart, FaUsers, FaChair, FaCamera, FaPalette, FaMicrophone, FaUtensils, FaCheckCircle, FaArrowRight } from 'react-icons/fa';

const services = [
  {
    title: "Corporate & Diplomatic Events",
    description: "From concept to completion — we handle logistics, design, scheduling, vendor coordination for seamless high-level events.",
    features: [
      "International forums & summits",
      "Product launches & brand activations",
      "Executive retreats & conferences",
      "Government & diplomatic ceremonies"
    ],
    icon: <FaHandshake className="text-6xl" />,
    color: "from-blue-500 to-blue-600",
    bgGradient: "from-blue-50 to-blue-100",
    image: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=800&auto=format&fit=crop",
  },
  {
    title: "Weddings & Private Functions",
    description: "Elegant, intimate, and unforgettable. Your dream celebration crafted with precision, style, and zero stress.",
    features: [
      "Destination weddings in Zanzibar",
      "Anniversary & milestone celebrations",
      "Engagement parties & bridal showers",
      "Intimate family gatherings"
    ],
    icon: <FaHeart className="text-6xl" />,
    color: "from-pink-500 to-pink-600",
    bgGradient: "from-pink-50 to-pink-100",
    image: "https://images.unsplash.com/photo-1519741497674-611481863552?w=800&auto=format&fit=crop",
  },
  {
    title: "Ushering & Protocol Services",
    description: "Professional protocol management ensuring smooth guest experiences and diplomatic etiquette at every event.",
    features: [
      "VIP guest management",
      "Protocol coordination",
      "Registration & check-in services",
      "Crowd flow management"
    ],
    icon: <FaUsers className="text-6xl" />,
    color: "from-purple-500 to-purple-600",
    bgGradient: "from-purple-50 to-purple-100",
    image: "https://images.unsplash.com/photo-1511578314322-379afb476865?w=800&auto=format&fit=crop",
  },
  {
    title: "Venue Management & Setup",
    description: "Expert venue coordination with strategic seating plans and layouts tailored to your event's formality and flow.",
    features: [
      "Venue selection & booking",
      "Seating arrangement design",
      "Layout & floor planning",
      "Technical setup coordination"
    ],
    icon: <FaChair className="text-6xl" />,
    color: "from-green-500 to-green-600",
    bgGradient: "from-green-50 to-green-100",
    image: "https://images.unsplash.com/photo-1478146896981-b80fe463b330?w=800&auto=format&fit=crop",
  },
  {
    title: "Photography & Videography",
    description: "Professional visual storytelling capturing every precious moment with cinematic quality and artistic excellence.",
    features: [
      "Event photography & videography",
      "Drone aerial coverage",
      "Live streaming services",
      "Post-production editing"
    ],
    icon: <FaCamera className="text-6xl" />,
    color: "from-yellow-500 to-yellow-600",
    bgGradient: "from-yellow-50 to-yellow-100",
    image: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?w=800&auto=format&fit=crop",
  },
  {
    title: "Creative Design & Decor",
    description: "Transform spaces with stunning custom decor, stage designs, and immersive environments that inspire.",
    features: [
      "Custom theme development",
      "Floral arrangements & centerpieces",
      "Stage & backdrop design",
      "Lighting design concepts"
    ],
    icon: <FaPalette className="text-6xl" />,
    color: "from-orange-500 to-orange-600",
    bgGradient: "from-orange-50 to-orange-100",
    image: "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=800&auto=format&fit=crop",
  },
  {
    title: "Sound & Entertainment",
    description: "Professional audio systems and entertainment coordination keeping your guests engaged and delighted.",
    features: [
      "Sound system setup",
      "DJ & live music coordination",
      "MC & host services",
      "Entertainment booking"
    ],
    icon: <FaMicrophone className="text-6xl" />,
    color: "from-indigo-500 to-indigo-600",
    bgGradient: "from-indigo-50 to-indigo-100",
    image: "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=800&auto=format&fit=crop",
  },
  {
    title: "Catering Coordination",
    description: "Comprehensive catering support ensuring exceptional culinary experiences for all your guests.",
    features: [
      "Menu planning & consultation",
      "Vendor coordination",
      "Service staff management",
      "Dietary accommodation"
    ],
    icon: <FaUtensils className="text-6xl" />,
    color: "from-red-500 to-red-600",
    bgGradient: "from-red-50 to-red-100",
    image: "https://images.unsplash.com/photo-1555244162-803834f70033?w=800&auto=format&fit=crop",
  },
];

const Services = () => {
  const [selectedService, setSelectedService] = useState(null);

  return (
    <div className="font-sans bg-white text-gray-800">
      <TopNav />
      <MainHeader />
      
      {/* Hero Section */}
      <section className="relative py-12 md:py-16 lg:py-20 bg-gradient-to-br from-[#0d47a1] via-[#1565c0] to-[#1976d2] text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)',
            backgroundSize: '30px 30px'
          }}></div>
        </div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <span className="inline-block bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-semibold mb-6">
            🎨 What We Offer
          </span>
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold mb-6 leading-tight">
            Premium <span className="text-yellow-300">Event Services</span>
          </h1>
          <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto mb-8">
            From intimate gatherings to grand celebrations, we deliver excellence in every detail
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <button className="bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-600 hover:to-yellow-700 text-gray-900 px-6 py-3 rounded-xl font-bold text-base shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300">
              Get Free Quote
            </button>
            <button className="bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white border-2 border-white px-6 py-3 rounded-xl font-bold text-base transition-all duration-300">
              View Portfolio
            </button>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-12 md:py-16 lg:py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6">
            {services.map((service, index) => (
              <div
                key={index}
                className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100 hover:border-transparent transform hover:-translate-y-2"
                onMouseEnter={() => setSelectedService(index)}
                onMouseLeave={() => setSelectedService(null)}
              >
                {/* Image */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-60 group-hover:opacity-40 transition-opacity duration-300`}></div>
                  <div className="absolute inset-0 flex items-center justify-center text-white">
                    {service.icon}
                  </div>
                </div>

                {/* Content */}
                <div className="p-5">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-[#0d47a1] transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Features List */}
                  <ul className="space-y-2 mb-6">
                    {service.features.slice(0, 3).map((feature, idx) => (
                      <li key={idx} className="flex items-start text-sm text-gray-700">
                        <FaCheckCircle className="text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {/* CTA Button */}
                  <button className={`w-full bg-gradient-to-r ${service.color} text-white py-3 rounded-lg font-semibold flex items-center justify-center group-hover:shadow-lg transition-all duration-300`}>
                    Learn More
                    <FaArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 md:py-16 bg-gradient-to-r from-[#0d47a1] to-[#1976d2] text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold mb-6">
            Ready to Create Something <span className="text-yellow-300">Extraordinary?</span>
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Let's discuss your vision and bring your dream event to life
          </p>
          <button className="bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-600 hover:to-yellow-700 text-gray-900 px-8 py-3 rounded-xl font-bold text-base md:text-lg shadow-2xl hover:shadow-yellow-500/50 transform hover:scale-105 transition-all duration-300">
            Schedule a Consultation
          </button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;
