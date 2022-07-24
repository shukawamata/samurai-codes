const express = require('express')
const router = express.Router()
const { createPost, getPosts } = require('../controllers/postController')

router.post("/", createPost);

// router.get("/", getPosts);

//ここって他のルートと一緒でいいのか
module.exports = router