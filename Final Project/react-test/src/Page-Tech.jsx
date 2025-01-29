import React, { useState } from "react";

function RapportPage() {
  const [reports, setReports] = useState([
    {
      id: 1,
      name: "John Doe",
      email: "john.doe@example.com",
      phone: "123-456-7890",
      appareil: "Laptop",
      panne: "Won't turn on",
      problem: "Battery failure",
      date: "2024-11-01",
      priority: "High",
      state: "done",
    },
    {
      id: 2,
      name: "Jane Smith",
      email: "jane.smith@example.com",
      phone: "098-765-4321",
      appareil: "Smartphone",
      panne: "Screen cracked",
      problem: "Replace screen",
      date: "2024-10-15",
      priority: "Medium",
      state: "pending",
    },
    {
      id: 3,
      name: "Alice Brown",
      email: "alice.brown@example.com",
      phone: "456-123-7890",
      appareil: "Tablet",
      panne: "Frozen system",
      problem: "Software update",
      date: "2024-11-18",
      priority: "Low",
      state: "done",
    },
    {
      id: 4,
      name: "Bob Johnson",
      email: "bob.johnson@example.com",
      phone: "789-456-1230",
      appareil: "Printer",
      panne: "Paper jam",
      problem: "Clear jammed paper",
      date: "2024-11-20",
      priority: "High",
      state: "pending",
    },
  ]);

  const handleReportClick = (id) => {
    // Handle button click
  };

  return (
    <div className="min-h-screen bg-[#6BFFC4] flex flex-col items-center py-8">
      {/* Title */}
      <h1 className="text-4xl font-bold text-[#0d00ff] mb-4">Intervention Report Section </h1>

      {/* Date */}
      <p className="text-lg text-gray-600 italic mb-6">
        {new Date().toLocaleString()}
      </p>

      {/* Table */}
      <table className="table-auto w-full max-w-6xl border-collapse border border-gray-300 bg-white shadow-lg rounded-lg overflow-hidden">
        <thead>
          <tr className="bg-[#0d00ff] text-white">
            <th className="px-4 py-2 border border-gray-300">Client Id</th>
            <th className="px-4 py-2 border border-gray-300">Name</th>
            <th className="px-4 py-2 border border-gray-300">Email</th>
            <th className="px-4 py-2 border border-gray-300">Phone</th>
            <th className="px-4 py-2 border border-gray-300">Appareil</th>
            <th className="px-4 py-2 border border-gray-300">Panne</th>
            <th className="px-4 py-2 border border-gray-300">Problem</th>
            <th className="px-4 py-2 border border-gray-300">Date</th>
            <th className="px-4 py-2 border border-gray-300">Priority</th>
            <th className="px-4 py-2 border border-gray-300">State</th>
            <th className="px-4 py-2 border border-gray-300">Action</th>
          </tr>
        </thead>
        <tbody>
          {reports.map((report, index) => (
            <tr
              key={report.id}
              className={`${
                index % 2 === 0 ? "bg-gray-100" : "bg-white"
              } hover:bg-gray-200 transition-colors`}
            >
              <td className="px-4 py-2 border border-gray-300">{report.id}</td>
              <td className="px-4 py-2 border border-gray-300">{report.name}</td>
              <td className="px-4 py-2 border border-gray-300">{report.email}</td>
              <td className="px-4 py-2 border border-gray-300">{report.phone}</td>
              <td className="px-4 py-2 border border-gray-300">
                {report.appareil}
              </td>
              <td className="px-4 py-2 border border-gray-300">{report.panne}</td>
              <td className="px-4 py-2 border border-gray-300">
                {report.problem}
              </td>
              <td className="px-4 py-2 border border-gray-300">{report.date}</td>
              <td
                className={`px-4 py-2 border border-gray-300 font-bold ${
                  report.priority === "High"
                    ? "text-red-500"
                    : report.priority === "Medium"
                    ? "text-yellow-500"
                    : "text-green-500"
                }`}
              >
                {report.priority}
              </td>
              <td
                className={`px-4 py-2 border border-gray-300 font-bold ${
                  report.state === "done" ? "text-green-600" : "text-orange-600"
                }`}
              >
                {report.state}
              </td>
              <td className="px-4 py-2 border border-gray-300">
                <button
                  className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors"
                  onClick={() => handleReportClick(report.id)}
                >
                  Report
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default RapportPage;
