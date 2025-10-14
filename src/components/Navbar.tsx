import React, { useState } from 'react';
import Dropdown from './Dropdown';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className='text-black flex justify-between items-center p-4 font-bold bg-white fixed w-full z-50 shadow '>
      {/* Logo */}
      <div className='flex items-center gap-8'>
        <img
          src="https://cdn-resources.ableton.com/80bA26cPQ1hEJDFjpUKntxfqdmG3ZykO/static/images/ableton-hallmark.ef5355379032.svg"
          alt="Ableton - Made in Berlin"
          width="45"
          height="21"
        />

        {/* Desktop Menu */}
        <div className='hidden md:flex space-x-8 text-gray-700 font-medium'>
          <a href="#">Live</a>
          <a href="#">Push</a>
          <a href="#">Move</a>
          <a href="#">Note</a>
          <a href="#">Link</a>
          <a href="#">Shop</a>
          <a href="#">Packs</a>
          <a href="#">Help</a>
          <Dropdown />
        </div>
      </div>

      {/* Right side buttons */}
      <div className='hidden md:flex items-center gap-8'>
        <a href="#" className='text-blue-600'>Try Live 12 for free</a>
        <a href="#">Log in or register</a>
      </div>

      {/* Mobile Menu Icon */}
      <div className="md:hidden text-2xl cursor-pointer" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <FaTimes /> : <FaBars />}
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white border-t border-gray-200 shadow-md z-40">
          <ul className="flex flex-col space-y-4 py-4 px-6 text-gray-700 font-medium">
            <li><a href="#" className="hover:text-blue-600">Live</a></li>
            <li><a href="#" className="hover:text-blue-600">Push</a></li>
            <li><a href="#" className="hover:text-blue-600">Move</a></li>
            <li><a href="#" className="hover:text-blue-600">Note</a></li>
            <li><a href="#" className="hover:text-blue-600">Link</a></li>
            <li><a href="#" className="hover:text-blue-600">Shop</a></li>
            <li><a href="#" className="hover:text-blue-600">Packs</a></li>
            <li><a href="#" className="hover:text-blue-600">Help</a></li>
            <li><a href="#" className="text-blue-600">Try Live 12 for free</a></li>
            <li><a href="#">Log in or register</a></li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
