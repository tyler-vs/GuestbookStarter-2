/*

start here.

this file sets up the server. it does not export <???>
*/
var express = require('express');
var config = require('./server/configure');
var mongoose = require('mongoose');

var app = express();    // middleman, to handle traffic
//sets the default port for our server
app.set('port', process.env.PORT || 3000);
//sets the directory for views (pages) 
app.set('views', __dirname + '/views');
//uses our server configuration file (required as a module)
app = config(app);

//*****Use mongoose to connect with your database
mongoose.connect('mongodb://localhost/logbook');    // 
mongoose.connection.on('open', function(){
    console.log('Mongoose connected');
});

var server = app.listen(app.get('port'), function() {
	console.log('Server up: http://localhost:' + app.get('port'));
});