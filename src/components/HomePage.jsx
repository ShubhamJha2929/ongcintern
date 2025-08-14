import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import image1 from "../assets/Ongc-home-pages.jpg";
import image2 from "../assets/ongcLogo.jpg";

const HomePage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:8000/api/login/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password }),
      });

      const data = await response.json();

      if (response.ok) {
        alert("Login successful");
        navigate("/forms"); // ⬅️ route after successful login
      } else {
        alert(data.error || "Invalid credentials");
      }
    } catch (error) {
      console.error("Login error:", error);
      alert("Something went wrong");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-red-500 to-rose-200">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-6xl p-4">
        {/* Left Side - Image and Message */}
        <div className="flex flex-col justify-center items-center text-white p-4">
          <img
            src={image1}
            alt="ONGC Field"
            className="rounded-xl shadow-lg w-full h-72 object-cover mb-4"
          />
          <div className="bg-red-700 bg-opacity-80 p-4 rounded-xl shadow-md text-sm">
            <h2 className="font-bold text-lg mb-2">Ongc Internship Program</h2>
            <p>
                In line with the "Digital India" initiative of the Government of India,  
                ePass - Online Internship Application and Management System is a step    
                taken by ONGC to streamline and digitize the internship application      
                process. This platform is designed to enhance the experience of          
                students and aspiring professionals by enabling them to apply for       
                internships                               

              </p>

          </div>
        </div>

        {/* Right Side - Login Box */}
        <div className="bg-white rounded-2xl shadow-xl p-8 max-w-md w-full mx-auto">
          <div className="flex flex-col items-center">
            <img
              src={image2}
              alt="ONGC Logo"
              className="w-20 mb-4"
            />
            <h2 className="text-xl font-bold text-gray-800 mb-2">User Login</h2>
            <p className="text-sm text-gray-500 mb-6">User Application Form Login</p>
          </div>

          <form className="space-y-4" onSubmit={handleLogin}>
            <input
              type="text"
              placeholder="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full mt-3 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full mt-3 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
            />

            <button
              type="submit"
              className="w-full mt-3 bg-orange-500 text-white py-2 rounded-md font-semibold hover:bg-orange-600 transition"
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
