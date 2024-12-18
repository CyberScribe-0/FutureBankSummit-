import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import EventOverview from "../components/EventOverview";
import TopicHighlight from "../components/TopicHighlight";
import SecureYourSpot from "../components/SecureYourSpot";
import Testimonial from "../components/Testimonial";
import Footer from "../components/Footer";

const HomePage = () => {
  const [firstName, setFirstName] = useState("");

  useEffect(() => {
    // Get the first name from localStorage
    const storedFirstName = localStorage.getItem("firstName");
    if (storedFirstName) {
      setFirstName(storedFirstName);
    }
  }, []);

  return (
    <div>
      <Navbar />

      {/* Show greeting message if firstName is available */}
      {firstName && (
        <div className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 text-white text-center py-4">
          <h1 className="text-2xl font-semibold">Hello, {firstName}!</h1>
        </div>
      )}

      <Hero />
      <EventOverview />
      <TopicHighlight />
      <SecureYourSpot />
      <Testimonial />
      <Footer />
    </div>
  );
};

export default HomePage;
