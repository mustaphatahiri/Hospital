import React, { useState } from "react";

const EngineerTableOrder = () => {
    const [orders, setOrders] = useState([
        {
            id: 1,
            responsibleName: "Alice Johnson",
            orderDate: "2024-11-20",
            taskDescription: "Replace the mainboard in the laptop",
            assignedTechnician: "John Doe",
            priority: "High",
            deadline: "2024-11-25",
            additionalNotes: "Ensure proper testing after replacement",
            status: "Not Started",
        },
        {
            id: 2,
            responsibleName: "Bob White",
            orderDate: "2024-11-22",
            taskDescription: "Repair the network issue in printer",
            assignedTechnician: "Jane Smith",
            priority: "Medium",
            deadline: "2024-12-01",
            additionalNotes: "Check for software updates as well",
            status: "In Progress",
        },
        {
            id: 3,
            responsibleName: "Chris Green",
            orderDate: "2024-11-25",
            taskDescription: "Inspect malfunctioning MRI scanner",
            assignedTechnician: "Mark Davis",
            priority: "Low",
            deadline: "2024-12-10",
            additionalNotes: "Focus on software diagnostics",
            status: "Done",
        },
    ]);

    const handleOrderClick = (id) => {
        setOrders((prevOrders) =>
            prevOrders.map((order) =>
                order.id === id ? { ...order, status: "In Progress" } : order
            )
        );
    };

    return (
        <div className="min-h-screen bg-[#6BFFC4] flex flex-col items-center py-8">
            {/* Title */}
            <h1 className="text-4xl font-bold text-[#0d00ff] mb-4">Intervention Order Section
            </h1>
            {/* Date */}
            <p className="text-lg text-gray-600 italic mb-6">
                {new Date().toLocaleString()}
            </p>

            <table className="table-auto w-full max-w-6xl border-collapse border border-gray-300 bg-white shadow-lg rounded-lg overflow-hidden">
                <thead>
                    <tr className="bg-[#0d00ff] text-white">
                        <th className="px-4 py-2 border border-gray-300">ID</th>
                        <th className="px-4 py-2 border border-gray-300">Nom Responsable</th>
                        <th className="px-4 py-2 border border-gray-300">Date de l'Ordre</th>
                        <th className="px-4 py-2 border border-gray-300">Description de la Tâche</th>
                        <th className="px-4 py-2 border border-gray-300">Technicien Assigné</th>
                        <th className="px-4 py-2 border border-gray-300">Priorité</th>
                        <th className="px-4 py-2 border border-gray-300">Date Limite</th>
                        <th className="px-4 py-2 border border-gray-300">Remarques</th>
                        <th className="px-4 py-2 border border-gray-300">Statut</th>
                        <th className="px-4 py-2 border border-gray-300">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {orders.map((order, index) => (
                        <tr
                            key={order.id}
                            className={`${index % 2 === 0 ? "bg-gray-100" : "bg-white"
                                } hover:bg-gray-200 transition-colors`}
                        >
                            <td className="px-4 py-2 border border-gray-300">{order.id}</td>
                            <td className="px-4 py-2 border border-gray-300">
                                {order.responsibleName}
                            </td>
                            <td className="px-4 py-2 border border-gray-300">
                                {order.orderDate}
                            </td>
                            <td className="px-4 py-2 border border-gray-300">
                                {order.taskDescription}
                            </td>
                            <td className="px-4 py-2 border border-gray-300">
                                {order.assignedTechnician}
                            </td>
                            <td
                                className={`px-4 py-2 border border-gray-300 font-bold ${order.priority === "High"
                                        ? "text-red-500"
                                        : order.priority === "Medium"
                                            ? "text-yellow-500"
                                            : "text-green-500"
                                    }`}
                            >
                                {order.priority}
                            </td>
                            <td className="px-4 py-2 border border-gray-300">
                                {order.deadline}
                            </td>
                            <td className="px-4 py-2 border border-gray-300">
                                {order.additionalNotes}
                            </td>
                            <td
                                className={`px-4 py-2 border border-gray-300 font-bold ${order.status === "Done"
                                        ? "text-green-600"
                                        : order.status === "In Progress"
                                            ? "text-yellow-500"
                                            : "text-red-500"
                                    }`}
                            >
                                {order.status}
                            </td>
                            <td className="px-4 py-2 border border-gray-300">
                                <div className="flex items-center justify-between">
                                    {order.status === "Not Started" && (
                                        <button
                                            className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors"
                                            onClick={() => handleOrderClick(order.id)}
                                        >
                                            Start Order
                                        </button>
                                    )}
                                    {order.status !== "Not Started" && (
                                        <span className="text-gray-500 italic">No Action</span>
                                    )}
                                </div>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default EngineerTableOrder;
