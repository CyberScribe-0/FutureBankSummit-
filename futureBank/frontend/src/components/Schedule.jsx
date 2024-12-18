import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const Schedule = () => {
  const navigate = useNavigate();

  // Animation Variants for the Container
  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
    exit: { opacity: 0, y: -50, transition: { duration: 0.5 } },
  };

  return (
    <motion.div
      className="w-full h-screen bg-cover bg-center text-white flex items-center justify-center"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1496568816309-51d7c20e3b21?q=80&w=1931&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
        opacity: 0.7,
      }}
      initial="hidden"
      animate="visible"
      exit="exit"
      variants={containerVariants}
    >
      {/* Content Container */}
      <div className="text-center p-10 bg-black bg-opacity-80 rounded-lg shadow-lg w-4/5 md:w-3/5">
        {/* Title */}
        <h1 className="text-5xl font-extrabold mb-4 text-yellow-500">Schedule</h1>

        {/* Subtitle */}
        <p className="text-lg font-medium leading-relaxed mb-6">
          Discover the agenda of the 5th Annual Future Banks Summit & Awards KSA 2024. Explore keynotes, panels, and interactive sessions led by industry leaders in Riyadh.
        </p>

        {/* Back to Homepage Button */}
        <motion.button
          onClick={() => navigate("/")}
          className="bg-yellow-700 text-white px-8 py-3 text-lg rounded-lg shadow-lg hover:bg-yellow-600 transition duration-300"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Back to Homepage!
        </motion.button>
      </div>
    </motion.div>
  );
};

export default Schedule;
