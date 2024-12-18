import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const Contact = () => {
  const navigate = useNavigate();
  const [showPopup, setShowPopup] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowPopup(true);
    setTimeout(() => {
      setShowPopup(false);
      navigate('/');
    }, 2000); // Show popup for 2 seconds, then redirect
  };

  return (
    <div
      className="w-full h-screen flex items-center justify-center bg-cover bg-center relative overflow-hidden"
      style={{
        backgroundImage: "url('https://images.unsplash.com/photo-1528747045269-390fe33c19f2?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-50"></div>

      {/* Form Container */}
      <motion.div
        className="relative z-10 p-10 rounded-lg shadow-lg w-4/5 md:w-1/3 mt-20"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 50 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-3xl font-bold text-center text-white mb-6">Contact Us</h1>
        <p className="text-center text-white mb-6">
          Have a question or want to get in touch? Fill out the form below.
        </p>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="name" className="block text-white font-medium">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 text-white bg-transparent focus:outline-none focus:border-blue-500 transition-all duration-300"
              placeholder="Enter your name"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-white font-medium">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 text-white bg-transparent focus:outline-none focus:border-blue-500 transition-all duration-300"
              placeholder="Enter your email"
              required
            />
          </div>
          <div className="mb-6">
            <label htmlFor="message" className="block text-white font-medium">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows="4"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 text-white bg-transparent focus:outline-none focus:border-blue-500 transition-all duration-300"
              placeholder="Write your message"
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white font-medium py-2 rounded-lg hover:bg-blue-500 transition duration-300"
          >
            Submit
          </button>
        </form>
      </motion.div>

      {/* Popup */}
      {showPopup && (
        <motion.div
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2 bg-green-600 text-white px-6 py-3 rounded-lg shadow-lg"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          transition={{ duration: 0.5 }}
        >
          Your message has been sent successfully!
        </motion.div>
      )}
    </div>
  );
};

export default Contact;
