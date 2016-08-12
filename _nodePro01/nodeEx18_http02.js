var http = require('http');

var server = http.createServer();

server.listen(5000, function(){
	console.log('Server running...');
});

setInterval(function(){
	server.close();
	console.log('Server closed.');
},10000);
