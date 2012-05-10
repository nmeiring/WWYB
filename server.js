var http = require("http");
var url = require('url');
var express = require('express');

function start (route, handle) {
    var onRequest = function(request, res) {
        
      
        var pathname = url.parse(request.url).pathname;
        console.log("request for " + pathname + " recieved.");
            
        route(handle, pathname, res);
    }

    var app = express.createServer(onRequest);
    app.listen(8888);
    
    app.configure(function(){
        app.set('views', __dirname + '/views');
        console.log(app.settings.views)
        app.set('view engine', 'jade');
        console.log(app.settings.view_engine);
        app.use(express.bodyParser());
        app.use(express.methodOverride());
        app.use(app.router);
        app.use(express.static(__dirname + '/public'));
      });
    
    console.log("Express server listening on port %d in %s mode", app.address().port, app.settings.env);
}


// Configuration






exports.start = start;