const fetch = require('node-fetch');
const User = require("../models/User");
async function renderGameList(req, res) {
    const currentUsername = req.session.user.username;
    const user = await User.findOne({"username": currentUsername});
    const likedGames = user.likedGames;
    const newLikedGames = likedGames.map(d => d.id);

    // const likedGames = req.session.user.likedGames;
    await fetch('https://api.rawg.io/api/games')
	.then(res => res.json())
    .then(games => games.results)
    .then(games => {
        const newGames = games.filter(d => newLikedGames.indexOf(d.id) === -1);
        return newGames;
    })
    .then(games => {
        return res.render('gameList', {
            title: "Like your favorite games",
            games: games,
            likedGames: likedGames
        })
    })
}

module.exports = renderGameList;