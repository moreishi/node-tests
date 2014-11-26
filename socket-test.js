var io = require('socket.io')(8080);

io.on('connection', function(socket) {

	socket.on('message', function(msg) {
		socket.broadcast.emit('message', msg);
		socket.emit('message', msg);
	});

});

console.log('listening to port 8080');