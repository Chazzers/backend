const User = require('../models/User');
const mongoose = require('mongoose');

function createAccount(req, res) {
    const { username, password, firstName, lastName, age, gender, city } = req.body;
    const newUser = new User({
        _id: new mongoose.Types.ObjectId(),
        username: username,
        password: password,
        firstName: firstName,
        lastName: lastName,
        age: age,
        gender: gender,
        city: city
    })
    User.create(newUser)
    res.redirect('/login');
    return res.end();
}

module.exports = createAccount;