var express = require('express');

exports.all = (function (app) {
    return function() {
        app.set('views', __dirname + '/views');
        console.log(app.settings.views)
        app.set('view engine', 'jade');
        console.log(app.settings.view_engine);
        app.use(express.bodyParser());
        app.use(express.methodOverride());
        app.use(app.router);
        app.use(express.static(__dirname + '/public'));
    }
})

