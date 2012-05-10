
/**
 * Module dependencies.
 */

var $ = require('jQuery');
var server = require("./server");
var router = require('./routes/router');
var requestHandlers = require('./requestHandlers');


// Routes

var handle = {}
handle['/'] = requestHandlers.home;
//handle['/'] = requestHandlers.upload;
handle['/posts'] = requestHandlers.posts;


$(function(){
  console.log('domready--jquery go')
});

server.start(router.route, handle);




