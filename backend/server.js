import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./connection/connectDB.js";
import postRouter from "./routes/post.routes.js";
import userRouter from "./routes/user.routes.js";
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
app.use("/api/user", userRouter);

// Start the server
app.listen(PORT, async () => {
  console.log(`Server is running on PORT ${PORT}`);
  await connectDB();
});
