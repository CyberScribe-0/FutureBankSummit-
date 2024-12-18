import React from 'react';
import { motion } from 'framer-motion';
import AOS from 'aos';
import 'aos/dist/aos.css';

const TopicHighlights = () => {
  const topics = [
    { 
      title: 'AI in Banking', 
      description: 'Exploring the integration of AI in financial services to enhance customer experience and automate operations.',
      icon: '🤖'
    },
    { 
      title: 'Digital Transformation', 
      description: 'Shifting traditional banking processes to digital-first to provide greater accessibility and security.',
      icon: '💻'
    },
    { 
      title: 'Regtech Innovations', 
      description: 'Innovations in regulatory technology (regtech) that improve compliance, fraud detection, and risk management.',
      icon: '🔐'
    },
    { 
      title: 'Digital Payments', 
      description: 'The evolution of digital payment solutions for secure, fast, and frictionless transactions.',
      icon: '💳'
    },
    { 
      title: 'Blockchain & Crypto', 
      description: 'Exploring the role of blockchain and cryptocurrencies in disrupting the financial industry.',
      icon: '⛓️'
    },
    { 
      title: 'Cybersecurity', 
      description: 'Strategies and technologies to protect banking systems from cyber threats and ensure data privacy.',
      icon: '🛡️'
    }
  ];

  return (
    <div className="p-10 bg-gray-50" id="topic-highlights">
      <motion.h2
        className="text-4xl font-bold text-center text-yellow-400 mb-12"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        data-aos="fade-up"
      >
        Topic Highlights
      </motion.h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {topics.map((topic, index) => (
          <motion.div
            key={index}
            className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 * index, duration: 0.8 }}
            data-aos="fade-up" // AOS fade-up effect when scrolling
            whileInView={{ opacity: 1, y: 0 }} // Framer Motion: trigger animations when in view
            viewport={{ once: false, amount: 0.3 }} // Trigger animation when at least 30% of the element is in view
            whileHover={{ scale: 1.05 }} // Scale on hover for dynamic effect
          >
            <div className="text-5xl mb-4 text-yellow-500">{topic.icon}</div>
            <h3 className="text-xl font-semibold mb-3">{topic.title}</h3>
            <p className="text-gray-700">{topic.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default TopicHighlights;
