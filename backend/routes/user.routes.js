import express from "express";
import {
  adminLogin,
  getUser,
  register,
  removeUser,
} from "../controllers/user.controller.js";
const router = express.Router();

router.post("/register", register);
router.get("/get-user", getUser);
router.delete("/remove-user/:id", removeUser);
router.post("/admin-login", adminLogin);

export default router;
