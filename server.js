var http = require("http");
var url = require('url');
var express = require('express');

function start (route, handle) {
    var onRequest = function(request, res) {
        var pathname = url.parse(request.url).pathname;
        console.log("request for " + pathname + " recieved.");
            
        route(handle, pathname, res);       
    }

    var app = express.createServer(onRequest).listen(8888);
    if (app.configure) {
        console.log('app exists');
    }
    
    app.configure(function(){
        app.set('views', __dirname + '/views');
        app.set('view engine', 'jade');
        app.use(express.bodyParser());
        app.use(express.methodOverride());
        app.use(app.router);
        app.use(express.static(__dirname + '/public'));
      });
      
      app.configure('development', function(){
        app.use(express.errorHandler({ dumpExceptions: true, showStack: true }));
      });
      
      app.configure('production', function(){
        app.use(express.errorHandler());
      });
    
    console.log(app.views)
    console.log("Express server listening on port %d in %s mode", app.address().port, app.settings.env);
}


// Configuration






exports.start = start;