const mongoose = require('mongoose')

const imageSchema = mongoose.Schema({
    name: String,
    post: { type: mongoose.Types.ObjectId, ref: "Post" },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },
})

module.exports = mongoose.model('Image',imageSchema)
