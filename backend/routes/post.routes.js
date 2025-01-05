import express from "express";
import {
  addPost,
  getPost,
  getSinglePost,
  removePost,
  updatePost,
} from "../controllers/post.controller.js";
import upload from "../middlewares/multer.js";
const router = express.Router();

router.post("/add-post", upload.single("image"), addPost);
router.get("/get-post", getPost);
router.get("/get-post/:id", getSinglePost);
router.delete("/remove-post/:id", removePost);
router.put("/update-post/:id", upload.single("image"), updatePost);

export default router;
