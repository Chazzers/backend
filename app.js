// get dependencies through require()
const express = require('express');
const session = require('express-session');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
require("dotenv").config();

// get controller functions through require
const renderHome = require('./controllers/renderHome');
const renderAbout = require('./controllers/renderAbout');
const renderContact = require('./controllers/renderContact');
const renderCreateAccount = require('./controllers/renderCreateAccount');
const renderGameList = require('./controllers/renderGameList');
const renderLogin = require('./controllers/renderLogin');
const renderProfile = require('./controllers/renderProfile');

const likeGame = require('./controllers/likeGame');
const createAccount = require('./controllers/createAccount');
const login = require('./controllers/login');

const uri = process.env.MONGODB_URI;
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true, dbName: 'gamedatingapp' });

const secret = process.env.SESSION_SECRET;
const sess = {
	secret: secret,
	resave: false, 
	saveUninitialized: true
};

// start express server
const app = express();

const port = 3000;

app.set('view engine', 'ejs');

// get home page and respond with hello world; req means request and res means response
app.use(bodyParser.urlencoded({ extended: true }))
	.use(session(sess))
	.get('/', renderHome)
	.use(express.static('assets'))
	.get('/about', renderAbout)
	.get('/contact', renderContact)
	.get('/create-account', renderCreateAccount)
	.get('/login', renderLogin)
	.get('/game-list', renderGameList)
	.get('/profile', renderProfile)

	.post('/account-created', createAccount)
	.post('/logged-in', login)
	.post('/liked-game', likeGame)
	// make the app listen to the port
	.listen(process.env.PORT || port, () => console.log(`Example app listening on port ${port}!`));
