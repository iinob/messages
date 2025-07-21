const express = require('express');
const ws = require('ws'); // websocket
const http = require('http'); // http server

// init servers
const app = express();
const server = http.createServer(app);
const wss = new ws.Server({ server });

const jsonHandler = require('./jsonhandler.js');

jsonHandler.update('userdata.json', 'gregarious', 'id', '69');

console.log(jsonHandler.read('userdata.json')); // first error of the project! forgot a parentheses

