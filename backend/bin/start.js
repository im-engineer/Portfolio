'use strict'
require('@babel/polyfill');
require('@babel/register');

const app = require('../app').default;
var config =  require('../config')
console.log("🚀 ~ file: start.js:7 ~ config:", config.config.Port)
require("dotenv").config;
var port = process.env.PORT || config.config.Port;
var http = require('http');
var server = http.createServer(app);
server.listen(port);

server.on('listening',() => {
    console.log("Server created successfully.listen port no:" +port)
})