import React from "react";

function PVReceptionTable() {
  const data = [
    {
      id: 1,
      engineer: "Dr. Alice Taylor",
      date: "2024-12-01",
      machine: "X-Ray Scanner",
      status: "Functional",
      remarks: "No issues observed.",
    },
    {
      id: 2,
      engineer: "Dr. John Smith",
      date: "2024-12-02",
      machine: "ECG Monitor",
      status: "Non-Functional",
      remarks: "Requires part replacement.",
    },
    {
      id: 3,
      engineer: "Dr. Emily Brown",
      date: "2024-12-03",
      machine: "Ultrasound Device",
      status: "Functional",
      remarks: "Verified post-maintenance.",
    },
    {
      id: 4,
      engineer: "Dr. Mark Johnson",
      date: "2024-12-04",
      machine: "MRI Machine",
      status: "Non-Functional",
      remarks: "Further diagnostics needed.",
    },
  ];

  return (
    <div className="min-h-screen bg-[#6BFFC4] flex flex-col items-center py-8">
      {/* Title */}
      <h1 className="text-4xl font-bold text-[#0d00ff] mb-4">PV de Réception Section</h1>

      {/* Date */}
      <p className="text-lg text-gray-600 italic mb-6">
        {new Date().toLocaleString()}
      </p>

      {/* Table */}
      <table className="table-auto w-full max-w-6xl border-collapse border border-gray-300 bg-white shadow-lg rounded-lg overflow-hidden">
        <thead>
          <tr className="bg-[#0d00ff] text-white">
            <th className="px-4 py-2 border border-gray-300">ID</th>
            <th className="px-4 py-2 border border-gray-300">Engineer Name</th>
            <th className="px-4 py-2 border border-gray-300">Reception Date</th>
            <th className="px-4 py-2 border border-gray-300">Machine Description</th>
            <th className="px-4 py-2 border border-gray-300">Machine Status</th>
            <th className="px-4 py-2 border border-gray-300">Remarks</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr
              key={item.id}
              className={`${
                index % 2 === 0 ? "bg-gray-100" : "bg-white"
              } hover:bg-gray-200 transition-colors`}
            >
              <td className="px-4 py-2 border border-gray-300">{item.id}</td>
              <td className="px-4 py-2 border border-gray-300">{item.engineer}</td>
              <td className="px-4 py-2 border border-gray-300">{item.date}</td>
              <td className="px-4 py-2 border border-gray-300">{item.machine}</td>
              <td
                className={`px-4 py-2 border border-gray-300 font-bold ${
                  item.status === "Functional"
                    ? "text-green-600"
                    : "text-red-500"
                }`}
              >
                {item.status}
              </td>
              <td className="px-4 py-2 border border-gray-300">{item.remarks}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default PVReceptionTable;
