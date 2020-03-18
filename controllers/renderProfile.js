const fetch = require('node-fetch');

async function renderProfile(req, res, next) {
    try {
        const { firstName, lastName, age, gender, city, picture, likedGames, likedUsers } = req.session.user;
        const newLikedGames = likedGames.map(d => d.id);
        // console.log(newLikedGames);

        await fetch('https://api.rawg.io/api/games')
            .then(res => res.json())
            .then(games => games.results)
            .then(games => {
                const newGames = games.filter(d => newLikedGames.some(f => f == d.id));
                console.log(newGames);
                return newGames;
            })
            .then(games => {
                res.render('profile', { 
                    title: 'Profile',
                    firstName:firstName, 
                    lastName: lastName, 
                    age: age, 
                    gender: gender, 
                    city: city,
                    picture: picture, 
                    likedGames: games,
                    likedUsers: likedUsers
                })
            })  
             
    } catch(error) {
        next(error)
    }
}

module.exports = renderProfile;