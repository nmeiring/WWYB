var http = require("http");
var url = require('url');
var express = require('express');
var configure = require('./configure');

function start (route, handle) {
    var onRequest = function(request, res) {
        
      
        var pathname = url.parse(request.url).pathname;
        console.log("request for " + pathname + " recieved.");
            
        route(handle, pathname, res);
    }

    var app = module.exports = express.createServer(onRequest);
    app.listen(8888);
    
   app.configure(configure.all(app));
    
    console.log("Express server listening on port %d in %s mode", app.address().port, app.settings.env);
}


// Configuration






exports.start = start;