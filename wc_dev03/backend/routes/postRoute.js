import express from "express";
import {
  getPosts,
  createPost,
  getPost,
} from "../controllers/postController.js";

const router = express.Router();

router.post("/", createPost);

router.get("/", getPosts);

router.get("/:post_id", getPost);

export default router;
