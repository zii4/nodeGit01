var http = require('http');

var server = http.createServer(function(request, response){
	response.writeHead(200,{'Content-Type':'text/html'});
	response.end('<H1>Web Server with node.js</H1>');
	
});

server.listen(5000, function(){
	console.log('Server running...');
});