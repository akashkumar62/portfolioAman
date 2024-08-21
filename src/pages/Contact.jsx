import React from 'react';
import { FaInstagram, FaTwitter, FaFacebookF, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const Contact = () => {
  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-lg mt-10 h-[65vh]">
      <div className="flex flex-col items-center">
        <img
          className="w-32 h-32 object-cover rounded-full shadow-lg mb-4"
          src="https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg"
          alt="Your Name"
        />
        <h1 className="text-3xl font-bold mb-4">Aman Soni</h1>
        <p className="text-gray-700 text-lg mb-6">
          Let's connect! Feel free to reach out to me on social media or via email.
        </p>
        <div className="flex space-x-6">
          <a href="https://www.instagram.com/yourprofile" target="_blank" rel="noopener noreferrer">
            <FaInstagram className="text-4xl text-gray-800 hover:text-pink-500 transition-colors duration-300" />
          </a>
          <a href="https://twitter.com/yourprofile" target="_blank" rel="noopener noreferrer">
            <FaTwitter className="text-4xl text-gray-800 hover:text-blue-400 transition-colors duration-300" />
          </a>
          <a href="https://www.facebook.com/yourprofile" target="_blank" rel="noopener noreferrer">
            <FaFacebookF className="text-4xl text-gray-800 hover:text-blue-700 transition-colors duration-300" />
          </a>
          <a href="https://www.linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="text-4xl text-gray-800 hover:text-blue-700 transition-colors duration-300" />
          </a>
          <a href="mailto:your-email@example.com">
            <FaEnvelope className="text-4xl text-gray-800 hover:text-red-600 transition-colors duration-300" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
