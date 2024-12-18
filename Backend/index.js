const express = require("express");
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");
const session = require("express-session");
const cors = require("cors");
const dotenv = require("dotenv");
const authRoutes = require("./routes/auth");
// git add . ->git add all
// git commit -m "initial commit"
// git push origin master
dotenv.config();

const app = express();

// Middleware
app.use(express.json());
app.use(cookieParser());

// Enable CORS 
// const corsOptions = {
//   origin: "http://localhost:5173",  // React frontend URL
//   methods: ["GET", "POST", "PUT", "DELETE"],
//   credentials: true,  // Allow sending cookies
// };
app.use(cors());  // Enable CORS

// Session configuration
app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: true,
    cookie: {
      secure: false,  // Set to `true` if you're using HTTPS (for production)
      httpOnly: true,
      domain: 'localhost',  // Allow the cookie to be accessible for the entire localhost domain
      maxAge: 1000 * 60 * 60 * 24,  // 1-day expiration
    },
  })
);

app.use("/api/auth", authRoutes);

// MongoDB Connection
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => console.log("Connected to MongoDB"))
  .catch(err => console.log("MongoDB connection error:", err));

// Test route
app.get("/", (req, res) => {
  res.send("Backend is running");
});


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
