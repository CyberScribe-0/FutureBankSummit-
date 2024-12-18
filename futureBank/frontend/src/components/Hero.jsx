import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom'; // Import useNavigate

const Hero = () => {
  const navigate = useNavigate(); // Initialize navigate function

  // Function to handle the button click
  const handleRegisterClick = () => {
    navigate('/register'); // Redirect to /register page
  };

  return (
    <motion.div 
      className="hero relative bg-cover bg-center w-full h-screen text-white text-center flex items-center justify-center"
      style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1485740112426-0c2549fa8c86?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)' }} // Background image
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      transition={{ duration: 1.5 }}
    >
      <motion.div 
        className="absolute top-1/2 transform -translate-y-1/2 px-4"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: 'spring', stiffness: 50, delay: 0.5 }}
      >
        <h1 className="text-6xl font-bold mb-4 text-white">5th Annual Future Banks Summit & Awards</h1>
        <p className="text-3xl text-black mb-6">Digital Innovations Transforming the Kingdom’s Banking Landscape</p>
        <motion.button
          className="bg-yellow-700 text-white px-8 py-3 text-lg rounded-lg shadow-lg hover:bg-yellow-600 transition duration-300"
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          transition={{ type: 'spring', stiffness: 150, damping: 20 }}
          onClick={handleRegisterClick} // Call the function to handle navigation
        >
          Register Now
        </motion.button>
      </motion.div>
    </motion.div>
  );
};

export default Hero;
