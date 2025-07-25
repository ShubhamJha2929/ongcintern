import React from "react";
import homeimage from "../assets/images/homeimage.jpg"

const HomePage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-red-500 to-rose-200">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-6xl p-4">
        {/* Left Side - Image and Message */}
        <div className="flex flex-col justify-center items-center text-white p-4">
          <img
            src={homeimage}
            alt="ONGC Field"
            className="rounded-xl shadow-lg w-full h-72 object-cover mb-4"
          />
          <div className="bg-red-700 bg-opacity-80 p-4 rounded-xl shadow-md text-sm">
            <h2 className="font-bold text-lg mb-2">Message from the Chairman</h2>
            <p>
              In line with the "Digital India" initiative of the Government of India,
              ePass - Online Visitor Pass Management System is a step taken by ONGC
              towards optimal collaborative working of its employees with our partners
              and stakeholders. This site is targeted towards enhancing the experience
              of Visitors and Guests of ONGC to have pre-fixed appointments with online confirmation!
            </p>
          </div>
        </div>

        {/* Right Side - Login Box */}
        <div className="bg-white rounded-2xl shadow-xl p-8 max-w-md w-full mx-auto">
          <div className="flex flex-col items-center">
            <img
              src="https://upload.wikimedia.org/wikipedia/en/thumb/6/6e/Oil_and_Natural_Gas_Corporation_Logo.svg/1200px-Oil_and_Natural_Gas_Corporation_Logo.svg.png"
              alt="ONGC Logo"
              className="w-20 mb-4"
            />
            <h2 className="text-xl font-bold text-gray-800 mb-2">Visitor Login</h2>
            <p className="text-sm text-gray-500 mb-6">Visitor Pass Management System</p>
          </div>

          <form className="space-y-4">
            <input
              type="text"
              placeholder="email"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
            />
            <input
              type="password"
              placeholder="Password"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
            />

            <div className="flex items-center gap-4">
              <img
                src="https://api.dicebear.com/6.x/shapes/svg?seed=ongc123"
                alt="Captcha"
                className="w-28 h-10 object-contain border rounded"
              />
              <input
                type="text"
                placeholder="Enter Captcha"
                className="flex-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-orange-500 text-white py-2 rounded-md font-semibold hover:bg-orange-600 transition"
            >
              LOGIN
            </button>
          </form>

          <div className="mt-4 text-sm text-center text-gray-600">
            Don’t have an account? <a href="/register" className="text-red-600 hover:underline">Register</a>
          </div>

          <div className="mt-6 text-xs text-center text-gray-500">
            
            <p className="mt-2">For Support Contact Us at <br /> 📞 011-22406299</p>
            <p className="text-blue-600">epassmsg[at]ongc[dot]co[dot]in</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
