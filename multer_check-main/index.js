import express from "express";
import multer from "multer";

const app = express();
const diskStorage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "./uploads");
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});
const upload = multer({ storage: diskStorage });

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.post("/upload", upload.single("file"), (req, res) => {
  res.send("File uploaded");
});

app.listen(5050, () => {
  console.log("Server started on port 5050");
});
