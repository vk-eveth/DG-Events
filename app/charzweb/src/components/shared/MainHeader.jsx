import React, { useState, useEffect } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Link, NavLink } from 'react-router-dom';

const MainHeader = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`sticky top-0 z-50 transition-all duration-300 ${
      scrolled ? 'bg-white shadow-lg py-2' : 'bg-white/95 backdrop-blur-sm shadow-md py-3'
    }`}>
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2 group">
              <div className="bg-gradient-to-br from-[#0d47a1] to-[#1976d2] p-2 rounded-lg group-hover:shadow-lg transition-shadow">
                <span className="text-2xl font-bold text-white">Z</span>
              </div>
              <div className="hidden sm:block">
                <span className="text-2xl font-bold text-[#0d47a1]">ZALDA</span>
                <span className="block text-xs text-gray-600 -mt-1">Events & Experiences</span>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            <NavLink 
              to="/" 
              className={({ isActive }) => 
                `px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                  isActive 
                    ? 'text-white bg-gradient-to-r from-[#0d47a1] to-[#1976d2] shadow-md' 
                    : 'text-gray-700 hover:text-[#0d47a1] hover:bg-blue-50'
                }`
              }
            >
              Home
            </NavLink>
            <NavLink 
              to="/i/services" 
              className={({ isActive }) => 
                `px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                  isActive 
                    ? 'text-white bg-gradient-to-r from-[#0d47a1] to-[#1976d2] shadow-md' 
                    : 'text-gray-700 hover:text-[#0d47a1] hover:bg-blue-50'
                }`
              }
            >
              Services
            </NavLink>
            <NavLink 
              to="/i/About-Us" 
              className={({ isActive }) => 
                `px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                  isActive 
                    ? 'text-white bg-gradient-to-r from-[#0d47a1] to-[#1976d2] shadow-md' 
                    : 'text-gray-700 hover:text-[#0d47a1] hover:bg-blue-50'
                }`
              }
            >
              About Us
            </NavLink>
            <button className="ml-4 bg-gradient-to-r from-yellow-500 to-yellow-600 text-gray-900 px-6 py-2.5 rounded-lg font-semibold hover:from-yellow-600 hover:to-yellow-700 transform hover:scale-105 transition-all duration-200 shadow-md hover:shadow-lg">
              Get a Quote
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className="lg:hidden text-gray-700 hover:text-[#0d47a1] transition-colors p-2"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <FaTimes size={26} /> : <FaBars size={26} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <div className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? 'max-h-96 opacity-100 mt-4' : 'max-h-0 opacity-0'
        }`}>
          <div className="bg-gradient-to-br from-gray-50 to-white rounded-xl shadow-xl p-4 border border-gray-100">
            <div className="flex flex-col space-y-2">
              <NavLink 
                to="/" 
                className={({ isActive }) => 
                  `px-4 py-3 rounded-lg font-medium transition-all ${
                    isActive 
                      ? 'bg-gradient-to-r from-[#0d47a1] to-[#1976d2] text-white shadow-md' 
                      : 'text-gray-700 hover:bg-blue-50 hover:text-[#0d47a1]'
                  }`
                }
                onClick={() => setIsOpen(false)}
              >
                Home
              </NavLink>
              <NavLink 
                to="/i/services" 
                className={({ isActive }) => 
                  `px-4 py-3 rounded-lg font-medium transition-all ${
                    isActive 
                      ? 'bg-gradient-to-r from-[#0d47a1] to-[#1976d2] text-white shadow-md' 
                      : 'text-gray-700 hover:bg-blue-50 hover:text-[#0d47a1]'
                  }`
                }
                onClick={() => setIsOpen(false)}
              >
                Services
              </NavLink>
              <NavLink 
                to="/i/About-Us" 
                className={({ isActive }) => 
                  `px-4 py-3 rounded-lg font-medium transition-all ${
                    isActive 
                      ? 'bg-gradient-to-r from-[#0d47a1] to-[#1976d2] text-white shadow-md' 
                      : 'text-gray-700 hover:bg-blue-50 hover:text-[#0d47a1]'
                  }`
                }
                onClick={() => setIsOpen(false)}
              >
                About Us
              </NavLink>
              <button 
                className="mt-2 bg-gradient-to-r from-yellow-500 to-yellow-600 text-gray-900 px-6 py-3 rounded-lg font-semibold hover:from-yellow-600 hover:to-yellow-700 transition-all shadow-md"
                onClick={() => setIsOpen(false)}
              >
                Get a Quote
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default MainHeader;