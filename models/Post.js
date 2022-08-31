const mongoose = require("mongoose");

const PostSchema = new mongoose.Schema({
    userId: {
        type: String,
        required: true,
        unique: true,
    },
    desc: {
        type: String,
        required: true,
        maxlength: 500
    },
    image: {
        type: String,
    },
    likes: {
        type: Array,
        default: []
    },
},
{timestamps: true}
);

module.exports = mongoose.model("Post", PostSchema);

