import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Services() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleReadMore = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const services = [
    {
      title: "Back Pain Relief",
      description: "We address lower and upper back pain caused by poor posture, disc issues, or muscle strain.",
      treatment: "Manual therapy, posture correction, heat therapy, stretching, and strengthening exercises.",
      image: "/images/back-pain.jpg",
    },
    {
      title: "Joint Mobilization",
      description: "Improves flexibility and reduces stiffness in knees, shoulders, elbows, or hips.",
      treatment: "Gentle passive movements, range of motion exercises, and mobilization techniques.",
      image: "/images/joint-mobilization.jpg",
    },
    {
      title: "Electrotherapy",
      description: "Used for pain relief, inflammation control, and muscle stimulation.",
      treatment: "TENS, IFT (Interferential Therapy), and Ultrasound therapy based on condition.",
      image: "/images/electrotherapy.jpg",
    },
    {
      title: "Senior Citizen Physiotherapy",
      description: "Personalized therapy for seniors focusing on balance, coordination, and mobility.",
      treatment: "Fall prevention, strengthening exercises, walking aid training, home safety evaluation.",
      image: "/images/senior-physio.jpg",
    },
    {
      title: "Home Visit Service",
      description: "We bring physiotherapy to your doorstep with all essential portable equipment.",
      treatment: "Customized sessions using TENS, weights, resistance bands, and hands-on treatment.",
      image: "/images/home-visit.jpg",
    },
    {
      title: "Post-Surgical Rehabilitation",
      description: "Regain strength and mobility after orthopedic or neurological surgeries.",
      treatment: "Scar massage, joint mobilization, strengthening, flexibility training.",
      image: "/images/post-surgery.jpg",
    },
    {
      title: "Sports Injury Recovery",
      description: "Quick recovery from sprains, strains, and sports injuries.",
      treatment: "RICE therapy, taping, agility drills, functional training, and rehab programs.",
      image: "/images/sports-injury.jpg",
    },
    {
      title: "Balance & Gait Training",
      description: "Improves walking patterns and reduces risk of falls in all age groups.",
      treatment: "Gait correction, balance board, strengthening, and core activation.",
      image: "/images/balance-gait.jpg",
    },
  ];

  return (
    <div className="bg-purple-50 text-gray-800 min-h-screen flex flex-col justify-between">
      <Navbar />

      <main className="max-w-6xl mx-auto px-6 py-10">
        <h2 className="text-3xl font-bold text-purple-800 text-center mb-10">
          Our Physiotherapy Services at Home
        </h2>

        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white border border-purple-200 rounded-2xl shadow-md hover:shadow-xl hover:scale-[1.02] transition-transform duration-300"
            >
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-48 object-cover rounded-t-2xl"
              />
              <div className="p-5 space-y-3">
                <h3 className="text-xl font-semibold text-purple-800">
                  {service.title}
                </h3>
                <p className="text-sm text-purple-600 cursor-pointer hover:underline" onClick={() => toggleReadMore(index)}>
                  {openIndex === index ? "Hide Details ▲" : "Click to Read More ▼"}
                </p>
                {openIndex === index && (
                  <div className="text-sm text-gray-700 space-y-2">
                    <p>{service.description}</p>
                    <p>
                      <span className="font-semibold text-purple-700">
                        Treatment Includes:
                      </span>{" "}
                      {service.treatment}
                    </p>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
}
