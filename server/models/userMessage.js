import mongoose from 'mongoose';

const postSchema = mongoose.Schema({
    name: String,
    email: String,
    password: String,
    brief: String,
    selectedFile: String,
    createdAt: {
        type: Date,
        default: new Date()
    },
});

const UserMessage = mongoose.model('UserMessage', postSchema);

export default UserMessage;