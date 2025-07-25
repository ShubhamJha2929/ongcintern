// src/components/Register.jsx
import React from "react";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();
    // Ideally, register user through backend here
    navigate("/login");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-red-500 to-rose-200 p-4">
      <div className="bg-white shadow-xl rounded-2xl w-full max-w-md p-8 relative">
        <div className="flex flex-col items-center mb-6">
          <img
            src="https://upload.wikimedia.org/wikipedia/en/thumb/6/6e/Oil_and_Natural_Gas_Corporation_Logo.svg/1200px-Oil_and_Natural_Gas_Corporation_Logo.svg.png"
            alt="ONGC Logo"
            className="w-20 mb-3"
          />
          <h2 className="text-2xl font-bold text-gray-800 text-center">ONGC Registration</h2>
          <p className="text-sm text-gray-500 text-center">Create your visitor account</p>
        </div>

        <form onSubmit={handleRegister} className="space-y-4">
          <input
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
            placeholder="Name"
            required
          />
          <input
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
            type="email"
            placeholder="Email"
            required
          />
          <input
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
            type="password"
            placeholder="Password"
            required
          />
          <button
            type="submit"
            className="w-full bg-red-600 hover:bg-red-700 text-white py-2 rounded-md font-semibold transition"
          >
            Register
          </button>
        </form>

        <p className="mt-6 text-xs text-center text-gray-500">
          Already have an account?{" "}
          <span
            onClick={() => navigate("/login")}
            className="text-red-600 font-semibold hover:underline cursor-pointer"
          >
            Login
          </span>
        </p>

        <div className="mt-6 text-center text-xs text-gray-500">
          <p>For Support: 📞 011-22406299</p>
          <p className="text-blue-600">epassmsg[at]ongc[dot]co[dot]in</p>
        </div>
      </div>
    </div>
  );
};

export default Register;
