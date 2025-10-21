import React from 'react';
import { FaBullseye, FaEye, FaHandshake } from 'react-icons/fa';

const MissionVision = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0d47a1] mb-4">
            Our <span className="text-yellow-500">Mission & Vision</span>
          </h2>
          <div className="w-20 h-1 bg-yellow-500 mx-auto mb-6"></div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-lg shadow-md text-center">
            <div className="flex justify-center mb-4">
              <FaBullseye className="text-4xl text-[#0d47a1]" />
            </div>
            <h3 className="text-xl font-semibold mb-3 text-gray-800">Mission</h3>
            <p className="text-gray-600">
              To deliver exceptional event experiences through creativity, precision, and 
              professionalism, helping our clients achieve their objectives and create 
              lasting impressions.
            </p>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-md text-center">
            <div className="flex justify-center mb-4">
              <FaEye className="text-4xl text-[#0d47a1]" />
            </div>
            <h3 className="text-xl font-semibold mb-3 text-gray-800">Vision</h3>
            <p className="text-gray-600">
              To be Tanzania's premier event management company, recognized for our 
              innovation, reliability, and ability to transform visions into 
              unforgettable experiences.
            </p>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-md text-center">
            <div className="flex justify-center mb-4">
              <FaHandshake className="text-4xl text-[#0d47a1]" />
            </div>
            <h3 className="text-xl font-semibold mb-3 text-gray-800">Values</h3>
            <p className="text-gray-600">
              Integrity, Creativity, Excellence, Teamwork, and Client Satisfaction 
              are the core values that guide everything we do at DG Events.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionVision;