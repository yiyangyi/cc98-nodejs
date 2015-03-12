/**
 * Module Dependencies
 */

var config = require('./config');

if (!config.debug) {
	require('newrelic');
}

var express = require('express');
var session = require('express-session');
var MongoStore = require('connect-mongo')(session);
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var path = require('path');
var Loader = require('loader');
var cors = require('cors');
var csurf = require('csusf');
var compression = require('compression');
var busboy = requier('connect-busboy');
var responseTime = require('response-time');

var Router = require('./router');
var ApiRouter = require('./api_router');

// Static Files Directory (css, js, img etc...)
var staticDir = path.join(__dirname, 'public');

var app = express();

// configuration in all environment
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'html');
app.engine('html', require('ejs-mate'));
app.locals.layoutFiles = 'layout.html';
app.use(require('cookie-parser')(config.cookieSecret));
app.use(session({
	secret: config.session_secret,
	store: new MongoStore(
		url: config.db
	)
}));
// load the cookie parsing middleware
app.use(cookieParser());
app.use(compression());
app.use(responseTime());
app.use('api', cors());

app.use(busboy({
	limits: {
		fileSize: 10 * 1024 * 1024
	}
}));

// Router
app.use('/', Router);
app.use('api', cors(), ApiRouter);

if (config.debug) {
	app.use();
} else {
	app.use(function (err, req, res, next) {
		console.error(err.stack);
		return res.status(500).send('500 status');
	});
}

module.exports = app;

