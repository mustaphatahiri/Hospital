import React, { useState } from "react";

const CompactEngineerCheckList = () => {
    const [checklists, setChecklists] = useState([
        {
            id: 1,
            verifierName: "John Doe",
            verificationDate: "2024-11-20",
            itemsChecked: [
                { name: "Power Supply", status: "Conforme" },
                { name: "Screen", status: "Non Conforme" },
                { name: "Battery", status: "Conforme" },
            ],
            remarks: "Battery needs replacement",
        },
        {
            id: 2,
            verifierName: "Jane Smith",
            verificationDate: "2024-11-21",
            itemsChecked: [
                { name: "System", status: "Conforme" },
                { name: "Cables", status: "Conforme" },
                { name: "Scanner", status: "Non Conforme" },
            ],
            remarks: "Scanner calibration needed",
        },
        {
            id: 3,
            verifierName: "Alice Brown",
            verificationDate: "2024-11-22",
            itemsChecked: [
                { name: "Keyboard", status: "Conforme" },
                { name: "Mouse", status: "Non Conforme" },
                { name: "Touchpad", status: "Conforme" },
            ],
            remarks: "Mouse needs replacement",
        },
        {
            id: 4,
            verifierName: "Bob Johnson",
            verificationDate: "2024-11-23",
            itemsChecked: [
                { name: "Fan", status: "Conforme" },
                { name: "Thermal Paste", status: "Non Conforme" },
                { name: "Processor", status: "Conforme" },
            ],
            remarks: "Apply new thermal paste",
        },
    ]);

    const toggleItemStatus = (checklistId, itemName) => {
        setChecklists((prevChecklists) =>
            prevChecklists.map((checklist) =>
                checklist.id === checklistId
                    ? {
                        ...checklist,
                        itemsChecked: checklist.itemsChecked.map((item) =>
                            item.name === itemName
                                ? {
                                    ...item,
                                    status: item.status === "Conforme" ? "Non Conforme" : "Conforme",
                                }
                                : item
                        ),
                    }
                    : checklist
            )
        );
    };

    return (
        <div className="min-h-screen bg-[#6BFFC4] flex flex-col items-center py-8">
            {/* Title */}
            <h1 className="text-4xl font-bold text-[#0d00ff] mb-4">Checklist section </h1>

            {/* Date */}
            <p className="text-lg text-gray-600 italic mb-6">
                {new Date().toLocaleString()}
            </p>

            <table className="table-auto w-full max-w-6xl border-collapse border border-gray-300 bg-white shadow-md rounded-lg">
                <thead className="bg-blue-600 text-white">
                    <tr>
                        <th className="px-4 py-2 border border-gray-300">ID</th>
                        <th className="px-4 py-2 border border-gray-300">Verifier</th>
                        <th className="px-4 py-2 border border-gray-300">Date</th>
                        <th className="px-4 py-2 border border-gray-300">Items & Status</th>
                        <th className="px-4 py-2 border border-gray-300">Remarks</th>
                        <th className="px-4 py-2 border border-gray-300">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {checklists.map((checklist, index) => (
                        <tr
                            key={checklist.id}
                            className={`${index % 2 === 0 ? "bg-gray-100" : "bg-white"
                                } hover:bg-gray-200 transition-colors`}
                        >
                            <td className="px-4 py-2 border border-gray-300 text-center">
                                {checklist.id}
                            </td>
                            <td className="px-4 py-2 border border-gray-300">
                                {checklist.verifierName}
                            </td>
                            <td className="px-4 py-2 border border-gray-300">
                                {checklist.verificationDate}
                            </td>
                            <td className="px-4 py-2 border border-gray-300">
                                <ul>
                                    {checklist.itemsChecked.map((item, idx) => (
                                        <li
                                            key={idx}
                                            className="flex justify-between items-center mb-1"
                                        >
                                            <span>{item.name}</span>
                                            <span
                                                className={`${item.status === "Conforme"
                                                        ? "text-green-500"
                                                        : "text-red-500"
                                                    }`}
                                            >
                                                {item.status}
                                            </span>
                                            <button
                                                className="ml-2 bg-blue-500 text-white px-2 py-1 text-xs rounded hover:bg-blue-600"
                                                onClick={() =>
                                                    toggleItemStatus(checklist.id, item.name)
                                                }
                                            >
                                                Toggle
                                            </button>
                                        </li>
                                    ))}
                                </ul>
                            </td>
                            <td className="px-4 py-2 border border-gray-300">
                                {checklist.remarks}
                            </td>
                            <td className="px-4 py-2 border border-gray-300 text-center">
                                <button className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600">
                                    Verify
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default CompactEngineerCheckList;
