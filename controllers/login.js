const User = require("../models/User")
const fetch = require("node-fetch");
require("dotenv").config

async function login(req, res, next) {
    try {
        const { username, password } = req.body;
        await User.findOne({
           "username": username.toLowerCase()
        }, (err, data) => {
            if(err) {
                console.log(err);
            }
    
            if(data.password === password) {
                req.session.user = {
                    username: data.username,
                    password: data.password,
                    firstName: data.firstName,
                    lastName: data.lastName,
                    age: data.age,
                    gender: data.gender,
                    city: data.city,
                    picture: data.picture,
                    likedGames: data.likedGames,
                    likedUsers: data.likedUsers
                }
                res.redirect("/");
            }
        })  
    } catch(error) {
        next(error);
    }
}

module.exports = login;