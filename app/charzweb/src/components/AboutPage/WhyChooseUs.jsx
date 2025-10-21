import React from 'react';
import { FaCheck, FaLightbulb, FaUsers, FaCalendarCheck } from 'react-icons/fa';

const WhyChooseUs = () => {
  const features = [
    {
      icon: <FaLightbulb className="text-2xl text-yellow-500" />,
      title: "Creative Solutions",
      description: "Innovative approaches tailored to your unique needs"
    },
    {
      icon: <FaUsers className="text-2xl text-yellow-500" />,
      title: "Experienced Team",
      description: "Skilled professionals with years of industry experience"
    },
    {
      icon: <FaCheck className="text-2xl text-yellow-500" />,
      title: "Attention to Detail",
      description: "Meticulous planning for flawless execution"
    },
    {
      icon: <FaCalendarCheck className="text-2xl text-yellow-500" />,
      title: "Proven Track Record",
      description: "Successful events across various industries"
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center">
          <div className="lg:w-1/2 mb-8 lg:mb-0 lg:pr-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0d47a1] mb-4">
              Why <span className="text-yellow-500">Choose Us</span>
            </h2>
            <div className="w-20 h-1 bg-yellow-500 mb-6"></div>
            <p className="text-gray-600 mb-6">
              At DG Events, we stand out from the competition through our unique 
              combination of creativity, experience, and dedication to client 
              satisfaction.
            </p>
            <ul className="space-y-4">
              {features.map((feature, index) => (
                <li key={index} className="flex items-start">
                  <span className="mr-4 mt-1">{feature.icon}</span>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800">{feature.title}</h3>
                    <p className="text-gray-600">{feature.description}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <div className="lg:w-1/2">
            <img 
              src="/images/why-choose-us.jpg" 
              alt="Why Choose DG Events" 
              className="rounded-lg shadow-md w-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;