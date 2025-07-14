// src/pages/Admin.js
import React, { useState, useEffect } from "react";

export default function Admin() {
  const [enquiries, setEnquiries] = useState([]);
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/enquiries")
      .then((res) => res.json())
      .then((data) => setEnquiries(data || []));

    fetch("http://localhost:5000/api/bookings")
      .then((res) => res.json())
      .then((data) => setBookings(data || []));
  }, []);

  const downloadCSV = (data, type) => {
    const headers = Object.keys(data[0]);
    const csv = [headers.join(",")].concat(
      data.map((row) => headers.map((field) => `"${row[field] || ""}"`).join(","))
    );
    const blob = new Blob([csv.join("\n")], { type: "text/csv" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = `${type}_data.csv`;
    link.click();
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8 text-gray-800">
      <h1 className="text-3xl font-bold text-purple-700 mb-6">Admin Dashboard</h1>

      {/* Enquiries */}
      <div className="bg-white p-6 rounded-lg shadow-md mb-10">
        <h2 className="text-2xl font-semibold mb-4 text-purple-800">Enquiries</h2>
        {enquiries.length === 0 ? (
          <p>No enquiries yet.</p>
        ) : (
          <>
            <button
              onClick={() => downloadCSV(enquiries, "enquiries")}
              className="mb-4 bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700"
            >
              Download CSV
            </button>
            <table className="w-full border text-sm">
              <thead>
                <tr>
                  <th className="border px-2 py-1">Name</th>
                  <th className="border px-2 py-1">Email</th>
                  <th className="border px-2 py-1">Phone</th>
                  <th className="border px-2 py-1">Message</th>
                </tr>
              </thead>
              <tbody>
                {enquiries.map((e, i) => (
                  <tr key={i}>
                    <td className="border px-2 py-1">{e.name}</td>
                    <td className="border px-2 py-1">{e.email}</td>
                    <td className="border px-2 py-1">{e.phone}</td>
                    <td className="border px-2 py-1">{e.message}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </>
        )}
      </div>

      {/* Bookings */}
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold mb-4 text-purple-800">Bookings</h2>
        {bookings.length === 0 ? (
          <p>No bookings yet.</p>
        ) : (
          <>
            <button
              onClick={() => downloadCSV(bookings, "bookings")}
              className="mb-4 bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700"
            >
              Download CSV
            </button>
            <table className="w-full border text-sm">
              <thead>
                <tr>
                  <th className="border px-2 py-1">Name</th>
                  <th className="border px-2 py-1">Email</th>
                  <th className="border px-2 py-1">Phone</th>
                  <th className="border px-2 py-1">Address</th>
                  <th className="border px-2 py-1">Issue</th>
                  <th className="border px-2 py-1">Treatment</th>
                  <th className="border px-2 py-1">Date</th>
                  <th className="border px-2 py-1">Time</th>
                </tr>
              </thead>
              <tbody>
                {bookings.map((b, i) => (
                  <tr key={i}>
                    <td className="border px-2 py-1">{b.name}</td>
                    <td className="border px-2 py-1">{b.email}</td>
                    <td className="border px-2 py-1">{b.phone}</td>
                    <td className="border px-2 py-1">{b.address}</td>
                    <td className="border px-2 py-1">{b.issue}</td>
                    <td className="border px-2 py-1">{b.treatment}</td>
                    <td className="border px-2 py-1">{b.date}</td>
                    <td className="border px-2 py-1">{b.time}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </>
        )}
      </div>
    </div>
  );
}
