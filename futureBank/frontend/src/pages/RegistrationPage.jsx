import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const RegistrationPage = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      setErrorMessage("Passwords do not match!");
      return;
    }

    const userData = { firstName, lastName, email, password };

    try {
      const response = await axios.post(
        "http://localhost:5000/api/auth/register",
        userData
      );

      setSuccessMessage("Registration successful!");
      setErrorMessage("");

      setTimeout(() => {
        navigate("/login"); // Redirect to login page
      }, 2000);
    } catch (error) {
      const message = error.response?.data?.message || "Server error";
      setErrorMessage(message);
      setSuccessMessage("");
    }
  };

  return (
    <div className="w-full h-screen bg-gradient-to-r from-blue-400 to-purple-500 flex items-center justify-center text-white">
      <div className="bg-opacity-80 p-8 rounded-lg shadow-lg w-4/5 md:w-1/2">
        <h1 className="text-3xl font-bold mb-6 text-center">Register</h1>

        {errorMessage && (
          <p className="text-red-500 text-center mb-4">{errorMessage}</p>
        )}
        {successMessage && (
          <p className="text-green-500 text-center mb-4">{successMessage}</p>
        )}

        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="First Name"
            className="w-full p-3 mb-4 bg-transparent border border-white rounded-lg"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
          <input
            type="text"
            placeholder="Last Name"
            className="w-full p-3 mb-4 bg-transparent border border-white rounded-lg"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
          <input
            type="email"
            placeholder="Email"
            className="w-full p-3 mb-4 bg-transparent border border-white rounded-lg"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full p-3 mb-4 bg-transparent border border-white rounded-lg"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <input
            type="password"
            placeholder="Confirm Password"
            className="w-full p-3 mb-4 bg-transparent border border-white rounded-lg"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          <button
            type="submit"
            className="w-full bg-yellow-500 text-white p-3 rounded-lg hover:bg-yellow-400"
          >
            Register
          </button>
        </form>

        {/* Redirect to Login */}
        <p className="text-white mt-4 text-center">
          Already a user?{" "}
          <span
            className="text-yellow-300 cursor-pointer hover:underline"
            onClick={() => navigate("/login")}
          >
            Login
          </span>
        </p>
      </div>
    </div>
  );
};

export default RegistrationPage;
