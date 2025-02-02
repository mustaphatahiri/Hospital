import React, { useState } from "react";
import bg4 from "/src/assets/images/BG6.png"; // Update with correct path if needed

const ManageAppointments = () => {
  const [formData, setFormData] = useState({
    appointmentType: "",
    date: "",
    time: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData); // handle form submission here
  };

  return (
    <div
      className="min-h-screen bg-cover bg-center bg-fixed flex justify-center items-start pt-20 px-4"
      style={{ backgroundImage: `url(${bg4})` }}
    >
      <div className="relative w-full max-w-4xl"> {/* Medium width form */}
        {/* Title */}
        <h2 className="absolute top-[-2.5rem] left-1/2 transform -translate-x-1/2 text-green-600 bg-white bg-opacity-90 px-6 py-2 text-2xl font-bold rounded shadow-md z-10 whitespace-nowrap">
          Manage Your Appointments
        </h2>

        {/* Form Container */}
        <div className="relative bg-white bg-opacity-90 p-8 rounded-lg shadow-lg space-y-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Appointment Type */}
            <div>
              <label className="block text-blue-700 font-semibold mb-2">
                Select Appointment Type
              </label>
              <div className="relative">
                <i className="fas fa-calendar-alt absolute left-3 top-1/2 transform -translate-y-1/2 text-green-500" />
                <select
                  name="appointmentType"
                  value={formData.appointmentType}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded-md p-3 pl-10 bg-gray-100 focus:ring-2 focus:ring-green-500 text-gray-700"
                >
                  <option value="maintenance">Maintenance Appointment</option>
                  <option value="checkup">Health Checkup Appointment</option>
                </select>
              </div>
            </div>

            {/* Date */}
            <div>
              <label className="block text-blue-700 font-semibold mb-2">
                Select New Date
              </label>
              <div className="relative">
                <i className="fas fa-calendar-alt absolute left-3 top-1/2 transform -translate-y-1/2 text-green-500" />
                <input
                  type="date"
                  name="date"
                  value={formData.date}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded-md p-3 pl-10 bg-gray-100 focus:ring-2 focus:ring-green-500 text-gray-700"
                />
              </div>
            </div>

            {/* Time */}
            <div>
              <label className="block text-blue-700 font-semibold mb-2">
                Select New Time
              </label>
              <div className="relative">
                <i className="fas fa-clock absolute left-3 top-1/2 transform -translate-y-1/2 text-green-500" />
                <input
                  type="time"
                  name="time"
                  value={formData.time}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded-md p-3 pl-10 bg-gray-100 focus:ring-2 focus:ring-green-500 text-gray-700"
                />
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-green-500 text-white font-bold py-3 rounded-md hover:bg-green-600 transition"
            >
              Reschedule Appointment
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ManageAppointments;
