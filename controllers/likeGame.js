const User = require('../models/User');

async function likeGame(req, res, next) {
    try {
        const users = await User.findOne({username: 'chazzers'});
        const likedGames = users.likedGames;
        likedGames.push(req.body)
        const distinctLikes = [...new Set(likedGames.map(d => d.id))];
        const newLikes = [];

        distinctLikes.forEach(d => newLikes.push({id: d}));

        await users.updateOne({"likedGames": newLikes});
        
        res.redirect("/game-list");
        res.end();
    } catch(error) {
        next(error);
    }

}

module.exports = likeGame;