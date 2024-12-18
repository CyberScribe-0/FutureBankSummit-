import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import AOS from 'aos';
import 'aos/dist/aos.css';

const EventOverview = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Controls animation speed
      once: false, // Ensures the animation triggers every time the element comes into view
      easing: 'ease-in-out', // Smooth transition easing
    });
  }, []);

  return (
    <div className="p-10" id="event-overview">
      {/* Flex container for image, text, and video */}
      <div className="flex flex-col md:flex-row items-center justify-between">
        {/* Left Side: Image Placeholder */}
        <div className="w-full md:w-1/2 p-4">
          <motion.img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/Marketing_speaker_samuel_scott.jpg/800px-Marketing_speaker_samuel_scott.jpg" // Replace with your image URL
            alt="Event Image"
            className="w-full h-auto rounded-lg shadow-lg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            data-aos="fade-right" // AOS fade-right on scroll
          />
        </div>

        {/* Right Side: Event Overview Title and Paragraph */}
        <div className="w-full md:w-1/2 text-right">
          <motion.h2
            className="text-5xl font-bold text-yellow-400 mb-6"
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, type: 'spring', stiffness: 100 }}
            data-aos="fade-left" // AOS fade-left animation
            whileInView={{ opacity: 1, x: 0 }} // Keep animation active while in view
            viewport={{ once: false, amount: 0.3 }} // Trigger animation when at least 30% of the element is in view
          >
            Event Overview
          </motion.h2>

          <motion.p
            className="text-2xl text-gray-700 leading-relaxed text-right max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            data-aos="fade-left"
            whileInView={{ opacity: 1, y: 0 }} // Maintain animation during scroll
            viewport={{ once: false, amount: 0.3 }}
          >
            The banking industry worldwide is undergoing phenomenal change, providing banks an opportunity to reimagine their business models and take significant strides toward digital transformation.
            This summit showcases the latest innovations and practical case studies, along with interactive panel discussions, guiding the banking sector in KSA to become future-ready.
          </motion.p>
        </div>
      </div>

       {/* YouTube Video and Text Side by Side */}
       <div className="flex flex-col md:flex-row items-center justify-between mt-4">
        {/* Left Side: YouTube Video */}
        <div className="w-full md:w-1/2 p-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            data-aos="fade-up" // AOS fade-up effect
          >
            <div className="flex justify-center md:justify-start">
              <iframe
                width="100%"
                height="315"
                src="https://www.youtube.com/embed/xAheExTRiLU"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="rounded-lg shadow-lg" // Style the video with rounded corners and a shadow
              ></iframe>
            </div>
          </motion.div>
        </div>

        {/* Right Side: Text Content */}
        <div className="w-full md:w-1/2 p-4 mt-4 md:mt-0 text-right">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.7 }}
            data-aos="fade-left"
          >
            <h3 className="text-3xl font-semibold text-yellow-400 mb-4">
              5th Annual Future Banks Summit & Awards KSA 2024
            </h3>
            <p className="text-lg text-gray-700">
              5th Annual Future Banks Summit & Awards KSA 2024 will showcase the latest innovations and practical case studies along with interactive panel discussions designed to guide the banking sector in KSA in identifying the right strategy to knock through long-standing resistance and be future-ready!
            </p>

            <h3 className="text-3xl font-semibold text-yellow-400 mt-6 mb-4">
              Exciting and Timely Conference Ahead!
            </h3>
            <p className="text-lg text-gray-700">
              An exciting and timely conference on its way discussing the future of the financial industry in KSA driven by innovation and digital advancements with the adoption of technologies such as AI, digital transformation, digital banking, banking in the metaverse, intelligent automation, regtech, data analytics, cloud migration, cyber security, digital payments model along with tech-driven redefined business continuity planning strategies.
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default EventOverview;
