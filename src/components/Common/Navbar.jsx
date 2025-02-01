import React, { useState } from "react";
import { Link } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-transparent fixed top-0 left-0 right-0 py-4 z-50">
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <div className="text-2xl font-bold cursor-pointer text-white">
          SHAIDS
        </div>

        {/* Desktop Nav */}
        <ul className="hidden md:flex space-x-6 text-white cursor-pointer">
          <li className="hover:text-purple-400">
            <Link to="/">Home</Link>
          </li>
          <li className="hover:text-purple-400">
            <Link to="/about">About</Link>
          </li>
          <li className="hover:text-purple-400">
            <Link to="/services">Services</Link>
          </li>
          <li className="hover:text-purple-400">
            <Link to="/contact-us">Contact</Link>
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white"
          onClick={() => setIsOpen(true)}
        >
          <MenuIcon fontSize="large" />
        </button>
      </div>

      {/* Mobile Menu (Glass Effect with Fade Transition) */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-md flex flex-col items-center justify-center z-50 transition-opacity duration-500 opacity-100"
          style={{ opacity: isOpen ? 1 : 0 }}
        >
          {/* Close Button */}
          <button
            className="absolute top-6 right-6 text-white"
            onClick={() => setIsOpen(false)}
          >
            <CloseIcon fontSize="large" />
          </button>

          {/* Mobile Menu Links */}
          <ul className="text-white text-2xl space-y-6 text-center">
            <li>
              <Link to="/" onClick={() => setIsOpen(false)}>Home</Link>
            </li>
            <li>
              <Link to="/about" onClick={() => setIsOpen(false)}>About</Link>
            </li>
            <li>
              <Link to="/services" onClick={() => setIsOpen(false)}>Services</Link>
            </li>
            <li>
              <Link to="/contact-us" onClick={() => setIsOpen(false)}>Contact</Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
