import React from 'react';
import { FaPhone, FaEnvelope, FaClock } from 'react-icons/fa';

const TopNav = () => {
  return (
    <div className="bg-gradient-to-r from-[#0d47a1] to-[#1565c0] text-white py-2.5 px-4 text-sm">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="flex flex-col sm:flex-row sm:space-x-6 space-y-2 sm:space-y-0 items-center">
          <div className="flex items-center hover:text-yellow-300 transition-colors">
            <FaPhone className="mr-2" />
            <a href="tel:+255784477447" className="hover:underline">+255 784 477 447</a>
          </div>
          <div className="flex items-center hover:text-yellow-300 transition-colors">
            <FaEnvelope className="mr-2" />
            <a href="mailto:info@zalda.co.tz" className="hover:underline">info@zalda.co.tz</a>
          </div>
          <div className="hidden md:flex items-center">
            <FaClock className="mr-2" />
            <span>Mon-Fri: 8:00AM - 5:00PM</span>
          </div>
        </div>
        <div className="hidden md:flex items-center space-x-4 text-xs">
          <span className="text-yellow-300 font-semibold">🌴 Zanzibar's Premier Event Planners</span>
        </div>
      </div>
    </div>
  );
};

export default TopNav;