import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto text-center">
        <div className="mb-6">
          <h4 className="text-2xl font-semibold">TechCluder Community Event</h4>
          <p className="text-sm pt-2">Chattogram Polytechnic Institute | February 2025</p>
        </div>
        <div className="flex justify-center space-x-6 mb-6">
          <a href="#" className="hover:text-gray-400">Home</a>
          <a href="#" className="hover:text-gray-400">About</a>
          <a href="#" className="hover:text-gray-400">Blogs</a>
          <a href="#" className="hover:text-gray-400">Registration</a>
        </div>
        <div className="flex justify-center space-x-6 mb-6">
          <a href="https://facebook.com" className="text-gray-400 hover:text-white">
            <FaFacebook size={24} />
          </a>
          <a href="https://twitter.com" className="text-gray-400 hover:text-white">
            <FaTwitter size={24} />
          </a>
          <a href="https://instagram.com" className="text-gray-400 hover:text-white">
            <FaInstagram size={24} />
          </a>
          <a href="https://linkedin.com" className="text-gray-400 hover:text-white">
            <FaLinkedin size={24} />
          </a>
        </div>
        <div className="text-sm text-gray-400">
          &copy; {new Date().getFullYear()} TechCluder. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

export default Footer;