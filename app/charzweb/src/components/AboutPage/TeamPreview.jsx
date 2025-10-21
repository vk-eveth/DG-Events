import React from 'react';
import { FaFacebookF, FaTwitter, FaLinkedinIn } from 'react-icons/fa';
import CD from '../../assets/CD.jpeg';
import AD from '../../assets/AD.jpeg';
import GS from '../../assets/GS.jpeg';
import AS from '../../assets/AS.jpeg';
import CA from '../../assets/CA.jpeg';
// import COPR from '../../assets/COPR.jpeg';

const TeamPreview = () => {
  const teamMembers = [
    {
      name: "Suleiman Mussa Ame",
      position: "Chief Director",
      image: CD,
      social: {
        facebook: "#",
        twitter: "#",
        linkedin: "#"
      }
    },
    {
      name: "Charles D Augustine",
      position: "Assistant Director",
      image: AD,
      social: {
        facebook: "#",
        twitter: "#",
        linkedin: "#"
      }
    },
    {
      name: "Nasra Hashim Nassor",
      position: "General Secretary",
      image: GS,
      social: {
        facebook: "#",
        twitter: "#",
        linkedin: "#"
      }
    },
    {
      name: "Sarah Williams",
      position: "Assistant Secretary",
      image: AS,
      social: {
        facebook: "#",
        twitter: "#",
        linkedin: "#"
      }
    },
    {
      name: "Mohammed Salum Mohhammed",
      position: "Chief Accountant",
      image: CA,
      social: {
        facebook: "#",
        twitter: "#",
        linkedin: "#"
      }
    },
    // {
    //   name: "Sarah Williams",
    //   position: COPR,
    //   image: "/images/team4.jpg",
    //   social: {
    //     facebook: "#",
    //     twitter: "#",
    //     linkedin: "#"
    //   }
    // }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0d47a1] mb-4">
            Meet Our <span className="text-yellow-500">Team</span>
          </h2>
          <div className="w-20 h-1 bg-yellow-500 mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Our dedicated team of professionals brings diverse skills and experience 
            to deliver exceptional events.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition">
              <img 
                src={member.image} 
                alt={member.name} 
                className="w-full h-64 object-cover"
              />
              <div className="p-6 text-center">
                <h3 className="text-xl font-semibold text-gray-800">{member.name}</h3>
                <p className="text-gray-600 mb-4">{member.position}</p>
                <div className="flex justify-center space-x-3">
                  <a href={member.social.facebook} className="text-gray-500 hover:text-[#0d47a1]">
                    <FaFacebookF />
                  </a>
                  <a href={member.social.twitter} className="text-gray-500 hover:text-[#0d47a1]">
                    <FaTwitter />
                  </a>
                  <a href={member.social.linkedin} className="text-gray-500 hover:text-[#0d47a1]">
                    <FaLinkedinIn />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a 
            href="/i/team" 
            className="inline-block bg-[#0d47a1] text-white px-8 py-3 rounded-md font-medium hover:bg-blue-800"
          >
            View Full Team
          </a>
        </div>
      </div>
    </section>
  );
};

export default TeamPreview;