function renderHome(req, res) {
    if(!req.session.user) {
        res.redirect('/login')
    } else {
        res.redirect('/game-list')
    }  
}

module.exports = renderHome;