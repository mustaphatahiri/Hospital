import React from "react";
import { useNavigate } from "react-router-dom";
import EngineerIcon from "/src/assets/images/engineer.png";

function MenuEngineer() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#6BFFC4] text-[#333] flex flex-col justify-center items-center">
      <div className="menu-container text-center">
        {/* Icon Section */}
        <img
          src={EngineerIcon}
          alt="Engineer Icon"
          className="engineer-icon w-48 h-48 rounded-full bg-[#fa3131] p-4 mx-auto -mt-3"
        />

        {/* Title */}
        <h2 className="text-white text-5xl font-bold mt-8 text-stroke-2">
          Menu de l'Ingénieur
        </h2>

        {/* Subtitle */}
        <p className="text-[#555] italic mt-10">
          "Press here to access your options"
        </p>

        {/* Buttons */}
        <div className="flex flex-col gap-4 mt-5">
          <button
            className="bg-[#22D94A] text-white text-xl py-4 px-8 rounded-full font-bold hover:bg-[#218838] transition-colors duration-300"
            onClick={() => navigate('/InterventionOrder')}
          >
            Ordre d'intervention
          </button>
          <button
            className="bg-[#22D94A] text-white text-xl py-4 px-8 rounded-full font-bold hover:bg-[#218838] transition-colors duration-300"
            onClick={() => navigate('/PVReceptionForm')}
          >
            PV Reception
          </button>
          <button
            className="bg-[#22D94A] text-white text-xl py-4 px-8 rounded-full font-bold hover:bg-[#218838] transition-colors duration-300"
            onClick={() => navigate('/Checklist')}
          >
            Check List
          </button>
          <button
            className="bg-[#22D94A] text-white text-xl py-4 px-8 rounded-full font-bold hover:bg-[#218838] transition-colors duration-300"
            onClick={() => navigate('/EngineerTableOrder')}
          >
            Table Order d'Intervention
          </button>
          <button
            className="bg-[#22D94A] text-white text-xl py-4 px-8 rounded-full font-bold hover:bg-[#218838] transition-colors duration-300"
            onClick={() => navigate('/EngineerCheckList')}
          >
            Table CheckList
          </button>
          <button
            className="bg-[#22D94A] text-white text-xl py-4 px-8 rounded-full font-bold hover:bg-[#218838] transition-colors duration-300"
            onClick={() => navigate('/PVReceptionTable')}
          >
            Table Pv Reception
          </button>
        </div>
      </div>
    </div>
  );
}

export default MenuEngineer;
