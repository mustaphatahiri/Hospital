import { React, useState } from "react";
import bg5 from "/src/assets/images/bg5.png";

function PVReceptionForm() {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(FormData);
  };

  const [FormData, setFormData] = useState({
    name: "",
    date: "",
    description: "",
    etat: "",
    remarques: "",
  });

  const handleChange = (e) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <div className="min-h-screen bg-center bg-fixed bg-cover flex justify-center items-start pt-20 px-4 " style={{ backgroundImage: `url(${bg5})` }}>
      <div className="relative w-full max-w-4xl"> {/* Increase the width of the form container */}
        {/* Title */}
        <h2 className="absolute top-[-2.5rem] left-1/2 transform -translate-x-1/2 text-green-600 bg-white bg-opacity-90 px-6 py-2 text-2xl font-bold rounded shadow-md z-10 whitespace-nowrap">
          PV De Réception
        </h2>

        {/* Form Container */}
        <div className="relative bg-white bg-opacity-90 backdrop-blur-md p-8 rounded-lg shadow-lg">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Name and Date Fields */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label className="block text-blue-700 font-semibold mb-1">
                  Nom de l'ingénieur
                </label>
                <div className="relative">
                  <i className="fas fa-user absolute left-3 top-1/2 transform -translate-y-1/2 text-green-500" />
                  <input
                    type="text"
                    name="name"
                    value={FormData.name}
                    onChange={handleChange}
                    placeholder="Jude Billingham"
                    required
                    className="w-full border border-gray-300 rounded-md p-2 pl-10 bg-gray-100 focus:ring-2 focus:ring-green-500"
                  />
                </div>
              </div>
              <div>
                <label className="block text-blue-700 font-semibold mb-1">
                  Date de Réception
                </label>
                <div className="relative">
                  <i className="fas fa-calendar-alt absolute left-3 top-1/2 transform -translate-y-1/2 text-green-500" />
                  <input
                    type="date"
                    name="date"
                    value={FormData.date}
                    onChange={handleChange}
                    required
                    className="w-full border border-gray-300 rounded-md p-2 pl-10 bg-gray-100 focus:ring-2 focus:ring-green-500"
                  />
                </div>
              </div>
            </div>

            {/* Description, Etat, and Remarques Fields */}
            <div className="space-y-6">
              <div>
                <label className="block text-blue-700 font-semibold mb-1">
                  Description de la machine
                </label>
                <textarea
                  name="description"
                  value={FormData.description}
                  onChange={handleChange}
                  placeholder="Scanner IRM modèle XYZ"
                  required
                  className="w-full border border-gray-300 rounded-md p-2 bg-gray-100 focus:ring-2 focus:ring-green-500 h-32 resize-none"
                ></textarea>
              </div>
              <div>
                <label className="block text-blue-700 font-semibold mb-1">
                  État de la machine
                </label>
                <textarea
                  name="etat"
                  value={FormData.etat}
                  onChange={handleChange}
                  placeholder="fonctionne"
                  required
                  className="w-full border border-gray-300 rounded-md p-2 bg-gray-100 focus:ring-2 focus:ring-green-500 h-32 resize-none"
                ></textarea>
              </div>
              <div>
                <label className="block text-blue-700 font-semibold mb-1">
                  Remarques
                </label>
                <textarea
                  name="remarques"
                  value={FormData.remarques}
                  onChange={handleChange}
                  placeholder="La machine a été testée et fonctionne correctement sans anomalies."
                  required
                  className="w-full border border-gray-300 rounded-md p-2 bg-gray-100 focus:ring-2 focus:ring-green-500 h-32 resize-none"
                ></textarea>
              </div>
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

export default PVReceptionForm;
