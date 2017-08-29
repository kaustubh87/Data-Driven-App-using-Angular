var express = require('express');

var app = express();

app.get('/', function(request, response) {

    response.sendFile('/angularregistration/index.html');

});