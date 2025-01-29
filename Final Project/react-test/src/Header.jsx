import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="sticky top-0 z-50 flex justify-between items-center bg-emeraldCustom p-4 shadow-md">
      <h1 className="text-white text-lg font-bold">EquipCare Cloud</h1>
      <nav className="flex items-center space-x-6">
        {/* Navigation Links */}
        <Link to="/" className="text-white font-bold hover:text-gray-300">
          Home
        </Link>
        <Link to="/MenuMedcine" className="text-white font-bold hover:text-gray-300">
          Doctor
        </Link>
        <Link to="/MenuTechnician" className="text-white font-bold hover:text-gray-300">
          Technician
        </Link>
        <Link to="/MenuEngineer" className="text-white font-bold hover:text-gray-300">
          Engineer
        </Link>
        {/* Login Button */}
        <Link to="/LoginPage">
          <button className="ml-4 bg-green-500 text-white font-bold py-2 px-4 rounded hover:bg-green-600">
            Log in
          </button>
        </Link>
      </nav>
    </header>
  );
}

export default Header;
