
import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function About() {
  return (
    <div className="bg-purple-50 text-gray-800 min-h-screen flex flex-col justify-between relative">
      <Navbar />
      <div className="bg-purple-50 py-16 min-h-screen">
        <div className="container mx-auto px-4 space-y-10 max-w-5xl">

          {/* Main Profile Card */}
          <div className="bg-white border border-purple-200 rounded-2xl shadow-md p-6 text-center">
            <img
              src="/images/doctor.jpg"
              alt="Dr. Rohan Singh"
              className="mx-auto w-40 h-40 rounded-full mb-4 object-cover shadow-md"
            />
            <h2 className="text-3xl font-bold text-purple-900 mb-2">Dr. Rohan Singh</h2>
            <p className="text-gray-700">Founder & Chief Physiotherapist</p>
            <p className="mt-4 text-gray-600">
              With over 15 years of experience, Dr. Singh is passionate about helping patients
              regain mobility and live pain-free lives. He specializes in sports injuries,
              orthopedic conditions, and geriatric care. Dr. Singh is known for his hands-on
              approach, compassionate care, and innovative rehabilitation techniques.
            </p>
          </div>

          {/* Education Card */}
          <div className="bg-white border border-purple-200 rounded-2xl shadow-md p-6">
            <h3 className="text-2xl font-semibold text-purple-800 mb-3">Education & Certifications</h3>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li>Bachelor of Physiotherapy (BPT) – Delhi University</li>
              <li>Masters in Sports Physiotherapy – Mumbai University</li>
              <li>Certified in Manual Therapy & Kinesio Taping</li>
              <li>International Certification in Dry Needling & Electrotherapy</li>
            </ul>
          </div>

          {/* Expertise Card */}
          <div className="bg-white border border-purple-200 rounded-2xl shadow-md p-6">
            <h3 className="text-2xl font-semibold text-purple-800 mb-3">Areas of Expertise</h3>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li>Back & Neck Pain Management</li>
              <li>Sports Injury Rehabilitation</li>
              <li>Post-Operative Physiotherapy</li>
              <li>Senior Citizen Mobility Programs</li>
              <li>Neurological Rehab (Stroke, Parkinson’s)</li>
              <li>Posture Correction & Ergonomic Training</li>
            </ul>
          </div>

          {/* Vision Card */}
          <div className="bg-white border border-purple-200 rounded-2xl shadow-md p-6">
            <h3 className="text-2xl font-semibold text-purple-800 mb-3">Philosophy & Vision</h3>
            <p className="text-gray-700">
              “Healing is not just about treatment—it’s about connection. I strive to listen to each
              patient’s journey, tailor therapy to their life, and support them with care and science.
              My goal is to make advanced physiotherapy accessible to every household in our city.”
            </p>
            <p className="text-right text-sm mt-4 italic text-purple-600">— Dr. Rohan Singh</p>
          </div>

        </div>
      </div>
      <Footer />
    </div>
  );
}
