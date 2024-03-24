import React from 'react';
import { FaLinkedin, FaFacebook, FaGithub } from 'react-icons/fa';

const SocialMediaSection = () => {
  return (
    <section className="py-8 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">Connect with Me</h2>
        <div className="flex justify-center space-x-8">
          <a
            href="https://www.linkedin.com/in/mohd-asri-13044a188"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:text-blue-600 transition duration-300 ease-in-out"
          >
            <FaLinkedin className="text-4xl" />
          </a>
          <a
            href="https://www.facebook.com/mohdasri.omar"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:text-blue-600 transition duration-300 ease-in-out"
          >
            <FaFacebook className="text-4xl" />
          </a>
          <a
            href="https://github.com/asriomar"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-800 hover:text-gray-900 transition duration-300 ease-in-out"
          >
            <FaGithub className="text-4xl" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default SocialMediaSection;
