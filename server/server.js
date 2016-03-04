var express = require("express");
var path = require('path');
var bodyParser = require('body-parser');
var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var config = require('../webpack.config.js');
var mongoose = require('mongoose');

var app = express();


var databaseCollection = require('../data/db/MongooseSchema.model.js');

//Database Names have an 's' added
var db = 'mongodb://localhost/databaseName';

mongoose.connect(db);

var port = process.env.PORT || 3000;

app.use(express.static(__dirname + '/../'));

app.listen(port, function () {
 console.log('Proxy listening on port 3000!');
});



new WebpackDevServer(webpack(config), {
 hot: true,
 historyApiFallback: true,
 proxy: {
   "*": "http://localhost:3000"
 }
}).listen(3001, 'localhost', function (err, result) {
 if (err) {
   console.log(err);
 }
  console.log('Listening at localhost:3001');
});



/////////////////////////////
