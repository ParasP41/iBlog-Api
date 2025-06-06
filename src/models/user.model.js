import mongoose from "mongoose";

const userSchma = new mongoose.Schema({
    firstName: {
        type: String,
        required: true,
        lowercase: true,
        trim: true,
    },
    lastName: {
        type: String,
        required: true,
        lowercase: true,
        trim: true,
    },
    userName: {
        type: String,
        required: true,
        lowercase: true,
        trim: true,
        unique: true
    },
    picture: {
        type: String,
        default: ""
    },
    postId: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Post"
        }
    ],
    email: {
        type: String,
        required: true,
        lowercase: true,
        trim: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
        trim: true
    },
    role: {
        type: String,
        default: ""
    },
    bio: {
        type: String,
        default: ""
    },
    pins: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Post"
        }
    ],
}, { timestamps: true })
export const User = mongoose.model('User', userSchma);