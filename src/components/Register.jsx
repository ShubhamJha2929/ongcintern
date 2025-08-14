import React from "react";
import { useNavigate } from "react-router-dom";
import image3 from "../assets/ongcLogo.jpg";

const Register = () => {
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    const name = e.target[0].value;
    const email = e.target[1].value;
    const password = e.target[2].value;

    try {
      const response = await fetch("http://localhost:8000/api/register-user/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: name,    // Django expects 'username' field
          email: email,
          password: password,
        }),
      });

      if (response.ok) {
        alert("Registration successful!");
        navigate("/login");
      } else {
        const errorData = await response.json();
        alert("Registration failed: " + JSON.stringify(errorData));
      }
    } catch (err) {
      console.error("Error:", err);
      alert("Something went wrong while registering.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-red-500 to-rose-200 p-4">
      <div className="bg-white shadow-xl rounded-2xl w-full max-w-md p-8 relative">
        <div className="flex flex-col items-center mb-6">
          <img src={image3} alt="ONGC Logo" className="w-20 mb-3" />
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
            className="mt-1 w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
            type="email"
            placeholder="Email"
            required
          />
          <input
            className="mt-1 w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
            type="password"
            placeholder="Password"
            required
          />
          <button
            type="submit"
            className="mt-1 w-full bg-red-600 hover:bg-red-700 text-white py-2 rounded-md font-semibold transition"
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
