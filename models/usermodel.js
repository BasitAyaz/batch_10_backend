const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: [true, "First Name is Required"],
    },
    lastName: {
        type: String,
    },
    email: {
        type: String,
        required: [true, "Email is Required"],
        unique: true,
        match: [/\S+@\S+\.\S+/, 'Invalid email address'],
    },
    password: {
        type: String,
        required: [true, "Password is Required"],
        minlength: [6, "Password must be at least 8 characters long"],
    },
    created_at: {
        type: Date,
        default: Date.now
    },
    updated_at: {
        type: Date,
        default: Date.now
    }
});

const UserModel = mongoose.model('Users', UserSchema);
module.exports = UserModel;