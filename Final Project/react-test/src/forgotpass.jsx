import React from "react";

function ForgotPassword() {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="w-full max-w-md p-6 bg-white shadow-lg rounded-lg">
        <h1 className="text-2xl font-bold text-gray-800 mb-4 text-center">
          Forgot Password
        </h1>
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
          <a href="/LoginPage" className="text-[#0d00ff] hover:underline">
            Log In
          </a>
        </p>
      </div>
    </div>
  );
}

export default ForgotPassword;
