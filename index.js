const express = require('express');
const ws = require('ws'); // websocket
const http = require('http'); // http server

// init servers
const app = express();
const server = http.createServer(app);
const wss = new ws.Server({ server });

const jsonHandler = require('./jsonhandler.js');
const messageHandler = require('./messagehandler.js'); // rename? this one is bad

const PORT = '8080'; // replace with process.env later

//jsonHandler.update('userdata.json', 'gregarious', 'id', '69');

const msg = new messageHandler.Message('main', 'SYSTEM', 'hi', '#000000');

console.log(msg.time);

wss.on('connection', (socket, req) => {
	console.log('client connected');
	socket.on('message', (message) => {
		console.log(message.toString());
		socket.send('hello client!');
	});
});

app.use(express.static('public', {
	extensions: ['html'] // update with new exts
}));

server.listen(PORT, () => {
	console.log(`server is running on http://localhost:${PORT}`);
});
