import React, { useState, useEffect } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const testimonials = [
  {
    name: "Amit Sharma",
    message:
      "The physiotherapy sessions at home were a blessing! I recovered faster and felt truly cared for.",
    image: "/images/user2.jpg",
  },
  {
    name: "Priya Desai",
    message:
      "Very professional and compassionate treatment. Highly recommended for anyone needing physio at home!",
    image: "/images/user1.jpg",
  },
  {
    name: "Rahul Mehta",
    message:
      "I was suffering from back pain for months. Thanks to Dr. Singh, I’m finally pain-free.",
    image: "/images/user3.jpg",
  },
];

export default function TestimonialCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-slide every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const next = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prev = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length
    );
  };

  const { name, message, image } = testimonials[currentIndex];

  return (
    <div className="relative w-full max-w-3xl mx-auto px-4 py-10">
      <div className="bg-purple-50 rounded-xl p-6 shadow-md text-center border border-purple-200 transition-all duration-500">
        <div className="flex justify-center mb-4">
          <img
            src={image}
            alt={name}
            className="w-20 h-20 rounded-full object-cover border-4 border-purple-300"
          />
        </div>
        <p className="text-lg text-gray-800 mb-4 italic">“{message}”</p>
        <h3 className="text-purple-900 font-semibold text-base">— {name}</h3>
      </div>

      {/* Navigation Arrows */}
      <div className="absolute top-1/2 -translate-y-1/2 left-2 sm:left-0">
        <button
          onClick={prev}
          className="bg-purple-200 hover:bg-purple-300 text-purple-800 rounded-full p-2 shadow-md transition"
          aria-label="Previous testimonial"
        >
          <FaChevronLeft />
        </button>
      </div>
      <div className="absolute top-1/2 -translate-y-1/2 right-2 sm:right-0">
        <button
          onClick={next}
          className="bg-purple-200 hover:bg-purple-300 text-purple-800 rounded-full p-2 shadow-md transition"
          aria-label="Next testimonial"
        >
          <FaChevronRight />
        </button>
      </div>
    </div>
  );
}
