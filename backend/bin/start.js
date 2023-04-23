'use strict'
require('@babel/polyfill');
require('@babel/register');

const app = require('../app').default;
require("dotenv").config;
var port = process.env.PORT || 2345;
var http = require('http');
var server = http.createServer(app);
server.listen(port);

server.on('listening',() => {
    console.log("Server created successfully.listen port no:" +port)
})