import React from "react";
import { FaInstagram, FaFacebookF, FaWhatsapp } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-white text-black py-8 px-8 text-center border-t border-gray-600">
      <div className="max-w-4xl mx-auto flex flex-col md:flex-row justify-between items-center">
        {/* Links */}
        <div className="mb-4 md:mb-0">
          <a href="#" className="text-black text-lg hover:text-[#F4E06D] mx-4 transition-colors duration-300">
            Privacy Policy
          </a>
          <a href="#" className="text-black text-lg hover:text-[#F4E06D] mx-4 transition-colors duration-300">
            Contact
          </a>
        </div>
        
        {/* Social Icons */}
        <div className="flex space-x-6">
          <a href="#" className="text-black hover:text-[#E27D60] transition-colors duration-300">
            <FaInstagram size={32} />
          </a>
          <a href="#" className="text-[#F4E06D] hover:text-[#E27D60] transition-colors duration-300">
            <FaFacebookF size={32} />
          </a>
          <a href="#" className="text-[#F4E06D] hover:text-[#E27D60] transition-colors duration-300">
            <FaWhatsapp size={32} />
          </a>
        </div>
      </div>
      
      {/* Copyright */}
      <p className="text-sm text-gray-600 mt-4">&copy; 2025 Kaayakalpam. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
