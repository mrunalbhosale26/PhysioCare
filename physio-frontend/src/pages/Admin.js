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
    if (data.length === 0) return;

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
    <div className="bg-gradient-to-br from-purple-50 via-white to-purple-100 min-h-screen flex flex-col">
      

      <main className="flex-grow container mx-auto px-4 sm:px-6 lg:px-10 py-10">
        <h1 className="text-3xl sm:text-4xl font-bold text-center text-purple-800 mb-12">
          Admin Dashboard
        </h1>

        {/* Enquiries Section */}
        <section className="bg-white border border-purple-200 rounded-2xl shadow-lg p-6 md:p-8 mb-10 overflow-x-auto">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
            <h2 className="text-2xl font-semibold text-purple-700">Enquiries</h2>
            {enquiries.length > 0 && (
              <button
                onClick={() => downloadCSV(enquiries, "enquiries")}
                className="bg-purple-600 text-white px-4 py-2 rounded-md hover:bg-purple-700 transition"
              >
                Download CSV
              </button>
            )}
          </div>

          {enquiries.length === 0 ? (
            <p className="text-gray-600">No enquiries yet.</p>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full text-sm text-left border border-gray-300 rounded-lg">
                <thead className="bg-purple-100 text-purple-700">
                  <tr>
                    <th className="px-4 py-2 border">Name</th>
                    <th className="px-4 py-2 border">Email</th>
                    <th className="px-4 py-2 border">Phone</th>
                    <th className="px-4 py-2 border">Message</th>
                  </tr>
                </thead>
                <tbody>
                  {enquiries.map((e, i) => (
                    <tr key={i} className="hover:bg-purple-50">
                      <td className="px-4 py-2 border">{e.name}</td>
                      <td className="px-4 py-2 border">{e.email}</td>
                      <td className="px-4 py-2 border">{e.phone}</td>
                      <td className="px-4 py-2 border">{e.message}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </section>

        {/* Bookings Section */}
        <section className="bg-white border border-purple-200 rounded-2xl shadow-lg p-6 md:p-8 overflow-x-auto">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
            <h2 className="text-2xl font-semibold text-purple-700">Bookings</h2>
            {bookings.length > 0 && (
              <button
                onClick={() => downloadCSV(bookings, "bookings")}
                className="bg-purple-600 text-white px-4 py-2 rounded-md hover:bg-purple-700 transition"
              >
                Download CSV
              </button>
            )}
          </div>

          {bookings.length === 0 ? (
            <p className="text-gray-600">No bookings yet.</p>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full text-sm text-left border border-gray-300 rounded-lg">
                <thead className="bg-purple-100 text-purple-700">
                  <tr>
                    <th className="px-4 py-2 border">Name</th>
                    <th className="px-4 py-2 border">Email</th>
                    <th className="px-4 py-2 border">Phone</th>
                    <th className="px-4 py-2 border">Address</th>
                    <th className="px-4 py-2 border">Issue</th>
                    <th className="px-4 py-2 border">Date</th>
                    <th className="px-4 py-2 border">Time</th>
                  </tr>
                </thead>
                <tbody>
                  {bookings.map((b, i) => (
                    <tr key={i} className="hover:bg-purple-50">
                      <td className="px-4 py-2 border">{b.name}</td>
                      <td className="px-4 py-2 border">{b.email}</td>
                      <td className="px-4 py-2 border">{b.phone}</td>
                      <td className="px-4 py-2 border">{b.address}</td>
                      <td className="px-4 py-2 border">{b.issue}</td>
                      <td className="px-4 py-2 border">{b.date}</td>
                      <td className="px-4 py-2 border">{b.time}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </section>
      </main>

     
    </div>
  );
}