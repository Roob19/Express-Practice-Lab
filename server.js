//require modules
// Load express
const express = require('express');
const path = require('path');

//require the database
const dreamCarsDb = require('./data/dream-cars-db');

// Create our express app
const app = express();

// Configure the app (app.set)
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Mount middleware (app.use)

// Mount routes
// Define a "root" route directly on app
app.get('/', function (req, res) {
    res.redirect('/home');
});

app.get('/home', function (req, res) {
    res.render('home');
});

app.get('/dreamCars', function(req, res) {
    res.render('dreamCars/index', {
        dreamCars: dreamCarsDb.getAll()
    });
});

// Tell the app to listen on port 3000
// for HTTP requests from clients
app.listen(5150, function () {
    console.log('Listening on port 5150');
});