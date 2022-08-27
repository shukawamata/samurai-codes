import mongoose from "mongoose";

const postSchema = new mongoose.Schema({
  item_name: String,
  images: [{ type: mongoose.Types.ObjectId, ref: "Image" }],
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

export default mongoose.model("Post", postSchema);
