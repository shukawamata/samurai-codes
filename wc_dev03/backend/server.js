import express from "express";
import cors from "cors";
import connectDB from './config/db.js';
import postRoute from "./routes/postRoute.js";

const app = express();
app.use(express.json());
app.use(cors());
app.use("/api/posts", postRoute);
app.use("/upload", express.static("./upload"));

app.get("/", (reqz, res) => {
  res.json("You put the wrong url. Please check the url");
});
app.get("/api", (req, res) => {
  res.json("You put the wrong url. Please check the service name");
});

connectDB()
app.listen(8080, () => {
    console.log("Server started");
  });