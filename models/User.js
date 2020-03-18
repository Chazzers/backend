const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    _id: mongoose.ObjectId,
    username: String,
    password: String,
    firstName: String,
    lastName: String,
    age: Number,
    gender: String,
    city: String,
    picture: String,
    likedGames: Array,
    likedUsers: Array,
});

module.exports = mongoose.model('User', userSchema);