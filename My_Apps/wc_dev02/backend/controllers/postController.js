const multer = require('multer')
const Post = require('../model/postModel')
const Image = require('../model/imageModel')

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, "/uploads");
    },
    filename: function (req, file, cb) {
      cb(null, Date.now() + "_" + file.originalname);
    },
  });
  
  const option = [
    { name: "file1", maxCount: 1 },
    { name: "file2", maxCount: 1 },
  ];
  
const createPost = async (req, res) => {
    multer({ storage: storage }).fields(option)(req, res, async (err) => {
      console.log(req.body);
      console.log(req.body.item_name);
      console.log(req.files);
      const images = [req.files.file1[0], req.files.file2[0]];
      const post = new Post({
        item_name: req.body.item_name,
      });
      await post.save();
      images.forEach(async (image) => {
        const imageModel = new Image({
          name: image.filename,
          post: post._id,
        });
        await imageModel.save();
      });
      const savedImages = await Image.find().sort({ createdAt: -1 }).limit(2);
      console.log(savedImages);
      savedImages.forEach((image) => {
        post.images.push(image._id);
      });
      post.save();
      res.status(200).json(post);
    });
  };

const getPosts = async (req, res) => {
    const posts = await Post.find({}).populate("images");
    res.status(200).json(posts);
  };
  
  module.exports = {
    createPost,
    getPosts,
}