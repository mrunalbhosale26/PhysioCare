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
    treatment: "",
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
    const { name, email, phone, address, issue, treatment, date, time } = bookingData;
    if (!name || !email || !phone || !address || !issue || !treatment || !date || !time) {
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
          treatment: "",
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
    <div className="bg-purple-50 text-gray-800 min-h-screen flex flex-col justify-between relative">
      <Navbar />

      {/* Toast Message */}
      {toast && (
        <div className="fixed top-4 left-1/2 transform -translate-x-1/2 bg-green-600 text-white px-6 py-2 rounded-lg shadow-md z-50 animate-bounce">
          {toast}
        </div>
      )}

      <main className="max-w-5xl mx-auto py-10 px-6 space-y-10">
        {/* Enquiry Form */}
        <div className="bg-white border border-purple-200 rounded-2xl shadow-lg p-6 md:p-10">
          <h2 className="text-2xl font-bold text-purple-800 mb-4">Enquiry Form</h2>
          <form className="space-y-4" onSubmit={handleEnquirySubmit}>
            <input
              type="text"
              placeholder="Full Name"
              value={enquiryData.name}
              onChange={(e) => setEnquiryData({ ...enquiryData, name: e.target.value })}
              className="w-full p-3 border border-purple-100 rounded-md"
            />
            <input
              type="email"
              placeholder="Email Address"
              value={enquiryData.email}
              onChange={(e) => setEnquiryData({ ...enquiryData, email: e.target.value })}
              className="w-full p-3 border border-purple-100 rounded-md"
            />
            <input
              type="tel"
              placeholder="Phone Number"
              value={enquiryData.phone}
              onChange={(e) => setEnquiryData({ ...enquiryData, phone: e.target.value })}
              className="w-full p-3 border border-purple-100 rounded-md"
            />
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
          <h2 className="text-2xl font-bold text-purple-800 mb-4">Book Doctor for Home Visit</h2>
          <form className="space-y-4" onSubmit={handleBookingSubmit}>
            <input
              type="text"
              placeholder="Full Name"
              value={bookingData.name}
              onChange={(e) => setBookingData({ ...bookingData, name: e.target.value })}
              className="w-full p-3 border border-purple-100 rounded-md"
            />
            <input
              type="email"
              placeholder="Email Address"
              value={bookingData.email}
              onChange={(e) => setBookingData({ ...bookingData, email: e.target.value })}
              className="w-full p-3 border border-purple-100 rounded-md"
            />
            <input
              type="tel"
              placeholder="Phone Number"
              value={bookingData.phone}
              onChange={(e) => setBookingData({ ...bookingData, phone: e.target.value })}
              className="w-full p-3 border border-purple-100 rounded-md"
            />
            <input
              type="text"
              placeholder="Home Address"
              value={bookingData.address}
              onChange={(e) => setBookingData({ ...bookingData, address: e.target.value })}
              className="w-full p-3 border border-purple-100 rounded-md"
            />
            <input
              type="text"
              placeholder="Google Location Link (optional)"
              value={bookingData.location}
              onChange={(e) => setBookingData({ ...bookingData, location: e.target.value })}
              className="w-full p-3 border border-purple-100 rounded-md"
            />
            <select
              value={bookingData.issue}
              onChange={(e) => setBookingData({ ...bookingData, issue: e.target.value })}
              className="w-full p-3 border border-purple-100 rounded-md"
            >
              <option>Select Type of Issue</option>
              <option>Back Pain</option>
              <option>Knee Injury</option>
              <option>Post-Surgery Rehab</option>
              <option>Neurotherapy</option>
              <option>Senior Care</option>
            </select>
            <select
              value={bookingData.treatment}
              onChange={(e) => setBookingData({ ...bookingData, treatment: e.target.value })}
              className="w-full p-3 border border-purple-100 rounded-md"
            >
              <option>Select Type of Treatment</option>
              <option>Massage Therapy</option>
              <option>Electrotherapy</option>
              <option>Stretching & Strengthening</option>
              <option>Mobility Training</option>
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
