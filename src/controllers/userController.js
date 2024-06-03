const jwt = require("jsonwebtoken");
const User = require("../models/User");
require("dotenv").config();

const JWT_SECRET = process.env.JWT_SECRET || "jwt_secret_123";

// Sign Up Controller
const signup = async (req, res) => {
  const { email, password } = req.body;
  try {
    const exist_user = await User.findOne({ email: email });
    if (exist_user) {
      return res.status(400).json({ message: "User Already Exist" });
    }
    const user = new User({ email, password });
    await user.save();
    return res.status(201).json({ message: "User created", user: user });
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
};

// Login Controller
const login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(400).json({ message: "User not found" });
    }

    const isMatch = await user.comparePassword(password);
    if (!isMatch) {
      return res.status(400).json({ message: "Invalid credentials" });
    }

    const token = jwt.sign({ id: user._id }, JWT_SECRET, { expiresIn: "1h" });
    return res.status(200).json({ token });
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
};

module.exports = { signup, login };
