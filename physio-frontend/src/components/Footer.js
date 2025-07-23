import React from "react";
import { FaFacebookF, FaInstagram, FaTwitter, FaHome, FaClock, FaMapMarkerAlt, FaPhone, FaCommentDots } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-purple-800 via-purple-700 to-purple-900 text-white py-12 mt-12 shadow-inner">
      <div className="max-w-6xl mx-auto px-6 md:px-10 flex flex-col md:flex-row justify-between gap-12 md:gap-24">

        {/* Address & Contact Info */}
        <div className="flex-1 space-y-4">
          <h3 className="text-xl font-extrabold tracking-wide mb-3 border-b-2 border-purple-500 pb-2">
            Our Clinic
          </h3>
          <p className="text-sm flex items-center gap-3">
            <FaHome className="text-purple-300" /> PhysioCare Clinic
          </p>
          <p className="text-sm flex items-center gap-3">
            <FaMapMarkerAlt className="text-purple-300" /> Aundh, Pune, Maharashtra
          </p>
          <p className="text-sm flex items-center gap-3">
            <FaPhone className="text-purple-300" /> +91 9876543210
          </p>
        </div>

        {/* Service Info */}
        <div className="flex-1 space-y-4">
          <h3 className="text-xl font-extrabold tracking-wide mb-3 border-b-2 border-purple-500 pb-2">
            Service Details
          </h3>
          <p className="text-sm flex items-center gap-3">
            <FaHome className="text-purple-300" /> Home Visits Available
          </p>
          <p className="text-sm flex items-center gap-3">
            <FaClock className="text-purple-300" /> Mon - Sat: 9 AM - 8 PM
          </p>
          <p className="text-sm flex items-center gap-3 mt-3">
            <FaCommentDots className="text-purple-300" />
            <a
              href="/contact"
              className="underline text-purple-300 hover:text-white transition-colors duration-300"
            >
              Book an Appointment
            </a>
          </p>
        </div>

        {/* Social Media */}
        <div className="flex-1 space-y-4">
          <h3 className="text-xl font-extrabold tracking-wide mb-3 border-b-2 border-purple-500 pb-2">
            Follow Us
          </h3>
          <div className="flex gap-6 mt-3">
            {[
              { icon: FaFacebookF, url: "https://www.facebook.com/drneha" },
              { icon: FaInstagram, url: "https://www.instagram.com/drneha" },
              { icon: FaTwitter, url: "https://www.twitter.com/drneha" },
            ].map(({ icon: Icon, url }, i) => (
              <a
                key={i}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-purple-600 hover:bg-purple-500 shadow-lg transition transform hover:-translate-y-1"
                aria-label="Social Link"
              >
                <Icon size={22} className="text-white" />
              </a>
            ))}
          </div>
          <p className="mt-6 text-xs text-purple-300 select-none">
            © 2025 PhysioCare. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
