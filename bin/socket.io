#!/usr/local/env node
var app = require('../app');
var io = require('socket.io')(app);

io.on('connection', function (socket) {
	socket.emit('new', {hello: 'world'});
	socket.on('my other event', function (data) {
		console.log(data);
	});

});

// custom namespace
var nsp = io.of('/my-namespace');
nsp.on('connection', function (socket){
	console.log('someone connected on the path of my-namespace');
});
nsp.emit('hi', 'everyone');

// On the client !!!
// <script src="/socket.io/socket.io.js"></script>
// <script>
//   var socket = io.connect('http://localhost');
//   socket.on('news', function (data) {
//     console.log(data);
//     socket.emit('my other event', { my: 'data' });
//   });
// </script>


