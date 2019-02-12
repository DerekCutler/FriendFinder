var path = require('path');

module.exports = function(app) {
  // define the home page route
  app.get('/', function(req, res) {
      res.sendFile(path.join(__dirname, '../public/home.html'));
  });

  // define the about route
  app.get('/survey', function(req, res) {
      res.sendFile(path.join(__dirname, '../public/survey.html'));
  });
};