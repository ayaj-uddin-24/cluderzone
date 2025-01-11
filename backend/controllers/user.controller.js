import User from "../models/user.model.js";

// User registration
export const register = async (req, res) => {
  try {
    const {
      fullName,
      teamName,
      candidate1,
      candidate2,
      email,
      phone,
      semester,
      event,
    } = req.body;

    const user = await User.findOne({ email });
    if (user) {
      return res
        .status(400)
        .json({ success: false, message: "Email already exists!" });
    }

    const newUser = new User({
      fullName,
      teamName,
      candidate1,
      candidate2,
      email,
      phone,
      semester,
      event,
    });

    await newUser.save();
    res
      .status(201)
      .json({ success: true, message: "Registration Successful!", newUser });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// Getting all users
export const getUser = async (req, res) => {
  try {
    const users = await User.find({});
    res.status(200).json({ success: true, users });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// Remove user
export const removeUser = async (req, res) => {
  try {
    const { id } = req.params;

    await User.findByIdAndDelete(id);
    res.status(200).json({ success: true, message: "User removed" });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// Admin login
export const adminLogin = (req, res) => {
  try {
    const { email, password } = req.body;

    if (
      email === process.env.ADMIN_MAIL &&
      password === process.env.ADMIN_PASS
    ) {
      return res.status(200).json({
        success: true,
        message: "Admin Login Successful",
        user: {
          email: process.env.ADMIN_MAIL,
          password: process.env.ADMIN_PASS,
        },
      });
    } else {
      return res
        .status(401)
        .json({ success: false, message: "Invalid credentials" });
    }
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};
