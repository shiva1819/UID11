var express = require('express');
// var fs = require('fs');

var app = express();

app.get('/', function(req,res){
	res.sendFile(__dirname + "/index.html");
});
app.get('/home', function(req,res){
	res.sendFile(__dirname + "/home.html");
});

app.listen('2211');
console.log('port running at 2211...');