'use strict';

var express = require('express');
var routes = require('./app/routes/index.js');
var port = process.env.PORT;

var app = express();

routes(app);

app.listen(port, function() {
    console.log('Listening on port ' + port + '...');
});