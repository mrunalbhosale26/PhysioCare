
import React from "react";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-purple-700 text-white py-10 mt-12">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-8">

        {/* Address and Contact */}
        <div>
          <h3 className="text-xl font-bold mb-2">Our Clinic</h3>
          <p>PhysioCare Clinic</p>
          <p>Aundh, Pune</p>
          <p>Maharashtra, India</p>
          <p>Phone: +91 9876543210</p>
        </div>

        {/* Social Media Links */}
        <div className="text-right">
          <h3 className="text-xl font-bold mb-3">Follow Us</h3>
          <div className="flex justify-end space-x-4">
            <a
              href="https://www.facebook.com/drneha"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-purple-300 transition"
            >
              <FaFacebookF size={24} />
            </a>
            <a
              href="https://www.instagram.com/drneha"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-purple-300 transition"
            >
              <FaInstagram size={24} />
            </a>
            <a
              href="https://www.twitter.com/drneha"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-purple-300 transition"
            >
              <FaTwitter size={24} />
            </a>
          </div>
          <p className="mt-4 text-sm">© 2025 PhysioCare. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
