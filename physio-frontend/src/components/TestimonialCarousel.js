import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const testimonials = [
  {
    image: "/images/user1.jpg",
    name: "Riya Sharma.",
    review: "Amazing home visit service! My back pain is gone.",
  },
  {
    image: "/images/user2.jpg",
    name: "Amit Sinha.",
    review: "Very professional and friendly physiotherapist.",
  },
  {
    image: "/images/user3.jpg",
    name: "Shreyas Bhosale.",
    review: "Very professional and friendly physiotherapist.",
  },
];

export default function TestimonialCarousel() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };

  return (
    <Slider {...settings}>
      {testimonials.map((t, i) => (
        <div key={i} className="bg-white p-6 rounded-xl shadow-md m-4 text-center">
          <img src={t.image} alt={t.name} className="mx-auto h-24 w-24 rounded-full mb-4" />
          <p className="text-purple-700 font-semibold">{t.name}</p>
          <p className="text-gray-700 italic">"{t.review}"</p>
        </div>
      ))}
    </Slider>
  );
}
