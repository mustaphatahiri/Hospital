import React, { useState } from "react";
import bg3 from "/src/assets/images/bg3.png";

function InterventionReport() {
  const [formData, setFormData] = useState({
    name: "",
    date: "",
    description: "",
    resultat: "",
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
  };

  return (
    <div className="min-h-screen bg-center bg-fixed bg-cover flex justify-center items-start pt-20 px-4"style={{ backgroundImage: `url(${bg3})` }}>
      <div className="relative max-w-xl w-full">
        {/* Title */}
        <h2 className="absolute top-[-2.5rem] left-1/2 transform -translate-x-1/2 text-green-600 bg-white bg-opacity-90 px-6 py-2 text-xl font-bold rounded shadow-md z-10 whitespace-nowrap">
          Rapport d'Intervention
        </h2>

        {/* Form Container */}
        <div className="relative bg-white bg-opacity-90 backdrop-blur-md p-8 rounded-lg shadow-lg">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Name and Date Fields */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-blue-700 font-semibold mb-1">
                  Nom du Technicien
                </label>
                <div className="relative">
                  <i className="fas fa-user absolute left-3 top-1/2 transform -translate-y-1/2 text-green-500" />
                  <input
                    type="text"
                    name="name"
                    placeholder="Jude Billingham"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full border border-gray-300 rounded-md p-2 pl-10 bg-gray-100 focus:ring-2 focus:ring-green-500"
                  />
                </div>
              </div>
              <div>
                <label className="block text-blue-700 font-semibold mb-1">
                  Date de l'Intervention
                </label>
                <div className="relative">
                  <i className="fas fa-calendar-alt absolute left-3 top-1/2 transform -translate-y-1/2 text-green-500" />
                  <input
                    type="date"
                    name="date"
                    value={formData.date}
                    onChange={handleChange}
                    required
                    className="w-full border border-gray-300 rounded-md p-2 pl-10 bg-gray-100 focus:ring-2 focus:ring-green-500"
                  />
                </div>
              </div>
            </div>

            {/* Description and Resultat Fields */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-blue-700 font-semibold mb-1">
                  Description de l'Intervention
                </label>
                <textarea
                  name="description"
                  placeholder="L'appareil affiche un code d'erreur..."
                  value={formData.description}
                  onChange={handleChange}
                  required
                  className="w-full border border-gray-300 rounded-md p-2 bg-gray-100 focus:ring-2 focus:ring-green-500 h-32 resize-none"
                ></textarea>
              </div>
              <div>
                <label className="block text-blue-700 font-semibold mb-1">
                  Résultat de l'Intervention
                </label>
                <textarea
                  name="resultat"
                  placeholder="L'appareil fonctionne correctement..."
                  value={formData.resultat}
                  onChange={handleChange}
                  required
                  className="w-full border border-gray-300 rounded-md p-2 bg-gray-100 focus:ring-2 focus:ring-green-500 h-32 resize-none"
                ></textarea>
              </div>
            </div>

            {/* Remarques Field */}
            <div>
              <label className="block text-blue-700 font-semibold mb-1">
                Remarques
              </label>
              <textarea
                name="remarques"
                placeholder="Recommander une maintenance préventive..."
                value={formData.remarques}
                onChange={handleChange}
                required
                className="w-full border border-gray-300 rounded-md p-2 bg-gray-100 focus:ring-2 focus:ring-green-500 h-32 resize-none"
              ></textarea>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-green-500 text-white font-bold py-2 rounded-md hover:bg-green-600 transition"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default InterventionReport;
