import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = ({ setUser }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:5000/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
        credentials: "include",  // Important to include cookies
      });

      const data = await response.json();

      if (response.ok) {
        alert("Login successful!");
        
        // Fetch user data after login
        setUser(data.user); // Set the user state

        // Redirect to homepage
        navigate("/");
      } else {
        setErrorMessage(data.message || "Login failed. Please try again.");
      }
    } catch (error) {
      console.error("Error during login:", error);
      setErrorMessage("An error occurred. Please try again.");
    }
  };

  return (
    <div className="w-full h-screen bg-gradient-to-r from-green-400 to-blue-500 flex items-center justify-center text-white">
      <div className="bg-opacity-80 p-8 rounded-lg shadow-lg w-4/5 md:w-1/2">
        <h1 className="text-3xl font-bold mb-6 text-center">Login</h1>

        {errorMessage && <p className="text-red-500 text-center mb-4">{errorMessage}</p>}

        <form onSubmit={handleLogin}>
          <input
            type="email"
            placeholder="Email"
            className="w-full text-white p-3 mb-4 bg-transparent border border-white rounded-lg"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full text-white p-3 mb-4 bg-transparent border border-white rounded-lg"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
            type="submit"
            className="w-full bg-yellow-500 text-white p-3 rounded-lg hover:bg-yellow-400"
          >
            Login
          </button>
        </form>

        {/* Redirect to Registration */}
        <p className="text-white mt-4 text-center">
          Not registered?{" "}
          <span
            className="text-yellow-300 cursor-pointer hover:underline"
            onClick={() => navigate("/register")}
          >
            Register Here
          </span>
        </p>
      </div>
    </div>
  );
};

export default Login;
