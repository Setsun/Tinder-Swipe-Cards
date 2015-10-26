// module dependencies
var http = require('http');
var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var port = process.env.PORT || 3000;

// routes
var routes = require('./routes/index');

// create our express app
var app = express();
app.set('port', port);

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// setup static assets
app.use(express.static(path.join(__dirname, 'public')));
app.use(favicon(path.join(__dirname, 'public/img', 'favicon.ico')));

// http routes
app.use('/', routes);

// initialize the server
var server = http.createServer(app);
server.listen(port);
