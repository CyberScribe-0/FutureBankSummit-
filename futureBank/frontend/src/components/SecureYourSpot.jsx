import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';

const SecureYourSpot = () => {
  const navigate = useNavigate(); // Initialize navigate hook

  useEffect(() => {
    // Initialize AOS with scroll animations
    AOS.init({
      duration: 1000, // Controls animation speed
      once: false, // Triggers animation every time the element comes into view
      easing: 'ease-in-out',
    });
  }, []);

  const handleRegisterClick = () => {
    // Redirect to the Registration page when the button is clicked
    navigate("/register");
  };

  return (
    <div
      className="relative bg-cover bg-center text-white text-center py-32"
      style={{ backgroundImage: "url('https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')" }}
    >
      <motion.div className="absolute inset-0 bg-black opacity-50"></motion.div>

      <motion.div
        className="relative z-10"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2 }}
        data-aos="fade-up"
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          Secure Your Spot at the 5th Annual Future Banks Summit & Awards KSA 2024
        </h2>

        {/* Content Cards Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* First Card: 30+ Speakers */}
          <motion.div
            className="bg-white p-6 rounded-lg shadow-xl text-center"
            initial={{ opacity: 0, x: -100 }} // Slide from left
            animate={{ opacity: 1, x: 0 }} // Slide to normal position
            transition={{ delay: 0.3, duration: 0.6 }}
            data-aos="fade-up"
          >
            <h3 className="text-5xl font-semibold text-yellow-400 mb-3">
              30+ Speakers
            </h3>
            <p className="text-lg text-gray-700">
              Leading experts from the financial industry will share insights.
            </p>
          </motion.div>

          {/* Second Card: 200+ Delegates */}
          <motion.div
            className="bg-white p-6 rounded-lg shadow-xl text-center"
            initial={{ opacity: 0, x: -100 }} // Slide from left
            animate={{ opacity: 1, x: 0 }} // Slide to normal position
            transition={{ delay: 0.4, duration: 0.6 }}
            data-aos="fade-up"
          >
            <h3 className="text-5xl font-semibold text-yellow-400 mb-3">
              200+ Delegates
            </h3>
            <p className="text-lg text-gray-700">
              A diverse audience of professionals from the banking sector.
            </p>
          </motion.div>

          {/* Third Card: Networking Opportunities */}
          <motion.div
            className="bg-white p-6 rounded-lg shadow-xl text-center"
            initial={{ opacity: 0, x: 100 }} // Slide from right
            animate={{ opacity: 1, x: 0 }} // Slide to normal position
            transition={{ delay: 0.5, duration: 0.6 }}
            data-aos="fade-up"
          >
            <h3 className="text-5xl font-semibold text-yellow-400 mb-3">
              Networking Opportunities
            </h3>
            <p className="text-lg text-gray-700">
              Meet industry leaders, innovators, and key decision-makers.
            </p>
          </motion.div>
        </div>

        {/* Register Now Button */}
        <motion.button
          onClick={handleRegisterClick} // Trigger navigation on click
          className="bg-yellow-700 text-white px-8 py-3 text-lg rounded-lg shadow-lg hover:bg-yellow-600 transition duration-300"
          initial={{ opacity: 0, y: 50 }} // Start below the normal position
          animate={{ opacity: 1, y: 0 }} // Slide into place
          transition={{ duration: 1.2, delay: 0.6 }}
          data-aos="fade-up"
        >
          Register Now
        </motion.button>
      </motion.div>
    </div>
  );
};

export default SecureYourSpot;
