// Import userSchema
const User = require('../models/User');

async function unlikeGame(req, res, next) {
    try {
        // Store logged in username in variable
        const currentUsername = req.session.user.username;
        // search for the logged in user in the database
        const users = await User.findOne({username: currentUsername});
        // Store likedGames array in variable
        const likedGames = users.likedGames;
        // Push the the value of the likedGame into the likedGames array
        const newLikedGames = likedGames.filter(d => req.body.id != d.id);
        // Filter the duplicates out of the likedGames array
        const distinctLikes = [...new Set(newLikedGames.map(d => d.id))];
        // Create a new array to store the new liked games
        const newLikes = [];
        // Push the newly liked games into the array
        distinctLikes.forEach(d => newLikes.push({id: d}));

        // update logged in user
        req.session.user.likedGames = newLikes;
        
        // Update the User in the database
        await users.updateOne({"likedGames": newLikes});
        
        // Redirect the user back to the game list
        res.redirect("/profile");

        // End response process
        res.end();
    } catch(error) {
        next(error);
    }

}
// Export the function to the app.js file
module.exports = unlikeGame;