import React, { useState } from "react";
import { FaPlusCircle } from "react-icons/fa";

export default function Services() {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const services = [
    {
      title: "Back Pain Relief",
      description: "We address lower and upper back pain caused by poor posture, disc issues, or muscle strain.",
      treatments: [
        "Manual therapy",
        "Posture correction",
        "Heat therapy",
        "Stretching",
        "Strengthening exercises"
      ],
      image: "/images/back-pain.jpg",
    },
    {
      title: "Joint Mobilization",
      description: "Improves flexibility and reduces stiffness in knees, shoulders, elbows, or hips.",
      treatments: [
        "Gentle passive movements",
        "Range of motion exercises",
        "Mobilization techniques"
      ],
      image: "/images/joint-mobilization.jpg",
    },
    {
      title: "Electrotherapy",
      description: "Used for pain relief, inflammation control, and muscle stimulation.",
      treatments: [
        "TENS",
        "IFT (Interferential Therapy)",
        "Ultrasound therapy"
      ],
      image: "/images/electrotherapy.jpg",
    },
    {
      title: "Senior Citizen Physiotherapy",
      description: "Personalized therapy for seniors focusing on balance, coordination, and mobility.",
      treatments: [
        "Fall prevention",
        "Strengthening exercises",
        "Walking aid training",
        "Home safety evaluation"
      ],
      image: "/images/senior-physio.jpg",
    },
    {
      title: "Home Visit Service",
      description: "We bring physiotherapy to your doorstep with all essential portable equipment.",
      treatments: [
        "TENS",
        "Weights",
        "Resistance bands",
        "Hands-on treatment"
      ],
      image: "/images/home-visit.jpg",
    },
    {
      title: "Post-Surgical Rehabilitation",
      description: "Regain strength and mobility after orthopedic or neurological surgeries.",
      treatments: [
        "Scar massage",
        "Joint mobilization",
        "Strengthening",
        "Flexibility training"
      ],
      image: "/images/post-surgery.jpg",
    },
    {
      title: "Sports Injury Recovery",
      description: "Quick recovery from sprains, strains, and sports injuries.",
      treatments: [
        "RICE therapy",
        "Taping",
        "Agility drills",
        "Functional training",
        "Rehab programs"
      ],
      image: "/images/sports-injury.jpg",
    },
    {
      title: "Balance & Gait Training",
      description: "Improves walking patterns and reduces risk of falls in all age groups.",
      treatments: [
        "Gait correction",
        "Balance board",
        "Strengthening",
        "Core activation"
      ],
      image: "/images/balance-gait.jpg",
    },
  ];

  const toggleExpand = (index) => {
    setExpandedIndex(index === expandedIndex ? null : index);
  };

  return (
    <div className="bg-purple-50 min-h-screen flex flex-col justify-between">
      <div className="py-16 px-4 max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-purple-800 mb-10">
          Our Services
        </h2>

        <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg border border-purple-200 p-6 hover:shadow-2xl transition duration-300 transform hover:-translate-y-1"
            >
              <div className="flex flex-col items-center text-center">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-48 object-cover rounded-lg mb-4 mt-2"
                />

                <h3 className="text-2xl font-semibold text-purple-900 mb-2">
                  {service.title}
                </h3>

                <p className="text-gray-600 mb-4">{service.description}</p>

                <button
                  onClick={() => toggleExpand(index)}
                  className="flex items-center text-purple-700 font-semibold hover:underline"
                >
                  <FaPlusCircle className="mr-2" />
                  {expandedIndex === index ? "Hide Details" : "Click to Read More"}
                </button>

                {expandedIndex === index && (
                  <ul className="mt-4 list-disc text-left text-gray-700 pl-5 space-y-1">
                    {service.treatments.map((treatment, i) => (
                      <li key={i}>{treatment}</li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
