import React from "react";
import { useNavigate } from "react-router-dom";
import loginphoto from "/src/assets/images/loginphoto.png";

function SignUpPage() {
  const navigate = useNavigate();

  return (
    <div className="flex min-h-screen w-full">
      <div className="flex-1 p-5 bg-[#6BFFC4] flex flex-col justify-center items-center">
        <h1 className="text-5xl font-poppins text-black text-stroke-white ">HOPITAL MOLIERE</h1>
        <h2 className="text-2xl font-poppins text-black text-stroke-white mb-2">LONGCHAMP</h2>
        <form className="bg-white p-4 rounded-2xl shadow-lg border-2 border-green-500 w-full max-w-md">
          <h3 className="text-xl font-semibold text-gray-700 text-center mb-2">Let's create your account</h3>
          <p className="text-sm text-gray-600 text-center mb-3">Enter your credentials to create your account</p>
          <div className="mb-3">
            <label className="text-sm text-gray-700">Name</label>
            <input
              type="text"
              placeholder="Name"
              required
              className="w-full p-2 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-400"
            />
          </div>
          <div className="mb-3">
            <label className="text-sm text-gray-700">Email address</label>
            <input
              type="email"
              placeholder="xyz@xyz.com"
              required
              className="w-full p-2 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-400"
            />
          </div>
          <div className="mb-3">
            <label className="text-sm text-gray-700">N° Telephone</label>
            <input
              type="tel"
              placeholder="+212xxxxxxxxxx"
              required
              className="w-full p-2 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-400"
            />
          </div>
          <div className="mb-3">
            <label className="text-sm text-gray-700">Type of Your Work</label>
            <select className="w-full p-2 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-400">
              <option value="Technician">Technician</option>
              <option value="Biomedical Engineer">Biomedical Engineer</option>
            </select>
          </div>
          <div className="mb-3">
            <label className="text-sm text-gray-700">Password</label>
            <input
              type="password"
              placeholder="Password"
              required
              className="w-full p-2 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-400"
            />
          </div>
          <button
            type="submit"
            className="w-full py-2 bg-green-500 text-black font-semibold rounded-lg hover:bg-green-600 transition duration-300"
          >
            Sign Up
          </button>
          <p className="text-sm text-center mt-3">
            Have an account? 
            <span 
              className="text-blue-500 hover:underline cursor-pointer"
              onClick={() => navigate("/LoginPage")}
            >
              {" "}Login
            </span>
          </p>
        </form>
      </div>
      <div className="flex-1 bg-gray-200 relative">
        <img src={loginphoto} alt="Hospital Staff" className="object-cover w-full h-full" />
      </div>
    </div>
  );
}

export default SignUpPage;
