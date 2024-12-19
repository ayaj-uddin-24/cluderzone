import express from "express";
import dotenv from "dotenv";
import connectDB from "./connection/connectDB.js";
dotenv.config();

const app = express();
const PORT = process.env.PORT || 8000;

// Get the home route
app.get("/", (req, res) => {
  res.send("This is home route.");
});

// Start the server
app.listen(PORT, async () => {
  console.log(`Server is running on PORT ${PORT}`);
  await connectDB();
});
