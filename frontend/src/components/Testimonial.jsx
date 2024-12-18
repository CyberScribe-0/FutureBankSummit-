import React, { useState } from 'react';
import { motion } from 'framer-motion';

const testimonials = [
  {
    quote: "The Future Banks Summit is a game-changer for digital banking in KSA. A must-attend event for any professional in the finance industry.",
    name: "John Doe",
    designation: "CEO",
    company: "Tech Fin Innovations",
  },
  {
    quote: "Incredible insights from industry leaders! It was the perfect platform to discuss innovation in the banking sector.",
    name: "Jane Smith",
    designation: "VP of Digital Transformation",
    company: "Banking Group Ltd.",
  },
  {
    quote: "The summit helped us understand emerging trends in banking technology and how we can adopt them in our organization.",
    name: "Mark Johnson",
    designation: "Head of IT",
    company: "FinTech Global",
  },
];

const Testimonial = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const handleNext = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setCurrentTestimonial(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  return (
    <div className="py-20 bg-gray-50" id="testimonials">
      <motion.h2
        className="text-4xl font-bold text-center text-yellow-400 mb-8"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        What Our Attendees Are Saying
      </motion.h2>

      <motion.div
        className="relative max-w-3xl mx-auto bg-white p-8 rounded-lg shadow-lg"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <motion.p
          className="text-xl italic text-gray-700 mb-6"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          “{testimonials[currentTestimonial].quote}”
        </motion.p>
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <p className="font-semibold text-gray-900">{testimonials[currentTestimonial].name}</p>
          <p className="text-gray-600">{testimonials[currentTestimonial].designation}</p>
          <p className="text-gray-500">{testimonials[currentTestimonial].company}</p>
        </motion.div>

        <div className="absolute top-1/2 transform -translate-y-1/2 left-4">
          <button
            className="bg-yellow-700 text-white p-3 rounded-full shadow-lg hover:bg-yellow-600 transition"
            onClick={handlePrev}
          >
            &lt;
          </button>
        </div>
        <div className="absolute top-1/2 transform -translate-y-1/2 right-4">
          <button
            className="bg-yellow-700 text-white p-3 rounded-full shadow-lg hover:bg-yellow-600 transition"
            onClick={handleNext}
          >
            &gt;
          </button>
        </div>
      </motion.div>
    </div>
  );
};

export default Testimonial;
