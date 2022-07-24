const mongoose = require('mongoose')

const postSchema = mongoose.Schema({
    item_name: String,
    // images: [{ type: mongoose.Types.ObjectId, ref: "Image" }],
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },
})

module.exports = mongoose.model('Post',postSchema)
