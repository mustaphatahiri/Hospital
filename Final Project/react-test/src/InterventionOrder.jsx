import React, { useState } from "react";
import bg2 from "../src/images/bg2.png";

function InterventionOrder() {
  const [formData, setFormData] = useState({
    name: "",
    date: "",
    description: "",
    nameTech: "",
    priorite: "",
    dateL: "",
    remarques: "",
  });

  const handleChange = (e) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    alert("Form Submitted Successfully!");
  };

  return (
    <div
      className="min-h-screen bg-cover bg-center bg-fixed pt-20 px-4"
      style={{ backgroundImage: `url(${bg2})` }}
    >
      <div className="max-w-3xl mx-auto relative">
        {/* Title */}
        <h2 className="text-green-600 bg-white bg-opacity-90 px-6 py-3 text-2xl font-bold rounded shadow-md absolute -top-12 left-1/2 transform -translate-x-1/2 z-10 whitespace-nowrap">
          Ordre d'Intervention
        </h2>

        {/* Form Container */}
        <div className="relative bg-white bg-opacity-90 backdrop-blur-md p-8 mt-6 rounded-lg shadow-lg">
          <form onSubmit={handleSubmit}>
            {/* Form Grid */}
            <div className="grid grid-cols-2 gap-6">
              {/* Name Field */}
              <div>
                <label
                  htmlFor="name"
                  className="block text-blue-700 font-semibold mb-1"
                >
                  Nom du Responsable
                </label>
                <div className="relative">
                  <i className="fas fa-user absolute left-3 top-1/2 transform -translate-y-1/2 text-green-500" />
                  <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Jude Billingham"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full border border-gray-300 rounded-md p-3 pl-10 bg-transparent focus:ring-2 focus:ring-green-500"
                  />
                </div>
              </div>

              {/* Date Field */}
              <div>
                <label
                  htmlFor="date"
                  className="block text-blue-700 font-semibold mb-1"
                >
                  Date de l'Ordre
                </label>
                <div className="relative">
                  <i className="fas fa-calendar-alt absolute left-3 top-1/2 transform -translate-y-1/2 text-green-500" />
                  <input
                    type="date"
                    id="date"
                    name="date"
                    value={formData.date}
                    onChange={handleChange}
                    required
                    className="w-full border border-gray-300 rounded-md p-3 pl-10 bg-transparent focus:ring-2 focus:ring-green-500"
                  />
                </div>
              </div>

              {/* Description Field */}
              <div className="col-span-2">
                <label
                  htmlFor="description"
                  className="block text-blue-700 font-semibold mb-1"
                >
                  Description de la Tâche
                </label>
                <textarea
                  id="description"
                  name="description"
                  placeholder="L'appareil affiche un code d'erreur..."
                  value={formData.description}
                  onChange={handleChange}
                  required
                  className="w-full border border-gray-300 rounded-md p-3 bg-transparent focus:ring-2 focus:ring-green-500"
                ></textarea>
              </div>

              {/* Technician Name Field */}
              <div>
                <label
                  htmlFor="nameTech"
                  className="block text-blue-700 font-semibold mb-1"
                >
                  Nom du Technicien Assigné
                </label>
                <div className="relative">
                  <i className="fas fa-user absolute left-3 top-1/2 transform -translate-y-1/2 text-green-500" />
                  <input
                    type="text"
                    id="nameTech"
                    name="nameTech"
                    placeholder="Jude Billingham"
                    value={formData.nameTech}
                    onChange={handleChange}
                    required
                    className="w-full border border-gray-300 rounded-md p-3 pl-10 bg-transparent focus:ring-2 focus:ring-green-500"
                  />
                </div>
              </div>

              {/* Priority Field */}
              <div>
                <label
                  htmlFor="priorite"
                  className="block text-blue-700 font-semibold mb-1"
                >
                  Priorité de l'Intervention
                </label>
                <div className="relative">
                  <i className="fas fa-exclamation-triangle absolute left-3 top-1/2 transform -translate-y-1/2 text-green-500" />
                  <select
                    id="priorite"
                    name="priorite"
                    value={formData.priorite}
                    onChange={handleChange}
                    required
                    className="w-full border border-gray-300 rounded-md p-3 pl-10 bg-transparent focus:ring-2 focus:ring-green-500"
                  >
                    <option value="" disabled>
                      -- Sélectionner --
                    </option>
                    <option value="Haute">Haute</option>
                    <option value="Moyenne">Moyenne</option>
                    <option value="Basse">Basse</option>
                  </select>
                </div>
              </div>

              {/* Deadline Field */}
              <div>
                <label
                  htmlFor="dateL"
                  className="block text-blue-700 font-semibold mb-1"
                >
                  Date Limite
                </label>
                <div className="relative">
                  <i className="fas fa-calendar-alt absolute left-3 top-1/2 transform -translate-y-1/2 text-green-500" />
                  <input
                    type="date"
                    id="dateL"
                    name="dateL"
                    value={formData.dateL}
                    onChange={handleChange}
                    required
                    className="w-full border border-gray-300 rounded-md p-3 pl-10 bg-transparent focus:ring-2 focus:ring-green-500"
                  />
                </div>
              </div>

              {/* Remarks Field */}
              <div className="col-span-2">
                <label
                  htmlFor="remarques"
                  className="block text-blue-700 font-semibold mb-1"
                >
                  Remarques
                </label>
                <textarea
                  id="remarques"
                  name="remarques"
                  placeholder="Recommander une maintenance préventive..."
                  value={formData.remarques}
                  onChange={handleChange}
                  required
                  className="w-full border border-gray-300 rounded-md p-3 bg-transparent focus:ring-2 focus:ring-green-500"
                ></textarea>
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="mt-6 w-full bg-green-500 text-white font-bold py-3 rounded-md hover:bg-green-600 transition"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default InterventionOrder;
