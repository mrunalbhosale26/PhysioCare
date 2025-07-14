// /src/pages/Home.js
import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import TestimonialCarousel from "../components/TestimonialCarousel";

export default function Home() {
  return (
    <div className="bg-purple-50 text-gray-800 min-h-screen flex flex-col justify-between">
      <Navbar />

      <main className="max-w-6xl mx-auto px-6 py-10 space-y-16">

        {/* Hero Section */}
        <section className="relative bg-purple-200 rounded-2xl overflow-hidden shadow-md">
          <img
            src="/images/hero.jpg"
            alt="Physiotherapy"
            className="w-full h-[420px] object-cover opacity-80"
          />
          <div className="absolute inset-0 bg-purple-900/40 flex flex-col justify-center items-start px-8 py-12 text-white">
            <h1 className="text-4xl font-bold mb-3">Expert Physiotherapy at Your Doorstep</h1>
            <p className="text-lg">
              “Personalized care  Trusted techniques, <br />
              Delivered with compassion”
            </p>
          </div>
        </section>

        {/* Note from Doctor */}
        <section className="bg-purple-200 rounded-xl p-6 shadow-md border border-purple-300">
          <h2 className="text-xl font-semibold text-purple-900 mb-4">A Note from the Doctor</h2>
          <p className="text-gray-900 text-base">
            "Healing is more than just treating pain. It’s about understanding your journey,
            building trust, and bringing comfort where it’s needed the most. My mission
            is to empower you with movement, confidence, and a pain-free life.
            Let us walk this path to recovery together.”
          </p>
          <p className="mt-4 text-right font-medium text-gray-800">— Dr. Rohan Singh</p>
        </section>

        {/* Why Choose Us Cards */}
        <section>
          <h2 className="text-3xl font-bold text-purple-900 mb-6 text-center">Why Choose Us</h2>
          <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Personalized Treatment",
                desc: "Each therapy session is tailored to your specific needs and goals."
              },
              {
                title: "Experienced Professionals",
                desc: "Qualified therapists with years of hands-on expertise in physio care."
              },
              {
                title: "Home Service Available",
                desc: "Get professional treatment in the comfort of your home."
              },
              {
                title: "Modern Techniques",
                desc: "We use advanced and scientifically-backed treatment methods."
              },
              {
                title: "Patient-Centered Approach",
                desc: "We prioritize your comfort, progress, and recovery at every step."
              },
              {
                title: "Affordable Pricing",
                desc: "Accessible care without compromising quality."
              }
            ].map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition duration-300 border border-purple-300"
              >
                <h3 className="text-lg font-semibold text-purple-800 mb-2">{item.title}</h3>
                <p className="text-gray-700 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Testimonials Carousel Section in Card */}
        <section className="bg-white rounded-xl shadow-lg border border-purple-300 p-6 md:p-10">
          <h2 className="text-3xl font-bold text-purple-900 text-center mb-6">What Our Patients Say</h2>
          <TestimonialCarousel />
        </section>
      </main>

      <Footer />
    </div>
  );
}
