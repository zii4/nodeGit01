var http = require('http');

var server = http.createServer();

server.listen(5000, function(){
	console.log('Server running...');
});

setInterval(function(){
	server.close();
	console.log('Server closed.');
},15000);


server.on('request', function(){
	console.log('Request On');
});

server.on('connection', function(){
	console.log('Connection On');
});

server.on('close', function(){
	console.log('Close On');
});

