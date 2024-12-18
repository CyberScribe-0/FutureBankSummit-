import React from 'react'
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const Awards = () => {
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
          "url('https://t4.ftcdn.net/jpg/06/70/35/75/360_F_670357562_ZZTEY22OghaaEuE7OlC5inc05C3xRYg3.jpg')",
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
        <h1 className="text-5xl font-extrabold mb-4 text-yellow-500">Awards</h1>

        {/* Subtitle */}
        <p className="text-lg font-medium leading-relaxed mb-6">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Placeat aperiam unde quia ipsam facilis et quos quis cumque cum eveniet quod enim tempore veniam laboriosam nam, obcaecati, autem necessitatibus maxime.
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
}

export default Awards
