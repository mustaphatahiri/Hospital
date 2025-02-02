import React from "react";
import { Link } from "react-router-dom";
import loginphoto from "/src/assets/images/loginphoto.png";

function ForgotPassword() {
  return (
    <div className="flex flex-col md:flex-row w-full h-screen bg-gray-100">
      {/* Left Side - Form Section */}
      <div className="flex flex-1 flex-col justify-center items-center p-6 bg-[#6BFFC4] shadow-lg md:max-w-lg md:rounded-r-lg">
        <h1 className="text-4xl font-bold text-gray-800">HOPITAL MOLIERE</h1>
        <h2 className="text-xl text-gray-500 mt-1 mb-6">LONGCHAMP</h2>
        <div className="w-full max-w-md">
          <h3 className="text-xl font-semibold text-gray-700 mb-4 text-center">
            Forgot Your Password?
          </h3>
          <p className="text-sm text-gray-600 mb-6 text-center">
            Enter your email address below, and we will send you instructions to reset your password.
          </p>
          <form>
            <div className="mb-4">
              <label className="block text-sm text-gray-700 mb-1">Email</label>
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full p-3 border rounded-lg focus:ring focus:ring-green-200"
              />
            </div>
            <button
              type="submit"
              className="w-full py-3 bg-green-500 text-white font-semibold rounded-lg hover:bg-green-600 transition"
            >
              Send Reset Link
            </button>
          </form>
          <p className="text-sm text-gray-600 mt-4 text-center">
            Remembered your password?{" "}
            <Link to="/LoginPage" className="text-[#0d00ff] hover:underline">
              Log In
            </Link>
          </p>
        </div>
      </div>

      {/* Right Side - Image Section */}
      <div className="hidden md:block flex-1 bg-gray-200">
        <img
          src={loginphoto}
          alt="Hospital Staff"
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
}

export default ForgotPassword;
