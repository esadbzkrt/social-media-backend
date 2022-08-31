const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        minlength: 3,
        maxlength: 20
    },
    password: {
        type: String,
        required: true,
        minlength: 6,
    },
    email: {
        type: String,
        required: true,
        unique: true,
        maxlength: 50
    },
    profilePicture: {
        type: String,
        default: ""
    },
    coverPicture: {
        type: String,
        default: ""
    },
    followers: {
        type: Array,
        default: []
    },
    followings: {
        type: Array,
        default: []
    },
    isAdmin: {
        type: Boolean,
        default: false
    },
    description: {
        type: String,
        maxlength: 50
    },
    city: {
        type: String,
        maxlength: 50
    },
    from: {
        type: String,
        maxlength: 50
    },
    relationship: {
        type: Number,
        enum: [1, 2, 3]
    },
    token: {
        type: String,
        default: ""
    }
},
{timestamps: true}
);

module.exports = mongoose.model('User', UserSchema);