// ==========================================
// Dependencies
// ==========================================

var express = require('express');
// var path = require('path');

// ==========================================
// Sets up the Express App
// ==========================================

var app = express();
var PORT = process.env.PORT || 3000;

// ==========================================
// Sets up the Express app to handle data parsing
// ==========================================

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// app.use(express.text());
app.use(express.json({ type: 'application/vnd.api+json' }));

// ==========================================
// Starts the server to begin listening
// ==========================================
app.listen(PORT, function() {
  console.log('App listening on PORT ' + PORT);
});

// ==========================================
// Routes
// ==========================================
// html routes
require('./app/routing/htmlRoutes.js')(app);
// api routes
require('./app/routing/apiRoutes.js')(app);