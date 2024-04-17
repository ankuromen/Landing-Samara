const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const User = require("./models/User.js");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(cors());
// Connect to MongoDB
mongoose.connect("mongodb://localhost:27017/eventiq_backend", {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

app.post("/register", async (req, res) => {
    try {
      const { fullName, email, gender, nationality } = req.body;
  
      // Check if the email already exists in the database
      const existingUser = await User.findOne({ email });
      if (existingUser) {
        return res.status(400).json({ message: "Email is already registered" });
      }
  
      // If email doesn't exist, create and save the new user
      const user = new User({ fullName, email, gender, nationality });
      await user.save();
      res.status(201).json({ message: "User registered successfully" });
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  });

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});