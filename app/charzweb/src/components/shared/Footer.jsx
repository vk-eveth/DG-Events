import React from 'react';
import {
  FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn,
  FaMapMarkerAlt, FaPhone, FaEnvelope, FaClock, FaWhatsapp
} from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white pt-16 pb-8">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)',
          backgroundSize: '30px 30px'
        }}></div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10 mb-12">
          {/* About ZALDA */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="bg-gradient-to-br from-yellow-500 to-yellow-600 p-2 rounded-lg">
                <span className="text-xl font-bold text-gray-900">Z</span>
              </div>
              <div>
                <h3 className="text-xl font-bold">ZALDA Events</h3>
                <p className="text-xs text-gray-400">Events & Experiences</p>
              </div>
            </div>
            <p className="text-gray-400 mb-6 text-sm leading-relaxed">
              Youth-led, Zanzibar-based event management company creating unforgettable experiences—from diplomatic to cultural events.
            </p>
            <div className="flex space-x-3">
              <a href="#" className="bg-white/10 hover:bg-gradient-to-r hover:from-yellow-500 hover:to-yellow-600 text-white p-3 rounded-lg transition-all duration-300 transform hover:scale-110">
                <FaFacebookF className="text-lg" />
              </a>
              <a href="#" className="bg-white/10 hover:bg-gradient-to-r hover:from-yellow-500 hover:to-yellow-600 text-white p-3 rounded-lg transition-all duration-300 transform hover:scale-110">
                <FaTwitter className="text-lg" />
              </a>
              <a href="#" className="bg-white/10 hover:bg-gradient-to-r hover:from-yellow-500 hover:to-yellow-600 text-white p-3 rounded-lg transition-all duration-300 transform hover:scale-110">
                <FaInstagram className="text-lg" />
              </a>
              <a href="#" className="bg-white/10 hover:bg-gradient-to-r hover:from-yellow-500 hover:to-yellow-600 text-white p-3 rounded-lg transition-all duration-300 transform hover:scale-110">
                <FaLinkedinIn className="text-lg" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-6 text-white">Quick Links</h3>
            <ul className="space-y-3">
              <li><a href="/" className="text-gray-400 hover:text-yellow-500 transition-colors text-sm flex items-center group">
                <span className="mr-2 text-yellow-500 group-hover:translate-x-1 transition-transform">›</span> Home
              </a></li>
              <li><a href="/i/services" className="text-gray-400 hover:text-yellow-500 transition-colors text-sm flex items-center group">
                <span className="mr-2 text-yellow-500 group-hover:translate-x-1 transition-transform">›</span> Services
              </a></li>
              <li><a href="/i/About-Us" className="text-gray-400 hover:text-yellow-500 transition-colors text-sm flex items-center group">
                <span className="mr-2 text-yellow-500 group-hover:translate-x-1 transition-transform">›</span> About Us
              </a></li>
              <li><a href="/i/team" className="text-gray-400 hover:text-yellow-500 transition-colors text-sm flex items-center group">
                <span className="mr-2 text-yellow-500 group-hover:translate-x-1 transition-transform">›</span> Our Team
              </a></li>
              <li><a href="/i/contact" className="text-gray-400 hover:text-yellow-500 transition-colors text-sm flex items-center group">
                <span className="mr-2 text-yellow-500 group-hover:translate-x-1 transition-transform">›</span> Contact
              </a></li>
            </ul>
          </div>

          {/* Our Services */}
          <div>
            <h3 className="text-xl font-bold mb-6 text-white">Our Services</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-400 hover:text-yellow-500 transition-colors text-sm flex items-center group">
                <span className="mr-2 text-yellow-500 group-hover:translate-x-1 transition-transform">›</span> Corporate & Diplomatic Events
              </a></li>
              <li><a href="#" className="text-gray-400 hover:text-yellow-500 transition-colors text-sm flex items-center group">
                <span className="mr-2 text-yellow-500 group-hover:translate-x-1 transition-transform">›</span> Weddings & Private Functions
              </a></li>
              <li><a href="#" className="text-gray-400 hover:text-yellow-500 transition-colors text-sm flex items-center group">
                <span className="mr-2 text-yellow-500 group-hover:translate-x-1 transition-transform">›</span> Photography & Visuals
              </a></li>
              <li><a href="#" className="text-gray-400 hover:text-yellow-500 transition-colors text-sm flex items-center group">
                <span className="mr-2 text-yellow-500 group-hover:translate-x-1 transition-transform">›</span> Creative Design & Decor
              </a></li>
              <li><a href="#" className="text-gray-400 hover:text-yellow-500 transition-colors text-sm flex items-center group">
                <span className="mr-2 text-yellow-500 group-hover:translate-x-1 transition-transform">›</span> Sound & Entertainment
              </a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-6 text-white">Get In Touch</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3 text-gray-400 text-sm">
                <FaMapMarkerAlt className="text-yellow-500 mt-1 flex-shrink-0" />
                <span>Zanzibar, Tanzania</span>
              </div>
              <div className="flex items-start space-x-3 text-gray-400 text-sm">
                <FaPhone className="text-yellow-500 mt-1 flex-shrink-0" />
                <a href="tel:+255784477447" className="hover:text-yellow-500 transition-colors">+255 784 477 447</a>
              </div>
              <div className="flex items-start space-x-3 text-gray-400 text-sm">
                <FaEnvelope className="text-yellow-500 mt-1 flex-shrink-0" />
                <a href="mailto:info@zalda.co.tz" className="hover:text-yellow-500 transition-colors">info@zalda.co.tz</a>
              </div>
              <div className="flex items-start space-x-3 text-gray-400 text-sm">
                <FaClock className="text-yellow-500 mt-1 flex-shrink-0" />
                <span>Mon-Fri: 8:00AM - 5:00PM</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center text-gray-400 text-sm space-y-4 md:space-y-0">
            <p className="text-center md:text-left">
              &copy; {new Date().getFullYear()} <span className="text-yellow-500 font-semibold">ZALDA Events</span>. All rights reserved. 
              <span className="block sm:inline">🌴 Proudly powered in Zanzibar.</span>
            </p>
            <div className="flex items-center space-x-2">
              <span>Designed with ❤️ by</span>
              <a 
                href="https://victormmanda.dev" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-yellow-500 hover:text-yellow-400 font-semibold transition-colors"
              >
                vK-Eveth Group
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Floating WhatsApp Button */}
      <a
        href="https://wa.me/255784477447"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white p-4 rounded-full shadow-2xl z-50 transform hover:scale-110 transition-all duration-300 animate-pulse-slow"
        aria-label="Contact us on WhatsApp"
      >
        <FaWhatsapp size={28} />
      </a>
      
      <style jsx>{`
        @keyframes pulse-slow {
          0%, 100% {
            box-shadow: 0 0 0 0 rgba(34, 197, 94, 0.7);
          }
          50% {
            box-shadow: 0 0 0 20px rgba(34, 197, 94, 0);
          }
        }
        .animate-pulse-slow {
          animation: pulse-slow 2s infinite;
        }
      `}</style>
    </footer>
  );
};

export default Footer;
