import mongoose from "mongoose";

const imageSchema = new mongoose.Schema({
  name: String,
  post: { type: mongoose.Types.ObjectId, ref: "Post" },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

export default mongoose.model("Image", imageSchema);
