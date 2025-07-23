import React from "react";
import { FaUserMd, FaHome, FaTools, FaHeartbeat, FaWallet, FaHandsHelping } from 'react-icons/fa';
import TestimonialCarousel from "../components/TestimonialCarousel";

export default function Home() {
  return (
    <div className="bg-gradient-to-b from-purple-50 via-purple-100 to-purple-200 text-gray-800 min-h-screen flex flex-col">
      

      <main className="flex-grow max-w-6xl mx-auto px-4 sm:px-6 py-10 space-y-16">

        {/* Hero Section */}
        <section className="relative rounded-3xl overflow-hidden shadow-2xl">
          <img
            src="/images/hero.jpg"
            alt="Physiotherapy"
            className="w-full h-[400px] sm:h-[500px] object-cover"
          />
          <div className="absolute inset-0 bg-purple-900/40 flex flex-col justify-center items-start px-6 sm:px-12 py-10 text-white">
            <h1 className="text-3xl sm:text-5xl font-bold mb-3 drop-shadow-md">
              Expert Physiotherapy at Your Doorstep
            </h1>
            <p className="text-lg sm:text-xl drop-shadow">
              “Personalized care · Trusted techniques · Delivered with compassion”
            </p>
          </div>
        </section>

        {/* Note from Doctor */}
        <section className="bg-white rounded-2xl p-6 sm:p-10 shadow-md border border-purple-200">
          <h2 className="text-2xl font-semibold text-purple-900 mb-4">A Note from the Doctor</h2>
          <p className="text-gray-800 text-base leading-relaxed">
            "Healing is more than just treating pain. It’s about understanding your journey,
            building trust, and bringing comfort where it’s needed the most. My mission
            is to empower you with movement, confidence, and a pain-free life.
            Let us walk this path to recovery together.”
          </p>
          <p className="mt-4 text-right font-medium text-gray-700">— Dr. Rohan Singh</p>
        </section>
    
{/* Why Choose Us */}
<section className="bg-white rounded-2xl shadow-lg border border-purple-300 p-6 sm:p-10">
  <h2 className="text-3xl font-bold text-purple-900 mb-8 text-center">Why Choose Us</h2>
  <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
    {[
      {
        icon: <FaHandsHelping size={30} className="text-purple-700 mb-3" />,
        title: "Personalized Treatment",
        desc: "Each therapy session is tailored to your specific needs and goals.",
      },
      {
        icon: <FaUserMd size={30} className="text-purple-700 mb-3" />,
        title: "Experienced Professionals",
        desc: "Qualified therapists with years of hands-on expertise in physio care.",
      },
      {
        icon: <FaHome size={30} className="text-purple-700 mb-3" />,
        title: "Home Service Available",
        desc: "Get professional treatment in the comfort of your home.",
      },
      {
        icon: <FaTools size={30} className="text-purple-700 mb-3" />,
        title: "Modern Techniques",
        desc: "We use advanced and scientifically-backed treatment methods.",
      },
      {
        icon: <FaHeartbeat size={30} className="text-purple-700 mb-3" />,
        title: "Patient-Centered Approach",
        desc: "We prioritize your comfort, progress, and recovery at every step.",
      },
      {
        icon: <FaWallet size={30} className="text-purple-700 mb-3" />,
        title: "Affordable Pricing",
        desc: "Accessible care without compromising quality.",
      },
    ].map((item, index) => (
      <div
        key={index}
        className="bg-white rounded-xl shadow-sm border border-purple-300 p-5 hover:shadow-md transition flex flex-col items-start text-left"
      >
        {item.icon}
        <h3 className="text-lg font-semibold text-purple-800 mb-2">{item.title}</h3>
        <p className="text-gray-700 text-sm">{item.desc}</p>
      </div>
    ))}
  </div>
</section>


        {/* Testimonials */}
        <section className="bg-white rounded-2xl shadow-lg border border-purple-300 p-6 sm:p-10">
          <h2 className="text-3xl font-bold text-purple-900 text-center mb-8">
            What Our Patients Say
          </h2>
          <TestimonialCarousel />
        </section>
      </main>

      
    </div>
  );
}

