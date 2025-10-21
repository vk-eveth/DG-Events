import React, { useState, useEffect } from 'react';
import CountUp from 'react-countup';
import { FaCalendarCheck, FaStar, FaUserFriends, FaTrophy } from 'react-icons/fa';

const CounterSection = () => {
  const [startCounters, setStartCounters] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const element = document.getElementById('counter-section');
      if (element) {
        const position = element.getBoundingClientRect();
        if (position.top < window.innerHeight - 100 && !startCounters) {
          setStartCounters(true);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [startCounters]);

  const counters = [
    { 
      number: 250, 
      suffix: '+', 
      label: 'Events Completed',
      icon: <FaCalendarCheck className="text-5xl mb-4" />,
      color: 'from-blue-400 to-blue-600'
    },
    { 
      number: 100, 
      suffix: '%', 
      label: 'Client Satisfaction',
      icon: <FaStar className="text-5xl mb-4" />,
      color: 'from-yellow-400 to-yellow-600'
    },
    { 
      number: 500, 
      suffix: '+', 
      label: 'Happy Clients',
      icon: <FaUserFriends className="text-5xl mb-4" />,
      color: 'from-green-400 to-green-600'
    },
    { 
      number: 15, 
      suffix: '+', 
      label: 'Team Members',
      icon: <FaTrophy className="text-5xl mb-4" />,
      color: 'from-purple-400 to-purple-600'
    }
  ];

  return (
    <section id="counter-section" className="relative py-12 md:py-16 lg:py-20 bg-gradient-to-br from-[#0d47a1] via-[#1565c0] to-[#1976d2] text-white overflow-hidden">
      {/* Animated Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(30deg, transparent 48%, white 49%, white 51%, transparent 52%),
            linear-gradient(150deg, transparent 48%, white 49%, white 51%, transparent 52%)
          `,
          backgroundSize: '40px 40px'
        }}></div>
      </div>

      {/* Floating Orbs */}
      <div className="absolute top-10 left-10 w-32 h-32 bg-yellow-400 rounded-full filter blur-3xl opacity-20 animate-float"></div>
      <div className="absolute bottom-10 right-10 w-40 h-40 bg-blue-300 rounded-full filter blur-3xl opacity-20 animate-float" style={{ animationDelay: '1s' }}></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-10 md:mb-12">
          <span className="inline-block bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-semibold mb-4">
            📊 Our Achievements
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-4">
            Numbers That <span className="text-yellow-300">Speak</span> For Us
          </h2>
          <p className="text-lg text-blue-100 max-w-2xl mx-auto">
            Our track record of excellence and commitment to delivering exceptional events
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {counters.map((counter, index) => (
            <div 
              key={index} 
              className="group relative bg-white/10 backdrop-blur-md rounded-2xl p-6 md:p-8 text-center transform hover:scale-105 transition-all duration-500 hover:bg-white/20 border border-white/20 hover:border-white/40"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              {/* Glow Effect */}
              <div className={`absolute inset-0 bg-gradient-to-br ${counter.color} rounded-2xl opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500`}></div>
              
              <div className="relative z-10">
                {/* Icon */}
                <div className="text-yellow-300 group-hover:text-yellow-200 transition-colors duration-300 flex justify-center">
                  {counter.icon}
                </div>
                
                {/* Counter */}
                <div className="text-5xl md:text-6xl font-black mb-3 text-white group-hover:text-yellow-300 transition-colors duration-300">
                  {startCounters ? (
                    <CountUp 
                      end={counter.number} 
                      duration={2.5} 
                      suffix={counter.suffix}
                      separator=","
                    />
                  ) : (
                    '0'
                  )}
                </div>
                
                {/* Label */}
                <div className="text-base md:text-lg font-semibold text-blue-100 group-hover:text-white transition-colors duration-300">
                  {counter.label}
                </div>

                {/* Decorative Line */}
                <div className="mt-4 h-1 w-16 bg-gradient-to-r from-transparent via-yellow-400 to-transparent mx-auto rounded-full opacity-50 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-10 md:mt-12">
          <p className="text-xl text-blue-100 mb-6">Ready to add your event to our success stories?</p>
          <button className="bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-600 hover:to-yellow-700 text-gray-900 px-8 py-3 rounded-xl font-bold text-base md:text-lg shadow-2xl hover:shadow-yellow-500/50 transform hover:scale-105 transition-all duration-300">
            Let's Create Magic Together
          </button>
        </div>
      </div>
    </section>
  );
};

export default CounterSection;