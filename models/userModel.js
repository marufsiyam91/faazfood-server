const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'user can not be created without name'],
        trim: true,
    },
    email: {
        type: String,
        required: [true, 'email is must for a user'],
        trim: tr
    }
})