const express = require("express");
const bcrypt = require("bcryptjs");
const User = require("../models/User");

const router = express.Router();

// User Registration Route
router.post("/register", async (req, res) => {
  const { firstName, lastName, email, password } = req.body;

  try {
    // Check if the user already exists
    const userExists = await User.findOne({ email });
    if (userExists) return res.status(400).json({ message: "User already exists" });

    // Create a new user
    const user = new User({ firstName, lastName, email, password });
    await user.save();

    res.status(201).json({ message: "User registered successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
});

// User Login Route
router.post("/login", async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });
    if (!user) return res.status(400).json({ message: "Invalid credentials" });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).json({ message: "Invalid credentials" });

    // Set user information in the session
    req.session.user = { id: user._id, firstName: user.firstName };
    console.log("Session after setting:", req.session);
    res.status(200).json({ message: "Login successful" });
  } catch (error) {
    console.error("Login error:", error);
    res.status(500).json({ message: "Server error" });
  }
});




// User Logout Route
router.post("/logout", (req, res) => {
  req.session.destroy((err) => {
    if (err) {
      return res.status(500).json({ message: "Could not log out" });
    }
    res.clearCookie("connect.sid"); // Remove session cookie
    res.status(200).json({ message: "Logout successful" });
  });
});

// In routes/auth.js

router.get("/me", (req, res) => {
  if (req.session.user) {
    // If a session exists, return the user data
    return res.status(200).json({ user: req.session.user });
  } else {
    // If no session exists, return a 401 Unauthorized status
    return res.status(401).json({ message: "User not logged in" });
  }
});


module.exports = router;
