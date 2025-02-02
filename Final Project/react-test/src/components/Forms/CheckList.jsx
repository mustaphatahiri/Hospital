import { React, useState } from "react";
import bg4 from "/src/assets/images/bg4.png";

function Checklist() {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(FormData);
  };

  const [FormData, setFormData] = useState({
    name: "",
    date: "",
    electrical: "",
    software: "",
    remarques: "",
  });

  const handleChange = (e) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <div className="min-h-screen bg-[url('../images/bg5.png')] bg-cover bg-center bg-fixed flex justify-center items-start pt-20 px-4"style={{ backgroundImage: `url(${bg4})` }} >
      <div className="relative w-full max-w-4xl"> {/* Medium width form */}
        {/* Title */}
        <h2 className="absolute top-[-2.5rem] left-1/2 transform -translate-x-1/2 text-green-600 bg-white bg-opacity-90 px-6 py-2 text-2xl font-bold rounded shadow-md z-10 whitespace-nowrap">
          Check List
        </h2>

        {/* Form Container */}
        <div className="relative bg-white bg-opacity-90 p-8 rounded-lg shadow-lg space-y-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Name and Date */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              <div>
                <label className="block text-blue-700 font-semibold mb-2">
                  Nom du Vérificateur
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
                    className="w-full border border-gray-300 rounded-md p-3 pl-10 bg-gray-100 focus:ring-2 focus:ring-green-500 text-gray-700"
                  />
                </div>
              </div>

              <div>
                <label className="block text-blue-700 font-semibold mb-2">
                  Date de la Vérification
                </label>
                <div className="relative">
                  <i className="fas fa-calendar-alt absolute left-3 top-1/2 transform -translate-y-1/2 text-green-500" />
                  <input
                    type="date"
                    name="date"
                    value={FormData.date}
                    onChange={handleChange}
                    required
                    className="w-full border border-gray-300 rounded-md p-3 pl-10 bg-gray-100 focus:ring-2 focus:ring-green-500 text-gray-700"
                  />
                </div>
              </div>
            </div>

            {/* Checklist Items */}
            <div className="space-y-6">
              <div>
                <label className="block text-blue-700 font-semibold mb-2">
                  Éléments Vérifiés
                </label>
                <input
                  type="text"
                  value="Connexion Electrique"
                  readOnly
                  className="w-full bg-gray-100 text-gray-600 border border-gray-300 rounded-md p-3 mb-3"
                />
                <div className="flex justify-between">
                  <label className="flex items-center space-x-2">
                    <input
                      type="radio"
                      name="electrical"
                      value="conforme"
                      checked={FormData.electrical === "conforme"}
                      onChange={handleChange}
                    />
                    <span>Conforme</span>
                  </label>
                  <label className="flex items-center space-x-2">
                    <input
                      type="radio"
                      name="electrical"
                      value="non conforme"
                      checked={FormData.electrical === "non conforme"}
                      onChange={handleChange}
                    />
                    <span>Non Conforme</span>
                  </label>
                </div>

                <input
                  type="text"
                  value="Mise à Jour Logicielle"
                  readOnly
                  className="w-full bg-gray-100 text-gray-600 border border-gray-300 rounded-md p-3 mt-4"
                />
                <div className="flex justify-between">
                  <label className="flex items-center space-x-2">
                    <input
                      type="radio"
                      name="software"
                      value="conforme"
                      checked={FormData.software === "conforme"}
                      onChange={handleChange}
                    />
                    <span>Conforme</span>
                  </label>
                  <label className="flex items-center space-x-2">
                    <input
                      type="radio"
                      name="software"
                      value="non conforme"
                      checked={FormData.software === "non conforme"}
                      onChange={handleChange}
                    />
                    <span>Non Conforme</span>
                  </label>
                </div>
              </div>

              {/* Remarks */}
              <div>
                <label className="block text-blue-700 font-semibold mb-2">
                  Remarques
                </label>
                <textarea
                  name="remarques"
                  value={FormData.remarques}
                  onChange={handleChange}
                  placeholder="La mise à jour logicielle n'a pas été effectuée en raison d'un problème de réseau. Reprogrammer la mise à jour."
                  required
                  className="w-full border border-gray-300 rounded-md p-3 bg-gray-100 focus:ring-2 focus:ring-green-500 text-gray-700 h-32 resize-none"
                ></textarea>
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-green-500 text-white font-bold py-3 rounded-md hover:bg-green-600 transition"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Checklist;
