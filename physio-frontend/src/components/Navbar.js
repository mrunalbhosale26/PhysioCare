
import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-purple-600 shadow-md p-4 flex justify-between items-center">
      {/* Logo */}
      <img src="/images/logo.jpg" alt="Logo" className="h-12 w-auto" />

      {/* Navigation Links */}
      <ul className="flex gap-6">
        {["Home", "About", "Services", "Contact"].map((text) => (
          <li key={text}>
            <Link
              to={`/${text === "Home" ? "" : text.toLowerCase()}`}
              className="bg-purple-300 hover:bg-purple-400 text-purple-700 text-xl font-semibold px-7 py-3 rounded-xl transition-all duration-300"
            >
              {text}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

