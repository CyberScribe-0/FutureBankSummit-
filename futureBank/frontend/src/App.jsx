import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import RegistrationPage from "./pages/RegistrationPage";
import 'aos/dist/aos.css';
import AOS from 'aos';
import Navbar from "./components/Navbar";
import Schedule from "./components/Schedule";
import Speaker from "./components/Speaker";
import Awards from "./components/Awards";
import Contact from "./components/Contact";
import Login from "./pages/Login";

function App() {
  const [user, setUser] = useState(null); // State for storing logged-in user data

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  
  return (
    <Router>
      <Navbar user={user} setUser={setUser} /> {/* Pass user and setUser to Navbar */}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/schedule" element={<Schedule />} />
        <Route path="/speakers" element={<Speaker />} />
        <Route path="/awards" element={<Awards />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/register" element={<RegistrationPage />} />
        {/* Pass setUser to Login component */}
        <Route path="/login" element={<Login setUser={setUser} />} />
      </Routes>
    </Router>
  );
}

export default App;
