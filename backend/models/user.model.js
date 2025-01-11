import mongoose from "mongoose";

const userSchema = mongoose.Schema({
  fullName: { type: String },
  teamName: { type: String },
  candidate1: { type: String },
  candidate2: { type: String },
  email: { type: String, required: true },
  phone: { type: Number, required: true },
  semester: { type: String, required: true },
  event: { type: String, required: true },
});

const User = mongoose.model("User", userSchema);

export default User;
