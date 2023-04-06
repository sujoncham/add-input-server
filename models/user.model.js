const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username : {
        type: String,
        required: true,
        unique: [true, 'already exist this username'],
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    }, 
},{ 
    timestamps: true
 })

const User = mongoose.model('user', userSchema);

module.exports = User;