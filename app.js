// get dependencies through require()
const express = require('express');
const fetch = require('fetch');

// get controller functions through require
const renderHome = require('./controllers/renderHome');
const renderAbout = require('./controllers/renderAbout');
const renderContact = require('./controllers/renderContact');

// start express server
const app = express();
// assign 3000 to port variable
const port = 3000;

app.set('view engine', 'ejs');

// get home page and respond with hello world; req means request and res means response
app.get('/', renderHome);
app.get('/about', renderAbout);
app.get('/contact', renderContact);


app.use(express.static('assets'));

// make the app listen to the port
app.listen(port, () => console.log(`Example app listening on port ${port}!`));
