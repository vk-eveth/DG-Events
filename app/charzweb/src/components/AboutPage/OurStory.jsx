import React from 'react';

const OurStory = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center">
          <div className="lg:w-1/2 mb-8 lg:mb-0 lg:pr-12">
            <img 
              src="/images/about-story.jpg" 
              alt="Our Story" 
              className="rounded-lg shadow-md w-full"
            />
          </div>
          <div className="lg:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0d47a1] mb-4">
              Our <span className="text-yellow-500">Story</span>
            </h2>
            <div className="w-20 h-1 bg-yellow-500 mb-6"></div>
            <p className="text-gray-600 mb-4">
              DG Events was founded in 2010 with a vision to transform Tanzania's event industry. 
              What began as a small team with big dreams has grown into one of the most respected 
              event management companies in the region.
            </p>
            <p className="text-gray-600 mb-6">
              Over the years, we've had the privilege of working with diverse clients across various 
              industries, helping them create memorable events that achieve their objectives and 
              exceed expectations.
            </p>
            <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-yellow-500">
              <p className="italic text-gray-700">
                "Our journey has been guided by our passion for creativity, our commitment to 
                excellence, and our dedication to client satisfaction."
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurStory;