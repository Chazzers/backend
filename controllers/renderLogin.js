function renderLogin(req, res) {
    res.render("login", { title: "Login or sign up" });
}

module.exports = renderLogin;