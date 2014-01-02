
/**
 * Module dependencies.
 */

var express = require('express');
var routes = require('./routes');
var user = require('./routes/user');
var http = require('http');
var path = require('path');
var hbs = require('hbs');



var app = express();

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'html');
app.engine('html', hbs.__express);
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.bodyParser());

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

//Get operations scripts
var createEngine = require('./ec2_create.js');
var viewEngine = require('./ec2_describe.js');
var startEngine = require('./ec2_start.js');
var stopEngine = require('./ec2_stop.js');
var rebootEngine = require('./ec2_reboot.js');
var terminateEngine = require('./ec2_terminate.js');
var imageEngine = require('./ec2_ami.js');

//Code for web routes
app.get('/', function (req, res) {
    viewEngine.process(function(instances){
		res.render('index', {instances: instances});
    });  
});

app.get('/create', function (req, res) {
	var params  = req.param('params');
    createEngine.process(params, function(callback){
        res.render('create', {status: callback});
    });  
});

app.get('/start', function(req, res){
	var params  = req.param('params');
    startEngine.process(params, function(callback){
        res.render('start', {status: callback});
    });  
});

app.get('/stop', function(req, res){
	var params  = req.param('params');
    stopEngine.process(params, function(callback){
        res.render('stop', {status: callback});
    });  
});

app.get('/reboot', function(req, res){
	var params  = req.param('params');
    rebootEngine.process(params, function(callback){
        res.render('reboot', {status: callback});
    });  
});

app.get('/terminate', function(req, res){
	var params  = req.param('params');
    terminateEngine.process(params, function(callback){
        res.render('terminate', {status: callback});
    });  
});

app.get('/ami', function(req, res){
	var params  = req.param('params');
    imageEngine.process(params, function(callback){
        res.render('ami', {status: callback});
    });  
});


//Kick-off http server
http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
