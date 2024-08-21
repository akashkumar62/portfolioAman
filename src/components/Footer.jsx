import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8 mb-0 bottom-0">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-center md:text-left mb-6 md:mb-0">
            <h2 className="text-2xl font-bold mb-2">Contact Me</h2>
            <p className="mb-1">Email: <a href="mailto:akashkumariitian@gmail.com" className="text-blue-400 hover:underline">akashkumariitian@gmail.com</a></p>
            <p className="mb-1">Phone: <a href="tel:+916207859831" className="text-blue-400 hover:underline">+916207859831</a></p>
          </div>

          <div className="flex space-x-4 mb-6 md:mb-0">
            <a href="https://facebook.com" className="text-white hover:text-gray-400" aria-label="Facebook">
              <FaFacebookF size={24} />
            </a>
            <a href="https://twitter.com" className="text-white hover:text-gray-400" aria-label="Twitter">
              <FaTwitter size={24} />
            </a>
            <a href="https://instagram.com" className="text-white hover:text-gray-400" aria-label="Instagram">
              <FaInstagram size={24} />
            </a>
            <a href="https://linkedin.com" className="text-white hover:text-gray-400" aria-label="LinkedIn">
              <FaLinkedin size={24} />
            </a>
          </div>
        </div>
        
        <div className="text-center mt-6">
          <p className="text-sm">&copy; {new Date().getFullYear()} Aman Soni. All rights reserved.</p>
        </div>

        <div className="text-center mt-6 flex flex-col items-center">
          <p className="text-sm mb-2">Developed by Akash</p>
          <div className="flex space-x-4">
            <Link to="https://www.linkedin.com/in/akash-kumar-6a95491b9/" aria-label="LinkedIn">
              <FaLinkedin size={24} className="text-blue-400 hover:text-blue-300" />
            </Link>
            <Link to="https://www.instagram.com/akashhh_o07/" aria-label="Instagram">
              <FaInstagram size={24} className="text-pink-400 hover:text-pink-300" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
 