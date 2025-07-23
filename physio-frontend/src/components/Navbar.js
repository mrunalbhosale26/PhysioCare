import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  const navLinks = ["Home", "About", "Services", "Contact"];

  return (
    <nav className="bg-gradient-to-r from-purple-700 via-purple-800 to-purple-900 shadow-lg sticky top-0 z-50">
      <div className="max-w-6xl mx-auto flex justify-between items-center px-5 py-4">
        {/* Logo */}
        <img
          src="/images/logo.jpg"
          alt="Logo"
          className="h-14 w-auto rounded-md shadow-md hover:scale-105 transition-transform duration-300"
          draggable={false}
        />

        {/* Desktop Navigation Links */}
        <ul className="hidden md:flex gap-10 font-semibold text-white tracking-wide select-none text-lg">
          {navLinks.map((text) => (
            <li key={text} className="relative group">
              <Link
                to={`/${text === "Home" ? "" : text.toLowerCase()}`}
                className="px-4 py-2 rounded-md hover:text-purple-300 hover:bg-purple-700 transition duration-300"
              >
                {text}
              </Link>

              {/* Animated underline */}
              <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-purple-300 transition-all group-hover:w-full"></span>
            </li>
          ))}
        </ul>

        {/* Mobile Hamburger */}
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            aria-label="Toggle Menu"
            className="p-2 rounded-md text-white hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-400"
          >
            {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Links with slide-down animation */}
      <div
        className={`md:hidden bg-purple-800 overflow-hidden transition-[max-height,padding] duration-300 ease-in-out ${
          isOpen ? "max-h-screen py-4" : "max-h-0 py-0"
        }`}
      >
        <ul className="flex flex-col gap-3 text-center font-semibold text-white select-none text-lg">
          {navLinks.map((text) => (
            <li key={text}>
              <Link
                to={`/${text === "Home" ? "" : text.toLowerCase()}`}
                onClick={closeMenu}
                className="block px-4 py-2 rounded-md hover:bg-purple-700 hover:text-purple-300 transition"
              >
                {text}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
