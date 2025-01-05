import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./connection/connectDB.js";
import postRouter from "./routes/post.routes.js";
dotenv.config();

const app = express();
const PORT = process.env.PORT || 8000;

// App Config
app.use(express.json());
app.use(cors());

// Get the home route
app.get("/", (req, res) => {
  res.send("This is home route");
});

// API routes
app.use("/api/post", postRouter);

app.post("/api/user/login-user", (req, res) => {
  try {
    const { email, password } = req.body;

    if (
      email === process.env.ADMIN_MAIL &&
      password === process.env.ADMIN_PASS
    ) {
      return res.status(201).json({
        success: true,
        message: "User Login Successful",
        user: {
          email: process.env.ADMIN_MAIL,
          password: process.env.ADMIN_PASS,
        },
      });
    } else {
      return res
        .status(401)
        .json({ success: false, message: "Invalid Credintials" });
    }
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

// Start the server
app.listen(PORT, async () => {
  console.log(`Server is running on PORT ${PORT}`);
  await connectDB();
});
