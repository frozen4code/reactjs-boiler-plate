var express = require('express');
var path = require('path');

// ES6 Support
require('babel-core/register');
require('babel-polyfill');

// React Routes
var routes = require('./app/routes');

//Express App
var app = express();

//PUG HTML Preprocessor
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');
app.set('port', process.argv.PORT || 3000);
app.use(express.static(path.join(__dirname, 'public')));

//Render index
app.get('/', (req, res)=>{
  res.render('index', {});
});

// Production error handler
if (app.get('env') === 'production') {
  app.use(function(err, req, res, next) {
    console.error(err.stack);
    res.sendStatus(err.status || 500);
  });
}

//
app.listen(app.get('port'), function() {
  console.log('Express server listening on port ' + app.get('port'));
});

module.exports = app;
