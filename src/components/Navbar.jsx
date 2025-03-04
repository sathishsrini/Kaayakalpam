import React from 'react';
import logo from '../assets/kaayalapam.png';

const Navbar = () => {
  // Function to handle smooth scrolling
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="p-3 flex justify-between items-center bg-white shadow-md fixed w-full top-0 z-50">
      <div className="flex items-center">
        <img src={logo} className="w-16 h-16" alt="Kaayakalpam Logo" />
        <p className="pl-2 text-2xl font-bold text-gray-800">Kaayakalpam</p>
      </div>
      <ul className="flex space-x-6 text-lg font-medium text-gray-700">
        <li className="cursor-pointer hover:text-green-600" onClick={() => scrollToSection('about')}>About</li>
        <li className="cursor-pointer hover:text-green-600" onClick={() => scrollToSection('services')}>Services</li>
        <li className="cursor-pointer hover:text-green-600" onClick={() => scrollToSection('footer')}>Contact</li>
      </ul>
    </nav>
  );
};

export default Navbar;
