import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom'; 
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [user, setUser] = useState(null);  // Store logged-in user details
  const [loading, setLoading] = useState(true); // To handle loading state
  const navigate = useNavigate();

  // Fetch user data when the navbar mounts
  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/auth/me", {
          method: "GET",
          credentials: "include",  // To send the session cookie with the request
        });

        const data = await response.json();

        if (response.ok) {
          setUser(data.user);  // Set the user data from the backend response
        } else {
          setUser(null);  // No user is logged in
        }
      } catch (error) {
        console.error("Error fetching user data:", error);
        setUser(null);  // Reset the user state in case of an error
      } finally {
        setLoading(false);  // Stop loading once data is fetched
      }
    };

    fetchUser();
  }, []); // Run this effect only once when the component mounts

  const handleLogoClick = () => {
    navigate('/'); // Redirect to homepage when the logo is clicked
  };

  const handleLogout = async () => {
    try {
      // Call the logout API to clear session on the backend
      const response = await fetch("http://localhost:5000/api/auth/logout", {
        method: "POST",
        credentials: "include", // Ensure cookies are sent
      });

      if (response.ok) {
        setUser(null);  // Reset the user state
        navigate('/');  // Redirect to homepage after logout
      }
    } catch (error) {
      console.error("Logout error:", error);
    }
  };

  return (
    <motion.nav
      className="bg-gray-900 p-4 fixed top-0 left-0 right-0 z-50 shadow-lg"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div className="flex items-center justify-between container mx-auto">
        {/* Logo */}
        <motion.div
          className="text-white font-bold text-2xl cursor-pointer"
          onClick={handleLogoClick}
        >
          <h1>5TH ANNUAL FUTURE BANKS SUMMIT & AWARDS KSA 2024</h1>
        </motion.div>

        {/* Hamburger for Mobile */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-white">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-6 w-6">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {/* Links */}
        <div className={`md:flex space-x-8 text-white ${isOpen ? 'block' : 'hidden'} md:block`}>
          <Link to="/schedule" className="hover:text-yellow-500 transition-all duration-300 ease-in-out">Schedule</Link>
          <Link to="/speakers" className="hover:text-yellow-500 transition-all duration-300 ease-in-out">Speakers</Link>
          <Link to="/awards" className="hover:text-yellow-500 transition-all duration-300 ease-in-out">Awards</Link>
          <Link to="/contact" className="hover:text-yellow-500 transition-all duration-300 ease-in-out">Contact</Link>
        </div>

        {/* User/Authentication display */}
        <div>
          {loading ? (
            <span className="text-white">Loading...</span>  // Show a loading message until user data is fetched
          ) : user ? (
            <>
              <span className="text-white">Hello, {user.firstName}</span>
              <button
                className="ml-4 text-white bg-red-600 p-2 rounded-md hover:bg-red-700"
                onClick={handleLogout}
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <Link to="/register">
                <button className="hover:text-blue-600 text-white mr-4">Register</button>
              </Link>
              <Link to="/login">
                <button className="hover:text-blue-600 text-white">Login</button>
              </Link>
            </>
          )}
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
