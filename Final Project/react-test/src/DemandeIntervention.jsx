import React, { useState } from "react";
import bg1 from "../src/images/bg1.png";

const DemandeIntervention = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    tel: "",
    service: "",
    appareil: "",
    panne: "",
    description: "",
    date: "",
    priorite: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  const handleChange = (e) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <div
      className="min-h-screen bg-center bg-cover bg-fixed pt-20 flex items-center justify-center"
      style={{ backgroundImage: `url(${bg1})` }}
    >
      <div className="max-w-4xl w-full mx-4 relative">
        <h2 className="text-green-600 bg-white bg-opacity-90 px-6 py-3 text-2xl font-bold rounded shadow-md absolute -top-12 left-1/2 transform -translate-x-1/2 whitespace-nowrap">
          Demande d'Intervention
        </h2>
        <div className="relative bg-white bg-opacity-90 backdrop-blur-md p-8 mt-12 rounded-lg shadow-lg">
          <form onSubmit={handleSubmit} className="grid grid-cols-2 gap-6">
            {/* Name Field */}
            <div className="relative col-span-2 md:col-span-1">
              <label
                htmlFor="name"
                className="block text-blue-700 font-semibold mb-1"
              >
                Nom du Médecin
              </label>
              <div className="relative">
                <i className="fas fa-user absolute left-3 top-1/2 transform -translate-y-1/2 text-green-500" />
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full border border-gray-300 rounded-md p-3 pl-10 bg-transparent focus:ring-2 focus:ring-green-500 transition"
                  placeholder="Jude Billingham"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            {/* Email Field */}
            <div className="relative col-span-2 md:col-span-1">
              <label
                htmlFor="email"
                className="block text-blue-700 font-semibold mb-1"
              >
                Email du Médecin
              </label>
              <div className="relative">
                <i className="fas fa-envelope absolute left-3 top-1/2 transform -translate-y-1/2 text-green-500" />
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full border border-gray-300 rounded-md p-3 pl-10 bg-transparent focus:ring-2 focus:ring-green-500 transition"
                  placeholder="JudeBillingham@gmail.com"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            {/* Phone Field */}
            <div className="relative col-span-2 md:col-span-1">
              <label
                htmlFor="tel"
                className="block text-blue-700 font-semibold mb-1"
              >
                Téléphone du Médecin
              </label>
              <div className="relative">
                <i className="fas fa-phone absolute left-3 top-1/2 transform -translate-y-1/2 text-green-500" />
                <input
                  type="tel"
                  id="tel"
                  name="tel"
                  className="w-full border border-gray-300 rounded-md p-3 pl-10 bg-transparent focus:ring-2 focus:ring-green-500 transition"
                  placeholder="+2126xxxxxxxx"
                  value={formData.tel}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            {/* Service Field */}
            <div className="relative col-span-2 md:col-span-1">
              <label
                htmlFor="service"
                className="block text-blue-700 font-semibold mb-1"
              >
                Service
              </label>
              <select
                id="service"
                name="service"
                className="w-full border border-gray-300 rounded-md p-3 bg-transparent focus:ring-2 focus:ring-green-500 transition"
                value={formData.service}
                onChange={handleChange}
                required
              >
                <option value="">-- Choisissez un service --</option>
                <option value="Radiologie">Radiologie</option>
                <option value="Cardiologie">Cardiologie</option>
                <option value="Orthopédie">Orthopédie</option>
              </select>
            </div>

            {/* Appareil Field */}
            <div className="relative col-span-2 md:col-span-1">
              <label
                htmlFor="appareil"
                className="block text-blue-700 font-semibold mb-1"
              >
                Appareil
              </label>
              <div className="relative">
                <i className="fas fa-tools absolute left-3 top-1/2 transform -translate-y-1/2 text-green-500" />
                <input
                  type="text"
                  id="appareil"
                  name="appareil"
                  className="w-full border border-gray-300 rounded-md p-3 pl-10 bg-transparent focus:ring-2 focus:ring-green-500 transition"
                  placeholder="Scanner IRM"
                  value={formData.appareil}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            {/* Panne Field */}
            <div className="relative col-span-2 md:col-span-1">
              <label
                htmlFor="panne"
                className="block text-blue-700 font-semibold mb-1"
              >
                Panne
              </label>
              <div className="relative">
                <i className="fas fa-exclamation-circle absolute left-3 top-1/2 transform -translate-y-1/2 text-green-500" />
                <input
                  type="text"
                  id="panne"
                  name="panne"
                  className="w-full border border-gray-300 rounded-md p-3 pl-10 bg-transparent focus:ring-2 focus:ring-green-500 transition"
                  placeholder="L'appareil ne démarre pas"
                  value={formData.panne}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            {/* Description Field */}
            <div className="col-span-2">
              <label
                htmlFor="description"
                className="block text-blue-700 font-semibold mb-1"
              >
                Description du Problème
              </label>
              <textarea
                id="description"
                name="description"
                className="w-full border border-gray-300 rounded-md p-3 bg-transparent focus:ring-2 focus:ring-green-500 transition"
                placeholder="Décrivez brièvement le problème rencontré."
                value={formData.description}
                onChange={handleChange}
                required
              />
            </div>

            {/* Date Field */}
            <div className="relative col-span-2 md:col-span-1">
              <label
                htmlFor="date"
                className="block text-blue-700 font-semibold mb-1"
              >
                Date de la Demande
              </label>
              <div className="relative">
                <i className="fas fa-calendar-alt absolute left-3 top-1/2 transform -translate-y-1/2 text-green-500" />
                <input
                  type="date"
                  id="date"
                  name="date"
                  className="w-full border border-gray-300 rounded-md p-3 pl-10 bg-transparent focus:ring-2 focus:ring-green-500 transition"
                  value={formData.date}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            {/* Priorité Field */}
            <div className="col-span-2 md:col-span-1">
              <label
                htmlFor="priorite"
                className="block text-blue-700 font-semibold mb-1"
              >
                Priorité
              </label>
              <select
                id="priorite"
                name="priorite"
                className="w-full border border-gray-300 rounded-md p-3 bg-transparent focus:ring-2 focus:ring-green-500 transition"
                value={formData.priorite}
                onChange={handleChange}
                required
              >
                <option value="">-- Choisissez la priorité --</option>
                <option value="Haute">Haute</option>
                <option value="Moyenne">Moyenne</option>
                <option value="Basse">Basse</option>
              </select>
            </div>
          </form>

          {/* Submit Button */}
          <button
            type="submit"
            className="mt-6 w-full bg-green-500 text-white font-bold py-3 rounded-md hover:bg-green-600 transition"
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default DemandeIntervention;
