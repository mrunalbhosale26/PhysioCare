import React from "react";
import { FaGraduationCap, FaUserMd, FaHeartbeat, FaLightbulb } from "react-icons/fa";


export default function About() {
  return (
    <div className="bg-purple-50 text-gray-800 flex flex-col min-h-screen">
      

      {/* Hero Section */}
      <div className="bg-gradient-to-r from-purple-100 via-purple-200 to-purple-100 py-10 text-center px-4">
        <FaUserMd className= "text-4xl text-purple-600 mb-4 mx-auto" />
        <h1 className="text-4xl md:text-5xl font-bold text-purple-900 mb-2">Meet Your Physio Expert</h1>
        <p className="text-lg text-purple-700 max-w-2xl mx-auto">
          Dedicated to helping you move better, live pain-free, and regain control of your life.
        </p>
      </div>

      <div className="container mx-auto px-4 py-10 space-y-10 max-w-6xl">

        {/* Profile Card */}
        <div className="bg-white border border-purple-200 rounded-3xl shadow-lg p-8 flex flex-col md:flex-row items-center gap-6">
          <img
            src="/images/doctor.jpg"
            alt="Dr. Rohan Singh"
            className="w-40 h-40 rounded-full object-cover shadow-md border-4 border-purple-300"
          />
          <div className="text-center md:text-left">
            <h2 className="text-3xl font-bold text-purple-900">Dr. Rohan Singh</h2>
            <p className="text-gray-700 font-medium">Founder & Chief Physiotherapist</p>
            <p className="mt-3 text-gray-600 leading-relaxed">
              With over 15 years of experience, Dr. Singh is passionate about helping patients
              regain mobility and live pain-free lives. He specializes in sports injuries,
              orthopedic conditions, and geriatric care. Known for his hands-on approach,
              compassionate care, and innovative rehabilitation techniques.
            </p>
          </div>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

          {/* Education */}
          <div className="bg-white border border-purple-200 rounded-2xl shadow-md p-6">
            <div className="flex items-center mb-4 gap-2 text-purple-800">
              <FaGraduationCap className="text-2xl" />
              <h3 className="text-2xl font-semibold">Education & Certifications</h3>
            </div>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li>Bachelor of Physiotherapy (BPT) – Delhi University</li>
              <li>Masters in Sports Physiotherapy – Mumbai University</li>
              <li>Certified in Manual Therapy & Kinesio Taping</li>
              <li>International Certification in Dry Needling & Electrotherapy</li>
            </ul>
          </div>

          {/* Expertise */}
          <div className="bg-white border border-purple-200 rounded-2xl shadow-md p-6">
            <div className="flex items-center mb-4 gap-2 text-purple-800">
              <FaHeartbeat className="text-2xl" />
              <h3 className="text-2xl font-semibold">Areas of Expertise</h3>
            </div>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li>Back & Neck Pain Management</li>
              <li>Sports Injury Rehabilitation</li>
              <li>Post-Operative Physiotherapy</li>
              <li>Senior Citizen Mobility Programs</li>
              <li>Neurological Rehab (Stroke, Parkinson’s)</li>
              <li>Posture Correction & Ergonomic Training</li>
            </ul>
          </div>

          {/* Vision */}
          <div className="bg-white border border-purple-200 rounded-2xl shadow-md p-6 md:col-span-2">
            <div className="flex items-center mb-4 gap-2 text-purple-800">
              <FaLightbulb className="text-2xl" />
              <h3 className="text-2xl font-semibold">Philosophy & Vision</h3>
            </div>
            <p className="text-gray-700 leading-relaxed">
              “Healing is not just about treatment—it’s about connection. I strive to listen to each
              patient’s journey, tailor therapy to their life, and support them with care and science.
              My goal is to make advanced physiotherapy accessible to every household in our city.”
            </p>
            <p className="text-right text-sm mt-4 italic text-purple-600">— Dr. Rohan Singh</p>
          </div>

        </div>
      </div>

     
    </div>
  );
}

