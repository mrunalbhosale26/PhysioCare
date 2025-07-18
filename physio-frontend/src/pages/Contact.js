// src/pages/Contact.js
import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Contact() {
  const [enquiryData, setEnquiryData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [bookingData, setBookingData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    location: "",
    issue: "",
    date: "",
    time: "",
  });

  const [toast, setToast] = useState("");
  const [enquirySuccess, setEnquirySuccess] = useState(false);
  const [bookingSuccess, setBookingSuccess] = useState(false);

  const showToast = (msg) => {
    setToast(msg);
    setTimeout(() => setToast(""), 3000);
  };

  const handleEnquirySubmit = async (e) => {
    e.preventDefault();
    const { name, email, phone, message } = enquiryData;
    if (!name || !email || !phone || !message) {
      showToast("Please fill all enquiry fields!");
      return;
    }

    try {
      const res = await fetch("http://localhost:5000/api/enquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(enquiryData),
      });

      if (res.ok) {
        setEnquirySuccess(true);
        showToast("Enquiry submitted successfully!");
        setEnquiryData({ name: "", email: "", phone: "", message: "" });
      } else {
        showToast("Error submitting enquiry.");
      }
    } catch (error) {
      console.error("Error:", error);
      showToast("Server error!");
    }
  };

  const handleBookingSubmit = async (e) => {
    e.preventDefault();
    const { name, email, phone, address, date, time } = bookingData;
    if (!name || !email || !phone || !address || !date || !time) {
      showToast("Please complete all booking fields!");
      return;
    }

    try {
      const res = await fetch("http://localhost:5000/api/booking", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(bookingData),
      });

      if (res.ok) {
        setBookingSuccess(true);
        showToast("Appointment booked successfully!");
        setBookingData({
          name: "",
          email: "",
          phone: "",
          address: "",
          location: "",
          issue: "",
          date: "",
          time: "",
        });
      } else {
        showToast("Error submitting booking.");
      }
    } catch (error) {
      console.error("Error:", error);
      showToast("Server error!");
    }
  };

  return (
    <div className="bg-gradient-to-br from-purple-50 via-purple-100 to-purple-200 text-gray-800 min-h-screen flex flex-col justify-between relative">
      <Navbar />

      {toast && (
        <div className="fixed top-4 left-1/2 transform -translate-x-1/2 bg-green-600 text-white px-6 py-2 rounded-lg shadow-lg z-50 animate-bounce">
          {toast}
        </div>
      )}

      <main className="max-w-5xl mx-auto py-12 px-6 space-y-12">
        {/* Enquiry Form */}
        <div className="bg-white border border-purple-200 rounded-2xl shadow-lg p-6 md:p-10">
          <h2 className="text-2xl font-bold text-purple-800 mb-6">Enquiry Form</h2>
          <form className="space-y-4" onSubmit={handleEnquirySubmit}>
            {["name", "email", "phone"].map((field) => (
              <input
                key={field}
                type={field === "email" ? "email" : field === "phone" ? "tel" : "text"}
                placeholder={field.charAt(0).toUpperCase() + field.slice(1)}
                value={enquiryData[field]}
                onChange={(e) => setEnquiryData({ ...enquiryData, [field]: e.target.value })}
                className="w-full p-3 border border-purple-100 rounded-md"
              />
            ))}
            <textarea
              placeholder="Your Message / Doubt / Inquiry"
              value={enquiryData.message}
              onChange={(e) => setEnquiryData({ ...enquiryData, message: e.target.value })}
              className="w-full p-3 border border-purple-100 rounded-md h-32"
            ></textarea>
            <button
              type="submit"
              className="bg-purple-700 text-white px-6 py-2 rounded-md hover:bg-purple-800 transition"
            >
              Submit Enquiry
            </button>
            {enquirySuccess && (
              <p className="text-green-600 mt-2 text-sm">Thank you! We'll get back to you shortly.</p>
            )}
          </form>
        </div>

        {/* Booking Form */}
        <div className="bg-white border border-purple-200 rounded-2xl shadow-lg p-6 md:p-10">
          <h2 className="text-2xl font-bold text-purple-800 mb-6">Book Doctor for Home Visit</h2>
          <form className="space-y-4" onSubmit={handleBookingSubmit}>
            {["name", "email", "phone", "address", "location"].map((field) => (
              <input
                key={field}
                type={field === "email" ? "email" : field === "phone" ? "tel" : "text"}
                placeholder={
                  field === "location"
                    ? "Google Location Link (optional)"
                    : field.charAt(0).toUpperCase() + field.slice(1).replace(/([A-Z])/g, " $1")
                }
                value={bookingData[field]}
                onChange={(e) => setBookingData({ ...bookingData, [field]: e.target.value })}
                className="w-full p-3 border border-purple-100 rounded-md"
              />
            ))}

            <select
              value={bookingData.issue}
              onChange={(e) => setBookingData({ ...bookingData, issue: e.target.value })}
              className="w-full p-3 border border-purple-100 rounded-md"
            >
              <option value="">Select Type of Issue (optional)</option>
              <option>Back Pain</option>
              <option>Knee Injury</option>
              <option>Post-Surgery Rehab</option>
              <option>Neurotherapy</option>
              <option>Senior Care</option>
            </select>

            <input
              type="date"
              value={bookingData.date}
              onChange={(e) => setBookingData({ ...bookingData, date: e.target.value })}
              className="w-full p-3 border border-purple-100 rounded-md"
            />
            <input
              type="time"
              value={bookingData.time}
              onChange={(e) => setBookingData({ ...bookingData, time: e.target.value })}
              className="w-full p-3 border border-purple-100 rounded-md"
            />
            <button
              type="submit"
              className="bg-purple-700 text-white px-6 py-2 rounded-md hover:bg-purple-800 transition"
            >
              Book Appointment
            </button>
            {bookingSuccess && (
              <p className="text-green-600 mt-2 text-sm">Thank you! Your booking has been received.</p>
            )}
          </form>
        </div>
      </main>

      <Footer />
    </div>
  );
}
